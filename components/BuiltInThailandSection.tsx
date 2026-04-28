"use client";

import Image from "next/image";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

export default function BuiltInThailandSection() {
  const { builtInThailandContent } = useMissionContent();
  const { featureImage } = builtInThailandContent;

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel tone="accent">
              {builtInThailandContent.eyebrow}
            </SectionLabel>
            <AnimatedText
              as="h2"
              text={builtInThailandContent.heading}
              className="display-font h-display mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] text-white"
            />
            <FadeUp delay={0.05}>
              <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                {builtInThailandContent.paragraphs[0]}
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-[12px] border border-white bg-white px-4 py-2.5">
                <span className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                  {builtInThailandContent.originLabel}
                </span>
                <span className="text-sm text-[var(--s-bg-2)]">
                  {builtInThailandContent.originLine}
                </span>
                <span className="text-sm">🇹🇭</span>
              </div>
            </FadeUp>
          </div>

          <div className="relative w-full overflow-hidden rounded-[12px] max-lg:h-[min(50svh,600px)] max-lg:max-h-[600px] lg:col-span-7 lg:h-auto lg:max-h-none lg:min-h-[100dvh]">
            <Image
              src={featureImage.src}
              alt={featureImage.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
