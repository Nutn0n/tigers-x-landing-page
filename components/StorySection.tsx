"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { storyContent } from "@/data/missionContent";

const PayloadModelViewer = dynamic(() => import("./PayloadModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center mono-label text-[10px] text-white/55">
      LOADING PAYLOAD MODEL…
    </div>
  ),
});

export default function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const cubeY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const ringScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

  return (
    <section
      ref={ref}
      id="story"
      className="relative w-full overflow-hidden bg-black py-28 sm:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <SectionLabel tone="accent">{storyContent.eyebrow}</SectionLabel>
          <AnimatedText
            as="h2"
            text={storyContent.heading}
            className="display-font h-display mt-6 text-[clamp(2.5rem,6vw,5rem)] text-white"
          />
          <FadeUp delay={0.1} className="mt-8 flex items-center gap-3">
            <span className="mono-label text-[10px] text-white/55">2.5 KG</span>
            <span className="h-px w-10 bg-white/30" />
            <span className="mono-label text-[10px] text-white/55">
              100 × 100 × 200 MM
            </span>
          </FadeUp>
        </div>

        <div className="space-y-8 lg:col-span-7">
          {/* Real 3D payload model */}
          <motion.div
            style={{ y: cubeY }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] border border-white bg-white"
          >
            <motion.div
              style={{ scale: ringScale }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--s-bg-2)]/15"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--s-border-2)]/30" />

            <div className="absolute inset-0">
              <PayloadModelViewer />
            </div>
          </motion.div>

          {storyContent.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p
                className={`max-w-2xl text-pretty leading-relaxed ${
                  i === 1
                    ? "text-2xl font-medium text-white sm:text-3xl"
                    : "text-lg text-white/80"
                }`}
              >
                {p}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
