import type { Metadata } from "next";
import ProductPageShell from "@/components/sections/product/ProductPageShell";
import { getProductPage } from "@/lib/product-pages";
import { contentStudioSections } from "@/lib/sections/content-studio";
import ContentPipelineVisual from "@/components/sections/product/ContentPipelineVisual";
import ContentOpsVisual from "@/components/sections/product/ContentOpsVisual";

const page = getProductPage("content-studio")!;

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
  ...contentStudioSections,
  center: {
    ...contentStudioSections.center,
    visual: <ContentPipelineVisual />,
  },
  split: {
    ...contentStudioSections.split,
    visual: <ContentOpsVisual />,
  },
};

export default function ContentStudioPage() {
  return <ProductPageShell page={page} sections={sections} />;
}
