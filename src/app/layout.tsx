import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const siteUrl = process.env.PORTFOLIO_SITE_URL || (process.env.GITHUB_PAGES_BASE_PATH ? `https://merissali.github.io${process.env.GITHUB_PAGES_BASE_PATH}` : "https://merissali.com");
const description = "Merissa Li is a hands-on product manager working across growth, experimentation, and AI workflows. Explore selected work at Rosetta Stone, IXL, and Clearco.";
export const metadata: Metadata = {
  metadataBase: new URL(new URL(siteUrl).origin),
  title: "Merissa Li | Product Manager & Hands-on Builder", description,
  authors: [{ name: "Merissa Li" }],
  openGraph: { title: "Merissa Li | Product Manager & Hands-on Builder", description, type: "website", locale: "en_US", url: siteUrl, siteName: "Merissa Li" },
  twitter: { card: "summary_large_image", title: "Merissa Li | Product Manager", description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${body.variable} antialiased`}>{children}</body></html>;
}
