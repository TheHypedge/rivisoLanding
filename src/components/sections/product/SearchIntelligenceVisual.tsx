"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const panels = [
  { label: "Search Intelligence Dashboard", shortLabel: "Search Intel", color: "bg-orange-500", colorMuted: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/30", glow: "shadow-[0_0_12px_-3px_rgba(234,88,12,0.5)]" },
  { label: "SERP Opportunity Mapping", shortLabel: "SERP Mapping", color: "bg-blue-500", colorMuted: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30", glow: "shadow-[0_0_12px_-3px_rgba(59,130,246,0.5)]" },
  { label: "Keyword Intelligence Engine", shortLabel: "Keyword Intel", color: "bg-emerald-500", colorMuted: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30", glow: "shadow-[0_0_12px_-3px_rgba(16,185,129,0.5)]" },
  { label: "Intent & Topic Cluster View", shortLabel: "Intent Clusters", color: "bg-violet-500", colorMuted: "bg-violet-500/20", text: "text-violet-400", border: "border-violet-500/30", glow: "shadow-[0_0_12px_-3px_rgba(139,92,246,0.5)]" },
  { label: "Semantic Search Visualization", shortLabel: "Semantic Map", color: "bg-amber-500", colorMuted: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30", glow: "shadow-[0_0_12px_-3px_rgba(245,158,11,0.5)]" },
  { label: "Search Opportunity Analysis", shortLabel: "Opportunities", color: "bg-rose-500", colorMuted: "bg-rose-500/20", text: "text-rose-400", border: "border-rose-500/30", glow: "shadow-[0_0_12px_-3px_rgba(244,63,94,0.5)]" },
];

const metrics = [
  { label: "Keywords analyzed", value: "12,847" },
  { label: "Clusters mapped", value: "342" },
  { label: "SERP overlap", value: "67%" },
  { label: "Opportunities", value: "1,204" },
];

const INTERVAL_MS = 2400;

export default function SearchIntelligenceVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % panels.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const current = panels[active];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#13161a] shadow-[0_1px_0_rgba(255,255,255,0.03)_inset,0_32px_72px_-28px_rgba(0,0,0,0.55)]">
      {/* Chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 flex-1 rounded-md bg-white/[0.04] py-1 text-center font-mono text-[10px] text-white/20">
          riviso.app / intelligence
        </span>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* Active view badge */}
        <div className="flex items-center justify-between">
          <div className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-500",
            current.border, current.text
          )}
          style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <span className={cn("h-2 w-2 rounded-full transition-all duration-500", current.color, current.glow)} />
            {current.label}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.15)]" />
            Live
          </div>
        </div>

        {/* Metric cards row */}
        <div className="grid grid-cols-2 gap-2.5">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={cn(
                "rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 transition-all duration-500",
                i === active % metrics.length && "border-white/[0.1] bg-white/[0.05]"
              )}
            >
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25">{m.label}</p>
              <p className={cn(
                "m-0 mt-1 font-mono text-lg font-bold leading-none transition-colors duration-500",
                i === active % metrics.length ? "text-white" : "text-white/50"
              )}>
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* Bar chart visualization */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25">Topic Authority Distribution</span>
            <span className="font-mono text-[10px] font-bold text-white/30">6 clusters</span>
          </div>
          <div className="flex items-end gap-1.5" style={{ height: 80 }}>
            {[68, 92, 45, 85, 58, 78].map((val, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={cn(
                    "w-full rounded-t-[4px] transition-all duration-600 ease-out",
                    i === active % 6
                      ? cn("bg-gradient-to-t from-orange-600 to-orange-400", current.glow)
                      : "bg-white/[0.08]"
                  )}
                  style={{
                    height: `${i === active % 6 ? 100 : val}%`,
                    transitionDuration: "600ms",
                  }}
                />
                <span className={cn(
                  "text-[8px] font-bold uppercase transition-colors duration-300",
                  i === active % 6 ? "text-white/60" : "text-white/15"
                )}>
                  {panels[i].shortLabel.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* View selector tabs */}
        <div className="flex flex-wrap gap-1.5">
          {panels.map((p, i) => (
            <div
              key={p.label}
              className={cn(
                "flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-medium transition-all duration-400",
                i === active
                  ? "border-white/[0.12] bg-white/[0.06] text-white/70"
                  : "border-transparent bg-transparent text-white/20"
              )}
            >
              <span className={cn(
                "h-1.5 w-1.5 rounded-full transition-all duration-400",
                i === active ? cn(p.color, p.glow) : p.colorMuted
              )} />
              {p.shortLabel}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
