import type { Metadata } from "next";
import ProductPageShell from "@/components/sections/product/ProductPageShell";
import { getProductPage } from "@/lib/product-pages";
import { analyticEngineSections } from "@/lib/sections/analytic-engine";
import AnalyticsPipelineVisual from "@/components/sections/product/AnalyticsPipelineVisual";
import AnalyticsOpsVisual from "@/components/sections/product/AnalyticsOpsVisual";

const page = getProductPage("analytic-engine")!;

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
  ...analyticEngineSections,
  center: {
    ...analyticEngineSections.center,
    visual: <AnalyticsPipelineVisual />,
  },
  split: {
    ...analyticEngineSections.split,
    visual: <AnalyticsOpsVisual />,
  },
};

export default function AnalyticEnginePage() {
  return <ProductPageShell page={page} sections={sections} />;
}
