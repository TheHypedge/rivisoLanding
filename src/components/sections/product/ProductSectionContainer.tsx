import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

type ProductSectionContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

/** Product page sections — delegates directly to Container (same shell as navbar) */
export default function ProductSectionContainer({
  children,
  className,
  narrow = false,
}: ProductSectionContainerProps) {
  return (
    <Container narrow={narrow} className={className}>
      {children}
    </Container>
  );
}
