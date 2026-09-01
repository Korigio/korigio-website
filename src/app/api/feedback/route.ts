import { NextResponse } from "next/server";
import { isFeedbackType } from "@/lib/feedback-types";
import { saveFeedback } from "@/lib/feedback";
import { verifyFeedbackTicket } from "@/lib/feedback-ticket";
import { sendFeedbackEmail } from "@/lib/send-feedback-email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    type?: string;
    name?: string;
    email?: string;
    message?: string;
    website?: string;
    confirmed?: boolean;
    ticket?: { nonce?: string; issuedAt?: string; sig?: string };
  } | null;

  // Honeypot: bots that fill hidden fields are dropped quietly.
  if (body?.website) {
    return NextResponse.json({ ok: true });
  }

  if (body?.confirmed !== true || !verifyFeedbackTicket(body.ticket ?? {})) {
    return NextResponse.json({ error: "confirm" }, { status: 400 });
  }

  const type = body?.type;
  const name = body?.name?.trim() ?? "";
  const email = body?.email?.trim() ?? "";
  const message = body?.message?.trim() ?? "";

  if (
    !isFeedbackType(type) ||
    !name ||
    !email ||
    !message ||
    !EMAIL_RE.test(email) ||
    name.length > 200 ||
    email.length > 254 ||
    message.length > 8000
  ) {
    return NextResponse.json({ error: "required" }, { status: 400 });
  }

  try {
    await sendFeedbackEmail({ type, name, email, message });
  } catch (error) {
    console.error("feedback email failed", error);
    return NextResponse.json({ error: "send" }, { status: 502 });
  }

  try {
    await saveFeedback({ type, name, email, message });
  } catch (error) {
    console.error("feedback store failed", error);
  }

  return NextResponse.json({ ok: true });
}
