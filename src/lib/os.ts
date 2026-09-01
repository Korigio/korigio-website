import type { Dictionary } from "@/lib/i18n";

export const DESKTOP_OS = ["windows", "macos", "linux"] as const;
export type DesktopOs = (typeof DESKTOP_OS)[number];

const LINUX_NAMES = new Set([
  "linux",
  "ubuntu",
  "debian",
  "fedora",
  "gentoo",
  "mint",
  "suse",
  "opensuse",
  "arch",
  "centos",
  "redhat",
  "rhel",
  "manjaro",
  "nixos",
  "elementary os",
]);

export function mapPlatform(name: string | undefined | null): DesktopOs | null {
  if (!name) return null;
  const n = name.replace(/"/g, "").trim().toLowerCase();
  if (!n) return null;
  if (n.includes("windows")) return "windows";
  if (n === "macos" || n === "mac os" || n === "mac os x" || n.startsWith("mac")) {
    return "macos";
  }
  if (n === "ios" || n === "ipados" || n === "android" || n === "chrome os") {
    return null;
  }
  if (LINUX_NAMES.has(n) || n.includes("linux")) return "linux";
  return null;
}

function detectFromUserAgent(ua: string): DesktopOs | null {
  const s = ua.toLowerCase();
  if (!s) return null;
  if (/iphone|ipad|ipod|android/.test(s)) return null;
  if (s.includes("windows")) return "windows";
  if (s.includes("mac")) return "macos";
  if (s.includes("linux") || s.includes("x11")) return "linux";
  return null;
}

export function detectDesktopOs(input: {
  platform?: string | null;
  ua?: string | null;
  mobile?: boolean;
}): DesktopOs | null {
  if (input.mobile) return null;
  const ua = input.ua ?? "";
  if (/iphone|ipad|ipod|android/i.test(ua)) return null;
  return mapPlatform(input.platform) ?? detectFromUserAgent(ua);
}

export function detectDesktopOsFromNavigator(): DesktopOs | null {
  if (typeof navigator === "undefined") return null;
  const uaData = (
    navigator as Navigator & {
      userAgentData?: { platform?: string; mobile?: boolean };
    }
  ).userAgentData;
  return detectDesktopOs({
    platform: uaData?.platform,
    ua: navigator.userAgent,
    mobile: uaData?.mobile === true,
  });
}

export function withDetectedOs(
  dict: Dictionary,
  os: DesktopOs | null,
): {
  os: DesktopOs;
  primary: string;
  osHint: string;
  offlineBody: string;
} {
  const id = os ?? "windows";
  return {
    os: id,
    primary: dict.hero.primary.replace("{os}", dict.download[id]),
    osHint: dict.hero.osHint[id],
    offlineBody: dict.offline.body[id],
  };
}
