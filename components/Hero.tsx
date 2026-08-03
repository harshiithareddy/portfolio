"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { products } from "@/lib/content";

const AMOUNTS = ["$2,400.00", "$18,250.00", "$940.00", "$61,000.00"];

const TURN_WORDS = [
  "clarity",
  "systems",
  "structure",
  "products",
  "experiences",
  "confidence",
];

function RotatingLine() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % TURN_WORDS.length), 2600);
    return () => clearInterval(t);
  }, [reduced, i]);
  return (
    <p className="mt-5 max-w-[420px] text-[17px] leading-relaxed text-muted">
      I turn complexity into{" "}
      <button
        onClick={() => setI((v) => (v + 1) % TURN_WORDS.length)}
        aria-live="polite"
        aria-label={`complexity into ${TURN_WORDS[i]}, click for the next word`}
        className="inline-block cursor-pointer font-medium text-deep underline decoration-tint decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
      >
        <span key={i} className="anim inline-block" style={{ animation: "kfFadeUp 0.35s ease-out" }}>
          {TURN_WORDS[i]}
        </span>
      </button>
      .
    </p>
  );
}

function MoneyMiniature() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % AMOUNTS.length), 1800);
    return () => clearInterval(t);
  }, [reduced]);
  return (
    <div className="anim">
      <svg viewBox="0 0 140 44" className="block w-full">
        <rect x="2" y="12" width="34" height="22" rx="6" fill="#F0F0F8" />
        <text x="19" y="26" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="8" fill="#4644C7">
          ACH
        </text>
        <rect x="104" y="12" width="34" height="22" rx="6" fill="#F0F0F8" />
        <text x="121" y="26" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="8" fill="#4644C7">
          WIRE
        </text>
        <line x1="38" y1="23" x2="102" y2="23" stroke="#E6E6EE" strokeWidth="1.5" />
        <circle r="3.5" fill="#5E5CE6" style={{ offsetPath: "path('M 38 23 L 102 23')", animation: "kfTravel 1.8s linear infinite" }} />
        <circle r="3.5" fill="#5E5CE6" style={{ offsetPath: "path('M 38 23 L 102 23')", animation: "kfTravel 1.8s linear infinite", animationDelay: "0.9s" }} />
      </svg>
      <p className="mt-1.5 font-mono text-[10px] text-muted">{AMOUNTS[i]} sent</p>
    </div>
  );
}

function OnboardingMiniature() {
  const rows = ["identity verified", "documents signed", "account opened"];
  return (
    <div className="anim font-mono text-[11px] leading-8 text-ink">
      {rows.map((r, i) => (
        <p key={r} style={{ animation: "kfCheckRow 5s infinite", animationDelay: `${i * 1.1}s`, animationFillMode: "backwards" }}>
          <span className="text-accent">✓</span> {r}
        </p>
      ))}
    </div>
  );
}

function SrpMiniature() {
  const states = [
    { label: "submitted", delay: "0s" },
    { label: "in review", delay: "1.8s" },
    { label: "resolved ✓", delay: "3.6s" },
  ];
  return (
    <div className="anim">
      <div className="rounded-lg bg-panel px-3 py-2.5">
        <p className="font-mono text-[10px] text-ink">REQ-3141 · surrender request</p>
        <div className="relative mt-1.5 h-[20px]">
          {states.map((s, i) => (
            <span
              key={s.label}
              className="chip-pill absolute left-0 top-0"
              style={{
                animation: "kfSrpState 5.4s linear infinite",
                animationDelay: s.delay,
                ...(i === 0 ? {} : { opacity: 0 }),
              }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function VendorMiniature() {
  return (
    <div className="anim rounded-lg bg-panel px-3 py-2.5">
      <p className="font-mono text-[10px] text-ink" style={{ animation: "kfReqBlink 2.6s infinite" }}>
        POST /kyc/screen
      </p>
      <span
        className="chip-pill mt-1.5 inline-block"
        style={{ animation: "kfOkPulse 2.6s infinite" }}
      >
        200 OK · clear
      </span>
    </div>
  );
}

const MINIS: Record<string, () => React.ReactNode> = {
  "money-movement": MoneyMiniature,
  onboarding: OnboardingMiniature,
  srp: SrpMiniature,
  "vendor-apis": VendorMiniature,
};

const FLOATS = ["kfFloat1", "kfFloat2", "kfFloat3", "kfFloat4"];
const DEPTHS = [10, -14, 12, -8];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const x0 = useTransform(sx, (v) => v * DEPTHS[0]);
  const y0 = useTransform(sy, (v) => v * DEPTHS[0]);
  const x1 = useTransform(sx, (v) => v * DEPTHS[1]);
  const y1 = useTransform(sy, (v) => v * DEPTHS[1]);
  const x2 = useTransform(sx, (v) => v * DEPTHS[2]);
  const y2 = useTransform(sy, (v) => v * DEPTHS[2]);
  const x3 = useTransform(sx, (v) => v * DEPTHS[3]);
  const y3 = useTransform(sy, (v) => v * DEPTHS[3]);
  const cardMotion = [
    { x: x0, y: y0 },
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
  ];

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="mx-auto max-w-[1120px] px-6 pb-24 pt-6 md:pt-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="anim flex flex-wrap items-center justify-end gap-x-6 gap-y-2.5 font-mono text-[11px] lowercase"
      >
        <span className="flex items-center gap-2 text-deep">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-accent"
            style={{ animation: "kfLivePulse 2.4s ease-in-out infinite" }}
          />
          open to opportunities
        </span>
        <span className="text-faint">ny, nj</span>
      </motion.div>

      <div className="mt-12 flex flex-wrap items-center gap-x-16 gap-y-14 md:mt-16">
        <motion.div
          className="min-w-[280px] flex-1"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker">business analyst × industrial engineer</p>
          <h1
            className="mt-5 font-display text-[44px] font-extrabold leading-[1.05] text-ink md:text-[56px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Harshitha Reddy
          </h1>
          <RotatingLine />
          <div className="mt-8 flex items-center gap-5">
            <Link
              href="/work"
              className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
            >
              See the work
            </Link>
            <Link href="/chat" className="link-q text-[13px] font-medium">
              Say hello
            </Link>
          </div>
          <p className="mt-9 font-mono text-[11px] lowercase text-faint">
            infosys · wedbush securities · truist bank
          </p>
        </motion.div>

        <div className="grid w-full max-w-[480px] grid-cols-1 gap-4 sm:grid-cols-2">
          {products.map((p, i) => {
            const Mini = MINIS[p.id];
            return (
              <motion.div
                key={p.id}
                style={cardMotion[i]}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={i === 1 || i === 3 ? "sm:mt-6" : ""}
              >
                <div
                  className="anim"
                  style={{ animation: `${FLOATS[i]} ${6 + i * 0.5}s ease-in-out infinite` }}
                >
                  <Link
                    href={p.href}
                    className="card-std card-hover block p-[18px]"
                    aria-label={`${p.name} case study`}
                  >
                    <p className="font-mono text-[10px] lowercase text-faint">{p.tag}</p>
                    <p
                      className="mb-3 mt-0.5 font-display text-[15px] font-bold text-ink"
                      style={{ letterSpacing: "-0.015em" }}
                    >
                      {p.name}
                    </p>
                    <Mini />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
