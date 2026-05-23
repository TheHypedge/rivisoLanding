import { cn } from "@/lib/utils";

type ProductImagePlaceholderProps = {
  label?: string;
  variant?: "dashboard" | "simple";
  className?: string;
};

export default function ProductImagePlaceholder({
  label = "Image placeholder",
  variant = "dashboard",
  className,
}: ProductImagePlaceholderProps) {
  if (variant === "simple") {
    return (
      <div
        className={cn(
          "flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-zinc-200/80 bg-zinc-100",
          className
        )}
        aria-hidden
      >
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">{label}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "max-w-full overflow-hidden rounded-2xl border border-zinc-800/20 bg-[#1a1d21] shadow-[0_24px_64px_-24px_rgba(15,23,42,0.35)]",
        className
      )}
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-4 flex-1 rounded-md bg-white/5 py-1 text-center font-mono text-[10px] text-white/30">
          riviso.app / workspace
        </span>
      </div>
      <div className="grid min-h-[220px] grid-cols-1 sm:min-h-[280px] sm:grid-cols-[minmax(100px,140px)_1fr] md:min-h-[360px]">
        <div className="space-y-1 border-b border-white/10 p-3 sm:border-b-0 sm:border-r">
          {["Overview", "Research", "Content", "Optimize", "Publish"].map((item, i) => (
            <div
              key={item}
              className={cn(
                "rounded-md px-2.5 py-2 text-[11px] font-medium",
                i === 1 ? "bg-orange-500/20 text-orange-300" : "text-white/35"
              )}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 p-4">
          <div className="h-24 rounded-lg bg-white/5" />
          <div className="flex flex-1 gap-3">
            <div className="flex-1 rounded-lg bg-white/[0.07]" />
            <div className="w-28 rounded-lg bg-white/[0.05]" />
          </div>
          <span className="text-center text-[10px] font-medium uppercase tracking-widest text-white/25">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
