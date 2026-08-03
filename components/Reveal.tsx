"use client";

import { motion } from "framer-motion";
import { useIoWorks } from "@/lib/useIoWorks";
import { useForceVisible } from "@/lib/useForceVisible";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ioOk = useIoWorks();
  const { ref, forced } = useForceVisible<HTMLDivElement>();

  /* Static fallback when the environment can't run scroll reveals. */
  if (ioOk === false || forced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
