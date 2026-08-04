import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BankingCase,
  FinConnectCase,
  HackNationCase,
  PeriwiseCase,
} from "@/components/case/Cases";

const CASES: Record<string, { component: React.ComponentType; title: string; description: string }> = {
  "hack-nation": {
    component: HackNationCase,
    title: "RealPort · Harshitha Reddy",
    description:
      "An application-readiness copilot for affordable housing renters, built for the Hack-Nation × RealPage RealDoor challenge. On-device document evidence, cited rules, deterministic math, human decisions.",
  },
  "banking-products": {
    component: BankingCase,
    title: "Banking products from the ground up · Harshitha Reddy",
    description:
      "Money movement, account onboarding, a service request portal, and KYC/AML vendor integrations at Wedbush Securities and Truist Bank.",
  },
  finconnect: {
    component: FinConnectCase,
    title: "FinConnect · Harshitha Reddy",
    description:
      "An open banking platform simulation you can break, then watch recover. Architecture, data normalization, and failure handling.",
  },
  periwise: {
    component: PeriwiseCase,
    title: "PeriWise · Harshitha Reddy",
    description:
      "A perimenopause companion that turns daily check-ins into patterns, doctor-ready summaries, and family support. Started at the SheBuilds 48-hour hackathon, built solo, and live today.",
  },
};

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return {};
  return { title: c.title, description: c.description };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();
  const Component = c.component;
  return <Component />;
}
