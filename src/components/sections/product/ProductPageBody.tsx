import type { ProductPageSectionsContent } from "@/lib/product-page-sections";
import BenefitsGrid from "./BenefitsGrid";
import ProductCenterFeature from "./ProductCenterFeature";
import ProductFaqSection from "./ProductFaqSection";
import ProductSplitFeature from "./ProductSplitFeature";

export default function ProductPageBody({ sections }: { sections: ProductPageSectionsContent }) {
  return (
    <>
      <ProductCenterFeature {...sections.center} />
      {sections.benefitsGrid && <BenefitsGrid {...sections.benefitsGrid} />}
      <ProductSplitFeature {...sections.split} />
      <ProductFaqSection items={sections.faqs} />
    </>
  );
}
