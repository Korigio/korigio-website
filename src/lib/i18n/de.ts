export const de = {
  meta: {
    title: "Korigio — Offline-Werkstattverwaltung",
    description:
      "Korigio ist eine Offline-Desktop-App für Werkstätten: Kunden, Geräte, Reparaturen, Diagnose, Druck und lokales WLAN-Teamsync. Keine Cloud.",
  },
  nav: {
    features: "Funktionen",
    download: "Download",
    install: "Installieren",
    about: "Über uns",
    feedback: "Feedback",
    getFree: "Gratis laden",
    menu: "Menü",
    themeToLight: "Helle Darstellung zeigen",
    themeToDark: "Dunkle Darstellung zeigen",
  },
  hero: {
    kicker: "Kostenlos · für unabhängige Werkstätten",
    title: "Die Werkstatt, auch ohne Netz.",
    subtitle:
      "Kunden, Geräte, Reparaturen, Diagnose, Druck und WLAN-Teamsync — am Tresen-PC. Kostenlos, Ihre Daten bleiben lokal. Kein Konto, keine Cloud, kein Abo.",
    primary: "Kostenlos für {os} laden",
    secondary: "Funktionen ansehen",
    languages: "English, Español, Deutsch",
    osHint: {
      windows: "Windows 10 / 11 · x64 · Offline-Installer",
      macos: "macOS · Apple Silicon · Disk-Image",
      linux: "Linux · x64 · AppImage",
    },
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
    body: {
      windows:
        "Der Windows-Installer bringt WebView2 offline mit, damit ein Werkstatt-PC ohne Internet trotzdem installieren kann. Er ist noch nicht code-signiert, deshalb warnt SmartScreen — das ist erwartet. Alle Daten liegen unter AppData — nie in der Cloud.",
      macos:
        "Das macOS-Disk-Image ist mit einer Apple-Developer-ID signiert. Öffnen, Korigio nach Programme ziehen und starten. Die Werkstattdaten bleiben auf diesem Mac, nie in der Cloud.",
      linux:
        "Das Linux-AppImage ist ein offizieller Build. Als ausführbar markieren und starten. Die Werkstattdaten bleiben auf diesem Rechner — nie in der Cloud.",
    },
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
      "Windows ist das unterstützte Ziel für Werkstätten. Folgen Sie nach dem Download der Installationsanleitung — Windows zeigt eine SmartScreen-Warnung, weil der Installer noch nicht digital signiert ist.",
    guide: "Installationsanleitung",
    windowsCallout:
      "Windows sagt, der PC sei geschützt. Weitere Informationen, dann Trotzdem ausführen — siehe Installationsanleitung.",
    windows: "Windows",
    windowsHint: "10 / 11 · x64 Installer",
    macos: "macOS",
    macosHint: "Disk-Image (.dmg)",
    linux: "Linux",
    linuxHint: "AppImage",
    recommended: "Für diesen Rechner",
    cta: "Download",
    pending: "Nach der nächsten öffentlichen Version verfügbar",
    statusEmpty:
      "Installer erscheinen hier aus dem öffentlichen GitHub-Release. Windows bleibt der Werkstatt-Installer.",
    statusReady: "Aktuelle Version {version}. Betriebssystem wählen.",
    freeNote:
      "Korigio ist kostenlos zum Laden und Nutzen. Kein Konto, kein Abo — installieren, und die Werkstattdaten bleiben auf dem PC.",
    requirements: {
      kicker: "Hardware",
      title: "Mindestanforderungen",
      subtitle:
        "Ein üblicher Tresen-PC reicht. Windows ist das unterstützte Werkstatt-Ziel; macOS und Linux sind zusätzliche Builds.",
      note: "Bildschirm 1024×768 oder größer. Kein Internet nötig — optionales WLAN nur für Teamsync.",
      labels: {
        os: "Betriebssystem",
        cpu: "Prozessor",
        ram: "Arbeitsspeicher",
        disk: "Freier Speicher",
        webview: "Webansicht",
      },
      windows: {
        title: "Windows",
        badge: "Werkstatt-Ziel",
        os: "Windows 10 x64 (21H2 oder neuer) oder Windows 11",
        cpu: "x86-64, Zweikern ca. 1,5 GHz",
        ram: "4 GB (2 GB absolute Untergrenze)",
        disk: "Etwa 500 MB, plus Platz für Fotos und Backups",
        webview: "WebView2 ist im Installer enthalten — Installation ohne Internet",
      },
      macos: {
        title: "macOS",
        badge: "Zusätzlich",
        os: "macOS 11 Big Sur oder neuer",
        cpu: "Apple Silicon oder Intel x86-64",
        ram: "4 GB",
        disk: "Etwa 400 MB, plus Platz für Fotos und Backups",
        webview: "Nutzt die in macOS eingebaute WebView",
      },
      linux: {
        title: "Linux",
        badge: "Zusätzlich",
        os: "Ubuntu 22.04+, Debian 12+ oder Fedora 39+",
        cpu: "x86-64, Zweikern",
        ram: "4 GB",
        disk: "Etwa 400 MB, plus Platz für Fotos und Backups",
        webview: "Das AppImage bringt die Laufzeit mit",
      },
    },
  },
  install: {
    kicker: "Einrichtung",
    title: "Korigio installieren",
    subtitle:
      "macOS und Linux installieren als signierte, offizielle Builds. Unter Windows müssen Sie SmartScreen durchklicken — wir haben noch kein Microsoft-Codesigning-Zertifikat.",
    downloadCta: "Korigio herunterladen",
    recommended: "Für diesen Rechner",
    windows: {
      title: "Windows 10 / 11",
      intro:
        "Den x64-Installer laden und Windows das Ausführen erlauben. Weil Korigio noch nicht mit einem Publisher-Zertifikat signiert ist, behandelt Windows es als unbekannt. Das ist erwartet.",
      warningTitle: "Die Windows-Warnung ist normal",
      warningBody:
        "Wir haben noch keine Windows-Codesigning-Lizenz. Microsoft Defender SmartScreen blockiert den ersten Start, bis Sie den Installer ausführen, den Sie von dieser Website geladen haben.",
      clicks: [
        {
          label: "Windows hat den PC geschützt",
          buttons: ["Weitere Informationen", "Trotzdem ausführen"],
        },
        {
          label: "Änderungen an diesem Gerät zulassen?",
          buttons: ["Ja"],
        },
      ],
      steps: [
        {
          title: "Installer herunterladen",
          body: "Auf der Download-Seite den Windows-Button nutzen und die Datei auf diesem PC speichern.",
        },
        {
          title: "Installer öffnen",
          body: "Die heruntergeladene Datei im Ordner Downloads doppelklicken.",
        },
        {
          title: "SmartScreen umgehen",
          body: "Wenn das Fenster Windows hat den PC geschützt erscheint: Weitere Informationen, dann Trotzdem ausführen.",
        },
        {
          title: "Änderungen zulassen",
          body: "Fragt die Benutzerkontensteuerung, ob die App Änderungen vornehmen darf: Ja.",
        },
        {
          title: "Einrichtung abschließen",
          body: "Den Installer durchlaufen und Korigio danach über das Startmenü öffnen.",
        },
      ],
    },
    macos: {
      title: "macOS",
      intro:
        "Das macOS-Disk-Image ist mit einer Apple-Developer-ID signiert. Öffnen, Korigio nach Programme legen und starten.",
      steps: [
        {
          title: "Disk-Image herunterladen",
          body: "Auf der Download-Seite den macOS-Button nutzen (.dmg).",
        },
        {
          title: "Image öffnen",
          body: "Die heruntergeladene .dmg-Datei doppelklicken.",
        },
        {
          title: "Installieren",
          body: "Korigio in den Ordner Programme ziehen, danach das Disk-Image auswerfen.",
        },
        {
          title: "Korigio öffnen",
          body: "Über Programme starten. Fragt macOS nach einer Bestätigung für eine aus dem Internet geladene App: Öffnen.",
        },
      ],
    },
    linux: {
      title: "Linux",
      intro:
        "Der Linux-Build ist ein offizielles AppImage. Als ausführbar markieren und starten — kein Installationsassistent nötig.",
      steps: [
        {
          title: "AppImage herunterladen",
          body: "Auf der Download-Seite den Linux-Button nutzen.",
        },
        {
          title: "Ausführbar machen",
          body: "Datei rechtsklicken, Eigenschaften öffnen und Ausführen als Programm erlauben. Im Terminal: chmod +x Korigio*.AppImage",
        },
        {
          title: "Korigio starten",
          body: "Das AppImage doppelklicken oder im Terminal starten. Die Werkstattdaten bleiben auf diesem Rechner.",
        },
      ],
    },
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
    confirm: "Ich bestätige, dass ich ein Mensch bin und diese Nachricht senden möchte.",
    submit: "Feedback senden",
    sending: "Wird gesendet…",
    success: "Danke — Ihr Feedback ist angekommen.",
    error: "Senden fehlgeschlagen. Bitte erneut versuchen.",
    confirmError: "Bitte bestätigen Sie, dass Sie diese Nachricht senden möchten.",
  },
  footer: {
    product: "Produkt",
    company: "Unternehmen",
    legal: "Alle Rechte vorbehalten.",
    tagline: "Offline-Werkstattverwaltung.",
  },
  preview: {
    alt: "Korigio-Werkstattdashboard",
  },
  notFound: {
    title: "Seite nicht gefunden",
    body: "Diese URL gehört nicht zur Korigio-Website.",
    cta: "Zur Startseite",
  },
} as const;
