"use client";

import { motion } from "framer-motion";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { builtInThailandContent } from "@/data/missionContent";

const spring = { type: "spring" as const, stiffness: 200, damping: 22 };

export default function BuiltInThailandSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
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
              <div className="mt-8 inline-flex items-center gap-3 rounded-[12px] border border-white bg-white px-4 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <span className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                  ORIGIN
                </span>
                <span className="text-sm text-[var(--s-bg-2)]">
                  Bangkok · Pathum Thani · Thailand
                </span>
                <span className="text-sm">🇹🇭</span>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {builtInThailandContent.imageGrid.map((img, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...spring, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className={`group relative overflow-hidden rounded-[12px] border ${
                    i % 5 === 0
                      ? "border-[var(--s-border-2)]/60"
                      : "border-white/20"
                  } ${i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
                >
                  <ImagePlaceholder tone={img.tone as "navy" | "deep"} index={i} />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/15 bg-[var(--s-bg-2)]/85 px-3 py-2 backdrop-blur-sm">
                    <figcaption className="text-xs text-white">
                      {img.caption}
                    </figcaption>
                    <span className="mono-label text-[9px] text-[var(--s-border-2)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute left-3 top-3 rounded-md border border-white/20 bg-[var(--s-bg-2)]/70 px-2 py-0.5 mono-label text-[9px] text-white/70 backdrop-blur-sm">
                    {img.tag}
                  </div>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholder({
  tone,
  index,
}: {
  tone: "navy" | "deep";
  index: number;
}) {
  const variants = [
    "linear-gradient(135deg, rgba(23,59,114,0.9), rgba(15,36,63,1))",
    "linear-gradient(135deg, rgba(15,36,63,1), rgba(7,18,32,1))",
    "linear-gradient(135deg, rgba(23,59,114,0.7), rgba(237,109,47,0.18), rgba(15,36,63,1))",
  ];
  const bg = tone === "navy" ? variants[0] : variants[1];

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0" style={{ background: bg }} />
      <div className="absolute inset-0 grid-lines opacity-30" />
      {/* Abstract content per index */}
      {index % 6 === 0 && <CleanroomArt />}
      {index % 6 === 1 && <ChassisArt />}
      {index % 6 === 2 && <TeamArt />}
      {index % 6 === 3 && <TestArt />}
      {index % 6 === 4 && <OpticalArt />}
      {index % 6 === 5 && <FlightArt />}
      <div className="scanline absolute inset-0" />
      <div className="absolute right-2 top-2 mono-label text-[8px] text-white/40">
        IMG / TX-{String(index + 1).padStart(3, "0")}
      </div>
    </div>
  );
}

function CleanroomArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-2 p-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`h-6 w-6 rounded-sm border ${
              i === 4 ? "border-[var(--s-border-2)]" : "border-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
function ChassisArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-24 w-16 rounded-[4px] border border-white/50 bg-white/[0.04]">
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--s-border-2)]" />
        <div className="absolute -left-2 top-2 h-1 w-3 bg-white/40" />
        <div className="absolute -right-2 top-6 h-1 w-3 bg-white/40" />
        <div className="absolute -left-2 bottom-3 h-1 w-3 bg-white/40" />
      </div>
    </div>
  );
}
function TeamArt() {
  return (
    <div className="absolute inset-0 flex items-end justify-around pb-6">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className={`h-4 w-4 rounded-full ${
              i === 1 ? "bg-[var(--s-border-2)]" : "bg-white/60"
            }`}
          />
          <div
            className={`mt-1 h-8 w-3 ${
              i === 1 ? "bg-[var(--s-border-2)]/70" : "bg-white/40"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
function TestArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border border-white/30" />
        <div className="absolute inset-2 rounded-full border border-white/20" />
        <div className="absolute inset-4 rounded-full border border-[var(--s-border-2)]/60" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--s-border-2)]" />
      </div>
    </div>
  );
}
function OpticalArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="h-14 w-14 rounded-full border-[3px] border-white/40" />
        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--s-border-2)]/80" />
      </div>
    </div>
  );
}
function FlightArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="h-16 w-12 rounded-[4px] border border-white/60 bg-white/[0.03]" />
        <div className="mono-label text-[9px] text-[var(--s-border-2)]">
          FLIGHT READY
        </div>
      </div>
    </div>
  );
}
