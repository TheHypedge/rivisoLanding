/** Shared hero visual until per-product assets are added under public/media/ */
export const defaultProductHeroImage = "/media/searchIntelligence.png";

export const defaultProductHeroImageAlt =
  "Riviso platform visualization with magnifying glass over glowing data landscape";

export type ProductPageConfig = {
  slug: string;
  eyebrow: string;
  /** Card title in Platform mega menu */
  menuTitle: string;
  /** Hero headline (rendered white on gradient) */
  title: string;
  /** Hero body copy */
  description: string;
  /** Hero background — path under /public (e.g. /media/searchIntelligence.png) */
  heroImage?: string;
  heroImageAlt?: string;
  menuDescription: string;
  metaTitle: string;
  metaDescription: string;
  workflowColumn: "build" | "operate";
};

const sharedProductHero = {
  heroImage: defaultProductHeroImage,
  heroImageAlt: defaultProductHeroImageAlt,
} as const;

export const productPages: ProductPageConfig[] = [
  {
    slug: "search-engine-intelligence",
    eyebrow: "Search Engine Intelligence",
    menuTitle: "Search Intelligence / Research Engine",
    title: "Turn search data into scalable growth opportunities",
    description:
      "Riviso unifies keyword intelligence, SERP analysis, topical mapping, and AI-assisted workflows into one operational SEO platform — enabling teams to research, plan, optimize, and publish with precision.",
    ...sharedProductHero,
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
    title: "Move from search strategy to publish-ready content — in one unified workflow",
    description:
      "Riviso Content Studio combines AI-assisted briefing, semantic outlining, long-form generation, optimization, and editorial workflows into a centralized content operations system built for modern SEO teams.",
    ...sharedProductHero,
    heroImage: "/media/contentStudio.png",
    heroImageAlt: "Riviso Content Studio — unified content operations workflow",
    menuDescription:
      "Structured briefs, generation, and editorial workflows from outline to draft.",
    metaTitle: "Content Studio — RIVISO",
    metaDescription:
      "AI-native content operations platform — briefs, generation, optimization, and editorial workflows for modern SEO teams.",
    workflowColumn: "build",
  },
  {
    slug: "interlink-ai",
    eyebrow: "Interlink AI",
    menuTitle: "Interlink AI — Semantic Authority Engine",
    title: "Build semantic authority through intelligent internal linking systems",
    description:
      "Riviso Interlink AI automatically maps contextual relationships between pages, topics, and entities to create scalable internal linking architectures designed for stronger topical authority, improved crawl efficiency, and deeper search relevance.",
    ...sharedProductHero,
    menuDescription:
      "Build topical authority with intelligent internal linking and cluster architecture.",
    metaTitle: "Interlink AI — Semantic Authority Engine — RIVISO",
    metaDescription:
      "AI-powered semantic internal linking — contextual relationship mapping, topical clustering, and link governance for modern SEO teams.",
    workflowColumn: "build",
  },
  {
    slug: "optimization-layer",
    eyebrow: "Optimization Layer",
    menuTitle: "Optimization Layer",
    title: "Optimize for SEO, GEO, and AI-native search visibility from one unified system",
    description:
      "Riviso Optimization Layer combines semantic SEO, GEO optimization, structured metadata, schema intelligence, and content governance into a centralized workflow designed for modern search ecosystems and AI-driven discovery.",
    ...sharedProductHero,
    menuDescription:
      "Unified SEO, GEO, and AEO scoring with schema, metadata, and governance built in.",
    metaTitle: "Optimization Layer — RIVISO",
    metaDescription:
      "AI-native optimization for SEO, GEO, and AI-search visibility — semantic intelligence, schema, metadata, and governance in one system.",
    workflowColumn: "build",
  },
  {
    slug: "publishing-hub",
    eyebrow: "Publishing Hub",
    menuTitle: "Publishing Hub",
    title: "Publish optimized content across channels through one operational workflow",
    description:
      "Riviso Publishing Hub centralizes publishing, scheduling, QA validation, metadata controls, and distribution workflows to help teams move from optimized drafts to live search-ready content with operational consistency.",
    ...sharedProductHero,
    menuDescription:
      "Push optimized content to WordPress and connected channels with scheduling and QA gates.",
    metaTitle: "Publishing Hub — RIVISO",
    metaDescription:
      "Centralized publishing operations — scheduling, QA validation, metadata controls, and deployment workflows for modern SEO teams.",
    workflowColumn: "operate",
  },
  {
    slug: "analytic-engine",
    eyebrow: "Analytic Engine",
    menuTitle: "Analytic Engine",
    title: "Transform SEO performance data into operational growth intelligence",
    description:
      "Riviso Analytic Engine centralizes rankings, traffic visibility, content performance, workflow efficiency, and search intelligence into unified dashboards designed for modern SEO operations and scalable decision-making.",
    ...sharedProductHero,
    menuDescription:
      "Track rankings, traffic, and workflow ROI with dashboards built for SEO operators.",
    metaTitle: "Analytic Engine — RIVISO",
    metaDescription:
      "Centralized SEO analytics — rankings, traffic, workflow ROI, and search intelligence for scalable growth operations.",
    workflowColumn: "operate",
  },
  {
    slug: "workflow-orchestration",
    eyebrow: "Workflow Orchestration",
    menuTitle: "Workflow Orchestration",
    title: "Connect research, content, optimization, and publishing into one intelligent operational workflow",
    description:
      "Riviso Workflow Orchestration centralizes task automation, operational handoffs, approvals, execution pipelines, and AI-assisted coordination to help SEO teams scale workflows without fragmentation or manual bottlenecks.",
    ...sharedProductHero,
    menuDescription:
      "Automate handoffs between research, content, optimization, and publish with Riviso IQ.",
    metaTitle: "Workflow Orchestration — RIVISO",
    metaDescription:
      "AI-native workflow orchestration — task automation, approvals, execution pipelines, and operational coordination for scalable SEO teams.",
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
