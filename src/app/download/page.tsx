import type { Metadata } from "next";
import Link from "next/link";
import { DownloadCards } from "@/components/download/DownloadCards";
import { Requirements } from "@/components/download/Requirements";
import { getDictionary, getLocale } from "@/lib/i18n";
import { getVisitorDesktopOs } from "@/lib/visitor-os";
import { getLatestRelease } from "@/lib/releases";

export const metadata: Metadata = { title: "Download" };

export default async function DownloadPage() {
  const dict = getDictionary(await getLocale());
  const [release, detected] = await Promise.all([
    getLatestRelease(),
    getVisitorDesktopOs(),
  ]);
  const status = release.version
    ? dict.download.statusReady.replace("{version}", release.version)
    : dict.download.statusEmpty;

  const cards = [
    {
      id: "windows" as const,
      title: dict.download.windows,
      hint: dict.download.windowsHint,
      asset: release.windows,
    },
    {
      id: "macos" as const,
      title: dict.download.macos,
      hint: dict.download.macosHint,
      asset: release.macos,
    },
    {
      id: "linux" as const,
      title: dict.download.linux,
      hint: dict.download.linuxHint,
      asset: release.linux,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-subtle">
        {dict.download.kicker}
      </p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {dict.download.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{dict.download.subtitle}</p>
      {release.version ? (
        <p className="mt-6 inline-flex rounded-full border border-border px-3 py-1 text-sm text-muted">
          v{release.version}
        </p>
      ) : null}
      <DownloadCards cards={cards} detected={detected} dict={dict} />
      <p className="mt-8 max-w-2xl text-sm text-warning-muted">
        {dict.download.windowsCallout}{" "}
        <Link href="/install#windows" className="text-warning underline-offset-4 hover:underline">
          {dict.download.guide}
        </Link>
      </p>
      <p className="mt-4 max-w-2xl text-sm text-subtle">{status}</p>
      <p className="mt-4 max-w-2xl text-sm text-subtle">{dict.download.freeNote}</p>
      <Requirements dict={dict} detected={detected} />
    </div>
  );
}
