import type { ProductPageSectionsContent } from "@/lib/product-page-sections";
import ProductCenterFeature from "./ProductCenterFeature";
import ProductFaqSection from "./ProductFaqSection";
import ProductSplitFeature from "./ProductSplitFeature";

export default function ProductPageBody({ sections }: { sections: ProductPageSectionsContent }) {
  return (
    <>
      <ProductCenterFeature {...sections.center} />
      <ProductSplitFeature {...sections.split} />
      <ProductFaqSection items={sections.faqs} />
    </>
  );
}
