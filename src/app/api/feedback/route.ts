import { NextResponse } from "next/server";
import { isFeedbackType } from "@/lib/feedback-types";
import { saveFeedback } from "@/lib/feedback";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    type?: string;
    name?: string;
    email?: string;
    message?: string;
  } | null;

  const type = body?.type;
  const name = body?.name?.trim() ?? "";
  const email = body?.email?.trim() ?? "";
  const message = body?.message?.trim() ?? "";

  if (!isFeedbackType(type) || !name || !email || !message) {
    return NextResponse.json({ error: "required" }, { status: 400 });
  }

  await saveFeedback({ type, name, email, message });
  return NextResponse.json({ ok: true });
}
