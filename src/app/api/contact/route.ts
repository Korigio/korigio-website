import { NextResponse } from "next/server";
import { saveMessage } from "@/lib/users";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    name?: string;
    email?: string;
    workshop?: string;
    message?: string;
  } | null;

  const name = body?.name?.trim() ?? "";
  const email = body?.email?.trim() ?? "";
  const workshop = body?.workshop?.trim() ?? "";
  const message = body?.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "required" }, { status: 400 });
  }

  await saveMessage({ name, email, workshop, message });
  return NextResponse.json({ ok: true });
}
