import type { LegalDocument } from "@/lib/legal";

type Props = {
  doc: LegalDocument;
};

export function LegalDoc({ doc }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-subtle">{doc.updatedLabel}</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {doc.title}
      </h1>
      <p className="mt-6 text-base leading-7 text-muted">{doc.intro}</p>

      <div className="mt-12 space-y-10">
        {doc.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-medium tracking-tight text-foreground">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
              {section.blocks.map((block, index) =>
                block.type === "p" ? (
                  <p key={`${section.title}-p-${index}`}>{block.text}</p>
                ) : (
                  <ul
                    key={`${section.title}-ul-${index}`}
                    className="list-disc space-y-2 pl-5"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
