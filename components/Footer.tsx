import { contact } from "@/lib/content";
import FooterMascot from "./FooterMascot";
import { Wordmark } from "./Nav";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-end justify-between gap-8 px-6 py-10">
        <div>
          <Wordmark />
          <p className="mt-3 text-[13px] text-muted">
            Designed and built by me.{" "}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-q"
            >
              Source on GitHub
            </a>
          </p>
          <p className="mt-1 font-mono text-[11px] lowercase text-faint">
            © 2026 harshitha reddy
          </p>
        </div>
        <FooterMascot />
      </div>
    </footer>
  );
}
