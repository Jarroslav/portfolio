#!/usr/bin/env node
/**
 * Renders scripts/og-image/og.html to public/images/og-v2.png at 1200x630.
 *
 * The original og.png was committed as an opaque binary with no source, which
 * is why correcting one number in it was expensive. This script is that missing
 * source. It is run by hand and the PNG is committed, so Playwright is
 * deliberately NOT a package.json dependency — CI never renders the card and
 * shouldn't pay to install a browser on every deploy.
 *
 *   node scripts/og-image/generate.mjs                  # -> public/images/og-v2.png
 *   node scripts/og-image/generate.mjs --variant=reference --out=/tmp/ref.png
 *
 * The `reference` variant re-renders the ORIGINAL copy ("Test Automation
 * Architect" / "200+"). Diffing it against public/images/og.png proves the
 * template still reproduces the card it replaced, so any visual drift shows up
 * as a deliberate change rather than an accident.
 *
 * First run downloads Playwright's chromium via npx and may take a minute.
 */
import { spawnSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'
import { existsSync } from 'node:fs'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '../..')

const arg = (name, fallback) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : fallback
}

const variant = arg('variant', 'v2')
const out = resolve(repoRoot, arg('out', 'public/images/og-v2.png'))

const source = resolve(here, 'og.html')
if (!existsSync(source)) {
  console.error(`Missing template: ${source}`)
  process.exit(1)
}

const url = `${pathToFileURL(source).href}?variant=${variant}`

console.log(`Rendering ${variant} -> ${out}`)

const result = spawnSync(
  'npx',
  [
    '--yes',
    'playwright',
    'screenshot',
    '--browser=chromium',
    '--viewport-size=1200,630',
    // og.html sets body.ready only after document.fonts.ready resolves AND
    // every face passes document.fonts.check. Waiting on the selector instead
    // of a timeout means a slow disk or a missing font file fails loudly here
    // rather than shipping a card silently rendered in a fallback font.
    '--wait-for-selector=body.ready',
    url,
    out,
  ],
  { stdio: 'inherit', cwd: repoRoot },
)

if (result.status !== 0) {
  console.error(
    '\nRender failed. If it timed out waiting for body.ready, the webfonts in\n' +
      'scripts/og-image/fonts/ did not load — check they are present and valid.',
  )
  process.exit(result.status ?? 1)
}

console.log(`Wrote ${out}`)
