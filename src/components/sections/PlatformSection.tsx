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
    description: "Purpose-built research agents designed to execute scalable SEO intelligence workflows.",
    href: "#workflow",
    theme: "green" as const,
    Illustration: AgentsIllustration,
  },
  {
    title: "Content Pipelines",
    description: "Structured workflows that move content from research and briefs to optimization and publishing — automatically.",
    href: "#modules",
    theme: "orange" as const,
    Illustration: PipelinesIllustration,
  },
  {
    title: "Riviso IQ",
    description: "A unified knowledge system that connects SEO strategy, optimization logic, and publishing intelligence.",
    href: "#modules",
    theme: "blue" as const,
    Illustration: ContextIllustration,
  },
];

const cardThemes = {
  green: {
    stroke: "text-[#15803d]",
    arrow: "group-hover:bg-[#15803d] group-hover:text-white",
  },
  orange: {
    stroke: "text-[#c2410c]",
    arrow: "group-hover:bg-[#c2410c] group-hover:text-white",
  },
  blue: {
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
      className="site-section platform-section w-full overflow-x-clip bg-[var(--color-bg-base)]"
    >
      <Container className="flex flex-col items-center">
        <header className="platform-header platform-reveal opacity-0">
          <h2 className="platform-header-title text-headline text-[var(--color-text-primary)]">
            Built to execute
            <br />
            modern SEO at scale
          </h2>

          <p className="text-body max-w-[560px]">
            From keyword intelligence to publish-ready content, RIVISO helps teams automate
            execution without losing strategic control.
          </p>

          <div className="platform-header-cta">
            <Link href="#modules" className="btn-platform">
              See The Workflow
            </Link>
          </div>
        </header>

        <div className="platform-cards-grid platform-reveal opacity-0">
          {platformCards.map((card) => {
            const theme = cardThemes[card.theme];
            const Illustration = card.Illustration;

            return (
              <motion.div
                key={card.title}
                className="h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link href={card.href} className="group platform-card h-full">
                  <h3 className="platform-card-title text-title text-[var(--color-text-primary)]">
                    {card.title}
                  </h3>

                  <div className="platform-card-art">
                    <div className="platform-card-diagram-wrap">
                      <Illustration className="platform-card-diagram" />
                    </div>
                  </div>

                  <div className="platform-card-footer">
                    <p className="platform-card-desc">{card.description}</p>
                    <span
                      className={`platform-card-arrow flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-white text-current transition-colors duration-200 ${theme.stroke} ${theme.arrow}`}
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
