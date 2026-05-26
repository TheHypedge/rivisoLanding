"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const features = [
  { label: "Automation Engine", stat: "4,720", desc: "Tasks automated", color: "bg-rose-500", glow: "shadow-[0_0_10px_-3px_rgba(244,63,94,0.5)]", track: 94 },
  { label: "Task Coordination", stat: "156", desc: "Active workflows", color: "bg-blue-500", glow: "shadow-[0_0_10px_-3px_rgba(59,130,246,0.5)]", track: 86 },
  { label: "Approval System", stat: "100%", desc: "Governance compliance", color: "bg-emerald-500", glow: "shadow-[0_0_10px_-3px_rgba(16,185,129,0.5)]", track: 100 },
  { label: "Cross-Team Intel", stat: "24", desc: "Teams connected", color: "bg-violet-500", glow: "shadow-[0_0_10px_-3px_rgba(139,92,246,0.5)]", track: 78 },
  { label: "Execution Pipeline", stat: "98%", desc: "On-time delivery", color: "bg-amber-500", glow: "shadow-[0_0_10px_-3px_rgba(245,158,11,0.5)]", track: 98 },
  { label: "AI Coordination", stat: "+68%", desc: "Efficiency gain", color: "bg-orange-500", glow: "shadow-[0_0_10px_-3px_rgba(234,88,12,0.5)]", track: 72 },
];

const INTERVAL_MS = 2600;

export default function OrchestrationOpsVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const current = features[active];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#13161a] shadow-[0_1px_0_rgba(255,255,255,0.03)_inset,0_32px_72px_-28px_rgba(0,0,0,0.55)]">
      {/* Chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 flex-1 rounded-md bg-white/[0.04] py-1 text-center font-mono text-[10px] text-white/20">
          riviso.app / workflow-ops
        </span>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* Active badge */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-3 py-1.5 text-xs font-semibold text-white/60" style={{ background: "rgba(255,255,255,0.03)" }}>
            <span className={cn("h-2 w-2 rounded-full transition-all duration-500", current.color, current.glow)} />
            <span className="transition-all duration-500">{current.label}</span>
          </div>
          <span className="font-mono text-lg font-bold text-white/70 transition-all duration-500">{current.stat}</span>
        </div>

        {/* Workflow flow visualization */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25">Execution Flow</span>
            <span className="font-mono text-[10px] font-bold text-white/30">6 systems</span>
          </div>
          <div className="flex items-end gap-1.5" style={{ height: 80 }}>
            {features.map((f, i) => (
              <div key={f.label} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={cn(
                    "w-full rounded-t-[4px] transition-all ease-out",
                    i === active
                      ? cn("bg-gradient-to-t from-rose-600 to-rose-400", current.glow)
                      : "bg-white/[0.08]"
                  )}
                  style={{
                    height: `${i === active ? 100 : f.track}%`,
                    transitionDuration: "600ms",
                  }}
                />
                <span className={cn(
                  "text-[8px] font-bold uppercase transition-colors duration-300",
                  i === active ? "text-white/60" : "text-white/15"
                )}>
                  {f.label.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-2">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={cn(
                "flex flex-col gap-1.5 rounded-xl border px-3 py-2.5 transition-all duration-500",
                i === active
                  ? "border-white/[0.12] bg-white/[0.06]"
                  : "border-white/[0.04] bg-white/[0.015]"
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.06em] transition-colors duration-500",
                  i === active ? "text-white/50" : "text-white/20"
                )}>
                  {f.label}
                </span>
                <span className={cn(
                  "font-mono text-[11px] font-bold transition-colors duration-500",
                  i === active ? "text-white/80" : "text-white/25"
                )}>
                  {f.stat}
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-700 ease-out",
                    i === active
                      ? cn("bg-gradient-to-r from-rose-600 to-rose-400", f.glow)
                      : "bg-white/[0.08]"
                  )}
                  style={{ width: `${i === active ? 100 : f.track}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tabs */}
        <div className="flex flex-wrap gap-1.5">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={cn(
                "flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-medium transition-all duration-400",
                i === active
                  ? "border-white/[0.12] bg-white/[0.06] text-white/70"
                  : "border-transparent text-white/20"
              )}
            >
              <span className={cn(
                "h-1.5 w-1.5 rounded-full transition-all duration-400",
                i === active ? cn(f.color, f.glow) : "bg-white/10"
              )} />
              {f.label.split(" ")[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
