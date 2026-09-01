import Image from "next/image";
import Link from "next/link";
import { AUTHOR, COPYRIGHT_YEAR } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary;
};

export function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/brand/mark.png"
              alt="Korigio"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg tracking-tight">korigio</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-zinc-500">{dict.footer.tagline}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
            {dict.footer.product}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>
              <Link href="/features" className="hover:text-white">
                {dict.nav.features}
              </Link>
            </li>
            <li>
              <Link href="/download" className="hover:text-white">
                {dict.nav.download}
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white">
                {dict.nav.pricing}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
            {dict.footer.company}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>
              <Link href="/about" className="hover:text-white">
                {dict.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                {dict.nav.contact}
              </Link>
            </li>
            <li>
              <Link href="/account" className="hover:text-white">
                {dict.nav.account}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-zinc-600">
          Author: {AUTHOR} · Copyright © {COPYRIGHT_YEAR} · {dict.footer.legal}
        </p>
      </div>
    </footer>
  );
}
