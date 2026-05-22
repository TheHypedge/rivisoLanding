"use client";

import { useState } from "react";
import Link from "next/link";
import { siteLogo } from "@/lib/site-logo";
import { cn } from "@/lib/utils";

type RivisoLogoProps = {
  variant?: "default" | "onDark";
  href?: string;
  className?: string;
  imageClassName?: string;
  /** Show text wordmark if image is missing */
  showTextFallback?: boolean;
};

export default function RivisoLogo({
  variant = "default",
  href = "/",
  className,
  imageClassName,
  showTextFallback = true,
}: RivisoLogoProps) {
  const [failed, setFailed] = useState(false);
  const [useFallbackSrc, setUseFallbackSrc] = useState(false);
  const primarySrc = variant === "onDark" ? siteLogo.onDark : siteLogo.default;
  const src =
    useFallbackSrc && variant === "onDark" ? siteLogo.default : primarySrc;

  const content =
    failed && showTextFallback ? (
      <span
        className={cn(
          "font-[family-name:var(--font-heading)] text-xl font-[450] lowercase tracking-tight",
          variant === "onDark" ? "text-[#ea580c]" : "text-[#ea580c]"
        )}
      >
        riviso
      </span>
    ) : (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt="Riviso"
        onError={() => {
          if (variant === "onDark" && !useFallbackSrc) {
            setUseFallbackSrc(true);
            return;
          }
          setFailed(true);
        }}
        className={cn(
          "h-8 w-auto max-w-[160px] object-contain object-left",
          imageClassName
        )}
      />
    );

  if (!href) {
    return <div className={cn("inline-flex items-center", className)}>{content}</div>;
  }

  return (
    <Link href={href} className={cn("nav-logo inline-flex shrink-0 items-center", className)}>
      {content}
    </Link>
  );
}
