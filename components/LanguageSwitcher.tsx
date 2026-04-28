"use client";

import { useLocale } from "./locale-context";

type Props = {
  variant?: "hero" | "sticky";
  className?: string;
};

export default function LanguageSwitcher({ className = "" }: Props) {
  const { locale, setLocale } = useLocale();

  const baseBtn =
    "rounded-md px-2.5 py-1 text-[11px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--s-border-2)]";
  const inactive =
    "text-[var(--s-bg-2)]/55 hover:bg-[var(--s-bg-2)]/[0.06] hover:text-[var(--s-bg-2)]";
  const active = "bg-[var(--s-border-2)] text-white";

  return (
    <div
      className={`flex items-center gap-0.5 rounded-[10px] bg-white p-0.5 ring-1 ring-[var(--s-bg-2)]/10 ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        className={`${baseBtn} ${locale === "en" ? active : inactive}`}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={`${baseBtn} ${locale === "th" ? active : inactive}`}
        onClick={() => setLocale("th")}
      >
        ไทย
      </button>
    </div>
  );
}
