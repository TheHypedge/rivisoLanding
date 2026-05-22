"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import {
  ContextIllustration,
  LifecycleIllustration,
  QualityIllustration,
  ScaleIllustration,
} from "./benefits/BenefitsIllustrations";

type BenefitTheme = "orange" | "green" | "blue" | "amber";

type BenefitItem = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  theme: BenefitTheme;
  Illustration: React.ComponentType<{ className?: string }>;
};

const benefits: BenefitItem[] = [
  {
    id: "lifecycle",
    title: "Automate every step of the SEO lifecycle",
    description:
      "Move from keyword research to publish-ready drafts in one connected flow — agents handle clustering, briefs, and outlines while your team stays in control.",
    ctaLabel: "Explore content pipelines",
    ctaHref: "#platform",
    theme: "orange",
    Illustration: LifecycleIllustration,
  },
  {
    id: "scale",
    title: "Scale campaigns across sites and markets",
    description:
      "Run repeatable workflows across portfolios without copy-paste chaos — batch briefs, localize clusters, and ship more pages with the same headcount.",
    ctaLabel: "Explore research agents",
    ctaHref: "#execution",
    theme: "blue",
    Illustration: ScaleIllustration,
  },
  {
    id: "context",
    title: "Keep brand and SEO context in one hub",
    description:
      "Riviso IQ stores voice, competitors, entities, and style rules so every agent and pipeline outputs on-brand, search-aligned content.",
    ctaLabel: "Learn about Riviso IQ",
    ctaHref: "#platform",
    theme: "green",
    Illustration: ContextIllustration,
  },
  {
    id: "quality",
    title: "Ship faster without sacrificing quality",
    description:
      "Built-in scoring checks intent, readability, and entity coverage before publish — so operators move fast with confidence, not rework.",
    ctaLabel: "View quality controls",
    ctaHref: "#modules",
    theme: "amber",
    Illustration: QualityIllustration,
  },
];

const themeGridClass: Record<BenefitTheme, string> = {
  orange: "benefits-visual-grid--orange",
  green: "benefits-visual-grid--green",
  blue: "benefits-visual-grid--blue",
  amber: "benefits-visual-grid--amber",
};

const themeActiveClass: Record<BenefitTheme, string> = {
  orange: "benefits-accordion-item--orange",
  green: "benefits-accordion-item--green",
  blue: "benefits-accordion-item--blue",
  amber: "benefits-accordion-item--amber",
};

const themeCtaClass: Record<BenefitTheme, string> = {
  orange: "benefits-showcase-cta--orange",
  green: "benefits-showcase-cta--green",
  blue: "benefits-showcase-cta--blue",
  amber: "benefits-showcase-cta--amber",
};

function ArrowLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BenefitsShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = benefits[activeIndex];
  const ActiveIllustration = active.Illustration;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = sectionRef.current;
      if (!el) return;

      gsap.fromTo(
        el.querySelectorAll(".benefits-reveal"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    };

    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="benefits-showcase-section w-full bg-[var(--color-bg-base)] py-20 md:py-28"
      aria-labelledby="benefits-showcase-heading"
    >
      <Container>
        <div className="benefits-reveal benefits-showcase mx-auto w-full max-w-[1200px] opacity-0">
          <div className="benefits-showcase-layout">
            <header className="benefits-showcase-header">
              <p className="platform-eyebrow mb-5 w-fit">Why Riviso</p>
              <h2
                id="benefits-showcase-heading"
                className="text-headline text-[var(--color-text-primary)]"
              >
                Why modern SEO teams choose Riviso
              </h2>
              <p className="text-body mt-5">
                Give your team the tools to move faster, stay on-brand, and scale SEO across
                every site, market, and content type.
              </p>
            </header>

            <div
              className="benefits-accordion"
              role="tablist"
              aria-label="Riviso benefits"
            >
              {benefits.map((item, index) => {
                const isActive = activeIndex === index;
                const tabId = `${listId}-tab-${item.id}`;
                const panelId = `${listId}-panel-${item.id}`;

                return (
                  <div
                    key={item.id}
                    className={cn(
                      "benefits-accordion-item",
                      isActive && "benefits-accordion-item--active",
                      isActive && themeActiveClass[item.theme]
                    )}
                  >
                    <button
                      type="button"
                      id={tabId}
                      role="tab"
                      aria-selected={isActive}
                      aria-expanded={isActive}
                      aria-controls={`${listId}-visual-panel`}
                      tabIndex={isActive ? 0 : -1}
                      className="benefits-accordion-trigger"
                      onClick={() => setActiveIndex(index)}
                    >
                      <h3 className="benefits-accordion-title text-title text-left">
                        {item.title}
                      </h3>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key={`detail-${item.id}`}
                            id={panelId}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="benefits-accordion-detail overflow-hidden"
                          >
                            <p className="text-body mt-4">{item.description}</p>
                            <Link
                              href={item.ctaHref}
                              className={cn(
                                "benefits-showcase-cta",
                                themeCtaClass[item.theme]
                              )}
                            >
                              {item.ctaLabel}
                              <ArrowLinkIcon />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                );
              })}
            </div>

            <div
              id={`${listId}-visual-panel`}
              className={cn(
                "benefits-showcase-panel",
                themeGridClass[active.theme]
              )}
              role="tabpanel"
              aria-labelledby={`${listId}-tab-${active.id}`}
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="benefits-showcase-panel-content"
                >
                  <ActiveIllustration className="h-auto w-full max-w-[520px]" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
