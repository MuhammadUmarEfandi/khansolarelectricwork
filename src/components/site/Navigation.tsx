import { useState } from "react";
import { Mail, Phone, Menu, X, Sun, Leaf, MessageCircle } from "lucide-react";
import { COMPANY, NAV_LINKS } from "./data";

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label={`${COMPANY.name} home`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
        <Sun className="h-5 w-5" aria-hidden="true" />
        <Leaf
          className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-accent p-0.5 text-accent-foreground"
          aria-hidden="true"
        />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-bold">Khan</span>
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          SOLAR & ELECTRONICS WORK&nbsp;
        </span>
      </span>
    </a>
  );
}

export function TopBar() {
  return (
    <div className="bg-navy text-navy-foreground">
      <div className="section-shell flex flex-col gap-1.5 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <a
          href={`mailto:${COMPANY.email}`}
          className="inline-flex items-center gap-2 hover:text-accent"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {COMPANY.email}
        </a>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
          {COMPANY.phones.map((p) => (
            <a key={p.tel} href={p.wa} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {p.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="section-shell flex items-center justify-between gap-4 py-3" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get Free Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-lg border border-border text-foreground xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background xl:hidden">
          <ul className="section-shell grid gap-1 py-3 sm:grid-cols-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-surface hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="sm:col-span-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello H & A Energy Services, I would like a free solar quote.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 min-w-14 items-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Chat</span>
    </a>
  );
}
