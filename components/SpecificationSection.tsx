"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

const spring = { type: "spring" as const, stiffness: 200, damping: 22 };

const SpecModelViewer = dynamic(() => import("./PayloadModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[200px] w-full bg-transparent" aria-hidden />
  ),
});

export default function SpecificationSection() {
  const { specContent } = useMissionContent();
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

          {/* 3D canvas — no overlays or frame background */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/4] w-full overflow-hidden bg-transparent">
              <div className="absolute inset-0">
                <SpecModelViewer
                  src="/cube.glb"
                  outlineOnly={true}
                  autoRotate={false}
                  orbitControls
                  transparentCanvas
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-white bg-[var(--s-bg-2)]/30 md:grid-cols-3 lg:grid-cols-6">
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
