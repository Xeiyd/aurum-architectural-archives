import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { Reveal } from "@/components/reveal";
import { properties as collection } from "@/data/properties";
import heroImg from "@/assets/hero.jpg";
import featuredImg from "@/assets/featured.jpg";
import storyImg from "@/assets/story.jpg";
import galleryImg from "@/assets/gallery.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurum Estates — Extraordinary Homes for Extraordinary Lives" },
      {
        name: "description",
        content:
          "Aurum Estates represents a private collection of architecturally significant residences in the world's most considered locations. By appointment.",
      },
      { property: "og:title", content: "Aurum Estates — Extraordinary Homes" },
      {
        property: "og:description",
        content:
          "A private collection of architecturally significant residences. Quiet luxury, craftsmanship, and enduring design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const collection = [
  {
    img: p1,
    name: "Casa Lumen",
    place: "Costa Brava, Spain",
    detail: "5 Bedrooms · 890 sqm",
    price: "€14.2M",
  },
  {
    img: p2,
    name: "Cliff House",
    place: "Big Sur, California",
    detail: "4 Bedrooms · 720 sqm",
    price: "$21.5M",
  },
  {
    img: p3,
    name: "Villa Noir",
    place: "Ikoyi, Lagos",
    detail: "6 Bedrooms · 1,140 sqm",
    price: "₦2.4B",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteNav />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative grid min-h-screen grid-cols-1 lg:grid-cols-[40fr_60fr]">
          <div className="flex items-center px-6 pb-16 pt-36 md:px-14 lg:pb-24 lg:pt-32 xl:px-20">
            <div className="max-w-xl">
              <Reveal>
                <p className="eyebrow">Est. Private Collection</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="display mt-8 text-[clamp(2.75rem,7vw,4.75rem)]">
                  Extraordinary Homes
                  <span className="mt-2 block italic text-foreground/70">
                    Crafted for Extraordinary Lives
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-8 max-w-md text-[0.95rem] leading-[1.9] text-muted-foreground">
                  A quiet portfolio of architecturally significant residences, represented with
                  discretion for those who measure a home by its craft.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <a
                    href="#featured"
                    className="rounded-xl bg-primary px-8 py-4 text-[0.6875rem] uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 ease-[var(--ease-quiet)] hover:-translate-y-0.5 hover:bg-terracotta"
                  >
                    Explore Properties
                  </a>
                  <a
                    href="#consultation"
                    className="rounded-xl border border-foreground/25 px-8 py-4 text-[0.6875rem] uppercase tracking-[0.2em] transition-all duration-500 ease-[var(--ease-quiet)] hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
                  >
                    Book Consultation
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="relative min-h-[70vh] overflow-hidden lg:min-h-screen">
            <img
              src={heroImg}
              alt="Contemporary hillside villa with infinity pool at golden hour"
              width={1088}
              height={1440}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* ── Featured Residence ───────────────────────────── */}
        <section id="featured" className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-40">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:pt-10">
              <Reveal>
                <p className="eyebrow">Featured Residence</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display mt-8 text-[clamp(2.25rem,4.5vw,3.5rem)]">
                  The Belmont
                  <span className="block italic text-foreground/70">Residence</span>
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-8 max-w-sm text-[0.95rem] leading-[1.9] text-muted-foreground">
                  Set within four hectares of olive terraces, Belmont is a study in stone, glass and
                  restraint — drawn over three years with a single family in mind.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-border pt-8 text-sm sm:grid-cols-3 lg:grid-cols-2">
                  {[
                    ["Location", "Provence, France"],
                    ["Interior", "1,320 sqm"],
                    ["Bedrooms", "Seven"],
                    ["Guide Price", "€38,500,000"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="eyebrow">{k}</dt>
                      <dd className="mt-2 font-serif text-lg">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={300}>
                <a
                  href="#consultation"
                  className="group mt-12 inline-flex items-center gap-4 text-[0.6875rem] uppercase tracking-[0.2em] transition-colors duration-500 hover:text-terracotta"
                >
                  Arrange a private viewing
                  <span className="h-px w-10 bg-accent transition-all duration-700 ease-[var(--ease-quiet)] group-hover:w-16" />
                </a>
              </Reveal>
            </div>

            <Reveal variant="image" className="lg:col-span-7">
              <img
                src={featuredImg}
                alt="The Belmont Residence exterior at dusk, stone and glass with reflecting pool"
                width={1600}
                height={1104}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-3xl object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* ── Editorial Story ──────────────────────────────── */}
        <section id="story" className="border-y border-border bg-secondary/40">
          <div className="mx-auto grid max-w-[1320px] gap-14 px-6 py-28 md:px-10 md:py-40 lg:grid-cols-12 lg:gap-24">
            <Reveal variant="image" className="lg:col-span-5">
              <img
                src={storyImg}
                alt="Sunlight raking across a travertine wall beside a floating walnut staircase"
                width={1200}
                height={1504}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover"
              />
            </Reveal>

            <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
              <Reveal>
                <p className="eyebrow">Our Philosophy</p>
              </Reveal>
              <Reveal delay={120}>
                <p className="display mt-10 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.25]">
                  A house is measured in light, in silence, and in the way stone meets the hand.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-10 max-w-md text-[0.95rem] leading-[1.9] text-muted-foreground">
                  We represent fewer homes than we are offered. Each is visited, studied and
                  documented before it is spoken of — because the buildings worth keeping were never
                  built quickly.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Curated Collection ───────────────────────────── */}
        <section id="collection" className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-40">
          <Reveal className="max-w-lg">
            <p className="eyebrow">The Collection</p>
            <h2 className="display mt-6 text-[clamp(2rem,4vw,3rem)]">
              Three residences, <span className="italic text-foreground/70">currently offered</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {collection.map((item, i) => (
              <Reveal key={item.name} delay={i * 140}>
                <Link to="/properties/$slug" params={{ slug: item.slug }} className="group block">
                  <div className="overflow-hidden rounded-3xl bg-muted">
                    <img
                      src={item.img}
                      alt={`${item.name}, ${item.place}`}
                      width={1008}
                      height={1264}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-quiet)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="px-1 pt-7">
                    <p className="eyebrow">{item.place}</p>
                    <h3 className="display mt-3 text-2xl">{item.name}</h3>
                    <div className="mt-5 flex items-baseline justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                      <span>{item.detail}</span>
                      <span className="font-serif text-base text-foreground">{item.price}</span>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-terracotta">
                      View residence
                      <span className="h-px w-8 bg-accent transition-all duration-700 ease-[var(--ease-quiet)] group-hover:w-12" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

          </div>
        </section>

        {/* ── Lifestyle Gallery ────────────────────────────── */}
        <section aria-label="Lifestyle gallery" className="relative h-[80vh] overflow-hidden">
          <img
            src={galleryImg}
            alt="Travertine courtyard with a lit olive tree at dusk overlooking the sea"
            width={1920}
            height={1088}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </section>

        {/* ── Consultation ─────────────────────────────────── */}
        <section id="consultation" className="mx-auto max-w-2xl px-6 py-32 text-center md:py-48">
          <Reveal>
            <p className="eyebrow">By Appointment</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-8 text-[clamp(2.25rem,5vw,3.75rem)]">
              Begin a private
              <span className="block italic text-foreground/70">conversation</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <a
              href="mailto:private@aurumestates.com"
              className="mt-14 inline-block rounded-xl bg-primary px-10 py-4 text-[0.6875rem] uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 ease-[var(--ease-quiet)] hover:-translate-y-0.5 hover:bg-terracotta"
            >
              Book Consultation
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 md:grid-cols-[auto_1fr_auto] md:items-center md:px-10">
          <div>
            <span className="display block text-lg tracking-[0.18em]">AURUM</span>
            <span className="eyebrow mt-1 block text-[0.6rem] tracking-[0.34em]">Estates</span>
          </div>
          <nav className="flex flex-wrap gap-8 md:justify-center" aria-label="Footer">
            {["Properties", "About", "Contact"].map((l) => (
              <a
                key={l}
                href={l === "Properties" ? "#collection" : l === "About" ? "#story" : "#consultation"}
                className="text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </nav>
          <p className="text-xs tracking-wide text-muted-foreground md:text-right">
            © {new Date().getFullYear()} Aurum Estates
          </p>
        </div>
      </footer>
    </div>
  );
}
