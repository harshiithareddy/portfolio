import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { StudioScene } from "@/components/Mascots";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "About · Harshitha Reddy",
  description:
    "Industrial engineer turned business analyst. The journey, the weekend builds, and the studio where it happens.",
};

function Block({
  kicker,
  children,
}: {
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="border-t border-line pt-10">
        <p className="kicker">{kicker}</p>
        <div className="mt-5 max-w-[620px]">{children}</div>
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1120px] px-6 pb-24 pt-16">
        <Reveal>
          <p className="kicker">about me</p>
          <h1
            className="mt-4 max-w-[620px] font-display text-[38px] font-extrabold leading-[1.08] text-ink md:text-[46px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Analyst by title,
            <br />
            builder by habit.
          </h1>
          <p className="mt-8 max-w-[620px] text-[16px] leading-relaxed text-ink">
            I write the requirements, draw the workflows, define the rules, and
            test what ships. On weekends I build things myself, because the best
            way to talk to engineers is to be one occasionally.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <StudioScene width={560} />
            <p className="mt-2 font-mono text-[10px] lowercase text-faint">
              the studio: one desk, one shelf
            </p>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-12">
          <Block kicker="the journey">
            <p className="text-[15px] leading-relaxed text-muted">
              I started in industrial engineering, learning to see factories as
              flows: inputs, bottlenecks, handoffs, waste. My earliest projects
              were production lines and inventory systems, but the lesson stayed
              the same: if you can map the process, you can improve it.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              At Infosys I spent about three years mapping how money, documents,
              approvals, and identities moved through complex systems. Those maps
              became requirements engineers could confidently build from.
              Somewhere along the way I stopped only designing systems and
              started building them too.
            </p>
          </Block>

          <Block kicker="education">
            <div className="flex flex-col gap-5">
              <div>
                <p
                  className="font-display text-[17px] font-bold text-ink"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  M.S. Engineering Management
                </p>
                <p className="mt-1 font-mono text-[11px] lowercase text-faint">
                  new jersey institute of technology
                </p>
              </div>
              <div>
                <p
                  className="font-display text-[17px] font-bold text-ink"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  B.E. Industrial Engineering and Management
                </p>
                <p className="mt-1 font-mono text-[11px] lowercase text-faint">
                  bms college of engineering
                </p>
              </div>
            </div>
          </Block>

          <Block kicker="off the clock">
            <p className="text-[15px] leading-relaxed text-muted">
              Most weekends I&apos;m building something. PeriWise came out of
              the SheBuilds hackathon weekend. RealPort came out of another, built with a
              team of three for the Hack-Nation × RealPage challenge to rethink
              how renters navigate affordable housing. Even this portfolio
              started as a weekend project that refused to stay small.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Away from the keyboard, I&apos;m usually trying out new
              restaurants in New York City, holding a yoga pose, meditating,
              or spending time with friends and family.
            </p>
          </Block>

          <Block kicker="this site">
            <p className="text-[15px] leading-relaxed text-muted">
              This portfolio was designed and built by me using Next.js, Tailwind
              CSS, Framer Motion, and Claude Code as a dev partner.{" "}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-q"
              >
                The source is on GitHub
              </a>
              .
            </p>
          </Block>
        </div>
      </main>
      <Footer />
    </>
  );
}
