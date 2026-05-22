import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div className={cn("container-main", narrow && "container-narrow", className)}>
      {children}
    </div>
  );
}
