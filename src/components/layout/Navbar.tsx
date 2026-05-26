"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { mainNavItems, platformWorkflowMenu, resourcesMenu, type NavMenuId } from "@/lib/navigation";
import SiteShell from "./SiteShell";
import MegaMenuPanel from "./MegaMenuPanel";
import RivisoLogo from "./RivisoLogo";

const menuIds = new Set<NavMenuId>(["platform", "resources"]);

function isMenuId(id: string): id is NavMenuId {
  return menuIds.has(id as NavMenuId);
}

const LOGIN_URL = "https://app.riviso.com";

const pillAccentLight: Record<NavMenuId, string> = {
  platform: "bg-[rgba(249,115,22,0.14)] text-zinc-900",
  resources: "bg-[rgba(52,211,153,0.12)] text-zinc-900",
};

function MobileOffCanvas({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-[2px] lg:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 z-[999] flex h-dvh w-[85vw] max-w-[380px] flex-col overflow-y-auto overscroll-contain bg-white shadow-[-8px_0_32px_-12px_rgba(15,23,42,0.15)] lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
              <RivisoLogo href="/" onClick={onClose} />
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M5 5l10 10M15 5L5 15" />
                </svg>
              </button>
            </div>

            {/* Platform */}
            <div className="flex flex-col px-6 pt-6">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-400">Platform</p>
              <div className="mt-3 flex flex-col">
                <p className="m-0 mb-2 text-[10px] font-bold uppercase tracking-[0.08em] text-orange-500/70">Build</p>
                {platformWorkflowMenu.columns[0].items.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    onClick={onClose}
                    className="border-b border-zinc-50 py-2.5 text-[14px] font-medium text-zinc-700 transition-colors hover:text-[#ea580c]"
                  >
                    {card.title}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col">
                <p className="m-0 mb-2 text-[10px] font-bold uppercase tracking-[0.08em] text-orange-500/70">Operate</p>
                {platformWorkflowMenu.columns[1].items.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    onClick={onClose}
                    className="border-b border-zinc-50 py-2.5 text-[14px] font-medium text-zinc-700 transition-colors hover:text-[#ea580c]"
                  >
                    {card.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col px-6 pt-6 pb-6">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-400">Resources</p>
              <div className="mt-3 flex flex-col">
                {resourcesMenu.flatMap((col) =>
                  col.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={onClose}
                      className="border-b border-zinc-50 py-2.5 text-[14px] font-medium text-zinc-700 transition-colors hover:text-[#ea580c]"
                    >
                      {link.title}
                    </Link>
                  ))
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-auto flex flex-col gap-3 border-t border-zinc-100 px-6 py-6">
              <Link
                href="#product"
                onClick={onClose}
                className="flex items-center justify-center rounded-lg border border-zinc-200 px-5 py-2.5 text-[14px] font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
              >
                Free Trial
              </Link>
              <a
                href={LOGIN_URL}
                onClick={onClose}
                className="nav-cta w-full justify-center"
              >
                Login
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<NavMenuId | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuOpen = Boolean(activeMenu);
  const showHeaderShadow = scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (id: NavMenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      <div className="site-section site-header-sticky w-full" onMouseLeave={scheduleClose}>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="mega-menu-scrim fixed inset-x-0 bottom-0 z-[1] hidden bg-zinc-900/20 lg:block"
              style={{ top: "var(--nav-height)" }}
              aria-hidden
            />
          )}
        </AnimatePresence>

        <header
          className={cn(
            "site-header relative z-[2] w-full overflow-visible transition-[box-shadow,background-color,border-color] duration-300",
            menuOpen ? "border-b-0 bg-white" : "border-b border-zinc-200/70",
            showHeaderShadow && !menuOpen
              ? "border-zinc-200/80 bg-white/90 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-md"
              : "bg-white/95 backdrop-blur-sm"
          )}
        >
          <SiteShell>
            <div className="nav-bar-row relative z-[3] grid h-[var(--nav-height)] w-full grid-cols-[auto_1fr_auto] items-center gap-6 lg:gap-10">
              <RivisoLogo href="/" />

              <nav
                className="hidden items-center justify-center gap-0.5 lg:flex xl:gap-1"
                aria-label="Main navigation"
              >
                {mainNavItems.map((item) => {
                  const navItemTone = "nav-item--light";

                  if (!isMenuId(item.id)) return null;

                  const menuId = item.id;
                  const isActive = activeMenu === menuId;

                  return (
                    <div
                      key={menuId}
                      className="relative"
                      onMouseEnter={() => {
                        cancelClose();
                        openMenu(menuId);
                      }}
                    >
                      <button
                        type="button"
                        className={cn(
                          "nav-item",
                          !isActive && navItemTone,
                          isActive && pillAccentLight[menuId]
                        )}
                        aria-expanded={isActive}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          className={cn(
                            "opacity-50 transition-transform duration-200",
                            isActive && "rotate-180"
                          )}
                          aria-hidden
                        >
                          <path
                            d="M2 4l3 3 3-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </nav>

              <div className="hidden shrink-0 items-center justify-end gap-1 lg:flex">
                <Link href="#product" className="nav-item nav-item--muted nav-item--light">
                  Free Trial
                </Link>
                <a href={LOGIN_URL} className="nav-cta">
                  Login
                </a>
              </div>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center justify-self-end text-zinc-900 lg:hidden"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {open ? (
                    <path d="M5 5l12 12M17 5L5 17" strokeLinecap="round" />
                  ) : (
                    <path d="M3 7h16M3 11h16M3 15h16" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </SiteShell>

          <AnimatePresence mode="wait">
            {activeMenu && (
              <motion.div
                key={activeMenu}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 2 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-full z-10 hidden border-t border-zinc-200/80 bg-white pb-5 pt-3 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.12)] lg:block"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                style={{ backgroundColor: "#ff000000" }}
              >
                <SiteShell>
                  <MegaMenuPanel menuId={activeMenu} />
                </SiteShell>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>

      <MobileOffCanvas open={open} onClose={() => setOpen(false)} />
    </>
  );
}
