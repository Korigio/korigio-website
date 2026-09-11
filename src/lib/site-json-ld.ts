import {
  APP_NAME,
  APP_TAGLINE,
  AUTHOR,
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/constants";

/** Schema.org graph for Google / rich results (SoftwareApplication + Organization + Person). */
export function buildSiteJsonLd() {
  const organizationId = `${SITE_URL}/#organization`;
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const softwareId = `${SITE_URL}/#software`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: APP_NAME,
        url: SITE_URL,
        email: CONTACT_EMAIL,
        logo: `${SITE_URL}/brand/mark.png`,
        founder: { "@id": personId },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: CONTACT_EMAIL,
          url: `${SITE_URL}/feedback`,
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: AUTHOR,
        email: CONTACT_EMAIL,
        url: SITE_URL,
        jobTitle: "Author",
        worksFor: { "@id": organizationId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: APP_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        publisher: { "@id": organizationId },
        inLanguage: ["en", "es", "de"],
      },
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: APP_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows, macOS, Linux",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/brand/logo.png`,
        author: { "@id": personId },
        publisher: { "@id": organizationId },
        slogan: APP_TAGLINE,
      },
    ],
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
