# gyst-ai.github.io

Website for the **Global Youth AI & STEM Foundation (GYST-AI)** — the foundation
that hosts [inCABS 2027](https://incabs-2027.github.io), an international
research conference for high school students.

Live at **https://gyst-ai.github.io**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
npm run lint
```

Next.js 16 App Router, TypeScript, Tailwind v4, MDX. Static export
(`output: 'export'`) — there is no server.

## Where things live

| Path | What |
|---|---|
| `src/lib/org.ts` | **Single source of truth** for every fact the site asserts. Unknown values are `null`, which makes `<TBA />` render "To be announced". |
| `src/content/*.mdx` | Prose content |
| `src/components/` | Shared components. Only `Nav.tsx` is a client component. |
| `src/app/` | Routes: `/`, `/about`, `/conferences`, `/leadership`, `/get-involved` |
| `references/` | Source documents every claim traces back to (not built) |
| `assets/brand/` | Source logo art (not served) |

To update a date, a name, or a conference entry, edit `src/lib/org.ts` — not the
components.

## Deploy

Push to `main`. GitHub Actions builds and publishes to GitHub Pages
(`.github/workflows/deploy.yml`). Repo Settings → Pages → Source must be set to
**GitHub Actions**, and the repository must be **public**.

The repo is named `gyst-ai.github.io`, so it serves from the org root — there is
deliberately **no `basePath` or `assetPrefix`** in `next.config.ts`.

## Before you push

Read [CLAUDE.md](./CLAUDE.md). It carries the integrity rules this project is
built on — most importantly that nothing undecided ever gets a placeholder
value, and that the site makes no claim about legal status or affiliation with
any professional body.
