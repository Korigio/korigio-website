import nodemailer from "nodemailer";
import type { FeedbackType } from "@/lib/feedback-types";

const SUBJECT: Record<FeedbackType, string> = {
  bug: "Bug report",
  feature: "Feature request",
  question: "Question",
};

export async function sendFeedbackEmail(input: {
  type: FeedbackType;
  name: string;
  email: string;
  message: string;
}) {
  const to = process.env.FEEDBACK_TO_EMAIL?.trim() || "info@korigio.com";
  const from =
    process.env.FEEDBACK_FROM_EMAIL?.trim() || "Korigio <info@korigio.com>";
  const subject = `[Korigio] ${SUBJECT[input.type]} from ${input.name}`;
  const text = [
    `Type: ${SUBJECT[input.type]}`,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    "",
    input.message,
  ].join("\n");

  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: input.email,
        subject,
        text,
      }),
    });
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(`Resend failed (${response.status}): ${detail}`);
    }
    return;
  }

  const pass = process.env.SMTP_PASS ?? "";
  const host = process.env.SMTP_HOST?.trim() || (pass ? "smtp.strato.de" : "");
  if (host) {
    const port = Number(process.env.SMTP_PORT || (host === "smtp.strato.de" ? 465 : 587));
    const user = process.env.SMTP_USER?.trim() || "info@korigio.com";
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    await transporter.sendMail({
      from,
      to,
      replyTo: input.email,
      subject,
      text,
    });
    return;
  }

  throw new Error("Set SMTP_PASS (Strato mailbox password) or RESEND_API_KEY to send feedback email");
}
