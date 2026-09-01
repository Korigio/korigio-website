"use client";

import Link from "next/link";
import { useVisitorOs } from "@/components/os/useVisitorOs";
import type { Dictionary } from "@/lib/i18n";
import { withDetectedOs, type DesktopOs } from "@/lib/os";

type Props = {
  dict: Dictionary;
  detected: DesktopOs | null;
};

export function HomePlatformCtas({ dict, detected }: Props) {
  const copy = withDetectedOs(dict, useVisitorOs(detected));

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/download"
          className="rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-cta-foreground hover:bg-cta-hover"
        >
          {copy.primary}
        </Link>
        <Link
          href="/features"
          className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground hover:bg-surface-strong"
        >
          {dict.hero.secondary}
        </Link>
      </div>
      <p className="mt-5 text-sm text-subtle">
        {copy.osHint}
        <span className="mx-2 text-faint">·</span>
        {dict.hero.languages}
      </p>
    </>
  );
}

export function HomeOfflineCta({ dict, detected }: Props) {
  const copy = withDetectedOs(dict, useVisitorOs(detected));

  return (
    <>
      <p className="mt-4 max-w-2xl text-muted">{copy.offlineBody}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {dict.offline.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
            {point}
          </li>
        ))}
      </ul>
      <Link
        href="/download"
        className="mt-10 inline-flex rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-cta-foreground hover:bg-cta-hover"
      >
        {copy.primary}
      </Link>
    </>
  );
}
