import Link from "next/link";
import { getDictionary, getLocale } from "@/lib/i18n";

export default async function NotFound() {
  const dict = getDictionary(await getLocale());
  return (
    <div className="mx-auto max-w-lg px-5 py-24 text-center">
      <h1 className="text-3xl font-medium tracking-tight text-foreground">
        {dict.notFound.title}
      </h1>
      <p className="mt-3 text-muted">{dict.notFound.body}</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-cta-foreground hover:bg-cta-hover"
      >
        {dict.notFound.cta}
      </Link>
    </div>
  );
}
