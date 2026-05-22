"use client";

import { useEffect, useRef } from "react";
import LogoCarousel from "@/components/ui/LogoCarousel";

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
          stagger: 0.08,
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
      className="trust-section flex w-full flex-col items-center overflow-hidden py-16 md:py-20 lg:py-24"
      aria-labelledby="trust-heading"
    >
      <div className="trust-section-inner flex w-full max-w-[1200px] flex-col items-center px-6 text-center">
        <h2
          id="trust-heading"
          className="trust-reveal trust-section-title text-headline w-full opacity-0"
        >
          Brands Actively Using Riviso
        </h2>

        <div className="trust-reveal logo-carousel-wrap mt-12 w-full opacity-0 md:mt-14">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
}
