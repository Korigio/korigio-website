import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { getDictionary, getLocale } from "@/lib/i18n";
import { getTerms } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description:
    "Terms for using the Korigio website and free open-source repair manager software.",
  alternates: { canonical: "/terms" },
};

export default async function TermsPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const doc = getTerms(locale);

  return (
    <>
      <span className="sr-only">{dict.footer.terms}</span>
      <LegalDoc doc={doc} />
    </>
  );
}
