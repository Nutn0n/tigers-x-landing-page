"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

export default function MissionTimeline() {
  const { timelineContent } = useMissionContent();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative w-full border-t border-black/10 bg-white"
    >
      {/* Sticky header */}
      <div className="relative">
        <div className="mx-auto w-full max-w-[1400px] px-6 pt-24 sm:px-10 sm:pt-32">
          <SectionLabel tone="accent">{timelineContent.eyebrow}</SectionLabel>
          <AnimatedText
            as="h2"
            text={timelineContent.heading}
            className="display-font h-display mt-6 text-[clamp(2.5rem,6vw,5rem)] text-[var(--s-bg-2)]"
          />
          <p className="mt-4 max-w-xl text-base text-[var(--s-bg-2)]/65">
            {timelineContent.intro}
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-16 grid w-full max-w-[1400px] grid-cols-12 gap-6 px-6 pb-32 sm:px-10">
        {/* Sticky progress rail */}
        <div className="sticky top-24 col-span-12 h-fit md:col-span-3">
          <div className="rounded-[14px] border border-white bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                {timelineContent.railStatus}
              </span>
              <span className="flex items-center gap-2 mono-label text-[10px] text-[var(--s-border-2)]">
                <span className="h-2 w-2 rounded-full bg-[var(--s-border-2)] animate-pulse" />
                {timelineContent.railOnTrack}
              </span>
            </div>
            <div className="mt-5 flex items-stretch gap-4">
              <div className="relative w-1 overflow-hidden rounded-full bg-[var(--s-bg-2)]/10">
                <motion.div
                  style={{ height: railHeight }}
                  className="absolute left-0 right-0 top-0 bg-[var(--s-border-2)]"
                />
              </div>
              <div className="flex-1">
                <div className="display-font text-3xl font-bold text-[var(--s-bg-2)]">
                  {timelineContent.railLaunchMonth}
                </div>
                <div className="mt-1 text-xs text-[var(--s-bg-2)]/55">
                  {timelineContent.railLaunchSub}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 mono-label text-[9px] text-[var(--s-bg-2)]/55">
                  {timelineContent.railPills.map((pill, pi) => (
                    <div
                      key={pill}
                      className={`rounded border px-2 py-1 ${
                        pi === 5
                          ? "border-[var(--s-border-2)] text-[var(--s-border-2)]"
                          : "border-[var(--s-bg-2)]/15"
                      }`}
                    >
                      {pill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline list */}
        <ol className="col-span-12 md:col-span-9">
          {timelineContent.items.map((item, i) => (
            <TimelineEntry
              key={item.title + i}
              i={i}
              total={timelineContent.items.length}
              item={item}
              phasePrefix={timelineContent.phasePrefix}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineEntry({
  i,
  total,
  item,
  phasePrefix,
}: {
  i: number;
  total: number;
  item: { date: string; title: string; body: string };
  phasePrefix: string;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.05 }}
      className="relative grid grid-cols-12 gap-4 border-t border-[var(--s-bg-2)]/10 py-10 first:border-t-0"
    >
      <div className="col-span-12 sm:col-span-3">
        <div className="flex items-center gap-3">
          <span className="mono-label text-[10px] text-[var(--s-border-2)]">
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-[var(--s-bg-2)]/15" />
        </div>
        <div className="mt-3 text-xl font-semibold tracking-tight text-[var(--s-bg-2)]/70 sm:text-2xl">
          {item.date}
        </div>
      </div>
      <div className="col-span-12 sm:col-span-9">
        <h3 className="display-font text-2xl font-semibold leading-tight text-[var(--s-bg-2)] sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 max-w-2xl text-pretty text-base text-[var(--s-bg-2)]/75 sm:text-lg">
          {item.body}
        </p>
        <div className="relative mt-6 aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-[12px] border border-[var(--s-bg-2)]/15 bg-[var(--s-bg-2)]/[0.04]">
          <Image
            src={`/timeline-${String(i + 1).padStart(2, "0")}.jpg`}
            alt={`${item.title} — ${item.date}`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 55vw, 100vw"
          />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[var(--s-border-2)]" />
          <span className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
            {phasePrefix} {String(i + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.li>
  );
}
