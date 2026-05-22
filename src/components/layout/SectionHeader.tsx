import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <header
      className={cn(
        "mb-12 md:mb-16 lg:mb-20",
        isCenter && "text-center mx-auto max-w-3xl w-full",
        !isCenter && "max-w-3xl",
        className
      )}
    >
      {badge && (
        <div className={cn("brand-badge mb-6 w-fit", isCenter && "mx-auto")}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
          {badge}
        </div>
      )}

      <h2
        className={cn(
          "heading-lg text-white",
          isCenter && "mx-auto",
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "body-lg mt-5",
            isCenter ? "mx-auto max-w-xl" : "max-w-xl mt-5"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
