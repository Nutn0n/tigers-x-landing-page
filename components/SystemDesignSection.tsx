"use client";

import { motion } from "framer-motion";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { systemDesignContent } from "@/data/missionContent";

const spring = { type: "spring" as const, stiffness: 180, damping: 20 };

export default function SystemDesignSection() {
  return (
    <section className="relative w-full border-t border-white/10 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel tone="accent">{systemDesignContent.eyebrow}</SectionLabel>
            <AnimatedText
              as="h2"
              text={systemDesignContent.heading}
              className="display-font h-display mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] text-white"
            />
          </div>
          <div className="space-y-6 lg:col-span-6 lg:pt-6">
            {systemDesignContent.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {systemDesignContent.cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ ...spring, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-[14px] border bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${
                i === 1 ? "border-[var(--s-border-2)]" : "border-white"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="display-font h-display text-5xl text-[var(--s-bg-2)]/15">
                  {c.index}
                </span>
                <span
                  className={`mono-label text-[10px] ${
                    i === 1 ? "text-[var(--s-border-2)]" : "text-[var(--s-bg-2)]/55"
                  }`}
                >
                  PARADIGM {i + 1}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-tight text-[var(--s-bg-2)]">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--s-bg-2)]/70">
                {c.detail}
              </p>

              <div className="mt-8 flex h-12 items-center gap-2">
                {Array.from({ length: 18 }).map((_, j) => {
                  const h = (
                    4 + Math.abs(Math.sin((i + 1) * (j + 1)) * 36)
                  ).toFixed(2);
                  return (
                    <span
                      key={j}
                      className={`block w-px ${
                        i === 1 && j > 8
                          ? "bg-[var(--s-border-2)]"
                          : i === 0
                          ? "bg-[var(--s-bg-2)]/20"
                          : "bg-[var(--s-bg-2)]/30"
                      }`}
                      style={{ height: `${h}px` }}
                    />
                  );
                })}
              </div>
              <div className="mt-2 flex justify-between mono-label text-[9px] text-[var(--s-bg-2)]/40">
                <span>RESILIENCE</span>
                <span>{i === 0 ? "LOW" : i === 1 ? "MID" : "HIGH"}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
