"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import BenefitsShowcaseSection from "@/components/sections/BenefitsShowcaseSection";
import PlatformSection from "@/components/sections/PlatformSection";
import ExecutionSection from "@/components/sections/ExecutionSection";
import { useLenis } from "@/hooks/useLenis";

export default function Home() {
  useLenis();

  useEffect(() => {
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
    };
    init();
  }, []);

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[var(--color-bg-base)]">
      <Navbar />
      <div className="hero-container w-full">
        <HeroSection />
      </div>
      <TrustSection />
      <BenefitsShowcaseSection />
      <PlatformSection />
      <ExecutionSection />
    </main>
  );
}
