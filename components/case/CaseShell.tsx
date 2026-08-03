import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CaseShell({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1120px] px-6 pb-24">
        <div className="max-w-[680px] pt-16">
          <Link href="/work" className="link-q text-[13px]">
            Back to work
          </Link>
          <p className="kicker mt-8">{kicker}</p>
          <h1
            className="mt-4 font-display text-[38px] font-extrabold leading-[1.08] text-ink md:text-[46px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {title}
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">{intro}</p>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}

export function CaseSection({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 border-t border-line pt-12">
      <p className="kicker">{kicker}</p>
      {title && (
        <h2
          className="mt-3 max-w-[620px] font-display text-[26px] font-extrabold leading-tight text-ink"
          style={{ letterSpacing: "-0.025em" }}
        >
          {title}
        </h2>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
}
