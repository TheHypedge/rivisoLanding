import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import SiteShell, { siteShellClass } from "./SiteShell";

export { siteShellClass };

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /**
   * Narrow mode — wraps content in a max-w-3xl centered reading column
   * (used for FAQ, copy-heavy blocks).
   */
  narrow?: boolean;
}

/**
 * Centered content column — thin wrapper around SiteShell.
 * Pass flex/grid via className; it applies to an inner wrapper, not the shell.
 */
export default function Container({ children, className, narrow }: ContainerProps) {
  if (narrow) {
    return (
      <SiteShell>
        <div className={cn("site-shell-narrow", className)}>{children}</div>
      </SiteShell>
    );
  }

  return <SiteShell className={className}>{children}</SiteShell>;
}
