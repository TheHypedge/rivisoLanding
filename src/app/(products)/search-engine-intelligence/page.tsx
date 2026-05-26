import type { Metadata } from "next";
import ProductPageShell from "@/components/sections/product/ProductPageShell";
import WorkflowPillsLoop from "@/components/sections/product/WorkflowPillsLoop";
import SearchIntelligenceVisual from "@/components/sections/product/SearchIntelligenceVisual";
import { getProductPage } from "@/lib/product-pages";
import { searchEngineIntelligenceSections } from "@/lib/sections/search-engine-intelligence";

const page = getProductPage("search-engine-intelligence")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    type: "website",
  },
};

const sections = {
  ...searchEngineIntelligenceSections,
  center: {
    ...searchEngineIntelligenceSections.center,
    visual: <WorkflowPillsLoop />,
  },
  split: {
    ...searchEngineIntelligenceSections.split,
    visual: <SearchIntelligenceVisual />,
  },
};

export default function SearchEngineIntelligencePage() {
  return <ProductPageShell page={page} sections={sections} />;
}
