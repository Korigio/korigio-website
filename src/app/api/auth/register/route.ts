import { NextResponse } from "next/server";
import { createSession, getSessionUser } from "@/lib/session";
import { createUser } from "@/lib/users";
import { isLocale } from "@/lib/i18n";
import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE } from "@/lib/constants";

export async function POST(request: Request) {
  const existing = await getSessionUser();
  if (existing) {
    return NextResponse.json({ user: existing });
  }

  const body = (await request.json().catch(() => null)) as {
    email?: string;
    password?: string;
    name?: string;
    workshopName?: string;
  } | null;

  const email = body?.email?.trim() ?? "";
  const password = body?.password ?? "";
  const name = body?.name?.trim() ?? "";
  const workshopName = body?.workshopName?.trim() ?? "";

  if (!email || !password || !name || !workshopName) {
    return NextResponse.json({ error: "required" }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ error: "weak" }, { status: 400 });
  }

  const jar = await cookies();
  const localeCookie = jar.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

  const result = await createUser({
    email,
    password,
    name,
    workshopName,
    locale,
  });
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 409 });
  }

  await createSession(result.user.id);
  return NextResponse.json({
    user: {
      id: result.user.id,
      email: result.user.email,
      name: result.user.name,
      workshopName: result.user.workshopName,
      locale: result.user.locale,
      createdAt: result.user.createdAt,
    },
  });
}
