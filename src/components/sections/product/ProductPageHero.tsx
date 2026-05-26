import Image from "next/image";
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
  /** Path under /public, e.g. /media/searchIntelligence.png */
  heroImage?: string;
  heroImageAlt?: string;
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

export default function ProductPageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  heroImage,
  heroImageAlt,
}: ProductPageHeroProps) {
  const primaryVariant = primaryCta.variant ?? "primary";
  const secondaryVariant = secondaryCta?.variant ?? "secondary";
  const hasVisual = Boolean(heroImage);

  return (
    <section
      className={cn(
        "product-hero relative w-full overflow-x-clip",
        hasVisual ? "product-hero--with-visual" : "site-section min-h-[calc(100svh-var(--nav-height))]"
      )}
      aria-labelledby="product-hero-heading"
    >
      {hasVisual && heroImage ? (
        <>
          <div className="product-hero-media" aria-hidden>
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              className="product-hero-media-img"
              sizes="100vw"
            />
          </div>
          <div className="product-hero-tint" aria-hidden />
          <div className="product-hero-vignette" aria-hidden />
          <div className="product-hero-merge" aria-hidden />
        </>
      ) : (
        <>
          <div
            className="product-hero-bg bg-[linear-gradient(125deg,#9a3412_0%,#c2410c_32%,#ea580c_58%,#f97316_100%)]"
            aria-hidden
          />
          <div
            className="product-hero-bg bg-[radial-gradient(ellipse_80%_70%_at_85%_50%,rgba(255,237,213,0.35)_0%,transparent_55%),radial-gradient(ellipse_60%_50%_at_20%_100%,rgba(194,65,12,0.45)_0%,transparent_50%)]"
            aria-hidden
          />
        </>
      )}

      <div className="product-hero-content">
        <Container
          className={cn(
            "product-hero-inner",
            !hasVisual && "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16"
          )}
        >
          <div className="product-hero-copy">
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
            {heroImageAlt && <p className="sr-only">{heroImageAlt}</p>}
          </div>

          {hasVisual ? (
            <div className="product-hero-copy-spacer hidden lg:block" aria-hidden />
          ) : (
            <div
              className="hidden min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/25 bg-white/[0.07] backdrop-blur-[2px] lg:flex xl:min-h-[360px]"
              aria-hidden
            >
              <p className="m-0 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/35">
                Hero visual
              </p>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}
