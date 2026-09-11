import {
  AUTHOR,
  CONTACT_EMAIL,
  LEGAL_EFFECTIVE_DATE,
  SITE_DOMAIN,
  SITE_URL,
  type Locale,
} from "@/lib/constants";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: "privacy" | "terms";
  title: string;
  updatedLabel: string;
  intro: string;
  sections: LegalSection[];
};

const controllerLine = `${AUTHOR}, operating the website ${SITE_DOMAIN} (${SITE_URL}), contact: ${CONTACT_EMAIL}.`;

const privacyEn: LegalDocument = {
  slug: "privacy",
  title: "Privacy policy",
  updatedLabel: `Last updated: ${LEGAL_EFFECTIVE_DATE}`,
  intro:
    "This privacy policy explains how personal data is processed when you use the Korigio website and related online services, in line with the EU General Data Protection Regulation (GDPR) and applicable EU/EEA privacy law. Korigio the desktop application stores workshop data on your own computer; that local workshop data is not sent to us.",
  sections: [
    {
      title: "1. Controller",
      blocks: [
        {
          type: "p",
          text: `The controller responsible for personal data processed through this website is ${controllerLine}`,
        },
        {
          type: "p",
          text: `For privacy requests, email ${CONTACT_EMAIL}. We currently communicate by email only.`,
        },
      ],
    },
    {
      title: "2. What this policy covers",
      blocks: [
        {
          type: "p",
          text: "This policy covers the public marketing website at korigio.com, including the feedback form, language preference cookie, appearance preference stored in your browser, and technical data needed to operate the site (for example download links fetched from GitHub Releases).",
        },
        {
          type: "p",
          text: "It does not cover workshop customer/device/repair records you create inside the Korigio desktop app. Those records stay on your devices (and any local network sync you configure yourself). We do not host workshop databases for you.",
        },
      ],
    },
    {
      title: "3. Personal data we process",
      blocks: [
        {
          type: "p",
          text: "Depending on how you use the site, we may process:",
        },
        {
          type: "ul",
          items: [
            "Feedback form data you submit: category (bug, feature, or question), name, email address, and message content.",
            "Technical request data common to operating a website: IP address, date/time, requested URL, browser/user-agent, and optional Client Hints such as operating-system platform (Sec-CH-UA-Platform) used only to suggest a matching download.",
            "A language cookie named korigio_locale (values: en, es, or de) so the site can remember your language choice for up to one year.",
            "An appearance preference in your browser localStorage (korigio.preview-theme) for light/dark mode. This stays on your device and is not sent to our servers as a profile.",
          ],
        },
        {
          type: "p",
          text: "We do not create user accounts, do not sell subscriptions on this site, and do not run advertising trackers or marketing pixels on the site as of the date above.",
        },
      ],
    },
    {
      title: "4. Purposes and legal bases (GDPR Art. 6)",
      blocks: [
        {
          type: "ul",
          items: [
            "Responding to feedback you send us — Art. 6(1)(b) GDPR (steps at your request / pre-contractual communication) and, where needed, Art. 6(1)(f) (legitimate interest in improving a free open-source product).",
            "Operating, securing, and debugging the website — Art. 6(1)(f) GDPR (legitimate interest in providing a working, secure site).",
            "Remembering language via the locale cookie — Art. 6(1)(f) GDPR and, where required for non-essential storage, your choice expressed by selecting a language (strictly limited to that preference).",
            "Showing a relevant download option using coarse OS detection — Art. 6(1)(f) GDPR (legitimate interest in usability).",
            "Complying with legal obligations that may apply to correspondence or security logs — Art. 6(1)(c) GDPR where applicable.",
          ],
        },
      ],
    },
    {
      title: "5. Cookies and similar technologies",
      blocks: [
        {
          type: "p",
          text: "We use a first-party cookie korigio_locale to store your language preference (en / es / de), path=/, SameSite=Lax, max-age about 365 days. It is not used for advertising.",
        },
        {
          type: "p",
          text: "Theme preference is stored only in localStorage on your device under korigio.preview-theme. Server logs may be created by our hosting provider as part of normal HTTPS request handling.",
        },
        {
          type: "p",
          text: "You can clear cookies and localStorage in your browser settings at any time. If you block the locale cookie, the site will fall back to the default language.",
        },
      ],
    },
    {
      title: "6. Recipients and processors",
      blocks: [
        {
          type: "p",
          text: "Feedback messages are emailed to our inbox (info@korigio.com) and may also be stored as a JSON file on the website server for operational follow-up. Email is transmitted via our mailbox provider (SMTP).",
        },
        {
          type: "p",
          text: "The website may be hosted by an infrastructure provider we appoint as a processor. Download metadata and installer files may be retrieved from GitHub Releases (GitHub, Inc.). Visiting or downloading from GitHub is also subject to GitHub’s own terms and privacy policy.",
        },
        {
          type: "p",
          text: "We do not sell personal data. We only share data with providers who need it to deliver the service, or when required by law.",
        },
      ],
    },
    {
      title: "7. International transfers",
      blocks: [
        {
          type: "p",
          text: "Some providers (for example GitHub, or email infrastructure) may process data in countries outside the EU/EEA. Where that happens, we rely on appropriate safeguards recognised under the GDPR, such as adequacy decisions or Standard Contractual Clauses used by those providers, together with your ability to contact us at the email above.",
        },
      ],
    },
    {
      title: "8. Retention",
      blocks: [
        {
          type: "ul",
          items: [
            "Feedback messages: kept as long as needed to handle your request and maintain a minimal product history, then deleted or anonymised when no longer necessary (typically within 24 months unless a longer period is required for an ongoing issue).",
            "Locale cookie: up to 12 months, or until you clear it.",
            "Server/security logs: according to the host’s normal rotation, generally short-lived technical logs.",
          ],
        },
      ],
    },
    {
      title: "9. Your rights",
      blocks: [
        {
          type: "p",
          text: "If you are in the EU/EEA (and in other regions with similar laws), you may have the right to:",
        },
        {
          type: "ul",
          items: [
            "Access your personal data",
            "Rectify inaccurate data",
            "Erase data (right to be forgotten) where applicable",
            "Restrict processing",
            "Data portability for data you provided, where applicable",
            "Object to processing based on legitimate interests",
            "Lodge a complaint with your local supervisory authority",
          ],
        },
        {
          type: "p",
          text: `To exercise these rights, email ${CONTACT_EMAIL} with enough detail for us to locate your request (for example the email address used in a feedback submission). We may need to verify your identity before acting.`,
        },
      ],
    },
    {
      title: "10. Children",
      blocks: [
        {
          type: "p",
          text: "The site and software are aimed at adult workshop operators and businesses. We do not knowingly collect personal data from children. If you believe a child submitted data, contact us and we will delete it.",
        },
      ],
    },
    {
      title: "11. Security",
      blocks: [
        {
          type: "p",
          text: "We use HTTPS for the website and limit access to feedback data to people who need it for support. No method of transmission or storage is perfectly secure; please avoid sending passwords or unnecessary sensitive data in feedback messages.",
        },
      ],
    },
    {
      title: "12. Changes",
      blocks: [
        {
          type: "p",
          text: "We may update this policy when our practices or legal requirements change. The “Last updated” date at the top will change accordingly. Continued use of the website after an update means you should review the revised text.",
        },
      ],
    },
  ],
};

const termsEn: LegalDocument = {
  slug: "terms",
  title: "Terms and conditions",
  updatedLabel: `Last updated: ${LEGAL_EFFECTIVE_DATE}`,
  intro:
    "These terms and conditions (“Terms”) govern your use of the Korigio website and the free open-source Korigio desktop software distributed through it. By using the website or downloading the software, you agree to these Terms.",
  sections: [
    {
      title: "1. Operator",
      blocks: [
        {
          type: "p",
          text: `The website is operated by ${controllerLine}`,
        },
      ],
    },
    {
      title: "2. What Korigio is",
      blocks: [
        {
          type: "p",
          text: "Korigio is a free, open-source repair-shop desktop application. The website is a marketing and download surface only. There are no user accounts, paid plans, or cloud workshop hosting on this website.",
        },
        {
          type: "p",
          text: "Workshop data you enter in the desktop app remains on your computers (and any local sync you enable). You are responsible for that data, backups, and access control in your workshop.",
        },
      ],
    },
    {
      title: "3. Open-source software licence",
      blocks: [
        {
          type: "p",
          text: "The desktop software is provided under its published open-source licence (see the project’s public source repository and release notes). These website Terms do not replace that software licence. If there is a conflict about rights to the software code, the open-source licence controls.",
        },
        {
          type: "p",
          text: "Installers may be unsigned. Operating systems (for example Microsoft SmartScreen) may show security warnings. You download and run software at your own risk after reviewing the warning and source of the file.",
        },
      ],
    },
    {
      title: "4. Acceptable use of the website",
      blocks: [
        {
          type: "p",
          text: "You agree not to misuse the website, including by attempting to disrupt service, probe vulnerabilities without authorisation, spam the feedback form, submit unlawful content, or impersonate others.",
        },
        {
          type: "p",
          text: "Feedback you send should be accurate to the best of your knowledge. Do not include special-category data or third-party personal data unless you have a lawful basis to share it.",
        },
      ],
    },
    {
      title: "5. No warranty",
      blocks: [
        {
          type: "p",
          text: "The website and software are provided “as is” and “as available” without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement, to the fullest extent permitted by applicable law.",
        },
        {
          type: "p",
          text: "We do not warrant that the software will be error-free, uninterrupted, or suitable for any specific workshop workflow, regulatory filing, or fiscal requirement in your country. You remain responsible for compliance in your business.",
        },
      ],
    },
    {
      title: "6. Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent permitted by applicable law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, goodwill, or business opportunity, arising from use of the website or software.",
        },
        {
          type: "p",
          text: "Nothing in these Terms excludes or limits liability that cannot be excluded under mandatory law, including liability for death or personal injury caused by negligence, fraud, or wilful misconduct, or mandatory rights of consumers in the EU/EEA.",
        },
        {
          type: "p",
          text: "Because Korigio is provided free of charge, our aggregate liability for claims relating to the website or software is limited to EUR 0 where legally permitted, or otherwise to the minimum amount mandatory law allows.",
        },
      ],
    },
    {
      title: "7. Third-party services",
      blocks: [
        {
          type: "p",
          text: "Download links may point to GitHub Releases or other third-party infrastructure. Those services are governed by their own terms. We are not responsible for third-party outages or policies.",
        },
      ],
    },
    {
      title: "8. Privacy",
      blocks: [
        {
          type: "p",
          text: "Personal data is handled as described in our Privacy policy. By using the feedback form you ask us to process the data you submit so we can respond.",
        },
      ],
    },
    {
      title: "9. Changes",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms from time to time. The “Last updated” date will change when we do. Continued use after changes constitutes acceptance of the revised Terms, except where mandatory law requires additional consent.",
        },
      ],
    },
    {
      title: "10. Governing law and disputes",
      blocks: [
        {
          type: "p",
          text: "These Terms are interpreted in accordance with the laws of the European Union and, where a national law must be chosen, Germany, without regard to conflict-of-law rules that would require another law.",
        },
        {
          type: "p",
          text: "If you are a consumer habitually resident in the EU/EEA/UK, mandatory consumer protection rules of your country of residence remain unaffected, and you may bring proceedings in the courts of that country.",
        },
        {
          type: "p",
          text: `Questions about these Terms: ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
};

const privacyDe: LegalDocument = {
  slug: "privacy",
  title: "Datenschutzerklärung",
  updatedLabel: `Zuletzt aktualisiert: ${LEGAL_EFFECTIVE_DATE}`,
  intro:
    "Diese Datenschutzerklärung erläutert, wie personenbezogene Daten verarbeitet werden, wenn Sie die Korigio-Website und zugehörige Online-Dienste nutzen — im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und geltendem EU/EWR-Datenschutzrecht. Die Desktop-Anwendung Korigio speichert Werkstattdaten auf Ihrem eigenen Computer; diese lokalen Werkstattdaten werden nicht an uns gesendet.",
  sections: [
    {
      title: "1. Verantwortlicher",
      blocks: [
        {
          type: "p",
          text: `Verantwortlicher für die über diese Website verarbeiteten personenbezogenen Daten ist ${controllerLine}`,
        },
        {
          type: "p",
          text: `Für Datenschutzanfragen: ${CONTACT_EMAIL}. Die Kommunikation erfolgt derzeit nur per E-Mail.`,
        },
      ],
    },
    {
      title: "2. Geltungsbereich",
      blocks: [
        {
          type: "p",
          text: "Diese Erklärung gilt für die öffentliche Marketing-Website unter korigio.com, einschließlich Feedback-Formular, Sprach-Cookie, im Browser gespeicherter Darstellungseinstellung sowie technischer Daten zum Betrieb der Website (z. B. Download-Links von GitHub Releases).",
        },
        {
          type: "p",
          text: "Sie gilt nicht für Kunden-/Geräte-/Reparaturdaten, die Sie in der Korigio-Desktop-App anlegen. Diese bleiben auf Ihren Geräten (und ggf. in Ihrer lokalen Netzwerksynchronisation). Wir hosten keine Werkstatt-Datenbanken für Sie.",
        },
      ],
    },
    {
      title: "3. Welche Daten wir verarbeiten",
      blocks: [
        {
          type: "p",
          text: "Je nach Nutzung können wir verarbeiten:",
        },
        {
          type: "ul",
          items: [
            "Feedback-Formular: Kategorie (Fehler, Funktion, Frage), Name, E-Mail-Adresse und Nachricht.",
            "Technische Anfragedaten: IP-Adresse, Datum/Uhrzeit, URL, Browser/User-Agent sowie optional Client Hints zur Betriebssystem-Plattform (Sec-CH-UA-Platform), nur um einen passenden Download vorzuschlagen.",
            "Sprach-Cookie korigio_locale (en, es oder de), speichert Ihre Sprachwahl bis zu einem Jahr.",
            "Darstellung in localStorage (korigio.preview-theme) für Hell-/Dunkelmodus — bleibt auf Ihrem Gerät.",
          ],
        },
        {
          type: "p",
          text: "Wir erstellen keine Benutzerkonten, verkaufen keine Abos auf dieser Website und setzen derzeit keine Werbe-Tracker oder Marketing-Pixel ein.",
        },
      ],
    },
    {
      title: "4. Zwecke und Rechtsgrundlagen (Art. 6 DSGVO)",
      blocks: [
        {
          type: "ul",
          items: [
            "Beantwortung Ihres Feedbacks — Art. 6 Abs. 1 lit. b DSGVO und ggf. lit. f (berechtigtes Interesse an der Verbesserung einer freien Open-Source-Software).",
            "Betrieb, Sicherheit und Fehlerbehebung der Website — Art. 6 Abs. 1 lit. f DSGVO.",
            "Sprachauswahl per Cookie — Art. 6 Abs. 1 lit. f DSGVO bzw. Ihre Auswahl der Sprache.",
            "Grobe OS-Erkennung für Download-Hinweise — Art. 6 Abs. 1 lit. f DSGVO.",
            "Erfüllung rechtlicher Pflichten — Art. 6 Abs. 1 lit. c DSGVO, soweit einschlägig.",
          ],
        },
      ],
    },
    {
      title: "5. Cookies und ähnliche Technologien",
      blocks: [
        {
          type: "p",
          text: "First-Party-Cookie korigio_locale für die Sprache (en / es / de), path=/, SameSite=Lax, ca. 365 Tage. Keine Werbung.",
        },
        {
          type: "p",
          text: "Theme nur in localStorage. Server-Logs können beim Hosting im Rahmen normaler HTTPS-Anfragen entstehen.",
        },
        {
          type: "p",
          text: "Cookies und localStorage können Sie jederzeit im Browser löschen. Ohne Sprach-Cookie gilt die Standardsprache.",
        },
      ],
    },
    {
      title: "6. Empfänger und Auftragsverarbeiter",
      blocks: [
        {
          type: "p",
          text: "Feedback wird an unser Postfach (info@korigio.com) gesendet und kann als JSON-Datei auf dem Webserver gespeichert werden. E-Mail-Versand über unseren Mailbox-/SMTP-Anbieter.",
        },
        {
          type: "p",
          text: "Hosting kann über einen Infrastruktur-Anbieter als Auftragsverarbeiter erfolgen. Release-Metadaten/Installer können von GitHub Releases (GitHub, Inc.) stammen — zusätzlich gelten deren Bedingungen.",
        },
        {
          type: "p",
          text: "Wir verkaufen keine personenbezogenen Daten und geben sie nur weiter, soweit für den Dienst nötig oder gesetzlich erforderlich.",
        },
      ],
    },
    {
      title: "7. Internationale Übermittlungen",
      blocks: [
        {
          type: "p",
          text: "Einige Anbieter (z. B. GitHub oder E-Mail-Infrastruktur) können Daten außerhalb der EU/EWR verarbeiten. Dann stützen wir uns auf geeignete Garantien nach der DSGVO (z. B. Angemessenheitsbeschluss oder Standardvertragsklauseln der Anbieter).",
        },
      ],
    },
    {
      title: "8. Speicherdauer",
      blocks: [
        {
          type: "ul",
          items: [
            "Feedback: so lange wie zur Bearbeitung und minimalen Produkthistorie nötig, danach Löschung/Anonymisierung (in der Regel innerhalb von 24 Monaten, sofern kein laufender Vorgang längere Aufbewahrung erfordert).",
            "Sprach-Cookie: bis zu 12 Monate oder bis Sie es löschen.",
            "Server-/Sicherheitslogs: gemäß üblicher Rotation des Hosts.",
          ],
        },
      ],
    },
    {
      title: "9. Ihre Rechte",
      blocks: [
        {
          type: "p",
          text: "In der EU/EWR stehen Ihnen insbesondere zu:",
        },
        {
          type: "ul",
          items: [
            "Auskunft",
            "Berichtigung",
            "Löschung",
            "Einschränkung der Verarbeitung",
            "Datenübertragbarkeit, soweit anwendbar",
            "Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen",
            "Beschwerde bei einer Aufsichtsbehörde",
          ],
        },
        {
          type: "p",
          text: `Zur Ausübung: ${CONTACT_EMAIL} — bitte mit Angaben zur Identifizierung (z. B. die im Feedback genutzte E-Mail).`,
        },
      ],
    },
    {
      title: "10. Kinder",
      blocks: [
        {
          type: "p",
          text: "Angebot richtet sich an erwachsene Werkstattbetreiber und Unternehmen. Wir erheben wissentlich keine Daten von Kindern. Bei Verdacht kontaktieren Sie uns zur Löschung.",
        },
      ],
    },
    {
      title: "11. Sicherheit",
      blocks: [
        {
          type: "p",
          text: "Die Website nutzt HTTPS; Feedback-Zugang ist auf benötigte Personen beschränkt. Bitte senden Sie keine Passwörter oder unnötig sensible Daten im Feedback.",
        },
      ],
    },
    {
      title: "12. Änderungen",
      blocks: [
        {
          type: "p",
          text: "Wir können diese Erklärung anpassen. Das Datum „Zuletzt aktualisiert“ wird dann geändert. Bitte prüfen Sie den Text bei erneuter Nutzung.",
        },
      ],
    },
  ],
};

const termsDe: LegalDocument = {
  slug: "terms",
  title: "Allgemeine Geschäftsbedingungen",
  updatedLabel: `Zuletzt aktualisiert: ${LEGAL_EFFECTIVE_DATE}`,
  intro:
    "Diese Bedingungen („AGB“) regeln die Nutzung der Korigio-Website und der darüber angebotenen freien Open-Source-Desktop-Software. Mit Nutzung der Website oder Download der Software akzeptieren Sie diese AGB.",
  sections: [
    {
      title: "1. Anbieter",
      blocks: [
        {
          type: "p",
          text: `Die Website wird betrieben von ${controllerLine}`,
        },
      ],
    },
    {
      title: "2. Gegenstand",
      blocks: [
        {
          type: "p",
          text: "Korigio ist eine freie Open-Source-Desktop-Anwendung für Reparaturwerkstätten. Die Website dient Marketing und Download. Es gibt keine Benutzerkonten, keine kostenpflichtigen Pläne und kein Cloud-Hosting von Werkstattdaten auf dieser Website.",
        },
        {
          type: "p",
          text: "In der Desktop-App eingegebene Werkstattdaten bleiben auf Ihren Rechnern. Sie sind für Daten, Backups und Zugriffskontrolle verantwortlich.",
        },
      ],
    },
    {
      title: "3. Open-Source-Lizenz",
      blocks: [
        {
          type: "p",
          text: "Die Desktop-Software unterliegt der veröffentlichten Open-Source-Lizenz (siehe öffentliches Repository und Release-Hinweise). Diese Website-AGB ersetzen diese Lizenz nicht.",
        },
        {
          type: "p",
          text: "Installer können unsigniert sein; Betriebssysteme können Warnungen anzeigen. Download und Ausführung erfolgen auf eigenes Risiko.",
        },
      ],
    },
    {
      title: "4. Zulässige Nutzung",
      blocks: [
        {
          type: "p",
          text: "Sie dürfen die Website nicht missbrauchen (Störungen, unbefugtes Scannen, Spam im Feedback, rechtswidrige Inhalte, Identitätstäuschung).",
        },
        {
          type: "p",
          text: "Feedback soll nach bestem Wissen zutreffend sein. Übermitteln Sie keine besonderen Kategorien personenbezogener Daten oder fremde Daten ohne Rechtsgrundlage.",
        },
      ],
    },
    {
      title: "5. Keine Gewährleistung",
      blocks: [
        {
          type: "p",
          text: "Website und Software werden „wie besehen“ bereitgestellt, soweit gesetzlich zulässig ohne Mängelgewähr — einschließlich stillschweigender Gewährleistungen.",
        },
        {
          type: "p",
          text: "Wir garantieren nicht, dass die Software fehlerfrei oder für einen bestimmten Werkstattprozess oder gesetzliche Pflichten in Ihrem Land geeignet ist.",
        },
      ],
    },
    {
      title: "6. Haftung",
      blocks: [
        {
          type: "p",
          text: "Soweit gesetzlich zulässig, haften wir nicht für mittelbare Schäden, entgangenen Gewinn, Datenverlust oder Betriebsunterbrechung.",
        },
        {
          type: "p",
          text: "Zwingende Haftung (Vorsatz, grobe Fahrlässigkeit, Verletzung von Leben/Körper/Gesundheit, Produkthaftung, zwingende Verbraucherrechte) bleibt unberührt.",
        },
        {
          type: "p",
          text: "Da Korigio unentgeltlich bereitgestellt wird, ist die Gesamthaftung — soweit zulässig — auf EUR 0 bzw. das gesetzliche Minimum begrenzt.",
        },
      ],
    },
    {
      title: "7. Drittanbieter",
      blocks: [
        {
          type: "p",
          text: "Downloads können über GitHub Releases o. Ä. erfolgen. Es gelten zusätzlich deren Bedingungen; für deren Ausfälle sind wir nicht verantwortlich.",
        },
      ],
    },
    {
      title: "8. Datenschutz",
      blocks: [
        {
          type: "p",
          text: "Personenbezogene Daten werden gemäß unserer Datenschutzerklärung verarbeitet. Mit Absenden des Feedbacks bitten Sie uns um Verarbeitung zur Antwort.",
        },
      ],
    },
    {
      title: "9. Änderungen",
      blocks: [
        {
          type: "p",
          text: "Wir können diese AGB aktualisieren. Das Datum „Zuletzt aktualisiert“ ändert sich dann. Weitere Nutzung gilt — vorbehaltlich zwingenden Rechts — als Zustimmung.",
        },
      ],
    },
    {
      title: "10. Anwendbares Recht",
      blocks: [
        {
          type: "p",
          text: "Es gilt das Recht der Europäischen Union und hilfsweise deutsches Recht unter Ausschluss kollisionsrechtlicher Verweisungen.",
        },
        {
          type: "p",
          text: "Verbraucher mit Wohnsitz in EU/EWR/UK behalten zwingende Schutzvorschriften ihres Aufenthaltsstaats und können dort klagen.",
        },
        {
          type: "p",
          text: `Fragen: ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
};

const privacyEs: LegalDocument = {
  slug: "privacy",
  title: "Política de privacidad",
  updatedLabel: `Última actualización: ${LEGAL_EFFECTIVE_DATE}`,
  intro:
    "Esta política explica cómo se tratan los datos personales cuando usa el sitio web de Korigio y servicios relacionados, de conformidad con el Reglamento General de Protección de Datos (RGPD) de la UE. La aplicación de escritorio Korigio guarda los datos del taller en su propio ordenador; esos datos locales no se nos envían.",
  sections: [
    {
      title: "1. Responsable",
      blocks: [
        {
          type: "p",
          text: `El responsable del tratamiento en este sitio es ${controllerLine}`,
        },
        {
          type: "p",
          text: `Para solicitudes de privacidad: ${CONTACT_EMAIL}. Actualmente solo comunicamos por correo electrónico.`,
        },
      ],
    },
    {
      title: "2. Ámbito",
      blocks: [
        {
          type: "p",
          text: "Aplica al sitio de marketing en korigio.com, incluido el formulario de feedback, la cookie de idioma, la preferencia de apariencia en el navegador y datos técnicos necesarios para operar el sitio (p. ej. enlaces de GitHub Releases).",
        },
        {
          type: "p",
          text: "No cubre los registros de clientes/dispositivos/reparaciones creados en la app de escritorio. Esos datos permanecen en sus equipos. No alojamos bases de datos de taller.",
        },
      ],
    },
    {
      title: "3. Datos que tratamos",
      blocks: [
        {
          type: "p",
          text: "Según el uso, podemos tratar:",
        },
        {
          type: "ul",
          items: [
            "Datos del formulario de feedback: categoría, nombre, correo y mensaje.",
            "Datos técnicos de la petición: IP, fecha/hora, URL, user-agent y, opcionalmente, Client Hints de plataforma para sugerir la descarga adecuada.",
            "Cookie korigio_locale (en, es o de) hasta un año.",
            "Preferencia de tema en localStorage (korigio.preview-theme), solo en su dispositivo.",
          ],
        },
        {
          type: "p",
          text: "No creamos cuentas de usuario, no vendemos suscripciones en este sitio y no usamos trackers publicitarios a la fecha indicada.",
        },
      ],
    },
    {
      title: "4. Finalidades y bases jurídicas (art. 6 RGPD)",
      blocks: [
        {
          type: "ul",
          items: [
            "Responder a su feedback — art. 6.1.b y, en su caso, 6.1.f RGPD.",
            "Operar y asegurar el sitio — art. 6.1.f RGPD.",
            "Recordar el idioma — art. 6.1.f RGPD / su elección de idioma.",
            "Detectar el SO de forma aproximada para descargas — art. 6.1.f RGPD.",
            "Cumplir obligaciones legales — art. 6.1.c cuando proceda.",
          ],
        },
      ],
    },
    {
      title: "5. Cookies y tecnologías similares",
      blocks: [
        {
          type: "p",
          text: "Cookie propia korigio_locale para el idioma, path=/, SameSite=Lax, ~365 días. No es publicitaria.",
        },
        {
          type: "p",
          text: "El tema se guarda solo en localStorage. El hosting puede generar registros técnicos HTTPS.",
        },
        {
          type: "p",
          text: "Puede borrar cookies y localStorage en el navegador. Sin la cookie de idioma se usa el idioma por defecto.",
        },
      ],
    },
    {
      title: "6. Destinatarios",
      blocks: [
        {
          type: "p",
          text: "El feedback se envía a info@korigio.com y puede guardarse como JSON en el servidor. El correo usa nuestro proveedor SMTP.",
        },
        {
          type: "p",
          text: "El hosting puede encargarse a un proveedor. Las descargas pueden proceder de GitHub Releases (GitHub, Inc.), sujeto también a sus políticas.",
        },
        {
          type: "p",
          text: "No vendemos datos personales. Solo los compartimos con quien sea necesario para el servicio o por obligación legal.",
        },
      ],
    },
    {
      title: "7. Transferencias internacionales",
      blocks: [
        {
          type: "p",
          text: "Algunos proveedores pueden tratar datos fuera de la UE/EEE. En ese caso se aplican garantías del RGPD (decisión de adecuación o cláusulas contractuales tipo).",
        },
      ],
    },
    {
      title: "8. Conservación",
      blocks: [
        {
          type: "ul",
          items: [
            "Feedback: el tiempo necesario para atenderlo e historial mínimo del producto; luego borrado o anonimización (normalmente en 24 meses salvo incidencia abierta).",
            "Cookie de idioma: hasta 12 meses o hasta que la borre.",
            "Registros del servidor: según la rotación habitual del host.",
          ],
        },
      ],
    },
    {
      title: "9. Sus derechos",
      blocks: [
        {
          type: "p",
          text: "En la UE/EEE puede ejercer, entre otros:",
        },
        {
          type: "ul",
          items: [
            "Acceso",
            "Rectificación",
            "Supresión",
            "Limitación",
            "Portabilidad cuando proceda",
            "Oposición al interés legítimo",
            "Reclamación ante la autoridad de control",
          ],
        },
        {
          type: "p",
          text: `Escríbanos a ${CONTACT_EMAIL} con datos suficientes para localizar su solicitud.`,
        },
      ],
    },
    {
      title: "10. Menores",
      blocks: [
        {
          type: "p",
          text: "El servicio está dirigido a adultos y negocios de reparación. No recopilamos a sabiendas datos de menores.",
        },
      ],
    },
    {
      title: "11. Seguridad",
      blocks: [
        {
          type: "p",
          text: "El sitio usa HTTPS. No envíe contraseñas ni datos sensibles innecesarios en el feedback.",
        },
      ],
    },
    {
      title: "12. Cambios",
      blocks: [
        {
          type: "p",
          text: "Podemos actualizar esta política. Cambiará la fecha de “Última actualización”. Revise el texto al volver a usar el sitio.",
        },
      ],
    },
  ],
};

const termsEs: LegalDocument = {
  slug: "terms",
  title: "Términos y condiciones",
  updatedLabel: `Última actualización: ${LEGAL_EFFECTIVE_DATE}`,
  intro:
    "Estos términos (“Términos”) regulan el uso del sitio web de Korigio y del software de escritorio gratuito y de código abierto distribuido a través de él. Al usar el sitio o descargar el software, acepta estos Términos.",
  sections: [
    {
      title: "1. Operador",
      blocks: [
        {
          type: "p",
          text: `El sitio es operado por ${controllerLine}`,
        },
      ],
    },
    {
      title: "2. Qué es Korigio",
      blocks: [
        {
          type: "p",
          text: "Korigio es una aplicación de escritorio gratuita y de código abierto para talleres. El sitio es solo marketing y descarga. No hay cuentas, planes de pago ni hosting en la nube de datos de taller.",
        },
        {
          type: "p",
          text: "Los datos del taller en la app permanecen en sus equipos. Usted es responsable de copias de seguridad y control de acceso.",
        },
      ],
    },
    {
      title: "3. Licencia de código abierto",
      blocks: [
        {
          type: "p",
          text: "El software se ofrece bajo su licencia open source publicada. Estos Términos del sitio no sustituyen esa licencia.",
        },
        {
          type: "p",
          text: "Los instaladores pueden no estar firmados; el sistema operativo puede mostrar avisos. Descarga y ejecución bajo su propio riesgo.",
        },
      ],
    },
    {
      title: "4. Uso aceptable",
      blocks: [
        {
          type: "p",
          text: "No debe abusar del sitio (interrupciones, escaneo no autorizado, spam en feedback, contenido ilícito o suplantar identidades).",
        },
        {
          type: "p",
          text: "El feedback debe ser veraz en la medida de lo posible. No envíe datos sensibles especiales ni datos de terceros sin base legal.",
        },
      ],
    },
    {
      title: "5. Sin garantía",
      blocks: [
        {
          type: "p",
          text: "Sitio y software se ofrecen “tal cual”, en la máxima medida permitida por la ley, sin garantías de comerciabilidad o idoneidad.",
        },
        {
          type: "p",
          text: "No garantizamos que el software esté libre de errores o sea adecuado a requisitos fiscales o regulatorios concretos de su país.",
        },
      ],
    },
    {
      title: "6. Limitación de responsabilidad",
      blocks: [
        {
          type: "p",
          text: "En la medida permitida, no respondemos por daños indirectos, lucro cesante o pérdida de datos derivados del uso del sitio o del software.",
        },
        {
          type: "p",
          text: "No se excluye la responsabilidad que la ley impone de forma imperativa, incluidos derechos de consumidores en la UE/EEE.",
        },
        {
          type: "p",
          text: "Al ser gratuito, la responsabilidad agregada se limita a 0 EUR cuando la ley lo permita, o al mínimo obligatorio.",
        },
      ],
    },
    {
      title: "7. Terceros",
      blocks: [
        {
          type: "p",
          text: "Las descargas pueden apuntar a GitHub Releases u otra infraestructura. Rigen también sus términos; no respondemos por sus interrupciones.",
        },
      ],
    },
    {
      title: "8. Privacidad",
      blocks: [
        {
          type: "p",
          text: "Los datos personales se tratan según la Política de privacidad. Al enviar feedback nos pide que tratemos esos datos para responderle.",
        },
      ],
    },
    {
      title: "9. Cambios",
      blocks: [
        {
          type: "p",
          text: "Podemos actualizar estos Términos. Cambiará la fecha de actualización. El uso continuado implica aceptación salvo que la ley exija otro consentimiento.",
        },
      ],
    },
    {
      title: "10. Ley aplicable",
      blocks: [
        {
          type: "p",
          text: "Se interpretan conforme al Derecho de la Unión Europea y, cuando deba elegirse un Derecho nacional, el alemán, sin normas de conflicto que remitan a otro.",
        },
        {
          type: "p",
          text: "Los consumidores residentes en UE/EEE/UK conservan las protecciones imperativas de su país y pueden litigar allí.",
        },
        {
          type: "p",
          text: `Consultas: ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
};

const privacyByLocale: Record<Locale, LegalDocument> = {
  en: privacyEn,
  de: privacyDe,
  es: privacyEs,
};

const termsByLocale: Record<Locale, LegalDocument> = {
  en: termsEn,
  de: termsDe,
  es: termsEs,
};

export function getPrivacyPolicy(locale: Locale): LegalDocument {
  return privacyByLocale[locale] ?? privacyEn;
}

export function getTerms(locale: Locale): LegalDocument {
  return termsByLocale[locale] ?? termsEn;
}
