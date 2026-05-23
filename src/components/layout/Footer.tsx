"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import RivisoLogo from "@/components/layout/RivisoLogo";
import WaitlistModal from "@/components/waitlist/WaitlistModal";
import { cn } from "@/lib/utils";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "#platform" },
      { label: "Benefits", href: "#benefits" },
      { label: "Execution", href: "#execution" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "SEO automation", href: "#modules" },
      { label: "Content pipelines", href: "#modules" },
      { label: "Research agents", href: "#workflow" },
      { label: "Riviso IQ", href: "#platform" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#resources" },
      { label: "Customer stories", href: "#resources" },
      { label: "Blog", href: "#resources" },
      { label: "Support", href: "mailto:info@thehypedge.com" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#company" },
      { label: "Careers", href: "#company" },
      { label: "Contact", href: "mailto:info@thehypedge.com" },
      { label: "Partners", href: "#company" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#" },
  { label: "Cookies", href: "#" },
];

function SocialIcon({ children, label, href }: { children: ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-slate-200 bg-white text-slate-500 transition-[color,box-shadow,border-color] hover:border-orange-300/60 hover:text-orange-600 hover:shadow-[0_4px_14px_-6px_rgba(234,88,12,0.35)]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <footer
      className="site-section w-full border-t border-[var(--color-border-muted)] bg-gradient-to-b from-[#f5f0e8] via-[#faf8f5] to-[#fffdf9] text-slate-600"
      aria-labelledby="site-footer-heading"
    >
      {/* CTA */}
      <div className="py-12 md:py-16">
        <Container>
          <div
            className={cn(
              "flex flex-col gap-7 rounded-[20px] border border-orange-500/15 bg-white p-6 shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_24px_56px_-36px_rgba(124,45,18,0.22)] md:flex-row md:items-center md:justify-between md:gap-10 md:p-10",
              "bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(255,237,213,0.55),transparent_55%),radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(254,243,199,0.35),transparent_50%)]"
            )}
          >
            <div className="min-w-0 flex-1">
              <p className="platform-eyebrow mb-4 w-fit">Get started</p>
              <h2
                id="site-footer-heading"
                className="max-w-[28ch] font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2rem)] font-medium leading-tight tracking-[-0.02em] text-slate-900"
              >
                Ready to run SEO end to end?
              </h2>
              <p className="mt-3 max-w-[42ch] text-[0.9375rem] leading-relaxed text-slate-500">
                Join teams using Riviso to research, produce, and publish — without the tool
                sprawl.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setWaitlistOpen(true)}
                className="btn-waitlist min-w-[11.5rem] px-8 py-3.5 text-[0.9375rem] shadow-[0_12px_40px_-12px_rgba(234,88,12,0.45)]"
              >
                Join Waitlist
              </button>
              <a
                href="https://app.riviso.com"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-[0.9375rem] font-semibold text-slate-900 no-underline transition-colors hover:border-slate-300 hover:bg-slate-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign in
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Links */}
      <Container>
        <div className="grid gap-10 border-t border-slate-900/[0.06] py-10 lg:grid-cols-[minmax(240px,1.1fr)_minmax(0,2fr)] lg:gap-14 lg:py-12">
          <div className="flex flex-col items-start">
            <RivisoLogo href="/" imageClassName="h-9 max-w-[148px]" />
            <p className="mt-4 max-w-[26rem] text-sm leading-relaxed text-slate-500">
              The AI operating system for modern SEO — built for operators, publishers, and growth
              teams.
            </p>
            <div className="mt-5 flex gap-2">
              <SocialIcon label="Riviso on X" href="https://x.com">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                  <path d="M9.52 6.77 15.37 0h-1.39L8.9 5.88 4.94 0H0l6.11 8.89L0 16h1.39l5.28-6.17L10.06 16H15l-6.48-9.23Zm-2.01 2.34-.62-.88L1.92 1.04h2.12l3.98 5.56.62.88 5.5 7.72H11.9l-4.39-6.13Z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Riviso on LinkedIn" href="https://linkedin.com">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                  <path d="M3.55 2.2A1.55 1.55 0 1 1 0 2.2a1.55 1.55 0 0 1 3.55 0ZM.22 5.37h3.11v10.43H.22V5.37Zm5.11 0h2.98v1.42h.04c.42-.8 1.44-1.64 2.97-1.64 3.18 0 3.77 2.09 3.77 4.8v5.85H11V9.54c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1v5.36H5.33V5.37Z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Riviso on GitHub" href="https://github.com">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                  <path d="M8 0C3.58 0 0 3.66 0 8.18c0 3.62 2.29 6.69 5.47 7.77.4.07.55-.18.55-.4 0-.2-.01-.86-.01-1.55-2.22.49-2.69-1.08-2.69-1.08-.37-.95-.9-1.2-.9-1.2-.74-.51.06-.5.06-.5.81.06 1.24.84 1.24.84.72 1.24 1.88.88 2.33.68.07-.53.28-.88.51-1.08-1.78-.2-3.64-.91-3.64-4.05 0-.9.31-1.66.84-2.25-.08-.21-.37-1.03.08-2.14 0 0 .68-.22 2.24.86a7.5 7.5 0 0 1 2.04-.28c.69 0 1.39.1 2.04.28 1.56-1.08 2.23-.86 2.23-.86.45 1.11.16 1.93.08 2.14.53.59.84 1.35.84 2.25 0 3.15-1.87 3.84-3.66 4.04.29.25.54.74.54 1.49 0 1.08-.01 1.95-.01 2.22 0 .22.15.48.56.4 1.68-.32 3.32-1.26 4.28-2.4 1.25-1.16 1.97-2.71 1.97-4.95 0-.04 0-.07-.01-.11C14.71 14.85 16 11.78 16 8.18 16 3.66 12.42 0 8 0Z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-slate-400">
                  {column.title}
                </h3>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 no-underline transition-colors hover:text-orange-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-slate-900/[0.06] py-6 text-center md:flex-row md:flex-wrap md:justify-between md:py-8 md:text-left">
          <p className="order-3 m-0 text-[0.8125rem] text-slate-400 md:order-none md:min-w-48 md:flex-1">
            © {new Date().getFullYear()} Riviso, Inc. All rights reserved.
          </p>
          <ul className="order-1 m-0 flex list-none flex-wrap justify-center gap-x-5 gap-y-2 p-0 md:order-none md:flex-1 md:justify-center">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[0.8125rem] text-slate-500 no-underline transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="order-2 inline-flex shrink-0 items-center gap-2 text-[0.8125rem] text-slate-500 md:order-none">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]"
              aria-hidden
            />
            <span>All systems operational</span>
          </div>
        </div>
      </Container>

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </footer>
  );
}
