"use client";

import type { CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import BrandLogoImage from "@/components/trust/BrandLogoImage";
import { brandLogoEntries, type BrandLogoEntry } from "@/lib/brand-logos";
import { cn } from "@/lib/utils";

interface LogoCarouselProps {
  logos?: BrandLogoEntry[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

const speedClass = {
  slow: "logo-carousel-track--slow",
  normal: "logo-carousel-track--normal",
  fast: "logo-carousel-track--fast",
};

export default function LogoCarousel({
  logos = brandLogoEntries,
  className,
  speed = "normal",
}: LogoCarouselProps) {
  const reduceMotion = useReducedMotion();
  const track = reduceMotion ? logos : [...logos, ...logos];

  return (
    <div
      className={cn("logo-carousel", className)}
      style={{ "--logo-count": logos.length } as CSSProperties}
    >
      <div className="logo-carousel-mask logo-carousel-mask--left" aria-hidden />
      <div className="logo-carousel-mask logo-carousel-mask--right" aria-hidden />

      <div className="logo-carousel-viewport">
        <div
          className={cn(
            "logo-carousel-track",
            !reduceMotion && speedClass[speed]
          )}
          role="list"
          aria-label="Brands actively using Riviso"
        >
          {track.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="logo-carousel-item"
              role="listitem"
            >
              <BrandLogoImage brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
