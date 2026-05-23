import Container from "@/components/layout/Container";
import ProductImagePlaceholder from "./ProductImagePlaceholder";

export type ProductSplitFeatureProps = {
  eyebrow: string;
  headline: string;
  body: string;
  imageLabel?: string;
  reverse?: boolean;
};

export default function ProductSplitFeature({ eyebrow, headline, body, imageLabel = "Feature image", reverse = false }: ProductSplitFeatureProps) {
  return (
    <section className="site-section w-full overflow-x-clip bg-[#fafaf9] py-16 sm:py-20 md:py-24 lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div
          className={`flex flex-col items-center gap-5 text-center lg:items-start lg:text-left ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <p className="m-0 text-sm font-semibold tracking-[0.01em] text-[#ea580c]">{eyebrow}</p>
          <h2 className="m-0 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.375rem)] font-medium leading-[1.12] tracking-[-0.025em] text-zinc-900">
            {headline}
          </h2>
          <p className="m-0 max-w-lg text-base leading-relaxed text-zinc-500">{body}</p>
        </div>

        <div className={reverse ? "lg:order-1" : "lg:order-2"}>
          <ProductImagePlaceholder label={imageLabel} variant="simple" className="w-full" />
        </div>
      </Container>
    </section>
  );
}
