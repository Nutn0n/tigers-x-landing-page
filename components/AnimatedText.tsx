"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
};

const spring = {
  type: "spring" as const,
  stiffness: 220,
  damping: 22,
  mass: 0.6,
};

/**
 * Animates a heading (or block) as a single unit — no nested word spans.
 */
export default function AnimatedText({
  text,
  className = "",
  as = "h2",
  delay = 0,
}: Props) {
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.h2;

  if (reduced) {
    const Static = as;
    return <Static className={className}>{text}</Static>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...spring, delay }}
    >
      {text}
    </Tag>
  );
}

export function FadeUp({
  children,
  delay = 0,
  className = "",
  amount = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}
