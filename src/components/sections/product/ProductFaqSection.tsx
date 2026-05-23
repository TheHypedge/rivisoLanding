"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";

export type FaqItem = { question: string; answer: string };

export type ProductFaqSectionProps = {
  title?: string;
  items: FaqItem[];
};

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={cn(
        "relative flex h-5 w-5 shrink-0 items-center justify-center text-zinc-400 transition-transform duration-200",
        open && "rotate-45"
      )}
      aria-hidden
    >
      <span className="absolute h-0.5 w-[14px] rounded-full bg-current" />
      <span className="absolute h-[14px] w-0.5 rounded-full bg-current" />
    </span>
  );
}

export default function ProductFaqSection({ title = "Frequently asked questions", items }: ProductFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="site-section w-full overflow-x-clip bg-[#faf8f5] py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Narrow reading column for FAQs */}
      <Container narrow className="flex flex-col items-center">
        <h2 className="m-0 w-full text-center font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium tracking-[-0.03em] text-zinc-900">
          {title}
        </h2>

        <ul className="m-0 mt-10 w-full list-none divide-y divide-zinc-900/[0.08] p-0 md:mt-12">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const btnId = `faq-btn-${index}`;

            return (
              <li key={item.question}>
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                >
                  <span className="min-w-0 flex-1 font-[family-name:var(--font-heading)] text-base font-medium leading-snug text-zinc-900 sm:text-lg md:text-xl">
                    {item.question}
                  </span>
                  <PlusIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={btnId} className="pb-5 md:pb-6">
                    <p className="m-0 text-[0.9375rem] leading-relaxed text-zinc-500 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
