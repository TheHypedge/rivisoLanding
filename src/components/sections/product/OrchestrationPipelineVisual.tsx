"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Assign", icon: "M18 18.72a9.094 9.094 0 003.741-2.706 9.066 9.066 0 00-7.741-13.515 9.066 9.066 0 00-7.741 13.515A9.094 9.094 0 0010 18.72m-3-4.97a3 3 0 116 0 3 3 0 01-6 0z" },
  { label: "Coordinate", icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" },
  { label: "Automate", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" },
  { label: "Approve", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Execute", icon: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" },
  { label: "Publish", icon: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" },
  { label: "Monitor", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { label: "Optimize", icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
];

const INTERVAL_MS = 2000;

export default function OrchestrationPipelineVisual() {
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
          riviso.app / orchestration
        </span>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-rose-400">
            Orchestration Pipeline
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
                      ? "border-rose-500/30 bg-rose-500/[0.08] shadow-[0_0_12px_-3px_rgba(244,63,94,0.4)]"
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
                      isActive ? "text-rose-400" : isDone ? "text-emerald-400/70" : "text-white/15"
                    )}
                  >
                    <path d={step.icon} />
                  </svg>
                  <span className={cn(
                    "text-[8px] font-bold uppercase tracking-wide transition-colors duration-500",
                    isActive ? "text-rose-300" : isDone ? "text-emerald-400/60" : "text-white/20"
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
              className="h-full rounded-full bg-gradient-to-r from-rose-600 to-rose-400 shadow-[0_0_8px_-2px_rgba(244,63,94,0.5)] transition-all duration-700 ease-out"
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
            { label: "Workflows active", value: "156" },
            { label: "Tasks automated", value: "4,720" },
            { label: "Team efficiency", value: "+68%" },
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
