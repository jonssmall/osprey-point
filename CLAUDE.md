# Osprey Point — working notes

Demo municipal site for a **fictional** town. See `README.md` for the stack and
directory layout.

## Non-obvious things

- **Eleventy must be run with `--config=eleventy.config.ts`.** Eleventy 3.1.6
  does not look for `.ts` config files by default; without the flag it silently
  falls back to zero config, which produces confusing "layout does not exist"
  errors because the input directory resolves to the repo root. All npm scripts
  already pass it.
- **Directory settings use the setter API**, not the returned `dir` object:
  `setInputDirectory`, `setOutputDirectory`, etc. But
  `markdownTemplateEngine` / `htmlTemplateEngine` have *no* setters and must
  still come from the returned object. Both forms coexist in the config.
- **Vite 8 uses `rolldownOptions`**, not `rollupOptions` — the old key logs a
  deprecation warning and is ignored.
- **Global data files are `.ts`**, enabled by an `addDataExtension("ts", …)`
  hook that imports them with a cache-busting query string. Node 24's native
  type stripping does the compiling, so `erasableSyntaxOnly` is on in
  `tsconfig.json` — no enums or namespaces in these files.
- **Long-form pages must be `.md`, not `.njk`.** A `.njk` file with markdown
  syntax in it renders as literal text; there is no markdown pass on Nunjucks
  templates. Index and form pages are `.njk` because they are markup-heavy.
- **All internal links are root-absolute** (`href="/services/"`), never run
  through Eleventy's `url` filter. `npm run build` alone always serves from
  `/`; GitHub Pages deployment sets `PATH_PREFIX` to rewrite these — see
  `README.md#deploying-to-github-pages`. New templates should keep writing
  plain root-absolute paths; do not add the `url` filter piecemeal, since the
  transform in `eleventy.config.ts` already covers every page.

## Content rules

- Every page keeps the demo ribbon and the footer disclaimer. The site is
  fictional and must stay unmistakably so — do not remove them, and do not add
  real municipality names, real officials, or real phone numbers.
- Phone numbers stay in the `(609) 555-01xx` range; emails stay on
  `ospreypoint.example.gov`.
- The town sits in fictional **Sedgemere County, New Jersey** — a back-bay
  barrier-shore setting. Statutory references should track New Jersey: OPRA for
  records, the Open Public Meetings Act for notice, CAFRA and tidelands for
  coastal permitting, a Faulkner Act council–manager charter, and NJDOT for
  state highways. Deeds sit with the County Clerk, but tax assessment and vital
  records are municipal in NJ.
- Forms are demonstrations. They must call `preventDefault()` and surface the
  "nothing was submitted" notice rather than posting anywhere.

## Verifying changes

```bash
npm run build && npm run typecheck
```

The build fails loudly on template errors. For link integrity, the built
`_site/` can be walked for `href="/…"` targets that have no corresponding
`index.html`.
