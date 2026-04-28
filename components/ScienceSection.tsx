"use client";

import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

export default function ScienceSection() {
  const { scienceContent } = useMissionContent();
  return (
    <section
      id="science"
      className="relative w-full overflow-hidden border-t border-black/10 bg-white py-28 text-[var(--s-bg-2)] sm:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="max-w-3xl">
          <SectionLabel tone="accent">{scienceContent.eyebrow}</SectionLabel>
          <AnimatedText
            as="h2"
            text={scienceContent.heading}
            className="display-font h-display mt-6 text-[clamp(2.5rem,6vw,5rem)] text-[var(--s-bg-2)]"
          />
          <FadeUp delay={0.05}>
            <p className="mt-4 max-w-2xl text-lg text-[var(--s-bg-2)]/65">
              {scienceContent.subheading}
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-5">
            {scienceContent.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className="text-pretty text-base leading-relaxed text-[var(--s-bg-2)]/80 sm:text-lg">
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>

          {/* Right column — empty slot for future content (keeps 5+7 grid) */}
          <div className="min-h-0 lg:col-span-7" />
        </div>
      </div>
    </section>
  );
}
