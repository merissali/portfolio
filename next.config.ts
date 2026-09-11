import type { NextConfig } from "next";

const isGitHubPages = process.env.PERSONA_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
