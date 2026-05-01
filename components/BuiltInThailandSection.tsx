"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

function PayloadViewsMobileCarousel({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    if (w <= 0) return;
    setActive(Math.min(items.length - 1, Math.round(el.scrollLeft / w)));
  }, [items.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => updateActive());
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateActive]);

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={updateActive}
        className="flex w-full touch-pan-x snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Payload views"
      >
        {items.map((item) => (
          <div
            key={item.src}
            className="relative aspect-[4/3] w-full shrink-0 grow-0 basis-full snap-center snap-always overflow-hidden rounded-[12px]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="100vw"
              className="object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2" aria-label="Slides">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-current={i === active ? "true" : undefined}
            aria-label={`Go to slide ${i + 1} of ${items.length}`}
            onClick={() => scrollToIndex(i)}
            className={`h-1.5 rounded-full transition-[width,background-color] ${
              i === active ? "w-6 bg-white" : "w-1.5 bg-white/35 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function BuiltInThailandSection() {
  const { builtInThailandContent } = useMissionContent();
  const { featureImage, payloadViews } = builtInThailandContent;

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

        <FadeUp delay={0.2}>
          <div className="mt-12 lg:mt-16">
            <div className="sm:hidden">
              <PayloadViewsMobileCarousel items={payloadViews} />
            </div>
            <div className="hidden grid-cols-3 gap-5 sm:grid lg:gap-6">
              {payloadViews.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
