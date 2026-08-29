import { Phone, Calculator, TrendingDown, Award, Zap, Users, BatteryCharging } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import { COMPANY } from "./data";

const STATS = [
  { icon: Award, value: "10+", label: "Years Industry Experience" },
  { icon: Zap, value: "500+", label: "Solar Systems Installed" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
  { icon: BatteryCharging, value: "25MW+", label: "Clean Energy Generated" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy">
      <img
        src={heroImage}
        alt="H & A Energy Services technicians installing rooftop solar panels in Punjab"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="section-shell relative grid gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div className="max-w-2xl text-navy-foreground">
          <span className="eyebrow border-accent/40 bg-accent/15 text-accent">
             SOLAR EXPERTS IN KARACHI DEVISION
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
             Power Your Future with Khan Solar & Electronics Work&nbsp;
          </h1>
          <p className="mt-5 max-w-xl text-base text-navy-muted sm:text-lg">
            Clean, Reliable, and Cost-Effective Solar Power Solutions for Homes, Agriculture, and
             Industries in Karachi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#calculator"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Calculator className="h-5 w-5" aria-hidden="true" />
              Calculate Solar Savings
            </a>
            <a
              href={COMPANY.phones[0].wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-navy-foreground/40 px-6 py-3 font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Us Now
            </a>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <div className="w-full max-w-sm rounded-2xl border border-border/40 bg-card p-6 shadow-lift">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <TrendingDown className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-3xl font-bold text-primary">30%</p>
                <p className="text-sm text-muted-foreground">Energy Bill Reduction</p>
              </div>
            </div>
            <hr className="my-5" />
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Payback Period</dt>
                <dd className="font-semibold">2 – 3 Years</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Panel Warranty</dt>
                <dd className="font-semibold">25 Years</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Installation Time</dt>
                <dd className="font-semibold">7 Days</dd>
              </div>
            </dl>
            <a
              href="#contact"
              className="mt-6 block rounded-full bg-accent px-5 py-3 text-center font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Book Free Site Survey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section aria-label="Company metrics" className="border-b border-border bg-surface">
      <div className="section-shell grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <stat.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
