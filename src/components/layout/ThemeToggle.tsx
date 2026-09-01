"use client";

import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { readStoredTheme, resolveTheme, toggleTheme } from "@/lib/theme";

type Props = {
  toLight: string;
  toDark: string;
};

export function ThemeToggle({ toLight, toDark }: Props) {
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    setDark(resolveTheme() === "dark");

    if (readStoredTheme()) {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next = media.matches ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      setDark(media.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <button
      type="button"
      onClick={() => setDark(toggleTheme() === "dark")}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground hover:bg-surface-strong"
      aria-label={dark ? toLight : toDark}
      aria-pressed={dark}
    >
      <Sun className="theme-icon-sun size-4" aria-hidden />
      <Moon className="theme-icon-moon size-4" aria-hidden />
    </button>
  );
}
