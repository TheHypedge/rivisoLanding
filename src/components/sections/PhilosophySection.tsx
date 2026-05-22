"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";

const pillars = [
  {
    number: "01",
    title: "SEO Is Not Dead. It's Evolving.",
    body: "Topical authority, E-E-A-T, and semantic relevance are the new ranking signals. RIVISO is built for the algorithm of today and tomorrow.",
  },
  {
    number: "02",
    title: "GEO: The Rise of AI Search.",
    body: "ChatGPT, Perplexity, and Gemini cite sources and shape decisions. RIVISO optimizes for citation readiness and AI-answer prominence.",
  },
  {
    number: "03",
    title: "AEO: Answer Everything, Everywhere.",
    body: "Win featured snippets, voice search, and structured placements — baked into every article automatically.",
  },
  {
    number: "04",
    title: "AI-Native Is Not Optional.",
    body: "Winning brands run AI-native workflows. RIVISO rebuilds your process around intelligence, not bolt-on tools.",
  },
];

const beliefs = [
  "Automation should remove friction, not humanity.",
  "Content quality and velocity are not trade-offs.",
  "The best SEO strategy starts with intelligence.",
  "Publishing should be a consequence, not a task.",
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".quote-word"),
        { opacity: 0, y: 18 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.04, ease: "power3.out",
          scrollTrigger: { trigger: quoteRef.current, start: "top 82%", once: true },
        }
      );

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".pillar-card"),
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current.querySelector(".pillars-grid"), start: "top 78%", once: true },
        }
      );

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".belief-item"),
        { opacity: 0, x: -12 },
        {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current.querySelector(".beliefs-grid"), start: "top 80%", once: true },
        }
      );
    };
    init();
  }, []);

  const quote = "One intelligent workflow instead of multiple disconnected tools.";

  return (
    <Section id="philosophy" variant="default" className="relative overflow-hidden">
      <div ref={sectionRef} className="relative">
        <SectionHeader
          align="center"
          badge="Brand Philosophy"
          title={
            <>
              SEO deserves
              <br />
              <span className="gradient-text">better infrastructure.</span>
            </>
          }
        />

        <blockquote
          ref={quoteRef}
          className="mb-16 md:mb-20 max-w-3xl mx-auto text-center px-4"
        >
          <p className="text-[26px] sm:text-[32px] md:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white/80">
            {quote.split(" ").map((word, i) => (
              <span key={i} className="quote-word inline-block mr-[0.28em] opacity-0">
                {word}
              </span>
            ))}
          </p>
          <footer className="mt-6 text-[12px] font-medium uppercase tracking-wider text-white/28">
            The RIVISO Principle
          </footer>
        </blockquote>

        <div className="pillars-grid mx-auto w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-16 md:mb-20">
          {pillars.map((p) => (
            <motion.div
              key={p.number}
              className="pillar-card panel p-6 md:p-7 hover:border-orange-500/15 transition-colors opacity-0"
              whileHover={{ y: -3 }}
            >
              <div className="text-[10px] font-mono font-bold text-orange-400/45 mb-3">{p.number}</div>
              <h3 className="text-[16px] font-semibold text-white mb-2 leading-snug">{p.title}</h3>
              <p className="text-[13px] text-white/38 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="beliefs-grid max-w-2xl mx-auto">
          <h3 className="text-center text-[20px] font-bold text-white mb-8">What we believe</h3>
          <ul className="flex flex-col gap-3">
            {beliefs.map((belief, i) => (
              <li
                key={i}
                className="belief-item flex items-center gap-4 panel px-5 py-4 opacity-0"
              >
                <span className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/18 flex items-center justify-center text-[11px] font-bold text-orange-400 shrink-0">
                  {i + 1}
                </span>
                <span className="text-[14px] text-white/50 leading-relaxed">{belief}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
