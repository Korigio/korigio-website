import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Features" };

export default async function FeaturesPage() {
  const dict = getDictionary(await getLocale());

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-subtle">
        {dict.features.kicker}
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {dict.features.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{dict.features.subtitle}</p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {dict.features.items.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-border bg-surface p-7"
          >
            <h2 className="text-xl text-foreground">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-16">
        <p className="text-xs uppercase tracking-[0.22em] text-subtle">
          {dict.workflow.kicker}
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground">
          {dict.workflow.title}
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {dict.workflow.steps.map((step) => (
            <li key={step.n} className="rounded-3xl border border-border p-5">
              <p className="font-mono text-xs text-subtle">{step.n}</p>
              <h3 className="mt-3 text-lg text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
