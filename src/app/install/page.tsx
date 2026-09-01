import type { Metadata } from "next";
import { InstallGuide } from "@/components/download/InstallGuide";
import { getDictionary, getLocale } from "@/lib/i18n";
import { getVisitorDesktopOs } from "@/lib/visitor-os";

export const metadata: Metadata = { title: "Install" };

export default async function InstallPage() {
  const dict = getDictionary(await getLocale());
  const detected = await getVisitorDesktopOs();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-subtle">
        {dict.install.kicker}
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {dict.install.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{dict.install.subtitle}</p>
      <InstallGuide dict={dict} detected={detected} />
    </div>
  );
}
