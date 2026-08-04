"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/* Click-through phone screenshot gallery with a lightbox. */
const SHOTS = [
  {
    src: "/periwise/01-summary.jpg",
    caption: "01 · the appointment summary, a doctor-ready pdf",
    alt: "PeriWise appointment summary showing a Menopause Rating Scale score of 28 out of 44, subscale breakdowns, top reported symptoms, and clinical context over a three month tracking window",
  },
  {
    src: "/periwise/02-invite.jpg",
    caption: "02 · sharing starts locked: every toggle off by default",
    alt: "PeriWise invite screen for adding someone to a Care Circle, with relationship options and per-category sharing toggles that all start off",
  },
  {
    src: "/periwise/03-circle.jpg",
    caption: "03 · what a care circle member sees",
    alt: "PeriWise Care Circle view showing Ava's overall wellbeing score, sleep, mood, and symptom summaries, and guidance on how to help this week",
  },
  {
    src: "/periwise/04-clara.jpg",
    caption: "04 · clara, support with boundaries",
    alt: "Clara, the PeriWise care companion chat, with suggested questions like how can I support her today and when should she talk to a doctor",
  },
];

export function PeriWiseGallery() {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback((dir: number) => {
    setOpen((v) => (v === null ? v : (v + dir + SHOTS.length) % SHOTS.length));
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {SHOTS.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setOpen(i)}
            className="card-std card-hover overflow-hidden text-left"
            aria-label={`Open screenshot: ${s.caption}`}
          >
            <div className="relative aspect-[4/5] w-full bg-panel">
              <Image src={s.src} alt={s.alt} fill sizes="(max-width: 1024px) 45vw, 260px" className="object-cover object-top" />
            </div>
            <p className="border-t border-line px-3 py-2 font-mono text-[9.5px] lowercase text-muted">{s.caption}</p>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4 md:p-10"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
          style={{ animation: "kfFadeUp 0.2s ease-out" }}
        >
          <div className="card-std max-h-full w-full max-w-[460px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="font-mono text-[10.5px] lowercase text-muted">{SHOTS[open].caption}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => step(-1)} className="rounded-lg border border-line px-3 py-1 text-[12px] text-ink transition-colors hover:border-accent" aria-label="Previous screenshot">
                  Prev
                </button>
                <button onClick={() => step(1)} className="rounded-lg border border-line px-3 py-1 text-[12px] text-ink transition-colors hover:border-accent" aria-label="Next screenshot">
                  Next
                </button>
                <button onClick={() => setOpen(null)} className="rounded-lg border border-line px-3 py-1 text-[12px] text-ink transition-colors hover:border-accent" aria-label="Close viewer">
                  Close
                </button>
              </div>
            </div>
            <div className="relative max-h-[78vh] overflow-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SHOTS[open].src} alt={SHOTS[open].alt} className="block w-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
