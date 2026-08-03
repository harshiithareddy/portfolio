import Link from "next/link";

export function Wordmark({ size = 17 }: { size?: number }) {
  return (
    <span
      className="font-display font-extrabold text-ink"
      style={{ fontSize: size, letterSpacing: "-0.02em", lineHeight: 1 }}
    >
      hash<span className="text-accent">.</span>
    </span>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-6">
        <Link href="/" aria-label="hash, home">
          <Wordmark />
        </Link>
        <div className="flex items-center gap-7 text-[13px] text-muted">
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <Link href="/work" className="transition-colors hover:text-ink">
            Work
          </Link>
          <Link href="/about" className="transition-colors hover:text-ink">
            About
          </Link>
          <Link href="/chat" className="transition-colors hover:text-ink">
            Let&apos;s Chat
          </Link>
        </div>
      </nav>
    </header>
  );
}
