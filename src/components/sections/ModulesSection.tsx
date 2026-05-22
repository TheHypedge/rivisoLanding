"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const modules = [
  {
    id: "research",
    title: "Research Engine",
    tagline: "Intelligence before execution",
    description:
      "Deep semantic research powered by AI. Surface high-opportunity keywords, analyze SERP patterns, map competitor content, and generate intent-driven topic clusters.",
    features: ["Semantic keyword clustering", "Competitor gap analysis", "Search intent mapping", "Trend forecasting"],
    accent: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/15",
    tagBg: "bg-orange-500/8 text-orange-400/70 border-orange-500/12",
    cardBorder: "hover:border-orange-500/20",
    glowColor: "hover:shadow-orange-500/8",
    badgeStyle: "bg-orange-500/8 border-orange-500/15 text-orange-400",
    stat: { value: "247+", label: "Keywords per run" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 15L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 10h4M10 8v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "content",
    title: "Content Studio",
    tagline: "From brief to publish-ready",
    description:
      "AI-powered content generation that produces E-E-A-T-optimized long-form articles with proper structure, headings, and editorial quality from brief to finished draft.",
    features: ["Long-form article generation", "E-E-A-T optimization", "Heading structure", "Tone calibration"],
    accent: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/15",
    tagBg: "bg-amber-500/8 text-amber-400/70 border-amber-500/12",
    cardBorder: "hover:border-amber-500/20",
    glowColor: "hover:shadow-amber-500/8",
    badgeStyle: "bg-amber-500/8 border-amber-500/15 text-amber-400",
    stat: { value: "4,200", label: "Avg words / article" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 7h12M5 11h9M5 15h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 13l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "interlink",
    title: "Interlink AI",
    tagline: "The content graph, automated",
    description:
      "Maps your entire site's content graph and intelligently injects internal links — distributing link equity, reducing orphan pages, and strengthening topical authority.",
    features: ["Content graph mapping", "Auto anchor generation", "Link equity flow", "Orphan page recovery"],
    accent: "text-orange-300",
    iconBg: "bg-orange-400/8 border-orange-400/12",
    tagBg: "bg-orange-400/6 text-orange-300/70 border-orange-400/10",
    cardBorder: "hover:border-orange-400/18",
    glowColor: "hover:shadow-orange-400/6",
    badgeStyle: "bg-orange-400/8 border-orange-400/12 text-orange-300",
    stat: { value: "156+", label: "Links per site" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="5" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 11h3M11 7.5v3M14.5 11h-0.5M11 14.5v-0.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "optimization",
    title: "Optimization Layer",
    tagline: "SEO · GEO · AEO unified",
    description:
      "Triple-layer optimization engine that prepares content for traditional search, AI answer engines, and generative search results — with schema, structured data, and citation readiness.",
    features: ["Schema markup injection", "Featured snippet targeting", "AI citation preparation", "Core Web Vitals"],
    accent: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/15",
    tagBg: "bg-orange-500/8 text-orange-400/70 border-orange-500/12",
    cardBorder: "hover:border-orange-500/20",
    glowColor: "hover:shadow-orange-500/8",
    badgeStyle: "bg-orange-500/8 border-orange-500/15 text-orange-400",
    stat: { value: "94/100", label: "Avg SEO score" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 8H21l-6.5 4.5 2.5 8L11 18l-6 4.5 2.5-8L2 10h7.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "publishing",
    title: "Publishing Hub",
    tagline: "One-click, zero friction",
    description:
      "Direct WordPress integration that deploys articles with metadata, categories, tags, featured images, custom fields, and scheduled publishing — all from a single action.",
    features: ["WordPress direct publish", "Metadata management", "Auto categorization", "Scheduled publishing"],
    accent: "text-amber-300",
    iconBg: "bg-amber-400/8 border-amber-400/12",
    tagBg: "bg-amber-400/6 text-amber-300/70 border-amber-400/10",
    cardBorder: "hover:border-amber-400/18",
    glowColor: "hover:shadow-amber-400/6",
    badgeStyle: "bg-amber-400/8 border-amber-400/12 text-amber-300",
    stat: { value: "38s", label: "Avg publish time" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "analytics",
    title: "Analytics Engine",
    tagline: "Performance in real time",
    description:
      "Track rankings, impressions, click-through rates, and content performance across all published articles. AI-generated insights surface exactly what to write next.",
    features: ["Rank tracking", "CTR optimization", "Content performance", "AI-powered insights"],
    accent: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/15",
    tagBg: "bg-orange-500/8 text-orange-400/70 border-orange-500/12",
    cardBorder: "hover:border-orange-500/20",
    glowColor: "hover:shadow-orange-500/8",
    badgeStyle: "bg-orange-500/8 border-orange-500/15 text-orange-400",
    stat: { value: "∞", label: "Scalable tracking" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 18l5-5 4 4 7-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4v14h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ModulesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelector(".mod-header"),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        }
      );

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".mod-card"),
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7,
          stagger: { amount: 0.5, from: "start" },
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".mod-grid"),
            start: "top 78%",
            once: true,
          },
        }
      );
    };
    init();
  }, []);

  return (
    <section ref={sectionRef} id="modules" className="section-padding relative overflow-hidden">

      {/* Bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-orange-600/4 blur-[130px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-amber-600/3 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mod-header flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 opacity-0">
          <div>
            <div className="brand-badge mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              Product Modules
            </div>
            <h2 className="heading-lg text-white">
              Six modules.
              <br />
              <span className="gradient-text">One operating system.</span>
            </h2>
          </div>
          <p className="text-[15px] text-white/40 max-w-[320px] leading-relaxed lg:text-right">
            Each module is purpose-built and deeply integrated — working together as a single intelligent workflow.
          </p>
        </div>

        {/* Grid */}
        <div className="mod-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.id}
              className="mod-card"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className={`shimmer-card relative h-full bg-[#111111] border border-white/[0.06] ${mod.cardBorder} rounded-2xl p-6 cursor-default transition-all duration-300 shadow-xl ${mod.glowColor}`}>

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-2.5 rounded-xl ${mod.iconBg} ${mod.accent} border`}>
                    {mod.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-[22px] font-bold tracking-tight leading-none ${mod.accent}`}>
                      {mod.stat.value}
                    </div>
                    <div className="text-[10px] text-white/25 mt-1">{mod.stat.label}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-semibold text-white mb-0.5">{mod.title}</h3>
                <p className={`text-[11px] font-medium ${mod.accent} opacity-60 mb-4`}>{mod.tagline}</p>

                {/* Description */}
                <p className="text-[12.5px] text-white/38 leading-relaxed mb-5">{mod.description}</p>

                {/* Feature tags */}
                <div className="flex flex-col gap-1.5 mb-5">
                  {mod.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full ${mod.accent} opacity-50`} />
                      <span className="text-[11.5px] text-white/38">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold ${mod.badgeStyle}`}>
                    Module {String(index + 1).padStart(2, "0")}
                  </span>
                  <motion.button
                    whileHover={{ x: 3 }}
                    className={`text-[11px] ${mod.accent} flex items-center gap-1 opacity-50 hover:opacity-90 transition-opacity`}
                  >
                    Learn more
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
