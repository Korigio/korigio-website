export const APP_NAME = "Korigio";
export const APP_TAGLINE = "Open source repair manager";
export const AUTHOR = "Moritz Alexander Wright";
export const CONTACT_EMAIL = "info@korigio.com";
export const SITE_DOMAIN = "korigio.com";
export const SITE_URL =
  process.env.SITE_URL?.replace(/\/$/, "") || `https://${SITE_DOMAIN}`;
export const SITE_DESCRIPTION =
  "Korigio is free and open-source desktop software for repair shops: customers, devices, repairs, diagnosis, print, and local Wi-Fi team sync. Run it on your counter PC — no cloud required.";
export const COPYRIGHT_YEAR = 2026;
export const LEGAL_EFFECTIVE_DATE = "11 September 2026";
export const SUPPORTED_OS = "Windows 10 / 11 x64";
export const GITHUB_RELEASES_REPO =
  process.env.GITHUB_RELEASES_REPO ?? "Korigio/korigio-downloads";
export const LOCALE_COOKIE = "korigio_locale";
export const LOCALES = ["en", "es", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
