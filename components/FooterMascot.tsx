"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  LaptopMascot,
  MeditatingMascot,
  OrganizerMascot,
  YogaMascot,
} from "./Mascots";

const STORIES = [
  { Comp: OrganizerMascot, caption: "organizing the shelf" },
  { Comp: LaptopMascot, caption: "shipping something small" },
  { Comp: MeditatingMascot, caption: "finding some quiet" },
  { Comp: YogaMascot, caption: "holding the pose" },
];

export default function FooterMascot() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % STORIES.length), 12000);
    return () => clearInterval(t);
  }, [reduced]);

  const { Comp, caption } = STORIES[i];
  return (
    <div key={i} style={{ animation: "kfFadeUp 0.5s ease-out" }}>
      <Comp width={150} />
      <p className="mt-1 text-right font-mono text-[10px] lowercase text-faint">
        currently: {caption}
      </p>
    </div>
  );
}
