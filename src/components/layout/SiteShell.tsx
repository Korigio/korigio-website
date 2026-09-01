import type { ReactNode } from "react";
import type { Locale } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type Props = {
  dict: Dictionary;
  locale: Locale;
  children: ReactNode;
};

export function SiteShell({ dict, locale, children }: Props) {
  return (
    <div className="relative flex min-h-full flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] grid-fade" />
      <Header dict={dict} locale={locale} />
      <main className="relative flex-1">{children}</main>
      <Footer dict={dict} />
    </div>
  );
}
