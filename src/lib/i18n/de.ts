export const de = {
  meta: {
    title: "Korigio — Offline-Werkstattverwaltung",
    description:
      "Korigio ist eine Offline-Desktop-App für Werkstätten: Kunden, Geräte, Reparaturen, Diagnose, Druck und lokales WLAN-Teamsync. Keine Cloud.",
  },
  nav: {
    features: "Funktionen",
    download: "Download",
    about: "Über uns",
    feedback: "Feedback",
    getFree: "Gratis laden",
    menu: "Menü",
  },
  hero: {
    kicker: "Kostenlos · für unabhängige Werkstätten",
    title: "Die Werkstatt, auch ohne Netz.",
    subtitle:
      "Kunden, Geräte, Reparaturen, Diagnose, Druck und WLAN-Teamsync — am Tresen-PC. Kostenlos, Ihre Daten bleiben lokal. Kein Konto, keine Cloud, kein Abo.",
    primary: "Kostenlos für Windows laden",
    secondary: "Funktionen ansehen",
    languages: "English, Español, Deutsch",
    os: "Windows 10 / 11 · x64 · Offline-Installer",
  },
  stats: [
    { value: "Gratis", label: "Kein Abo" },
    { value: "0", label: "Konten nötig" },
    { value: "Lokal", label: "Ihre Daten bleiben" },
  ],
  features: {
    kicker: "Für den Tresen gebaut",
    title: "Was eine kleine Werkstatt braucht. Nichts darüber hinaus.",
    subtitle:
      "Korigio ist eine Windows-Desktop-App. Daten bleiben auf dem PC — SQLite, Fotos, Backups — damit der Laden läuft, wenn das Internet nicht.",
    items: [
      {
        title: "Kunden & Firmen",
        body: "Kunden suchen, anlegen und archivieren. Firmenprofile für B2B-Aufträge und auf Annahmescheinen.",
      },
      {
        title: "Geräte",
        body: "Geräte mit Personen verknüpfen. Einheit per Seriennummer, Marke oder Modell finden, bevor die Reparatur startet.",
      },
      {
        title: "Annahme",
        body: "Tastaturfirste Annahme am Tresen. Speichern und direkt den nächsten Auftrag aufnehmen.",
      },
      {
        title: "Diagnosevorlagen",
        body: "Wiederverwendbare Checklisten an der Reparatur — dieselben Fragen, dieselbe Kostenvorlage.",
      },
      {
        title: "Fotos & Dokumente",
        body: "Annahmefotos und unterschriebene Papiere am Auftrag. Leichte Vorschaubilder für Werkstatt-PCs.",
      },
      {
        title: "Druck",
        body: "A4-Annahmescheine, Diagnose zur Kundenfreigabe und Zusammenfassung bei der Abholung.",
      },
      {
        title: "Backup & Wiederherstellen",
        body: "Manuelle und geplante Kopien in einen Ordner Ihrer Wahl. Wiederherstellung wird vor dem Ersetzen geprüft.",
      },
      {
        title: "WLAN-Teamsync",
        body: "Mehrere PCs im selben Ladennetz bleiben gleich. Beitritt per PIN. Kein Cloud-Konto.",
      },
    ],
  },
  workflow: {
    kicker: "So läuft ein Auftrag",
    title: "Annehmen. Diagnostizieren. Freigeben. Reparieren. Abholen.",
    steps: [
      {
        n: "01",
        title: "Annahme",
        body: "Kunde, Gerät und Fehler am Tresen. Annahmeschein drucken, wenn eine Unterschrift nötig ist.",
      },
      {
        n: "02",
        title: "Diagnose",
        body: "Vorlage anwenden, Befund und Kostenvoranschlag erfassen, dann zur Freigabe drucken.",
      },
      {
        n: "03",
        title: "Reparatur",
        body: "Status, Teile und Zuständigkeit führen. Das Dashboard zeigt, was noch offen ist.",
      },
      {
        n: "04",
        title: "Abholung",
        body: "Zusammenfassung drucken, Auftrag als abgeholt markieren, Historie am Gerät behalten.",
      },
    ],
  },
  offline: {
    title: "Läuft, wenn das Kabel gezogen ist.",
    body: "Der Windows-Installer bringt WebView2 offline mit, damit ein Werkstatt-PC ohne Internet trotzdem installieren kann. Alle Daten liegen unter AppData — nie in der Cloud.",
    points: [
      "Kostenlos — kein Konto, kein Abo",
      "Keine CDN-Schriften oder APIs für Kernfunktionen",
      "SQLite auf dem lokalen Rechner",
      "Teamsync nur im lokalen WLAN",
    ],
  },
  download: {
    kicker: "Installer",
    title: "Korigio herunterladen",
    subtitle:
      "Windows ist das unterstützte Ziel für Werkstätten. macOS und Linux sind unsignierte Convenience-Builds.",
    windows: "Windows",
    windowsHint: "10 / 11 · x64 Installer",
    macos: "macOS",
    macosHint: "Disk-Image (.dmg)",
    linux: "Linux",
    linuxHint: "AppImage",
    cta: "Download",
    pending: "Nach der nächsten öffentlichen Version verfügbar",
    statusEmpty:
      "Installer erscheinen hier aus dem öffentlichen GitHub-Release. Windows bleibt der Werkstatt-Installer.",
    statusReady: "Aktuelle Version {version}. Betriebssystem wählen.",
    freeNote:
      "Korigio ist kostenlos zum Laden und Nutzen. Kein Konto, kein Abo — installieren, und die Werkstattdaten bleiben auf dem PC.",
  },
  about: {
    kicker: "Über uns",
    title: "Für die Werkbank gebaut, nicht für ein Cloud-Dashboard.",
    body: "Korigio ist eine Offline-Windows-App für kleine Reparaturwerkstätten. Kunden, Geräte und Auftragshistorie bleiben auf dem Tresen-PC.",
    author: "Erstellt von Moritz Alexander Wright.",
    points: [
      {
        title: "Offline zuerst",
        body: "Kernfunktionen hängen nicht an einem Server. Fällt das WAN aus, läuft die Annahme weiter.",
      },
      {
        title: "Werkstattgröße",
        body: "Für Windows 10/11 x64 mit bescheidenem RAM — typische Tresen-PCs, keine Workstations.",
      },
      {
        title: "Privat by default",
        body: "Kein Cloud-Sync von Kundendaten. Lokale Backups unter Ihrer Kontrolle. Teamsync im eigenen WLAN.",
      },
    ],
  },
  feedback: {
    kicker: "Feedback",
    title: "Fehler melden, Funktion wünschen oder Frage stellen.",
    subtitle:
      "Korigio ist kostenlos und für echte Werkstätten gebaut. Sagen Sie uns, was klemmt, was fehlt oder was Sie wissen möchten — wir lesen jede Nachricht.",
    typeLabel: "Worum geht es?",
    types: {
      bug: "Fehler melden",
      feature: "Funktion wünschen",
      question: "Frage stellen",
    },
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    messagePlaceholder: "Beschreiben Sie, was passiert ist, was Sie brauchen oder fragen möchten.",
    submit: "Feedback senden",
    sending: "Wird gesendet…",
    success: "Danke — Ihr Feedback ist angekommen.",
    error: "Senden fehlgeschlagen. Bitte erneut versuchen.",
  },
  footer: {
    product: "Produkt",
    company: "Unternehmen",
    legal: "Alle Rechte vorbehalten.",
    tagline: "Offline-Werkstattverwaltung.",
  },
  preview: {
    title: "Korigio",
    home: "Start",
    customers: "Kunden",
    devices: "Geräte",
    repairs: "Reparaturen",
    diagnosis: "Diagnose",
    team: "Team",
    settings: "Einstellungen",
    today: "Eingenommene Schätzungen heute",
    week: "Eingenommene Schätzungen diese Woche",
    open: "Offene Schätzungen",
    status: "Offen nach Status",
  },
  notFound: {
    title: "Seite nicht gefunden",
    body: "Diese URL gehört nicht zur Korigio-Website.",
    cta: "Zur Startseite",
  },
} as const;
