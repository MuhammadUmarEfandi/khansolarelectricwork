import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Sun, PiggyBank, ArrowRight } from "lucide-react";

const UNIT_RATE = 55; // PKR per unit (approx.)
const UNITS_PER_KW_MONTH = 120;

const formatPKR = (value: number) =>
  new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 }).format(Math.round(value));

export function SolarCalculator() {
  const [bill, setBill] = useState(45000);

  const { systemSize, savings, yearly } = useMemo(() => {
    const units = bill / UNIT_RATE;
    const size = Math.max(1, Math.round((units / UNITS_PER_KW_MONTH) * 2) / 2);
    const monthlySavings = Math.min(bill * 0.9, size * UNITS_PER_KW_MONTH * UNIT_RATE);
    return { systemSize: size, savings: monthlySavings, yearly: monthlySavings * 12 };
  }, [bill]);

  return (
    <section id="calculator" className="bg-surface py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <span className="eyebrow">Savings Calculator</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            See how much solar can save you every month
          </h2>
          <p className="mt-4 text-muted-foreground">
            Move the slider to your average monthly electricity bill. We instantly estimate the right
            system size and your expected savings after solarization.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-7 shadow-card">
            <label htmlFor="bill" className="text-sm font-semibold">
              Monthly Electricity Bill (PKR)
            </label>
            <div className="mt-3 flex items-center gap-3">
              <input
                id="bill"
                type="number"
                min={5000}
                max={1000000}
                step={1000}
                value={bill}
                onChange={(e) => setBill(Math.max(5000, Number(e.target.value) || 0))}
                className="w-40 rounded-lg border border-input bg-background px-3 py-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <span className="text-sm text-muted-foreground">PKR / month</span>
            </div>
            <Slider
              className="mt-6"
              value={[Math.min(bill, 500000)]}
              min={5000}
              max={500000}
              step={1000}
              onValueChange={(v) => setBill(v[0])}
              aria-label="Monthly electricity bill in rupees"
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>PKR 5,000</span>
              <span>PKR 500,000</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-navy p-8 text-navy-foreground shadow-lift">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-navy-foreground/5 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                <Sun className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm text-navy-muted">Recommended System Size</p>
              <p className="font-display text-3xl font-bold">{systemSize} kW</p>
            </div>
            <div className="rounded-xl bg-navy-foreground/5 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                <PiggyBank className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm text-navy-muted">Estimated Monthly Savings</p>
              <p className="font-display text-3xl font-bold text-accent">PKR {formatPKR(savings)}</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-navy-muted">
            That's roughly <strong className="text-navy-foreground">PKR {formatPKR(yearly)}</strong>{" "}
            saved every year. Estimates are indicative and confirmed after a free site survey.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Get Exact Quote for This System
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
