"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import HeroPreview from "@/components/dashboard/HeroPreview";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = sectionRef.current;
      if (!el) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        el.querySelectorAll(".hero-reveal"),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }
      ).fromTo(
        el.querySelector(".hero-preview"),
        { opacity: 0, y: 48, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        "-=0.35"
      );

      gsap.to(el.querySelector(".hero-preview"), {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    };

    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="product"
      className="hero-section relative flex w-full flex-col items-center overflow-x-hidden"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[480px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-[rgba(234,88,12,0.06)] blur-[120px]" />

      <Container className="page-center relative pb-24 md:pb-32">
        {/* Centered copy */}
        <div className="hero-reveal flex w-full max-w-[720px] flex-col items-center gap-8 px-4 text-center opacity-0 md:gap-10">
          <div className="badge mx-auto w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            AI-native SEO infrastructure
          </div>

          <h1 className="text-display text-[var(--color-text-primary)]">
            The AI Operating System
            <br />
            <span className="text-[var(--color-accent)]">for Modern SEO</span>
          </h1>

          <p className="text-body mx-auto max-w-[540px]">
            From research to publishing — automate the entire SEO workflow with
            AI-native infrastructure built for operators, publishers, and growth teams.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="btn-primary w-full sm:w-auto sm:min-w-[180px]"
            >
              Join Waitlist
            </motion.a>
            <motion.a
              href="#workflow"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="btn-secondary w-full sm:w-auto sm:min-w-[180px]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M5.5 5.5L9 7L5.5 8.5V5.5Z" fill="currentColor" />
              </svg>
              Watch Workflow
            </motion.a>
          </div>

          <p className="text-body-sm">No credit card required · Early access for founding teams</p>
        </div>

        {/* Dashboard — full width of container, centered on page */}
        <div className="hero-preview mt-6 w-full max-w-[1040px] px-2 opacity-0 sm:mt-10 sm:px-0 md:mt-12">
          <HeroPreview />
        </div>
      </Container>

      <div className="divider-h w-full" />
    </section>
  );
}
