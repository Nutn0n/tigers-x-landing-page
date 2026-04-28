"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import MissionPatch from "./MissionPatch";
import LanguageSwitcher from "./LanguageSwitcher";
import { useMissionContent } from "@/components/locale-context";

export default function StickyHeader() {
  const { heroContent } = useMissionContent();
  const navLinks = [
    { href: "#story", label: heroContent.navMission },
    { href: "#science", label: heroContent.navScience },
    { href: "#specifications", label: heroContent.navSpecs },
    { href: "#timeline", label: heroContent.navTimeline },
  ];
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

          <div className="mission-header relative mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-6 py-3 sm:px-10">
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
                  {heroContent.stickySubtitle}
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
                {heroContent.stickyCountdown}
              </div>
              <LanguageSwitcher variant="sticky" />
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
