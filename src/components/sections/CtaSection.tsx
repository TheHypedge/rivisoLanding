"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;
      gsap.fromTo(
        sectionRef.current.querySelector(".cta-panel"),
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        }
      );
    };
    init();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <Section id="cta" size="compact" variant="surface" divider={false} className="!border-t-0">
      <div ref={sectionRef}>
        <div className="cta-panel panel-elevated opacity-0 px-6 py-12 md:px-14 md:py-16 text-center mx-auto w-full max-w-2xl">
          <div className="brand-badge mx-auto w-fit mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Early Access — Limited Spots
          </div>

          <h2 className="heading-lg text-white mb-4">
            Get early access to the
            <br />
            <span className="gradient-text">future of SEO.</span>
          </h2>

          <p className="text-[15px] md:text-[16px] text-white/42 leading-relaxed mb-8 max-w-md mx-auto">
            Join the waitlist and be among the first to run an AI-native SEO workflow that replaces your entire stack.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto mb-8"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                required
                className="flex-1 min-w-0 px-5 py-3.5 rounded-xl bg-[#0c0c0c] border border-white/[0.1] focus:border-orange-500/40 text-[14px] text-white placeholder-white/25 outline-none transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="btn-brand !py-3.5 justify-center disabled:opacity-60 shrink-0"
              >
                {loading ? "Joining..." : "Join Waitlist →"}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <p className="text-[16px] font-semibold text-white mb-1">You&apos;re on the list.</p>
              <p className="text-[13px] text-white/40">We&apos;ll email {email} when access opens.</p>
            </motion.div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-white/30 mb-10">
            {["No credit card", "Free during early access", "Cancel anytime"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 5.5l2 2.5 5-5" stroke="#fb923c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 pt-8 border-t border-white/[0.06]">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#141414]"
                  style={{
                    background: `linear-gradient(135deg, ${i % 2 ? "#ea580c" : "#f97316"}, ${i % 2 ? "#fbbf24" : "#fb923c"})`,
                  }}
                />
              ))}
            </div>
            <p className="text-[13px] text-white/35">
              Trusted by <span className="text-white/60 font-medium">2,400+</span> SEO professionals
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
