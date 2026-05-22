"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    opacity?: number;
  }
) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;

    const el = ref.current;
    const delay = options?.delay ?? 0;
    const duration = options?.duration ?? 0.8;
    const fromY = options?.y ?? 40;

    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        el,
        { opacity: 0, y: fromY },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    };

    loadGSAP();
  }, [ref, options?.delay, options?.duration, options?.y, options?.opacity]);
}

export function useStaggerReveal(
  containerRef: RefObject<HTMLElement | null>,
  selector: string,
  options?: { stagger?: number; delay?: number; y?: number; duration?: number }
) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!containerRef.current) return;

    const container = containerRef.current;

    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const elements = container.querySelectorAll(selector);
      if (!elements.length) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: options?.y ?? 30 },
        {
          opacity: 1,
          y: 0,
          duration: options?.duration ?? 0.7,
          delay: options?.delay ?? 0,
          stagger: options?.stagger ?? 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            once: true,
          },
        }
      );
    };

    loadGSAP();
  }, [containerRef, selector]);
}
