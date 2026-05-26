import type { ReactNode } from "react";
import Container from "@/components/layout/Container";
import ProductImagePlaceholder from "./ProductImagePlaceholder";

export type ProductSplitFeatureProps = {
  eyebrow: string;
  headline: string;
  body: string;
  /** Second paragraph below the main body */
  bodySecondary?: string;
  /** Feature highlight pills shown below the copy */
  highlights?: string[];
  imageLabel?: string;
  reverse?: boolean;
  /** Custom visual component for the right (or left if reversed) column */
  visual?: ReactNode;
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-[#ea580c]" aria-hidden>
      <path d="M3.5 8.5 6.5 11.5 12.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductSplitFeature({
  eyebrow,
  headline,
  body,
  bodySecondary,
  highlights,
  imageLabel = "Feature image",
  reverse = false,
  visual,
}: ProductSplitFeatureProps) {
  return (
    <section className="site-section w-full overflow-x-clip bg-[#fafaf9] py-16 sm:py-20 md:py-24 lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div
          className={`flex flex-col gap-5 text-center lg:text-left ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <p className="m-0 text-sm font-semibold tracking-[0.01em] text-[#ea580c]">{eyebrow}</p>
          <h2 className="m-0 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.375rem)] font-medium leading-[1.12] tracking-[-0.025em] text-zinc-900">
            {headline}
          </h2>
          <p className="m-0 max-w-xl text-base leading-relaxed text-zinc-500">{body}</p>
          {bodySecondary && (
            <p className="m-0 max-w-xl text-base leading-relaxed text-zinc-500">{bodySecondary}</p>
          )}
          {highlights && highlights.length > 0 && (
            <ul className="m-0 mt-2 flex list-none flex-col gap-2.5 p-0 text-left">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[0.9375rem] font-medium text-zinc-700">
                  <CheckIcon />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={reverse ? "lg:order-1" : "lg:order-2"}>
          {visual ?? <ProductImagePlaceholder label={imageLabel} variant="simple" className="w-full" />}
        </div>
      </Container>
    </section>
  );
}
