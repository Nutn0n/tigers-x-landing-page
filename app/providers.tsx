"use client";

import { LocaleProvider } from "@/components/locale-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
