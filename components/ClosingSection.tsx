"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { closingContent } from "@/data/missionContent";

const spring = { type: "spring" as const, stiffness: 200, damping: 22 };

export default function ClosingSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 py-32 sm:py-44">
      {/* Far horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(237, 109, 47, 0.16), rgba(23, 59, 114, 0.05) 60%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 text-center sm:px-10">
        <SectionLabel align="center" tone="accent">
          {closingContent.eyebrow}
        </SectionLabel>

        <AnimatedText
          as="h2"
          text={closingContent.heading}
          stagger={0.04}
          className="display-font h-display mx-auto mt-8 max-w-5xl text-balance text-[clamp(2.25rem,6vw,5rem)] text-white"
        />

        <div className="mx-auto mt-12 max-w-2xl space-y-3 text-left sm:text-center">
          {closingContent.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <p
                className={`text-pretty leading-relaxed ${
                  i === 0
                    ? "text-xl font-medium text-white"
                    : "text-base text-white/70 sm:text-lg"
                }`}
              >
                {p}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {closingContent.ctas.map((cta) => (
              <CtaButton key={cta.label} {...cta} />
            ))}
          </div>
        </FadeUp>

        {/* Sign-off bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={spring}
          className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 mono-label text-[10px] text-white/55"
        >
          <span>TIGERS-X · TPN µG-EXPERIMENT · CRS-34</span>
          <span className="text-[var(--s-border-2)]">END OF MISSION BRIEFING</span>
          <span>BANGKOK · KOUROU · ZAVENTEM · CCSFS · ISS</span>
        </motion.div>

        <Footer />
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

function Footer() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 text-left sm:grid-cols-3 sm:gap-6">
      <div>
        <div className="mono-label text-[10px] text-white/55">Project</div>
        <div className="mt-2 text-sm text-white">
          TIGERS-X — Thailand Innovative G-force Varied Emulsification Research
          for Space Exploration
        </div>
      </div>
      <div>
        <div className="mono-label text-[10px] text-white/55">Partners</div>
        <ul className="mt-2 space-y-1 text-sm text-white/75">
          <li>Space Applications Services (BE)</li>
          <li>European Space Agency</li>
          <li>NASA · SpaceX (CRS-34)</li>
        </ul>
      </div>
      <div>
        <div className="mono-label text-[10px] text-white/55">Contact</div>
        <ul className="mt-2 space-y-1 text-sm text-white/75">
          <li id="follow">Follow Mission Updates</li>
          <li id="contact">team@tigers-x.example</li>
          <li>© {new Date().getFullYear()} TIGERS-X Mission Control</li>
        </ul>
      </div>
    </div>
  );
}
