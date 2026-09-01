import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/lib/i18n";

export const metadata: Metadata = { title: "About" };

export default async function AboutPage() {
  const dict = getDictionary(await getLocale());

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{dict.about.kicker}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-white sm:text-5xl">
        {dict.about.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{dict.about.body}</p>
      <p className="mt-4 text-sm text-zinc-500">{dict.about.author}</p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {dict.about.points.map((point) => (
          <article
            key={point.title}
            className="rounded-[28px] border border-white/8 bg-white/3 p-6"
          >
            <h2 className="text-lg text-white">{point.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{point.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
