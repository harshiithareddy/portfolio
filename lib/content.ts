export const contact = {
  email: "harshiithareddy@gmail.com",
  linkedin: "https://www.linkedin.com/in/harshithababureddy",
  cal: "https://cal.com/harshithareddy",
  github: "https://github.com/harshiithareddy",
  location: "jersey city, nj",
};

export const products = [
  {
    id: "money-movement",
    name: "Money Movement",
    tag: "wedbush securities",
    href: "/work/banking-products",
  },
  {
    id: "onboarding",
    name: "Account Onboarding",
    tag: "wedbush securities · truist bank",
    href: "/work/banking-products",
  },
  {
    id: "srp",
    name: "Service Request Portal",
    tag: "wedbush securities",
    href: "/work/banking-products",
  },
  {
    id: "vendor-apis",
    name: "Vendor API Integrations",
    tag: "banks · kyc/aml",
    href: "/work/banking-products",
  },
];

export const workCards = [
  {
    index: "01",
    slug: "hack-nation",
    title: "RealPort",
    client: "july 2026 · hack-nation × realpage",
    summary:
      "An application-readiness copilot for affordable housing renters. Evidence-backed, human-decided, and live.",
    chip: "live",
  },
  {
    index: "02",
    slug: "periwise",
    title: "PeriWise",
    client: "june 2026 · shebuilds 48-hour hackathon",
    summary:
      "A perimenopause companion for check-ins, patterns, and doctor-ready summaries. Built solo in one weekend, live and still growing.",
    chip: "live",
  },
  {
    index: "03",
    slug: "finconnect",
    title: "FinConnect",
    client: "feb 2026 · self-directed build",
    summary:
      "An open banking platform simulation you can break, then watch recover.",
    chip: "interactive",
  },
];

export const beliefs = [
  {
    title: "Listening before solving",
    receipt:
      "I shadowed six financial advisors before writing a single requirement for the onboarding platform. The real problem wasn't slow systems. It was unclear rejection criteria.",
  },
  {
    title: "Clarity over complexity",
    receipt:
      "I write the same requirement four ways: for the executive, the engineer, the sprint team, and QA. Nobody has to guess what it means.",
  },
  {
    title: "Progress over perfection",
    receipt:
      "PeriWise went from idea to a live product in one weekend. Not perfect. Shipped, then improved.",
  },
];

type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  detail: string;
  logo: string;
  logoH: number;
  logoOpacity?: number;
  note?: string;
};

export const experience: ExperienceEntry[] = [
  {
    period: "aug 2023 to jan 2026 · hartford, ct",
    role: "Business Analyst, Consultant",
    company: "Infosys",
    detail:
      "Clients: Wedbush Securities and Truist Bank. Money movement, account onboarding, KYC/AML rule engines, and the service request portal.",
    logo: "/logos/infosys.svg",
    logoH: 14,
  },
  {
    period: "may 2022 to dec 2022 · kennesaw, ga",
    role: "Platform Implementation Co-op",
    company: "Novelis",
    detail:
      "CapEx platform rollout across five plants. Workflow configuration, system integrations, test cases, and training for more than a hundred stakeholders.",
    logo: "/logos/novelis.svg",
    logoH: 11,
  },
  {
    period: "mar 2020 to mar 2021 · bangalore, india",
    role: "Management Analyst",
    company: "TENR Inventure",
    detail:
      "Analytics layer for a cloud ERP: dynamic supplier KPI dashboards for procurement and operations teams.",
    logo: "/logos/tenr.png",
    logoH: 16,
    logoOpacity: 0.8,
    note: "now blunet",
  },
  {
    period: "nov 2019 to feb 2020 · bangalore, india",
    role: "Intern",
    company: "TENR Inventure",
    detail:
      "Built a Python anomaly detection model for manufacturing sensor data that cut unplanned downtime, and led the data mapping for an ERP migration.",
    logo: "/logos/tenr.png",
    logoH: 16,
    logoOpacity: 0.8,
  },
];

export const education =
  "M.S. Engineering Management, NJIT · B.E. Industrial Engineering and Management, BMS College of Engineering";

export const skills = [
  {
    group: "integrations and apis",
    items: [
      "REST APIs",
      "JSON",
      "Postman",
      "Webhooks",
      "OAuth",
      "JWT",
      "GraphQL",
      "SOAP/XML",
    ],
  },
  {
    group: "data and analytics",
    items: [
      "SQL",
      "Snowflake",
      "dbt",
      "Redshift",
      "Python (Pandas)",
      "Tableau",
      "Power BI",
      "Looker",
      "Excel",
    ],
  },
  {
    group: "domain",
    items: ["KYC", "AML", "Account onboarding", "Broker-dealer operations"],
  },
  {
    group: "tools and platforms",
    items: [
      "Jira",
      "Confluence",
      "XRay",
      "Git",
      "VS Code",
      "Azure",
      "Figma",
      "Balsamiq",
      "MS Project",
      "ServiceNow",
    ],
  },
  {
    group: "building with ai",
    items: [
      "Claude Code",
      "Lovable",
      "Prompt engineering",
      "AI-assisted requirements",
      "AI-generated test cases",
    ],
  },
];

export const certifications = [
  {
    name: "Certified SAFe 6 Product Owner / Product Manager",
    org: "Scaled Agile",
    date: "apr 2025",
    url: "https://www.credly.com/badges/2619469b-6e52-4d39-8140-3a2161ed7220/public_url",
  },
  {
    name: "Certified ScrumMaster",
    org: "Scrum Alliance",
    date: "oct 2024",
    url: "https://bcert.me/bc/html/show-badge.html?b=mkrgodan",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    date: "apr 2024",
    url: "https://www.credly.com/badges/ade58835-91da-4f0f-9041-c4d04e4973fd/public_url",
  },
];
