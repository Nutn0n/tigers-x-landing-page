"use client";

import { motion } from "framer-motion";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { legacyContent } from "@/data/missionContent";

const spring = { type: "spring" as const, stiffness: 200, damping: 22 };

export default function LegacySection() {
  return (
    <section className="relative w-full border-t border-white/10 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel tone="accent">{legacyContent.eyebrow}</SectionLabel>
            <AnimatedText
              as="h2"
              text={legacyContent.heading}
              className="display-font h-display mt-6 text-[clamp(2rem,5vw,4rem)] text-white"
            />
          </div>
          <div className="space-y-6 lg:col-span-6 lg:pt-6">
            {legacyContent.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {legacyContent.archives.map((a, i) => (
            <motion.div
              key={a.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...spring, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[14px] border border-white bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="mono-label text-[10px] text-[var(--s-border-2)]">
                  {a.code}
                </span>
                <span className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                  ARCHIVE / TX
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--s-bg-2)]">
                {a.title}
              </h3>

              {/* Mock log lines */}
              <div className="mt-4 space-y-1.5 font-mono text-[10px] leading-relaxed text-[var(--s-bg-2)]/40">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <span className="text-[var(--s-border-2)]/80">
                      {String(j + 1).padStart(3, "0")}
                    </span>
                    <span className="block h-1 flex-1 bg-[var(--s-bg-2)]/10">
                      <span
                        className="block h-full bg-[var(--s-bg-2)]/40"
                        style={{
                          width: `${30 + ((i + j) * 17) % 60}%`,
                        }}
                      />
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between mono-label text-[10px] text-[var(--s-bg-2)]/45">
                <span>{a.lines.toLocaleString()} entries</span>
                <span className="text-[var(--s-border-2)]">PUBLIC</span>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[14px] border border-[var(--s-border-2)] bg-white px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div>
              <div className="mono-label text-[10px] text-[var(--s-border-2)]">
                Open Heritage
              </div>
              <p className="mt-1 max-w-xl text-sm text-[var(--s-bg-2)]/80">
                The next generation of Thai space engineers will not start from
                zero again.
              </p>
            </div>
            <a
              href="#archive"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--s-bg-2)]/30 bg-[var(--s-bg-2)] px-4 py-2 text-sm text-white transition hover:bg-[var(--s-bg-1)]"
            >
              Browse Archive
              <span aria-hidden>→</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
