"use client";

import { motion } from "framer-motion";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { activePayloadContent } from "@/data/missionContent";

export default function ActivePayloadSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="max-w-3xl">
          <SectionLabel tone="accent">{activePayloadContent.eyebrow}</SectionLabel>
          <AnimatedText
            as="h2"
            text={activePayloadContent.heading}
            className="display-font h-display mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] text-white"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            {activePayloadContent.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  {p}
                </p>
              </FadeUp>
            ))}

            <FadeUp delay={0.2}>
              <div className="mt-6 rounded-[12px] border border-[var(--s-border-2)] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
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

          {/* Connection diagram */}
          <div className="relative lg:col-span-7">
            <div className="relative overflow-hidden rounded-[14px] border border-white/20 bg-[var(--s-bg-1)]/40 p-6">
              <div className="absolute inset-0 grid-lines opacity-30" />
              <div className="mb-8 flex items-center justify-between mono-label text-[10px] text-white/55">
                <span>FIG. 05 / Telemetry & Telecommand Link</span>
                <span className="text-[var(--s-border-2)]">ACTIVE</span>
              </div>

              <div className="relative">
                <ConnectionPath />
                <div className="relative flex flex-col gap-12 sm:gap-6">
                  {activePayloadContent.link.map((node, i) => (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 22,
                        delay: i * 0.15,
                      }}
                      className={`relative flex items-center gap-4 ${
                        i === 1 ? "sm:ml-12" : i === 2 ? "sm:ml-24" : ""
                      }`}
                    >
                      <div className="node-pulse relative flex h-3 w-3 items-center justify-center">
                        <span className="block h-3 w-3 rounded-full bg-[var(--s-border-2)] shadow-[0_0_14px_rgba(237,109,47,0.7)]" />
                      </div>
                      <div className="flex-1 rounded-[10px] border border-white bg-white px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[var(--s-bg-2)]">
                            {node.label}
                          </span>
                          <span className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                            NODE {i + 1}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-[var(--s-bg-2)]/60">{node.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between mono-label text-[10px] text-white/45">
                <span>LATENCY ≈ 1.2s</span>
                <span>TCP/IP · ENCRYPTED</span>
                <span>BIDIRECTIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectionPath() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.line
        x1="6"
        y1="6"
        x2="6"
        y2="100%"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        strokeDasharray="4 6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
      />
    </svg>
  );
}
