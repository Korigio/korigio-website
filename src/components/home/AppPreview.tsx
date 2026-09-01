"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import dashboardDark from "@/assets/preview/dashboard-dark.jpg";
import dashboardLight from "@/assets/preview/dashboard-light.jpg";
import type { Dictionary } from "@/lib/i18n";

type ThemeChoice = "light" | "dark";

type Props = {
  dict: Dictionary;
};

const THEME_KEY = "korigio.preview-theme";

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function readStoredTheme(): ThemeChoice | null {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function AppPreview({ dict }: Props) {
  const p = dict.preview;
  const [theme, setTheme] = useState<ThemeChoice | null>(null);
  const [resolvedDark, setResolvedDark] = useState(false);

  useLayoutEffect(() => {
    const stored = readStoredTheme();
    setTheme(stored);
    setResolvedDark(stored ? stored === "dark" : systemPrefersDark());

    if (stored) {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setResolvedDark(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggleTheme() {
    const next: ThemeChoice = resolvedDark ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Ignore quota / private-mode failures.
    }
    setTheme(next);
    setResolvedDark(next === "dark");
  }

  return (
    <figure className="app-preview-shell glow-ring overflow-hidden rounded-[14px] border border-white/10">
      <div className="app-preview" data-theme={theme ?? undefined}>
        <Image
          src={dashboardLight}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="preview-shot preview-shot-light"
          priority
        />
        <Image
          src={dashboardDark}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="preview-shot preview-shot-dark"
          priority
        />
        <button
          type="button"
          onClick={toggleTheme}
          className="absolute top-2.5 right-2.5 z-10 inline-flex size-8 items-center justify-center rounded-md border border-white/20 bg-black/55 text-white backdrop-blur-sm hover:bg-black/70"
          aria-label={resolvedDark ? p.themeToLight : p.themeToDark}
          aria-pressed={resolvedDark}
        >
          <Sun className="preview-icon-sun size-4" aria-hidden />
          <Moon className="preview-icon-moon size-4" aria-hidden />
        </button>
      </div>
      <figcaption className="sr-only">{p.alt}</figcaption>
    </figure>
  );
}
