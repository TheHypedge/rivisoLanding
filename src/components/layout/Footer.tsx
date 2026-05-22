"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Workflow", "Modules", "Dashboard", "Analytics"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API", "Changelog", "Status"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center shadow-lg shadow-orange-500/20">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L6 3L10 7L6 11L2 7Z" fill="white" fillOpacity="0.95" />
                </svg>
              </div>
              <span className="text-[15px] font-bold text-white">RIVISO</span>
            </div>
            <p className="text-[13px] text-white/35 leading-relaxed max-w-[210px] mb-5">
              The AI-native operating system for modern SEO workflows.
            </p>
            <div className="flex gap-2.5">
              {["𝕏", "in", "gh"].map((icon) => (
                <motion.a
                  key={icon}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(249,115,22,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[11px] font-bold text-white/35 hover:text-white/70 transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="label-sm text-white/22 mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-white/35 hover:text-white/75 transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/22">© 2026 Riviso, Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-[12px] text-white/25">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
