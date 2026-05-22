"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Workflow", href: "#workflow" },
  { label: "Modules", href: "#modules" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Philosophy", href: "#philosophy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-[#0c0c0c]/85 backdrop-blur-xl border-b border-white/[0.05]"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center shadow-lg shadow-orange-500/25">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L6 3L10 7L6 11L2 7Z" fill="white" fillOpacity="0.95" />
              <path d="M6 3L10 7L7.5 9.5" stroke="white" strokeWidth="1.1" strokeOpacity="0.5" />
            </svg>
          </div>
          <span className="text-[15px] font-bold tracking-tight text-white">
            RIVISO
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-[13px] text-white/45 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#cta"
            className="px-4 py-2 text-[13px] text-white/40 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(249,115,22,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="btn-brand !py-2 !px-5 !text-[13px] !rounded-lg"
          >
            Join Waitlist
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("block h-px w-5 bg-white/60 transition-all duration-300", mobileOpen && "rotate-45 translate-y-[7px]")} />
          <span className={cn("block h-px w-5 bg-white/60 transition-all duration-300", mobileOpen && "opacity-0")} />
          <span className={cn("block h-px w-5 bg-white/60 transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0c0c0c]/95 backdrop-blur-xl border-b border-white/[0.05] px-6 pb-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3.5 text-[14px] text-white/55 hover:text-white border-b border-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="mt-5 block text-center btn-brand w-full justify-center"
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
