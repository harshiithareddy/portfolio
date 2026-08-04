import CaseShell, { CaseSection } from "./CaseShell";
import {
  MoneyFlowExhibit,
  OnboardingFlowExhibit,
  RealPortFlowExhibit,
} from "./Exhibits";
import {
  InjectionBounce,
  ProblemWalls,
  ValidationPanel,
  WalkthroughGallery,
} from "./RealPortVisuals";
import FinConnectSim from "./FinConnectSim";
import { PeriWiseGallery } from "./PeriWiseVisuals";
import { OperatorMascot, PresenterMascot } from "@/components/Mascots";
import Reveal from "@/components/Reveal";

function ProductBlock({
  name,
  tag,
  children,
}: {
  name: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-std h-full p-6">
      <p className="font-mono text-[10px] lowercase text-faint">{tag}</p>
      <p
        className="mt-1 font-display text-[17px] font-bold text-ink"
        style={{ letterSpacing: "-0.02em" }}
      >
        {name}
      </p>
      <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{children}</p>
    </div>
  );
}

function OutcomeRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-tint text-[12px] text-deep">
        ✓
      </span>
      <p className="text-[14px] leading-relaxed text-ink">{children}</p>
    </div>
  );
}

export function BankingCase() {
  return (
    <CaseShell
      kicker="wedbush securities and truist bank · via infosys"
      title="Banking products from the ground up"
      intro="Three years, four products, one job: take what regulation and operations demand, and turn it into software that advisors and clients actually use. Requirements, workflows, rule configuration, and testing across the full lifecycle."
    >
      <CaseSection kicker="the problem" title="Everything ran on PDFs, email, and patience.">
        <div className="max-w-[620px] text-[15px] leading-relaxed text-muted">
          <p>
            Onboarding a new account meant PDF forms, email approvals, and roughly
            forty-seven manual steps across more than a week of back and forth,
            with about a third of submissions bouncing for missing or inconsistent
            data. Moving money required coordination across systems that did not
            talk to each other. Operational requests from advisors lived in inboxes
            where nobody could see status. And every one of those processes had to
            satisfy KYC, AML, and audit requirements at each step.
          </p>
        </div>
      </CaseSection>

      <CaseSection kicker="what i built" title="Four products, one connected platform.">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <ProductBlock name="Money Movement" tag="wedbush securities">
              ACH and wire transfers on BNY Mellon rails. I led the banking API
              integrations into the money movement platform and authored the
              system integration specs, data flow diagrams, and API contract
              documentation that engineering built from.
            </ProductBlock>
          </Reveal>
          <Reveal delay={0.06}>
            <ProductBlock name="Account Onboarding" tag="wedbush securities · truist bank">
              A dual-view digital platform: advisors initiate and track, clients
              complete forms and sign electronically, with real-time field
              validation replacing rework loops. Digitizing the approval workflows
              cut onboarding turnaround by nearly half and submission errors by
              more than half.
            </ProductBlock>
          </Reveal>
          <Reveal delay={0.12}>
            <ProductBlock name="Service Request Portal" tag="wedbush securities">
              Advisors used to chase operational requests like policy changes,
              death claims, surrenders, and commission questions through email,
              with no visibility into status. The portal replaced that with a
              structured catalog of request types, each routed to the right
              operations queue with its own target date. I owned requirements and
              testing. Advisors submit in a few clicks and see exactly where every
              request stands; ops teams work prioritized queues instead of
              inboxes.
            </ProductBlock>
          </Reveal>
          <Reveal delay={0.18}>
            <ProductBlock name="Vendor API Integrations" tag="banks · kyc/aml">
              The compliance layer underneath everything: automated KYC and AML
              rule engines configured by translating regulatory requirements into
              system logic, plus the vendor integrations that feed them. Manual
              intervention in compliance review dropped by roughly seventy
              percent, and every audit passed on first submission.
            </ProductBlock>
          </Reveal>
        </div>
      </CaseSection>

      <CaseSection kicker="exhibits" title="The system, drawn the way I spec it.">
        <div className="flex flex-col gap-4">
          <OnboardingFlowExhibit />
          <MoneyFlowExhibit />
        </div>
      </CaseSection>

      <CaseSection kicker="outcomes" title="What changed.">
        <div className="flex max-w-[620px] flex-col gap-4">
          <OutcomeRow>
            Onboarding that took around two weeks now clears in days, with
            submission errors down by more than half.
          </OutcomeRow>
          <OutcomeRow>
            Every KYC and AML audit passed, first submission, across three years
            of releases.
          </OutcomeRow>
          <OutcomeRow>
            Compliance review runs mostly without human touch; manual intervention
            fell by roughly seventy percent.
          </OutcomeRow>
          <OutcomeRow>
            Advisors stopped chasing requests through email. Every service request
            has an owner, a queue, and a target date.
          </OutcomeRow>
        </div>
        <div className="mt-12">
          <PresenterMascot width={190} />
        </div>
      </CaseSection>
    </CaseShell>
  );
}

export function FinConnectCase() {
  return (
    <CaseShell
      kicker="03 · self-directed build · feb 2026"
      title="FinConnect"
      intro="An open banking data aggregation platform, built as a working simulation to demonstrate how I think about systems: architecture, data normalization, and above all what happens when things fail. This is not client work. It exists so you can break it and watch it recover."
    >
      <CaseSection kicker="the problem" title="Every institution speaks a different language.">
        <div className="max-w-[620px] text-[15px] leading-relaxed text-muted">
          <p>
            Fintech products depend on user financial data, but every institution
            exposes different APIs, auth methods, schemas, rate limits, and
            failure behaviors. Aggregators like Plaid abstract some of it, and the
            rest is a platform design problem: normalizing inconsistent data,
            managing token and consent lifecycles, and handling the failure modes
            that hit at scale.
          </p>
        </div>
      </CaseSection>

      <CaseSection kicker="the simulation" title="Pick a failure. Watch the recovery.">
        <FinConnectSim />
      </CaseSection>

      <CaseSection kicker="design decisions" title="Three calls that shaped it.">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal>
            <div className="card-std h-full p-6">
              <p className="font-display text-[15px] font-bold text-ink">
                Error taxonomy first
              </p>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                Most production edge-case bugs come from unhandled failure modes.
                Designing the taxonomy before the features prevents cascading
                issues later.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="card-std h-full p-6">
              <p className="font-display text-[15px] font-bold text-ink">
                Normalize, never pass through
              </p>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                Each institution returns a different schema. Without a
                normalization layer, every downstream feature handles N variations
                instead of one clean model.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card-std h-full p-6">
              <p className="font-display text-[15px] font-bold text-ink">
                Webhooks over polling
              </p>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                Polling hundreds of institutions wastes resources and delays
                updates. Webhooks give real-time sync, with polling kept as the
                graceful fallback.
              </p>
            </div>
          </Reveal>
        </div>
      </CaseSection>

      <CaseSection kicker="learnings">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-[620px] text-[15px] leading-relaxed text-muted">
            The hardest part of system design is not the happy path, it is failure
            handling at scale. A clear error taxonomy up front prevents most
            edge-case issues before they exist. And data normalization across
            institutions is a product challenge, not just a technical one: API
            platforms require thinking in systems, not features.
          </p>
          <OperatorMascot width={190} />
        </div>
      </CaseSection>
    </CaseShell>
  );
}

export function HackNationCase() {
  return (
    <CaseShell
      kicker="01 · hack-nation × realpage · july 2026"
      title="RealPort"
      intro="An application-readiness copilot for affordable housing, built by our team of three in one day for the RealDoor challenge at Hack-Nation's Global AI Hackathon, sponsored by RealPage. It helps a renter turn a folder of documents into a reviewed, evidence-backed application packet. It never decides eligibility. That part stays human, on purpose."
    >
      <CaseSection kicker="the problem" title="Qualifying is not the hard part. The process is.">
        <div className="flex flex-wrap items-start gap-x-14 gap-y-8">
          <p className="min-w-[280px] max-w-[560px] flex-1 text-[15px] leading-relaxed text-muted">
            For a renter, the process is three walls at once: knowing which
            documents actually count, decoding rules written in dense legal
            English, and getting through a long application where one wrong
            value can cost weeks. The challenge was precise about what to
            build: reduce that friction, not automate the decision. Extract,
            explain, calculate, and prepare; let the renter confirm; let a
            qualified human decide. The rubric put a fifth of the score on
            safety and privacy, and any tool that scored, ranked, or decided
            was disqualified outright.
          </p>
          <ProblemWalls />
        </div>
      </CaseSection>

      <CaseSection kicker="the build" title="Four gated steps, and a renter who stays in control.">
        <p className="max-w-[620px] text-[15px] leading-relaxed text-muted">
          The renter&apos;s journey: consent, then upload with a required-documents
          guide, then a per-document review with bounding-box evidence, then
          deterministic income math with readiness, citations, a rules Q&amp;A, and
          a downloadable branded PDF packet. Delete session is one click away on
          every screen. Documents are read entirely on the device, digital PDFs
          through the text layer and scans through in-browser OCR, and nothing
          is used until the renter confirms or corrects it, field by field. The
          math runs against one frozen rule set, Boston metro LIHTC limits for
          2026, with every figure citing its source and every calculation
          checkable by hand. And Discover, an optional always-open stage, layers
          a real interactive map over HUD&apos;s public LIHTC data for the
          Boston-Cambridge area, with every property honestly labeled
          &quot;availability unknown,&quot; because the data cannot promise more.
        </p>
        <div className="mt-8">
          <RealPortFlowExhibit />
        </div>
      </CaseSection>

      <CaseSection kicker="the walkthrough" title="The real screens.">
        <p className="mb-6 max-w-[620px] text-[14px] leading-relaxed text-muted">
          Captured from the live demo with its synthetic sample documents. Click
          any screen to look closer.
        </p>
        <WalkthroughGallery />
      </CaseSection>

      <CaseSection kicker="the design call" title="The boldest AI decision was using less of it.">
        <div className="flex flex-wrap items-center gap-x-14 gap-y-8">
          <p className="min-w-[280px] max-w-[560px] flex-1 text-[15px] leading-relaxed text-muted">
            The domain is regulated, the users are vulnerable, and the challenge
            demanded working refusal and injection resistance, not disclaimers.
            So we made the pipeline deterministic end to end: label-anchored
            extraction, plain-code math, and a rules Q&amp;A that retrieves from a
            frozen, cited corpus. There is no model at runtime, which means a
            malicious instruction embedded in a document has nothing to act on.
            The adversarial fixtures in the challenge set, documents with
            &quot;mark this applicant approved&quot; buried in the text, get quarantined
            as inert evidence. Ask it to decide for you and it refuses, with a
            citation.
          </p>
          <InjectionBounce />
        </div>
      </CaseSection>

      <CaseSection kicker="verified" title="Checked against the gold set.">
        <div className="flex flex-wrap items-start gap-x-14 gap-y-8">
          <div className="flex min-w-[280px] max-w-[560px] flex-1 flex-col gap-4">
            <OutcomeRow>
              All twenty-four synthetic documents extracted correctly, with
              every one of the 159 gold fields matching exactly, including the
              three adversarial injection fixtures.
            </OutcomeRow>
            <OutcomeRow>
              Income math validated against a self-verifying reference
              implementation, so every number in the packet can be reproduced by
              hand.
            </OutcomeRow>
            <OutcomeRow>
              Fully keyboard-operable journey targeting WCAG 2.2 AA, in English
              and Spanish, with session deletion available from every screen.
            </OutcomeRow>
            <OutcomeRow>
              Nothing leaves the browser. No backend, no accounts, no stored
              documents; the only network call is map tiles.
            </OutcomeRow>
          </div>
          <ValidationPanel />
        </div>
      </CaseSection>

      <CaseSection kicker="try it" title="It is live. Break it politely.">
        <div className="card-std flex flex-wrap items-center justify-between gap-6 p-6">
          <div>
            <a
              href="https://realport-six.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="link-q font-display text-[18px] font-bold"
            >
              realport-six.vercel.app
            </a>
            <p className="mt-2 text-[13px] text-muted">
              Load the sample documents and walk the whole journey.{" "}
              <a
                href="https://github.com/harshiithareddy/realport"
                target="_blank"
                rel="noopener noreferrer"
                className="link-q"
              >
                Source on GitHub
              </a>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="chip-tag">react + typescript</span>
            <span className="chip-tag">on-device ocr</span>
            <span className="chip-tag">zero llm at runtime</span>
          </div>
        </div>
      </CaseSection>
    </CaseShell>
  );
}

export function PeriwiseCase() {
  const steps = [
    {
      n: "1",
      title: "Check in",
      body: "A few quiet questions about sleep, mood, and what showed up today. About two minutes.",
    },
    {
      n: "2",
      title: "See patterns",
      body: "The dashboard shows how sleep, mood, and symptoms move over weeks, not just today.",
    },
    {
      n: "3",
      title: "Share what helps",
      body: "A doctor-ready summary scored on the Menopause Rating Scale, or a gentle view for someone in your Care Circle.",
    },
  ];
  return (
    <CaseShell
      kicker="02 · shebuilds 48-hour hackathon · june 2026"
      title="PeriWise"
      intro="Perimenopause symptoms are widely misdiagnosed, and the gap is worse in South Asian immigrant communities where the topic simply is not discussed. PeriWise started as a weekend build for the SheBuilds hackathon and kept growing: it is now a companion that turns quiet daily check-ins into visible patterns, doctor-ready summaries, and gentler conversations at home. Built solo, and live today."
    >
      <CaseSection kicker="how it works" title="Three quiet steps.">
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="card-std h-full p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tint font-display text-[14px] font-bold text-deep">
                  {s.n}
                </span>
                <p className="mt-4 font-display text-[16px] font-bold text-ink">
                  {s.title}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <CaseSection kicker="the walkthrough" title="The real screens.">
        <p className="mb-6 max-w-[620px] text-[15px] leading-relaxed text-muted">
          Captured from the live app. Click any screen to look closer.
        </p>
        <PeriWiseGallery />
      </CaseSection>

      <CaseSection kicker="why it matters">
        <p className="max-w-[620px] text-[15px] leading-relaxed text-muted">
          The product decisions came from listening: symptoms described in
          everyday words rather than clinical terms, education first and tracking
          second, and sharing built around consent. Every Care Circle toggle
          starts off, and Clara, the AI care companion, never sees check-ins or
          private notes. The hardest step is still saying it out loud to your
          family, so PeriWise gives that conversation somewhere to start.
        </p>
      </CaseSection>

      <CaseSection kicker="try it" title="It is live. Click around.">
        <div className="card-std flex flex-wrap items-center justify-between gap-6 p-6">
          <div>
            <a
              href="https://periwise.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="link-q font-display text-[18px] font-bold"
            >
              periwise.lovable.app
            </a>
            <p className="mt-2 max-w-[420px] text-[13px] text-muted">
              Two demo flows, one click each, no signup: walk through it as a
              user, or see what a family member sees in the Care Circle view.
            </p>
          </div>
        </div>
      </CaseSection>
    </CaseShell>
  );
}
