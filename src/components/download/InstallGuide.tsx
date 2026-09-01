"use client";

import Link from "next/link";
import { useVisitorOs } from "@/components/os/useVisitorOs";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/i18n";
import type { DesktopOs } from "@/lib/os";

type WindowsCopy = Dictionary["install"]["windows"];
type PlatformCopy = Dictionary["install"][DesktopOs];

type Props = {
  dict: Dictionary;
  detected: DesktopOs | null;
};

const ORDER: DesktopOs[] = ["windows", "macos", "linux"];

function isWindowsGuide(copy: PlatformCopy): copy is WindowsCopy {
  return "clicks" in copy;
}

export function InstallGuide({ dict, detected }: Props) {
  const os = useVisitorOs(detected);
  const platforms = ORDER.map((id) => ({
    id,
    copy: dict.install[id],
  }));
  const featured = os
    ? (platforms.find((platform) => platform.id === os) ?? null)
    : platforms[0];
  const rest = featured
    ? platforms.filter((platform) => platform.id !== featured.id)
    : platforms;
  const ordered = featured ? [featured, ...rest] : rest;

  return (
    <div className="mt-12 space-y-6">
      {ordered.map(({ id, copy }) => {
        const isFeatured = featured?.id === id;
        const windows = isWindowsGuide(copy) ? copy : null;

        return (
          <article
            key={id}
            id={id}
            className={cn(
              "scroll-mt-24 rounded-[28px] border border-border bg-surface p-6 sm:p-8",
              isFeatured && "border-border-strong bg-surface-strong sm:p-10",
            )}
          >
            {isFeatured ? (
              <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
                {dict.install.recommended}
              </p>
            ) : null}
            <h2
              className={cn(
                "text-foreground",
                isFeatured ? "mt-3 text-3xl sm:text-4xl" : "text-2xl",
              )}
            >
              {copy.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
              {copy.intro}
            </p>

            {windows ? (
              <div className="mt-8 rounded-3xl border border-warning-border bg-warning-fill p-5 sm:p-6">
                <h3 className="text-lg text-warning">{windows.warningTitle}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-warning-muted">
                  {windows.warningBody}
                </p>
                <ol className="mt-5 space-y-4">
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

            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-border bg-elevated p-5"
                >
                  <p className="font-mono text-xs text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </article>
        );
      })}

      <div className="pt-2">
        <Link
          href="/download"
          className="inline-flex rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-cta-foreground hover:bg-cta-hover"
        >
          {dict.install.downloadCta}
        </Link>
      </div>
    </div>
  );
}
