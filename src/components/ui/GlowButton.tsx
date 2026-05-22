"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  glowColor?: string;
  children: React.ReactNode;
}

export default function GlowButton({
  variant = "primary",
  size = "md",
  glowColor = "rgba(59,130,246,0.3)",
  className,
  children,
  ...props
}: GlowButtonProps) {
  const sizeMap = {
    sm: "px-4 py-2 text-[12px]",
    md: "px-6 py-3 text-[13px]",
    lg: "px-8 py-4 text-[15px]",
  };

  const variantMap = {
    primary:
      "bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20",
    ghost:
      "bg-transparent text-white/60 hover:text-white border border-white/10 hover:border-white/20",
    outline:
      "bg-transparent text-orange-500 border border-orange-500/30 hover:border-orange-500/60",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.02,
        boxShadow: variant === "primary" ? `0 0 40px ${glowColor}` : undefined,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200",
        sizeMap[size],
        variantMap[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
