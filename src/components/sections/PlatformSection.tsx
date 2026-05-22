"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import {
  AgentsIllustration,
  ContextIllustration,
  PipelinesIllustration,
} from "./platform/PlatformIllustrations";

const platformCards = [
  {
    title: "Research Agents",
    description: "Purpose-built AI agents that execute real SEO research work.",
    href: "#workflow",
    theme: "green" as const,
    Illustration: AgentsIllustration,
  },
  {
    title: "Content Pipelines",
    description: "Repeatable workflows that move work from brief to publish.",
    href: "#modules",
    theme: "orange" as const,
    Illustration: PipelinesIllustration,
  },
  {
    title: "Riviso IQ",
    description: "Maintain quality and context with a rich SEO knowledge hub.",
    href: "#modules",
    theme: "blue" as const,
    Illustration: ContextIllustration,
  },
];

const cardThemes = {
  green: {
    bg: "bg-[#e8f6ee]",
    grid: "platform-card-grid--green",
    stroke: "text-[#15803d]",
    arrow: "group-hover:bg-[#15803d] group-hover:text-white",
  },
  orange: {
    bg: "bg-[#ffeee8]",
    grid: "platform-card-grid--orange",
    stroke: "text-[#c2410c]",
    arrow: "group-hover:bg-[#c2410c] group-hover:text-white",
  },
  blue: {
    bg: "bg-[#e8f0ff]",
    grid: "platform-card-grid--blue",
    stroke: "text-[#1d4ed8]",
    arrow: "group-hover:bg-[#1d4ed8] group-hover:text-white",
  },
};

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4 9h10M10 5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PlatformSection() {
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
        el.querySelectorAll(".platform-reveal"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            once: true,
          },
        }
      );
    };

    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="flex w-full flex-col items-center bg-[var(--color-bg-base)] py-20 md:py-28"
    >
      <Container className="page-center">
        <div className="platform-reveal flex w-full max-w-[720px] flex-col items-center gap-6 text-center opacity-0 md:gap-8">
          <p className="platform-eyebrow">The Riviso Platform</p>

          <h2 className="text-headline text-[var(--color-text-primary)]">
            The execution platform for modern SEO
          </h2>

          <p className="text-body max-w-[560px]">
            From keyword intelligence to publish-ready content — orchestrate the full
            SEO workflow with AI-native infrastructure built for operators and growth teams.
          </p>

          <Link href="#modules" className="btn-platform">
            Explore The Platform
          </Link>
        </div>

        <div className="platform-reveal mt-14 grid w-full max-w-[1200px] grid-cols-1 gap-5 opacity-0 md:mt-16 md:grid-cols-3 md:gap-6">
          {platformCards.map((card) => {
            const theme = cardThemes[card.theme];
            const Illustration = card.Illustration;

            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href={card.href}
                  className={`group platform-card ${theme.bg} flex min-h-[420px] flex-col rounded-2xl p-6 md:min-h-[480px] md:p-7`}
                >
                  <h3 className="text-title text-[var(--color-text-primary)]">{card.title}</h3>

                  <div
                    className={`platform-card-art relative my-6 flex flex-1 items-center justify-center md:my-8 ${theme.grid}`}
                  >
                    <Illustration
                      className={`relative z-[1] h-auto w-full max-w-[260px] ${theme.stroke}`}
                    />
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-4">
                    <p className="max-w-[220px] text-left text-[15px] leading-[1.5] text-[var(--color-text-secondary)]">
                      {card.description}
                    </p>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current/15 bg-white/60 text-current transition-colors duration-200 ${theme.stroke} ${theme.arrow}`}
                    >
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
