import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import {
  APP_NAME,
  APP_TAGLINE,
  AUTHOR,
  CONTACT_EMAIL,
  SITE_DOMAIN,
} from "@/lib/constants";

export const alt = `${APP_NAME} — ${APP_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Use the official brand logo from public/brand (assets).
  const logoBytes = await readFile(join(process.cwd(), "public/brand/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #eef1f4 0%, #f4f6f8 42%, #dfe6ee 100%)",
          color: "#1a2332",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src={logoSrc}
            width={80}
            height={80}
            alt=""
            style={{ borderRadius: 18 }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            {APP_NAME.toLowerCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            {APP_TAGLINE}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#5b6b7c",
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            Free open-source workshop software. Your data stays on the shop PC.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#6b7a8a",
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            <span>{AUTHOR}</span>
            <span>·</span>
            <span>{CONTACT_EMAIL}</span>
          </div>
          <div style={{ display: "flex", fontWeight: 500, color: "#1a2332" }}>
            {SITE_DOMAIN}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
