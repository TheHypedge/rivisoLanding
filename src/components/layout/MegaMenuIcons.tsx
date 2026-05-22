type IconProps = { className?: string };

export function IconResearch({ className }: IconProps) {
  return (
    <svg className={className} width="56" height="40" viewBox="0 0 56 40" fill="none" aria-hidden>
      <rect x="4" y="6" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <rect x="30" y="10" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M10 14h8M10 18h6M10 22h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <circle cx="41" cy="19" r="4" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

export function IconContent({ className }: IconProps) {
  return (
    <svg className={className} width="56" height="40" viewBox="0 0 56 40" fill="none" aria-hidden>
      <rect x="6" y="8" width="44" height="8" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="6" y="20" width="32" height="6" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="6" y="30" width="24" height="4" rx="2" fill="currentColor" opacity="0.12" />
      <path d="M42 22l8 6-8 6V22z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.45" />
    </svg>
  );
}

export function IconOptimize({ className }: IconProps) {
  return (
    <svg className={className} width="56" height="40" viewBox="0 0 56 40" fill="none" aria-hidden>
      <circle cx="28" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="28" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="28" cy="20" r="2" fill="currentColor" opacity="0.6" />
      <path d="M28 4v6M28 30v6M4 20h6M46 20h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export function IconSeo({ className }: IconProps) {
  return (
    <svg className={className} width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden>
      <path d="M4 28L16 16l8 8 12-14 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="38" cy="10" r="5" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

export function IconGeo({ className }: IconProps) {
  return (
    <svg className={className} width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden>
      <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <path d="M8 32c0-8 7-14 16-14s16 6 16 14" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <circle cx="36" cy="12" r="3" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

export function IconPublish({ className }: IconProps) {
  return (
    <svg className={className} width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden>
      <rect x="6" y="10" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M34 18h8M38 14v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M5 4.5L8.5 7L5 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 6h7M6.5 3.5L9 6l-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
