"use client";

import dynamic from "next/dynamic";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

function ModelLoading() {
  const { common } = useMissionContent();
  return (
    <div className="flex h-full w-full items-center justify-center mono-label text-[10px] text-white/55">
      {common.loadingModel}
    </div>
  );
}

const PayloadModelViewer = dynamic(() => import("./PayloadModelViewer"), {
  ssr: false,
  loading: () => <ModelLoading />,
});

export default function StorySection() {
  const { storyContent } = useMissionContent();

  return (
    <section
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

        <div className="min-h-0 space-y-8 lg:col-span-7">
          {/* Real 3D payload model */}
          <div className="relative aspect-[4/3] w-full min-h-0 overflow-hidden bg-black">
            <div className="absolute inset-0 min-h-0 overflow-hidden">
              <PayloadModelViewer outlineOnly />
            </div>
          </div>

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
