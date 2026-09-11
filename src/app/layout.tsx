import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  APP_NAME,
  APP_TAGLINE,
  AUTHOR,
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/constants";
import { getDictionary, getLocale } from "@/lib/i18n";
import { buildSiteJsonLd, serializeJsonLd } from "@/lib/site-json-ld";
import { THEME_BOOTSTRAP_SCRIPT } from "@/lib/theme";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — ${APP_TAGLINE}`,
    template: `%s · ${APP_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: APP_NAME,
  authors: [{ name: AUTHOR, url: SITE_URL }],
  creator: AUTHOR,
  publisher: APP_NAME,
  keywords: [
    "Korigio",
    "workshop management",
    "repair shop software",
    "offline repair manager",
    AUTHOR,
    "open source",
  ],
  category: "software",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} — ${APP_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} — ${APP_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "contact:email": CONTACT_EMAIL,
  },
  icons: {
    icon: [
      { url: "/brand/mark.png", type: "image/png", sizes: "1024x1024" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/brand/mark.png",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const jsonLd = buildSiteJsonLd();

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteShell dict={dict} locale={locale}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
