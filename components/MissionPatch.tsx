"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  size?: number;
  spin?: boolean;
  withRing?: boolean;
  className?: string;
  priority?: boolean;
};

export default function MissionPatch({
  size = 120,
  spin = false,
  withRing = true,
  className = "",
  priority = false,
}: Props) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {withRing && (
        <>
          <div
            className="pointer-events-none absolute inset-[-10%] rounded-full border border-dashed border-white/15"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-[2%] rounded-full border border-white/10"
            aria-hidden
          />
        </>
      )}

      <motion.div
        className="relative h-full w-full will-change-transform"
        animate={spin ? { rotate: 360 } : undefined}
        transition={
          spin
            ? { duration: 90, repeat: Infinity, ease: "linear" }
            : undefined
        }
      >
        <Image
          src="/patch.png"
          alt="TIGERS-X Mission Patch"
          fill
          sizes={`${size}px`}
          priority={priority}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
