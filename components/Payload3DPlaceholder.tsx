"use client";

import { motion } from "framer-motion";

type Props = {
  size?: number;
  showLabels?: boolean;
  caption?: string;
};

/**
 * A pure-CSS rotating cube as a stand-in for a real 3D payload viewer.
 * Drop in react-three-fiber later if needed; the API stays the same.
 */
export default function Payload3DPlaceholder({
  size = 220,
  showLabels = true,
  caption = "TIGERS-X / 1U Cube — Procedural Preview",
}: Props) {
  const half = size / 2;
  // 1U-ish: 100x100x200 mm — make it a tall cuboid (1:1:2)
  const w = size;
  const h = size * 2;
  const d = size;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Concentric rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="slow-spin h-[110%] w-[110%] rounded-full border border-dashed border-white/15" />
      </div>
      <div className="pointer-events-none absolute inset-6 flex items-center justify-center">
        <div className="h-full w-full rounded-full border border-white/10" />
      </div>

      <div
        className="scene-3d relative"
        style={{ width: w, height: h }}
        aria-hidden
      >
        <div
          className="cube"
          style={{
            width: w,
            height: h,
            transform: `translateZ(-${half}px) rotateX(-22deg) rotateY(0deg)`,
          }}
        >
          {/* Front */}
          <div
            className="cube-face"
            style={{
              width: w,
              height: h,
              transform: `translateZ(${d / 2}px)`,
            }}
          >
            <CubeFaceArt label="FRONT" />
          </div>
          {/* Back */}
          <div
            className="cube-face"
            style={{
              width: w,
              height: h,
              transform: `rotateY(180deg) translateZ(${d / 2}px)`,
            }}
          >
            <CubeFaceArt label="BACK" />
          </div>
          {/* Right */}
          <div
            className="cube-face"
            style={{
              width: d,
              height: h,
              left: (w - d) / 2,
              transform: `rotateY(90deg) translateZ(${w / 2}px)`,
            }}
          >
            <CubeFaceArt label="RIGHT" />
          </div>
          {/* Left */}
          <div
            className="cube-face"
            style={{
              width: d,
              height: h,
              left: (w - d) / 2,
              transform: `rotateY(-90deg) translateZ(${w / 2}px)`,
            }}
          >
            <CubeFaceArt label="LEFT" />
          </div>
          {/* Top */}
          <div
            className="cube-face"
            style={{
              width: w,
              height: d,
              top: (h - d) / 2,
              transform: `rotateX(90deg) translateZ(${h / 2}px)`,
            }}
          >
            <CubeFaceArt label="TOP" />
          </div>
          {/* Bottom */}
          <div
            className="cube-face"
            style={{
              width: w,
              height: d,
              top: (h - d) / 2,
              transform: `rotateX(-90deg) translateZ(${h / 2}px)`,
            }}
          >
            <CubeFaceArt label="BOTTOM" />
          </div>
        </div>
      </div>

      {showLabels && (
        <>
          <DimensionLabel
            text="200 mm"
            className="left-1/2 top-2 -translate-x-1/2"
          />
          <DimensionLabel
            text="100 mm"
            className="bottom-6 left-1/2 -translate-x-1/2"
          />
          <DimensionLabel
            text="100 mm"
            className="right-2 top-1/2 -translate-y-1/2 rotate-90"
            small
          />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-white/50"
      >
        <span className="mono-label">{caption}</span>
        <span className="mono-label text-[var(--s-border-2)]">REV.A</span>
      </motion.div>
    </div>
  );
}

function CubeFaceArt({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute inset-2 rounded-[6px] border border-white/30" />
      <div className="absolute left-2 top-2 mono-label text-[8px] text-white/60">
        {label}
      </div>
      <div className="absolute right-2 top-2 mono-label text-[8px] text-[var(--s-border-2)]">
        TX-1U
      </div>
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[8px] text-white/40 mono-label">
        <span>AL-7075</span>
        <span>2.5 KG</span>
      </div>
      <div className="h-3 w-3 rounded-full bg-[var(--s-border-2)] shadow-[0_0_18px_rgba(237,109,47,0.7)]" />
    </div>
  );
}

function DimensionLabel({
  text,
  className = "",
  small = false,
}: {
  text: string;
  className?: string;
  small?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute mono-label ${
        small ? "text-[9px]" : "text-[10px]"
      } text-[var(--s-border-2)] ${className}`}
    >
      <span className="rounded-sm border border-[var(--s-border-2)]/60 bg-[var(--s-bg-2)]/70 px-2 py-0.5 backdrop-blur-sm">
        {text}
      </span>
    </div>
  );
}
