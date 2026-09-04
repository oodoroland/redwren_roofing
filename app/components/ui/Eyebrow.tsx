import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`block font-sans text-label-sm uppercase tracking-widest text-on-surface-variant ${className}`}
    >
      {children}
    </span>
  );
}
