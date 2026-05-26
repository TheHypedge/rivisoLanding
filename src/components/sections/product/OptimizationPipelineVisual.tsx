"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Analyze", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { label: "Optimize", icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
  { label: "Structure", icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" },
  { label: "Enrich", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" },
  { label: "Validate", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { label: "Govern", icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" },
  { label: "Monitor", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { label: "Improve", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" },
];

const INTERVAL_MS = 2000;

export default function OptimizationPipelineVisual() {
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
      {/* Chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 flex-1 rounded-md bg-white/[0.04] py-1 text-center font-mono text-[10px] text-white/20">
          riviso.app / optimization
        </span>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-400">
            Optimization Pipeline
          </span>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.15)]" />
            Active
          </div>
        </div>

        {/* Pipeline grid */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25">Pipeline Steps</span>
            <span className="font-mono text-[10px] font-bold text-white/30">{active + 1}/{steps.length}</span>
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
                      ? "border-emerald-500/30 bg-emerald-500/[0.08] shadow-[0_0_12px_-3px_rgba(16,185,129,0.4)]"
                      : isDone
                        ? "border-blue-500/20 bg-blue-500/[0.05]"
                        : "border-white/[0.04] bg-transparent"
                  )}
                >
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className={cn(
                      "transition-colors duration-500",
                      isActive ? "text-emerald-400" : isDone ? "text-blue-400/70" : "text-white/15"
                    )}
                  >
                    <path d={step.icon} />
                  </svg>
                  <span className={cn(
                    "text-[8px] font-bold uppercase tracking-wide transition-colors duration-500",
                    isActive ? "text-emerald-300" : isDone ? "text-blue-400/60" : "text-white/20"
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
              className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_8px_-2px_rgba(16,185,129,0.5)] transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="m-0 mt-2 text-[11px] text-white/30">
            Step {active + 1} of {steps.length} — <span className="font-semibold text-white/50">{steps[active].label}</span>
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "Pages optimized", value: "4,892" },
            { label: "Schema validated", value: "1,247" },
            { label: "GEO readiness", value: "91%" },
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
