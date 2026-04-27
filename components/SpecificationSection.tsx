"use client";

import { motion } from "framer-motion";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import Payload3DPlaceholder from "./Payload3DPlaceholder";
import { specContent } from "@/data/missionContent";

const spring = { type: "spring" as const, stiffness: 200, damping: 22 };

export default function SpecificationSection() {
  return (
    <section
      id="specifications"
      className="relative w-full border-t border-white/10 py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel tone="accent">{specContent.eyebrow}</SectionLabel>
            <AnimatedText
              as="h2"
              text={specContent.heading}
              className="display-font h-display mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] text-white"
            />
            <FadeUp delay={0.05}>
              <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                {specContent.paragraphs[0]}
              </p>
            </FadeUp>
          </div>

          {/* 3D rotating cube */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[14px] border border-white/20 bg-gradient-to-br from-[var(--s-bg-1)]/50 to-[var(--s-bg-2)]">
              <div className="absolute inset-0 grid-lines opacity-25" />
              <div className="absolute left-4 top-4 mono-label text-[10px] text-white/55">
                FIG. 07 / Payload Geometry
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-2 mono-label text-[10px] text-[var(--s-border-2)]">
                <span className="h-2 w-2 rounded-full bg-[var(--s-border-2)] animate-pulse" />
                LIVE PREVIEW
              </div>
              <Payload3DPlaceholder />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between mono-label text-[10px] text-white/45">
                <span>X / Y / Z AXIS LOCKED</span>
                <span>ROT. 22° / 360°</span>
                <span>SCALE 1:1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-white bg-[var(--s-bg-2)]/30 shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:grid-cols-3 lg:grid-cols-6">
          {specContent.specs.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...spring, delay: i * 0.05 }}
              className="relative bg-white p-6"
            >
              <div className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                SPEC {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 text-[11px] text-[var(--s-bg-2)]/55">
                {s.key}
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-semibold text-[var(--s-bg-2)]">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="mono-label text-[10px] text-[var(--s-border-2)]">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-5 h-px w-8 bg-[var(--s-border-2)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
