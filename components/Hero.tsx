"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import VideoBackground from "./VideoBackground";
import MissionPatch from "./MissionPatch";
import LanguageSwitcher from "./LanguageSwitcher";
import { useMissionContent } from "@/components/locale-context";

const spring = { type: "spring" as const, stiffness: 180, damping: 22 };

export default function Hero() {
  const { heroContent, missionMeta } = useMissionContent();

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      <VideoBackground src="/hero.mp4" />

      {/* Top nav strip */}
      <div className="mission-header relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 pt-6 sm:px-10">
        <div className="flex items-center gap-3">
          <MissionPatch size={44} spin={false} withRing={false} priority />
          <span className="mono-label text-[11px] text-white/80">
            {heroContent.brandLine}
          </span>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex items-center gap-6 text-[12px] text-white/70">
            <a href="#story" className="hover:text-white">
              {heroContent.navMission}
            </a>
            <a href="#science" className="hover:text-white">
              {heroContent.navScience}
            </a>
            <a href="#specifications" className="hover:text-white">
              {heroContent.navSpecs}
            </a>
            <a href="#timeline" className="hover:text-white">
              {heroContent.navTimeline}
            </a>
          </nav>
          <LanguageSwitcher />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <span className="mono-label text-[10px] text-white/60">
            {heroContent.mobileCountdown}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-6 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={spring}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-white" />
              <span className="mono-label text-[11px] text-white">
                {heroContent.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.05 }}
              className="hero-h1 display-font h-display mt-6 text-[clamp(3.25rem,12vw,9.5rem)] text-white mix-blend-difference"
            >
              {heroContent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.25 }}
              className="mt-6 max-w-2xl text-balance text-base text-white/75 sm:text-lg"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.35 }}
              className="mt-8 max-w-3xl text-balance text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl"
            >
              {heroContent.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {heroContent.ctas.map((cta) => (
                <CtaButton key={cta.label} {...cta} />
              ))}
            </motion.div>
          </div>

          {/* Mission metadata cards */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.4 }}
            className="lg:col-span-4 lg:pt-24"
          >
            {/* Hero mission patch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.6 }}
              className="relative mb-5 flex items-center justify-between gap-4 rounded-[14px] border border-white bg-white px-5 py-4"
            >
              <div className="flex items-center gap-4">
                <MissionPatch size={86} priority />
                <div>
                  <div className="mono-label text-[10px] text-[var(--s-border-2)]">
                    {heroContent.insigniaLabel}
                  </div>
                  <div className="mt-1 text-base font-semibold leading-tight text-[var(--s-bg-2)]">
                    {heroContent.crsLine}
                  </div>
                  <div className="mono-label mt-1 text-[9px] text-[var(--s-bg-2)]/55">
                    {heroContent.columbusLine}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="rounded-[14px] border border-white bg-white p-5">
              <div className="flex items-center justify-between">
                <span className="mono-label text-[10px] text-[var(--s-bg-2)]/60">
                  {heroContent.metadataTitle}
                </span>
                <span className="flex items-center gap-2 mono-label text-[10px] text-[var(--s-border-2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-[var(--s-border-2)]" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-[var(--s-border-2)]/60" />
                  </span>
                  {heroContent.liveLabel}
                </span>
              </div>

              <ul className="mt-5 divide-y divide-[var(--s-bg-2)]/10">
                {missionMeta.map((m, i) => (
                  <motion.li
                    key={m.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...spring, delay: 0.5 + i * 0.08 }}
                    className="flex items-baseline justify-between gap-4 py-3 text-sm"
                  >
                    <span className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                      {m.label}
                    </span>
                    <span className="text-right text-[var(--s-bg-2)]">{m.value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </motion.aside>
        </div>

      </div>
    </section>
  );
}

function CtaButton({
  label,
  href,
  variant,
}: {
  label: string;
  href: string;
  variant: "primary" | "ghost";
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-[10px] border px-5 py-3 text-sm font-medium transition will-change-transform";
  const styles =
    variant === "primary"
      ? "border-[var(--s-border-2)] bg-[var(--s-border-2)] text-white hover:brightness-110"
      : "border-white bg-white text-[var(--s-bg-2)] hover:bg-white/90";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      <motion.span
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 18 }}
        className="flex items-center gap-3"
      >
        {label}
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current opacity-70 transition group-hover:translate-x-0.5"
          aria-hidden
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 5h8M5 1l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.span>
    </Link>
  );
}
