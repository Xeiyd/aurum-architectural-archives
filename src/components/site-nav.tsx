import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Properties", href: "#collection" },
  { label: "About", href: "#story" },
  { label: "Contact", href: "#consultation" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-700 ease-[var(--ease-quiet)]",
        scrolled
          ? "border-b border-border/60 bg-background/85 py-4 backdrop-blur-xl"
          : "border-b border-transparent py-6 md:py-8",
      )}
    >
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 md:grid-cols-3 md:px-10">
        <a href="#top" className="min-w-0">
          <span className="display block text-xl leading-none tracking-[0.18em] md:text-2xl">
            AURUM
          </span>
          <span className="eyebrow mt-1 block text-[0.6rem] tracking-[0.34em]">Estates</span>
        </a>

        <nav className="hidden justify-center gap-10 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative text-[0.8125rem] tracking-wide text-foreground/80 transition-colors duration-500 hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-700 ease-[var(--ease-quiet)] group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <a
            href="#consultation"
            className="rounded-xl border border-foreground/25 px-4 py-2.5 text-[0.6875rem] uppercase tracking-[0.18em] text-foreground transition-all duration-500 ease-[var(--ease-quiet)] hover:border-terracotta hover:bg-terracotta hover:text-primary-foreground md:px-6"
          >
            <span className="hidden sm:inline">Book Private </span>Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
