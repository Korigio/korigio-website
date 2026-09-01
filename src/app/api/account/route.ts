import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionUser } from "@/lib/session";
import { updateUser } from "@/lib/users";
import { isLocale } from "@/lib/i18n";
import { LOCALE_COOKIE } from "@/lib/constants";

export async function PATCH(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as {
    name?: string;
    workshopName?: string;
    locale?: string;
  } | null;

  const patch: { name?: string; workshopName?: string; locale?: typeof user.locale } =
    {};
  if (typeof body?.name === "string" && body.name.trim()) {
    patch.name = body.name.trim();
  }
  if (typeof body?.workshopName === "string" && body.workshopName.trim()) {
    patch.workshopName = body.workshopName.trim();
  }
  if (isLocale(body?.locale)) {
    patch.locale = body.locale;
    const jar = await cookies();
    jar.set(LOCALE_COOKIE, body.locale, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  const updated = await updateUser(user.id, patch);
  if (!updated) {
    return NextResponse.json({ error: "missing" }, { status: 404 });
  }

  return NextResponse.json({
    user: {
      id: updated.id,
      email: updated.email,
      name: updated.name,
      workshopName: updated.workshopName,
      locale: updated.locale,
      createdAt: updated.createdAt,
    },
  });
}
