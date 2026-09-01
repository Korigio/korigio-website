import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Locale } from "@/lib/constants";

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

export type StoredUser = {
  id: string;
  email: string;
  name: string;
  workshopName: string;
  locale: Locale;
  passwordHash: string;
  passwordSalt: string;
  createdAt: string;
};

export type PublicUser = Omit<
  StoredUser,
  "passwordHash" | "passwordSalt"
>;

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  workshop: string;
  message: string;
  createdAt: string;
};

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(file, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson(file: string, value: unknown) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(file, JSON.stringify(value, null, 2), "utf8");
}

export function toPublicUser(user: StoredUser): PublicUser {
  const { passwordHash: _h, passwordSalt: _s, ...rest } = user;
  void _h;
  void _s;
  return rest;
}

export async function listUsers(): Promise<StoredUser[]> {
  return readJson<StoredUser[]>(USERS_FILE, []);
}

export async function findUserByEmail(email: string) {
  const users = await listUsers();
  return users.find((user) => user.email === email.toLowerCase()) ?? null;
}

export async function findUserById(id: string) {
  const users = await listUsers();
  return users.find((user) => user.id === id) ?? null;
}

export function hashPassword(password: string, salt = randomBytes(16).toString("hex")) {
  const hash = scryptSync(password, salt, 64).toString("hex");
  return { hash, salt };
}

export function verifyPassword(password: string, hash: string, salt: string) {
  const next = scryptSync(password, salt, 64);
  const prev = Buffer.from(hash, "hex");
  if (next.length !== prev.length) {
    return false;
  }
  return timingSafeEqual(next, prev);
}

export async function createUser(input: {
  email: string;
  name: string;
  workshopName: string;
  password: string;
  locale: Locale;
}) {
  const users = await listUsers();
  const email = input.email.trim().toLowerCase();
  if (users.some((user) => user.email === email)) {
    return { error: "exists" as const };
  }
  const { hash, salt } = hashPassword(input.password);
  const user: StoredUser = {
    id: randomBytes(12).toString("hex"),
    email,
    name: input.name.trim(),
    workshopName: input.workshopName.trim(),
    locale: input.locale,
    passwordHash: hash,
    passwordSalt: salt,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  await writeJson(USERS_FILE, users);
  return { user };
}

export async function updateUser(
  id: string,
  patch: Partial<Pick<StoredUser, "name" | "workshopName" | "locale">>,
) {
  const users = await listUsers();
  const index = users.findIndex((user) => user.id === id);
  if (index < 0) {
    return null;
  }
  users[index] = { ...users[index], ...patch };
  await writeJson(USERS_FILE, users);
  return users[index];
}

export async function saveMessage(input: Omit<ContactMessage, "id" | "createdAt">) {
  const messages = await readJson<ContactMessage[]>(MESSAGES_FILE, []);
  const row: ContactMessage = {
    id: randomBytes(12).toString("hex"),
    createdAt: new Date().toISOString(),
    ...input,
  };
  messages.push(row);
  await writeJson(MESSAGES_FILE, messages);
  return row;
}
