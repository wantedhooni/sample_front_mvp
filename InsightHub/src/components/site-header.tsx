import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/bookmarks", label: "Bookmarks" },
  { href: "/subscribe", label: "Subscribe" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-[rgba(245,239,230,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#111111] text-sm font-semibold tracking-[0.2em] text-[#f5efe6]">
            IH
          </div>
          <div>
            <p className="font-serif text-2xl leading-none tracking-[0.08em] text-[#171717]">
              InsightHub
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-[#715d4d]">
              Research Membership
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#4f443c] transition hover:text-[#111111]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:demo@insighthub.local"
            className="hidden text-sm text-[#4f443c] md:inline"
          >
            demo@insighthub.local
          </a>
          <Link
            href="/subscribe"
            className="rounded-full bg-[#171717] px-5 py-2.5 text-sm font-semibold text-[#f5efe6] transition hover:bg-[#2a2a2a]"
          >
            Start Trial
          </Link>
        </div>
      </div>
    </header>
  );
}
