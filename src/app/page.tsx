"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import ModulesSection from "@/components/sections/ModulesSection";
import DashboardSection from "@/components/sections/DashboardSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CtaSection from "@/components/sections/CtaSection";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import { useLenis } from "@/hooks/useLenis";

export default function Home() {
  useLenis();

  useEffect(() => {
    // Register GSAP ScrollTrigger globally
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Update ScrollTrigger on Lenis scroll
      // Lenis already integrates with GSAP's ticker via raf
      ScrollTrigger.refresh();
    };
    init();
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <WorkflowSection />
      <ModulesSection />
      <DashboardSection />
      <ComparisonSection />
      <PhilosophySection />
      <CtaSection />
      <Footer />
    </main>
  );
}
