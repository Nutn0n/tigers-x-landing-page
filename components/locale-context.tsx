"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LOCALE_STORAGE_KEY,
  missionBundles,
  type Locale,
  type MissionContent,
} from "@/data/missionContent";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: MissionContent;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(
        LOCALE_STORAGE_KEY,
      ) as Locale | null;
      startTransition(() => {
        if (saved === "th" || saved === "en") setLocaleState(saved);
        setReady(true);
      });
    } catch {
      startTransition(() => setReady(true));
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next === "th" ? "th" : "en";
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale === "th" ? "th" : "en";
  }, [locale, ready]);

  const content = useMemo(() => missionBundles[locale], [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, content }),
    [locale, setLocale, content],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

/** All localized mission copy for the current locale. */
export function useMissionContent(): MissionContent {
  return useLocale().content;
}
