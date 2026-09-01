"use client";

import { useVisitorOs } from "@/components/os/useVisitorOs";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/i18n";
import { DESKTOP_OS, type DesktopOs } from "@/lib/os";

const SPEC_KEYS = ["os", "cpu", "ram", "disk", "webview"] as const;

type Props = {
  dict: Dictionary;
  detected: DesktopOs | null;
};

export function Requirements({ dict, detected }: Props) {
  const os = useVisitorOs(detected);
  const copy = dict.download.requirements;

  return (
    <section id="requirements" className="mt-16 border-t border-white/8 pt-12">
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{copy.kicker}</p>
      <h2 className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
        {copy.title}
      </h2>
      <p className="mt-3 max-w-2xl text-zinc-400">{copy.subtitle}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {DESKTOP_OS.map((id) => {
          const platform = copy[id];
          const isDetected = os === id;

          return (
            <article
              key={id}
              className={cn(
                "rounded-[28px] border border-white/8 bg-white/3 p-6",
                isDetected && "border-white/16 bg-white/6",
              )}
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                {isDetected
                  ? `${dict.download.recommended} · ${platform.badge}`
                  : platform.badge}
              </p>
              <h3 className="mt-3 text-xl text-white">{platform.title}</h3>
              <dl className="mt-5 space-y-3">
                {SPEC_KEYS.map((key) => (
                  <div key={key}>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                      {copy.labels[key]}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-zinc-300">{platform[key]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          );
        })}
      </div>
      <p className="mt-6 max-w-2xl text-sm text-zinc-500">{copy.note}</p>
    </section>
  );
}
