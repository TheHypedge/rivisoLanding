export type ProductPageConfig = {
  slug: string;
  eyebrow: string;
  /** Card title in Platform mega menu */
  menuTitle: string;
  /** Hero headline (rendered white on gradient) */
  title: string;
  /** Hero body copy */
  description: string;
  menuDescription: string;
  metaTitle: string;
  metaDescription: string;
  workflowColumn: "build" | "operate";
};

export const productPages: ProductPageConfig[] = [
  {
    slug: "search-engine-intelligence",
    eyebrow: "Search Engine Intelligence",
    menuTitle: "Search Intelligence / Research Engine",
    title: "Turn search data into ranked opportunities — automatically",
    description:
      "Riviso’s research layer connects keyword clustering, SERP intelligence, competitor gaps, and intent mapping in one AI-native system built for operators who need clarity before they publish.",
    menuDescription:
      "Keyword clustering, SERP analysis, competitor gaps, and intent mapping in one research layer.",
    metaTitle: "Search Engine Intelligence — RIVISO",
    metaDescription:
      "AI-powered keyword research, SERP analysis, competitor gaps, and intent mapping in one research layer built for modern SEO teams.",
    workflowColumn: "build",
  },
  {
    slug: "content-studio",
    eyebrow: "Content Studio",
    menuTitle: "Content Studio",
    title: "Move from brief to publish-ready content — without the handoffs",
    description:
      "Structured pipelines for briefs, long-form generation, and editorial quality — with tone, E-E-A-T, and brand context built into every draft.",
    menuDescription:
      "Structured briefs, generation, and editorial workflows from outline to draft.",
    metaTitle: "Content Studio — RIVISO",
    metaDescription:
      "Structured content workflows for briefs, AI generation, and editorial quality — built for modern SEO and content teams.",
    workflowColumn: "build",
  },
  {
    slug: "interlink-ai",
    eyebrow: "Interlink AI",
    menuTitle: "Interlink AI — Semantic Authority Engine",
    title: "Build topical authority with intelligence, not spreadsheets",
    description:
      "Semantic internal linking and cluster architecture that strengthens authority across your site — automated suggestions, governance, and context-aware placement.",
    menuDescription:
      "Build topical authority with intelligent internal linking and cluster architecture.",
    metaTitle: "Interlink AI — Semantic Authority Engine — RIVISO",
    metaDescription:
      "Intelligent internal linking and semantic authority for SEO — cluster architecture and link governance in one system.",
    workflowColumn: "build",
  },
  {
    slug: "optimization-layer",
    eyebrow: "Optimization Layer",
    menuTitle: "Optimization Layer",
    title: "Unify SEO, GEO, and AEO optimization in one governed layer",
    description:
      "Score, fix, and govern on-page and entity signals — schema, metadata, snippet readiness, and AI-search optimization without switching tools.",
    menuDescription:
      "Unified SEO, GEO, and AEO scoring with schema, metadata, and governance built in.",
    metaTitle: "Optimization Layer — RIVISO",
    metaDescription:
      "Unified SEO, GEO, and AEO optimization with scoring, schema, metadata, and governance for enterprise teams.",
    workflowColumn: "build",
  },
  {
    slug: "publishing-hub",
    eyebrow: "Publishing Hub",
    menuTitle: "Publishing Hub",
    title: "Publish optimized content to WordPress — on your schedule",
    description:
      "Push approved content to WordPress and connected channels with scheduling, QA gates, and full traceability from brief to live URL.",
    menuDescription:
      "Push optimized content to WordPress and connected channels with scheduling and QA gates.",
    metaTitle: "Publishing Hub — RIVISO",
    metaDescription:
      "Publish SEO-optimized content to WordPress with scheduling, QA workflows, and direct Riviso integration.",
    workflowColumn: "operate",
  },
  {
    slug: "analytic-engine",
    eyebrow: "Analytic Engine",
    menuTitle: "Analytic Engine",
    title: "Measure what your workflow actually moves",
    description:
      "Rankings, traffic, and workflow ROI in dashboards built for SEO operators — connect production metrics to business outcomes.",
    menuDescription:
      "Track rankings, traffic, and workflow ROI with dashboards built for SEO operators.",
    metaTitle: "Analytic Engine — RIVISO",
    metaDescription:
      "SEO analytics and workflow ROI dashboards — rankings, traffic, and performance for modern growth teams.",
    workflowColumn: "operate",
  },
  {
    slug: "workflow-orchestration",
    eyebrow: "Workflow Orchestration",
    menuTitle: "Workflow Orchestration",
    title: "Orchestrate research through publish — without tool sprawl",
    description:
      "Automate handoffs between research, content, optimization, and publish with Riviso IQ keeping context, quality, and operators aligned.",
    menuDescription:
      "Automate handoffs between research, content, optimization, and publish with Riviso IQ.",
    metaTitle: "Workflow Orchestration — RIVISO",
    metaDescription:
      "End-to-end SEO workflow orchestration — automate research, content, optimization, and publishing in one system.",
    workflowColumn: "operate",
  },
];

export const productPagesBySlug = Object.fromEntries(
  productPages.map((page) => [page.slug, page])
) as Record<string, ProductPageConfig>;

export const productPageSlugs = productPages.map((page) => page.slug);

export function getProductPage(slug: string): ProductPageConfig | undefined {
  return productPagesBySlug[slug];
}

export function productPagePath(slug: string): string {
  return `/${slug}`;
}

const buildColumnItems = (column: ProductPageConfig["workflowColumn"]) =>
  productPages
    .filter((page) => page.workflowColumn === column)
    .map((page) => ({
      title: page.menuTitle,
      description: page.menuDescription,
      href: productPagePath(page.slug),
    }));

/** Platform mega menu workflow links — synced with product pages */
export function getPlatformWorkflowMenuItems() {
  return {
    build: buildColumnItems("build"),
    operate: buildColumnItems("operate"),
  };
}
