"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { mainNavItems, type NavMenuId } from "@/lib/navigation";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
              className={cn(
                "flex h-10 w-10 items-center justify-center justify-self-end lg:hidden",
                "text-zinc-900"
              )}
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
            >
              <SiteShell>
                <MegaMenuPanel menuId={activeMenu} />
              </SiteShell>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-[var(--nav-height)] z-40 bg-black/50 lg:hidden"
                onClick={() => setOpen(false)}
                aria-hidden
              />
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-var(--nav-height))] overflow-y-auto border-b border-zinc-200 bg-white lg:hidden"
              >
                <SiteShell className="flex flex-col py-6">
                  <nav className="flex flex-col gap-1">
                    {mainNavItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.id === "platform" ? "/#platform" : "/#resources"}
                        onClick={() => setOpen(false)}
                        className="py-3 text-center text-[15px] font-medium text-zinc-700 hover:text-zinc-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="my-5 h-px bg-zinc-200" />
                  <div className="flex flex-col items-center gap-4">
                    <Link
                      href="#cta"
                      onClick={() => setOpen(false)}
                      className="text-[15px] font-medium text-zinc-500 hover:text-zinc-900"
                    >
                      Free Trial
                    </Link>
                    <a
                      href={LOGIN_URL}
                      onClick={() => setOpen(false)}
                      className="nav-cta mt-2 w-full max-w-[240px] justify-center"
                    >
                      Login
                    </a>
                  </div>
                </SiteShell>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
