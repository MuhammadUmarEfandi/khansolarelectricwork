import { useState } from "react";
import { Check, Star } from "lucide-react";
import residential from "@/assets/project-residential.jpg";
import industrial from "@/assets/project-industrial.jpg";
import agriculture from "@/assets/project-agriculture.jpg";

const INCLUDES = [
  "Tier-1 A-grade Panels",
  "Hybrid Inverter",
  "Mounting Structure",
  "Standard Wiring & Protection",
  "Professional Installation",
  "Net-Metering Approval",
];

const PACKAGES = [
  { size: "5 kW", tag: "Home Starter", detail: "Ideal for homes with a PKR 25,000 – 45,000 bill." },
  { size: "10 kW", tag: "Most Popular", detail: "Best for large homes and small commercial setups.", featured: true },
  { size: "15 / 20 kW", tag: "Business & Farm", detail: "For factories, plazas and agricultural tube wells." },
];

const PROJECTS = [
  { title: "7 kW Hybrid Home System", place: "Nazimabad, Karachi", category: "Residential", image: residential },
  { title: "120 kW Factory Solarization", place: "Clifton, Karachi", category: "Industrial", image: industrial },
  { title: "15 kW Solar Tube Well", place: "Defence, Karachi", category: "Agricultural", image: agriculture },
  { title: "10 kW On-Grid Rooftop", place: "Saddar, Karachi", category: "Residential", image: residential },
  { title: "50 kW Commercial Plaza", place: "Gulshan-e-Iqbal, Karachi", category: "Industrial", image: industrial },
  { title: "10 kW Farm Pump System", place: "Gujranwala", category: "Agricultural", image: agriculture },
];

const FILTERS = ["All", "Residential", "Industrial", "Agricultural"] as const;

const REVIEWS = [
  {
    name: "Muhammad Asif",
    place: "Gujranwala",
    quote:
      "H & A Energy Services installed our 10kW hybrid system in under a week. Our bill dropped from PKR 48,000 to almost nothing after net metering.",
  },
  {
    name: "Rana Waqas",
    place: "Nowshera Virkan",
    quote:
      "Our solar tube well has replaced diesel completely. The team surveyed the field properly and sized the pump exactly right.",
  },
  {
    name: "Hafiz Bilal",
    place: "Wazirabad",
    quote:
      "Professional engineering and honest pricing for our factory rooftop. After-sales support is genuinely 24/7.",
  },
];

export function Packages() {
  return (
    <section id="packages" className="bg-surface py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Packages</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Popular Solar Packages</h2>
          <p className="mt-4 text-muted-foreground">
            Complete turnkey systems. Final pricing depends on structure type, brand selection and
            site conditions.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.size}
              className={`card-lift flex flex-col rounded-2xl border p-8 shadow-card ${
                pkg.featured
                  ? "border-primary bg-navy text-navy-foreground"
                  : "border-border bg-card"
              }`}
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                  pkg.featured ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                }`}
              >
                {pkg.tag}
              </span>
              <h3 className="mt-5 font-display text-3xl font-bold">{pkg.size} System</h3>
              <p
                className={`mt-2 text-sm ${pkg.featured ? "text-navy-muted" : "text-muted-foreground"}`}
              >
                {pkg.detail}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.featured ? "text-accent" : "text-primary"}`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5 ${
                  pkg.featured
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Inquire Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="bg-background py-20">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Portfolio</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors ${
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.title + project.place}
              className="card-lift overflow-hidden rounded-2xl border border-border bg-card shadow-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} in ${project.place}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold">{project.title}</h3>
                 <p className="mt-1 text-sm text-muted-foreground">{project.place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-surface py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Reviews</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What our clients say</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-muted-foreground">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <span className="block font-semibold">{review.name}</span>
                <span className="text-sm text-muted-foreground">{review.place}, Punjab</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
