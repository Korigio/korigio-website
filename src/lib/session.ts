import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { SESSION_COOKIE } from "@/lib/constants";
import { findUserById, toPublicUser, type PublicUser } from "@/lib/users";

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30;

function secret() {
  return process.env.SESSION_SECRET || "korigio-dev-session-secret";
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

function encodeSession(userId: string, expiresAt: number) {
  const payload = Buffer.from(JSON.stringify({ userId, expiresAt })).toString(
    "base64url",
  );
  return `${payload}.${sign(payload)}`;
}

function decodeSession(token: string): { userId: string; expiresAt: number } | null {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) {
    return null;
  }
  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return null;
  }
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      userId: string;
      expiresAt: number;
    };
    if (!data.userId || typeof data.expiresAt !== "number") {
      return null;
    }
    if (data.expiresAt < Date.now()) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export async function createSession(userId: string) {
  const jar = await cookies();
  const expiresAt = Date.now() + SESSION_TTL_MS;
  jar.set(SESSION_COOKIE, encodeSession(userId, expiresAt), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(SESSION_COOKIE);
}

export async function getSessionUser(): Promise<PublicUser | null> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) {
    return null;
  }
  const session = decodeSession(token);
  if (!session) {
    return null;
  }
  const user = await findUserById(session.userId);
  return user ? toPublicUser(user) : null;
}
