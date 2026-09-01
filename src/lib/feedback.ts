import { randomBytes } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { FeedbackMessage } from "@/lib/feedback-types";

const DATA_DIR = path.join(process.cwd(), "data");
const FEEDBACK_FILE = path.join(DATA_DIR, "feedback.json");

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(file, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function saveFeedback(
  input: Omit<FeedbackMessage, "id" | "createdAt">,
) {
  const messages = await readJson<FeedbackMessage[]>(FEEDBACK_FILE, []);
  const row: FeedbackMessage = {
    id: randomBytes(12).toString("hex"),
    createdAt: new Date().toISOString(),
    ...input,
  };
  messages.push(row);
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(FEEDBACK_FILE, JSON.stringify(messages, null, 2), "utf8");
  return row;
}
