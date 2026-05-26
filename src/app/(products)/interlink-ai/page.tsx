import type { Metadata } from "next";
import ProductPageShell from "@/components/sections/product/ProductPageShell";
import { getProductPage } from "@/lib/product-pages";
import { interlinkAiSections } from "@/lib/sections/interlink-ai";
import InterlinkPipelineVisual from "@/components/sections/product/InterlinkPipelineVisual";
import InterlinkOpsVisual from "@/components/sections/product/InterlinkOpsVisual";

const page = getProductPage("interlink-ai")!;

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
  ...interlinkAiSections,
  center: {
    ...interlinkAiSections.center,
    visual: <InterlinkPipelineVisual />,
  },
  split: {
    ...interlinkAiSections.split,
    visual: <InterlinkOpsVisual />,
  },
};

export default function InterlinkAiPage() {
  return <ProductPageShell page={page} sections={sections} />;
}
