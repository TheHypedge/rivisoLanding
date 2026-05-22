"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  companyMenu,
  platformMenu,
  resourcesMenu,
  solutionsMenu,
  type NavMenuId,
} from "@/lib/navigation";
import { siteLogo } from "@/lib/site-logo";
import {
  ArrowRight,
  ChevronRight,
  IconContent,
  IconGeo,
  IconOptimize,
  IconPublish,
  IconResearch,
  IconSeo,
} from "./MegaMenuIcons";

const platformIcons = [IconResearch, IconContent, IconOptimize] as const;
const useCaseIcons = [IconSeo, IconGeo, IconPublish] as const;

const visualAccent: Record<string, string> = {
  blue: "from-[#ffedd5] to-[#fff7ed] text-[#ea580c]",
  green: "from-[#d1fae5] to-[#ecfdf5] text-[#059669]",
  orange: "from-[#ffedd5] to-[#fff7ed] text-[#ea580c]",
};

const cardAccent: Record<string, string> = {
  orange: "bg-[#fff7ed] border-[#fed7aa] hover:border-[#fdba74]",
  blue: "bg-[#fff7ed] border-[#fed7aa] hover:border-[#fdba74]",
  green: "bg-[#ecfdf5] border-[#a7f3d0] hover:border-[#6ee7b7]",
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.02 },
  },
};

const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

interface MegaMenuPanelProps {
  menuId: NavMenuId;
}

export default function MegaMenuPanel({ menuId }: MegaMenuPanelProps) {
  return (
    <motion.div
      className="mega-menu-panel"
      initial="hidden"
      animate="show"
      variants={stagger}
      style={{ backgroundColor: "#ffffff" }}
    >
      {menuId === "platform" && <PlatformMenu />}
      {menuId === "solutions" && <SolutionsMenu />}
      {menuId === "resources" && <ResourcesMenu />}
      {menuId === "company" && <CompanyMenu />}
    </motion.div>
  );
}

function PlatformMenu() {
  return (
    <div className="grid grid-cols-3 gap-8 divide-x divide-zinc-200/80">
      {platformMenu.map((col, i) => {
        const Icon = platformIcons[i];
        const accent = col.accent ?? "orange";
        return (
          <motion.div key={col.title} variants={item} className="px-7 py-1 first:pl-1 last:pr-1">
            <div
              className={`mb-6 flex h-[100px] items-center justify-center rounded-xl bg-gradient-to-br ${visualAccent[accent]}`}
            >
              <Icon className="opacity-90" />
            </div>
            <h3 className="mb-3 text-[16px] font-semibold tracking-tight text-zinc-900">{col.title}</h3>
            {col.description && (
              <p className="mb-6 text-[13px] leading-[1.55] text-zinc-500">{col.description}</p>
            )}
            <ul className="space-y-0.5">
              {col.links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="mega-menu-link">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            {col.footerLink && (
              <Link
                href={col.footerLink.href}
                className="mt-6 inline-flex items-center gap-1.5 rounded-lg px-1 py-2 text-[13px] font-semibold text-[#ea580c] transition-opacity hover:opacity-80"
              >
                {col.footerLink.label}
                <ArrowRight />
              </Link>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function SolutionsMenu() {
  return (
    <div className="flex flex-col gap-0">
      <motion.section variants={item} className="grid grid-cols-[248px_1fr] gap-12 pb-10">
        <div className="pr-4">
          <h3 className="text-[16px] font-semibold tracking-tight text-zinc-900">
            {solutionsMenu.intro.title}
          </h3>
          <p className="mt-4 text-[13px] leading-[1.55] text-zinc-500">{solutionsMenu.intro.description}</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {solutionsMenu.useCases.map((card, i) => {
            const Icon = useCaseIcons[i];
            return (
              <Link
                key={card.title}
                href={card.href}
                className={`group rounded-xl border p-6 transition-all ${cardAccent[card.accent]}`}
              >
                <div className="mb-5 flex h-[72px] items-center justify-center rounded-lg bg-white/70 text-zinc-700">
                  <Icon />
                </div>
                <h4 className="text-[15px] font-semibold leading-snug text-zinc-900 group-hover:text-[#ea580c]">
                  {card.title}
                </h4>
                <p className="mt-2 text-[13px] leading-[1.5] text-zinc-500">{card.description}</p>
              </Link>
            );
          })}
        </div>
      </motion.section>

      <div className="h-px bg-zinc-200/80" />

      <motion.section variants={item} className="grid grid-cols-[248px_1fr] items-start gap-12 py-9">
        <Link
          href="#solutions"
          className="inline-flex items-center gap-2 rounded-lg py-2 pr-4 text-[16px] font-semibold text-zinc-900 transition-colors hover:text-[#ea580c]"
        >
          Solutions by role
          <ChevronRight className="text-zinc-400" />
        </Link>
        <ul className="grid grid-cols-3 gap-x-10 gap-y-0.5">
          {solutionsMenu.byRole.map((link) => (
            <li key={link.title}>
              <Link href={link.href} className="mega-menu-link-row group">
                {link.title}
                <ChevronRight className="shrink-0 text-zinc-300 transition-colors group-hover:text-[#ea580c]" />
              </Link>
            </li>
          ))}
        </ul>
      </motion.section>

      <div className="h-px bg-zinc-200/80" />

      <motion.section variants={item} className="grid grid-cols-[248px_1fr] items-start gap-12 pt-9">
        <Link
          href="#solutions"
          className="inline-flex items-center gap-2 rounded-lg py-2 pr-4 text-[16px] font-semibold text-zinc-900 transition-colors hover:text-[#ea580c]"
        >
          Solutions by industry
          <ChevronRight className="text-zinc-400" />
        </Link>
        <ul className="grid grid-cols-3 gap-x-10 gap-y-0.5">
          {solutionsMenu.byIndustry.map((link) => (
            <li key={link.title}>
              <Link href={link.href} className="mega-menu-link-row group">
                {link.title}
                <ChevronRight className="shrink-0 text-zinc-300 transition-colors group-hover:text-[#ea580c]" />
              </Link>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}

function ResourcesMenu() {
  const scores = [
    { val: 72, label: "Message alignment" },
    { val: 88, label: "Workflow coverage" },
    { val: 64, label: "Publish velocity" },
  ];

  return (
    <div className="grid grid-cols-[1.05fr_repeat(3,1fr)] gap-10">
      <motion.div
        variants={item}
        className="flex flex-col rounded-xl bg-gradient-to-br from-[#ea580c] to-[#c2410c] p-7 text-white"
      >
        <h3 className="text-[17px] font-semibold tracking-tight">SEO readiness diagnostic</h3>
        <p className="mt-3 text-[13px] leading-[1.55] text-white/90">
          Assess your workflow maturity and get a tailored automation score.
        </p>
        <Link
          href="#resources"
          className="mt-4 inline-flex items-center gap-1.5 py-1 text-[13px] font-semibold text-white underline underline-offset-[3px]"
        >
          Get your score
          <ArrowRight />
        </Link>
        <div className="mt-6 space-y-2.5">
          {scores.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline gap-3 rounded-lg bg-white/15 px-4 py-3 text-[13px]"
            >
              <span className="text-[20px] font-bold tabular-nums">{s.val}</span>
              <span className="text-white/90">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {resourcesMenu.map((col) => (
        <motion.div key={col.title} variants={item} className="border-l border-zinc-200/80 pl-9 pr-2">
          <h3 className="text-[16px] font-semibold tracking-tight text-zinc-900">{col.title}</h3>
          {col.description && (
            <p className="mt-3 mb-6 text-[13px] leading-[1.55] text-zinc-500">{col.description}</p>
          )}
          <ul className="space-y-1">
            {col.links.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="mega-menu-link-rich group">
                  <span className="flex items-center justify-between gap-3 text-[14px] font-semibold text-zinc-900 transition-colors group-hover:text-[#ea580c]">
                    {link.title}
                    <ChevronRight className="shrink-0 text-zinc-300 group-hover:text-[#ea580c]" />
                  </span>
                  {link.description && (
                    <span className="mt-1.5 block text-[12px] leading-[1.5] text-zinc-500">{link.description}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

function CompanyMenu() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <motion.div variants={item} className="overflow-hidden rounded-xl border border-zinc-200/90 shadow-sm">
        <div className="bg-gradient-to-br from-[#ea580c] to-[#c2410c] px-7 py-7 text-white">
          <h3 className="text-[18px] font-semibold tracking-tight">{companyMenu.featured.title}</h3>
          <p className="mt-3 text-[13px] leading-[1.55] text-white/90">{companyMenu.featured.description}</p>
          <Link
            href={companyMenu.featured.href}
            className="mt-4 inline-flex items-center gap-1.5 py-1 text-[13px] font-semibold text-[#fda4af] transition-opacity hover:opacity-90"
          >
            {companyMenu.featured.cta}
            <ArrowRight />
          </Link>
        </div>
        <div className="flex h-[116px] items-center justify-center bg-gradient-to-b from-zinc-100 to-zinc-200/80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteLogo.default}
            alt="Riviso"
            className="h-9 w-auto max-w-[140px] object-contain"
          />
        </div>
      </motion.div>

      {companyMenu.columns.map((col) => (
        <motion.div key={col.title} variants={item} className="border-l border-zinc-200/80 pl-9 pr-2">
          <Link
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg py-1 text-[16px] font-semibold text-zinc-900 transition-colors hover:text-[#ea580c]"
          >
            {col.title}
            <ChevronRight className="text-zinc-400" />
          </Link>
          <p className="mt-4 mb-6 text-[13px] leading-[1.55] text-zinc-500">{col.description}</p>
          <ul className="space-y-0.5">
            {col.links.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="mega-menu-link-row group">
                  {link.title}
                  <ChevronRight className="shrink-0 text-zinc-300 group-hover:text-[#ea580c]" />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
