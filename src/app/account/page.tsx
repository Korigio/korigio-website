import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getDictionary, getLocale } from "@/lib/i18n";
import { getSessionUser } from "@/lib/session";
import { getLatestRelease } from "@/lib/releases";

export const metadata: Metadata = { title: "Account" };

export default async function AccountPage() {
  const user = await getSessionUser();
  if (!user) {
    redirect("/login?next=/account");
  }
  const dict = getDictionary(await getLocale());
  const release = await getLatestRelease();
  const joined = new Date(user.createdAt).toLocaleDateString(user.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
        {dict.account.title}
      </p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-white">
        {dict.account.welcome.replace("{name}", user.name)}
      </h1>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="rounded-[28px] border border-white/8 bg-white/3 p-6">
          <p className="text-sm text-zinc-500">{dict.account.workshop}</p>
          <p className="mt-2 text-xl text-white">{user.workshopName}</p>
          <p className="mt-4 text-sm text-zinc-500">
            {dict.account.memberSince}
            <span className="mt-1 block text-zinc-300">{joined}</span>
          </p>
        </article>
        <article className="rounded-[28px] border border-white/8 bg-white/3 p-6">
          <p className="text-sm text-zinc-500">{dict.account.downloads}</p>
          <p className="mt-2 text-sm text-zinc-400">{dict.account.downloadsHint}</p>
          {release.windows ? (
            <a
              href={release.windows.url}
              className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200"
            >
              {dict.download.cta} · Windows
            </a>
          ) : (
            <Link
              href="/download"
              className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200"
            >
              {dict.nav.download}
            </Link>
          )}
        </article>
        <article className="rounded-[28px] border border-white/8 bg-white/3 p-6">
          <p className="text-sm text-zinc-500">{dict.account.settings}</p>
          <p className="mt-2 text-sm text-zinc-400">{dict.account.settingsHint}</p>
          <Link
            href="/account/settings"
            className="mt-5 inline-flex rounded-full border border-white/12 px-4 py-2 text-sm text-white hover:bg-white/6"
          >
            {dict.account.settings}
          </Link>
        </article>
      </div>
    </div>
  );
}
