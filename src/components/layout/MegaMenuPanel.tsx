"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  companyMenu,
  platformWorkflowMenu,
  resourcesMenu,
  solutionsMenu,
  type NavMenuId,
} from "@/lib/navigation";
import { siteLogo } from "@/lib/site-logo";
import { ArrowRight, ChevronRight, IconGeo, IconPublish, IconSeo } from "./MegaMenuIcons";

const useCaseIcons = [IconSeo, IconGeo, IconPublish] as const;

const workflowPipelineSteps = [
  "Research",
  "Plan",
  "Generate",
  "Link",
  "Optimize",
  "Publish",
] as const;

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
      {menuId === "resources" && <ResourcesMenu />}
    </motion.div>
  );
}

function PlatformMenu() {
  const { featured, columns } = platformWorkflowMenu;

  return (
    <div className="platform-workflow-menu">
      <motion.aside variants={item} className="platform-workflow-featured">
        <h3 className="platform-workflow-featured-title">{featured.title}</h3>
        <p className="platform-workflow-featured-desc">{featured.description}</p>
        <Link href={featured.href} className="platform-workflow-featured-cta">
          {featured.cta}
          <ArrowRight />
        </Link>
        <div className="platform-workflow-featured-visual" aria-hidden>
          <p className="platform-workflow-visual-label">Active pipeline</p>
          <div className="platform-workflow-visual-steps">
            {workflowPipelineSteps.map((step, index) => (
              <span
                key={step}
                className={index < 2 ? "is-complete" : index === 2 ? "is-active" : ""}
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      </motion.aside>

      {columns.map((column, columnIndex) => (
        <motion.div
          key={`workflow-col-${columnIndex}`}
          variants={item}
          className="platform-workflow-column"
        >
          <div className="platform-workflow-column-header">
            <h3 className="platform-workflow-column-title">{column.title}</h3>
            <p className="platform-workflow-column-desc">{column.description}</p>
          </div>
          <ul className="platform-workflow-cards">
            {column.items.map((card) => (
              <li key={card.title}>
                <Link href={card.href} className="platform-workflow-card group">
                  <h4 className="platform-workflow-card-title">{card.title}</h4>
                  <p className="platform-workflow-card-desc">{card.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
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
