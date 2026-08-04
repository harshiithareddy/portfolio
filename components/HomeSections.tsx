import Link from "next/link";
import {
  beliefs,
  certifications,
  contact,
  experience,
  skills,
  workCards,
} from "@/lib/content";
import Reveal from "./Reveal";
import { DeskScene, MailerMascot } from "./Mascots";

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <p className="kicker mb-4">{children}</p>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-10 font-display text-[30px] font-extrabold leading-tight text-ink md:text-[34px]"
      style={{ letterSpacing: "-0.025em" }}
    >
      {children}
    </h2>
  );
}

export function About() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-x-16 gap-y-10 px-6 py-24">
        <Reveal className="min-w-[280px] flex-1">
          <SectionKicker>about</SectionKicker>
          <div className="max-w-[620px]">
            <p className="text-[16px] leading-relaxed text-ink">
              I&apos;m an industrial engineer who became a consulting business
              analyst, which means I can&apos;t help seeing every process as a
              system that could work better. Over the past three years, I&apos;ve
              helped build banking products at Wedbush Securities and Truist
              Bank, translating complex business problems into software that
              customers and internal teams actually use.
            </p>
            <Link href="/about" className="link-q mt-6 inline-block text-[13px] font-medium">
              More about me
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <DeskScene width={330} />
        </Reveal>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <Reveal>
          <SectionKicker>certifications</SectionKicker>
          <SectionTitle>Certified where it counts.</SectionTitle>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-std card-hover flex h-full flex-col p-6"
              >
                <p
                  className="font-display text-[16px] font-bold leading-snug text-ink"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  {c.name}
                </p>
                <p className="mt-2 flex-1 font-mono text-[10.5px] lowercase text-faint">
                  {c.org} · {c.date}
                </p>
                <span className="link-q mt-4 text-[13px] font-medium">
                  View credential
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <Reveal>
          <SectionKicker>work</SectionKicker>
          <SectionTitle>Three builds that carry the story.</SectionTitle>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {workCards.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.08}>
              <Link
                href={`/work/${w.slug}`}
                className="card-std card-hover flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-faint">{w.index}</span>
                  {w.chip && <span className="chip-pill">{w.chip}</span>}
                </div>
                <p
                  className="mt-4 font-display text-[19px] font-bold leading-snug text-ink"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {w.title}
                </p>
                <p className="mt-1 font-mono text-[10.5px] lowercase text-faint">
                  {w.client}
                </p>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted">
                  {w.summary}
                </p>
                <span className="link-q mt-5 text-[13px] font-medium">
                  Read the case study
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowIWork() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <Reveal>
          <SectionKicker>how i work</SectionKicker>
          <SectionTitle>Three things I believe, with receipts.</SectionTitle>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {beliefs.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="card-std h-full p-6">
                <span className="font-mono text-[11px] text-faint">0{i + 1}</span>
                <p
                  className="mt-3 font-display text-[18px] font-bold text-ink"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {b.title}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                  {b.receipt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="mt-10 font-mono text-[11px] lowercase text-faint">
            discovery → solution design → build → uat → go-live → hypercare
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <Reveal>
          <SectionKicker>experience</SectionKicker>
          <SectionTitle>Where I&apos;ve worked.</SectionTitle>
        </Reveal>
        <div className="relative max-w-[680px] border-l border-line pl-8">
          {experience.map((e, i) => (
            <Reveal key={`${e.company}-${e.role}`} delay={i * 0.08}>
              <div className={i < experience.length - 1 ? "pb-12" : ""}>
                <span
                  className={`absolute -left-[5px] mt-1.5 h-[9px] w-[9px] rounded-full ${
                    i === 0 ? "bg-accent" : "bg-line"
                  }`}
                />
                <p className="font-mono text-[11px] lowercase text-deep">
                  {e.period}
                  {e.note && (
                    <span className="text-[10px] text-faint"> · {e.note}</span>
                  )}
                </p>
                <div className="mt-1 flex items-center justify-between gap-6">
                  <p
                    className="font-display text-[17px] font-bold text-ink"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {e.company}
                    <span className="font-body text-[14px] font-normal text-muted">
                      {" "}
                      · {e.role}
                    </span>
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.logo}
                    alt=""
                    aria-hidden="true"
                    className="shrink-0"
                    style={{ height: e.logoH, filter: "brightness(0)", opacity: e.logoOpacity ?? 0.55 }}
                  />
                </div>
                <p className="mt-2 max-w-[540px] text-[13.5px] leading-relaxed text-muted">
                  {e.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <Reveal>
          <SectionKicker>skills</SectionKicker>
          <SectionTitle>What I work with.</SectionTitle>
        </Reveal>
        <div className="flex flex-col gap-7">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.06}>
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline">
                <p className="w-[210px] shrink-0 font-mono text-[11px] lowercase text-faint">
                  {g.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-line bg-panel px-3 py-1.5 text-[12.5px] text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LetsChat() {
  return (
    <section id="chat" className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-10 px-6 py-24">
        <Reveal>
          <div>
            <p
              className="font-display text-[38px] font-extrabold text-ink md:text-[46px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Let&apos;s chat<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-[380px] text-[15px] leading-relaxed text-muted">
              About a role, a build, or anything in between.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13.5px]">
              <a
                href={`mailto:${contact.email}`}
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
              >
                {contact.email}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-q font-medium"
              >
                LinkedIn
              </a>
              <a
                href={contact.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="link-q font-medium"
              >
                Grab time on my calendar
              </a>
              <span className="font-mono text-[11px] text-faint">
                {contact.location}
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <MailerMascot width={210} />
        </Reveal>
      </div>
    </section>
  );
}
