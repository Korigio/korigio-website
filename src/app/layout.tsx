import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { getDictionary, getLocale } from "@/lib/i18n";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cookie-based locale must be resolved per request. This also keeps every
// route (including /download GitHub lookups) live in the Docker image.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "Korigio — Offline workshop repair manager",
    template: "%s · Korigio",
  },
  description:
    "Korigio is an offline-first desktop app for repair shops: customers, devices, repairs, diagnosis, print, and local Wi-Fi team sync. No cloud required.",
  authors: [{ name: "Moritz Alexander Wright" }],
  icons: { icon: "/brand/mark.png" },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteShell dict={dict} locale={locale}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
