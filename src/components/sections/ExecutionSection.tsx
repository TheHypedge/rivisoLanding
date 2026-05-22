"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";

const stackLabels = [
  {
    label: "Research Agents",
    variant: "deep" as const,
    offset: "ml-0",
    width: "w-[min(100%,280px)]",
  },
  {
    label: "Content Pipelines",
    variant: "bright" as const,
    offset: "ml-8 md:ml-14",
    width: "w-[min(100%,360px)]",
  },
  {
    label: "Riviso IQ",
    variant: "light" as const,
    offset: "ml-2 md:ml-6",
    width: "w-[min(100%,240px)]",
  },
];

const labelVariants = {
  deep: "execution-label--deep",
  bright: "execution-label--bright",
  light: "execution-label--light",
};

function PlusIcon() {
  return (
    <span className="execution-label-icon" aria-hidden>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function ExecutionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = sectionRef.current;
      if (!el) return;

      gsap.fromTo(
        el.querySelector(".execution-copy"),
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        }
      );

      gsap.fromTo(
        el.querySelectorAll(".execution-label"),
        { opacity: 0, x: 32 },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        }
      );
    };

    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="execution"
      className="execution-section w-full bg-[#050505] py-20 md:py-28 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="execution-copy opacity-0">
            <h2 className="text-headline text-[#f8fafc]">
              RIVISO is AI built to execute SEO end to end
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.65] text-zinc-400">
              <p>
                From keyword intelligence to publish-ready content — RIVISO orchestrates the
                full SEO workflow in one AI-native system built for operators, publishers, and
                growth teams.
              </p>
              <p>
                Replace fragmented tools with agents, pipelines, and context that keep every
                step connected — so your team ships faster without sacrificing quality or control.
              </p>
            </div>
          </div>

          <div className="execution-visual relative flex min-h-[320px] items-center justify-center md:min-h-[400px]">
            <div className="execution-visual-bg pointer-events-none absolute inset-0 rounded-2xl" aria-hidden />

            <div className="relative z-[1] flex w-full max-w-[420px] flex-col gap-4 py-6">
              {stackLabels.map((item, i) => (
                <div
                  key={item.label}
                  className={`execution-label opacity-0 ${item.offset} ${item.width}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`execution-label-chip ${labelVariants[item.variant]}`}>
                    <PlusIcon />
                    <span className="execution-label-text">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
