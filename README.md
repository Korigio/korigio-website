# Korigio website

Public marketing and account site for **Korigio**, the offline Windows workshop app.

GitHub: [Korigio/korigio-website](https://github.com/Korigio/korigio-website). Not part of the desktop app repo.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · cookie sessions (local JSON store)

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
| `/pricing` | Workshop / LAN team licensing |
| `/about` | Product story |
| `/contact` | Contact form (stored in `data/messages.json`) |
| `/register` `/login` | Accounts |
| `/account` | Workshop profile and download shortcut |

Accounts and contact messages are stored in `data/` on disk (gitignored). Set `SESSION_SECRET` in production.

Downloads read `https://api.github.com/repos/M-WRI/servioo/releases/latest`. Override with `GITHUB_RELEASES_REPO`.
