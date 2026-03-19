import { useState, useEffect } from "react";

var C = {
  ink: "#1A1D23", slate: "#2D3038", charcoal: "#3E424B",
  coolBlue: "#4A7C9B", deepBlue: "#1E3A5F", skyMist: "#A8C5D6", iceBlue: "#D4E5EE",
  ember: "#C47D52", emberLight: "#E6A97A",
  cloud: "#F0EEE9", cloudLight: "#F7F5F1", warmGray: "#E8E4DC",
  white: "#FFFFFF",
  text: "#1A1D23", textMid: "#4A4D55", textLight: "#8A8D95", textFaint: "#B0B3BA",
  border: "#E0DCD5", borderLight: "#EAE7E1",
};

var profile = {
  tagline: "I bridge the gap between product vision and technical execution, turning complex requirements into workflows that reduce friction and drive growth.",
  domains: ["Fintech & Banking", "RegTech & Compliance", "AI/ML Products", "Enterprise Platforms"],
  location: "Jersey City, NJ", email: "h.reddy0603@gmail.com",
  linkedin: "linkedin.com/in/harshithababureddy", phone: "(201) 830-7667",
};

var experienceData = [
  { company: "Infosys", role: "Associate Business Analyst (Consultant)", location: "Hartford, CT", period: "Aug 2023 to Jan 2026", client: "Top 10 U.S. Bank & Major U.S. Broker-Dealer",
    bullets: ["Owned translation of complex business and regulatory requirements into system specifications for 4 major product initiatives.", "Spearheaded BNY Mellon API integration (ACH/Wire) into the money movement platform.", "Digitized approval workflows achieving 45% faster onboarding and 60% fewer submission errors.", "Integrated KYC/AML requirements into automated workflows with 100% audit compliance and 70% less manual work.", "Ran multivariate A/B testing on decision flows resulting in 40% increase in customer conversion.", "Defined acceptance criteria and led UAT cycles with advisors and correspondents."] },
  { company: "Novelis Inc", role: "Platform Implementation Co-op", location: "Kennesaw, GA", period: "May 2022 to Dec 2022",
    bullets: ["Supported CapEx platform implementation across 5 locations.", "Owned end-to-end process workflow design and system integration documentation.", "Coordinated testing, developed test cases, and validated architecture against specs.", "Built user adoption playbook and trained 100+ stakeholders."] },
  { company: "TENR Inventure", role: "Management Analyst", location: "Bangalore, India", period: "Nov 2019 to Mar 2021",
    bullets: ["Designed analytics dashboards tracking supplier and operational KPIs.", "Built AI/ML anomaly detection model reducing unplanned downtime by 60%.", "Led ERP data mapping initiative achieving 98% accuracy across thousands of records."] }
];

var caseStudies = [
  { id: "onboarding", title: "Account Onboarding Platform", category: "Process Optimization, Fintech", color: C.coolBlue, personal: false,
    summary: "Led end-to-end requirements and workflow redesign for a digital account onboarding platform at a Top 10 U.S. bank. Transformed a paper based process (PDF forms, manual email approvals) into a seamless dual view application with e-signatures, serving both financial advisors and their clients.",
    role: "Business Analyst owning requirements elicitation, process modeling, BRD/FRD authoring, and UAT coordination across 4 business units.",
    stakeholders: "Product Managers, Compliance Officers, Engineering Leads, Advisor Operations, Legal",
    phases: [
      { title: "Problem", content: "Financial advisors and clients relied on a fully manual onboarding process: filling out PDF forms, printing, signing, scanning, and emailing for approval through multiple stakeholders. The process had 47 manual steps, 8 handoff points between teams, a 12+ day average turnaround, and a 35% submission rejection rate due to missing information and inconsistent validation." },
      { title: "Approach", content: "Conducted 15+ stakeholder interviews across 4 business units (advisor operations, compliance, engineering, legal). Shadowed 6 advisors to map the actual paper based workflow. Performed gap analysis between the As-Is process and regulatory requirements. Benchmarked digital onboarding timelines at peer institutions to build the business case." },
      { title: "Process", content: "Mapped the As-Is paper based process in BPMN (47 steps, 8 swimlanes). Identified 3 critical bottlenecks: duplicate data entry across PDF forms, manual KYC document verification, and unclear rejection criteria. Designed the To-Be workflow as a dual view web application: an advisor facing portal for initiating and managing applications, and a client facing experience for completing forms and providing e-signatures." },
      { title: "Artifacts", content: "VISUAL" },
      { title: "Impact", content: "45% reduction in onboarding turnaround (12 days to 6.5 days). 60% decrease in submission errors through real time field validation. 100% audit compliance maintained with automated KYC/AML checks. Advisor satisfaction score increased 32% post launch. Eliminated paper forms and email based approvals entirely." },
      { title: "Learnings", content: "Early compliance involvement saved 3 sprints of rework. The biggest insight: unclear rejection criteria, not slow systems, caused most rework loops. Designing the dual view (advisor vs. client) required deeply understanding two very different user journeys for the same underlying data." }
    ] },
  { id: "openbanking", title: "Open Banking Data Aggregation", category: "System Integration, Fintech", color: C.deepBlue, personal: true,
    summary: "Designing an Open Banking platform that connects to multiple financial institutions via Plaid and Open Banking APIs to aggregate account data, transactions, and identity verification into a unified view for fintech applications.",
    role: "Business Analyst owning system architecture requirements, API integration specifications, data modeling, error handling design, and end-to-end documentation.",
    stakeholders: "Product Owner, Engineering Lead, Data Engineering, Security/Compliance, Partner Banks, QA",
    phases: [
      { title: "Problem", content: "Fintech applications need to connect to hundreds of financial institutions to access user account data, transaction history, and identity verification. Each institution has different APIs, data formats, authentication methods, and rate limits. Without a unified aggregation layer, each new bank integration takes weeks of custom development." },
      { title: "Approach", content: "Researched Open Banking standards (PSD2, FDX) and aggregation providers (Plaid, MX, Yodlee). Analyzed the Plaid API documentation (50+ endpoints across 8 product categories). Mapped data dependencies between external bank APIs, the aggregation layer, internal data store, and client applications." },
      { title: "Process", content: "Designed end-to-end system architecture connecting 6 components: Client App, API Gateway, Plaid Integration Service, Internal Data Store, Webhook Processor, and Notification Service. Authored detailed API specifications. Created comprehensive data mapping between Plaid API schemas and internal data model. Designed error handling for every failure mode." },
      { title: "Artifacts", content: "VISUAL" },
      { title: "Impact", content: "Target outcomes: reduce new institution integration time from weeks to hours, achieve 99.5% data sync reliability, support 500+ financial institutions via Plaid, maintain SOC2 compliant consent management, and enable real time transaction categorization." },
      { title: "Learnings", content: "The hardest Business Analyst challenge in system integration is not mapping the happy path but designing for every failure mode. Token expiry, institution downtime, partial data returns, and consent revocation each need different strategies. A comprehensive error taxonomy created upfront prevents 80% of post launch edge case bugs." }
    ] },
  { id: "fraud", title: "AI Powered Fraud Detection System", category: "RegTech, AI/ML, Fintech", color: "#7B4B94", personal: true,
    summary: "Defining requirements and business logic for an ML based fraud detection engine analyzing transaction patterns in real time, replacing rule based systems with adaptive models.",
    role: "Business Analyst owning business requirements, fraud rule taxonomy, model evaluation criteria, stakeholder alignment between compliance, data science, and engineering.",
    stakeholders: "Chief Compliance Officer, Data Science Team, Fraud Operations, Engineering, Legal, External Auditors",
    phases: [
      { title: "Problem", content: "Rule based fraud detection systems in fintech generate false positive rates as high as 78%, overwhelming fraud operations teams. Novel fraud patterns (synthetic identity, account takeover) slip through static rules, causing millions in annual losses industry wide." },
      { title: "Approach", content: "Researched industry ML fraud detection approaches (supervised, unsupervised, ensemble). Cataloged 200+ common fraud detection rules and analyzed their effectiveness. Studied regulatory requirements for model explainability in financial services." },
      { title: "Process", content: "Defined feature engineering requirements from transaction, behavioral, and device data. Authored model evaluation criteria (precision/recall tradeoffs, explainability requirements for regulators). Designed the human-in-the-loop review workflow for flagged transactions." },
      { title: "Artifacts", content: "VISUAL" },
      { title: "Impact", content: "Target outcomes: reduce false positive rate from 78% to under 25%, improve novel fraud detection by 60%+, free up 40% of analyst capacity, and pass external audit with full model explainability documentation." },
      { title: "Learnings", content: "The critical Business Analyst contribution is translating compliance explainability requirements into concrete model evaluation criteria that data science can build against. Without that bridge, models may be technically excellent but un-deployable in regulated environments." }
    ] },
  { id: "rag", title: "AI Powered RAG Chatbot", category: "AI/ML, Knowledge Management", color: "#2D6A4F", personal: true,
    summary: "Leading requirements for a Retrieval Augmented Generation chatbot enabling financial advisors to semantically search 10,000+ policy documents, replacing manual document hunting with natural language queries.",
    role: "Business Analyst owning requirements gathering, information architecture design, user acceptance criteria, and evaluation framework for retrieval accuracy.",
    stakeholders: "Product Owner, AI/ML Engineering, Compliance, Advisor Operations, Content Management Team",
    phases: [
      { title: "Problem", content: "Financial advisors spend an average of 45 minutes per client interaction searching across disconnected document repositories. Information is often outdated, and advisors frequently give inconsistent answers to identical client questions." },
      { title: "Approach", content: "Studied advisor information seeking workflows across the industry. Cataloged common document repository structures. Surveyed advisor pain points and analyzed support ticket data for most frequently asked questions." },
      { title: "Process", content: "Defined information architecture: document taxonomy, metadata schema, and chunking strategy for the vector database. Authored requirements for semantic search accuracy, citation, and hallucination guardrails. Designed feedback loop for continuous retrieval quality improvement." },
      { title: "Artifacts", content: "VISUAL" },
      { title: "Impact", content: "Target outcomes: reduce average document search time from 45 minutes to under 2 minutes, improve advisor answer consistency by 70%+, achieve 90%+ retrieval accuracy, and reach 80%+ advisor adoption within 3 months of launch." },
      { title: "Learnings", content: "The biggest risk is not the AI but the data. Industry research shows 30%+ of enterprise documents are outdated or contradictory. The Business Analyst document audit and taxonomy work is the foundation that makes RAG systems trustworthy." }
    ] },
  { id: "payments", title: "Real Time Payment Analytics Dashboard", category: "Data Analytics, Fintech", color: "#B45309", personal: true,
    summary: "Designing a real time analytics dashboard giving treasury and operations instant visibility into transaction volumes, settlement status, failure rates, and anomaly detection.",
    role: "Business Analyst owning requirements, KPI definitions, data model design, wireframes, and stakeholder alignment between treasury, operations, engineering, and data teams.",
    stakeholders: "Treasury Manager, Operations Lead, Data Engineering, Product Manager, CFO Office",
    phases: [
      { title: "Problem", content: "Treasury teams at financial institutions rely on end-of-day batch reports to monitor payment flows. By the time failures or anomalies are detected, settlement windows have closed, costing an estimated $180K monthly in late fees, failed reconciliations, and manual corrections." },
      { title: "Approach", content: "Researched treasury and operations KPI needs across the fintech industry. Analyzed payment data patterns to establish baseline metrics and anomaly thresholds. Benchmarked 3 competing dashboard products to identify feature gaps." },
      { title: "Process", content: "Defined data model connecting 4 source systems (payment gateway, bank APIs, ledger, compliance engine). Authored KPI specs with calculation logic, refresh cadence, and drill-down requirements. Created wireframes for 5 dashboard views. Defined anomaly alerting rules." },
      { title: "Artifacts", content: "VISUAL" },
      { title: "Impact", content: "Target outcomes: reduce anomaly detection time from next day to under 5 minutes, reduce monthly losses by 70%+ ($180K to under $55K), free operations team 15 hours/week from manual reporting, and deliver board level reporting capability." },
      { title: "Learnings", content: "KPI definitions are the hardest deliverable. Different teams often calculate the same metric differently. Creating a single agreed upon data dictionary prevents months of post launch confusion. Define the math before you build the chart." }
    ] }
];

var artifactsList = [
  { type: "BRD", title: "Business Requirements Document", desc: "High level business objectives, scope, stakeholders, and 42 business rules for the dual view Account Onboarding platform.", project: "Account Onboarding" },
  { type: "BPMN", title: "To-Be Process Model with Swimlanes", desc: "BPMN 2.0 swimlane diagram showing the digital onboarding flow across Advisor Portal, Client Portal, System Engine, and Compliance.", project: "Account Onboarding" },
  { type: "User Stories", title: "User Stories & Acceptance Criteria", desc: "120+ user stories in SAFe format with Given-When-Then criteria for both advisor and client views.", project: "Account Onboarding" },
  { type: "RTM", title: "Requirements Traceability Matrix", desc: "Bidirectional traceability: 42 business rules to 120 functional requirements to 85 test cases.", project: "Account Onboarding" },
  { type: "Architecture", title: "System Architecture Diagram", desc: "End-to-end architecture showing Client App, API Gateway, Plaid Integration, Data Store, Webhook Processor, and Notification Service.", project: "Open Banking" },
  { type: "Sequence", title: "API Sequence Diagram", desc: "Account linking flow: user initiation through Plaid Link, token exchange, account fetch, and transaction sync.", project: "Open Banking" },
  { type: "ERD", title: "Entity Relationship Diagram", desc: "6 entity ERD: User, LinkedAccount, Institution, Transaction, BalanceSnapshot, ConsentRecord with field level types.", project: "Open Banking" },
  { type: "Mapping", title: "Data Mapping Matrix", desc: "Field level mappings between Plaid API responses and internal data model with transformation rules.", project: "Open Banking" },
  { type: "Error Tree", title: "Error Handling Decision Tree", desc: "Failure mode strategies for token expiry, institution downtime, rate limits, and consent revocation.", project: "Open Banking" },
  { type: "Wireframe", title: "Aggregation Dashboard", desc: "Dashboard wireframe showing linked accounts, transaction feed, balance overview, and connection health.", project: "Open Banking" },
  { type: "Taxonomy", title: "Fraud Rule Taxonomy", desc: "200+ fraud rules mapped to ML features with hit rates and false positive analysis.", project: "AI Fraud Detection" },
  { type: "Scorecard", title: "Model Evaluation Scorecard", desc: "Precision/recall framework with explainability requirements, thresholds, and audit standards.", project: "AI Fraud Detection" },
  { type: "Info Arch", title: "Information Architecture", desc: "Document taxonomy (15 categories, 80+ subcategories), metadata schema, and 40 Gherkin scenarios.", project: "RAG Chatbot" },
  { type: "KPI Spec", title: "KPI Specification Document", desc: "12 real time KPIs with calculation logic, data source mapping, and anomaly thresholds.", project: "Payment Analytics" },
  { type: "Wireframes", title: "Dashboard Wireframes (4 Views)", desc: "Executive summary, drill-down detail, anomaly alerts, and settlement timeline views.", project: "Payment Analytics" }
];

var methodology = [
  { step: "01", title: "Discover", subtitle: "Understand the real problem", description: "I start by immersing in the problem space: shadowing users, interviewing stakeholders, analyzing data, and mapping existing processes. The goal is to separate symptoms from root causes.", deliverables: ["Stakeholder Map", "As-Is Process Map (BPMN)", "Problem Statement", "Data Analysis"],
    detail: "I adapt discovery depth to project constraints. For a 2 week sprint, I run focused 3 day discovery. For a multi PI program, I conduct 15+ interviews and full process archaeology.",
    aiNote: "I use AI tools to accelerate discovery: transcript summarization for interviews, automated process mining from system logs, and LLM assisted documentation analysis to surface contradictions and gaps." },
  { step: "02", title: "Define", subtitle: "Structure the ambiguity", description: "I translate discovery into specs engineering can build from. BRDs, FRDs, user stories with Given-When-Then acceptance criteria, written for clarity not word count.", deliverables: ["BRD / FRD", "User Stories + Acceptance Criteria", "Data Dictionary", "RTM"],
    detail: "I write requirements at different altitudes: executive BRD for sponsors, detailed FRD for engineering, user stories for sprint teams, and RTM for QA. Same requirements, four views, zero interpretation gaps.",
    aiNote: "I use AI to generate initial Gherkin scenarios from BPMN models, then refine with stakeholders. This accelerates acceptance criteria authoring by approximately 40% while ensuring edge cases are not missed." },
  { step: "03", title: "Design", subtitle: "Map the future state", description: "I collaborate with product, design, and engineering to architect the solution. To-Be flows, wireframes, data models become the shared blueprint.", deliverables: ["To-Be Process Flows (BPMN)", "Wireframes", "Data Models", "Integration Specs"],
    detail: "I facilitate collaborative modeling sessions where engineering, design, and business co-create the solution. My role is to hold the constraints while keeping design focused on user outcomes.",
    aiNote: "I leverage AI prototyping tools to rapidly generate wireframe variations and use BPMN generators to iterate on process flows faster, bringing 3 options to a stakeholder meeting instead of 1." },
  { step: "04", title: "Validate", subtitle: "Test before you ship", description: "I define UAT strategy, write test cases, and lead validation with real users. I stay in the room until the solution works.", deliverables: ["UAT Plan + Test Cases", "Defect Triage", "Sign-off Documentation"],
    detail: "My UAT approach adapts: for regulated systems, formal test cycles with documented evidence. For MVPs, rapid user testing with structured feedback capture.",
    aiNote: "I use AI to auto-generate test data covering edge cases and boundary conditions, and to summarize UAT feedback into prioritized defect themes." },
  { step: "05", title: "Measure", subtitle: "Prove the impact", description: "I build dashboards, define KPIs, and track whether the solution moved the needle. Post launch is where real learning happens.", deliverables: ["KPI Dashboards", "Post Launch Analysis", "Iteration Backlog", "Retrospective"],
    detail: "I define success metrics during discovery, not after launch. Every BRD includes measurable success criteria. Post launch, I build dashboards to track actuals vs. targets.",
    aiNote: "I use AI assisted anomaly detection on post launch metrics and LLM summarization to turn raw analytics into executive ready impact narratives." }
];

var skills = {
  "Requirements & Analysis": ["BRD/FRD", "User Stories (SAFe)", "Gap Analysis", "Process Mapping (BPMN)", "Stakeholder Interviews", "UAT Planning", "RTM"],
  "Data & Analytics": ["SQL", "Python (Pandas)", "Snowflake", "Looker", "Tableau", "Power BI", "Excel (Advanced)", "A/B Testing"],
  "Tools & Platforms": ["Jira", "Confluence", "XRay", "TestRail", "Postman", "REST APIs", "Figma", "Balsamiq", "MS Visio", "ServiceNow"],
  "AI & Emerging": ["RAG Architecture", "LLM Prompt Engineering", "AI Assisted Requirements", "Gherkin from BPMN", "ML Evaluation Frameworks"],
  "Methodologies": ["Agile / SAFe 6.0", "Scrum", "Sprint Planning", "Backlog Grooming", "Change Management", "SDLC"],
  "Domain Expertise": ["Financial Services", "Account Onboarding", "Open Banking APIs", "KYC/AML Compliance", "Fraud Detection", "RegTech"]
};

var certs = [
  { name: "Certified SAFe\u00ae 6 Product Owner/Product Manager", org: "Scaled Agile", date: "Apr 2025", url: "https://www.credly.com/badges/2619469b-6e52-4d39-8140-3a2161ed7220/public_url", color: "#4A7C9B" },
  { name: "Certified ScrumMaster (CSM)", org: "Scrum Alliance", date: "Oct 2024", url: "https://bcert.me/bc/html/show-badge.html?b=mkrgodan", color: "#C47D52" },
  { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", date: "Apr 2024", url: "https://www.credly.com/badges/ade58835-91da-4f0f-9041-c4d04e4973fd/public_url", color: "#2D6A4F" }
];
var education = [
  { school: "New Jersey Institute of Technology", degree: "M.S. Engineering Management", date: "Dec 2022" },
  { school: "B M S College of Engineering", degree: "B.E. Industrial Engineering & Management", date: "Aug 2020" }
];

var allPages = ["Home", "Case Studies", "Artifacts", "How I Work", "Experience"];

/* ===== SHARED COMPONENTS ===== */
function FI(p) { var s = useState(false); useEffect(function() { var t = setTimeout(function() { s[1](true); }, p.d || 0); return function() { clearTimeout(t); }; }, []); return <div style={{ opacity: s[0] ? 1 : 0, transform: s[0] ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>{p.children}</div>; }
function Nav(p) { return (<nav style={{ position: "sticky", top: 0, zIndex: 100, background: C.cloudLight + "ee", backdropFilter: "blur(12px)", borderBottom: "1px solid " + C.border }}><div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", minWidth: 0 }}><button onClick={function() { p.set("Home"); }} style={{ background: "none", border: "none", cursor: "pointer", padding: "14px 0", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}><div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, " + C.coolBlue + ", " + C.ember + ")", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Serif', serif", fontSize: 15, color: C.white }}>H</div><span style={{ color: C.ink, fontWeight: 500, fontSize: 13, fontFamily: "'Sora', sans-serif" }}>Harshitha Reddy</span></button><div style={{ display: "flex", flexWrap: "wrap" }}>{allPages.map(function(pg) { return <button key={pg} onClick={function() { p.set(pg); }} style={{ background: "none", border: "none", cursor: "pointer", padding: "14px 12px", color: p.active === pg ? C.coolBlue : C.textLight, fontWeight: p.active === pg ? 600 : 400, fontSize: 11.5, borderBottom: p.active === pg ? "2px solid " + C.coolBlue : "2px solid transparent", transition: "all 0.2s", fontFamily: "'Sora', sans-serif", whiteSpace: "nowrap" }}>{pg}</button>; })}</div></div></nav>); }
function Tag(p) { var c = p.color || C.coolBlue; return <span style={{ display: "inline-block", background: c + "12", color: c, fontSize: 10.5, fontWeight: 600, letterSpacing: 0.7, textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, border: "1px solid " + c + "25" }}>{p.children}</span>; }
function PB() { return <span style={{ fontSize: 9, fontWeight: 600, color: C.ember, background: C.ember + "12", border: "1px solid " + C.ember + "25", borderRadius: 4, padding: "3px 8px", textTransform: "uppercase", letterSpacing: 0.5 }}>Personal Project</span>; }
function PBL() { return <span style={{ fontSize: 9, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 4, padding: "3px 8px", textTransform: "uppercase", letterSpacing: 0.5 }}>Personal Project</span>; }
function Card(p) { var h = p.hover !== false; return (<div style={Object.assign({ background: C.white, border: "1px solid " + C.border, borderRadius: 10, transition: "box-shadow 0.3s, transform 0.3s" }, p.style || {})} onMouseOver={function(e) { if (h) { e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,29,35,0.06)"; e.currentTarget.style.transform = "translateY(-2px)"; } }} onMouseOut={function(e) { if (h) { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; } }}>{p.children}</div>); }
function MG(p) { return (<div style={{ display: "grid", gridTemplateColumns: "repeat(" + (p.cols || 4) + ", 1fr)", gap: 8, marginTop: 16 }}>{p.items.map(function(it, i) { return <div key={i} style={{ background: C.cloud, borderRadius: 6, padding: "12px 8px", textAlign: "center" }}><div style={{ fontSize: it[0].length > 4 ? 15 : 20, fontWeight: 400, fontFamily: "'Instrument Serif', serif", color: C.ink }}>{it[0]}</div><div style={{ fontSize: 9.5, color: C.textLight, fontFamily: "'Sora', sans-serif", marginTop: 2 }}>{it[1]}</div></div>; })}</div>); }
function SL(p) { return <p style={{ fontSize: 11, fontWeight: 600, color: C.coolBlue, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 10px", fontFamily: "'Sora', sans-serif" }}>{p.children}</p>; }
function AW(p) { return <div style={{ background: C.cloud, borderRadius: 8, padding: 16, overflowX: "auto", marginBottom: 14, border: "1px solid " + C.borderLight }}>{p.children}</div>; }

/* ===== ARTIFACT COMPONENTS (Rebuilt with grid-aligned coordinates) ===== */

function OnboardingArtifact() {
  /* Grid: boxes are 110x36, spaced 20px apart. Swimlane headers 80px wide. */
  return (<div>
    <SL>To-Be Onboarding Flow (Advisor + Client Dual View)</SL>
    <AW><svg viewBox="0 0 820 300" style={{ width: "100%", minWidth: 640, fontFamily: "Sora, sans-serif", display: "block" }}>
      {/* Swimlane headers */}
      <rect x="0" y="0" width="80" height="75" fill={C.ink} /><text x="40" y="30" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">ADVISOR</text><text x="40" y="44" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7.5">Portal</text>
      <rect x="0" y="75" width="80" height="75" fill={C.coolBlue} /><text x="40" y="105" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">CLIENT</text><text x="40" y="119" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7.5">Portal</text>
      <rect x="0" y="150" width="80" height="75" fill={C.charcoal} /><text x="40" y="180" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">SYSTEM</text><text x="40" y="194" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7.5">Engine</text>
      <rect x="0" y="225" width="80" height="75" fill={C.deepBlue} /><text x="40" y="255" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">COMPLIANCE</text><text x="40" y="269" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7.5">KYC/AML</text>
      {/* Lane backgrounds */}
      <rect x="80" y="0" width="740" height="75" fill={C.ink + "03"} stroke={C.borderLight} strokeWidth="0.5" />
      <rect x="80" y="75" width="740" height="75" fill={C.coolBlue + "03"} stroke={C.borderLight} strokeWidth="0.5" />
      <rect x="80" y="150" width="740" height="75" fill={C.charcoal + "02"} stroke={C.borderLight} strokeWidth="0.5" />
      <rect x="80" y="225" width="740" height="75" fill={C.deepBlue + "02"} stroke={C.borderLight} strokeWidth="0.5" />
      {/* ADVISOR ROW (y center = 37) */}
      <circle cx="105" cy="37" r="10" fill={C.ink} /><text x="105" y="41" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600">Start</text>
      <line x1="115" y1="37" x2="140" y2="37" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#oa)" />
      <rect x="140" y="19" width="110" height="36" rx="5" fill={C.white} stroke={C.ink} strokeWidth="1.2" /><text x="195" y="34" textAnchor="middle" fill={C.text} fontSize="8.5" fontWeight="500">Initiate Account</text><text x="195" y="46" textAnchor="middle" fill={C.textLight} fontSize="7.5">New Request</text>
      <line x1="250" y1="37" x2="275" y2="37" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#oa)" />
      <rect x="275" y="19" width="110" height="36" rx="5" fill={C.white} stroke={C.ink} strokeWidth="1.2" /><text x="330" y="34" textAnchor="middle" fill={C.text} fontSize="8.5" fontWeight="500">Pre-fill from CRM</text><text x="330" y="46" textAnchor="middle" fill={C.textLight} fontSize="7.5">Client Info</text>
      {/* Arrow down from Advisor to Client */}
      <line x1="330" y1="55" x2="330" y2="94" stroke={C.coolBlue} strokeWidth="1" markerEnd="url(#ob)" />
      {/* ADVISOR: Track Status (receives async update) */}
      <rect x="630" y="19" width="110" height="36" rx="5" fill={C.white} stroke={C.border} strokeWidth="1.2" /><text x="685" y="34" textAnchor="middle" fill={C.text} fontSize="8.5" fontWeight="500">Track Status</text><text x="685" y="46" textAnchor="middle" fill={C.textLight} fontSize="7.5">Real time updates</text>
      {/* CLIENT ROW (y center = 112) */}
      <rect x="275" y="94" width="110" height="36" rx="5" fill={C.white} stroke={C.coolBlue} strokeWidth="1.2" /><text x="330" y="109" textAnchor="middle" fill={C.text} fontSize="8.5" fontWeight="500">Complete Form</text><text x="330" y="121" textAnchor="middle" fill={C.coolBlue} fontSize="7.5">Guided Wizard</text>
      <line x1="385" y1="112" x2="410" y2="112" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#oa)" />
      <rect x="410" y="94" width="110" height="36" rx="5" fill={C.white} stroke={C.coolBlue} strokeWidth="1.2" /><text x="465" y="109" textAnchor="middle" fill={C.text} fontSize="8.5" fontWeight="500">Upload Docs</text><text x="465" y="121" textAnchor="middle" fill={C.coolBlue} fontSize="7.5">ID, Proof of Address</text>
      <line x1="520" y1="112" x2="545" y2="112" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#oa)" />
      <rect x="545" y="94" width="110" height="36" rx="5" fill="#2D6A4F" /><text x="600" y="109" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="500">E-Signature</text><text x="600" y="121" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7.5">Digital Consent</text>
      {/* Arrow down from Client to System */}
      <line x1="600" y1="130" x2="600" y2="169" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#oa)" />
      {/* SYSTEM ROW (y center = 187) */}
      <rect x="545" y="169" width="110" height="36" rx="5" fill={C.charcoal + "10"} stroke={C.charcoal} strokeWidth="1.2" /><text x="600" y="184" textAnchor="middle" fill={C.charcoal} fontSize="8.5" fontWeight="500">Field Validation</text><text x="600" y="196" textAnchor="middle" fill={C.textLight} fontSize="7.5">Auto checks</text>
      <line x1="655" y1="187" x2="680" y2="187" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#oa)" />
      <polygon points="720,169 750,187 720,205 690,187" fill={C.charcoal + "08"} stroke={C.charcoal} strokeWidth="1.2" /><text x="720" y="190" textAnchor="middle" fill={C.text} fontSize="7.5" fontWeight="600">Valid?</text>
      {/* Valid YES: down to Compliance */}
      <line x1="720" y1="205" x2="720" y2="244" stroke={C.coolBlue} strokeWidth="1" markerEnd="url(#ob)" /><text x="730" y="228" fill={C.coolBlue} fontSize="7" fontWeight="600">YES</text>
      {/* Valid NO: right to error */}
      <line x1="750" y1="187" x2="775" y2="187" stroke={C.ember} strokeWidth="1" markerEnd="url(#oc)" /><text x="762" y="180" fill={C.ember} fontSize="7" fontWeight="600">NO</text>
      <rect x="775" y="169" width="40" height="36" rx="5" fill={C.white} stroke={C.ember} strokeWidth="1" /><text x="795" y="190" textAnchor="middle" fill={C.ember} fontSize="7.5">Error</text>
      {/* COMPLIANCE ROW (y center = 262) */}
      <rect x="630" y="244" width="110" height="36" rx="5" fill={C.deepBlue + "10"} stroke={C.deepBlue} strokeWidth="1.2" /><text x="685" y="259" textAnchor="middle" fill={C.deepBlue} fontSize="8.5" fontWeight="500">Auto KYC/AML</text><text x="685" y="271" textAnchor="middle" fill={C.deepBlue} fontSize="7.5">Identity + Screening</text>
      <line x1="630" y1="262" x2="580" y2="262" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#od)" />
      <polygon points="545,244 580,262 545,280 510,262" fill={C.deepBlue + "08"} stroke={C.deepBlue} strokeWidth="1.2" /><text x="545" y="265" textAnchor="middle" fill={C.text} fontSize="7.5" fontWeight="600">Pass?</text>
      {/* Pass YES */}
      <line x1="510" y1="262" x2="475" y2="262" stroke={C.coolBlue} strokeWidth="1" markerEnd="url(#od)" /><text x="493" y="255" fill={C.coolBlue} fontSize="7" fontWeight="600">PASS</text>
      <rect x="365" y="244" width="110" height="36" rx="18" fill={C.coolBlue} /><text x="420" y="266" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="500">Approved</text>
      {/* Pass NO: flag */}
      <line x1="545" y1="280" x2="545" y2="296" stroke={C.ember} strokeWidth="1" markerEnd="url(#oc)" /><text x="555" y="292" fill={C.ember} fontSize="7" fontWeight="600">FLAG</text>
      <rect x="490" y="280" width="110" height="18" rx="4" fill={C.white} stroke={C.ember} strokeWidth="1" /><text x="545" y="293" textAnchor="middle" fill={C.ember} fontSize="7.5">Manual Review</text>
      {/* Approved notification back to Advisor */}
      <line x1="420" y1="244" x2="420" y2="37" stroke={C.coolBlue} strokeWidth="0.8" strokeDasharray="4,3" />
      <line x1="420" y1="37" x2="630" y2="37" stroke={C.coolBlue} strokeWidth="0.8" strokeDasharray="4,3" markerEnd="url(#ob)" />
      <defs>
        <marker id="oa" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.charcoal} /></marker>
        <marker id="ob" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.coolBlue} /></marker>
        <marker id="oc" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.ember} /></marker>
        <marker id="od" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4" fill={C.charcoal} /></marker>
      </defs>
    </svg></AW>
    <MG cols={4} items={[["42", "Business Rules"], ["120+", "User Stories"], ["85", "Test Cases"], ["2", "Views (Advisor + Client)"]]} />
  </div>);
}

function OpenBankingArtifact() {
  var t = useState(0);
  var tabs = ["Architecture", "Sequence", "ERD", "Mapping", "Errors", "Wireframe"];
  return (<div>
    <div style={{ display: "flex", gap: 4, marginBottom: 14, flexWrap: "wrap" }}>{tabs.map(function(tb, i) { return <button key={i} onClick={function() { t[1](i); }} style={{ background: t[0] === i ? C.deepBlue : "transparent", color: t[0] === i ? "#fff" : C.textMid, border: "1.5px solid " + (t[0] === i ? C.deepBlue : C.border), borderRadius: 5, padding: "6px 12px", fontSize: 10, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora', sans-serif" }}>{tb}</button>; })}</div>

    {t[0] === 0 && <div><SL>System Architecture</SL><AW><svg viewBox="0 0 700 260" style={{ width: "100%", minWidth: 560, fontFamily: "Sora, sans-serif", display: "block" }}>
      {/* Row 1: Client > Gateway > Agg Service > Plaid > Banks */}
      <rect x="10" y="20" width="110" height="40" rx="6" fill={C.white} stroke={C.coolBlue} strokeWidth="1.5" /><text x="65" y="37" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="600">Client App</text><text x="65" y="49" textAnchor="middle" fill={C.textLight} fontSize="7.5">Web / Mobile</text>
      <line x1="120" y1="40" x2="150" y2="40" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ga)" />
      <rect x="150" y="20" width="110" height="40" rx="6" fill={C.ink} /><text x="205" y="37" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">API Gateway</text><text x="205" y="49" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7.5">Auth, Rate Limit</text>
      <line x1="260" y1="40" x2="290" y2="40" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ga)" />
      <rect x="290" y="20" width="120" height="40" rx="6" fill={C.coolBlue + "10"} stroke={C.coolBlue} strokeWidth="1.5" /><text x="350" y="37" textAnchor="middle" fill={C.coolBlue} fontSize="9" fontWeight="600">Aggregation Svc</text><text x="350" y="49" textAnchor="middle" fill={C.textMid} fontSize="7.5">Link, Sync, Transform</text>
      <line x1="410" y1="40" x2="440" y2="40" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ga)" />
      <rect x="440" y="20" width="110" height="40" rx="6" fill="#2D6A4F" /><text x="495" y="37" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">Plaid API</text><text x="495" y="49" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7.5">Link, Auth, Txns</text>
      <line x1="550" y1="40" x2="580" y2="40" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ga)" />
      <rect x="580" y="20" width="110" height="40" rx="6" fill={C.warmGray} stroke={C.border} strokeWidth="1" /><text x="635" y="37" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="600">500+ Banks</text><text x="635" y="49" textAnchor="middle" fill={C.textLight} fontSize="7.5">Chase, BofA...</text>
      {/* Row 2: Consent Manager | Data Store | Webhook Processor */}
      <line x1="205" y1="60" x2="205" y2="90" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ga)" />
      <rect x="150" y="90" width="110" height="40" rx="6" fill={C.white} stroke={C.ember} strokeWidth="1.5" /><text x="205" y="107" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="600">Consent Mgr</text><text x="205" y="119" textAnchor="middle" fill={C.ember} fontSize="7.5">SOC2, Token Lifecycle</text>
      <line x1="350" y1="60" x2="350" y2="90" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ga)" />
      <rect x="290" y="90" width="120" height="40" rx="6" fill={C.white} stroke={C.ember} strokeWidth="1.5" /><text x="350" y="107" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="600">Data Store</text><text x="350" y="119" textAnchor="middle" fill={C.ember} fontSize="7.5">PostgreSQL + Redis</text>
      <line x1="495" y1="60" x2="495" y2="90" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ga)" />
      <rect x="440" y="90" width="110" height="40" rx="6" fill={C.white} stroke={C.deepBlue} strokeWidth="1.5" /><text x="495" y="107" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="600">Webhook Proc</text><text x="495" y="119" textAnchor="middle" fill={C.deepBlue} fontSize="7.5">Plaid Events</text>
      {/* Row 3: Notification */}
      <line x1="350" y1="130" x2="350" y2="160" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ga)" />
      <rect x="290" y="160" width="120" height="40" rx="6" fill={C.white} stroke="#7B4B94" strokeWidth="1.5" /><text x="350" y="177" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="600">Notification Svc</text><text x="350" y="189" textAnchor="middle" fill="#7B4B94" fontSize="7.5">Email, Push, In-App</text>
      {/* Connect Notification back to Client */}
      <line x1="290" y1="180" x2="65" y2="180" stroke={C.charcoal} strokeWidth="0.8" strokeDasharray="4,3" />
      <line x1="65" y1="180" x2="65" y2="60" stroke={C.charcoal} strokeWidth="0.8" strokeDasharray="4,3" markerEnd="url(#ga)" />
      {/* Connect Webhook to Data Store */}
      <line x1="440" y1="110" x2="410" y2="110" stroke={C.charcoal} strokeWidth="0.8" strokeDasharray="4,3" markerEnd="url(#gal)" />
      {/* Connect Consent to Data Store */}
      <line x1="260" y1="110" x2="290" y2="110" stroke={C.charcoal} strokeWidth="0.8" strokeDasharray="4,3" markerEnd="url(#ga)" />
      <defs>
        <marker id="ga" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.charcoal} /></marker>
        <marker id="gal" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4" fill={C.charcoal} /></marker>
      </defs>
    </svg></AW></div>}

    {t[0] === 1 && <div><SL>Account Linking Sequence</SL><AW><svg viewBox="0 0 700 340" style={{ width: "100%", minWidth: 560, fontFamily: "Sora, sans-serif", display: "block" }}>
      {/* Lifeline headers at x=70, 210, 350, 490, 630 */}
      {[["Client", C.coolBlue, 70], ["Gateway", C.ink, 210], ["Agg Svc", C.coolBlue, 350], ["Plaid", "#2D6A4F", 490], ["DB", C.ember, 630]].map(function(h) { return <g key={h[0]}><rect x={h[2]-45} y="5" width="90" height="28" rx="5" fill={h[1]} /><text x={h[2]} y="24" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">{h[0]}</text><line x1={h[2]} y1="33" x2={h[2]} y2="335" stroke={C.border} strokeWidth="0.8" strokeDasharray="4,4" /></g>; })}
      {/* Messages (y increments of 30) */}
      <line x1="70" y1="55" x2="200" y2="55" stroke={C.ink} strokeWidth="1" markerEnd="url(#sa)" /><text x="135" y="48" textAnchor="middle" fill={C.text} fontSize="8">POST /link/create</text>
      <line x1="210" y1="75" x2="340" y2="75" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#sa)" /><text x="275" y="68" textAnchor="middle" fill={C.text} fontSize="8">Create link token</text>
      <line x1="350" y1="95" x2="480" y2="95" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#sa)" /><text x="415" y="88" textAnchor="middle" fill={C.text} fontSize="8">POST /link/token/create</text>
      <line x1="480" y1="115" x2="360" y2="115" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="5,3" markerEnd="url(#sal)" /><text x="420" y="108" textAnchor="middle" fill={C.textMid} fontSize="7.5">link_token</text>
      <line x1="340" y1="135" x2="80" y2="135" stroke={C.coolBlue} strokeWidth="1" strokeDasharray="5,3" markerEnd="url(#sal)" /><text x="210" y="128" textAnchor="middle" fill={C.textMid} fontSize="7.5">Open Plaid Link UI</text>
      <rect x="30" y="145" width="80" height="20" rx="4" fill={C.coolBlue + "10"} stroke={C.coolBlue} strokeWidth="0.8" /><text x="70" y="159" textAnchor="middle" fill={C.coolBlue} fontSize="7.5">User selects bank</text>
      <rect x="30" y="170" width="80" height="20" rx="4" fill={C.coolBlue + "10"} stroke={C.coolBlue} strokeWidth="0.8" /><text x="70" y="184" textAnchor="middle" fill={C.coolBlue} fontSize="7.5">User authenticates</text>
      <line x1="70" y1="200" x2="200" y2="200" stroke={C.ink} strokeWidth="1" markerEnd="url(#sa)" /><text x="135" y="193" textAnchor="middle" fill={C.text} fontSize="8">public_token</text>
      <line x1="210" y1="220" x2="340" y2="220" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#sa)" /><text x="275" y="213" textAnchor="middle" fill={C.text} fontSize="8">Exchange token</text>
      <line x1="350" y1="240" x2="480" y2="240" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#sa)" /><text x="415" y="233" textAnchor="middle" fill={C.text} fontSize="8">POST /item/exchange</text>
      <line x1="480" y1="260" x2="360" y2="260" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="5,3" markerEnd="url(#sal)" /><text x="420" y="253" textAnchor="middle" fill={C.textMid} fontSize="7.5">access_token</text>
      <line x1="350" y1="280" x2="620" y2="280" stroke={C.ember} strokeWidth="1" markerEnd="url(#sa)" /><text x="485" y="273" textAnchor="middle" fill={C.text} fontSize="8">Store encrypted token</text>
      <line x1="350" y1="300" x2="480" y2="300" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#sa)" /><text x="415" y="293" textAnchor="middle" fill={C.text} fontSize="8">GET /accounts</text>
      <line x1="480" y1="320" x2="350" y2="320" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="5,3" markerEnd="url(#sal)" /><text x="415" y="313" textAnchor="middle" fill={C.textMid} fontSize="7.5">accounts + balances</text>
      <defs>
        <marker id="sa" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.charcoal} /></marker>
        <marker id="sal" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4" fill={C.charcoal} /></marker>
      </defs>
    </svg></AW></div>}

    {t[0] === 2 && <div><SL>Entity Relationship Diagram</SL><AW><svg viewBox="0 0 700 350" style={{ width: "100%", minWidth: 560, fontFamily: "Sora, sans-serif", display: "block" }}>
      {/* All entities: uniform W=160, header H=22, rows H=14 each */}
      {/* USER at (10, 10) */}
      <rect x="10" y="10" width="160" height="108" rx="5" fill={C.white} stroke={C.ink} strokeWidth="1.2" /><rect x="10" y="10" width="160" height="22" rx="5" fill={C.ink} /><rect x="10" y="26" width="160" height="6" fill={C.ink} /><text x="90" y="26" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">USER</text>
      <text x="20" y="46" fill={C.ember} fontSize="7" fontWeight="600">PK</text><text x="36" y="46" fill={C.text} fontSize="8">user_id UUID</text><line x1="16" y1="50" x2="164" y2="50" stroke={C.borderLight} />
      <text x="36" y="62" fill={C.textMid} fontSize="8">email VARCHAR</text><text x="36" y="76" fill={C.textMid} fontSize="8">full_name VARCHAR</text><text x="36" y="90" fill={C.textMid} fontSize="8">phone VARCHAR</text><text x="36" y="104" fill={C.textMid} fontSize="8">mfa_enabled BOOL</text>
      {/* LINKED_ACCOUNT at (270, 10) */}
      <rect x="270" y="10" width="160" height="136" rx="5" fill={C.white} stroke={C.coolBlue} strokeWidth="1.2" /><rect x="270" y="10" width="160" height="22" rx="5" fill={C.coolBlue} /><rect x="270" y="26" width="160" height="6" fill={C.coolBlue} /><text x="350" y="26" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">LINKED_ACCOUNT</text>
      <text x="280" y="46" fill={C.ember} fontSize="7" fontWeight="600">PK</text><text x="296" y="46" fill={C.text} fontSize="8">linked_account_id</text><line x1="276" y1="50" x2="424" y2="50" stroke={C.borderLight} />
      <text x="280" y="62" fill={C.coolBlue} fontSize="7" fontWeight="600">FK</text><text x="296" y="62" fill={C.textMid} fontSize="8">user_id UUID</text>
      <text x="280" y="76" fill={C.coolBlue} fontSize="7" fontWeight="600">FK</text><text x="296" y="76" fill={C.textMid} fontSize="8">institution_id</text>
      <text x="296" y="90" fill={C.textMid} fontSize="8">plaid_item_id</text><text x="296" y="104" fill={C.textMid} fontSize="8">access_token_enc</text><text x="296" y="118" fill={C.textMid} fontSize="8">account_type ENUM</text><text x="296" y="132" fill={C.textMid} fontSize="8">status VARCHAR</text>
      {/* INSTITUTION at (530, 10) */}
      <rect x="530" y="10" width="160" height="94" rx="5" fill={C.white} stroke="#2D6A4F" strokeWidth="1.2" /><rect x="530" y="10" width="160" height="22" rx="5" fill="#2D6A4F" /><rect x="530" y="26" width="160" height="6" fill="#2D6A4F" /><text x="610" y="26" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">INSTITUTION</text>
      <text x="540" y="46" fill={C.ember} fontSize="7" fontWeight="600">PK</text><text x="556" y="46" fill={C.text} fontSize="8">institution_id</text><line x1="536" y1="50" x2="684" y2="50" stroke={C.borderLight} />
      <text x="556" y="62" fill={C.textMid} fontSize="8">name VARCHAR</text><text x="556" y="76" fill={C.textMid} fontSize="8">logo_url TEXT</text><text x="556" y="90" fill={C.textMid} fontSize="8">status VARCHAR</text>
      {/* TRANSACTION at (270, 190) */}
      <rect x="270" y="190" width="160" height="122" rx="5" fill={C.white} stroke={C.ember} strokeWidth="1.2" /><rect x="270" y="190" width="160" height="22" rx="5" fill={C.ember} /><rect x="270" y="206" width="160" height="6" fill={C.ember} /><text x="350" y="206" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">TRANSACTION</text>
      <text x="280" y="226" fill={C.ember} fontSize="7" fontWeight="600">PK</text><text x="296" y="226" fill={C.text} fontSize="8">transaction_id</text><line x1="276" y1="230" x2="424" y2="230" stroke={C.borderLight} />
      <text x="280" y="242" fill={C.coolBlue} fontSize="7" fontWeight="600">FK</text><text x="296" y="242" fill={C.textMid} fontSize="8">linked_account_id</text>
      <text x="296" y="256" fill={C.textMid} fontSize="8">amount DECIMAL</text><text x="296" y="270" fill={C.textMid} fontSize="8">date DATE</text><text x="296" y="284" fill={C.textMid} fontSize="8">merchant VARCHAR</text><text x="296" y="298" fill={C.textMid} fontSize="8">category VARCHAR[]</text>
      {/* CONSENT at (10, 190) */}
      <rect x="10" y="190" width="160" height="108" rx="5" fill={C.white} stroke={C.deepBlue} strokeWidth="1.2" /><rect x="10" y="190" width="160" height="22" rx="5" fill={C.deepBlue} /><rect x="10" y="206" width="160" height="6" fill={C.deepBlue} /><text x="90" y="206" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">CONSENT_RECORD</text>
      <text x="20" y="226" fill={C.ember} fontSize="7" fontWeight="600">PK</text><text x="36" y="226" fill={C.text} fontSize="8">consent_id UUID</text><line x1="16" y1="230" x2="164" y2="230" stroke={C.borderLight} />
      <text x="20" y="242" fill={C.coolBlue} fontSize="7" fontWeight="600">FK</text><text x="36" y="242" fill={C.textMid} fontSize="8">user_id UUID</text>
      <text x="36" y="256" fill={C.textMid} fontSize="8">scope VARCHAR[]</text><text x="36" y="270" fill={C.textMid} fontSize="8">granted_at TS</text><text x="36" y="284" fill={C.textMid} fontSize="8">expires_at TS</text>
      {/* BALANCE at (530, 190) */}
      <rect x="530" y="190" width="160" height="94" rx="5" fill={C.white} stroke="#7B4B94" strokeWidth="1.2" /><rect x="530" y="190" width="160" height="22" rx="5" fill="#7B4B94" /><rect x="530" y="206" width="160" height="6" fill="#7B4B94" /><text x="610" y="206" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">BALANCE_SNAPSHOT</text>
      <text x="540" y="226" fill={C.ember} fontSize="7" fontWeight="600">PK</text><text x="556" y="226" fill={C.text} fontSize="8">snapshot_id UUID</text><line x1="536" y1="230" x2="684" y2="230" stroke={C.borderLight} />
      <text x="540" y="242" fill={C.coolBlue} fontSize="7" fontWeight="600">FK</text><text x="556" y="242" fill={C.textMid} fontSize="8">linked_account_id</text>
      <text x="556" y="256" fill={C.textMid} fontSize="8">current DECIMAL</text><text x="556" y="270" fill={C.textMid} fontSize="8">available DECIMAL</text>
      {/* Relationships: straight lines */}
      <line x1="170" y1="62" x2="270" y2="62" stroke={C.charcoal} strokeWidth="1" /><text x="220" y="56" textAnchor="middle" fill={C.textFaint} fontSize="8">1:N</text>
      <line x1="430" y1="76" x2="530" y2="55" stroke={C.charcoal} strokeWidth="1" /><text x="480" y="58" textAnchor="middle" fill={C.textFaint} fontSize="8">N:1</text>
      <line x1="350" y1="146" x2="350" y2="190" stroke={C.charcoal} strokeWidth="1" /><text x="360" y="172" fill={C.textFaint} fontSize="8">1:N</text>
      <line x1="90" y1="118" x2="90" y2="190" stroke={C.charcoal} strokeWidth="1" /><text x="100" y="158" fill={C.textFaint} fontSize="8">1:N</text>
      <line x1="430" y1="118" x2="530" y2="242" stroke={C.charcoal} strokeWidth="1" strokeDasharray="4,3" /><text x="490" y="185" fill={C.textFaint} fontSize="8">1:N</text>
    </svg></AW></div>}

    {t[0] === 3 && <div><SL>Data Mapping (Plaid to Internal)</SL><AW><div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Sora', sans-serif", fontSize: 10.5 }}>
        <thead><tr style={{ background: C.ink }}>{["Plaid Field", "Type", "Internal Field", "Transform", "Validation", "Req"].map(function(h) { return <th key={h} style={{ padding: "8px 10px", color: "#fff", fontWeight: 600, fontSize: 9.5, textAlign: "left" }}>{h}</th>; })}</tr></thead>
        <tbody>{[
          ["account_id","string","plaid_account_id","Direct map","Non empty","Y"],
          ["balances.current","number","balance_current","Round 2 dec",">= 0","Y"],
          ["balances.available","number","balance_available","Round 2 dec","Nullable","N"],
          ["name","string","account_name","Trim","Max 200 chars","Y"],
          ["type","string","account_type","Map to ENUM","checking/savings/credit","Y"],
          ["mask","string","account_mask","Direct","4 digits","Y"],
          ["transactions[].amount","number","txn_amount","Negate (Plaid inverse)","Non zero","Y"],
          ["transactions[].date","string","txn_date","Parse YYYY-MM-DD","Not future","Y"],
          ["transactions[].merchant","string","merchant","Trim, normalize","Nullable","N"],
          ["item.institution_id","string","institution_id","Direct","Valid Plaid ID","Y"]
        ].map(function(row, i) { return <tr key={i} style={{ background: i % 2 === 0 ? C.white : C.cloud }}>{row.map(function(cell, j) { return <td key={j} style={{ padding: "6px 10px", color: j < 3 ? C.ink : C.textMid, fontWeight: j < 3 ? 600 : 400, fontFamily: j < 3 ? "'JetBrains Mono', monospace" : "'Sora', sans-serif", fontSize: j < 3 ? 9 : 10, borderBottom: "1px solid " + C.borderLight }}>{cell}</td>; })}</tr>; })}</tbody>
      </table>
    </div><p style={{ fontSize: 10, color: C.textLight, marginTop: 10, fontStyle: "italic" }}>Showing 10 of 80+ field mappings.</p></AW></div>}

    {t[0] === 4 && <div><SL>Error Handling Decision Tree</SL><AW><svg viewBox="0 0 700 260" style={{ width: "100%", minWidth: 560, fontFamily: "Sora, sans-serif", display: "block" }}>
      {/* All boxes: W=110, H=32, uniform */}
      <rect x="280" y="10" width="140" height="32" rx="5" fill={C.ink} /><text x="350" y="30" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">Plaid API Error</text>
      <line x1="350" y1="42" x2="350" y2="62" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ea)" />
      <polygon points="350,62 390,82 350,102 310,82" fill={C.coolBlue + "10"} stroke={C.coolBlue} strokeWidth="1.2" /><text x="350" y="85" textAnchor="middle" fill={C.text} fontSize="8" fontWeight="600">Error Type?</text>
      {/* Left: TOKEN EXPIRED */}
      <line x1="310" y1="82" x2="160" y2="82" stroke={C.ember} strokeWidth="1" markerEnd="url(#eal)" /><text x="235" y="76" textAnchor="middle" fill={C.ember} fontSize="7.5" fontWeight="600">LOGIN_REQUIRED</text>
      <rect x="50" y="66" width="110" height="32" rx="5" fill={C.ember} /><text x="105" y="86" textAnchor="middle" fill="#fff" fontSize="9">Re-auth User</text>
      <line x1="105" y1="98" x2="105" y2="115" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ea)" />
      <rect x="50" y="115" width="110" height="32" rx="5" fill={C.white} stroke={C.ember} strokeWidth="1" /><text x="105" y="135" textAnchor="middle" fill={C.ember} fontSize="8.5">Send Notification</text>
      {/* Right: INSTITUTION DOWN */}
      <line x1="390" y1="82" x2="540" y2="82" stroke={C.ember} strokeWidth="1" markerEnd="url(#ea)" /><text x="465" y="76" textAnchor="middle" fill={C.ember} fontSize="7.5" fontWeight="600">INSTITUTION_DOWN</text>
      <rect x="540" y="66" width="110" height="32" rx="5" fill={C.ember} /><text x="595" y="86" textAnchor="middle" fill="#fff" fontSize="9">Mark Degraded</text>
      <line x1="595" y1="98" x2="595" y2="115" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ea)" />
      <rect x="540" y="115" width="110" height="32" rx="5" fill={C.white} stroke={C.border} strokeWidth="1" /><text x="595" y="135" textAnchor="middle" fill={C.textMid} fontSize="8.5">Serve Cached Data</text>
      <line x1="595" y1="147" x2="595" y2="164" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ea)" />
      <rect x="540" y="164" width="110" height="32" rx="5" fill={C.white} stroke={C.border} strokeWidth="1" /><text x="595" y="184" textAnchor="middle" fill={C.textMid} fontSize="8.5">Poll Until Restored</text>
      {/* Bottom: RATE LIMIT */}
      <line x1="350" y1="102" x2="350" y2="130" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ea)" /><text x="362" y="120" fill={C.textMid} fontSize="7.5" fontWeight="600">RATE_LIMIT</text>
      <rect x="295" y="130" width="110" height="32" rx="5" fill={C.charcoal} /><text x="350" y="150" textAnchor="middle" fill="#fff" fontSize="9">Exp. Backoff</text>
      <line x1="350" y1="162" x2="350" y2="182" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ea)" />
      <polygon points="350,182 380,198 350,214 320,198" fill={C.charcoal + "08"} stroke={C.charcoal} strokeWidth="1" /><text x="350" y="201" textAnchor="middle" fill={C.text} fontSize="7.5" fontWeight="600">Max?</text>
      <line x1="380" y1="198" x2="420" y2="198" stroke={C.coolBlue} strokeWidth="1" /><text x="400" y="192" fill={C.coolBlue} fontSize="7" fontWeight="600">No</text>
      <rect x="420" y="182" width="60" height="32" rx="5" fill={C.coolBlue + "12"} stroke={C.coolBlue} strokeWidth="1" /><text x="450" y="202" textAnchor="middle" fill={C.coolBlue} fontSize="8.5">Retry</text>
      <line x1="350" y1="214" x2="350" y2="232" stroke={C.ember} strokeWidth="1" markerEnd="url(#ea)" /><text x="362" y="226" fill={C.ember} fontSize="7" fontWeight="600">Yes</text>
      <rect x="295" y="232" width="110" height="28" rx="5" fill={C.ember} /><text x="350" y="250" textAnchor="middle" fill="#fff" fontSize="8.5">Dead Letter Queue</text>
      {/* CONSENT_REVOKED: from bottom of diamond */}
      <line x1="310" y1="102" x2="200" y2="160" stroke={C.deepBlue} strokeWidth="1" markerEnd="url(#ea)" /><text x="240" y="125" fill={C.deepBlue} fontSize="7.5" fontWeight="600">CONSENT_REVOKED</text>
      <rect x="130" y="160" width="110" height="32" rx="5" fill={C.deepBlue} /><text x="185" y="180" textAnchor="middle" fill="#fff" fontSize="9">Deactivate Acct</text>
      <line x1="185" y1="192" x2="185" y2="210" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ea)" />
      <rect x="130" y="210" width="110" height="32" rx="5" fill={C.white} stroke={C.deepBlue} strokeWidth="1" /><text x="185" y="230" textAnchor="middle" fill={C.deepBlue} fontSize="8.5">Purge Stored Data</text>
      <defs>
        <marker id="ea" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.charcoal} /></marker>
        <marker id="eal" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4" fill={C.charcoal} /></marker>
      </defs>
    </svg></AW></div>}

    {t[0] === 5 && <div><SL>Account Aggregation Dashboard</SL><AW><svg viewBox="0 0 700 300" style={{ width: "100%", fontFamily: "Sora, sans-serif", display: "block" }}>
      <rect x="0" y="0" width="700" height="300" rx="6" fill={C.white} stroke={C.border} strokeWidth="1" />
      <rect x="0" y="0" width="700" height="28" rx="6" fill={C.ink} /><rect x="0" y="18" width="700" height="10" fill={C.ink} /><text x="16" y="19" fill="#fff" fontSize="10" fontWeight="600">Account Aggregation</text><text x="600" y="19" fill="rgba(255,255,255,0.5)" fontSize="8">Last sync: 2 min ago</text>
      {/* Net Worth */}
      <rect x="16" y="38" width="200" height="55" rx="5" fill={C.coolBlue + "08"} stroke={C.coolBlue} strokeWidth="0.8" /><text x="28" y="54" fill={C.textLight} fontSize="8">Total Net Worth</text><text x="28" y="78" fill={C.ink} fontSize="22" fontFamily="'Instrument Serif', serif">$284,512</text><text x="140" y="78" fill="#2D6A4F" fontSize="10" fontWeight="500">+2.3%</text>
      {/* Linked Accounts Row */}
      {[["Chase", "****4829", "$12,450", C.coolBlue], ["BofA", "****7721", "$89,200", "#2D6A4F"], ["Amex", "****3001", "$2,180", C.ember], ["Fidelity", "****9944", "$180K", "#7B4B94"]].map(function(a, i) {
        return <g key={i}><rect x={232 + i * 117} y={38} width="110" height="55" rx="5" fill={C.cloud} stroke={C.borderLight} strokeWidth="0.8" /><text x={240 + i * 117} y={54} fill={C.text} fontSize="8" fontWeight="500">{a[0]}</text><text x={326 + i * 117} y={54} fill={C.textFaint} fontSize="7">{a[1]}</text><text x={240 + i * 117} y={76} fill={a[3]} fontSize="11" fontWeight="600">{a[2]}</text></g>;
      })}
      {/* Transaction Feed */}
      <rect x="16" y="103" width="400" height="180" rx="5" fill={C.cloud} stroke={C.borderLight} strokeWidth="0.8" /><text x="28" y="120" fill={C.text} fontSize="9" fontWeight="600">Recent Transactions</text>
      {[["Whole Foods","Groceries","$127.43","Today",C.ember],["Direct Deposit","Income","$4,250","Mar 15","#2D6A4F"],["Netflix","Entertainment","$15.99","Mar 14",C.ember],["Shell Gas","Transport","$52.30","Mar 13",C.ember],["Transfer","Savings","$500","Mar 12",C.coolBlue],["Amazon","Shopping","$14.99","Mar 11",C.ember]].map(function(tr, i) {
        return <g key={i}><rect x="22" y={130 + i * 24} width="388" height="22" rx="2" fill={i % 2 === 0 ? C.white : "transparent"} /><text x="30" y={145 + i * 24} fill={C.text} fontSize="8" fontWeight="500">{tr[0]}</text><text x="160" y={145 + i * 24} fill={C.textLight} fontSize="8">{tr[1]}</text><text x="280" y={145 + i * 24} fill={tr[4]} fontSize="8" fontWeight="600">{tr[2]}</text><text x="370" y={145 + i * 24} fill={C.textFaint} fontSize="7">{tr[3]}</text></g>;
      })}
      {/* Account Health */}
      <rect x="430" y="103" width="254" height="180" rx="5" fill={C.cloud} stroke={C.borderLight} strokeWidth="0.8" /><text x="442" y="120" fill={C.text} fontSize="9" fontWeight="600">Account Health</text>
      {[["Chase Checking","Connected","#2D6A4F"],["BofA Savings","Connected","#2D6A4F"],["Amex Credit","Needs Re-auth",C.ember],["Fidelity 401k","Connected","#2D6A4F"]].map(function(h, i) {
        return <g key={i}><rect x="436" y={130 + i * 40} width="242" height="34" rx="4" fill={C.white} stroke={C.borderLight} strokeWidth="0.8" /><circle cx="450" cy={147 + i * 40} r="3.5" fill={h[2]} /><text x="462" y={143 + i * 40} fill={C.text} fontSize="8" fontWeight="500">{h[0]}</text><text x="462" y={155 + i * 40} fill={h[2]} fontSize="7.5" fontWeight="500">{h[1]}</text></g>;
      })}
    </svg></AW></div>}

    <MG cols={4} items={[["6", "Components"], ["80+", "Mappings"], ["500+", "Institutions"], ["5", "Error Types"]]} />
  </div>);
}

function FraudArtifact() {
  /* All boxes: W=110, H=36, uniform spacing */
  return (<div><SL>Human-in-the-Loop Review Workflow</SL><AW><svg viewBox="0 0 720 180" style={{ width: "100%", minWidth: 560, fontFamily: "Sora, sans-serif", display: "block" }}>
    <rect x="10" y="62" width="100" height="36" rx="18" fill={C.ink} /><text x="60" y="84" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="500">Transaction</text>
    <line x1="110" y1="80" x2="140" y2="80" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#fa)" />
    <rect x="140" y="62" width="110" height="36" rx="5" fill={C.white} stroke="#7B4B94" strokeWidth="1.2" /><text x="195" y="77" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="500">ML Scoring</text><text x="195" y="90" textAnchor="middle" fill="#7B4B94" fontSize="7.5">Real time</text>
    <line x1="250" y1="80" x2="280" y2="80" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#fa)" />
    <polygon points="330,54 370,80 330,106 290,80" fill="#7B4B9410" stroke="#7B4B94" strokeWidth="1.2" /><text x="330" y="77" textAnchor="middle" fill={C.text} fontSize="8" fontWeight="600">Risk</text><text x="330" y="89" textAnchor="middle" fill={C.text} fontSize="8" fontWeight="600">Score</text>
    {/* LOW: right */}
    <line x1="370" y1="80" x2="400" y2="80" stroke={C.coolBlue} strokeWidth="1" markerEnd="url(#fb)" /><text x="385" y="73" fill={C.coolBlue} fontSize="7" fontWeight="600">LOW</text>
    <rect x="400" y="62" width="100" height="36" rx="18" fill={C.coolBlue} /><text x="450" y="84" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="500">Approved</text>
    {/* HIGH: down */}
    <line x1="330" y1="106" x2="330" y2="126" stroke={C.ember} strokeWidth="1" markerEnd="url(#fc)" /><text x="340" y="120" fill={C.ember} fontSize="7" fontWeight="600">HIGH</text>
    <rect x="275" y="126" width="110" height="36" rx="5" fill={C.white} stroke={C.ember} strokeWidth="1.2" /><text x="330" y="141" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="500">Analyst Review</text><text x="330" y="154" textAnchor="middle" fill={C.ember} fontSize="7.5">Human-in-the-Loop</text>
    <line x1="385" y1="144" x2="430" y2="144" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#fa)" />
    <polygon points="470,126 500,144 470,162 440,144" fill={C.ink + "06"} stroke={C.charcoal} strokeWidth="1.2" /><text x="470" y="147" textAnchor="middle" fill={C.text} fontSize="8" fontWeight="600">Fraud?</text>
    {/* YES: right */}
    <line x1="500" y1="144" x2="530" y2="144" stroke={C.ember} strokeWidth="1" markerEnd="url(#fc)" /><text x="515" y="137" fill={C.ember} fontSize="7" fontWeight="600">YES</text>
    <rect x="530" y="126" width="100" height="36" rx="5" fill={C.ember} /><text x="580" y="148" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="500">Block + Alert</text>
    {/* NO: up to approved */}
    <line x1="470" y1="126" x2="470" y2="80" stroke={C.coolBlue} strokeWidth="1" /><line x1="470" y1="80" x2="500" y2="80" stroke={C.coolBlue} strokeWidth="1" markerEnd="url(#fb)" /><text x="476" y="106" fill={C.coolBlue} fontSize="7" fontWeight="600">NO</text>
    <rect x="500" y="62" width="70" height="36" rx="18" fill={C.coolBlue} /><text x="535" y="84" textAnchor="middle" fill="#fff" fontSize="9">Clear</text>
    <defs><marker id="fa" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.charcoal} /></marker><marker id="fb" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.coolBlue} /></marker><marker id="fc" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.ember} /></marker></defs>
  </svg></AW>
  <MG cols={4} items={[["200+", "Fraud Rules"], ["60+", "ML Requirements"], ["78% to 23%", "FP Target"], ["$2.4M", "Loss Baseline"]]} />
  </div>);
}

function RagArtifact() {
  return (<div><SL>RAG System Architecture</SL><AW><svg viewBox="0 0 700 160" style={{ width: "100%", minWidth: 560, fontFamily: "Sora, sans-serif", display: "block" }}>
    {/* All boxes W=110, H=44, uniform, centered at y=60 */}
    <rect x="10" y="55" width="100" height="44" rx="6" fill={C.white} stroke="#2D6A4F" strokeWidth="1.2" /><text x="60" y="74" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="500">Advisor Query</text><text x="60" y="88" textAnchor="middle" fill={C.textLight} fontSize="7.5">Natural Language</text>
    <line x1="110" y1="77" x2="140" y2="77" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ra)" />
    <rect x="140" y="55" width="100" height="44" rx="6" fill="#2D6A4F" /><text x="190" y="74" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="500">Embedding</text><text x="190" y="88" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7.5">Vector Search</text>
    <line x1="240" y1="77" x2="270" y2="77" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ra)" />
    <rect x="270" y="55" width="100" height="44" rx="6" fill={C.white} stroke="#2D6A4F" strokeWidth="1.2" /><text x="320" y="74" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="500">Retrieval</text><text x="320" y="88" textAnchor="middle" fill="#2D6A4F" fontSize="7.5">Top K Docs</text>
    <line x1="370" y1="77" x2="400" y2="77" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ra)" />
    <rect x="400" y="55" width="100" height="44" rx="6" fill="#2D6A4F" /><text x="450" y="74" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="500">LLM Generation</text><text x="450" y="88" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7.5">With Citations</text>
    <line x1="500" y1="77" x2="530" y2="77" stroke={C.charcoal} strokeWidth="1" markerEnd="url(#ra)" />
    <rect x="530" y="55" width="100" height="44" rx="6" fill={C.white} stroke="#2D6A4F" strokeWidth="1.2" /><text x="580" y="74" textAnchor="middle" fill={C.text} fontSize="9" fontWeight="500">Cited Answer</text><text x="580" y="88" textAnchor="middle" fill="#2D6A4F" fontSize="7.5">Source Referenced</text>
    {/* Doc store above */}
    <rect x="220" y="5" width="220" height="24" rx="5" fill={C.cloud} stroke={C.border} strokeWidth="0.8" /><text x="330" y="21" textAnchor="middle" fill={C.textMid} fontSize="8">10,000+ Docs | 15 Categories | 80+ Subcategories</text>
    <line x1="320" y1="29" x2="320" y2="55" stroke={C.border} strokeWidth="0.8" strokeDasharray="3,3" />
    {/* Feedback below */}
    <rect x="250" y="120" width="160" height="22" rx="5" fill={C.ember + "10"} stroke={C.ember} strokeWidth="0.8" strokeDasharray="4,3" /><text x="330" y="135" textAnchor="middle" fill={C.ember} fontSize="8">Feedback Loop: Accuracy Improvement</text>
    <line x1="330" y1="120" x2="330" y2="99" stroke={C.ember} strokeWidth="0.8" strokeDasharray="3,3" />
    <defs><marker id="ra" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill={C.charcoal} /></marker></defs>
  </svg></AW>
  <MG cols={4} items={[["10,000+", "Documents"], ["15", "Categories"], ["40", "Gherkin Tests"], ["94%", "Accuracy Target"]]} />
  </div>);
}

function PaymentArtifact() {
  var v = useState(0);
  var views = ["Executive", "Drill Down", "Alerts", "Timeline"];
  return (<div>
    <div style={{ display: "flex", gap: 4, marginBottom: 14, flexWrap: "wrap" }}>{views.map(function(vw, i) { return <button key={i} onClick={function() { v[1](i); }} style={{ background: v[0] === i ? "#B45309" : "transparent", color: v[0] === i ? "#fff" : C.textMid, border: "1.5px solid " + (v[0] === i ? "#B45309" : C.border), borderRadius: 5, padding: "6px 12px", fontSize: 10, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora', sans-serif" }}>{vw}</button>; })}</div>

    {v[0] === 0 && <div><SL>Executive Dashboard</SL><AW><svg viewBox="0 0 700 260" style={{ width: "100%", fontFamily: "Sora, sans-serif", display: "block" }}>
      <rect x="0" y="0" width="700" height="260" rx="6" fill={C.white} stroke={C.border} strokeWidth="1" />
      <rect x="0" y="0" width="700" height="28" rx="6" fill={C.ink} /><rect x="0" y="18" width="700" height="10" fill={C.ink} /><text x="16" y="19" fill="#fff" fontSize="10" fontWeight="600">Payment Analytics</text><circle cx="650" cy="14" r="3" fill="#4ADE80" /><text x="660" y="18" fill="rgba(255,255,255,0.5)" fontSize="8">Live</text>
      {/* KPI cards */}
      {[["$12.4M","Daily Volume",16],["1,247","Transactions",186],["99.2%","Settlement Rate",356],["3","Active Alerts",526]].map(function(k, i) { return <g key={i}><rect x={k[2]} y={38} width="155" height="48" rx="5" fill={C.cloud} stroke={C.borderLight} strokeWidth="0.8" /><text x={k[2]+10} y={54} fill={C.textLight} fontSize="8">{k[1]}</text><text x={k[2]+10} y={74} fill={C.ink} fontSize="18" fontFamily="'Instrument Serif', serif">{k[0]}</text></g>; })}
      {/* Volume chart with Y-axis */}
      <rect x="16" y="96" width="330" height="110" rx="5" fill={C.cloud} stroke={C.borderLight} strokeWidth="0.8" />
      <text x="28" y="113" fill={C.text} fontSize="9" fontWeight="600">Transaction Volume (24h)</text>
      {/* Y-axis labels */}
      <text x="38" y="132" fill={C.textFaint} fontSize="7" textAnchor="end">1.2K</text>
      <text x="38" y="152" fill={C.textFaint} fontSize="7" textAnchor="end">800</text>
      <text x="38" y="172" fill={C.textFaint} fontSize="7" textAnchor="end">400</text>
      <text x="38" y="192" fill={C.textFaint} fontSize="7" textAnchor="end">0</text>
      {/* Grid lines */}
      <line x1="42" y1="128" x2="330" y2="128" stroke={C.borderLight} strokeWidth="0.5" />
      <line x1="42" y1="148" x2="330" y2="148" stroke={C.borderLight} strokeWidth="0.5" />
      <line x1="42" y1="168" x2="330" y2="168" stroke={C.borderLight} strokeWidth="0.5" />
      <line x1="42" y1="188" x2="330" y2="188" stroke={C.borderLight} strokeWidth="0.5" />
      {/* Bars with deterministic heights */}
      {[45,60,38,72,55,80,65,90,75,95,40,50].map(function(h, i) { return <rect key={i} x={46 + i * 24} y={190 - h} width="16" height={h} rx="2" fill={i === 9 ? C.ember : C.coolBlue} opacity={0.8} />; })}
      {/* X-axis */}
      <text x="58" y="200" fill={C.textFaint} fontSize="7">12AM</text><text x="130" y="200" fill={C.textFaint} fontSize="7">6AM</text><text x="202" y="200" fill={C.textFaint} fontSize="7">12PM</text><text x="274" y="200" fill={C.textFaint} fontSize="7">6PM</text>
      {/* Settlement bars */}
      <rect x="362" y="96" width="322" height="110" rx="5" fill={C.cloud} stroke={C.borderLight} strokeWidth="0.8" />
      <text x="374" y="113" fill={C.text} fontSize="9" fontWeight="600">Settlement Status</text>
      <text x="374" y="135" fill={C.textMid} fontSize="8">Settled</text><rect x="440" y="127" width="200" height="10" rx="5" fill={C.borderLight} /><rect x="440" y="127" width="185" height="10" rx="5" fill={C.coolBlue} /><text x="650" y="136" fill={C.textLight} fontSize="8">92.3%</text>
      <text x="374" y="160" fill={C.textMid} fontSize="8">Pending</text><rect x="440" y="152" width="200" height="10" rx="5" fill={C.borderLight} /><rect x="440" y="152" width="10" height="10" rx="5" fill={C.ember} /><text x="650" y="161" fill={C.textLight} fontSize="8">5.1%</text>
      <text x="374" y="185" fill={C.textMid} fontSize="8">Failed</text><rect x="440" y="177" width="200" height="10" rx="5" fill={C.borderLight} /><rect x="440" y="177" width="5" height="10" rx="5" fill="#DC2626" /><text x="650" y="186" fill={C.textLight} fontSize="8">2.6%</text>
      {/* Alert bar */}
      <rect x="16" y="218" width="668" height="32" rx="5" fill={C.ember + "08"} stroke={C.ember} strokeWidth="0.8" /><text x="30" y="238" fill={C.ember} fontSize="9" fontWeight="500">ALERT: ACH failure rate 2.6% vs 0.8% baseline</text>
    </svg></AW></div>}

    {v[0] === 1 && <div><SL>Transaction Drill Down</SL><AW><svg viewBox="0 0 700 200" style={{ width: "100%", fontFamily: "Sora, sans-serif", display: "block" }}>
      <rect x="0" y="0" width="700" height="200" rx="6" fill={C.white} stroke={C.border} strokeWidth="1" />
      <rect x="0" y="0" width="700" height="28" rx="6" fill={C.ink} /><rect x="0" y="18" width="700" height="10" fill={C.ink} /><text x="16" y="19" fill="#fff" fontSize="10" fontWeight="600">Transaction Detail: ACH</text>
      <rect x="16" y="36" width="60" height="20" rx="4" fill={C.coolBlue} /><text x="46" y="50" textAnchor="middle" fill="#fff" fontSize="8">ACH</text>
      <rect x="82" y="36" width="60" height="20" rx="4" fill={C.cloud} stroke={C.border} strokeWidth="0.8" /><text x="112" y="50" textAnchor="middle" fill={C.textMid} fontSize="8">Wire</text>
      <rect x="16" y="64" width="668" height="22" rx="4" fill={C.ink} />
      {["TXN ID","Time","Amount","Recipient","Status","Settle"].map(function(h, i) { return <text key={i} x={26 + i * 112} y={79} fill="#fff" fontSize="8.5" fontWeight="600">{h}</text>; })}
      {[["TXN-4829","14:23","$45,200","Acme Corp","Settled","T+1"],["TXN-4830","14:23","$12,800","Smith LLC","Pending","T+1"],["TXN-4831","14:24","$89,100","Global Inc","Failed","N/A"],["TXN-4832","14:24","$3,250","J. Williams","Settled","T+0"],["TXN-4833","14:25","$67,000","TechStart","Settled","T+1"]].map(function(r, i) {
        var sc = r[4]==="Settled" ? C.coolBlue : r[4]==="Failed" ? "#DC2626" : C.ember;
        return <g key={i}><rect x="16" y={86 + i * 22} width="668" height="22" fill={i%2===0?C.white:C.cloud} />{r.map(function(c, j) { return <text key={j} x={26 + j * 112} y={101 + i * 22} fill={j===4?sc:j===0?C.ink:C.textMid} fontSize="8.5" fontWeight={j===0||j===4?600:400} fontFamily={j===0?"'JetBrains Mono', monospace":"'Sora', sans-serif"}>{c}</text>; })}</g>;
      })}
    </svg></AW></div>}

    {v[0] === 2 && <div><SL>Alert Configuration</SL><AW><svg viewBox="0 0 700 200" style={{ width: "100%", fontFamily: "Sora, sans-serif", display: "block" }}>
      <rect x="0" y="0" width="700" height="200" rx="6" fill={C.white} stroke={C.border} strokeWidth="1" />
      <rect x="0" y="0" width="700" height="28" rx="6" fill={C.ink} /><rect x="0" y="18" width="700" height="10" fill={C.ink} /><text x="16" y="19" fill="#fff" fontSize="10" fontWeight="600">Alert Rules</text>
      {[["Failure Rate Spike","Failure rate > 2x baseline for 15+ min","ACTIVE",C.ember],["Volume Anomaly","Hourly volume > 3 std from 30d avg","ACTIVE",C.coolBlue],["Settlement Delay","> 5% txns exceed settlement window","ACTIVE","#2D6A4F"],["Large Transaction","Single txn exceeds $500K","PAUSED",C.textLight]].map(function(a, i) {
        return <g key={i}><rect x="16" y={36 + i * 40} width="668" height="34" rx="5" fill={C.cloud} stroke={C.borderLight} strokeWidth="0.8" /><circle cx="32" cy={53 + i * 40} r="3.5" fill={a[3]} /><text x="44" y={49 + i * 40} fill={C.ink} fontSize="9" fontWeight="600">{a[0]}</text><text x="44" y={62 + i * 40} fill={C.textLight} fontSize="8">{a[1]}</text><rect x="600" y={42 + i * 40} width="68" height="22" rx="11" fill={a[2]==="ACTIVE"?a[3]+"18":C.borderLight} stroke={a[2]==="ACTIVE"?a[3]:C.border} strokeWidth="0.8" /><text x="634" y={57 + i * 40} textAnchor="middle" fill={a[2]==="ACTIVE"?a[3]:C.textLight} fontSize="8" fontWeight="600">{a[2]}</text></g>;
      })}
    </svg></AW></div>}

    {v[0] === 3 && <div><SL>Settlement Timeline</SL><AW><svg viewBox="0 0 700 170" style={{ width: "100%", fontFamily: "Sora, sans-serif", display: "block" }}>
      <rect x="0" y="0" width="700" height="170" rx="6" fill={C.white} stroke={C.border} strokeWidth="1" />
      <rect x="0" y="0" width="700" height="28" rx="6" fill={C.ink} /><rect x="0" y="18" width="700" height="10" fill={C.ink} /><text x="16" y="19" fill="#fff" fontSize="10" fontWeight="600">Settlement: TXN-4829</text>
      <line x1="60" y1="70" x2="640" y2="70" stroke={C.border} strokeWidth="2" />
      {[[60,"Initiated","14:23:01",C.ink],[205,"Validated","14:23:02",C.coolBlue],[350,"Sent to BNY","14:23:03",C.ember],[495,"Accepted","14:23:15",C.coolBlue],[640,"Settled","15:01:44","#2D6A4F"]].map(function(s, i) {
        return <g key={i}><circle cx={s[0]} cy={70} r={9} fill={s[3]} /><text x={s[0]} y={74} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600">{i+1}</text><text x={s[0]} y={96} textAnchor="middle" fill={C.ink} fontSize="8.5" fontWeight="600">{s[1]}</text><text x={s[0]} y={108} textAnchor="middle" fill={C.textLight} fontSize="7.5">{s[2]}</text>{i<4 && <line x1={s[0]+9} y1={70} x2={[205,350,495,640][i]-9} y2={70} stroke={s[3]} strokeWidth="2" />}</g>;
      })}
      <rect x="16" y="122" width="668" height="38" rx="5" fill={C.cloud} stroke={C.borderLight} strokeWidth="0.8" />
      <text x="28" y="138" fill={C.textLight} fontSize="8">Total Time</text><text x="28" y="153" fill={C.ink} fontSize="14" fontFamily="'Instrument Serif', serif">38 min 43 sec</text>
      <text x="220" y="138" fill={C.textLight} fontSize="8">SLA</text><text x="220" y="153" fill={C.coolBlue} fontSize="14" fontFamily="'Instrument Serif', serif">{"< 60 min"}</text>
      <rect x="400" y="133" width="65" height="20" rx="10" fill="#2D6A4F" /><text x="432" y="147" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600">On Time</text>
    </svg></AW></div>}

    <MG cols={4} items={[["12", "KPIs"], ["4", "Views"], ["4", "Sources"], ["35", "Requirements"]]} />
  </div>);
}

var artifactComponents = { onboarding: OnboardingArtifact, openbanking: OpenBankingArtifact, fraud: FraudArtifact, rag: RagArtifact, payments: PaymentArtifact };

/* ===== PAGES ===== */
function HomePage(p) {
  return (<div>
    <div style={{ background: "linear-gradient(145deg, " + C.ink + " 0%, " + C.slate + " 40%, " + C.charcoal + " 100%)", padding: "60px 24px 50px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, background: "radial-gradient(circle, " + C.coolBlue + "12 0%, transparent 65%)", borderRadius: "50%" }} />
      <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative" }}>
        <FI><Tag color={C.emberLight}>Business Analyst</Tag></FI>
        <FI d={80}><h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 46, fontWeight: 400, color: "#fff", margin: "16px 0 14px", lineHeight: 1.1, maxWidth: 600 }}>Harshitha Babu Reddy</h1></FI>
        <FI d={160}><p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.7)", maxWidth: 520, lineHeight: 1.7, margin: "0 0 28px", fontFamily: "'Sora', sans-serif" }}>{profile.tagline}</p></FI>
        <FI d={240}><div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={function() { p.set("Case Studies"); }} style={{ background: C.ember, color: C.white, border: "none", borderRadius: 6, padding: "11px 22px", fontWeight: 500, fontSize: 13, cursor: "pointer", fontFamily: "'Sora', sans-serif" }}>View Case Studies</button>
          <button onClick={function() { p.set("Artifacts"); }} style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: 6, padding: "11px 22px", fontWeight: 400, fontSize: 13, cursor: "pointer", fontFamily: "'Sora', sans-serif" }}>Artifact Library</button>
        </div></FI>
        <FI d={300}><div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>{profile.domains.map(function(d, i) { return <span key={i} style={{ fontSize: 10.5, color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "3px 9px", fontFamily: "'Sora', sans-serif" }}>{d}</span>; })}</div></FI>
        <FI d={340}><div style={{ display: "flex", gap: 18, marginTop: 18, flexWrap: "wrap" }}>{[profile.location, profile.linkedin, profile.email, profile.phone].map(function(v, i) { return <span key={i} style={{ color: "rgba(255,255,255,0.38)", fontSize: 11, fontFamily: "'Sora', sans-serif" }}>{v}</span>; })}</div></FI>
      </div>
    </div>
    <div style={{ background: C.white, borderBottom: "1px solid " + C.border, padding: "24px" }}><div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 14 }}>
      {[["4+","Years in Financial Services"],["100+","Stakeholders Trained"],["70%","Manual Intervention Reduced"],["100%","Audit Compliance"]].map(function(it, i) { return <FI key={i} d={i*50}><div style={{textAlign:"center"}}><div style={{fontSize:28,fontWeight:400,fontFamily:"'Instrument Serif', serif",color:C.ink}}>{it[0]}</div><div style={{fontSize:10.5,color:C.textLight,marginTop:2,fontFamily:"'Sora', sans-serif"}}>{it[1]}</div></div></FI>; })}
    </div></div>
    <div style={{ maxWidth: 1140, margin: "0 auto", padding: "44px 24px" }}>
      <FI><h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 30, fontWeight: 400, color: C.ink, margin: "0 0 6px" }}>Portfolio Projects</h2><p style={{ fontSize: 13.5, color: C.textLight, margin: "0 0 24px", fontFamily: "'Sora', sans-serif" }}>5 case studies spanning fintech, RegTech, AI/ML, and data analytics with complete Business Analyst deliverables.</p></FI>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 14, gridAutoRows: "1fr" }}>
        {caseStudies.map(function(cs, idx) { return (<div key={idx} style={{ display: "flex" }}><Card style={{ padding: 0, overflow: "hidden", cursor: "pointer", flex: 1, display: "flex", flexDirection: "column" }}><div style={{ height: 4, background: cs.color, flexShrink: 0 }} /><div style={{ padding: "18px 18px 16px", flex: 1, display: "flex", flexDirection: "column" }}><div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}><Tag color={cs.color}>{cs.category}</Tag>{cs.personal && <PB />}</div><h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, fontWeight: 400, color: C.text, margin: "0 0 6px" }}>{cs.title}</h3><p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.6, margin: "0 0 10px", fontFamily: "'Sora', sans-serif", flex: 1 }}>{cs.summary.substring(0, 130)}...</p><button onClick={function() { p.set("Case Studies", idx); }} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11.5, fontWeight: 600, color: cs.color, padding: 0, fontFamily: "'Sora', sans-serif", alignSelf: "flex-start" }}>{"Read Case Study \u2192"}</button></div></Card></div>); })}
      </div>
    </div>
    <div style={{ background: C.white, borderTop: "1px solid " + C.border, padding: "32px 24px" }}><div style={{ maxWidth: 1140, margin: "0 auto" }}>
      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: C.textLight, fontFamily: "'Sora', sans-serif", margin: "0 0 14px" }}>Certifications</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 12, gridAutoRows: "1fr" }}>{certs.map(function(c, i) {
        var badgeSvgs = [
          <svg key="safe" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" fill={c.color} opacity="0.15" stroke={c.color} strokeWidth="1.5" /><text x="12" y="14" textAnchor="middle" fill={c.color} fontSize="7" fontWeight="700" fontFamily="'Sora', sans-serif">SAFe</text></svg>,
          <svg key="csm" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill={c.color} opacity="0.15" stroke={c.color} strokeWidth="1.5" /><text x="12" y="14" textAnchor="middle" fill={c.color} fontSize="6" fontWeight="700" fontFamily="'Sora', sans-serif">CSM</text></svg>,
          <svg key="aws" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill={c.color} opacity="0.15" stroke={c.color} strokeWidth="1.5" /><text x="12" y="14" textAnchor="middle" fill={c.color} fontSize="6" fontWeight="700" fontFamily="'Sora', sans-serif">AWS</text></svg>
        ];
        return (<div key={i} style={{ display: "flex" }}><a href={c.url} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: "none", color: "inherit", background: C.white, border: "1px solid " + C.border, borderRadius: 10, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14, borderLeft: "4px solid " + c.color, transition: "box-shadow 0.2s, transform 0.2s", cursor: "pointer" }} onMouseOver={function(e) { e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,29,35,0.06)"; e.currentTarget.style.transform = "translateY(-1px)"; }} onMouseOut={function(e) { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
          <div style={{ width: 44, height: 44, borderRadius: 8, background: c.color + "10", border: "1px solid " + c.color + "25", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {badgeSvgs[i]}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: "'Sora', sans-serif", lineHeight: 1.3 }}>{c.name}</div>
            <div style={{ fontSize: 11, color: C.textLight, fontFamily: "'Sora', sans-serif", marginTop: 3 }}>{c.org + " \u00b7 " + c.date}</div>
            <div style={{ marginTop: 5 }}>
              <span style={{ fontSize: 9.5, fontWeight: 500, color: c.color, fontFamily: "'Sora', sans-serif" }}>{"View Credential \u2197"}</span>
            </div>
          </div>
        </a></div>);
      })}</div>
    </div></div>
  </div>);
}

function CasePage(p) {
  var s1 = useState(p.initialStudy || 0); var s2 = useState(0);
  useEffect(function() { s2[1](0); }, [s1[0]]);
  useEffect(function() { if (p.initialStudy !== undefined && p.initialStudy !== null) s1[1](p.initialStudy); }, [p.initialStudy]);
  var s = caseStudies[s1[0]]; var AC = artifactComponents[s.id];
  return (<div style={{ maxWidth: 1140, margin: "0 auto", padding: "44px 24px" }}>
    <FI><h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 30, fontWeight: 400, color: C.ink, margin: "0 0 6px" }}>Case Studies</h2><p style={{ fontSize: 13.5, color: C.textLight, margin: "0 0 28px", fontFamily: "'Sora', sans-serif" }}>{"Each follows: Problem \u2192 Approach \u2192 Process \u2192 Artifacts \u2192 Impact \u2192 Learnings"}</p></FI>
    <FI d={50}><div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>{caseStudies.map(function(cs, i) { return (<button key={i} onClick={function() { s1[1](i); }} style={{ background: s1[0] === i ? cs.color : "transparent", color: s1[0] === i ? "#fff" : C.textMid, border: "1.5px solid " + (s1[0] === i ? cs.color : C.border), borderRadius: 6, padding: "8px 14px", fontSize: 10.5, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora', sans-serif", transition: "all 0.2s" }}>{cs.title}</button>); })}</div></FI>
    <FI d={80}><Card hover={false} style={{ overflow: "hidden" }}>
      <div style={{ background: s.color, padding: "20px 24px" }}><div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}><Tag color="#fff">{s.category}</Tag>{s.personal && <PBL />}</div><h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, color: "#fff", margin: "4px 0 6px" }}>{s.title}</h3><p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.6, fontFamily: "'Sora', sans-serif" }}>{s.summary}</p></div>
      <div style={{ padding: "14px 24px", background: s.color + "06", borderBottom: "1px solid " + C.border, display: "flex", gap: 36, flexWrap: "wrap" }}><div style={{ flex: 1, minWidth: 180 }}><p style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: C.textLight, fontFamily: "'Sora', sans-serif", margin: "0 0 3px" }}>My Role</p><p style={{ fontSize: 12, color: C.textMid, margin: 0, fontFamily: "'Sora', sans-serif" }}>{s.role}</p></div><div style={{ flex: 1, minWidth: 180 }}><p style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: C.textLight, fontFamily: "'Sora', sans-serif", margin: "0 0 3px" }}>Stakeholders</p><p style={{ fontSize: 12, color: C.textMid, margin: 0, fontFamily: "'Sora', sans-serif" }}>{s.stakeholders}</p></div></div>
      <div style={{ display: "flex", borderBottom: "1px solid " + C.border }}>{s.phases.map(function(ph, i) { return (<button key={i} onClick={function() { s2[1](i); }} style={{ flex: 1, background: s2[0] === i ? s.color + "08" : "transparent", border: "none", borderBottom: s2[0] === i ? "3px solid " + s.color : "3px solid transparent", padding: "11px 6px", cursor: "pointer", fontFamily: "'Sora', sans-serif", fontSize: 10.5, fontWeight: s2[0] === i ? 700 : 500, color: s2[0] === i ? s.color : C.textLight, transition: "all 0.15s" }}>{ph.title}</button>); })}</div>
      <div style={{ padding: "24px", minHeight: 100 }}>{s.phases[s2[0]].content === "VISUAL" ? (<AC />) : (<div><h4 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, fontWeight: 400, color: C.text, margin: "0 0 10px" }}>{s.phases[s2[0]].title}</h4><p style={{ fontSize: 13.5, color: C.textMid, lineHeight: 1.75, margin: 0, fontFamily: "'Sora', sans-serif" }}>{s.phases[s2[0]].content}</p></div>)}</div>
      <div style={{ padding: "0 24px 14px", display: "flex", gap: 3 }}>{s.phases.map(function(_, i) { return <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= s2[0] ? s.color : C.borderLight, transition: "background 0.3s" }} />; })}</div>
    </Card></FI>
  </div>);
}

function ArtifactPage() {
  var s = useState("All"); var pn = ["All"]; artifactsList.forEach(function(a) { if (pn.indexOf(a.project) === -1) pn.push(a.project); });
  var f = s[0] === "All" ? artifactsList : artifactsList.filter(function(a) { return a.project === s[0]; });
  return (<div style={{ maxWidth: 1140, margin: "0 auto", padding: "44px 24px" }}>
    <FI><h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 30, fontWeight: 400, color: C.ink, margin: "0 0 6px" }}>Artifact Library</h2><p style={{ fontSize: 13.5, color: C.textLight, margin: "0 0 28px", fontFamily: "'Sora', sans-serif", maxWidth: 560 }}>Industry standard Business Analyst deliverables across all portfolio projects.</p></FI>
    <FI d={50}><div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>{pn.map(function(p) { return (<button key={p} onClick={function() { s[1](p); }} style={{ background: s[0] === p ? C.ink : "transparent", color: s[0] === p ? "#fff" : C.textMid, border: "1.5px solid " + (s[0] === p ? C.ink : C.border), borderRadius: 5, padding: "7px 14px", fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora', sans-serif" }}>{p}</button>); })}</div></FI>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 12, gridAutoRows: "1fr" }}>
      {f.map(function(a, i) { return (<div key={s[0] + i} style={{ display: "flex" }}><Card style={{ padding: "18px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}><div><Tag color={C.coolBlue}>{a.type}</Tag><h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 13.5, fontWeight: 600, color: C.text, margin: "6px 0 4px" }}>{a.title}</h3><p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.6, margin: 0, fontFamily: "'Sora', sans-serif" }}>{a.desc}</p></div><span style={{ fontSize: 10.5, color: C.textLight, fontFamily: "'Sora', sans-serif", marginTop: 10, display: "block" }}>{"Project: " + a.project}</span></Card></div>); })}
    </div>
  </div>);
}

function MethodPage() {
  var s = useState(0); var m = methodology[s[0]];
  return (<div style={{ maxWidth: 1140, margin: "0 auto", padding: "44px 24px" }}>
    <FI><h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 30, fontWeight: 400, color: C.ink, margin: "0 0 6px" }}>How I Work</h2><p style={{ fontSize: 13.5, color: C.textLight, margin: "0 0 32px", fontFamily: "'Sora', sans-serif", maxWidth: 560 }}>A repeatable, outcome driven framework adapted to every project, enhanced with AI where it accelerates without compromising rigor.</p></FI>
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 20 }}>
      <FI d={50}><div style={{ display: "flex", flexDirection: "column", gap: 4 }}>{methodology.map(function(mt, i) { return (<button key={i} onClick={function() { s[1](i); }} style={{ background: s[0] === i ? C.ink : "transparent", border: "1.5px solid " + (s[0] === i ? C.ink : C.border), borderRadius: 6, padding: "10px 12px", cursor: "pointer", textAlign: "left", transition: "all 0.2s", fontFamily: "'Sora', sans-serif" }}><div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ width: 26, height: 26, borderRadius: "50%", background: s[0] === i ? C.ember : C.cloud, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: s[0] === i ? "#fff" : C.textMid, flexShrink: 0, fontFamily: "'Sora', sans-serif" }}>{mt.step}</div><div><div style={{ fontSize: 12.5, fontWeight: 700, color: s[0] === i ? "#fff" : C.text }}>{mt.title}</div></div></div></button>); })}</div></FI>
      <FI d={80}><Card hover={false} style={{ overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg, " + C.ink + ", " + C.charcoal + ")", padding: "22px 24px" }}><div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 36, height: 36, borderRadius: "50%", background: C.ember, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Sora', sans-serif", flexShrink: 0 }}>{m.step}</div><div><h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, fontWeight: 400, color: "#fff", margin: 0 }}>{m.title}</h3><p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "2px 0 0", fontFamily: "'Sora', sans-serif" }}>{m.subtitle}</p></div></div></div>
        <div style={{ padding: "22px 24px" }}>
          <p style={{ fontSize: 13.5, color: C.textMid, lineHeight: 1.75, margin: "0 0 14px", fontFamily: "'Sora', sans-serif" }}>{m.description}</p>
          <div style={{ background: C.cloudLight, border: "1px solid " + C.border, borderRadius: 6, padding: "14px 16px", marginBottom: 14 }}><p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: C.coolBlue, margin: "0 0 5px", fontFamily: "'Sora', sans-serif" }}>How I Adapt</p><p style={{ fontSize: 12.5, color: C.textMid, lineHeight: 1.65, margin: 0, fontFamily: "'Sora', sans-serif" }}>{m.detail}</p></div>
          <div style={{ background: C.coolBlue + "06", border: "1px solid " + C.coolBlue + "16", borderRadius: 6, padding: "14px 16px", marginBottom: 18 }}><p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: C.coolBlue, margin: "0 0 5px", fontFamily: "'Sora', sans-serif" }}>AI Enhanced Workflow</p><p style={{ fontSize: 12.5, color: C.textMid, lineHeight: 1.65, margin: 0, fontFamily: "'Sora', sans-serif" }}>{m.aiNote}</p></div>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: C.textLight, margin: "0 0 6px", fontFamily: "'Sora', sans-serif" }}>Deliverables</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{m.deliverables.map(function(d, i) { return <span key={i} style={{ fontSize: 11.5, color: C.coolBlue, background: C.coolBlue + "08", border: "1px solid " + C.coolBlue + "18", borderRadius: 4, padding: "4px 10px", fontWeight: 500, fontFamily: "'Sora', sans-serif" }}>{d}</span>; })}</div>
        </div>
        <div style={{ padding: "0 24px 14px", display: "flex", gap: 4 }}>{methodology.map(function(_, i) { return <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= s[0] ? C.coolBlue : C.borderLight, transition: "background 0.3s" }} />; })}</div>
      </Card></FI>
    </div>
  </div>);
}

function ExpPage() {
  return (<div style={{ maxWidth: 1140, margin: "0 auto", padding: "44px 24px" }}>
    <FI><h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 30, fontWeight: 400, color: C.ink, margin: "0 0 6px" }}>Experience</h2><p style={{ fontSize: 13.5, color: C.textLight, margin: "0 0 32px", fontFamily: "'Sora', sans-serif" }}>Building platforms that move money, onboard customers, and keep regulators happy.</p></FI>
    <div style={{ position: "relative", paddingLeft: 28 }}>
      <div style={{ position: "absolute", left: 6, top: 6, bottom: 6, width: 2, background: "linear-gradient(to bottom, " + C.ember + ", " + C.coolBlue + ", " + C.ink + ")" }} />
      {experienceData.map(function(exp, i) { return (<FI key={i} d={i*80}><div style={{ position: "relative", marginBottom: 28 }}><div style={{ position: "absolute", left: -28, top: 5, width: 14, height: 14, borderRadius: "50%", background: C.white, border: "3px solid " + C.ember, zIndex: 1 }} /><Card style={{ padding: "20px" }}><div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 3 }}><div><h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, fontWeight: 400, color: C.text, margin: 0 }}>{exp.role}</h3><div style={{ fontSize: 13.5, color: C.coolBlue, fontWeight: 600, marginTop: 3, fontFamily: "'Sora', sans-serif" }}>{exp.company}</div></div><div style={{ textAlign: "right" }}><div style={{ fontSize: 11.5, color: C.textLight, fontFamily: "'Sora', sans-serif" }}>{exp.period}</div><div style={{ fontSize: 10.5, color: C.textLight, marginTop: 2 }}>{exp.location}</div></div></div>{exp.client && <div style={{ marginTop: 6, marginBottom: 10 }}><Tag color={C.ember}>{exp.client}</Tag></div>}<div style={{ marginTop: 10 }}>{exp.bullets.map(function(b, j) { return (<div key={j} style={{ display: "flex", gap: 8, marginBottom: 6 }}><span style={{ color: C.ember, fontSize: 5, marginTop: 6, flexShrink: 0 }}>{"\u25cf"}</span><span style={{ fontSize: 12.5, color: C.textMid, lineHeight: 1.6, fontFamily: "'Sora', sans-serif" }}>{b}</span></div>); })}</div></Card></div></FI>); })}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
      <FI d={200}><div><h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, fontWeight: 400, color: C.ink, margin: "0 0 12px" }}>Education</h3>{education.map(function(e, i) { return (<Card key={i} style={{ padding: "14px 16px", marginBottom: 10 }}><div style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: "'Sora', sans-serif" }}>{e.degree}</div><div style={{ fontSize: 11.5, color: C.coolBlue, fontWeight: 500, marginTop: 3 }}>{e.school}</div><div style={{ fontSize: 10.5, color: C.textLight, marginTop: 2 }}>{e.date}</div></Card>); })}</div></FI>
      <FI d={260}><div><h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, fontWeight: 400, color: C.ink, margin: "0 0 12px" }}>Core Skills</h3><Card style={{ padding: "16px" }}>{Object.entries(skills).map(function(en, i) { return (<div key={i} style={{ marginBottom: i < Object.keys(skills).length - 1 ? 12 : 0 }}><div style={{ fontSize: 9.5, fontWeight: 700, color: C.coolBlue, letterSpacing: 0.7, marginBottom: 5, fontFamily: "'Sora', sans-serif" }}>{en[0].toUpperCase()}</div><div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>{en[1].map(function(sk, j) { return <span key={j} style={{ display: "inline-block", fontSize: 10.5, background: C.cloud, color: C.textMid, padding: "3px 8px", borderRadius: 3, fontWeight: 500, border: "1px solid " + C.borderLight }}>{sk}</span>; })}</div></div>); })}</Card></div></FI>
    </div>
  </div>);
}

function Footer() {
  return (<div style={{ background: C.ink, padding: "24px", marginTop: 32 }}><div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}><div><div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 16, color: "#fff" }}>Harshitha Babu Reddy</div><div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.38)", marginTop: 3, fontFamily: "'Sora', sans-serif" }}>{"Business Analyst \u00b7 Jersey City, NJ"}</div></div><div style={{ display: "flex", gap: 18, fontFamily: "'Sora', sans-serif" }}><span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.38)" }}>{profile.email}</span><span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.38)" }}>{profile.phone}</span><span style={{ fontSize: 10.5, color: C.skyMist, cursor: "pointer" }}>{"LinkedIn \u2197"}</span></div></div></div>);
}

export default function Portfolio() {
  var ps = useState("Home"); var ss = useState(null);
  function setPage(pg, idx) { if (idx !== undefined) ss[1](idx); ps[1](pg); }
  useEffect(function() { try { window.scrollTo({ top: 0 }); } catch(e) {} }, [ps[0]]);
  return (<div style={{ background: C.cloudLight, minHeight: "100vh", fontFamily: "'Sora', sans-serif", color: C.text }}>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
    <Nav active={ps[0]} set={setPage} />
    {ps[0] === "Home" && <HomePage set={setPage} />}
    {ps[0] === "Case Studies" && <CasePage initialStudy={ss[0]} />}
    {ps[0] === "Artifacts" && <ArtifactPage />}
    {ps[0] === "How I Work" && <MethodPage />}
    {ps[0] === "Experience" && <ExpPage />}
    <Footer />
  </div>);
}
