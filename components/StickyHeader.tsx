"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import MissionPatch from "./MissionPatch";

const navLinks = [
  { href: "#story", label: "Mission" },
  { href: "#science", label: "Science" },
  { href: "#specifications", label: "Specs" },
  { href: "#timeline", label: "Timeline" },
];

export default function StickyHeader() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 320 && !visible) setVisible(true);
    else if (y <= 320 && visible) setVisible(false);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          key="sticky-header"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed inset-x-0 top-0 z-50"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-white" />

          <div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-6 py-3 sm:px-10">
            {/* Brand block w/ patch */}
            <Link href="#hero" className="group flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative"
              >
                <MissionPatch size={40} spin={false} withRing={false} />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="display-font text-base font-bold tracking-tight text-[var(--s-bg-2)]">
                  TIGERS-X
                </span>
                <span className="mono-label mt-1 text-[9px] text-[var(--s-bg-2)]/55">
                  Mission Brief / 2026
                </span>
              </div>
            </Link>

            {/* Center nav */}
            <nav className="hidden items-center gap-6 text-[12px] text-[var(--s-bg-2)]/70 md:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative transition hover:text-[var(--s-bg-2)]"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right block */}
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 mono-label text-[10px] text-[var(--s-border-2)] sm:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[var(--s-border-2)]" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-[var(--s-border-2)]/60" />
                </span>
                T-MINUS · MAY 2026
              </div>
              <a
                href="#follow"
                className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--s-border-2)] bg-transparent px-3 py-1.5 text-xs text-[var(--s-border-2)] transition hover:bg-[var(--s-border-2)] hover:text-white"
              >
                Follow Mission
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
