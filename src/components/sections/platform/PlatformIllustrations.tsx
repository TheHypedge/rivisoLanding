interface IllustrationProps {
  className?: string;
}

export function AgentsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="24" y="28" width="108" height="72" rx="8" stroke="currentColor" strokeWidth="2" />
      <path d="M36 48h84M36 60h60M36 72h72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="148" y="48" width="108" height="88" rx="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="172" cy="72" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M168 100h72M168 112h48M168 124h64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="56" y="118" width="120" height="54" rx="8" stroke="currentColor" strokeWidth="2" />
      <path d="M72 138h88M72 150h56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M200 148l20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PipelinesIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="32" y="36" width="56" height="40" rx="6" stroke="currentColor" strokeWidth="2" />
      <rect x="112" y="24" width="56" height="40" rx="6" stroke="currentColor" strokeWidth="2" />
      <rect x="192" y="44" width="56" height="40" rx="6" stroke="currentColor" strokeWidth="2" />
      <path d="M88 56h24M168 44h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M168 84v8M140 92h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="140" cy="116" r="22" stroke="currentColor" strokeWidth="2" />
      <path d="M128 116h24M140 104v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M140 138v12M108 162h64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <polygon points="108,162 96,178 120,178" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="184" y="132" width="64" height="44" rx="6" stroke="currentColor" strokeWidth="2" />
      <path d="M200 148h32M200 160h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ContextIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="140" cy="100" r="18" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="140" cy="100" rx="72" ry="28" stroke="currentColor" strokeWidth="1.75" />
      <ellipse cx="140" cy="100" rx="28" ry="72" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="212" cy="100" r="8" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="68" cy="100" r="8" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="140" cy="28" r="8" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="140" cy="172" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M140 82v-46M140 118v46M122 100H74M158 100h48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
