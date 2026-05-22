"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "indigo" | "purple" | "none";
}

const glowMap = {
  blue: "hover:shadow-blue-500/10 hover:border-blue-500/20",
  indigo: "hover:shadow-indigo-500/10 hover:border-indigo-500/20",
  purple: "hover:shadow-purple-500/10 hover:border-purple-500/20",
  none: "",
};

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = "blue",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "glass border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300",
        hover && "cursor-default",
        hover && glow !== "none" && `shadow-xl ${glowMap[glow]}`,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
