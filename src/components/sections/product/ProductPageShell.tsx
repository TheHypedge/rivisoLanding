import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { ProductPageSectionsContent } from "@/lib/product-page-sections";
import { defaultProductPageSections } from "@/lib/product-page-sections";
import type { ProductPageConfig } from "@/lib/product-pages";
import ProductPageBody from "./ProductPageBody";
import ProductPageHero from "./ProductPageHero";

const defaultPrimaryCta = { label: "Start free trial", href: "/#product" as const };
const defaultSecondaryCta = { label: "Get a demo", href: "mailto:info@thehypedge.com" as const };

type ProductPageShellProps = {
  page: ProductPageConfig;
  sections?: ProductPageSectionsContent;
};

export default function ProductPageShell({ page, sections }: ProductPageShellProps) {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-clip bg-[var(--color-bg-base)]">
      <Navbar />
      <ProductPageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        heroImage={page.heroImage}
        heroImageAlt={page.heroImageAlt}
        primaryCta={defaultPrimaryCta}
        secondaryCta={defaultSecondaryCta}
      />
      <div className="product-page-after-hero">
        <ProductPageBody sections={sections ?? defaultProductPageSections} />
      </div>
      <Footer />
    </main>
  );
}
