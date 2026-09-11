"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
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

type WindowsCopy = Dictionary["install"]["windows"];
type PlatformCopy = Dictionary["install"][DesktopOs];

type Props = {
  cards: DownloadCard[];
  detected: DesktopOs | null;
  dict: Dictionary;
};

function isWindowsGuide(copy: PlatformCopy): copy is WindowsCopy {
  return "clicks" in copy;
}

function readHashOs(): DesktopOs | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace("#", "");
  if (hash === "windows" || hash === "macos" || hash === "linux") return hash;
  return null;
}

export function DownloadCards({ cards, detected, dict }: Props) {
  const os = useVisitorOs(detected);
  const featured = os ? (cards.find((card) => card.id === os) ?? null) : null;
  const rest = featured ? cards.filter((card) => card.id !== os) : cards;
  const ordered = featured ? [featured, ...rest] : rest;
  const [openId, setOpenId] = useState<DesktopOs | null>(
    () => readHashOs() ?? featured?.id ?? null,
  );

  useEffect(() => {
    const hash = readHashOs();
    if (!hash) return;
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div
      className={cn(
        "mt-10 grid gap-4",
        featured ? "md:grid-cols-2" : "md:grid-cols-3",
      )}
    >
      {ordered.map((card) => {
        const isFeatured = featured?.id === card.id;
        const guide = dict.install[card.id];
        const windows = isWindowsGuide(guide) ? guide : null;
        const isOpen = openId === card.id;

        return (
          <article
            key={card.id}
            id={card.id}
            className={cn(
              "flex scroll-mt-24 flex-col rounded-[28px] border border-border bg-surface",
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
            <div className={cn(isFeatured ? "mt-8" : "mt-6")}>
              {card.asset ? (
                <a
                  href={card.asset.url}
                  className={cn(
                    "inline-flex rounded-full bg-cta font-medium text-cta-foreground hover:bg-cta-hover",
                    isFeatured ? "px-5 py-2.5 text-sm" : "px-4 py-2 text-sm",
                  )}
                >
                  {dict.download.cta}
                </a>
              ) : (
                <p className="text-sm text-subtle">{dict.download.pending}</p>
              )}
            </div>

            <details
              className="group mt-5 border-t border-border pt-4"
              open={isOpen}
              onToggle={(event) => {
                const nextOpen = event.currentTarget.open;
                setOpenId(nextOpen ? card.id : openId === card.id ? null : openId);
              }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm text-muted transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                <span>{dict.download.howToInstall}</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "shrink-0 text-subtle transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </summary>

              <div className="mt-4">
                <p className="text-sm leading-6 text-muted">{guide.intro}</p>

                {windows ? (
                  <div className="mt-4 rounded-2xl border border-warning-border bg-warning-fill p-4 sm:p-5">
                    <h3 className="text-base text-warning">{windows.warningTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-warning-muted">
                      {windows.warningBody}
                    </p>
                    <ol className="mt-4 space-y-3">
                      {windows.clicks.map((click) => (
                        <li key={click.label}>
                          <p className="text-xs uppercase tracking-[0.16em] text-warning-muted">
                            {click.label}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            {click.buttons.map((button, index) => (
                              <span key={button} className="flex items-center gap-2">
                                {index > 0 ? (
                                  <span className="text-warning-muted" aria-hidden>
                                    →
                                  </span>
                                ) : null}
                                <span className="inline-flex rounded-full border border-warning-border bg-elevated px-3 py-1 text-sm font-medium text-warning">
                                  {button}
                                </span>
                              </span>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                <ol className="mt-4 space-y-3">
                  {guide.steps.map((step, index) => (
                    <li key={step.title} className="rounded-2xl border border-border bg-elevated p-4">
                      <p className="font-mono text-xs text-subtle">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1.5 text-sm text-foreground">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-muted">{step.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          </article>
        );
      })}
    </div>
  );
}
