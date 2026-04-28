"use client";

import AnimatedText, { FadeUp } from "./AnimatedText";
import PayloadTelemetryDiagram from "./PayloadTelemetryDiagram";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

export default function NetworkSection() {
  const { networkContent, activePayloadContent } = useMissionContent();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel tone="accent">{networkContent.eyebrow}</SectionLabel>
            <AnimatedText
              as="h2"
              text={networkContent.heading}
              className="display-font h-display mt-6 text-[clamp(2rem,5vw,4rem)] text-white"
            />
          </div>
          <div className="space-y-6 lg:col-span-7 lg:pt-6">
            {networkContent.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.05} className="mt-12 block">
          <PayloadTelemetryDiagram content={activePayloadContent} />
        </FadeUp>
      </div>
    </section>
  );
}
