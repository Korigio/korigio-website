"use client";

import Link from "next/link";
import { useVisitorOs } from "@/components/os/useVisitorOs";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/i18n";
import type { DesktopOs } from "@/lib/os";
import type { ReleaseAsset } from "@/lib/releases";

export type DownloadCard = {
  id: DesktopOs;
  title: string;
  hint: string;
  asset: ReleaseAsset | null;
};

type Props = {
  cards: DownloadCard[];
  detected: DesktopOs | null;
  dict: Dictionary;
};

export function DownloadCards({ cards, detected, dict }: Props) {
  const os = useVisitorOs(detected);
  const featured = os ? (cards.find((card) => card.id === os) ?? null) : null;
  const rest = featured ? cards.filter((card) => card.id !== os) : cards;
  const ordered = featured ? [featured, ...rest] : rest;

  return (
    <div
      className={cn(
        "mt-10 grid gap-4",
        featured ? "md:grid-cols-2" : "md:grid-cols-3",
      )}
    >
      {ordered.map((card) => {
        const isFeatured = featured?.id === card.id;
        return (
          <article
            key={card.id}
            className={cn(
              "flex flex-col rounded-[28px] border border-border bg-surface",
              card.asset ? "" : "opacity-55",
              isFeatured
                ? "border-border-strong bg-surface-strong p-8 md:col-span-2 md:rounded-[32px] md:p-10"
                : featured
                  ? "p-5"
                  : "p-6",
            )}
          >
            {isFeatured ? (
              <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
                {dict.download.recommended}
              </p>
            ) : null}
            <h2
              className={cn(
                "text-foreground",
                isFeatured ? "mt-3 text-3xl sm:text-4xl" : "text-xl",
              )}
            >
              {card.title}
            </h2>
            <p
              className={cn(
                "mt-1 text-subtle",
                isFeatured ? "text-base" : "text-sm",
              )}
            >
              {card.asset ? card.asset.name : card.hint}
            </p>
            <div className={cn(isFeatured ? "mt-8" : "mt-auto pt-6")}>
              {card.asset ? (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <a
                    href={card.asset.url}
                    className={cn(
                      "inline-flex rounded-full bg-cta font-medium text-cta-foreground hover:bg-cta-hover",
                      isFeatured ? "px-5 py-2.5 text-sm" : "px-4 py-2 text-sm",
                    )}
                  >
                    {dict.download.cta}
                  </a>
                  <Link
                    href={`/install#${card.id}`}
                    className="text-sm text-muted hover:text-foreground"
                  >
                    {dict.download.guide}
                  </Link>
                </div>
              ) : (
                <p className="text-sm text-subtle">{dict.download.pending}</p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
