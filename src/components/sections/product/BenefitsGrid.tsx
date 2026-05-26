import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export type BenefitCard = {
  title: string;
  description: string;
};

export type BenefitsGridProps = {
  heading: string;
  cards: BenefitCard[];
};

const iconColors = [
  "from-orange-500/20 to-orange-600/10 text-orange-500 border-orange-500/15",
  "from-blue-500/20 to-blue-600/10 text-blue-500 border-blue-500/15",
  "from-emerald-500/20 to-emerald-600/10 text-emerald-500 border-emerald-500/15",
  "from-violet-500/20 to-violet-600/10 text-violet-500 border-violet-500/15",
  "from-amber-500/20 to-amber-600/10 text-amber-500 border-amber-500/15",
  "from-rose-500/20 to-rose-600/10 text-rose-500 border-rose-500/15",
];

const accentBorders = [
  "hover:border-orange-500/25",
  "hover:border-blue-500/25",
  "hover:border-emerald-500/25",
  "hover:border-violet-500/25",
  "hover:border-amber-500/25",
  "hover:border-rose-500/25",
];

function CardIcon({ index }: { index: number }) {
  const paths = [
    "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z",
    "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z",
    "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  ];

  return (
    <div className={cn(
      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-gradient-to-br",
      iconColors[index % iconColors.length]
    )}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={paths[index % paths.length]} />
      </svg>
    </div>
  );
}

export default function BenefitsGrid({ heading, cards }: BenefitsGridProps) {
  return (
    <section className="site-section w-full overflow-x-clip bg-[#fafaf9] py-16 sm:py-20 md:py-24 lg:py-28">
      <Container className="flex flex-col items-center gap-12 md:gap-14">
        <h2 className="m-0 max-w-2xl text-center font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.875rem)] font-medium leading-[1.1] tracking-[-0.03em] text-zinc-900">
          {heading}
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={cn(
                "group relative flex flex-col gap-4 rounded-2xl border border-zinc-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-12px_rgba(15,23,42,0.12)] sm:p-7",
                accentBorders[i % accentBorders.length]
              )}
            >
              <CardIcon index={i} />
              <h3 className="m-0 font-[family-name:var(--font-heading)] text-[1.0625rem] font-medium leading-snug tracking-[-0.01em] text-zinc-900 sm:text-lg">
                {card.title}
              </h3>
              <p className="m-0 text-[0.9375rem] leading-relaxed text-zinc-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
