"use client";

import { motion } from "framer-motion";
import { useIoWorks } from "@/lib/useIoWorks";
import { useForceVisible } from "@/lib/useForceVisible";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.25, duration: 0.8, ease: "easeInOut" as const },
  }),
};

const pop = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Node({
  x,
  y,
  w,
  label,
  sub,
  accent,
  i,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  sub?: string;
  accent?: boolean;
  i: number;
}) {
  return (
    <motion.g variants={pop} custom={i}>
      <rect
        x={x}
        y={y}
        width={w}
        height="40"
        rx="9"
        fill={accent ? "#FFFFFF" : "#F4F4F8"}
        stroke={accent ? "#5E5CE6" : "transparent"}
        strokeWidth="1.5"
      />
      <text
        x={x + w / 2}
        y={sub ? y + 18 : y + 24}
        textAnchor="middle"
        fontFamily="var(--font-inter)"
        fontSize="11"
        fontWeight="500"
        fill={accent ? "#4644C7" : "#17171C"}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + 31}
          textAnchor="middle"
          fontFamily="var(--font-jbmono)"
          fontSize="8.5"
          fill="#9A9AA6"
        >
          {sub}
        </text>
      )}
    </motion.g>
  );
}

export function ExhibitFrame({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-std overflow-hidden">
      <div className="overflow-x-auto p-5">{children}</div>
      <p className="border-t border-line px-5 py-3 font-mono text-[10.5px] lowercase text-muted">
        {caption}
      </p>
    </div>
  );
}

export function OnboardingFlowExhibit() {
  const ioOk = useIoWorks();
  const { ref, forced } = useForceVisible<HTMLDivElement>();
  const isStatic = ioOk === false || forced;
  return (
    <div ref={ref}>
      <ExhibitFrame caption="exhibit a · dual-view onboarding flow, advisor and client paths meeting one validation and compliance spine">
        <motion.svg
        key={isStatic ? "static" : "animated"}
        viewBox="0 0 640 190"
        className="block w-full min-w-[560px]"
        initial={isStatic ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Node x={10} y={20} w={120} label="Advisor portal" sub="initiate · track" i={0} />
        <Node x={10} y={130} w={120} label="Client portal" sub="forms · e-sign" i={1} />
        <motion.path
          d="M 130 40 C 190 40, 210 88, 262 92"
          fill="none"
          stroke="#C9C8F2"
          strokeWidth="1.5"
          variants={draw}
          custom={0}
        />
        <motion.path
          d="M 130 150 C 190 150, 210 102, 262 96"
          fill="none"
          stroke="#C9C8F2"
          strokeWidth="1.5"
          variants={draw}
          custom={1}
        />
        <Node x={262} y={74} w={110} label="Validation" sub="real-time checks" accent i={2} />
        <motion.path
          d="M 372 94 L 428 94"
          fill="none"
          stroke="#C9C8F2"
          strokeWidth="1.5"
          variants={draw}
          custom={2}
        />
        <Node x={428} y={74} w={120} label="KYC/AML engine" sub="automated rules" i={3} />
        <motion.path
          d="M 548 94 L 588 94"
          fill="none"
          stroke="#C9C8F2"
          strokeWidth="1.5"
          variants={draw}
          custom={3}
        />
        <motion.g variants={pop} custom={4} data-reveal-probe>
          <circle cx="602" cy="94" r="13" fill="#5E5CE6" />
          <path
            d="M 596 94 L 600.5 98.5 L 609 89"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
        <motion.path
          d="M 490 74 C 490 46, 250 40, 132 40"
          fill="none"
          stroke="#E8E8EE"
          strokeWidth="1.2"
          strokeDasharray="4,4"
          variants={draw}
          custom={4}
        />
        <motion.text
          x="330"
          y="34"
          textAnchor="middle"
          fontFamily="var(--font-jbmono)"
          fontSize="9"
          fill="#9A9AA6"
          variants={pop}
          custom={5}
        >
          status updates back to the advisor
        </motion.text>
        </motion.svg>
      </ExhibitFrame>
    </div>
  );
}

export function MoneyFlowExhibit() {
  const ioOk = useIoWorks();
  const { ref, forced } = useForceVisible<HTMLDivElement>();
  const isStatic = ioOk === false || forced;
  return (
    <div ref={ref}>
      <ExhibitFrame caption="exhibit b · money movement rails, platform requests to bny mellon with acknowledgements flowing back">
        <motion.svg
        key={isStatic ? "static" : "animated"}
        viewBox="0 0 640 150"
        className="block w-full min-w-[560px]"
        initial={isStatic ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Node x={10} y={30} w={140} label="Money movement" sub="wedbush platform" i={0} />
        <Node x={250} y={30} w={130} label="API gateway" sub="auth · limits" accent i={1} />
        <Node x={490} y={30} w={140} label="BNY Mellon" sub="ach · wire rails" i={2} />
        <motion.path d="M 150 44 L 250 44" fill="none" stroke="#C9C8F2" strokeWidth="1.5" variants={draw} custom={0} />
        <motion.path d="M 380 44 L 490 44" fill="none" stroke="#C9C8F2" strokeWidth="1.5" variants={draw} custom={1} />
        <motion.path d="M 490 58 L 380 58" fill="none" stroke="#E8E8EE" strokeWidth="1.2" strokeDasharray="4,4" variants={draw} custom={2} />
        <motion.path d="M 250 58 L 150 58" fill="none" stroke="#E8E8EE" strokeWidth="1.2" strokeDasharray="4,4" variants={draw} custom={3} />
        <motion.text x="200" y="36" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="9" fill="#4644C7" variants={pop} custom={3}>
          transfer request
        </motion.text>
        <motion.text x="435" y="36" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="9" fill="#4644C7" variants={pop} custom={4}>
          submit
        </motion.text>
        <motion.text x="320" y="76" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="9" fill="#9A9AA6" variants={pop} custom={5}>
          acknowledgements, statuses, and exceptions flow back the same path
        </motion.text>
        <motion.text x="320" y="120" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="9" fill="#9A9AA6" variants={pop} custom={6} data-reveal-probe>
          integration specs, data flow diagrams, and api contracts authored per rail
        </motion.text>
        </motion.svg>
      </ExhibitFrame>
    </div>
  );
}

export function RealPortFlowExhibit() {
  const ioOk = useIoWorks();
  const { ref, forced } = useForceVisible<HTMLDivElement>();
  const isStatic = ioOk === false || forced;
  return (
    <div ref={ref}>
      <ExhibitFrame caption="exhibit a · the renter journey: nothing moves forward until a human confirms it">
        <motion.svg
          key={isStatic ? "static" : "animated"}
          viewBox="0 0 640 150"
          className="block w-full min-w-[560px]"
          initial={isStatic ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Node x={10} y={30} w={130} label="Consent" sub="what it never does" i={0} />
          <Node x={178} y={30} w={130} label="Upload" sub="on-device ocr" i={1} />
          <Node x={346} y={30} w={130} label="Confirm" sub="every field, by hand" accent i={2} />
          <Node x={514} y={30} w={116} label="Packet" sub="renter-controlled" i={3} />
          <motion.path d="M 140 50 L 178 50" fill="none" stroke="#C9C8F2" strokeWidth="1.5" variants={draw} custom={0} />
          <motion.path d="M 308 50 L 346 50" fill="none" stroke="#C9C8F2" strokeWidth="1.5" variants={draw} custom={1} />
          <motion.path d="M 476 50 L 514 50" fill="none" stroke="#C9C8F2" strokeWidth="1.5" variants={draw} custom={2} />
          <motion.text x="75" y="96" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="9" fill="#9A9AA6" variants={pop} custom={3}>
            locked until agreed
          </motion.text>
          <motion.text x="411" y="96" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="9" fill="#4644C7" variants={pop} custom={4}>
            page + source box for every value
          </motion.text>
          <motion.text x="320" y="128" textAnchor="middle" fontFamily="var(--font-jbmono)" fontSize="10" fill="#6E6E78" variants={pop} custom={5} data-reveal-probe>
            the tool prepares · the renter confirms · a qualified human decides
          </motion.text>
        </motion.svg>
      </ExhibitFrame>
    </div>
  );
}
