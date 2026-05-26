"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  "Research",
  "Cluster",
  "Plan",
  "Generate",
  "Optimize",
  "Interlink",
  "Publish",
  "Analyze",
];

const sidebarItems = [
  "Overview",
  "Workflow",
  "Content",
  "Analytics",
];

const INTERVAL_MS = 1800;

export default function WorkflowPillsLoop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const progress = ((active + 1) / steps.length) * 100;

  return (
    <div className="wf-dash">
      {/* Chrome bar */}
      <div className="wf-dash-chrome">
        <div className="wf-dash-dots" aria-hidden>
          <span className="wf-dot wf-dot--red" />
          <span className="wf-dot wf-dot--yellow" />
          <span className="wf-dot wf-dot--green" />
        </div>
        <div className="wf-dash-url">riviso.app / workflow</div>
      </div>

      <div className="wf-dash-body">
        {/* Sidebar */}
        <aside className="wf-dash-sidebar">
          <p className="wf-dash-sidebar-label">Workspace</p>
          <ul className="wf-dash-nav">
            {sidebarItems.map((item, i) => (
              <li key={item} className={cn("wf-dash-nav-item", i === 1 && "is-active")}>
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main area */}
        <div className="wf-dash-main">
          {/* Pipeline card */}
          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-card-title">Active Pipeline</span>
              <span className="wf-status">
                <span className="wf-status-dot" />
                Running
              </span>
            </div>
            <div className="wf-pipeline">
              {steps.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <div key={step} className="wf-pipeline-step">
                    <div
                      className={cn(
                        "wf-pipeline-bar",
                        isDone && "is-complete",
                        isActive && "is-active"
                      )}
                    />
                    <span className={cn(
                      "wf-pipeline-label",
                      isActive && "is-active",
                      isDone && "is-complete"
                    )}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress + metric row */}
          <div className="wf-metrics-row">
            <div className="wf-card wf-card--progress">
              <div className="wf-card-header">
                <span className="wf-card-title">Pipeline Progress</span>
                <span className="wf-card-value">{Math.round(progress)}%</span>
              </div>
              <div className="wf-progress-track">
                <div
                  className="wf-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="wf-progress-status">
                Step {active + 1} of {steps.length} — <strong>{steps[active]}</strong>
              </p>
            </div>

            <div className="wf-card wf-card--metric">
              <p className="wf-metric-label">Current step</p>
              <p className="wf-metric-big">{steps[active]}</p>
              <div className="wf-metric-pills">
                {steps.map((s, i) => (
                  <span
                    key={s}
                    className={cn(
                      "wf-mini-pill",
                      i === active && "is-active",
                      i < active && "is-done"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
