import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";

export interface ProductPageHeroCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface ProductPageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: ProductPageHeroCta;
  secondaryCta?: ProductPageHeroCta;
}

function HeroButton({ href, label, variant = "primary" }: { href: string; label: string; variant?: "primary" | "secondary" }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-w-[10.5rem] items-center justify-center rounded-lg px-6 py-3 text-[0.9375rem] font-semibold tracking-[-0.01em] no-underline transition-[background-color,color,transform,box-shadow] duration-150",
        variant === "primary"
          ? "border-[1.5px] border-white/90 bg-transparent text-white hover:bg-white/10 hover:-translate-y-px"
          : "border-[1.5px] border-white bg-white text-[#c2410c] hover:bg-[#fff7ed] hover:-translate-y-px"
      )}
    >
      {label}
    </Link>
  );
}

export default function ProductPageHero({ eyebrow, title, description, primaryCta, secondaryCta }: ProductPageHeroProps) {
  const primaryVariant = primaryCta.variant ?? "primary";
  const secondaryVariant = secondaryCta?.variant ?? "secondary";

  return (
    <section
      className="site-section relative isolate flex min-h-[calc(100svh-var(--nav-height))] w-full flex-col overflow-x-clip"
      aria-labelledby="product-hero-heading"
    >
      {/* Gradient fill */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(125deg,#9a3412_0%,#c2410c_32%,#ea580c_58%,#f97316_100%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_70%_at_85%_50%,rgba(255,237,213,0.35)_0%,transparent_55%),radial-gradient(ellipse_60%_50%_at_20%_100%,rgba(194,65,12,0.45)_0%,transparent_50%)]" aria-hidden />

      {/* Content */}
      <div className="relative z-[2] flex flex-1 flex-col justify-center py-14 md:py-20 lg:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-6 text-left text-white md:gap-7">
            <p className="m-0 inline-flex w-fit rounded border border-zinc-900/10 bg-white px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-zinc-900">
              {eyebrow}
            </p>
            <h1
              id="product-hero-heading"
              className="m-0 font-[family-name:var(--font-heading)] text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] !text-white"
            >
              {title}
            </h1>
            <p className="m-0 max-w-lg text-[1.0625rem] leading-relaxed tracking-[-0.01em] text-white/90 md:text-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <HeroButton href={primaryCta.href} label={primaryCta.label} variant={primaryVariant} />
              {secondaryCta && (
                <HeroButton href={secondaryCta.href} label={secondaryCta.label} variant={secondaryVariant} />
              )}
            </div>
          </div>

          {/* Right placeholder — replaced with real screenshot later */}
          <div
            className="hidden min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/25 bg-white/[0.07] backdrop-blur-[2px] lg:flex xl:min-h-[360px]"
            aria-hidden
          >
            <p className="m-0 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/35">
              Hero visual
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
