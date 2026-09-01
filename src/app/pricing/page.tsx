import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, getLocale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Pricing" };

export default async function PricingPage() {
  const dict = getDictionary(await getLocale());

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
        {dict.pricing.kicker}
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-white sm:text-5xl">
        {dict.pricing.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-zinc-400">{dict.pricing.subtitle}</p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {dict.pricing.plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-[32px] border p-8 ${
              plan.highlight
                ? "border-white/20 bg-white text-black"
                : "border-white/8 bg-white/3"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.16em] opacity-60">{plan.name}</p>
            <p className="mt-4 text-4xl font-medium tracking-tight">{plan.price}</p>
            <p className="mt-1 text-sm opacity-60">{plan.period}</p>
            <ul className="mt-8 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={plan.highlight ? "/features" : "/register"}
              className={`mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-medium ${
                plan.highlight
                  ? "bg-black text-white hover:bg-zinc-800"
                  : "bg-white text-black hover:bg-zinc-200"
              }`}
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-zinc-500">{dict.pricing.note}</p>
    </div>
  );
}
