"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "SEO Is Not Dead. It's Evolving.",
    body: "Search engines process billions of queries daily. But the rules have changed. Topical authority, E-E-A-T, semantic relevance — these are the new ranking signals. RIVISO is built for the algorithm of today and tomorrow.",
  },
  {
    number: "02",
    title: "GEO: The Rise of AI Search.",
    body: "Generative Engine Optimization is the frontier. ChatGPT, Perplexity, Gemini — they cite sources, surface content, and influence decisions. RIVISO optimizes for citation readiness and AI-answer prominence.",
  },
  {
    number: "03",
    title: "AEO: Answer Everything, Everywhere.",
    body: "Answer Engine Optimization ensures your content wins featured snippets, voice search queries, and structured data placements. RIVISO bakes this into every article automatically.",
  },
  {
    number: "04",
    title: "AI-Native Is Not Optional.",
    body: "The brands winning in organic search aren't just using AI tools — they're running AI-native workflows. RIVISO doesn't add AI to your process. It rebuilds the process around AI.",
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
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      // Quote word reveal
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".quote-word"),
        { opacity: 0, y: 18 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.04, ease: "power3.out",
          scrollTrigger: { trigger: quoteRef.current, start: "top 82%", once: true },
        }
      );

      // Pillars
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".pillar-card"),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current.querySelector(".pillars-grid"), start: "top 78%", once: true },
        }
      );

      // Beliefs
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".belief-item"),
        { opacity: 0, x: -16 },
        {
          opacity: 1, x: 0, duration: 0.55, stagger: 0.09, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current.querySelector(".beliefs-grid"), start: "top 80%", once: true },
        }
      );

      // Slow scroll bg text
      gsap.to(".philo-scroll-bg", {
        x: "-25%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });
    };
    init();
  }, []);

  const quote = "One intelligent workflow instead of multiple disconnected tools.";

  return (
    <section ref={sectionRef} id="philosophy" className="section-padding relative overflow-hidden">

      {/* Decorators */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-orange-600/4 blur-[130px]" />
      </div>

      {/* Scroll BG text */}
      <div className="absolute top-10 left-0 overflow-hidden w-full pointer-events-none select-none opacity-[0.02]">
        <div className="philo-scroll-bg whitespace-nowrap text-[120px] font-black text-white tracking-tight">
          SEO&nbsp;&nbsp;GEO&nbsp;&nbsp;AEO&nbsp;&nbsp;AI&nbsp;&nbsp;RIVISO&nbsp;&nbsp;AUTOMATION&nbsp;&nbsp;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="brand-badge mx-auto w-fit mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Brand Philosophy
          </div>
          <h2 className="heading-lg text-white">
            We believe SEO deserves
            <br />
            <span className="gradient-text">better infrastructure.</span>
          </h2>
        </div>

        {/* Quote */}
        <div ref={quoteRef} className="mb-20 max-w-4xl mx-auto text-center">
          <div className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold leading-[1.12] tracking-[-0.02em] text-white/75">
            {quote.split(" ").map((word, i) => (
              <span key={i} className="quote-word inline-block mr-[0.28em] opacity-0">
                {word}
              </span>
            ))}
          </div>
          <div className="mt-7 flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-orange-500/30" />
            <span className="text-[12px] text-white/28 font-medium tracking-wider uppercase">The RIVISO Principle</span>
            <div className="w-10 h-px bg-orange-500/30" />
          </div>
        </div>

        {/* Pillars */}
        <div className="pillars-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {pillars.map((p) => (
            <motion.div
              key={p.number}
              className="pillar-card bg-[#111111] border border-white/[0.06] hover:border-orange-500/15 rounded-2xl p-7 transition-all duration-300 opacity-0"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="text-[10px] font-mono font-bold text-orange-400/45 mb-3">{p.number}</div>
              <h3 className="text-[16px] font-semibold text-white mb-3 leading-snug">{p.title}</h3>
              <p className="text-[13px] text-white/38 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Beliefs */}
        <div className="beliefs-grid max-w-2xl mx-auto">
          <h3 className="text-center text-[22px] font-bold text-white mb-8 tracking-tight">What we believe.</h3>
          <div className="flex flex-col gap-3">
            {beliefs.map((belief, i) => (
              <div
                key={i}
                className="belief-item flex items-center gap-4 p-5 bg-[#111111] border border-white/[0.05] hover:border-orange-500/12 rounded-xl transition-all opacity-0"
              >
                <div className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/18 flex items-center justify-center shrink-0">
                  <span className="text-[11px] font-bold text-orange-400">{i + 1}</span>
                </div>
                <p className="text-[13.5px] text-white/50 leading-relaxed">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
