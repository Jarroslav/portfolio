# Portfolio

Single-page portfolio / CV site for Yaroslav Krivushenko — Lead Test Automation Engineer (Agentic SDLC / Quality Engineering).

Built with Vite + React + TypeScript. Deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Assets

- `public/images/portrait.jpg` — portrait photo used in the hero section.
- `public/images/from-ashes.png` — real screenshot of [from-ashes.com](https://www.from-ashes.com).
- `public/images/og-v2.png` — the 1200×630 Open Graph / Twitter card. **Generated, not hand-made** —
  edit `scripts/og-image/og.html` and re-run the generator rather than editing the PNG:

  ```bash
  node scripts/og-image/generate.mjs
  ```

  Playwright is fetched on demand via `npx` and is deliberately not a dependency, since CI never
  renders the card. Fonts are self-hosted under `scripts/og-image/fonts/` so a render can't race a
  webfont load and silently fall back.

- `public/images/og.png` — the **superseded** card. Social platforms cache OG images by URL, so the
  corrected card shipped as `og-v2.png` rather than overwriting this one. Keep this file: links
  already shared to LinkedIn/Slack/X still reference it, and deleting it breaks those previews.
  If the card changes again, ship `og-v3.png` and update both `og:image` and `twitter:image`.
