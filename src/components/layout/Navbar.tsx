"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { mainNavItems, type NavMenuId } from "@/lib/navigation";
import MegaMenuPanel from "./MegaMenuPanel";
import RivisoLogo from "./RivisoLogo";

const menuIds = new Set<NavMenuId>(["platform", "solutions", "resources", "company"]);

function isMenuId(id: string): id is NavMenuId {
  return menuIds.has(id as NavMenuId);
}

const LOGIN_URL = "https://app.riviso.com";

const pillAccentLight: Record<NavMenuId, string> = {
  platform: "bg-[rgba(249,115,22,0.14)] text-zinc-900",
  solutions: "bg-[rgba(249,115,22,0.12)] text-zinc-900",
  resources: "bg-[rgba(52,211,153,0.12)] text-zinc-900",
  company: "bg-[rgba(244,114,182,0.14)] text-zinc-900",
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
    <div className="site-header-sticky" onMouseLeave={scheduleClose}>
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
          "site-header relative z-[2] w-full overflow-visible bg-white transition-[box-shadow] duration-300",
          menuOpen ? "border-b-0" : "border-b border-zinc-200/80",
          showHeaderShadow && !menuOpen && "shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
        )}
      >
        <div className="header-shell relative">
          <div className="nav-bar-row relative z-[3] grid h-[var(--nav-height)] grid-cols-[auto_1fr_auto] items-center gap-8 border-b border-zinc-200/80 bg-white lg:gap-12">
            <RivisoLogo href="/" />

            <nav
              className="hidden lg:flex items-center justify-center gap-2 xl:gap-3"
              aria-label="Main navigation"
            >
              {mainNavItems.map((item) => {
                const navItemTone = "nav-item--light";

                if (item.id === "pricing" && item.href) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn("nav-item", navItemTone)}
                    >
                      {item.label}
                    </Link>
                  );
                }

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

            <div className="hidden lg:flex items-center justify-end gap-2 xl:gap-3 shrink-0">
              <Link
                href="#cta"
                className="nav-item nav-item--muted nav-item--light"
              >
                Free Trial
              </Link>
              <motion.a
                href={LOGIN_URL}
                className="nav-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </motion.a>
            </div>

            <button
              type="button"
              className={cn(
                "lg:hidden flex h-10 w-10 items-center justify-center justify-self-end",
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

          <AnimatePresence mode="wait">
            {activeMenu && (
              <motion.div
                key={activeMenu}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 2 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="mega-menu-dropdown hidden lg:block"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                <MegaMenuPanel menuId={activeMenu} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
                className="absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-var(--nav-height))] overflow-y-auto border-b border-zinc-200 bg-white lg:hidden"
              >
                <div className="header-shell flex flex-col py-6">
                  <nav className="flex flex-col gap-1">
                    {mainNavItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href ?? "#"}
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
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
