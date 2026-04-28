"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MissionPatch from "./MissionPatch";

export type PayloadTelemetryContent = {
  diagramCaption: string;
  activeBadge: string;
  diagramFooter: string[];
  nodePrefix: string;
  link: { id: string; label: string; sub: string }[];
};

function getNodeOffsetClass(index: number) {
  if (index === 1) return "sm:ml-12";
  if (index === 2) return "sm:ml-24";
  return "";
}

function NodeLogo({ nodeId }: { nodeId: string }) {
  if (nodeId === "iss") {
    return (
      <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
        <Image
          src="/esa.svg"
          alt="European Space Agency"
          fill
          className="object-contain"
          sizes="56px"
        />
      </div>
    );
  }

  if (nodeId === "esa") {
    return (
      <div className="relative h-12 w-20 shrink-0 sm:h-14 sm:w-24">
        <Image
          src="/spaceapplication.jpg"
          alt="Space Applications Services"
          fill
          className="object-contain"
          sizes="96px"
        />
      </div>
    );
  }

  if (nodeId === "bkk") {
    return (
      <div className="shrink-0">
        <MissionPatch size={56} spin={false} withRing={false} />
      </div>
    );
  }

  return null;
}

export default function PayloadTelemetryDiagram({
  content,
}: {
  content: PayloadTelemetryContent;
}) {
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-white/20 bg-[var(--s-bg-1)]/40 p-6">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="mb-8 flex items-center justify-between mono-label text-[10px] text-white/55">
        <span>{content.diagramCaption}</span>
        <span className="text-[var(--s-border-2)]">{content.activeBadge}</span>
      </div>

      <div className="relative">
        <ConnectionPath />
        <div className="relative flex flex-col gap-12 sm:gap-6">
          {content.link.map((node, i) => (
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
              className={`relative flex items-center gap-4 ${getNodeOffsetClass(i)}`}
            >
              <div className="node-pulse relative flex h-3 w-3 items-center justify-center">
                <span className="block h-3 w-3 rounded-full bg-[var(--s-border-2)]" />
              </div>
              <div className="flex-1 rounded-[10px] border border-white bg-white px-4 py-3">
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[var(--s-bg-2)]">
                        {node.label}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-[var(--s-bg-2)]/60">{node.sub}</div>
                  </div>
                  <NodeLogo nodeId={node.id} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between mono-label text-[10px] text-white/45">
        {content.diagramFooter.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </div>
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
