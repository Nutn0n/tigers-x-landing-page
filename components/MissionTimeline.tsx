"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { timelineContent } from "@/data/missionContent";

export default function MissionTimeline() {
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
      className="relative w-full border-t border-white/10"
    >
      {/* Sticky header */}
      <div className="relative">
        <div className="mx-auto w-full max-w-[1400px] px-6 pt-24 sm:px-10 sm:pt-32">
          <SectionLabel tone="accent">{timelineContent.eyebrow}</SectionLabel>
          <AnimatedText
            as="h2"
            text={timelineContent.heading}
            className="display-font h-display mt-6 text-[clamp(2.5rem,6vw,5rem)] text-white"
          />
          <p className="mt-4 max-w-xl text-base text-white/65">
            From idea to orbit and back to Earth — the operational beats of
            TIGERS-X.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-16 grid w-full max-w-[1400px] grid-cols-12 gap-6 px-6 pb-32 sm:px-10">
        {/* Sticky progress rail */}
        <div className="sticky top-24 col-span-12 h-fit md:col-span-3">
          <div className="rounded-[14px] border border-white bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <span className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                T-MINUS · STATUS
              </span>
              <span className="flex items-center gap-2 mono-label text-[10px] text-[var(--s-border-2)]">
                <span className="h-2 w-2 rounded-full bg-[var(--s-border-2)] animate-pulse" />
                ON TRACK
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
                  May 2026
                </div>
                <div className="mt-1 text-xs text-[var(--s-bg-2)]/55">
                  Launch / SpaceX Dragon CRS-34
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 mono-label text-[9px] text-[var(--s-bg-2)]/55">
                  <div className="rounded border border-[var(--s-bg-2)]/15 px-2 py-1">
                    INTRO 2024
                  </div>
                  <div className="rounded border border-[var(--s-bg-2)]/15 px-2 py-1">
                    PDR/CDR
                  </div>
                  <div className="rounded border border-[var(--s-bg-2)]/15 px-2 py-1">
                    ZERO-G
                  </div>
                  <div className="rounded border border-[var(--s-bg-2)]/15 px-2 py-1">
                    INTEGRATION
                  </div>
                  <div className="rounded border border-[var(--s-bg-2)]/15 px-2 py-1">
                    DELIVERY
                  </div>
                  <div className="rounded border border-[var(--s-border-2)] px-2 py-1 text-[var(--s-border-2)]">
                    LAUNCH
                  </div>
                  <div className="rounded border border-[var(--s-bg-2)]/15 px-2 py-1">
                    µG SCIENCE
                  </div>
                  <div className="rounded border border-[var(--s-bg-2)]/15 px-2 py-1">
                    RETURN
                  </div>
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
}: {
  i: number;
  total: number;
  item: (typeof timelineContent)["items"][number];
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.05 }}
      className="relative grid grid-cols-12 gap-4 border-t border-white/10 py-10 first:border-t-0"
    >
      <div className="col-span-12 sm:col-span-3">
        <div className="flex items-center gap-3">
          <span className="mono-label text-[10px] text-[var(--s-border-2)]">
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-white/15" />
        </div>
        <div className="mt-3 mono-label text-[11px] text-white/65">{item.date}</div>
      </div>
      <div className="col-span-12 sm:col-span-9">
        <h3 className="display-font text-2xl font-semibold leading-tight text-white sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 max-w-2xl text-pretty text-base text-white/75 sm:text-lg">
          {item.body}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[var(--s-border-2)]" />
          <span className="mono-label text-[10px] text-white/55">
            MISSION PHASE {String(i + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.li>
  );
}
