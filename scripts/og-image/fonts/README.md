# Fonts vendored for OG card rendering

These are the exact latin `woff2` subsets that Google Fonts serves for the three faces
`index.html` loads. They are vendored so `generate.mjs` renders identically offline and can never
race a webfont load and silently fall back to a system font.

| File | Family | Weights |
|---|---|---|
| `space-grotesk-var-latin.woff2` | Space Grotesk | variable, 300–700 |
| `ibm-plex-mono-400-latin.woff2` | IBM Plex Mono | 400 |
| `ibm-plex-mono-500-latin.woff2` | IBM Plex Mono | 500 |

Both families are licensed under the **SIL Open Font License 1.1**, which permits redistribution
alongside this project:

- Space Grotesk — © Florian Karsten. <https://github.com/floriankarsten/space-grotesk>
- IBM Plex Mono — © IBM Corp. <https://github.com/IBM/plex>

These files are used only by the card generator; the site itself still loads its fonts from Google
Fonts at runtime, so nothing here ships in the built bundle.
