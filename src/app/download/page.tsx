import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, getLocale } from "@/lib/i18n";
import { getLatestRelease, type ReleaseAsset } from "@/lib/releases";

export const metadata: Metadata = { title: "Download" };

export default async function DownloadPage() {
  const dict = getDictionary(await getLocale());
  const release = await getLatestRelease();
  const status = release.version
    ? dict.download.statusReady.replace("{version}", release.version)
    : dict.download.statusEmpty;

  const cards: Array<{
    os: string;
    hint: string;
    asset: ReleaseAsset | null;
  }> = [
    { os: dict.download.windows, hint: dict.download.windowsHint, asset: release.windows },
    { os: dict.download.macos, hint: dict.download.macosHint, asset: release.macos },
    { os: dict.download.linux, hint: dict.download.linuxHint, asset: release.linux },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
        {dict.download.kicker}
      </p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-white sm:text-5xl">
        {dict.download.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-zinc-400">{dict.download.subtitle}</p>
      {release.version ? (
        <p className="mt-6 inline-flex rounded-full border border-white/12 px-3 py-1 text-sm text-zinc-400">
          v{release.version}
        </p>
      ) : null}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.os}
            className={`rounded-[28px] border border-white/8 bg-white/3 p-6 ${
              card.asset ? "" : "opacity-55"
            }`}
          >
            <h2 className="text-xl text-white">{card.os}</h2>
            <p className="mt-1 text-sm text-zinc-500">
              {card.asset ? card.asset.name : card.hint}
            </p>
            {card.asset ? (
              <a
                href={card.asset.url}
                className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200"
              >
                {dict.download.cta}
              </a>
            ) : (
              <p className="mt-6 text-sm text-zinc-500">{dict.download.pending}</p>
            )}
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-zinc-500">{status}</p>
      <p className="mt-4 text-sm text-zinc-500">
        {dict.download.loginHint}{" "}
        <Link href="/register" className="text-white underline-offset-4 hover:underline">
          {dict.nav.register}
        </Link>
      </p>
    </div>
  );
}
