import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const POSTS = [
  {
    title: "How Net Metering Works in Punjab",
    date: "12 Jun 2026",
    excerpt:
      "A plain-language walkthrough of WAPDA green meter applications, documentation and timelines.",
  },
  {
    title: "Top 5 Benefits of Solar Tube Wells for Farmers",
    date: "28 May 2026",
    excerpt:
      "Why solar pumps beat diesel on cost, reliability and maintenance across Punjab farmland.",
  },
  {
    title: "How to Choose the Right Solar Inverter in 2026",
    date: "09 May 2026",
    excerpt:
      "On-grid, hybrid or off-grid — comparing efficiency, warranty and battery compatibility.",
  },
];

const FAQS = [
  {
    q: "What is the payback period of a solar system?",
    a: "Most residential and commercial systems in Punjab pay back their cost in 2 to 3 years through bill savings and net-metering credits, then keep generating free power for decades.",
  },
  {
    q: "How does the net-metering process work?",
    a: "We prepare your application, single-line diagram and test reports, submit them to your distribution company, and coordinate inspection until your bidirectional green meter is installed. The typical timeline is 4 to 8 weeks.",
  },
  {
    q: "What warranty do you provide?",
    a: "Tier-1 panels carry a 25-year performance warranty, inverters carry 5 to 10 years depending on brand, and Zunify provides a written workmanship warranty on the installation itself.",
  },
  {
    q: "How much maintenance does solar need?",
    a: "Very little. Panels should be cleaned every 4 to 8 weeks depending on dust, and we recommend an annual inverter and wiring inspection — both covered by our maintenance plans.",
  },
  {
    q: "Do you install systems outside Gujranwala?",
    a: "Yes. We regularly install across Gujranwala, Nowshera Virkan, Lahore, Sialkot, Sheikhupura, Hafizabad, Gujrat and Wazirabad.",
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-background py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="bg-surface py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-muted-foreground">
            Still unsure about something? Call us and speak directly to an engineer.
          </p>
        </div>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-card">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left font-display text-base font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
