"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Container from "@/components/layout/Container";

type StatCard = {
  endValue: number;
  suffix: string;
  description: string;
  boldText: string;
  descAfter: string;
  source: string;
};

const stats: StatCard[] = [
  {
    endValue: 84,
    suffix: "%",
    description: "of marketers expect ",
    boldText: "AI-driven search experiences to significantly impact organic discovery strategies",
    descAfter: " over the next 12 months.",
    source: "Industry Research Trends",
  },
  {
    endValue: 41,
    suffix: "%",
    description: "of users ",
    boldText: "trust AI-generated recommendations and search summaries",
    descAfter: " during product and research discovery workflows.",
    source: "AI Search Behavior Report",
  },
  {
    endValue: 1.2,
    suffix: "B+",
    description: "",
    boldText: "AI-assisted prompts are processed daily",
    descAfter: " across modern conversational search and generative discovery platforms.",
    source: "Global AI Usage Trends",
  },
];

function useCountUp(end: number, duration: number, started: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    const isDecimal = end % 1 !== 0;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setValue(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, started]);

  return value;
}

function StatCounter({ stat, index, started }: { stat: StatCard; index: number; started: boolean }) {
  const count = useCountUp(stat.endValue, 1800, started);
  const isDecimal = stat.endValue % 1 !== 0;
  const display = isDecimal ? count.toFixed(1) : count.toString();

  return (
    <div className="ai-discovery-card flex flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white opacity-0 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_32px_-12px_rgba(15,23,42,0.1)]">
      <div className="relative flex flex-col px-6 pb-0 pt-6 sm:px-7 sm:pt-7">
        <span className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-none tracking-[-0.04em] text-zinc-900">
          {display}
          <span className="text-[0.65em] text-zinc-400">{stat.suffix}</span>
        </span>
        {/* Card-specific visual */}
        {index === 0 && <MiniAreaChart className="mt-4 h-[72px] w-full" />}
        {index === 1 && <BarVisual className="mt-4 h-[72px]" />}
        {index === 2 && (
          <GridVisual className="mt-4 h-[72px] w-full overflow-hidden rounded-lg border border-zinc-100" />
        )}
      </div>
      <div className="flex flex-col gap-3 border-t border-zinc-100 px-6 py-5 sm:px-7">
        <p className="m-0 text-sm leading-relaxed text-zinc-500">
          {stat.description}
          <span className="font-semibold text-zinc-700">{stat.boldText}</span>
          {stat.descAfter}
        </p>
        <p className="m-0 text-xs text-zinc-400">
          Source:{" "}
          <span className="font-medium text-zinc-500">{stat.source}</span>
        </p>
      </div>
    </div>
  );
}

function MiniAreaChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 60" fill="none" className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M0 55 L20 52 L40 48 L60 45 L80 38 L100 28 L120 18 L140 10 L160 4 L160 60 L0 60 Z"
        fill="url(#area-fill)"
      />
      <path
        d="M0 55 L20 52 L40 48 L60 45 L80 38 L100 28 L120 18 L140 10 L160 4"
        stroke="#7c3aed"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BarVisual({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex h-full items-end justify-start gap-2">
        <div className="h-[45%] w-10 rounded-t-md bg-zinc-200/60" />
        <div className="h-full w-10 rounded-t-md bg-gradient-to-t from-[#ea580c] to-[#f97316] shadow-[0_-8px_24px_-6px_rgba(234,88,12,0.3)]" />
        <div className="h-[65%] w-10 rounded-t-md bg-zinc-200/60" />
      </div>
    </div>
  );
}

function GridVisual({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-1.5 p-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-md border border-zinc-200/60 bg-zinc-50/80" />
        ))}
      </div>
    </div>
  );
}

export default function AIDiscoverySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);

  const startCounters = useCallback(() => setCountersStarted(true), []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = sectionRef.current;
      if (!el) return;

      gsap.fromTo(
        el.querySelector(".ai-discovery-eyebrow"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%", once: true },
        }
      );

      gsap.fromTo(
        el.querySelector(".ai-discovery-header"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        }
      );

      gsap.fromTo(
        el.querySelector(".ai-discovery-copy"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        }
      );

      gsap.fromTo(
        el.querySelector(".ai-discovery-prompt"),
        { opacity: 0, y: 20, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.35,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        }
      );

      gsap.fromTo(
        el.querySelectorAll(".ai-discovery-card"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 72%", once: true },
          onStart: startCounters,
        }
      );

      gsap.fromTo(
        el.querySelector(".ai-discovery-footer"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 60%", once: true },
        }
      );
    };

    init();
  }, [startCounters]);

  return (
    <section
      ref={sectionRef}
      className="site-section w-full bg-[var(--color-bg-base)] py-20 md:py-28 lg:py-32"
      aria-labelledby="ai-discovery-heading"
    >
      <Container>
        {/* Eyebrow */}
        <p className="ai-discovery-eyebrow platform-eyebrow mb-6 w-fit opacity-0">
          AI Search Shift
        </p>

        {/* Header */}
        <div className="ai-discovery-header flex flex-col gap-6 opacity-0 md:flex-row md:items-start md:justify-between md:gap-12 lg:gap-20">
          <h2
            id="ai-discovery-heading"
            className="m-0 max-w-lg flex-shrink-0 font-[family-name:var(--font-heading)] text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-zinc-900"
          >
            AI is becoming the new
            <br />
            discovery layer of the internet
          </h2>
          <p className="m-0 max-w-lg text-base leading-relaxed text-zinc-500 md:pt-2 md:text-[1.0625rem]">
            Search behavior is evolving from traditional blue links to
            AI-generated answers, recommendations, and conversational discovery.
            Brands that fail to appear in AI-driven search ecosystems risk losing
            visibility, trust, and demand before users ever reach a website.
          </p>
        </div>

        {/* Supporting copy */}
        <p className="ai-discovery-copy m-0 mt-8 max-w-3xl text-base leading-relaxed text-zinc-500 opacity-0 md:mt-10 md:text-[1.0625rem]">
          Riviso helps organizations optimize for both traditional search engines
          and emerging AI-native discovery environments through semantic
          intelligence, structured optimization, and operational SEO workflows.
        </p>

        {/* AI prompt bar */}
        <div className="ai-discovery-prompt mt-12 flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-white px-4 py-3 opacity-0 shadow-[0_1px_3px_rgba(15,23,42,0.04)] md:mt-16 md:gap-4 md:px-5 md:py-3.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-violet-600 shadow-[0_2px_8px_-2px_rgba(139,92,246,0.5)]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <p className="m-0 text-sm text-zinc-400 md:text-[0.9375rem]">
            What is the best{" "}
            <span className="font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-2">
              AI SEO platform
            </span>{" "}
            for enterprise teams?
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-16 md:gap-6">
          {stats.map((stat, i) => (
            <StatCounter key={i} stat={stat} index={i} started={countersStarted} />
          ))}
        </div>

        {/* Footer microcopy */}
        <p className="ai-discovery-footer m-0 mt-12 text-center text-sm font-medium tracking-[-0.01em] text-zinc-400 opacity-0 md:mt-16">
          Built for the future of AI-native search visibility
        </p>
      </Container>
    </section>
  );
}
