"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import HeroPreview from "@/components/dashboard/HeroPreview";
import WaitlistModal from "@/components/waitlist/WaitlistModal";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

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
    <>
      <section
        ref={sectionRef}
        id="product"
        className="hero-section relative flex w-full flex-col items-center overflow-x-hidden"
      >
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.45]" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-[18%] h-[520px] w-[min(920px,92vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.09)_0%,transparent_68%)] blur-[100px]" />

        <Container className="page-center relative pb-20 md:pb-28">
          <div className="hero-reveal mx-auto flex w-full max-w-[780px] flex-col items-center gap-7 px-4 text-center opacity-0 md:gap-9">
            <div className="badge mx-auto w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              AI-native SEO infrastructure
            </div>

            <h1 className="hero-headline text-display text-[var(--color-text-primary)]">
              The AI Operating System
              <br />
              <span className="hero-headline-accent text-[var(--color-accent)]">
                for Modern SEO
              </span>
            </h1>

            <p className="hero-subcopy text-body mx-auto max-w-[560px] text-[1.0625rem] leading-[1.65] md:text-[1.125rem]">
              From research to publishing — automate the entire SEO workflow with
              AI-native infrastructure built for operators, publishers, and growth teams.
            </p>

            <div className="flex flex-col items-center gap-4">
              <motion.button
                type="button"
                onClick={() => setWaitlistOpen(true)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="btn-waitlist min-w-[220px] px-8 py-3.5 text-[0.9375rem] shadow-[0_12px_40px_-12px_rgba(234,88,12,0.45)]"
              >
                Join Waitlist
              </motion.button>
              <p className="text-body-sm flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                <span>No credit card required</span>
                <span className="hidden text-zinc-300 sm:inline" aria-hidden>
                  ·
                </span>
                <span>Early access for founding teams</span>
              </p>
            </div>
          </div>

          <div className="hero-preview mt-10 w-full max-w-[1080px] px-2 opacity-0 sm:mt-14 sm:px-0 md:mt-16">
            <div className="hero-preview-frame">
              <HeroPreview />
            </div>
          </div>
        </Container>

        <div className="divider-h w-full" />
      </section>

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  );
}
