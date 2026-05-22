"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";

const traditionalItems = [
  { label: "Keyword research tool", cost: "$99/mo" },
  { label: "Content brief tool", cost: "$79/mo" },
  { label: "AI writing assistant", cost: "$49/mo" },
  { label: "SEO analysis platform", cost: "$119/mo" },
  { label: "Internal linking tool", cost: "$59/mo" },
  { label: "Publishing workflow", cost: "$39/mo" },
];

const rivisoFeatures = [
  "Research Engine (AI-powered)",
  "Content Planning & Briefs",
  "Long-form Article Generation",
  "SEO + GEO + AEO Optimization",
  "Interlink AI (auto content graph)",
  "Direct WordPress Publishing",
];

const comparisonRows = [
  { category: "Workflow", traditional: "6+ disconnected tools", riviso: "One unified pipeline" },
  { category: "Execution", traditional: "Hours of manual work", riviso: "Fully automated runs" },
  { category: "SEO Coverage", traditional: "Search engines only", riviso: "SEO + GEO + AEO" },
  { category: "Publishing", traditional: "Copy/paste to CMS", riviso: "Auto-publish + schema" },
  { category: "Consistency", traditional: "Human-dependent", riviso: "AI-native, always on" },
  { category: "Total Cost", traditional: "$444+/month", riviso: "One subscription" },
];

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      gsap.fromTo(
        [sectionRef.current.querySelector(".cmp-left"), sectionRef.current.querySelector(".cmp-right")],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%", once: true } }
      );

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".cmp-row"),
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.55, stagger: 0.07, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current.querySelector(".cmp-table"), start: "top 80%", once: true } }
      );
    };
    init();
  }, []);

  const total = traditionalItems.reduce((s, i) => s + parseInt(i.cost.replace(/\D/g, "")), 0);

  return (
    <Section variant="default" className="relative">
      <div ref={sectionRef}>
      <SectionHeader
        align="center"
        badge="Why RIVISO"
        title="Stop stitching tools together."
        description="The traditional SEO stack is fragmented, expensive, and slow. RIVISO replaces it with one system."
      />

        <div className="mx-auto w-full max-w-4xl grid lg:grid-cols-2 gap-6 mb-10">

          {/* Traditional */}
          <div className="cmp-left bg-[#0f0f0f] border border-white/[0.07] rounded-2xl overflow-hidden opacity-0">
            <div className="px-6 py-5 border-b border-white/[0.05] flex items-center justify-between">
              <div>
                <h3 className="text-[15px] font-semibold text-white/55">Traditional SEO Stack</h3>
                <p className="text-[12px] text-white/22 mt-0.5">Scattered tools, manual effort</p>
              </div>
              <div className="text-right">
                <div className="text-[24px] font-bold text-red-400 leading-none">${total}<span className="text-[11px] text-white/25">/mo</span></div>
                <div className="text-[10px] text-white/25 mt-0.5">combined cost</div>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2">
              {traditionalItems.map((item, i) => (
                <motion.div key={item.label}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.5 }}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4.5 h-4.5 rounded bg-red-500/10 flex items-center justify-center shrink-0">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 1.5l6 6M7.5 1.5l-6 6" stroke="#f87171" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-[12.5px] text-white/38">{item.label}</span>
                  </div>
                  <span className="text-[11.5px] font-mono text-red-400/55">{item.cost}</span>
                </motion.div>
              ))}
              <div className="mt-1 px-4 py-3 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-between">
                <span className="text-[11.5px] text-white/28">Time lost context-switching</span>
                <span className="text-[12px] text-red-400 font-semibold">8–12 hrs/week</span>
              </div>
            </div>
          </div>

          {/* RIVISO */}
          <div className="cmp-right bg-[#0f0f0f] border border-orange-500/20 rounded-2xl overflow-hidden glow-orange opacity-0">
            <div className="px-6 py-5 border-b border-orange-500/10 bg-orange-500/[0.03] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-[15px] font-semibold text-white">RIVISO</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/12 text-orange-400 border border-orange-500/20 font-medium">
                    Recommended
                  </span>
                </div>
                <p className="text-[12px] text-white/30 mt-0.5">One intelligent operating system</p>
              </div>
              <div className="text-right">
                <div className="text-[22px] font-bold gradient-text leading-none">All-in-one</div>
                <div className="text-[10px] text-white/28 mt-0.5">one subscription</div>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2">
              {rivisoFeatures.map((feature, i) => (
                <motion.div key={feature}
                  initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.5 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-500/[0.04] border border-orange-500/10"
                >
                  <div className="w-5 h-5 rounded bg-orange-500/15 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 4-4" stroke="#fb923c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[12.5px] text-white/60">{feature}</span>
                </motion.div>
              ))}
              <div className="mt-1 px-4 py-3 rounded-xl bg-orange-500/5 border border-orange-500/12 flex items-center justify-between">
                <span className="text-[11.5px] text-white/35">Time saved per week</span>
                <span className="text-[12px] text-orange-400 font-bold">10+ hrs/week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="cmp-table mx-auto w-full max-w-4xl bg-[#0f0f0f] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/[0.05]">
            <div className="label-sm text-white/25">Category</div>
            <div className="label-sm text-white/25">Traditional</div>
            <div className="label-sm text-orange-400/60">RIVISO</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div key={row.category} className={`cmp-row grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/[0.04] last:border-0 ${i % 2 !== 0 ? "bg-white/[0.01]" : ""}`}>
              <div className="text-[12px] font-semibold text-white/45">{row.category}</div>
              <div className="flex items-center gap-2 text-[12px] text-white/28">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 2l7 7M9 2L2 9" stroke="#f87171" strokeWidth="1" strokeLinecap="round" />
                </svg>
                {row.traditional}
              </div>
              <div className="flex items-center gap-2 text-[12px] text-orange-400 font-medium">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#fb923c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {row.riviso}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
