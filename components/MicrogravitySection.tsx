"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

export default function MicrogravitySection() {
  const { microgravityContent } = useMissionContent();
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
      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <SectionLabel tone="accent">{microgravityContent.eyebrow}</SectionLabel>

        <motion.div
          style={{ opacity: wordOpacity, x: driftX }}
          className="mt-10"
        >
          <AnimatedText
            as="h2"
            text={microgravityContent.heading}
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
      </div>
    </section>
  );
}
