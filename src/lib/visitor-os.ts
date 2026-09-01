import { headers } from "next/headers";
import { userAgent } from "next/server";
import { detectDesktopOs, type DesktopOs } from "@/lib/os";

export async function getVisitorDesktopOs(): Promise<DesktopOs | null> {
  const hdrs = await headers();
  const { os, device, ua } = userAgent({ headers: hdrs });
  return detectDesktopOs({
    platform: hdrs.get("sec-ch-ua-platform") ?? os.name,
    ua,
    mobile: device.type === "mobile" || device.type === "tablet",
  });
}
