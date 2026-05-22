"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const workflowSteps = [
  {
    id: "research",
    number: "01",
    title: "Research Engine",
    description:
      "AI scans search intent, competitor gaps, and trending queries. Surface 247 high-opportunity keywords in under 3 minutes.",
    tags: ["Keyword clustering", "SERP analysis", "Competitor gaps", "Intent mapping"],
    metric: { label: "Keywords", value: "247+" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 13l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 9h4M9 7v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "plan",
    number: "02",
    title: "Content Planning",
    description:
      "Intelligent content calendar built around semantic clusters — topics, angles, and briefs generated automatically.",
    tags: ["Topic clusters", "Content briefs", "Semantic mapping", "Priority scoring"],
    metric: { label: "Articles Planned", value: "38" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "generate",
    number: "03",
    title: "AI Article Generation",
    description:
      "Full articles crafted from briefs — long-form, factually grounded, E-E-A-T optimized before the draft is even complete.",
    tags: ["Long-form content", "E-E-A-T signals", "Tone consistency", "Source grounding"],
    metric: { label: "Words / Article", value: "4,200" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 5h12M4 9h9M4 13h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 12l2-2-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "link",
    number: "04",
    title: "Interlink AI",
    description:
      "Maps your full content graph and injects contextual internal links across every page — automatically, at scale.",
    tags: ["Content graph", "Auto anchors", "Link equity flow", "Orphan recovery"],
    metric: { label: "Links Mapped", value: "156+" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8 12l-1.5 1.5a2.5 2.5 0 003.5 3.5l1.5-1.5a2.5 2.5 0 000-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8l1.5-1.5a2.5 2.5 0 00-3.5-3.5L8.5 4.5A2.5 2.5 0 008.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 11l2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "optimize",
    number: "05",
    title: "SEO + GEO + AEO",
    description:
      "Triple-layer optimization for traditional search, AI answer engines, and generative results — simultaneously, on every article.",
    tags: ["Schema markup", "Featured snippets", "AI citation prep", "Voice search"],
    metric: { label: "Avg Score", value: "94/100" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" />
        <path d="M4 5c2 3 3 5 6 5s4-2 6-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "publish",
    number: "06",
    title: "WordPress Publishing",
    description:
      "One-click deployment — articles, metadata, schema, images, categories — pushed live to WordPress without touching the CMS.",
    tags: ["Auto-publish", "Metadata inject", "Featured image", "Scheduled posts"],
    metric: { label: "Publish Time", value: "38s" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14l3-3 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      // Header
      gsap.fromTo(
        sectionRef.current.querySelector(".wf-header"),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        }
      );

      // Cards alternate stagger
      sectionRef.current.querySelectorAll(".wf-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1, x: 0, duration: 0.75, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 83%", once: true },
          }
        );
      });

      // SVG connector draw
      sectionRef.current.querySelectorAll(".connector-path").forEach((path) => {
        const p = path as SVGPathElement;
        const len = p.getTotalLength?.() ?? 160;
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(p, {
          strokeDashoffset: 0, duration: 1, ease: "power2.inOut",
          scrollTrigger: { trigger: p, start: "top 88%", once: true },
        });
      });
    };

    init();
  }, []);

  return (
    <section ref={sectionRef} id="workflow" className="section-padding relative overflow-hidden">

      {/* Section bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-orange-600/4 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="wf-header text-center mb-20 opacity-0">
          <div className="brand-badge mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Automated Workflow
          </div>
          <h2 className="heading-lg text-white mb-5">
            One workflow.
            <br />
            <span className="gradient-text">Everything automated.</span>
          </h2>
          <p className="text-[16px] text-white/40 max-w-[460px] mx-auto leading-relaxed">
            Six interconnected modules working as one intelligent pipeline — from research to ranking.
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative">
          {/* Centre spine */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="flex flex-col gap-10 lg:gap-2">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="relative">
                  <div className={`wf-card flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0 ${isEven ? "" : "lg:flex-row-reverse"}`}>

                    {/* Card */}
                    <div className={`w-full lg:w-[calc(50%-52px)] ${isEven ? "lg:pr-10" : "lg:pl-10"}`}>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 280, damping: 22 }}
                        className="shimmer-card glass border border-white/[0.07] hover:border-orange-500/20 rounded-2xl p-6 shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/15 shrink-0">
                            {step.icon}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[10px] font-mono font-bold text-orange-400/50">{step.number}</span>
                              <h3 className="text-[15px] font-semibold text-white">{step.title}</h3>
                            </div>
                            <p className="text-[13px] text-white/40 leading-relaxed mb-3">{step.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {step.tags.map((tag) => (
                                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-orange-500/8 text-orange-400/70 border border-orange-500/12">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Metric */}
                          <div className="shrink-0 text-right">
                            <div className="text-[20px] font-bold text-orange-400 tracking-tight leading-none">{step.metric.value}</div>
                            <div className="text-[10px] text-white/25 mt-1">{step.metric.label}</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Centre node */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-[104px] items-center justify-center z-10">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/25 flex items-center justify-center shadow-lg shadow-orange-500/10"
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block w-[calc(50%-52px)]" />
                  </div>

                  {/* Connector arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 mt-1 z-20 justify-center" style={{ top: "100%", marginTop: 4 }}>
                      <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
                        <path
                          d="M10 0v18M5 13l5 6 5-6"
                          className="connector-path"
                          stroke="rgba(249,115,22,0.35)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
