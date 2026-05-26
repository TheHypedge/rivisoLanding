import type { Metadata } from "next";
import ProductPageShell from "@/components/sections/product/ProductPageShell";
import { getProductPage } from "@/lib/product-pages";
import { optimizationLayerSections } from "@/lib/sections/optimization-layer";
import OptimizationPipelineVisual from "@/components/sections/product/OptimizationPipelineVisual";
import OptimizationOpsVisual from "@/components/sections/product/OptimizationOpsVisual";

const page = getProductPage("optimization-layer")!;

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
  ...optimizationLayerSections,
  center: {
    ...optimizationLayerSections.center,
    visual: <OptimizationPipelineVisual />,
  },
  split: {
    ...optimizationLayerSections.split,
    visual: <OptimizationOpsVisual />,
  },
};

export default function OptimizationLayerPage() {
  return <ProductPageShell page={page} sections={sections} />;
}
