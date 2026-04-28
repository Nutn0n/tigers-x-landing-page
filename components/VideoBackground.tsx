"use client";

import { motion } from "framer-motion";

/**
 * Placeholder video background. When a real video URL is provided via the
 * `src` prop it will play full-bleed; otherwise we render a procedurally
 * animated dark blue space-lab placeholder so the hero still feels alive
 * without any external assets.
 */
type Props = {
  src?: string;
  poster?: string;
  className?: string;
};

export default function VideoBackground({ src, poster, className = "" }: Props) {
  return (
    <div
      className={`absolute left-0 right-0 top-0 h-[50svh] overflow-hidden md:inset-0 md:h-auto ${className}`}
      aria-hidden
    >
      {src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={src} />
        </video>
      ) : (
        <PlaceholderScene />
      )}

      {/* Transparent at top fading to full black at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.95) 88%, rgba(0,0,0,1) 100%)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-overlay opacity-40"
        style={{
          background:
            "radial-gradient(80% 50% at 50% 35%, rgba(237, 109, 47, 0.18), transparent 60%)",
        }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}

function PlaceholderScene() {
  return (
    <div className="absolute inset-0">
      {/* Earth-limb gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 110%, rgba(23, 59, 114, 0.95) 0%, rgba(15, 36, 63, 1) 55%, rgba(7, 18, 32, 1) 100%)",
        }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-lines opacity-30" />

      {/* Slow pan glow horizon */}
      <motion.div
        className="absolute -bottom-10 left-1/2 h-[60vh] w-[140vw] -translate-x-1/2 rounded-[100%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(237, 109, 47, 0.22), rgba(237, 109, 47, 0.05) 60%, transparent 70%)",
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting orb */}
      <motion.div
        className="absolute left-1/2 top-[42%] h-72 w-72 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.18), rgba(23,59,114,0.55) 45%, rgba(15,36,63,0) 70%)",
          boxShadow:
            "0 0 80px rgba(23, 59, 114, 0.6), inset -30px -40px 80px rgba(0,0,0,0.6)",
        }}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Far stars */}
      <div className="absolute inset-0 opacity-80">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 12% 18%, white 50%, transparent 51%), radial-gradient(1px 1px at 78% 22%, white 50%, transparent 51%), radial-gradient(1.5px 1.5px at 32% 72%, white 50%, transparent 51%), radial-gradient(1px 1px at 55% 60%, rgba(255,255,255,0.7) 50%, transparent 51%), radial-gradient(1px 1px at 88% 80%, white 50%, transparent 51%), radial-gradient(1px 1px at 8% 80%, rgba(255,255,255,0.6) 50%, transparent 51%)",
          }}
        />
      </div>
    </div>
  );
}
