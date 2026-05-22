"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";

const tabs = ["Analytics", "Content Pipeline", "SEO Score", "AI Workflow"];

const contentPipeline = [
  { title: "The Complete Guide to AI SEO in 2026", stage: "Published", score: 96, words: "4,800" },
  { title: "GEO vs Traditional SEO: What Changed", stage: "Optimizing", score: 89, words: "3,200" },
  { title: "How to Build Topical Authority with AI", stage: "Generating", score: 0, words: "~4,500" },
  { title: "AEO Strategies for E-Commerce Brands", stage: "Planned", score: 0, words: "~3,800" },
  { title: "Internal Linking Best Practices 2026", stage: "Published", score: 91, words: "2,900" },
  { title: "WordPress AI Automation Complete Setup", stage: "Published", score: 88, words: "5,100" },
];

const analyticsData = [
  { month: "Jan", value: 28 },
  { month: "Feb", value: 42 },
  { month: "Mar", value: 51 },
  { month: "Apr", value: 64 },
  { month: "May", value: 79 },
  { month: "Jun", value: 88 },
  { month: "Jul", value: 85 },
  { month: "Aug", value: 97 },
];

const stageStyle: Record<string, string> = {
  Published: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  Optimizing: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  Generating: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  Planned: "bg-white/[0.04] text-white/35 border border-white/10",
};

export default function DashboardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelector(".db-header"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%", once: true } }
      );
      gsap.fromTo(
        sectionRef.current.querySelector(".db-main"),
        { opacity: 0, y: 60, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } }
      );
    };
    init();
  }, []);

  return (
    <Section id="dashboard" variant="elevated" className="relative">
      <div ref={sectionRef}>
      <SectionHeader
        className="db-header opacity-0"
        badge="Product Preview"
        title={
          <>
            See it in action.
            <br />
            <span className="gradient-text">Live intelligence.</span>
          </>
        }
        description="Every article, keyword, and workflow — orchestrated from one command center."
      />

      <div className="db-main panel overflow-hidden shadow-2xl shadow-black/50 glow-orange opacity-0 mx-auto w-full max-w-5xl">

          {/* Title bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05] bg-[#0c0c0c]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c, opacity: 0.7 }} />
                ))}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.04] text-[10px] text-white/25 font-mono">
                riviso.app/workspace
              </div>
            </div>

            {/* Tabs */}
            <div className="hidden md:flex items-center gap-1 bg-white/[0.04] rounded-xl p-1">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 ${
                    activeTab === i
                      ? "bg-orange-500/12 text-orange-400 border border-orange-500/20"
                      : "text-white/28 hover:text-white/55"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </div>
          </div>

          {/* Body */}
          <div className="p-5 grid grid-cols-12 gap-4 min-h-[500px]">

            {/* Metrics sidebar */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">
              {[
                { title: "Total Articles", value: "138", change: "+12 this month", pos: true },
                { title: "Avg SEO Score", value: "91.4", change: "+3.2 vs last month", pos: true },
                { title: "Keywords Ranked", value: "2,847", change: "+348 this month", pos: true },
                { title: "Organic Traffic", value: "48.2k", change: "+18.4% MoM", pos: true },
              ].map((m) => (
                <div key={m.title} className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
                  <div className="text-[10px] text-white/30 mb-2">{m.title}</div>
                  <div className="text-[22px] font-bold text-white tracking-tight leading-none">{m.value}</div>
                  <div className="text-[10px] text-orange-400 mt-1 flex items-center gap-1">↑ {m.change}</div>
                </div>
              ))}
            </div>

            {/* Main panel */}
            <div className="col-span-12 lg:col-span-9 flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col gap-4 flex-1"
                >
                  {activeTab === 0 && <AnalyticsTab data={analyticsData} />}
                  {activeTab === 1 && <ContentPipelineTab items={contentPipeline} />}
                  {activeTab === 2 && <SEOScoreTab />}
                  {activeTab === 3 && <AIWorkflowTab />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function AnalyticsTab({ data }: { data: { month: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex-1 bg-white/[0.03] rounded-xl p-6 border border-white/[0.05]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[13px] font-semibold text-white">Organic Traffic Growth</h3>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
          +246% YoY
        </span>
      </div>
      <div className="flex items-end gap-2.5 h-40">
        {data.map((point, i) => (
          <div key={point.month} className="flex flex-col items-center gap-2 flex-1">
            <motion.div
              className="w-full rounded-t-md bg-gradient-to-t from-orange-600/40 to-orange-400/70 border border-orange-500/20"
              initial={{ height: 0 }}
              animate={{ height: `${(point.value / max) * 100}%` }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
              style={{ minHeight: 4 }}
            />
            <span className="text-[9px] text-white/22">{point.month}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: "Sessions", value: "48.2k" },
          { label: "Impressions", value: "284k" },
          { label: "Avg CTR", value: "6.8%" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-3 rounded-lg bg-white/[0.03] border border-white/[0.04]">
            <div className="text-[17px] font-bold text-orange-400">{stat.value}</div>
            <div className="text-[10px] text-white/28 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContentPipelineTab({ items }: { items: typeof contentPipeline }) {
  return (
    <div className="flex-1 bg-white/[0.03] rounded-xl overflow-hidden border border-white/[0.05]">
      <div className="px-5 py-3.5 border-b border-white/[0.05] flex items-center justify-between">
        <h3 className="text-[13px] font-semibold text-white">Content Pipeline</h3>
        <span className="text-[10px] text-white/28">{items.length} articles</span>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 px-5 py-3 hover:bg-white/[0.02] transition-colors"
          >
            <div className="w-5 h-5 rounded bg-white/[0.04] flex items-center justify-center text-[9px] text-white/25 shrink-0">{i + 1}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[11.5px] text-white/65 truncate">{item.title}</div>
              <div className="text-[9px] text-white/25 mt-0.5">{item.words} words</div>
            </div>
            {item.score > 0 && <div className="text-[11px] font-mono text-orange-400 shrink-0">{item.score}</div>}
            <span className={`text-[9px] px-2 py-0.5 rounded-full shrink-0 ${stageStyle[item.stage]}`}>{item.stage}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SEOScoreTab() {
  const scores = [
    { label: "Content Quality", value: 96 },
    { label: "Keyword Density", value: 88 },
    { label: "Internal Links", value: 92 },
    { label: "Schema Markup", value: 85 },
    { label: "Page Speed", value: 91 },
    { label: "Mobile UX", value: 94 },
  ];
  return (
    <div className="flex-1 bg-white/[0.03] rounded-xl p-6 border border-white/[0.05]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[13px] font-semibold text-white">SEO Score Breakdown</h3>
        <div className="text-[30px] font-bold text-white leading-none">
          91<span className="text-[14px] text-white/28">/100</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {scores.map((score, i) => (
          <div key={score.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11.5px] text-white/45">{score.label}</span>
              <span className="text-[11px] font-mono text-white/55">{score.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-orange-600 to-amber-400"
                initial={{ width: "0%" }}
                animate={{ width: `${score.value}%` }}
                transition={{ duration: 0.7, delay: i * 0.09, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIWorkflowTab() {
  const steps = [
    { label: "Research", status: "done", time: "2m 14s" },
    { label: "Content Plan", status: "done", time: "0m 48s" },
    { label: "Article Generation", status: "done", time: "3m 22s" },
    { label: "Internal Linking", status: "active", time: "Running..." },
    { label: "SEO Optimization", status: "pending", time: "—" },
    { label: "WordPress Publish", status: "pending", time: "—" },
  ];
  return (
    <div className="flex-1 bg-white/[0.03] rounded-xl p-6 border border-white/[0.05]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[13px] font-semibold text-white">AI Workflow — Active Run</h3>
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Step 4 of 6
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`flex items-center gap-4 p-3.5 rounded-xl transition-all ${
              step.status === "active"
                ? "bg-orange-500/8 border border-orange-500/18"
                : step.status === "done"
                ? "bg-white/[0.02] border border-white/[0.04]"
                : "opacity-35 border border-transparent"
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
              step.status === "done"
                ? "bg-emerald-500/15 text-emerald-400"
                : step.status === "active"
                ? "bg-orange-500/15 text-orange-400"
                : "bg-white/[0.04] text-white/20"
            }`}>
              {step.status === "done" ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : step.status === "active" ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                  className="w-3.5 h-3.5 rounded-full border-[1.5px] border-orange-400 border-t-transparent"
                />
              ) : (
                <div className="w-2 h-2 rounded-full border border-white/18" />
              )}
            </div>
            <div className={`flex-1 text-[12px] font-medium ${step.status === "pending" ? "text-white/25" : "text-white/65"}`}>
              {step.label}
            </div>
            <div className={`text-[11px] font-mono ${
              step.status === "done" ? "text-emerald-400/50"
              : step.status === "active" ? "text-orange-400"
              : "text-white/18"
            }`}>
              {step.time}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
