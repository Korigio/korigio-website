import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for the production Docker image (Dokploy).
  output: "standalone",
  serverExternalPackages: ["nodemailer"],
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Accept-CH", value: "Sec-CH-UA-Platform" }],
      },
    ];
  },
};

export default nextConfig;
