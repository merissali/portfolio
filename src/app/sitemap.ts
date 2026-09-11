import type { MetadataRoute } from "next";

export const dynamic = "force-static";
const siteUrl = process.env.PORTFOLIO_SITE_URL || "https://merissali.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
