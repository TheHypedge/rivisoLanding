"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteLogo } from "@/lib/site-logo";
import { cn } from "@/lib/utils";

type RivisoLogoProps = {
  variant?: "default" | "onDark";
  href?: string;
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
};

export default function RivisoLogo({
  variant = "default",
  href = "/",
  className,
  imageClassName,
  onClick,
}: RivisoLogoProps) {
  const [mounted, setMounted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [useFallbackSrc, setUseFallbackSrc] = useState(false);

  useEffect(() => setMounted(true), []);

  const primarySrc = variant === "onDark" ? siteLogo.onDark : siteLogo.default;
  const src =
    useFallbackSrc && variant === "onDark" ? siteLogo.default : primarySrc;

  const content = !mounted ? (
    <span
      className={cn("inline-block h-8 w-[120px]", imageClassName)}
      aria-hidden
    />
  ) : failed ? (
    <span
      className={cn(
        "font-[family-name:var(--font-heading)] text-xl font-[450] lowercase tracking-tight text-[#ea580c]",
        imageClassName
      )}
    >
      riviso
    </span>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Riviso"
      width={140}
      height={32}
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
    <Link href={href} onClick={onClick} className={cn("nav-logo inline-flex shrink-0 items-center", className)}>
      {content}
    </Link>
  );
}
