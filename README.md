# Osprey Point

A demonstration municipal website for the **fictional** Town of Osprey Point,
Sedgemere County, New Jersey. Nothing here represents a real government body, and
none of the services, forms, addresses, or phone numbers are functional.

## Stack

| Layer | Choice |
| --- | --- |
| Site generator | [Eleventy 3](https://www.11ty.dev/) |
| Asset pipeline / dev server | [Vite 8](https://vite.dev/) via `@11ty/eleventy-plugin-vite` |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) (CSS-first `@theme` config) |
| Templating | Nunjucks layouts and partials |
| Content | Markdown with YAML frontmatter |
| Language | TypeScript (config, global data, and client scripts) |

No framework runtime ships to the browser. Every page is server-rendered HTML;
the ~2 kB of JavaScript is progressive enhancement only, and the site is fully
usable with JS disabled.

## Getting started

```bash
npm install
npm run dev
```

The dev server prints its URL (Eleventy's default is `http://localhost:8080`).

## Deploying to GitHub Pages

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds the site
and deploys it on every push to `master`, using GitHub's own Pages actions
(no `gh-pages` branch, no third-party action).

**One-time setup**, after the repo exists on GitHub:

1. Push this repo to GitHub (see below if you haven't yet).
2. On GitHub: **Settings → Pages → Build and deployment → Source**, choose
   **GitHub Actions**.
3. Push to `master`, or run the workflow manually from the **Actions** tab.
   The deployed URL appears on the Pages settings screen and in the
   workflow's summary once it finishes.

```bash
git remote add origin git@github.com:<you>/osprey-point.git
git push -u origin master
```

### Why `PATH_PREFIX` exists

Every template in this project writes root-absolute paths directly
(`href="/services/"`, not a `url` filter), which only resolves correctly when
the site is served from `/`. A GitHub Pages **project page** — the default
for any repo not named `<username>.github.io` — is instead served from
`/<repo-name>/`.

The workflow sets `PATH_PREFIX=/<repo-name>` before building.
[eleventy.config.ts](eleventy.config.ts) uses it to:

- rewrite `href`/`src`/`action` attributes in the rendered HTML, and
- set Vite's `base`, so its own hashed asset URLs (CSS, JS, the favicon) come
  out prefixed too.

`npm run build` locally never sets this, so local builds and `npm run dev`
are unaffected and still serve from `/`.

**If you host this at a custom domain, or as a `<username>.github.io` user
page**, the site is served from `/` and you don't want the prefix — delete
the `PATH_PREFIX` line from the workflow's `env:` block (or set it to an
empty string) before deploying that way.

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Eleventy + Vite dev server with HMR |
| `npm run build` | Production build to `_site/` |
| `npm run preview` | Dev server with incremental builds |
| `npm run typecheck` | `tsc --noEmit` across config, data, and client TS |
| `npm run clean` | Remove `_site/` and the Vite temp folder |

Every Eleventy invocation passes `--config=eleventy.config.ts`. Eleventy 3.1
does not include `.ts` in its default config filename list, so the flag is
required — Node 24 strips the types on import.

## Layout

```
src/
  _data/            Global data as TypeScript modules (site, navigation, council, staff, alerts)
  _includes/
    layouts/        base, page, department, news, meeting
    partials/       header, footer, alert-banner, page-header, demo-ribbon
  assets/
    css/main.css    Tailwind entry + @theme design tokens
    ts/main.ts      Progressive enhancement
    img/
  departments/      Department pages (markdown) + directory data file
  government/       Council, budget, notices, and meetings/
  news/             News items (markdown)
  services/         Service pages (markdown) + the demo permit form
```

Directory data files (`departments/departments.json`, `news/news.json`, …) set
the layout, tags, and shared frontmatter for everything in that folder. Index
pages override `layout` and `tags` in their own frontmatter.

## Adding content

**A news item** — create `src/news/my-item.md`:

```markdown
---
title: Headline goes here
date: 2026-09-01
category: Services
lede: One sentence that appears in listings and under the headline.
---

Body content in markdown.
```

It appears automatically on `/news/` and the homepage, sorted by date.

**A department** — create `src/departments/my-dept.md` with `title`, `lede`,
`director`, `phone`, `email`, `location`, and an optional `quickLinks` array. It
joins `/departments/`, the homepage grid, and the contact page sidebar.

**A meeting record** — create `src/government/meetings/YYYY-MM-DD-name.md` with
`title`, `date`, and `status` (`Upcoming`, `Draft minutes`, or `Minutes
approved`).

## Design tokens

Colors and fonts are defined in `@theme` in `src/assets/css/main.css` and become
Tailwind utilities automatically (`bg-navy-800`, `text-bay-700`,
`font-display`). Change a token there and it propagates everywhere.

The `.prose-gov` component class styles long-form markdown body content.

## Conventions

- Focus rings are never removed — public-sector sites get keyboard and
  screen-reader traffic.
- `.no-print` marks chrome that should not appear in printed records; meeting
  minutes are expected to be printed.
- All pages carry `noindex, nofollow` and a persistent demo ribbon, so the
  fictional town cannot be mistaken for a real one if the site is ever hosted.
