export const en = {
  meta: {
    title: "Korigio — Offline workshop repair manager",
    description:
      "Korigio is an offline-first desktop app for repair shops: customers, devices, repairs, diagnosis, print, and local Wi-Fi team sync. No cloud required.",
  },
  nav: {
    features: "Features",
    download: "Download",
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
    primary: "Download free for Windows",
    secondary: "See features",
    languages: "English, Español, Deutsch",
    os: "Windows 10 / 11 · x64 · offline installer",
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
    body: "The Windows installer ships with an offline WebView2 bootstrap, so a shop PC without internet can still install. All workshop data lives under AppData — never in the cloud.",
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
      "Windows is the supported shop target. macOS and Linux builds are unsigned convenience downloads.",
    windows: "Windows",
    windowsHint: "10 / 11 · x64 installer",
    macos: "macOS",
    macosHint: "Disk image (.dmg)",
    linux: "Linux",
    linuxHint: "AppImage",
    cta: "Download",
    pending: "Available after the next public release",
    statusEmpty:
      "Installers appear here from the public GitHub release. Windows remains the supported shop installer.",
    statusReady: "Latest release {version}. Choose your operating system.",
    freeNote:
      "Korigio is free to download and use. No account, no subscription — install it and your workshop data stays on the PC.",
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
    submit: "Send feedback",
    sending: "Sending…",
    success: "Thanks — your feedback was received.",
    error: "Could not send. Try again in a moment.",
  },
  footer: {
    product: "Product",
    company: "Company",
    legal: "All rights reserved.",
    tagline: "Offline workshop repair manager.",
  },
  preview: {
    title: "Korigio",
    home: "Home",
    customers: "Customers",
    devices: "Devices",
    repairs: "Repairs",
    diagnosis: "Diagnosis",
    team: "Team",
    settings: "Settings",
    today: "Collected estimates today",
    week: "Collected estimates this week",
    open: "Open estimates",
    status: "Open by status",
  },
  notFound: {
    title: "Page not found",
    body: "That URL is not part of the Korigio site.",
    cta: "Back home",
  },
} as const;
