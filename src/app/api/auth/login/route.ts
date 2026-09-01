import { NextResponse } from "next/server";
import { createSession, getSessionUser } from "@/lib/session";
import { findUserByEmail, toPublicUser, verifyPassword } from "@/lib/users";

export async function POST(request: Request) {
  const existing = await getSessionUser();
  if (existing) {
    return NextResponse.json({ user: existing });
  }

  const body = (await request.json().catch(() => null)) as {
    email?: string;
    password?: string;
  } | null;

  const email = body?.email?.trim() ?? "";
  const password = body?.password ?? "";
  if (!email || !password) {
    return NextResponse.json({ error: "required" }, { status: 400 });
  }

  const user = await findUserByEmail(email);
  if (!user || !verifyPassword(password, user.passwordHash, user.passwordSalt)) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  await createSession(user.id);
  return NextResponse.json({ user: toPublicUser(user) });
}
