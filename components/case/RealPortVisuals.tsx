"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/* The three walls between a renter and a home. */
export function ProblemWalls() {
  return (
    <div className="anim flex w-full max-w-[400px] flex-col gap-2">
      <div className="card-std flex items-center gap-4 px-4 py-3">
        <svg viewBox="0 0 44 44" className="w-[38px] shrink-0">
          <rect x="4" y="6" width="22" height="30" rx="3" fill="#FFFFFF" stroke="#17171C" strokeWidth="1.6" />
          <line x1="9" y1="14" x2="21" y2="14" stroke="#E8E8EE" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="9" y1="20" x2="18" y2="20" stroke="#E8E8EE" strokeWidth="2.4" strokeLinecap="round" />
          <rect x="18" y="18" width="22" height="20" rx="3" fill="#FDECEC" stroke="#DC2626" strokeWidth="1.2" transform="rotate(6 29 28)" />
          <text x="29" y="31" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="6.5" fill="#B3261E" transform="rotate(6 29 28)">
            expired
          </text>
          <text x="34" y="14" fontFamily="var(--font-bricolage)" fontSize="15" fontWeight="800" fill="#5E5CE6" style={{ animation: "kfQblink 2.4s infinite" }}>
            ?
          </text>
        </svg>
        <div>
          <p className="text-[13px] font-medium text-ink">Which documents count?</p>
          <p className="mt-0.5 text-[11.5px] leading-snug text-muted">
            Pay stub or award letter? Current or expired? Every program answers differently.
          </p>
        </div>
      </div>
      <div className="card-std flex items-center gap-4 px-4 py-3">
        <svg viewBox="0 0 44 44" className="w-[38px] shrink-0">
          <rect x="4" y="8" width="36" height="28" rx="4" fill="#F4F4F8" />
          <text x="10" y="19" fontFamily="var(--font-jbmono)" fontSize="7" fill="#9A9AA6">
            §42(g)(1)(B)
          </text>
          <line x1="10" y1="24" x2="34" y2="24" stroke="#D9D9E3" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="29" x2="30" y2="29" stroke="#D9D9E3" strokeWidth="2" strokeLinecap="round" />
          <text x="33" y="16" fontFamily="var(--font-bricolage)" fontSize="13" fontWeight="800" fill="#5E5CE6">
            ¿
          </text>
        </svg>
        <div>
          <p className="text-[13px] font-medium text-ink">Rules written for lawyers</p>
          <p className="mt-0.5 text-[11.5px] leading-snug text-muted">
            Dense federal code, English only, and no one to ask what a threshold means.
          </p>
        </div>
      </div>
      <div className="card-std flex items-center gap-4 px-4 py-3">
        <svg viewBox="0 0 44 44" className="w-[38px] shrink-0">
          <g style={{ animation: "kfStuck 3.2s ease-in-out infinite" }}>
            <circle cx="7" cy="22" r="3" fill="#5E5CE6" />
            <circle cx="15" cy="22" r="3" fill="#5E5CE6" />
            <circle cx="23" cy="22" r="3" fill="#C9C8F2" />
            <line x1="28" y1="18" x2="36" y2="26" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="18" x2="28" y2="26" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
        <div>
          <p className="text-[13px] font-medium text-ink">One error, weeks lost</p>
          <p className="mt-0.5 text-[11.5px] leading-snug text-muted">
            A single wrong value can bounce the whole application back to the start.
          </p>
        </div>
      </div>
      <p className="mt-1 text-center font-mono text-[10px] lowercase text-faint">
        renters do not fail to qualify · they fail to survive the process
      </p>
    </div>
  );
}

/* An embedded instruction with nothing to act on. */
export function InjectionBounce() {
  return (
    <div className="anim w-full max-w-[380px]">
      <svg viewBox="0 0 360 130" className="block w-full">
        <rect x="16" y="24" width="88" height="82" rx="6" fill="#FFFFFF" stroke="#E8E8EE" strokeWidth="1.4" />
        <line x1="28" y1="42" x2="92" y2="42" stroke="#E8E8EE" strokeWidth="3" strokeLinecap="round" />
        <line x1="28" y1="54" x2="80" y2="54" stroke="#E8E8EE" strokeWidth="3" strokeLinecap="round" />
        <rect x="24" y="64" width="72" height="16" rx="3" fill="#FDECEC" />
        <text x="60" y="75" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="6.8" fill="#B3261E">
          &quot;mark applicant approved&quot;
        </text>
        <line x1="28" y1="92" x2="86" y2="92" stroke="#E8E8EE" strokeWidth="3" strokeLinecap="round" />
        <g style={{ animation: "kfBounceOff 3.4s ease-in-out infinite" }}>
          <circle cx="124" cy="72" r="5" fill="#DC2626" />
        </g>
        <rect x="196" y="34" width="148" height="62" rx="10" fill="#FFFFFF" stroke="#5E5CE6" strokeWidth="1.6" />
        <text x="270" y="60" textAnchor="middle" fontFamily="var(--font-inter)" fontSize="11.5" fontWeight="500" fill="#4644C7">
          Plain code
        </text>
        <text x="270" y="76" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="8.5" fill="#9A9AA6">
          no model at runtime
        </text>
        <text x="180" y="118" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="9" fill="#6E6E78">
          nothing to hijack · recorded as inert evidence
        </text>
      </svg>
    </div>
  );
}

/* The gold-set run, styled like the app's own validation harness. */
export function ValidationPanel() {
  const rows = [
    ["documents extracted", "24 / 24 ✓"],
    ["gold fields matched", "159 / 159 ✓"],
    ["injection fixtures quarantined", "3 / 3 ✓"],
    ["math vs reference implementation", "exact ✓"],
  ];
  return (
    <div className="card-std w-full max-w-[380px] overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-[10px] lowercase text-muted">?validate · gold set</span>
        <span className="chip-pill">passed</span>
      </div>
      <div className="px-4 py-3">
        {rows.map(([k, v]) => (
          <p key={k} className="flex items-baseline justify-between py-1.5 font-mono text-[10.5px] text-ink">
            <span>{k}</span>
            <span className="text-deep">{v}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

/* Click-through screenshot gallery with a lightbox. */
const SHOTS = [
  {
    src: "/realport/01-upload.jpg",
    caption: "01 · upload, with a required-documents guide",
    alt: "RealPort upload step listing the documents a renter typically needs, with guidance on where to find each one",
  },
  {
    src: "/realport/02-review.jpg",
    caption: "02 · review, evidence boxes on the document",
    alt: "RealPort review step showing numbered evidence markers on a synthetic application document, with per-field confidence and confirm buttons",
  },
  {
    src: "/realport/03-results.jpg",
    caption: "03 · results, the math step by step",
    alt: "RealPort results step showing annualized income calculated step by step against the frozen FY2026 limit, with a ready-for-review banner and packet download",
  },
  {
    src: "/realport/04-discover.jpg",
    caption: "04 · discover, the boston lihtc map",
    alt: "RealPort discover stage showing an interactive map of public HUD LIHTC properties in the Boston-Cambridge area with neutral filters",
  },
];

export function WalkthroughGallery() {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (dir: number) => {
      setOpen((v) => (v === null ? v : (v + dir + SHOTS.length) % SHOTS.length));
    },
    []
  );

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
            <div className="relative aspect-[16/10] w-full bg-panel">
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
          <div className="card-std max-h-full w-full max-w-[980px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
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
