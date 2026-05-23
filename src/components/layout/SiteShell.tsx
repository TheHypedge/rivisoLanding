import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Centered content column — uses `.site-shell` in globals.css
 * (--site-max-width + fluid --site-gutter safe margins).
 * Layout utilities (flex, grid) go on the inner wrapper via className.
 */
export const siteShellClass = "site-shell";

/** @deprecated use siteShellClass */
export const siteShellClassName = siteShellClass;

type SiteShellProps = {
  children: ReactNode;
  className?: string;
};

export default function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div className="site-shell">
      {className ? (
        <div className={cn("site-shell-inner", className)}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
