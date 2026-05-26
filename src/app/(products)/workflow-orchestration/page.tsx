import type { Metadata } from "next";
import ProductPageShell from "@/components/sections/product/ProductPageShell";
import { getProductPage } from "@/lib/product-pages";
import { workflowOrchestrationSections } from "@/lib/sections/workflow-orchestration";
import OrchestrationPipelineVisual from "@/components/sections/product/OrchestrationPipelineVisual";
import OrchestrationOpsVisual from "@/components/sections/product/OrchestrationOpsVisual";

const page = getProductPage("workflow-orchestration")!;

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
  ...workflowOrchestrationSections,
  center: {
    ...workflowOrchestrationSections.center,
    visual: <OrchestrationPipelineVisual />,
  },
  split: {
    ...workflowOrchestrationSections.split,
    visual: <OrchestrationOpsVisual />,
  },
};

export default function WorkflowOrchestrationPage() {
  return <ProductPageShell page={page} sections={sections} />;
}
