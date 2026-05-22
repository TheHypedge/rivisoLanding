"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const floatingCards = [
  {
    icon: "⚡",
    label: "Research Engine",
    value: "247 keywords found",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    position: "top-[10%] left-[2%]",
    delay: 0,
  },
  {
    icon: "✦",
    label: "Content Studio",
    value: "Article generated",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    position: "top-[42%] left-[-1%]",
    delay: 0.6,
  },
  {
    icon: "◎",
    label: "SEO Score",
    value: "94 / 100",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
    position: "bottom-[18%] left-[4%]",
    delay: 1.1,
  },
  {
    icon: "◈",
    label: "Published",
    value: "WordPress → Live",
    border: "border-white/10",
    bg: "bg-white/[0.03]",
    position: "top-[6%] right-[2%]",
    delay: 0.3,
  },
  {
    icon: "⬡",
    label: "Interlink AI",
    value: "18 links mapped",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    position: "top-[52%] right-[-1%]",
    delay: 0.9,
  },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-badge",
        { opacity: 0, y: 14, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65 }
      )
      .fromTo(".hero-headline",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.9 }, "-=0.3"
      )
      .fromTo(".hero-sub",
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 }, "-=0.55"
      )
      .fromTo(".hero-ctas",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6 }, "-=0.4"
      )
      .fromTo(".hero-stats > *",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.09 }, "-=0.35"
      )
      .fromTo(".hero-dashboard",
        { opacity: 0, y: 50, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1 }, "-=0.6"
      );

      // Scroll parallax
      gsap.to(".hero-dashboard", {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(".hero-bg-glow", {
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2.5,
        },
      });
    };

    init();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg noise-overlay pt-24 pb-16"
      id="hero"
    >
      {/* Ambient glows */}
      <div className="hero-bg-glow absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-orange-500/7 blur-[130px]" />
        <div className="absolute top-[20%] left-[30%] w-[400px] h-[300px] rounded-full bg-amber-500/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[25%] w-[350px] h-[250px] rounded-full bg-orange-600/5 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* — TEXT BLOCK — */}
        <div className="flex flex-col items-center text-center max-w-[820px] mx-auto mb-14">

          {/* Badge */}
          <div className="hero-badge brand-badge mb-8 opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            AI-Native SEO Operating System
            <span className="text-white/20 mx-1">·</span>
            <span className="text-white/35 font-normal">Early Access</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline heading-xl text-white mb-6 opacity-0">
            The AI Operating
            <br />
            <span className="gradient-text">System</span> for
            <br />
            Modern&nbsp;SEO.
          </h1>

          {/* Sub */}
          <p className="hero-sub text-[17px] sm:text-[19px] leading-[1.6] text-white/45 max-w-[560px] mb-10 opacity-0">
            One intelligent workflow. Research, generate, optimize, link,
            and publish — all automated by AI. Replace your entire SEO stack.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-col sm:flex-row items-center gap-3 mb-14 opacity-0">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(249,115,22,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="btn-brand"
            >
              Join the Waitlist
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <motion.a
              href="#workflow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-3.5 glass border border-white/[0.09] text-white/55 hover:text-white text-[14px] font-medium rounded-xl transition-all"
            >
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M4 3.5L7 5L4 6.5V3.5Z" fill="currentColor" />
                </svg>
              </div>
              Watch Workflow
            </motion.a>
          </div>

          {/* Stats */}
          <div className="hero-stats flex items-center gap-10 sm:gap-16">
            {[
              { value: "10×", label: "Faster than manual" },
              { value: "94%", label: "Avg SEO score" },
              { value: "6-in-1", label: "Tools replaced" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[30px] sm:text-[34px] font-bold text-white tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] text-white/30 mt-1.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* — DASHBOARD — */}
        <div className="hero-dashboard opacity-0 relative max-w-5xl mx-auto">
          <DashboardPreview />

          {/* Floating cards — desktop only */}
          {floatingCards.map((card) => (
            <motion.div
              key={card.label}
              className={`hidden lg:flex absolute ${card.position} items-center gap-3 px-3.5 py-2.5 rounded-xl glass border ${card.border} ${card.bg} backdrop-blur-2xl shadow-xl shadow-black/30`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
                transition: {
                  opacity: { duration: 0.4, delay: card.delay + 1.8 },
                  scale: { duration: 0.4, delay: card.delay + 1.8 },
                  y: {
                    duration: 4 + card.delay * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay + 1.8,
                  },
                },
              }}
            >
              <span className="text-[15px]">{card.icon}</span>
              <div>
                <div className="text-[9px] text-white/35 leading-none mb-0.5 font-medium uppercase tracking-wide">{card.label}</div>
                <div className="text-[12px] text-white/75 font-semibold leading-none">{card.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-medium">Scroll</div>
        <div className="w-px h-7 bg-gradient-to-b from-orange-500/30 to-transparent" />
      </motion.div>
    </section>
  );
}

/* ─── Dashboard Preview ─── */
function DashboardPreview() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-[#111111] shadow-2xl shadow-black/60 glow-orange">
      {/* Window bar */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.05] bg-[#0f0f0f]">
        <div className="flex gap-1.5">
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div className="flex-1 mx-3 h-6 rounded-md bg-white/[0.04] flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full border border-white/20" />
          <span className="text-[10px] text-white/20 font-mono">riviso.app / workspace</span>
        </div>
        <div className="flex gap-1.5">
          {[...Array(3)].map((_, i) => <div key={i} className="w-7 h-4 rounded bg-white/[0.04]" />)}
        </div>
      </div>

      {/* Dashboard body */}
      <div className="grid grid-cols-12 gap-0 min-h-[380px]">

        {/* Sidebar */}
        <div className="col-span-2 hidden sm:flex flex-col gap-1 px-3 py-4 border-r border-white/[0.04]">
          <div className="px-2 py-1.5 mb-2">
            <div className="text-[9px] text-white/20 uppercase tracking-wider font-semibold">Workspace</div>
          </div>
          {[
            { label: "Research", active: false },
            { label: "Content", active: true },
            { label: "Optimize", active: false },
            { label: "Publish", active: false },
            { label: "Analytics", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${
                item.active
                  ? "bg-orange-500/12 text-orange-400 border border-orange-500/20"
                  : "text-white/25"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="col-span-12 sm:col-span-7 p-4 flex flex-col gap-3.5">

          {/* Pipeline */}
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-white/50">Active Workflow</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-orange-500/12 text-orange-400 border border-orange-500/20 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-orange-400 animate-pulse" />
                Running · Step 4/6
              </span>
            </div>
            <WorkflowProgress />
          </div>

          {/* Articles table */}
          <div className="bg-white/[0.03] rounded-xl border border-white/[0.05] overflow-hidden flex-1">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
              <span className="text-[11px] font-semibold text-white/50">Recent Articles</span>
              <span className="text-[10px] text-orange-400">View all →</span>
            </div>
            {[
              { title: "Best AI SEO Tools 2026", score: 94, status: "Published", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
              { title: "Content Automation Guide", score: 88, status: "Optimizing", color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
              { title: "GEO vs Traditional SEO", score: null, status: "Generating", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02]">
                <div className="w-5 h-5 rounded bg-white/[0.04] flex items-center justify-center text-[9px] text-white/25 shrink-0">{i + 1}</div>
                <span className="text-[10px] text-white/55 flex-1 truncate">{item.title}</span>
                {item.score && <span className="text-[10px] font-mono text-orange-400">{item.score}</span>}
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full border ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="col-span-12 sm:col-span-3 p-4 flex flex-col gap-3.5 border-l border-white/[0.04]">
          {/* Score */}
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
            <div className="text-[10px] text-white/35 mb-1.5">SEO Score</div>
            <div className="text-[30px] font-bold text-white tracking-tight leading-none">94</div>
            <div className="text-[9px] text-orange-400 mt-1 flex items-center gap-1">
              <span>↑ +6</span><span className="text-white/25">this week</span>
            </div>
            <div className="mt-3 h-1 rounded-full bg-white/[0.07] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-orange-600 to-amber-400"
                initial={{ width: "0%" }}
                animate={{ width: "94%" }}
                transition={{ duration: 1.5, delay: 2.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Keywords */}
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.05] flex-1">
            <div className="text-[10px] text-white/35 mb-3">Top Keywords</div>
            {[
              { kw: "ai seo tool", vol: "8.2k" },
              { kw: "seo automation", vol: "5.1k" },
              { kw: "geo optimization", vol: "3.4k" },
            ].map((k) => (
              <div key={k.kw} className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0">
                <span className="text-[9px] text-white/40 truncate">{k.kw}</span>
                <span className="text-[9px] text-orange-400 font-mono ml-2">{k.vol}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowProgress() {
  const steps = ["Research", "Plan", "Generate", "Link", "SEO", "Publish"];
  const active = 3;

  return (
    <div className="flex items-end gap-1.5">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center gap-1.5 flex-1">
          <div
            className={`w-full h-1.5 rounded-full transition-all ${
              i < active
                ? "bg-gradient-to-r from-orange-600 to-orange-400"
                : i === active
                ? "bg-gradient-to-r from-orange-400 to-amber-300/60 animate-pulse"
                : "bg-white/[0.08]"
            }`}
          />
          <div className={`text-[8px] font-medium ${i <= active ? "text-white/35" : "text-white/15"}`}>
            {step}
          </div>
        </div>
      ))}
    </div>
  );
}
