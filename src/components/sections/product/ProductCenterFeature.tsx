import Container from "@/components/layout/Container";
import ProductImagePlaceholder from "./ProductImagePlaceholder";

export type ProductCenterFeatureProps = {
  headline: string;
  body: string;
  imageLabel?: string;
};

export default function ProductCenterFeature({ headline, body, imageLabel = "Product screenshot" }: ProductCenterFeatureProps) {
  return (
    <section className="site-section w-full overflow-x-clip bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <Container className="flex flex-col items-center gap-10 sm:gap-12 md:gap-14">
        {/* Headline block — narrower for readability */}
        <div className="flex w-full max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="m-0 font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.875rem)] font-medium leading-[1.1] tracking-[-0.03em] text-zinc-900">
            {headline}
          </h2>
          <p className="m-0 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg">
            {body}
          </p>
        </div>

        {/* Full-width screenshot */}
        <div className="w-full">
          <ProductImagePlaceholder label={imageLabel} variant="dashboard" className="w-full" />
        </div>
      </Container>
    </section>
  );
}
