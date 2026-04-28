"use client";

import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

export default function SystemDesignSection() {
  const { systemDesignContent } = useMissionContent();
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

        {/* Reserved layout slot — visualization cards removed for now */}
        <div
          className="mt-16 min-h-[min(40vh,420px)] w-full rounded-[14px] bg-transparent"
          aria-label="Reserved space for future content"
        />
      </div>
    </section>
  );
}
