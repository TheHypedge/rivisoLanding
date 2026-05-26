"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Research", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { label: "Brief", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  { label: "Outline", icon: "M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" },
  { label: "Generate", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" },
  { label: "Optimize", icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
  { label: "Review", icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Approve", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Publish", icon: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" },
];

const INTERVAL_MS = 2000;

export default function ContentPipelineVisual() {
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
          riviso.app / content-studio
        </span>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-orange-400">
              Content Pipeline
            </span>
          </div>
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
                      ? "border-orange-500/30 bg-orange-500/[0.08] shadow-[0_0_12px_-3px_rgba(234,88,12,0.4)]"
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
                      isActive ? "text-orange-400" : isDone ? "text-emerald-400/70" : "text-white/15"
                    )}
                  >
                    <path d={step.icon} />
                  </svg>
                  <span className={cn(
                    "text-[8px] font-bold uppercase tracking-wide transition-colors duration-500",
                    isActive ? "text-orange-300" : isDone ? "text-emerald-400/60" : "text-white/20"
                  )}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress bar */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25">Pipeline Progress</span>
            <span className="font-mono text-xs font-bold text-white/50">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_8px_-2px_rgba(234,88,12,0.5)] transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="m-0 mt-2 text-[11px] text-white/30">
            Step {active + 1} of {steps.length} — <span className="font-semibold text-white/50">{steps[active].label}</span>
          </p>
        </div>

        {/* Bottom metric row */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "Briefs generated", value: "847" },
            { label: "In review", value: "23" },
            { label: "Published", value: "1,204" },
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
