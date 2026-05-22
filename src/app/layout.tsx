import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RIVISO — The AI Operating System for Modern SEO",
  description:
    "One intelligent workflow. Research, generate, optimize, link, and publish — all automated by AI. Replace your entire SEO stack with RIVISO.",
  keywords: "AI SEO, SEO automation, GEO optimization, AEO, content automation, WordPress publishing",
  authors: [{ name: "RIVISO" }],
  openGraph: {
    title: "RIVISO — The AI Operating System for Modern SEO",
    description:
      "One intelligent workflow that replaces your entire SEO stack. AI-native research, content, optimization, and publishing.",
    type: "website",
    url: "https://riviso.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIVISO — The AI Operating System for Modern SEO",
    description: "One intelligent workflow that replaces your entire SEO stack.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${interTight.variable}`}>
      <body
        className="antialiased bg-[#0c0c0c] text-white"
        style={{ fontFamily: "var(--font-inter-tight), Inter, system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
