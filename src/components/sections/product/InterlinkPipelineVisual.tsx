"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Analyze", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { label: "Map", icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" },
  { label: "Cluster", icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" },
  { label: "Connect", icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" },
  { label: "Optimize", icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
  { label: "Validate", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { label: "Strengthen", icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" },
  { label: "Scale", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" },
];

const INTERVAL_MS = 2000;

export default function InterlinkPipelineVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const progress = ((active + 1) / steps.length) * 100;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#13161a] shadow-[0_1px_0_rgba(255,255,255,0.03)_inset,0_32px_72px_-28px_rgba(0,0,0,0.55)]">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 flex-1 rounded-md bg-white/[0.04] py-1 text-center font-mono text-[10px] text-white/20">
          riviso.app / interlink-ai
        </span>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-violet-400">
            Interlinking Pipeline
          </span>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.15)]" />
            Active
          </div>
        </div>

        {/* Pipeline steps */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25">Pipeline Steps</span>
            <span className="font-mono text-[10px] font-bold text-white/30">
              {active + 1}/{steps.length}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {steps.map((step, i) => {
              const isDone = i < active;
              const isActive = i === active;
              return (
                <div
                  key={step.label}
                  className={cn(
                    "flex flex-col items-center gap-1.5 rounded-lg border px-1 py-2.5 transition-all duration-500",
                    isActive
                      ? "border-violet-500/30 bg-violet-500/[0.08] shadow-[0_0_12px_-3px_rgba(139,92,246,0.4)]"
                      : isDone
                        ? "border-emerald-500/20 bg-emerald-500/[0.05]"
                        : "border-white/[0.04] bg-transparent"
                  )}
                >
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className={cn(
                      "transition-colors duration-500",
                      isActive ? "text-violet-400" : isDone ? "text-emerald-400/70" : "text-white/15"
                    )}
                  >
                    <path d={step.icon} />
                  </svg>
                  <span className={cn(
                    "text-[8px] font-bold uppercase tracking-wide transition-colors duration-500",
                    isActive ? "text-violet-300" : isDone ? "text-emerald-400/60" : "text-white/20"
                  )}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25">Pipeline Progress</span>
            <span className="font-mono text-xs font-bold text-white/50">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400 shadow-[0_0_8px_-2px_rgba(139,92,246,0.5)] transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="m-0 mt-2 text-[11px] text-white/30">
            Step {active + 1} of {steps.length} — <span className="font-semibold text-white/50">{steps[active].label}</span>
          </p>
        </div>

        {/* Bottom metrics */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "Links mapped", value: "3,241" },
            { label: "Clusters built", value: "87" },
            { label: "Authority score", value: "94%" },
          ].map((m, i) => (
            <div
              key={m.label}
              className={cn(
                "rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-all duration-500",
                i === active % 3 && "border-white/[0.1] bg-white/[0.05]"
              )}
            >
              <p className="m-0 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/20">{m.label}</p>
              <p className={cn(
                "m-0 mt-0.5 font-mono text-base font-bold leading-none transition-colors duration-500",
                i === active % 3 ? "text-white" : "text-white/45"
              )}>
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
