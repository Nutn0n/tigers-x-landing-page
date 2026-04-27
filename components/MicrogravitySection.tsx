"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { microgravityContent } from "@/data/missionContent";

export default function MicrogravitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const wordOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.2, 1, 1, 0.4],
  );
  const driftX = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden border-t border-white/10 py-32 sm:py-44"
    >
      {/* Floating particles */}
      <div aria-hidden className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full border border-[var(--s-border-2)]/40 bg-[var(--s-border-2)]/10"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
            }}
            animate={{
              x: [0, 12, -8, 0],
              y: [0, -10, 6, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 8 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <SectionLabel tone="accent">{microgravityContent.eyebrow}</SectionLabel>

        <motion.div
          style={{ opacity: wordOpacity, x: driftX }}
          className="mt-10"
        >
          <AnimatedText
            as="h2"
            text={microgravityContent.heading}
            stagger={0.06}
            className="display-font h-display max-w-5xl text-balance text-[clamp(2.5rem,7vw,6.5rem)] text-white"
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-6 space-y-8">
            {microgravityContent.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <p className="text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="mt-24 overflow-hidden border-y border-white/15 py-5">
          <div className="marquee-track flex w-max gap-12 mono-label text-[12px] text-white/40">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-12">
                <span>FLUID DYNAMICS</span>
                <span className="text-[var(--s-border-2)]">●</span>
                <span>INTERFACIAL BEHAVIOUR</span>
                <span className="text-[var(--s-border-2)]">●</span>
                <span>EMULSION STABILITY</span>
                <span className="text-[var(--s-border-2)]">●</span>
                <span>HIDDEN DYNAMICS</span>
                <span className="text-[var(--s-border-2)]">●</span>
                <span>CLEANER ENVIRONMENT</span>
                <span className="text-[var(--s-border-2)]">●</span>
                <span>µG OBSERVATION</span>
                <span className="text-[var(--s-border-2)]">●</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
