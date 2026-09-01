"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LOCALES, type Locale } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

const links = [
  { href: "/features", key: "features" as const },
  { href: "/download", key: "download" as const },
  { href: "/install", key: "install" as const },
  { href: "/about", key: "about" as const },
  { href: "/feedback", key: "feedback" as const },
];

export function Header({ dict, locale }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function setLocale(next: Locale) {
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: next }),
    });
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-header backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/brand/mark.png"
            alt="Korigio"
            width={36}
            height={36}
            className="rounded-xl"
            priority
          />
          <span className="text-[17px] font-medium tracking-tight text-foreground">
            korigio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-foreground",
                pathname === link.href && "bg-surface-strong text-foreground",
              )}
            >
              {dict.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <LocalePills current={locale} onChange={setLocale} />
            <Link
              href="/download"
              className="rounded-full bg-cta px-3.5 py-1.5 text-sm font-medium text-cta-foreground hover:bg-cta-hover"
            >
              {dict.nav.getFree}
            </Link>
          </div>
          <ThemeToggle toLight={dict.nav.themeToLight} toDark={dict.nav.themeToDark} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={dict.nav.menu}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2.5 text-muted"
              >
                {dict.nav[link.key]}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-border pt-3">
              <LocalePills current={locale} onChange={setLocale} />
              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className="rounded-full bg-cta px-3.5 py-1.5 text-sm font-medium text-cta-foreground"
              >
                {dict.nav.getFree}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function LocalePills({
  current,
  onChange,
}: {
  current: Locale;
  onChange: (locale: Locale) => void;
}) {
  return (
    <div className="flex rounded-full border border-border p-0.5 text-[11px] uppercase tracking-wider text-subtle">
      {LOCALES.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => onChange(locale)}
          className={cn(
            "rounded-full px-2 py-1",
            current === locale && "bg-cta text-cta-foreground",
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
