"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedText, { FadeUp } from "./AnimatedText";
import MissionPatch from "./MissionPatch";
import SectionLabel from "./SectionLabel";
import { useMissionContent } from "@/components/locale-context";

const spring = { type: "spring" as const, stiffness: 200, damping: 22 };

export default function ClosingSection() {
  const { closingContent } = useMissionContent();
  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 py-32 sm:py-44">
      {/* Far horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(237, 109, 47, 0.16), rgba(23, 59, 114, 0.05) 60%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 text-center sm:px-10">
        <SectionLabel align="center" tone="accent">
          {closingContent.eyebrow}
        </SectionLabel>

        <div className="mx-auto mt-8 flex flex-col items-center gap-6">
          <MissionPatch size={264} spin={false} withRing={false} />
          <AnimatedText
            as="h2"
            text={closingContent.heading}
            className="display-font h-display mx-auto max-w-5xl text-balance text-[clamp(2.25rem,6vw,5rem)] text-white"
          />
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-3 text-left sm:text-center">
          {closingContent.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <p
                className={`text-pretty leading-relaxed ${
                  i === 0
                    ? "text-xl font-medium text-white"
                    : "text-base text-white/70 sm:text-lg"
                }`}
              >
                {p}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {closingContent.ctas.map((cta) => (
              <CtaButton key={cta.label} {...cta} />
            ))}
          </div>
        </FadeUp>

        {/* Sign-off bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={spring}
          className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 mono-label text-[10px] text-white/55"
        >
          <span>{closingContent.footer.signoffLine}</span>
          <span className="text-[var(--s-border-2)]">
            {closingContent.footer.signoffMid}
          </span>
          <span>{closingContent.footer.signoffPlaces}</span>
        </motion.div>

        <Footer />
      </div>
    </section>
  );
}

function CtaButton({
  label,
  href,
  variant,
}: {
  label: string;
  href: string;
  variant: "primary" | "ghost";
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-[10px] border px-5 py-3 text-sm font-medium transition will-change-transform";
  const styles =
    variant === "primary"
      ? "border-[var(--s-border-2)] bg-[var(--s-border-2)] text-white hover:brightness-110"
      : "border-white bg-white text-[var(--s-bg-2)] hover:bg-white/90";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      <motion.span
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 18 }}
        className="flex items-center gap-3"
      >
        {label}
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current opacity-70 transition group-hover:translate-x-0.5"
          aria-hidden
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 5h8M5 1l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.span>
    </Link>
  );
}

function Footer() {
  const { closingContent } = useMissionContent();
  const f = closingContent.footer;
  const partnerLogos = [
    { src: "/CRA_Logo.svg", alt: "CRA logo" },
    { src: "/Thai_MHESI_emblem.svg", alt: "Thai MHESI emblem" },
    { src: "/TSRI_Logo_2021.svg", alt: "TSRI logo 2021" },
    { src: "/pim-logo.png", alt: "PIM logo" },
    { src: "/GISTDA_LOGO-2048x1165.png", alt: "GISTDA logo" },
    { src: "/temec-logo-2048x1165.png", alt: "TEMEC logo" },
  ];

  return (
    <div className="mt-12 text-left">
      <div className="rounded-[14px] bg-white/[0.03] p-5 sm:p-6">
        <div className="mono-label text-[10px] text-[var(--s-border-2)]">
          {f.researchTeamLabel}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {f.researchTeam.map((member) => (
            <div key={member.name} className="flex flex-col gap-0.5">
              <span className="text-[11px] text-white/65">{member.role}</span>
              <span className="text-sm text-white">{member.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="mono-label text-[10px] text-[var(--s-border-2)]">
            Supporting Organizations
          </div>
          <div className="mt-2 rounded-[12px] bg-white p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {partnerLogos.map((logo) => (
                <div key={logo.src} className="relative h-14">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-1"
                    sizes="(min-width: 1024px) 12vw, (min-width: 640px) 20vw, 40vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/15 pt-8 text-white/70">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-left">
            <p className="text-[11px] text-white/60 sm:text-xs">{f.designCredit}</p>

            <p className="mono-label mt-5 max-w-[220px] text-[9px] text-white/50">
              {f.designPartnerLabel}
              <br />
              <a
                href={f.designPartnerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit underline-offset-2 transition hover:underline"
              >
                {f.designPartnerLinkText}
              </a>
            </p>
          </div>

          <p className="text-right text-xs text-white/50 sm:max-w-[min(280px,45%)] sm:self-end">
            © {new Date().getFullYear()} {f.copyrightNotice}
          </p>
        </div>
      </div>
    </div>
  );
}
