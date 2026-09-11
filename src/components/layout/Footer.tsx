import Image from "next/image";
import Link from "next/link";
import {
  AUTHOR,
  CONTACT_EMAIL,
  COPYRIGHT_YEAR,
  SITE_DOMAIN,
} from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary;
};

export function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/brand/mark.png"
              alt="Korigio"
              width={32}
              height={32}
              className="brand-mark h-8 w-8 shrink-0 rounded-lg object-contain"
            />
            <span className="text-lg tracking-tight">korigio</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-subtle">{dict.footer.tagline}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-subtle">
            {dict.footer.product}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/features" className="hover:text-foreground">
                {dict.nav.features}
              </Link>
            </li>
            <li>
              <Link href="/download" className="hover:text-foreground">
                {dict.nav.download}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-subtle">
            {dict.footer.company}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/feedback" className="hover:text-foreground">
                {dict.nav.feedback}
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-foreground"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`https://${SITE_DOMAIN}`}
                className="hover:text-foreground"
              >
                {SITE_DOMAIN}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-faint">
          {AUTHOR} · {CONTACT_EMAIL} · {SITE_DOMAIN} · Copyright ©{" "}
          {COPYRIGHT_YEAR} · {dict.footer.legal}
        </p>
      </div>
    </footer>
  );
}
