import { getPlatformWorkflowMenuItems } from "./product-pages";

export type NavMenuId = "platform" | "resources";

export interface NavLinkItem {
  title: string;
  description?: string;
  href: string;
}

export interface NavColumn {
  title: string;
  description?: string;
  accent?: "blue" | "green" | "orange" | "purple";
  links: NavLinkItem[];
  footerLink?: { label: string; href: string };
}

export interface NavFeatureCard {
  title: string;
  description: string;
  href: string;
  accent: "blue" | "green" | "orange";
}

export const mainNavItems: { id: NavMenuId; label: string }[] = [
  { id: "platform", label: "Platform" },
  { id: "resources", label: "Resources" },
];

export interface PlatformWorkflowItem {
  title: string;
  description: string;
  href: string;
}

export interface PlatformWorkflowColumn {
  title: string;
  description: string;
  items: PlatformWorkflowItem[];
}

const workflowMenuItems = getPlatformWorkflowMenuItems();

export const platformWorkflowMenu = {
  featured: {
    title: "Riviso Platform",
    description:
      "One orchestrated pipeline from search intelligence through content, optimization, and publish — built for operators who need execution at scale.",
    href: "/#platform",
    cta: "Explore the platform",
  },
  columns: [
    {
      title: "Build",
      description: "",
      items: workflowMenuItems.build,
    },
    {
      title: "Operate",
      description: "",
      items: workflowMenuItems.operate,
    },
  ] as PlatformWorkflowColumn[],
};

export const solutionsMenu = {
  intro: {
    title: "Solutions by use case",
    description:
      "Scale organic growth with one AI-native workflow — from research through publish.",
  },
  useCases: [
    {
      title: "SEO automation",
      description: "Replace fragmented tools with one orchestrated pipeline.",
      href: "#workflow",
      accent: "orange" as const,
    },
    {
      title: "GEO & AEO",
      description: "Optimize for AI search, citations, and answer engines.",
      href: "#workflow",
      accent: "orange" as const,
    },
    {
      title: "Publishing at scale",
      description: "Generate, optimize, and publish directly to WordPress.",
      href: "#workflow",
      accent: "green" as const,
    },
  ],
  byRole: [
    { title: "SEO operators", href: "#solutions" },
    { title: "Content teams", href: "#solutions" },
    { title: "Growth marketers", href: "#solutions" },
    { title: "Agencies", href: "#solutions" },
    { title: "Publishers", href: "#solutions" },
    { title: "In-house SEO", href: "#solutions" },
  ],
  byIndustry: [
    { title: "SaaS & technology", href: "#solutions" },
    { title: "E-commerce", href: "#solutions" },
    { title: "Media & publishing", href: "#solutions" },
    { title: "Financial services", href: "#solutions" },
    { title: "Healthcare", href: "#solutions" },
    { title: "Professional services", href: "#solutions" },
  ],
};

export const resourcesMenu: NavColumn[] = [
  {
    title: "Discover",
    description: "Stories, updates, and proof from teams using RIVISO.",
    links: [
      { title: "Blog", description: "SEO operations insights and product updates.", href: "#resources" },
      { title: "Customer stories", description: "How teams scale with RIVISO.", href: "#resources" },
      { title: "Product changelog", description: "Latest features and improvements.", href: "#resources" },
    ],
  },
  {
    title: "Learn",
    description: "Guides and education for AI-native SEO workflows.",
    links: [
      { title: "Documentation", description: "Setup, APIs, and workflow guides.", href: "#resources" },
      { title: "RIVISO foundations", description: "Core concepts and best practices.", href: "#resources" },
      { title: "Webinars", description: "Live sessions with product experts.", href: "#resources" },
    ],
  },
  {
    title: "Get support",
    description: "Help when you need it — from onboarding to scale.",
    links: [
      { title: "Help center", description: "FAQs and troubleshooting.", href: "#resources" },
      { title: "Contact support", description: "Talk to our team.", href: "#contact" },
      { title: "Customer success", description: "Onboarding and enterprise support.", href: "#contact" },
    ],
  },
];

export const companyMenu = {
  featured: {
    title: "About RIVISO",
    description: "Building the AI operating system for modern SEO.",
    href: "#about",
    cta: "Learn more",
  },
  columns: [
    {
      title: "Company information",
      description: "News, careers, and legal resources.",
      links: [
        { title: "Newsroom", href: "#about" },
        { title: "Careers", href: "#about" },
        { title: "Legal information", href: "#about" },
      ],
    },
    {
      title: "Trust foundation",
      description: "Security, governance, and compliance for enterprise teams.",
      links: [
        { title: "Security", href: "#about" },
        { title: "Governance", href: "#about" },
        { title: "Data & privacy", href: "#about" },
      ],
    },
  ],
};
