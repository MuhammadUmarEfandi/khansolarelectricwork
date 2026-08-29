import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Youtube } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICE_AREAS } from "./data";
import { Logo } from "./Navigation";

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  city: z.string().trim().min(2, "Please enter your city").max(60),
  bill: z.string().trim().max(20).optional(),
  message: z.string().trim().max(1000, "Message must be under 1000 characters").optional(),
});

const FIELD_BASE =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const result = quoteSchema.safeParse(data);

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    form.reset();
    toast.success("Quote request received — our team will call you within one business day.");
  }

  return (
    <section id="contact" className="bg-background py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Get your free solar quote</h2>
          <p className="mt-4 text-muted-foreground">
            Share a few details and our engineers will prepare a custom design and quotation for your
            site — free of charge.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">Office Address</p>
                <a
                  href={COMPANY.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {COMPANY.address}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">Phone</p>
                <div className="flex flex-wrap gap-x-3 text-sm text-muted-foreground">
                  {COMPANY.phones.map((p) => (
                    <a key={p.tel} href={p.wa} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {COMPANY.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">Operating Hours</p>
                <p className="text-sm text-muted-foreground">{COMPANY.hours}</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-surface p-7 shadow-card sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="text-sm font-semibold">
                Full Name
              </label>
              <input id="name" name="name" className={FIELD_BASE} placeholder="Ahmed Raza" required maxLength={100} />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={FIELD_BASE}
                placeholder="+92 3XX XXXX XXX"
                required
                maxLength={20}
              />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="city" className="text-sm font-semibold">
                City
              </label>
              <input id="city" name="city" className={FIELD_BASE} placeholder="Gujranwala" required maxLength={60} />
              {errors.city && <p className="mt-1 text-xs text-destructive">{errors.city}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bill" className="text-sm font-semibold">
                Monthly Electricity Bill (PKR)
              </label>
              <input id="bill" name="bill" inputMode="numeric" className={FIELD_BASE} placeholder="45,000" maxLength={20} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={1000}
                className={FIELD_BASE}
                placeholder="Tell us about your roof, load or tube well requirements."
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            Submit Quote Request
          </button>
        </form>
      </div>
    </section>
  );
}

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: COMPANY.facebook },
  { icon: Youtube, label: "YouTube", href: COMPANY.youtube },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="section-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="[&_span]:text-navy-foreground">
            <Logo />
          </div>
          <p className="mt-4 text-sm text-navy-muted">
            H & A ENERGY SERVICES designs, installs and maintains tier-1 solar power systems for homes,
            farms and industries across Punjab.
          </p>
          <div className="mt-5 flex gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-lg border border-navy-foreground/20 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <social.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-display text-base font-bold">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-navy-muted hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-base font-bold">Service Areas</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-navy-muted">
            {SERVICE_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-muted">
            <li>
              <a
                href={COMPANY.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {COMPANY.address}
              </a>
            </li>
            {COMPANY.phones.map((p) => (
              <li key={p.tel}>
                <a href={p.wa} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-accent">
                {COMPANY.email}
              </a>
            </li>
            <li>{COMPANY.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15 py-6">
        <p className="section-shell text-center text-sm text-navy-muted">
          © 2026 H & A Energy Services — Made With ❤️ Zunfiy Tech Inc
        </p>
      </div>
    </footer>
  );
}
