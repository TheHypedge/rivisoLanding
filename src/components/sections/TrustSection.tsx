"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";

const logos = [
  "Northline Media",
  "ScalePress",
  "ContentGrid",
  "RankTheory",
  "PublishOS",
  "SearchLayer",
  "Atlas SEO",
  "Meridian",
];

export default function TrustSection() {
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
        el.querySelectorAll(".trust-reveal"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
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
      id="trust"
      className="flex w-full flex-col items-center bg-[var(--color-bg-raised)] py-16 md:py-20"
    >
      <Container className="page-center">
        <p className="trust-reveal w-full text-center text-body-sm opacity-0">
          Built for modern publishing teams and SEO operators
        </p>

        <div className="trust-reveal divider-h my-10 w-full max-w-[960px] opacity-0" />

        <ul className="trust-reveal flex w-full max-w-[960px] flex-wrap items-center justify-center gap-x-10 gap-y-8 opacity-0 md:gap-x-14">
          {logos.map((name) => (
            <li key={name} className="flex justify-center">
              <span className="whitespace-nowrap text-[13px] font-semibold tracking-tight text-zinc-400 transition-colors hover:text-zinc-600">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </Container>

      <div className="divider-h mt-0 w-full" />
    </section>
  );
}
