"use client";

import { motion } from "framer-motion";

const sidebarItems = [
  { label: "Overview", active: false },
  { label: "Research", active: true },
  { label: "Content", active: false },
  { label: "Optimize", active: false },
  { label: "Publish", active: false },
];

const pipelineSteps = [
  { label: "Research", status: "complete" },
  { label: "Plan", status: "complete" },
  { label: "Generate", status: "active" },
  { label: "Link", status: "pending" },
  { label: "Optimize", status: "pending" },
  { label: "Publish", status: "pending" },
];

const articles = [
  { title: "AI SEO Infrastructure Guide", score: 96, status: "Published" },
  { title: "GEO Optimization Framework", score: 91, status: "Optimizing" },
  { title: "Topical Authority at Scale", score: null, status: "Generating" },
];

export default function HeroPreview() {
  return (
    <div className="surface-elevated relative mx-auto w-full overflow-hidden">
      {/* Window chrome — symmetric 3-column bar */}
      <div className="grid grid-cols-[52px_1fr_52px] items-center border-b border-[var(--color-border-muted)] bg-[#0a0a0a] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="flex justify-center px-2">
          <div className="flex items-center gap-2 rounded-md border border-[var(--color-border-muted)] bg-[#111] px-4 py-1.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]/60" />
            <span className="font-mono text-[11px] text-[var(--color-text-muted)] whitespace-nowrap">
              riviso.app / workspace
            </span>
          </div>
        </div>
        <div aria-hidden />
      </div>

      {/* 3-column body — balanced 3 | 6 | 3 on large screens */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-12 lg:min-h-[440px]">
        {/* Left */}
        <aside className="border-b border-[var(--color-border-muted)] bg-[#0a0a0a] p-4 lg:col-span-3 lg:border-b-0 lg:border-r">
          <p className="text-label mb-3">Workspace</p>
          <ul className="space-y-0.5">
            {sidebarItems.map((item) => (
              <li
                key={item.label}
                className={`rounded-md px-2.5 py-2 text-[12px] font-medium ${
                  item.active
                    ? "bg-[rgba(249,115,22,0.1)] text-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)]"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Center */}
        <div className="flex flex-col gap-4 p-4 lg:col-span-6">
          <div className="surface p-4">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="text-[12px] font-semibold text-[var(--color-text-secondary)]">
                Active pipeline
              </span>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-[rgba(249,115,22,0.25)] bg-[rgba(249,115,22,0.08)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-accent)]">
                <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--color-accent)]" />
                Running
              </span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {pipelineSteps.map((step) => (
                <div key={step.label} className="flex flex-col items-center gap-2">
                  <div
                    className={`h-1 w-full rounded-full ${
                      step.status === "complete"
                        ? "bg-[var(--color-accent)]"
                        : step.status === "active"
                        ? "bg-[var(--color-accent)]/45"
                        : "bg-[rgba(255,255,255,0.08)]"
                    }`}
                  />
                  <span className="text-center text-[9px] font-medium text-[var(--color-text-muted)]">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface min-h-[180px] flex-1 overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--color-border-muted)] px-4 py-2.5">
              <span className="text-[11px] font-semibold text-[var(--color-text-muted)]">
                Content queue
              </span>
              <span className="text-[10px] text-[var(--color-accent)]">View all</span>
            </div>
            <ul>
              {articles.map((row, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 border-b border-[var(--color-border-muted)] px-4 py-2.5 last:border-0"
                >
                  <span className="w-5 shrink-0 font-mono text-[10px] text-[var(--color-text-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[11px] text-[var(--color-text-secondary)]">
                    {row.title}
                  </span>
                  {row.score != null && (
                    <span className="shrink-0 font-mono text-[10px] text-[var(--color-accent)]">
                      {row.score}
                    </span>
                  )}
                  <span
                    className={`shrink-0 rounded-md px-1.5 py-0.5 text-[9px] font-medium ${
                      row.status === "Published"
                        ? "bg-[rgba(35,134,54,0.15)] text-[#3fb950]"
                        : row.status === "Optimizing"
                        ? "bg-[rgba(249,115,22,0.1)] text-[var(--color-accent)]"
                        : "bg-[rgba(245,158,11,0.1)] text-[var(--color-accent-indigo)]"
                    }`}
                  >
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right */}
        <aside className="flex flex-col gap-3 border-t border-[var(--color-border-muted)] bg-[#0a0a0a] p-4 lg:col-span-3 lg:border-l lg:border-t-0">
          <MetricBlock label="SEO Score" value="94" delta="+6.2%" />
          <MetricBlock label="Keywords" value="2,847" delta="+348" />
          <div className="surface flex-1 p-3">
            <p className="text-label mb-2">AI insight</p>
            <p className="text-[11px] leading-relaxed text-[var(--color-text-muted)]">
              Publish 3 cluster articles this week to capture rising GEO intent queries.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function MetricBlock({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="surface p-3">
      <p className="text-label mb-1">{label}</p>
      <p className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
        {value}
      </p>
      <p className="mt-1 text-[10px] font-medium text-[#3fb950]">{delta}</p>
      <motion.div
        className="mt-2 h-1 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="h-full rounded-full bg-[var(--color-accent)]"
          initial={{ width: 0 }}
          animate={{ width: "88%" }}
          transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
}
