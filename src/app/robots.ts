import type { MetadataRoute } from "next";

export const dynamic = "force-static";
const siteUrl = process.env.PORTFOLIO_SITE_URL || "https://merissali.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/config", "/api/"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
