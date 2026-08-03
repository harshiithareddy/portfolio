"use client";

import { useEffect, useState } from "react";

/* Some embedded/webview browsers never fire IntersectionObserver callbacks,
   which would leave whileInView content invisible forever. This probes IO once
   per session; consumers fall back to always-visible when it fails. */

let cached: boolean | null = null;
const listeners = new Set<(v: boolean) => void>();

function probe() {
  if (cached !== null || typeof window === "undefined") return;
  if (!("IntersectionObserver" in window)) {
    cached = false;
    listeners.forEach((l) => l(false));
    return;
  }
  let fired = false;
  try {
    const io = new IntersectionObserver(() => {
      fired = true;
      cached = true;
      io.disconnect();
      listeners.forEach((l) => l(true));
    });
    io.observe(document.documentElement);
    setTimeout(() => {
      if (!fired && cached === null) {
        cached = false;
        io.disconnect();
        listeners.forEach((l) => l(false));
      }
    }, 500);
  } catch {
    cached = false;
    listeners.forEach((l) => l(false));
  }
}

export function useIoWorks(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(cached);
  useEffect(() => {
    if (cached !== null) {
      setOk(cached);
      return;
    }
    listeners.add(setOk);
    probe();
    return () => {
      listeners.delete(setOk);
    };
  }, []);
  return ok;
}
