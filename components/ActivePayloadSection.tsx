"use client";

import Image from "next/image";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

export default function ActivePayloadSection() {
  const { activePayloadContent } = useMissionContent();
  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="max-w-3xl">
          <SectionLabel tone="accent">{activePayloadContent.eyebrow}</SectionLabel>
          <div className="relative mt-6 h-28 w-full max-w-[22rem] sm:h-32 sm:max-w-[26rem]">
            <Image
              src="/payload.png"
              alt="Payload"
              fill
              className="object-contain object-left"
              sizes="(min-width: 640px) 416px, 352px"
            />
          </div>
          <AnimatedText
            as="h2"
            text={activePayloadContent.heading}
            className="display-font h-display mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] text-white"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-5">
            {activePayloadContent.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  {p}
                </p>
              </FadeUp>
            ))}

            <FadeUp delay={0.2}>
              <div className="mt-6 rounded-[12px] bg-white p-4">
                <div className="mono-label text-[10px] text-[var(--s-border-2)]">
                  Active Payload
                </div>
                <p className="mt-1 text-sm text-[var(--s-bg-2)]/80">
                  Operated in space, not just sent there. Telemetry and
                  telecommand link in near real time.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="flex min-h-[280px] flex-col justify-center lg:col-span-7">
            <div className="flex w-full items-center justify-center lg:justify-end">
              <img
                src="/iss-outline-only.svg"
                alt="International Space Station outline"
                className="h-auto w-full max-w-xl object-contain brightness-0 invert opacity-90 lg:max-w-2xl"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
