export const APP_NAME = "Korigio";
export const APP_TAGLINE = "Offline workshop repair manager";
export const AUTHOR = "Moritz Alexander Wright";
export const COPYRIGHT_YEAR = 2026;
export const SUPPORTED_OS = "Windows 10 / 11 x64";
export const GITHUB_RELEASES_REPO =
  process.env.GITHUB_RELEASES_REPO ?? "Korigio/korigio-downloads";
export const SESSION_COOKIE = "korigio_session";
export const LOCALE_COOKIE = "korigio_locale";
export const LOCALES = ["en", "es", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
