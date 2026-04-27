"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  align?: "left" | "center";
  tone?: "white" | "accent";
};

export default function SectionLabel({
  children,
  align = "left",
  tone = "white",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span
        className={`h-px w-8 ${
          tone === "accent" ? "bg-[var(--s-border-2)]" : "bg-white/40"
        }`}
        aria-hidden
      />
      <span
        className={`mono-label text-[10px] sm:text-[11px] ${
          tone === "accent" ? "text-[var(--s-border-2)]" : "text-white/70"
        }`}
      >
        {children}
      </span>
      <span
        className={`h-px w-8 ${
          tone === "accent" ? "bg-[var(--s-border-2)]" : "bg-white/40"
        }`}
        aria-hidden
      />
    </motion.div>
  );
}
