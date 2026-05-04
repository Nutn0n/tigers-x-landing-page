"use client";

import Image from "next/image";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

export default function ActivePayloadSection() {
  const { activePayloadContent } = useMissionContent();
  const issColumbusLabel =
    activePayloadContent.link.find((n) => n.id === "iss")?.sub ?? "Columbus Module";

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
          </div>

          <FadeUp delay={0.1} className="flex min-h-[280px] flex-col justify-center lg:col-span-7">
            <div className="flex w-full items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-xl lg:max-w-2xl">
                <img
                  src="/iss.png"
                  alt="International Space Station"
                  className="h-auto w-full object-contain"
                />
                <div
                  className="pointer-events-none absolute left-[46%] top-[42%] -translate-x-1/2 -translate-y-1/2"
                  aria-hidden
                >
                  <span className="relative inline-flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
                  </span>
                </div>
                <div className="pointer-events-none absolute left-[46%] top-[calc(42%+0.75rem)] -translate-x-1/2">
                  <div className="rounded-[8px] bg-white px-2.5 py-1 shadow-sm ring-1 ring-black/5">
                    <p className="mono-label whitespace-nowrap text-[9px] text-[var(--s-bg-2)] sm:text-[10px]">
                      {issColumbusLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
