"use client";

import { motion } from "framer-motion";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { scienceContent } from "@/data/missionContent";

export default function ScienceSection() {
  return (
    <section
      id="science"
      className="relative w-full overflow-hidden border-t border-white/10 py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="max-w-3xl">
          <SectionLabel tone="accent">{scienceContent.eyebrow}</SectionLabel>
          <AnimatedText
            as="h2"
            text={scienceContent.heading}
            className="display-font h-display mt-6 text-[clamp(2.5rem,6vw,5rem)] text-white"
          />
          <FadeUp delay={0.05}>
            <p className="mt-4 max-w-2xl text-lg text-white/65">
              {scienceContent.subheading}
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            {scienceContent.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>

          {/* Split diagram */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {scienceContent.comparison.map((c, i) => (
              <motion.div
                key={c.mode}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 20,
                  delay: i * 0.1,
                }}
                className={`relative overflow-hidden rounded-[14px] border bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${
                  i === 1 ? "border-[var(--s-border-2)]" : "border-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                    {`OBS. ${i + 1} / ${c.mode}`}
                  </span>
                  <span
                    className={`mono-label text-[10px] ${
                      i === 1 ? "text-[var(--s-border-2)]" : "text-[var(--s-bg-2)]/55"
                    }`}
                  >
                    {i === 0 ? "1 g" : "≈ 0 g"}
                  </span>
                </div>

                <div className="mt-3 text-2xl font-semibold leading-tight text-[var(--s-bg-2)]">
                  {c.result}
                </div>

                {/* Visual illustrations */}
                <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[10px] border border-white/10 bg-[var(--s-bg-2)]">
                  <div className="absolute inset-0 grid-lines opacity-40" />
                  {i === 0 ? (
                    <EarthSeparation />
                  ) : (
                    <MicrogravityStable />
                  )}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between mono-label text-[9px] text-white/55">
                    <span>FIG. 02.{i + 1}</span>
                    <span>{i === 0 ? "EARTH G-FIELD" : "ISS / µG"}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[var(--s-bg-2)]/70">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EarthSeparation() {
  return (
    <div className="absolute inset-0">
      {/* Container */}
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[40%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[6px] border border-white/40">
        {/* oil layer top */}
        <motion.div
          initial={{ height: "50%" }}
          whileInView={{ height: "30%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="bg-[var(--s-border-2)]/70"
        />
        {/* interface line */}
        <div className="h-px w-full bg-white/40" />
        {/* water layer bottom */}
        <motion.div
          initial={{ height: "50%" }}
          whileInView={{ height: "70%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="bg-[var(--s-bg-1)]"
        />
      </div>
      {/* Arrows down */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute right-[18%] top-1/2 -translate-y-1/2 mono-label text-[10px] text-white/40"
      >
        ↓ g
      </motion.div>
    </div>
  );
}

function MicrogravityStable() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[40%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[6px] border border-[var(--s-border-2)]/60">
        {/* Suspended droplets */}
        <div className="relative h-full w-full bg-[var(--s-bg-1)]/60">
          {[
            { x: 25, y: 30, s: 14 },
            { x: 60, y: 50, s: 22 },
            { x: 40, y: 70, s: 16 },
            { x: 75, y: 25, s: 10 },
            { x: 20, y: 60, s: 12 },
          ].map((d, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-[var(--s-border-2)]/70 bg-[var(--s-border-2)]/30"
              style={{
                left: `${d.x}%`,
                top: `${d.y}%`,
                width: d.s,
                height: d.s,
              }}
              animate={{
                x: [0, 4, -3, 0],
                y: [0, -3, 4, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-[18%] top-1/2 -translate-y-1/2 mono-label text-[10px] text-[var(--s-border-2)]/80">
        ≈ 0 g
      </div>
    </div>
  );
}
