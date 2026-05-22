import { brandLogoSrc, type BrandLogoEntry } from "@/lib/brand-logos";
import { cn } from "@/lib/utils";

export default function BrandLogoImage({
  brand,
  className,
}: {
  brand: BrandLogoEntry;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- user-supplied assets from /public
    <img
      src={brandLogoSrc(brand.file)}
      alt={brand.name}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={cn("brand-logo-image", className)}
    />
  );
}
