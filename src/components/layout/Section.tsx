import { cn } from "@/lib/utils";

type SectionVariant = "default" | "surface" | "elevated";
type SectionSize = "default" | "compact" | "hero";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: SectionVariant;
  size?: SectionSize;
  divider?: boolean;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-[#0c0c0c]",
  surface: "bg-[#0a0a0a]",
  elevated: "bg-[#0e0e0e]",
};

const sizeStyles: Record<SectionSize, string> = {
  hero: "py-20 md:py-28 lg:py-32",
  default: "py-20 md:py-28",
  compact: "py-16 md:py-20",
};

export default function Section({
  id,
  children,
  className,
  innerClassName,
  variant = "default",
  size = "default",
  divider = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        variantStyles[variant],
        sizeStyles[size],
        divider && "border-t border-white/[0.05]",
        className
      )}
    >
      <div className={cn("page-container relative z-10", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
