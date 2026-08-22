import { createFileRoute, notFound, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { Reveal } from "@/components/reveal";
import { getProperty, properties } from "@/data/properties";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const property = getProperty(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Residence unavailable — Aurum Estates" }, { name: "robots", content: "noindex" }],
      };
    }
    const { name, place, tagline } = loaderData.property;
    const title = `${name}, ${place} — Aurum Estates`;
    return {
      meta: [
        { title },
        { name: "description", content: tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ResidenceNotFound,
  component: PropertyDetail,
});

function ResidenceNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-xl px-6 py-48 text-center">
        <p className="eyebrow">Not in the collection</p>
        <h1 className="display mt-8 text-[clamp(2rem,5vw,3rem)]">This residence is no longer offered</h1>
        <Link
          to="/"
          className="mt-12 inline-block rounded-xl border border-foreground/25 px-8 py-4 text-[0.6875rem] uppercase tracking-[0.2em] transition-colors duration-500 hover:border-terracotta hover:text-terracotta"
        >
          Return to the collection
        </Link>
      </main>
    </div>
  );
}

function PropertyDetail() {
  const { property } = Route.useLoaderData();
  const others = properties.filter((p) => p.slug !== property.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative h-[86vh] min-h-[560px] overflow-hidden">
          <img
            src={property.img}
            alt={`${property.name}, ${property.place}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-charcoal/30" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-24">
              <Reveal>
                <p className="eyebrow text-ivory/70">{property.place}</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="display mt-6 text-[clamp(2.5rem,6vw,4.5rem)] text-ivory">
                  {property.name}
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 max-w-xl font-serif text-lg italic text-ivory/80">
                  {property.tagline}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Overview & facts ─────────────────────────────── */}
        <section className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-36">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">The Residence</p>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-8 text-[1.05rem] leading-[1.95] text-muted-foreground">
                  {property.intro}
                </p>
              </Reveal>
            </div>
            <Reveal delay={160} className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-y-8 border-t border-border pt-8 text-sm">
                {property.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow">{k}</dt>
                    <dd className="mt-2 font-serif text-lg">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── Amenities ────────────────────────────────────── */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-36">
            <Reveal className="max-w-lg">
              <p className="eyebrow">Amenities</p>
              <h2 className="display mt-6 text-[clamp(1.85rem,3.6vw,2.75rem)]">
                Considered <span className="italic text-foreground/70">in every detail</span>
              </h2>
            </Reveal>
            <ul className="mt-16 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {property.amenities.map((a, i) => (
                <Reveal as="li" key={a} delay={i * 60}>
                  <div className="flex items-baseline gap-4 border-b border-border/70 pb-5">
                    <span className="h-px w-6 shrink-0 translate-y-[-0.35rem] bg-accent" />
                    <span className="text-[0.95rem] leading-relaxed">{a}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Layout ───────────────────────────────────────── */}
        <section className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-36">
          <Reveal className="max-w-lg">
            <p className="eyebrow">Layout</p>
            <h2 className="display mt-6 text-[clamp(1.85rem,3.6vw,2.75rem)]">
              Arranged <span className="italic text-foreground/70">level by level</span>
            </h2>
          </Reveal>

          <div className="mt-14 border-t border-border">
            {property.layout.map((row, i) => (
              <Reveal key={row.level} delay={i * 90}>
                <div className="grid gap-2 border-b border-border py-7 md:grid-cols-[220px_1fr] md:gap-10">
                  <p className="font-serif text-xl">{row.level}</p>
                  <p className="text-[0.95rem] leading-[1.9] text-muted-foreground">{row.rooms}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Gallery ──────────────────────────────────────── */}
        <section className="mx-auto max-w-[1320px] px-6 pb-24 md:px-10 md:pb-36">
          <Reveal className="max-w-lg">
            <p className="eyebrow">Gallery</p>
            <h2 className="display mt-6 text-[clamp(1.85rem,3.6vw,2.75rem)]">
              A closer <span className="italic text-foreground/70">reading</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
            {property.gallery.map((g, i) => (
              <Reveal
                variant="image"
                key={`${g.src}-${i}`}
                delay={(i % 2) * 120}
                className={i % 3 === 0 ? "md:col-span-2" : undefined}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full rounded-3xl object-cover ${
                    i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                  }`}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Enquiry ──────────────────────────────────────── */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-2xl px-6 py-28 text-center md:py-40">
            <Reveal>
              <p className="eyebrow">By Appointment</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display mt-8 text-[clamp(2rem,4.5vw,3.25rem)]">
                Arrange a viewing of
                <span className="block italic text-foreground/70">{property.name}</span>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <a
                href={`mailto:private@aurumestates.com?subject=${encodeURIComponent(`Private viewing — ${property.name}`)}`}
                className="mt-12 inline-block rounded-xl bg-primary px-10 py-4 text-[0.6875rem] uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 ease-[var(--ease-quiet)] hover:-translate-y-0.5 hover:bg-terracotta"
              >
                Enquire privately
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── Other residences ─────────────────────────────── */}
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 md:py-28">
            <p className="eyebrow">Also in the collection</p>
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/properties/$slug"
                  params={{ slug: o.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-3xl bg-muted">
                    <img
                      src={o.img}
                      alt={`${o.name}, ${o.place}`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-quiet)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="px-1 pt-6">
                    <p className="eyebrow">{o.place}</p>
                    <h3 className="display mt-3 text-2xl">{o.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-6 px-6 py-12 md:px-10">
          <Link to="/">
            <span className="display block text-lg tracking-[0.18em]">AURUM</span>
            <span className="eyebrow mt-1 block text-[0.6rem] tracking-[0.34em]">Estates</span>
          </Link>
          <p className="text-xs tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} Aurum Estates
          </p>
        </div>
      </footer>
    </div>
  );
}
