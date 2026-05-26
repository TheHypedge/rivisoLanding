import type { Metadata } from "next";
import ProductPageShell from "@/components/sections/product/ProductPageShell";
import { getProductPage } from "@/lib/product-pages";
import { publishingHubSections } from "@/lib/sections/publishing-hub";
import PublishingPipelineVisual from "@/components/sections/product/PublishingPipelineVisual";
import PublishingOpsVisual from "@/components/sections/product/PublishingOpsVisual";

const page = getProductPage("publishing-hub")!;

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
  ...publishingHubSections,
  center: {
    ...publishingHubSections.center,
    visual: <PublishingPipelineVisual />,
  },
  split: {
    ...publishingHubSections.split,
    visual: <PublishingOpsVisual />,
  },
};

export default function PublishingHubPage() {
  return <ProductPageShell page={page} sections={sections} />;
}
