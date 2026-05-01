"use client";

import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";
import { motion } from "framer-motion";

export default function SystemDesignSection() {
  const { systemDesignContent } = useMissionContent();
  const impactImages = ["/medical.png", "/food.png", "/exploration.png"];

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

        <div className="mt-16">
          <div className="relative">
            <div className="pointer-events-none absolute left-3 right-3 top-3 hidden h-px bg-white/40 lg:block" />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {systemDesignContent.impacts.map((impact, index) => (
                <motion.article
                  key={impact.term}
                  className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1 * index,
                  }}
                >
                    <div
                      className="w-full min-h-[300px] bg-[#FA5F05] bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${impactImages[index] ?? ""})` }}
                      aria-label={`${impact.term} visual`}
                    />
                    <div className="p-6 sm:p-8">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/55">
                        {impact.term}
                      </p>
                      <h3 className="mt-2 text-balance text-xl font-semibold leading-tight text-black sm:text-2xl">
                        {impact.title}
                      </h3>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-black/75 sm:text-lg">
                        {impact.body}
                      </p>
                    </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
