import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const MIN_AGE_MS = 800;
const MAX_AGE_MS = 6 * 60 * 60 * 1000;

export type FeedbackTicket = {
  nonce: string;
  issuedAt: string;
  sig: string;
};

function hmacSecret() {
  return (
    process.env.FEEDBACK_HMAC_SECRET?.trim() ||
    process.env.SMTP_PASS ||
    process.env.RESEND_API_KEY ||
    "korigio-feedback-dev"
  );
}

function sign(value: string) {
  return createHmac("sha256", hmacSecret()).update(value).digest("hex");
}

function equal(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function issueFeedbackTicket(): FeedbackTicket {
  const nonce = randomBytes(16).toString("hex");
  const issuedAt = Date.now().toString();
  return { nonce, issuedAt, sig: sign(`${nonce}.${issuedAt}`) };
}

export function verifyFeedbackTicket(ticket: {
  nonce?: string;
  issuedAt?: string;
  sig?: string;
}): boolean {
  const nonce = ticket.nonce?.trim() ?? "";
  const issuedAt = ticket.issuedAt?.trim() ?? "";
  const sig = ticket.sig?.trim() ?? "";
  if (!nonce || !issuedAt || !sig || !/^[0-9]+$/.test(issuedAt)) {
    return false;
  }
  const age = Date.now() - Number(issuedAt);
  if (age < MIN_AGE_MS || age > MAX_AGE_MS) {
    return false;
  }
  return equal(sig, sign(`${nonce}.${issuedAt}`));
}
