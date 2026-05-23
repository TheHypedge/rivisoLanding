"use client";

const sidebarItems = [
  { label: "Overview", active: false },
  { label: "Research", active: true },
  { label: "Content", active: false },
  { label: "Optimize", active: false },
  { label: "Publish", active: false },
];

const pipelineSteps = [
  { label: "Research", status: "complete" as const },
  { label: "Plan", status: "complete" as const },
  { label: "Generate", status: "active" as const },
  { label: "Link", status: "pending" as const },
  { label: "Optimize", status: "pending" as const },
  { label: "Publish", status: "pending" as const },
];

const articles = [
  { title: "AI SEO Infrastructure Guide", score: 96, status: "Published" as const },
  { title: "GEO Optimization Framework", score: 91, status: "Optimizing" as const },
  { title: "Topical Authority at Scale", score: null, status: "Generating" as const },
];

const statusStyles = {
  Published: "hero-ui-badge hero-ui-badge--success",
  Optimizing: "hero-ui-badge hero-ui-badge--accent",
  Generating: "hero-ui-badge hero-ui-badge--muted",
};

export default function HeroPreview() {
  return (
    <div className="hero-preview-app">
      <div className="hero-preview-chrome">
        <div className="hero-preview-traffic" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="hero-preview-url">
          <span className="hero-preview-url-dot" aria-hidden />
          riviso.app / workspace
        </div>
        <div aria-hidden />
      </div>

      <div className="hero-preview-body">
        <aside className="hero-preview-sidebar">
          <p className="hero-preview-label">Workspace</p>
          <ul className="hero-preview-nav">
            {sidebarItems.map((item) => (
              <li
                key={item.label}
                className={item.active ? "hero-preview-nav-item is-active" : "hero-preview-nav-item"}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="hero-preview-main">
          <div className="hero-ui-card">
            <div className="hero-ui-card-header">
              <span className="hero-ui-card-title">Active pipeline</span>
              <span className="hero-ui-status">
                <span className="hero-ui-status-dot" aria-hidden />
                Running
              </span>
            </div>
            <div className="hero-pipeline">
              {pipelineSteps.map((step) => (
                <div key={step.label} className="hero-pipeline-step">
                  <div
                    className={`hero-pipeline-bar ${
                      step.status === "complete"
                        ? "is-complete"
                        : step.status === "active"
                          ? "is-active"
                          : ""
                    }`}
                  />
                  <span className="hero-pipeline-label">{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-ui-card hero-ui-card--grow">
            <div className="hero-ui-card-header hero-ui-card-header--bordered">
              <span className="hero-ui-card-title">Content queue</span>
              <span className="hero-ui-link">View all</span>
            </div>
            <ul className="hero-queue">
              {articles.map((row, i) => (
                <li key={row.title} className="hero-queue-row">
                  <span className="hero-queue-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="hero-queue-title">{row.title}</span>
                  {row.score != null && (
                    <span className="hero-queue-score">{row.score}</span>
                  )}
                  <span className={statusStyles[row.status]}>{row.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="hero-preview-metrics">
          <MetricBlock label="SEO score" value="94" delta="+6.2%" barWidth="88%" />
          <MetricBlock label="Keywords" value="2,847" delta="+348" barWidth="72%" />
          <div className="hero-ui-card hero-ui-card--insight">
            <p className="hero-preview-label">AI insight</p>
            <p className="hero-insight-copy">
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
  barWidth,
}: {
  label: string;
  value: string;
  delta: string;
  barWidth: string;
}) {
  return (
    <div className="hero-ui-card hero-ui-card--metric">
      <p className="hero-preview-label">{label}</p>
      <div className="hero-metric-value-row">
        <span className="hero-metric-value">{value}</span>
        <span className="hero-metric-delta">{delta}</span>
      </div>
      <div className="hero-metric-track">
        <div className="hero-metric-bar" style={{ width: barWidth }} aria-hidden />
      </div>
    </div>
  );
}
