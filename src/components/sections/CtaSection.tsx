"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
        sectionRef.current.querySelector(".cta-body"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } }
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
    <section ref={sectionRef} id="cta" className="section-padding relative overflow-hidden">

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/12 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gradient-radial from-orange-600/8 via-orange-500/4 to-transparent blur-[120px]" />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -28, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 w-[200px] h-[200px] rounded-full bg-orange-600/7 blur-[80px]"
        />
        <motion.div
          animate={{ y: [0, 22, 0], x: [0, -18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/5 w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[90px]"
        />
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-[140px] h-[140px] rounded-full bg-orange-400/6 blur-[70px]"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="cta-body opacity-0">

          {/* Badge */}
          <motion.div
            className="brand-badge mx-auto w-fit mb-8"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Early Access — Limited Spots
          </motion.div>

          {/* Headline */}
          <h2 className="heading-xl text-white mb-6">
            Get Early Access to the
            <br />
            <span className="gradient-text">Future of SEO.</span>
          </h2>

          <p className="text-[17px] sm:text-[18px] text-white/40 leading-[1.65] mb-10 max-w-[500px] mx-auto">
            Join the waitlist and be among the first to experience the AI-native SEO workflow that replaces your entire stack.
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto mb-9">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.09] focus:border-orange-500/35 text-[14px] text-white placeholder-white/22 outline-none transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(249,115,22,0.4)" }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="btn-brand whitespace-nowrap disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                    />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 mb-9"
            >
              <div className="w-14 h-14 rounded-full bg-orange-500/12 border border-orange-500/25 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11l5 5 9-9" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[16px] font-semibold text-white">You&apos;re on the list!</p>
              <p className="text-[13px] text-white/35">
                We&apos;ll send early access details to <span className="text-white/55">{email}</span>
              </p>
            </motion.div>
          )}

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-[12px] text-white/25 mb-12">
            {["No credit card required", "Free during early access", "Cancel anytime"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5 5.5-5" stroke="#fb923c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex -space-x-2.5">
              {[
                "linear-gradient(135deg,#ea580c,#f97316)",
                "linear-gradient(135deg,#f59e0b,#ea580c)",
                "linear-gradient(135deg,#f97316,#fbbf24)",
                "linear-gradient(135deg,#ea580c,#dc2626)",
                "linear-gradient(135deg,#fbbf24,#f97316)",
                "linear-gradient(135deg,#fb923c,#f59e0b)",
              ].map((bg, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#0c0c0c]"
                  style={{ background: bg }}
                />
              ))}
            </div>
            <p className="text-[13px] text-white/28">
              Joined by <span className="text-white/55 font-semibold">2,400+</span> SEO professionals already
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
