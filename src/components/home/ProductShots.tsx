import Image from "next/image";
import companies from "@/assets/preview/companies-dark.jpg";
import company from "@/assets/preview/company-dark.jpg";
import intake from "@/assets/preview/intake-dark.jpg";
import repair from "@/assets/preview/repair-dark.jpg";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary;
};

const shots = [
  { src: intake, key: "intake" as const },
  { src: repair, key: "repair" as const },
  { src: company, key: "company" as const },
  { src: companies, key: "companies" as const },
];

export function ProductShots({ dict }: Props) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-subtle">
          {dict.preview.galleryKicker}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {dict.preview.galleryTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{dict.preview.gallerySubtitle}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {shots.map((shot) => (
            <figure key={shot.key} className="m-0">
              <div className="relative aspect-[1024/644] overflow-hidden rounded-[14px] border border-border bg-elevated">
                <Image
                  src={shot.src}
                  alt={dict.preview.shots[shot.key]}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-contain object-top"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                {dict.preview.shots[shot.key]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
