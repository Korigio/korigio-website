# Korigio website

Public marketing site for **Korigio**, the free offline Windows workshop app.

GitHub: [Korigio/korigio-website](https://github.com/Korigio/korigio-website). Not part of the desktop app repo.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · local JSON store (feedback)

## Run

```bash
cd ~/korigio-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Product landing |
| `/features` | Workshop features from the desktop app |
| `/download` | Installers from the public GitHub release |
| `/about` | Product story |
| `/feedback` | Feedback form — report a bug, request a feature, or ask a question (stored in `data/feedback.json`) |

Korigio is free: no accounts, no subscription, and workshop data stays on the local PC. The website only stores submitted feedback in `data/` on disk (gitignored).

Downloads read `https://api.github.com/repos/Korigio/korigio-downloads/releases/latest`. Override with `GITHUB_RELEASES_REPO`.
