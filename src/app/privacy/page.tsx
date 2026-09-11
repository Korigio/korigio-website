import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { getDictionary, getLocale } from "@/lib/i18n";
import { getPrivacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Korigio processes personal data on korigio.com under the EU GDPR — feedback form, cookies, and local desktop data.",
  alternates: { canonical: "/privacy" },
};

export default async function PrivacyPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const doc = getPrivacyPolicy(locale);

  return (
    <>
      <span className="sr-only">{dict.footer.privacy}</span>
      <LegalDoc doc={doc} />
    </>
  );
}
