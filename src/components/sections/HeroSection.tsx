"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import HeroPreview from "@/components/dashboard/HeroPreview";
import WaitlistModal from "@/components/waitlist/WaitlistModal";

function TrustCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.2" />
      <path
        d="M4.25 7.25 6.1 9.1 9.85 5.35"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.06 }
      ).fromTo(
        el.querySelector(".hero-preview-stage"),
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.85 },
        "-=0.3"
      );

      gsap.to(el.querySelector(".hero-preview-stage"), {
        y: -12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
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
        className="site-section hero-section relative w-full overflow-x-hidden"
      >
        <div className="hero-backdrop pointer-events-none absolute inset-0" aria-hidden />
        <div className="hero-backdrop-glow pointer-events-none absolute inset-0" aria-hidden />

        <Container className="hero-inner page-center relative flex flex-col items-center">
          <div className="hero-copy hero-reveal mx-auto flex w-full max-w-[720px] flex-col items-center text-center opacity-0">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" aria-hidden />
              AI-native SEO infrastructure
            </div>

            <h1 className="hero-headline">
              <span className="hero-headline-line">Run Your Entire SEO Workflow</span>
              <span className="hero-headline-accent">From One Intelligent System</span>
            </h1>

            <p className="hero-subcopy">
            From research to publishing, RIVISO automates the complete SEO workflow — including content generation, interlinking, GEO, AEO, optimization, and direct WordPress publishing.
            </p>

            <div className="hero-cta-stack">
              <button
                type="button"
                onClick={() => setWaitlistOpen(true)}
                className="btn-waitlist hero-cta-primary"
              >
                Join Waitlist
              </button>
             
            </div>
          </div>

          <div className="hero-preview-stage hero-reveal mx-auto w-full max-w-[1040px] opacity-0">
            <div className="hero-preview-rail" aria-hidden />
            <div className="hero-preview-frame">
              <HeroPreview />
            </div>
          </div>
        </Container>

        <div className="hero-section-fade pointer-events-none" aria-hidden />
      </section>

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  );
}
