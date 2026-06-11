# AWERTON — Brand reference

> _Management you can trust. Results you can feel._

This project ships the AWERTON brand as code: the crystal logo, the colour
palette, and the type system — all wired into Tailwind v4 as design tokens.

## Logo

Official brand vectors (`#BBB399` on `#171515`).

| Asset | Path | Use |
| --- | --- | --- |
| Mark component | [src/components/AwertonMark.jsx](src/components/AwertonMark.jsx) | Inline crystal mark, colour via `currentColor` |
| Wordmark component | [src/components/AwertonWordmark.jsx](src/components/AwertonWordmark.jsx) | Inline `AWERTON` lettering, `currentColor` |
| Lockup component | [src/components/Logo.jsx](src/components/Logo.jsx) | Mark + wordmark, horizontal or vertical |
| Mark (SVG) | [src/assets/awerton-mark.svg](src/assets/awerton-mark.svg) | Standalone mark, gold on transparent |
| Profile — mark | [public/awerton-profile.svg](public/awerton-profile.svg) | Social avatar, mark on ink (1080²) |
| Profile — lockup | [public/awerton-lockup.svg](public/awerton-lockup.svg) | Social avatar, mark + wordmark on ink (1080²) |
| Favicon | [public/favicon.svg](public/favicon.svg) | Mark on a rounded ink tile |

```jsx
import Logo from './components/Logo'

{/* vertical — sized by width */}
<Logo tone="gold" orientation="vertical" className="w-64" />

{/* horizontal — sized by font-size */}
<Logo tone="gold" orientation="horizontal" className="text-xl" />
```

`tone` accepts `gold | clay | ink | ivory`. The individual `AwertonMark` /
`AwertonWordmark` components are also usable on their own (e.g. mark-only in a
nav bar). Vertical lockups size by container **width** (`w-*`); horizontal
lockups size by **font-size** (`text-*`).

## Colour palette

`ink` and `gold` are the exact brand values (Color 1 / Color 2). The rest are
**derived from the brand kit imagery and are approximate** — confirm against
the source files before print.

| Token | Hex | Role |
| --- | --- | --- |
| `ink` | `#171515` | Primary dark surface · **Color 1** |
| `gold` | `#BBB399` | Accent / logo on dark · **Color 2** |
| `ivory` | `#EFEDE3` | Light surface _(approx.)_ |
| `sand` | `#B7B09A` | Neutral / sand surface _(approx.)_ |
| `taupe` | `#7E7268` | Deep warm neutral _(approx.)_ |
| `clay` | `#7A6D60` | Logo / type on light _(approx.)_ |
| `mist` | `#DCDCDC` | Cool light — template layouts _(approx.)_ |

## Typography

Brand fonts, self-hosted as variable fonts from [public/fonts/](public/fonts/)
and declared via `@font-face` in [src/index.css](src/index.css):

| Token | Family | Use |
| --- | --- | --- |
| `font-display` | Noto Serif | Eyebrows / logotype contexts |
| `font-serif` | Noto Serif | Display headings |
| `font-sans` | Roboto Flex | Body & captions |

## Tokens & Tailwind

- **Source of truth:** the `@theme` block in [src/index.css](src/index.css)
  generates Tailwind utilities (`bg-ink`, `text-gold`, `font-display`, …) and
  matching CSS variables (`var(--color-gold)`, …).
- **Design handoff:** [design-tokens.json](design-tokens.json) mirrors the same
  values in W3C DTCG format (for Style Dictionary, Figma Tokens, etc.).

```html
<div class="bg-ink text-gold font-display">AWERTON</div>
```
