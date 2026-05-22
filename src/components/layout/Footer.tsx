"use client";

import { motion } from "framer-motion";
import RivisoLogo from "./RivisoLogo";

const footerLinks = {
  Product: ["Workflow", "Modules", "Dashboard", "Analytics"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API", "Changelog", "Status"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="page-container py-14 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-6 md:gap-8">
            <div className="col-span-2 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <RivisoLogo variant="onDark" href="/" imageClassName="h-9 max-w-[140px]" />
              </div>
              <p className="text-[13px] text-white/35 leading-relaxed max-w-[220px] mb-5">
                The AI-native operating system for modern SEO workflows.
              </p>
              <div className="flex gap-2">
                {["𝕏", "in", "gh"].map((icon) => (
                  <motion.a
                    key={icon}
                    href="#"
                    whileHover={{ scale: 1.08 }}
                    className="w-9 h-9 rounded-lg border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-[11px] font-bold text-white/35 hover:text-white/70 transition-colors"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="text-center md:text-left">
                <h4 className="label-sm text-white/25 mb-4">{category}</h4>
                <ul className="flex flex-col gap-2.5 items-center md:items-start">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[13px] text-white/38 hover:text-white/75 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="text-[12px] text-white/25">© 2026 Riviso, Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-[12px] text-white/28">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
