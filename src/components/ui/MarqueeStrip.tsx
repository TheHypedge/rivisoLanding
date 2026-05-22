"use client";

import { motion } from "framer-motion";

const items = [
  "Research Engine",
  "Content Studio",
  "Interlink AI",
  "SEO Optimization",
  "GEO Targeting",
  "AEO Preparation",
  "WordPress Publishing",
  "Analytics Engine",
  "Keyword Clustering",
  "Schema Markup",
  "Featured Snippets",
  "AI Citations",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-white/[0.05] bg-[#0e0e0e]">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          x: { duration: 30, repeat: Infinity, ease: "linear" },
        }}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[11px] font-semibold text-white/20 tracking-wider uppercase"
          >
            <span className="w-1 h-1 rounded-full bg-orange-500/50 shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
