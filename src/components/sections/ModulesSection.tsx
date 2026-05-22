"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";

const modules = [
  {
    id: "research",
    title: "Research Engine",
    tagline: "Intelligence before execution",
    summary: "Semantic keyword research, SERP analysis, and competitor gap mapping.",
    features: ["Keyword clustering", "SERP analysis", "Intent mapping", "Trend signals"],
    accent: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/15",
    stat: { value: "247+", label: "Keywords / run" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 15L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "content",
    title: "Content Studio",
    tagline: "Brief to publish-ready",
    summary: "E-E-A-T optimized long-form articles with structure and tone control.",
    features: ["Long-form drafts", "E-E-A-T signals", "Headings", "Tone control"],
    accent: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/15",
    stat: { value: "4.2k", label: "Words / article" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <path d="M5 7h12M5 11h9M5 15h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "interlink",
    title: "Interlink AI",
    tagline: "Content graph automation",
    summary: "Contextual internal links across your site with equity-aware mapping.",
    features: ["Graph mapping", "Auto anchors", "Link equity", "Orphan recovery"],
    accent: "text-orange-300",
    iconBg: "bg-orange-400/8 border-orange-400/12",
    stat: { value: "156+", label: "Links / site" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <circle cx="5" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "optimization",
    title: "Optimization Layer",
    tagline: "SEO · GEO · AEO",
    summary: "Triple-layer optimization for search, AI answers, and generative results.",
    features: ["Schema markup", "Snippets", "AI citations", "Core vitals"],
    accent: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/15",
    stat: { value: "94", label: "Avg SEO score" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 8H21l-6.5 4.5 2.5 8L11 18l-6 4.5 2.5-8L2 10h7.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "publishing",
    title: "Publishing Hub",
    tagline: "One-click deploy",
    summary: "WordPress publishing with metadata, media, and scheduling built in.",
    features: ["WP publish", "Metadata", "Categories", "Scheduling"],
    accent: "text-amber-300",
    iconBg: "bg-amber-400/8 border-amber-400/12",
    stat: { value: "38s", label: "Publish time" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "analytics",
    title: "Analytics Engine",
    tagline: "Real-time performance",
    summary: "Rankings, CTR, and AI insights that tell you what to publish next.",
    features: ["Rank tracking", "CTR", "Content ROI", "AI insights"],
    accent: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/15",
    stat: { value: "∞", label: "Scale" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <path d="M4 18l5-5 4 4 7-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ModulesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!gridRef.current) return;

      gsap.fromTo(
        gridRef.current.querySelectorAll(".mod-card"),
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%", once: true },
        }
      );
    };
    init();
  }, []);

  return (
    <Section id="modules" variant="default">
      <SectionHeader
        badge="Product Modules"
        title={
          <>
            Six modules.
            <br />
            <span className="gradient-text">One operating system.</span>
          </>
        }
        description="Purpose-built modules that run as a single pipeline — from research through publish."
      />

      <div
        ref={gridRef}
        className="mod-grid mx-auto w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {modules.map((mod, index) => (
          <motion.article
            key={mod.id}
            className="mod-card mod-card-inner flex flex-col h-full panel p-6 md:p-7 hover:border-orange-500/20 transition-colors duration-300"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className={`p-2.5 rounded-xl border ${mod.iconBg} ${mod.accent}`}>
                {mod.icon}
              </div>
              <div className="text-right shrink-0">
                <div className={`text-xl font-bold leading-none ${mod.accent}`}>{mod.stat.value}</div>
                <div className="text-[10px] text-white/28 mt-1">{mod.stat.label}</div>
              </div>
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/25 mb-2">
              Module {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-[16px] font-semibold text-white mb-1">{mod.title}</h3>
            <p className={`text-[12px] font-medium ${mod.accent} opacity-70 mb-3`}>{mod.tagline}</p>
            <p className="text-[13px] text-white/38 leading-relaxed mb-5 flex-1">{mod.summary}</p>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
              {mod.features.map((f) => (
                <span
                  key={f}
                  className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] text-white/40 border border-white/[0.06]"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
