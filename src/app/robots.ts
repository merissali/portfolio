import type { MetadataRoute } from "next";

export const dynamic = "force-static";
const siteUrl = process.env.PORTFOLIO_SITE_URL || (process.env.GITHUB_PAGES_BASE_PATH ? `https://merissali.github.io${process.env.GITHUB_PAGES_BASE_PATH}` : "https://merissali.com");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/config", "/api/"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
