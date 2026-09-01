# Korigio public website

Marketing + account site. Not the Tauri desktop app.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Standard scripts live in `package.json` (`dev`, `build`, `start`, `lint`, `typecheck`) and setup is the plain `npm install` / `npm run dev` flow documented in `README.md`. Package manager is **npm** (only `package-lock.json`). Dev server runs on http://localhost:3000.

Product shape: Korigio is **free** — no user accounts, no login, and no subscription. The website is marketing-only; the desktop app keeps all workshop data locally. Do not reintroduce auth/account/pricing surfaces.

Non-obvious gotchas:
- `npm run typecheck` (`tsc --noEmit`) fails standalone with `Cannot find name 'LayoutProps'` in `src/app/layout.tsx` unless the Next.js generated types in `.next/types` exist. Run `npm run build` (or `npm run dev`) once first to generate them, then `typecheck` passes. `next build` runs the type check itself, so a green build already covers types.
- No database or separate backend service. The only persisted data is submitted feedback, written to a gitignored `data/feedback.json` (created on first write via `src/lib/feedback.ts`). Deleting `data/` resets it.
- The feedback endpoint is `POST /api/feedback`; it requires a `type` of `bug`, `feature`, or `question` plus `name`, `email`, and `message`.
- All user-facing copy is localized in `src/lib/i18n/{en,es,de}.ts`; `en` is the source of truth for the `Dictionary` type, so add keys there first, then mirror in `es`/`de` for runtime correctness.
- The `/download` page fetches GitHub Releases server-side and degrades gracefully when offline/unset; `GITHUB_RELEASES_REPO` is optional in dev (see `.env.example`).
