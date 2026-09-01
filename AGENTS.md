# Korigio public website

Marketing + account site. Not the Tauri desktop app.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Standard scripts live in `package.json` (`dev`, `build`, `start`, `lint`, `typecheck`) and setup is the plain `npm install` / `npm run dev` flow documented in `README.md`. Package manager is **npm** (only `package-lock.json`). Dev server runs on http://localhost:3000.

Non-obvious gotchas:
- `npm run typecheck` (`tsc --noEmit`) fails standalone with `Cannot find name 'LayoutProps'` in `src/app/layout.tsx` unless the Next.js generated types in `.next/types` exist. Run `npm run build` (or `npm run dev`) once first to generate them, then `typecheck` passes. `next build` runs the type check itself, so a green build already covers types.
- No database or separate backend service. Auth and the contact form persist to gitignored JSON files under `data/` (`users.json`, `messages.json`), created automatically on first write. Deleting `data/` resets all accounts/messages.
- API field names are camelCase: registration/account endpoints expect `workshopName` (not `workshop`); the account update endpoint is `PATCH /api/account` (not PUT).
- The `/download` page fetches GitHub Releases server-side and degrades gracefully when offline/unset; `SESSION_SECRET` and `GITHUB_RELEASES_REPO` are optional in dev (see `.env.example`).
