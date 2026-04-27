"use client";

import { motion } from "framer-motion";
import AnimatedText, { FadeUp } from "./AnimatedText";
import SectionLabel from "./SectionLabel";
import { networkContent } from "@/data/missionContent";

export default function NetworkSection() {
  const nodeMap = Object.fromEntries(
    networkContent.nodes.map((n) => [n.id, n]),
  );

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

        <FadeUp delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[14px] border border-white/20 bg-[var(--s-bg-1)]/40">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <span className="mono-label text-[10px] text-white/55">
                NETWORK ARCHITECTURE / TIGERS-X ↔ MCC-BKK
              </span>
              <span className="flex items-center gap-2 mono-label text-[10px] text-[var(--s-border-2)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[var(--s-border-2)]" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-[var(--s-border-2)]/60" />
                </span>
                LINK ESTABLISHED
              </span>
            </div>
            <div className="relative aspect-[16/8] w-full">
              <div className="absolute inset-0 grid-lines opacity-25" />
              {/* Edges */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
                aria-hidden
              >
                {networkContent.edges.map(([from, to], i) => {
                  const a = nodeMap[from];
                  const b = nodeMap[to];
                  if (!a || !b) return null;
                  return (
                    <g key={`${from}-${to}`}>
                      <motion.line
                        x1={a.x}
                        y1={a.y}
                        x2={b.x}
                        y2={b.y}
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="0.18"
                        strokeDasharray="0.8 0.8"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.4,
                          delay: i * 0.25,
                          ease: "easeOut",
                        }}
                      />
                      <motion.circle
                        r="0.45"
                        fill="var(--s-border-2)"
                        initial={{ offsetDistance: "0%" }}
                      >
                        <animate
                          attributeName="cx"
                          from={a.x}
                          to={b.x}
                          dur="3.4s"
                          begin={`${i * 0.6}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          from={a.y}
                          to={b.y}
                          dur="3.4s"
                          begin={`${i * 0.6}s`}
                          repeatCount="indefinite"
                        />
                      </motion.circle>
                    </g>
                  );
                })}
              </svg>
              {/* Nodes */}
              {networkContent.nodes.map((n, i) => (
                <motion.div
                  key={n.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                    delay: i * 0.12,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="node-pulse relative flex h-4 w-4 items-center justify-center rounded-full">
                      <div className="h-3 w-3 rounded-full bg-[var(--s-border-2)] shadow-[0_0_18px_rgba(237,109,47,0.8)]" />
                    </div>
                    <div className="mt-3 max-w-[160px] rounded-[8px] border border-white bg-white px-2.5 py-1.5 text-center text-[11px] text-[var(--s-bg-2)] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                      <div className="font-medium">{n.label}</div>
                      <div className="mono-label mt-0.5 text-[8px] text-[var(--s-bg-2)]/55">
                        {n.sub}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden border-t border-white/10 bg-[var(--s-bg-2)]/30 sm:grid-cols-4">
              {[
                ["Protocol", "TCP/IP"],
                ["Encryption", "TLS / VPN"],
                ["Throughput", "≈ 1.5 Mbps"],
                ["Mode", "Bi-directional"],
              ].map(([k, v]) => (
                <div key={k} className="bg-white px-5 py-4">
                  <div className="mono-label text-[10px] text-[var(--s-bg-2)]/55">
                    {k}
                  </div>
                  <div className="mt-1 text-sm text-[var(--s-bg-2)]">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
