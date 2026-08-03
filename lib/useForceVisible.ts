"use client";

import { useEffect, useRef, useState } from "react";

/* Watchdog for scroll reveals: if the element has entered the viewport but is
   still transparent after two checks (throttled rAF, dead IntersectionObserver,
   odd webviews), force it visible. In healthy browsers the animation finishes
   long before the second check, so this never fires. */
export function useForceVisible<T extends Element>(margin = 60) {
  const ref = useRef<T | null>(null);
  const [forced, setForced] = useState(false);

  useEffect(() => {
    let checksInView = 0;
    const id = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top >= window.innerHeight - margin) return;
      const probe = el.querySelector("[data-reveal-probe]") ?? el;
      const o = parseFloat(getComputedStyle(probe as Element).opacity || "1");
      if (o >= 0.9) {
        clearInterval(id);
        return;
      }
      checksInView += 1;
      if (checksInView >= 2) {
        setForced(true);
        clearInterval(id);
      }
    }, 900);
    return () => clearInterval(id);
  }, [margin]);

  return { ref, forced };
}
