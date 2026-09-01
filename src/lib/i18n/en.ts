export const en = {
  meta: {
    title: "Korigio — Offline workshop repair manager",
    description:
      "Korigio is an offline-first desktop app for repair shops: customers, devices, repairs, diagnosis, print, and local Wi-Fi team sync. No cloud required.",
  },
  nav: {
    features: "Features",
    download: "Download",
    install: "Install",
    about: "About",
    feedback: "Feedback",
    getFree: "Get it free",
    menu: "Menu",
  },
  hero: {
    kicker: "Free · for independent repair shops",
    title: "The workshop, running offline.",
    subtitle:
      "Customers, devices, repairs, diagnosis, print, and Wi-Fi team sync — on the counter PC. Free to download, your data stays local. No account, no cloud, no subscription.",
    primary: "Download free for {os}",
    secondary: "See features",
    languages: "English, Español, Deutsch",
    osHint: {
      windows: "Windows 10 / 11 · x64 · offline installer",
      macos: "macOS · Apple Silicon · disk image",
      linux: "Linux · x64 · AppImage",
    },
  },
  stats: [
    { value: "Free", label: "No subscription" },
    { value: "0", label: "Accounts needed" },
    { value: "Local", label: "Your data stays put" },
  ],
  features: {
    kicker: "Built for the counter",
    title: "Everything a small shop needs. Nothing it doesn’t.",
    subtitle:
      "Korigio is a Windows desktop app. Data stays on the PC — SQLite, photos, backups — so the shop keeps working when the internet does not.",
    items: [
      {
        title: "Customers & companies",
        body: "Search, create, and archive customers. Keep company profiles for B2B jobs and print them on intake receipts.",
      },
      {
        title: "Devices",
        body: "Link devices to people. Find a unit by serial, brand, or model before you open a new repair.",
      },
      {
        title: "Repair intake",
        body: "Keyboard-first intake at the counter. Save and take the next job without hunting through menus.",
      },
      {
        title: "Diagnosis templates",
        body: "Reusable checklists applied to a repair — same questions, same estimate structure, every time.",
      },
      {
        title: "Photos & documents",
        body: "Store intake photos and signed papers next to the job. Thumbnails stay light on shop PCs.",
      },
      {
        title: "Print",
        body: "A4 intake receipts, diagnosis for customer approval, and a summary when the job is collected.",
      },
      {
        title: "Backup & restore",
        body: "Manual backups plus scheduled copies to a folder you choose. Restore is validated before it replaces data.",
      },
      {
        title: "Wi-Fi team sync",
        body: "Several PCs on the same shop network stay in sync. PIN to join. No cloud account.",
      },
    ],
  },
  workflow: {
    kicker: "How a job moves",
    title: "Intake. Diagnose. Approve. Repair. Collect.",
    steps: [
      {
        n: "01",
        title: "Intake",
        body: "Customer, device, and fault at the counter. Print an intake receipt if you need a signature.",
      },
      {
        n: "02",
        title: "Diagnosis",
        body: "Apply a template, record findings and an estimate, then print for customer approval.",
      },
      {
        n: "03",
        title: "Repair",
        body: "Track status, parts, and who is on the job. The dashboard shows what is still open.",
      },
      {
        n: "04",
        title: "Collect",
        body: "Print a summary, mark the job collected, and keep the history on the device.",
      },
    ],
  },
  offline: {
    title: "Designed to work with the network unplugged.",
    body: {
      windows:
        "The Windows installer ships with an offline WebView2 bootstrap, so a shop PC without internet can still install. It is not code-signed yet, so SmartScreen will warn you — that is expected. All workshop data lives under AppData — never in the cloud.",
      macos:
        "The macOS disk image is signed with an Apple Developer ID. Open it, drag Korigio into Applications, and launch it. Workshop data stays on this Mac, never in the cloud.",
      linux:
        "The Linux AppImage is an official build. Mark it executable, then run it. Workshop data stays on this machine — never in the cloud.",
    },
    points: [
      "Free to use — no account, no subscription",
      "No CDN fonts or APIs for core features",
      "SQLite on the local machine",
      "Team sync only on the local Wi-Fi",
    ],
  },
  download: {
    kicker: "Installers",
    title: "Download Korigio",
    subtitle:
      "Windows is the supported shop target. After you download, follow the install guide — Windows will show a SmartScreen warning because the installer is not code-signed yet.",
    guide: "Installation guide",
    windowsCallout:
      "Windows will say it protected your PC. Click More info, then Run anyway — see the install guide.",
    windows: "Windows",
    windowsHint: "10 / 11 · x64 installer",
    macos: "macOS",
    macosHint: "Disk image (.dmg)",
    linux: "Linux",
    linuxHint: "AppImage",
    recommended: "For this computer",
    cta: "Download",
    pending: "Available after the next public release",
    statusEmpty:
      "Installers appear here from the public GitHub release. Windows remains the supported shop installer.",
    statusReady: "Latest release {version}. Choose your operating system.",
    freeNote:
      "Korigio is free to download and use. No account, no subscription — install it and your workshop data stays on the PC.",
    requirements: {
      kicker: "Hardware",
      title: "Minimum requirements",
      subtitle:
        "A typical counter PC is enough. Windows is the supported shop target; macOS and Linux are extra builds.",
      note: "Screen 1024×768 or larger. No internet required — optional shop Wi-Fi only for team sync.",
      labels: {
        os: "Operating system",
        cpu: "Processor",
        ram: "Memory",
        disk: "Free disk",
        webview: "Web view",
      },
      windows: {
        title: "Windows",
        badge: "Shop target",
        os: "Windows 10 x64 (21H2 or later) or Windows 11",
        cpu: "x86-64 dual-core, about 1.5 GHz",
        ram: "4 GB (2 GB absolute minimum)",
        disk: "About 500 MB, plus room for photos and backups",
        webview: "WebView2 is bundled — install works offline",
      },
      macos: {
        title: "macOS",
        badge: "Also available",
        os: "macOS 11 Big Sur or later",
        cpu: "Apple Silicon or Intel x86-64",
        ram: "4 GB",
        disk: "About 400 MB, plus room for photos and backups",
        webview: "Uses the WebView built into macOS",
      },
      linux: {
        title: "Linux",
        badge: "Also available",
        os: "Ubuntu 22.04+, Debian 12+, or Fedora 39+",
        cpu: "x86-64 dual-core",
        ram: "4 GB",
        disk: "About 400 MB, plus room for photos and backups",
        webview: "AppImage includes its own runtime",
      },
    },
  },
  install: {
    kicker: "Setup",
    title: "How to install Korigio",
    subtitle:
      "macOS and Linux install as signed, official builds. On Windows you must click through SmartScreen — we do not have a Microsoft code-signing certificate yet.",
    downloadCta: "Download Korigio",
    recommended: "For this computer",
    windows: {
      title: "Windows 10 / 11",
      intro:
        "Download the x64 installer, then allow Windows to run it. Because Korigio is not yet signed with a publisher certificate, Windows treats it as unrecognized. That is expected.",
      warningTitle: "The Windows warning is normal",
      warningBody:
        "We do not have a Windows code-signing license yet. Microsoft Defender SmartScreen will block the first launch until you choose to run the installer you downloaded from this site.",
      clicks: [
        {
          label: "Windows protected your PC",
          buttons: ["More info", "Run anyway"],
        },
        {
          label: "Allow this app to make changes?",
          buttons: ["Yes"],
        },
      ],
      steps: [
        {
          title: "Download the installer",
          body: "Use the Windows button on the Download page and save the file to this PC.",
        },
        {
          title: "Open the installer",
          body: "Double-click the downloaded file in your Downloads folder.",
        },
        {
          title: "Bypass SmartScreen",
          body: "When the window Windows protected your PC appears, click More info, then click Run anyway.",
        },
        {
          title: "Allow changes",
          body: "If User Account Control asks whether to allow this app to make changes to your device, click Yes.",
        },
        {
          title: "Finish setup",
          body: "Complete the installer, then open Korigio from the Start menu.",
        },
      ],
    },
    macos: {
      title: "macOS",
      intro:
        "The macOS disk image is signed with an Apple Developer ID. Open it, put Korigio in Applications, and launch it.",
      steps: [
        {
          title: "Download the disk image",
          body: "Use the macOS button on the Download page (.dmg).",
        },
        {
          title: "Open the image",
          body: "Double-click the downloaded .dmg file.",
        },
        {
          title: "Install",
          body: "Drag Korigio into the Applications folder, then eject the disk image.",
        },
        {
          title: "Open Korigio",
          body: "Launch it from Applications. If macOS asks to confirm an app downloaded from the internet, click Open.",
        },
      ],
    },
    linux: {
      title: "Linux",
      intro:
        "The Linux build is an official AppImage. Mark it executable, then run it — no installer wizard is required.",
      steps: [
        {
          title: "Download the AppImage",
          body: "Use the Linux button on the Download page.",
        },
        {
          title: "Make it executable",
          body: "Right-click the file, open Properties, and allow executing as a program. In a terminal: chmod +x Korigio*.AppImage",
        },
        {
          title: "Run Korigio",
          body: "Double-click the AppImage, or start it from the terminal. Workshop data stays on this machine.",
        },
      ],
    },
  },
  about: {
    kicker: "About",
    title: "Built for benches, not dashboards in the cloud.",
    body: "Korigio is an offline Windows desktop app for small repair workshops. It keeps customers, devices, and repair history on the PC you already use at the counter.",
    author: "Created by Moritz Alexander Wright.",
    points: [
      {
        title: "Offline first",
        body: "Core features do not depend on a vendor server. If the WAN drops, intake still works.",
      },
      {
        title: "Shop-sized",
        body: "Aimed at Windows 10/11 x64 machines with modest RAM — typical counter PCs, not workstations.",
      },
      {
        title: "Private by default",
        body: "No cloud sync of customer records. Local backups you control. Team sync stays on your Wi-Fi.",
      },
    ],
  },
  feedback: {
    kicker: "Feedback",
    title: "Report a bug, request a feature, or ask a question.",
    subtitle:
      "Korigio is free and built for real workshops. Tell us what is broken, what is missing, or what you want to know — we read every message.",
    typeLabel: "What is this about?",
    types: {
      bug: "Report a bug",
      feature: "Request a feature",
      question: "Ask a question",
    },
    name: "Name",
    email: "Email",
    message: "Message",
    messagePlaceholder: "Tell us what happened, what you need, or what you want to ask.",
    confirm: "I confirm I am a person and I want to send this message.",
    submit: "Send feedback",
    sending: "Sending…",
    success: "Thanks — your feedback was received.",
    error: "Could not send. Try again in a moment.",
    confirmError: "Please confirm you want to send this message.",
  },
  footer: {
    product: "Product",
    company: "Company",
    legal: "All rights reserved.",
    tagline: "Offline workshop repair manager.",
  },
  preview: {
    alt: "Korigio workshop dashboard",
    themeToLight: "Show light appearance",
    themeToDark: "Show dark appearance",
  },
  notFound: {
    title: "Page not found",
    body: "That URL is not part of the Korigio site.",
    cta: "Back home",
  },
} as const;
