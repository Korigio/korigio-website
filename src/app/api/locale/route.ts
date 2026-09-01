import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isLocale } from "@/lib/i18n";
import { LOCALE_COOKIE } from "@/lib/constants";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { locale?: string } | null;
  if (!isLocale(body?.locale)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const jar = await cookies();
  jar.set(LOCALE_COOKIE, body.locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  return NextResponse.json({ ok: true });
}
