import {
  CheckCircle2,
  Home,
  Factory,
  Sprout,
  Gauge,
  Wrench,
  BatteryFull,
  PencilRuler,
  ShieldCheck,
  Timer,
  FileCheck2,
} from "lucide-react";

const HIGHLIGHTS = [
  "Tier-1 Panels",
  "Net-Metering Support",
  "25-Year Warranty",
  "24/7 After-Sales Support",
];

const SERVICES = [
  {
    icon: Home,
    title: "Residential Solar Solutions",
    text: "On-grid & hybrid systems designed for homes, with battery-ready configurations.",
  },
  {
    icon: Factory,
    title: "Commercial & Industrial Solar",
    text: "Heavy load solarization for factories, mills, warehouses and commercial plazas.",
  },
  {
    icon: Sprout,
    title: "Agricultural Solar Tube Wells",
    text: "Reliable solar water pump systems that cut diesel costs for farmers.",
  },
  {
    icon: Gauge,
    title: "Net-Metering Turnkey Services",
    text: "Complete WAPDA green meter documentation, approval and commissioning.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    text: "Panel cleaning, inverter diagnostics, performance audits and part replacement.",
  },
  {
    icon: BatteryFull,
    title: "Battery Storage Solutions",
    text: "Lithium-ion & tubular backup systems sized for uninterrupted power.",
  },
];

const WHY = [
  { icon: PencilRuler, title: "Custom Engineering & Design", text: "Every system is engineered around your load profile and roof structure." },
  { icon: ShieldCheck, title: "Tier-1 Certified Equipment Only", text: "IEC-certified panels and inverters from globally trusted manufacturers." },
  { icon: Timer, title: "Fast 7-Day Installation", text: "Committed timelines with a written installation warranty." },
  { icon: FileCheck2, title: "Hassle-Free Net-Metering", text: "We handle the paperwork end to end until your green meter is live." },
];

const PROCESS = [
  { step: "01", title: "Free Site Survey & Energy Audit", text: "We visit your site, study your bills and measure available roof or land area." },
  { step: "02", title: "Custom System Design & Quotation", text: "You receive a transparent design, generation estimate and itemised quote." },
  { step: "03", title: "Professional Installation & Testing", text: "Certified crews install, wire and stress-test your complete solar system." },
  { step: "04", title: "Net-Metering Grid Connection & Support", text: "We secure your green meter approval and stay on call for lifetime support." },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">About H & A Energy Services</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Leading the Green Energy Revolution in Wazirabad & Gujranwala
          </h2>
          <p className="mt-5 text-muted-foreground">
            H & A Energy Services is a trusted installer of tier-1 solar panels and inverter systems,
            serving homes, farms and factories across Punjab. From a single rooftop to a full
            industrial solarization plan, our in-house engineers design, install and maintain systems
            that pay for themselves in years — not decades.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
          <h3 className="font-display text-xl font-bold">Our Mission</h3>
          <p className="mt-3 text-muted-foreground">
            To make clean, affordable energy the default choice for every household, farmer and
            business in Punjab — with honest engineering, quality hardware and service that lasts
            beyond installation day.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-card p-5 shadow-card">
              <p className="font-display text-2xl font-bold text-primary">10000+</p>
              <p className="text-sm text-muted-foreground">Systems Installed</p>
            </div>
            <div className="rounded-xl bg-card p-5 shadow-card">
              <p className="font-display text-2xl font-bold text-primary">25 Yrs</p>
              <p className="text-sm text-muted-foreground">Performance warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-surface py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Complete solar solutions, end to end
          </h2>
          <p className="mt-4 text-muted-foreground">
            Design, supply, installation, net-metering and lifetime maintenance — all under one roof.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="card-lift rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="bg-navy py-20 text-navy-foreground">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow border-accent/40 bg-accent/15 text-accent">WHY H & A ENERGY SERVICES</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Why Choose H & A Energy Services?</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-navy-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-background py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Our 4-Step Installation Process</h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <li
              key={item.step}
              className="card-lift relative rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <span className="font-display text-4xl font-bold text-primary/25">{item.step}</span>
              <h3 className="mt-3 font-display text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
