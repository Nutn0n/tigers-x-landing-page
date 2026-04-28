"use client";

import Image from "next/image";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

export default function LegacySection() {
  const { legacyContent } = useMissionContent();
  const { heritageImage } = legacyContent;
  const containerClass = "mx-auto w-full max-w-[1400px] px-6 sm:px-10";

  return (
    <section
      id="heritage"
      className="relative w-full overflow-x-clip border-t border-white/10 py-28 sm:py-36"
    >
      <div className={containerClass}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel tone="accent">{legacyContent.eyebrow}</SectionLabel>
            <AnimatedText
              as="h2"
              text={legacyContent.heading}
              className="display-font h-display mt-6 text-[clamp(2rem,5vw,4rem)] text-white"
            />
          </div>
          <div className="space-y-6 lg:col-span-6 lg:pt-6">
            {legacyContent.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  {p}
                </p>
              </FadeUp>
            ))}
            <FadeUp delay={0.18}>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-[14px] bg-white px-6 py-5">
                <div>
                  <div className="mono-label text-[10px] text-[var(--s-border-2)]">
                    {legacyContent.heritageTitle}
                  </div>
                  <p className="mt-1 max-w-xl text-sm text-[var(--s-bg-2)]/80">
                    {legacyContent.heritageTagline}
                  </p>
                </div>
                <a
                  href="#archive"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--s-bg-2)]/30 bg-[var(--s-bg-2)] px-4 py-2 text-sm text-white transition hover:bg-[var(--s-bg-1)]"
                >
                  {legacyContent.browseArchive}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Full viewport height on lg+; capped at 600px on smaller screens */}
      <div className={`${containerClass} mt-14`}>
        <div className="relative w-full overflow-hidden rounded-[12px] max-lg:h-[min(50svh,600px)] max-lg:max-h-[600px] lg:h-[100dvh] lg:min-h-[480px] lg:max-h-none">
          <Image
            src={heritageImage.src}
            alt={heritageImage.alt}
            fill
            priority={false}
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
