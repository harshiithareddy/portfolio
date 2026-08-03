import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SearcherMascot } from "@/components/Mascots";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex max-w-[1120px] flex-col items-center px-6 py-28 text-center">
        <p className="kicker">error 404</p>
        <div className="mt-8">
          <SearcherMascot width={280} />
        </div>
        <p
          className="mt-8 font-display text-[26px] font-extrabold text-ink"
          style={{ letterSpacing: "-0.025em" }}
        >
          This page doesn&apos;t exist.
        </p>
        <p className="mt-2 text-[14px] text-muted">
          She checked everywhere. The zero is gone.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
        >
          Back home
        </Link>
      </main>
      <Footer />
    </>
  );
}
