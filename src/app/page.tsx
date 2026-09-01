import Link from "next/link";
import { AppPreview } from "@/components/home/AppPreview";
import { getDictionary, getLocale } from "@/lib/i18n";

export default async function HomePage() {
  const dict = getDictionary(await getLocale());

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              {dict.hero.kicker}
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl">
              {dict.hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
              {dict.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/download"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-200"
              >
                {dict.hero.primary}
              </Link>
              <Link
                href="/features"
                className="rounded-full border border-white/12 px-5 py-2.5 text-sm text-zinc-200 hover:bg-white/6"
              >
                {dict.hero.secondary}
              </Link>
            </div>
            <p className="mt-5 text-sm text-zinc-500">
              {dict.hero.os}
              <span className="mx-2 text-zinc-700">·</span>
              {dict.hero.languages}
            </p>
          </div>
          <AppPreview dict={dict} />
        </div>
        <dl className="mt-16 grid gap-4 sm:grid-cols-3">
          {dict.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/8 bg-white/3 px-6 py-5"
            >
              <dt className="text-sm text-zinc-500">{stat.label}</dt>
              <dd className="mt-1 text-3xl tracking-tight text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            {dict.features.kicker}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {dict.features.title}
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">{dict.features.subtitle}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dict.features.items.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/8 bg-white/3 p-5"
              >
                <h3 className="text-base font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            {dict.workflow.kicker}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {dict.workflow.title}
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {dict.workflow.steps.map((step) => (
              <li
                key={step.n}
                className="rounded-3xl border border-white/8 bg-black p-5"
              >
                <p className="font-mono text-xs text-zinc-500">{step.n}</p>
                <h3 className="mt-3 text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-[32px] border border-white/10 bg-white/4 px-6 py-12 sm:px-12">
            <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {dict.offline.title}
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">{dict.offline.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {dict.offline.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/download"
              className="mt-10 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-200"
            >
              {dict.hero.primary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
