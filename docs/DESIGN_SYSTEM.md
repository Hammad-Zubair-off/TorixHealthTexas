# Torix Design System — Torix Blue

Global visual reference for every page (Home, Services, Solutions, About, Careers, Contact, Blog).

**Live tokens:** [`app/globals.css`](../app/globals.css). Brand anchors: Deep `#0546C1`, Primary `#0A50D0`, Bright `#207DFF`.

**Historical source:** Finished homepage design in [`referenceUI/Torix Site - Nocturne Light (standalone).html`](../referenceUI/Torix%20Site%20-%20Nocturne%20Light%20(standalone).html) — palette below reflects the **current Torix Blue** theme, not the original purple reference.

Future page work should reference this file instead of re-describing visual style.

---

## 1. Color Palette

### Core roles

| Role | Token(s) | Value |
|------|----------|-------|
| Page background | `--color-bg` | `#f3f6fc` |
| Primary text | `--color-text`, `--color-neutral-900` | `#16182a` |
| Brand / accent | `--color-accent`, `--color-accent-600` | `#0a50d0` |
| Accent alternate (bright) | `--color-accent-2`, `--color-accent-500` | `#207dff` |
| Divider | `--color-divider` | `color-mix(in srgb, #16182a 10%, transparent)` |
| Paper (white surfaces) | `--band-paper`, `--color-neutral-100` | `#ffffff` |
| Tint band | `--band-tint` | `#e8f0fc` |
| Deep band start | `--band-deep` | `#062a6e` |
| Deep band end | `--band-deep-2` | `#041a45` |
| Deep section base | `--color-section` | `#062a6e` |
| Text on deep bands | `--band-deep-text` | `#f4f6fe` |
| Muted text on deep bands | `--band-deep-muted` | `rgba(244,246,254,0.72)` |

### Neutral scale

| Token | Value | Observed role on homepage |
|-------|-------|---------------------------|
| `--color-neutral-100` | `#ffffff` | White / paper |
| `--color-neutral-200` | `#eef2f8` | Soft neutral fills, tag backgrounds |
| `--color-neutral-300` | `#dce3ef` | Mid-light neutral (scale member) |
| `--color-neutral-400` | `#b8c0d2` | Occasional dashed borders |
| `--color-neutral-500` | `#8b93ab` | Mid muted (scale member) |
| `--color-neutral-600` | `#6a7288` | Common muted body / supporting copy |
| `--color-neutral-700` | `#4d5368` | Secondary text, tag text |
| `--color-neutral-800` | `#2e3345` | Hero lead text |
| `--color-neutral-900` | `#16182a` | Primary text (same as `--color-text`) |

### Accent scale

| Token | Value | Observed role on homepage |
|-------|-------|---------------------------|
| `--color-accent-100` | `#eef4ff` | Soft fills, button hover, card washes |
| `--color-accent-200` | `#d6e6ff` | Selection highlight; soft hero gradient start |
| `--color-accent-300` | `#a8c8ff` | Accent borders, pill borders |
| `--color-accent-400` | `#4b93ff` | Scale member / mid highlight |
| `--color-accent-500` | `#207dff` | Bright Blue (glows, gradients) |
| `--color-accent-600` | `#0a50d0` | Primary Blue (same as `--color-accent`) |
| `--color-accent-700` | `#0546c1` | Deep Blue — kickers, icon emphasis, strong UI |
| `--color-accent-800` | `#04389a` | Active / pressed states |
| `--color-accent-900` | `#032a73` | Darkest accent |

### Deep-section helpers (declared)

| Token | Value | Homepage use |
|-------|-------|--------------|
| `--color-section-glow` | `#0a3d8f` | Declared companion to deep band |
| `--color-section-ghost` | `#1a5ab8` | Declared companion to deep band |

### Link colors

| State | Value |
|-------|-------|
| Default accent / links | `#0a50d0` (`--color-accent`) |
| Hover / emphasis | `#0546c1` (`--color-accent-700`) |

### Hatch overlay (inline, not a named token)

Diagonal hatch used on some surfaces:

- `rgba(10,80,208,0.07)` — Primary Blue at ~7% opacity
- `rgba(10,80,208,0.09)` — same hue at ~9% opacity

### Status colors

**None.** No success, error, or warning color tokens appear in the design system or on the homepage.

---

## 2. Typography Scale

### Families

| Role | Token / rule | Value |
|------|--------------|-------|
| Headings | `--font-heading` | `"Inter", system-ui, sans-serif` |
| Body / UI | `--font-body` | `"Inter", system-ui, sans-serif` |
| Heading weight (default) | `--font-heading-weight` | `500` |
| Process step numbers | inline | `ui-monospace, monospace` |

`@font-face` loads Inter at weights **400, 500, 600, 700**.

### Size roles (from homepage usage)

| Role | Size | Weight | Line height | Letter spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| **H1 — hero** | `clamp(38px, 4.6vw, 62px)` | `500` (heading default) | `1.03` | not set | `max-width` often ~`12ch` |
| **H2 — section** | `clamp(26px, 2.7vw, 34px)` | `500` | not set | not set | Dominant section title size |
| **H2 — intro / CTA** | `clamp(28px, 3vw, 38px)` or `clamp(28px, 3.2vw, 40px)` | `500` | not set | not set | Larger “split value” and closing CTA titles |
| **H3** | `26px` | `500` | not set | not set | Two-sided value cards |
| **H4** | `21px` | `500` | not set | not set | Solution product cards |
| **Hero lead** | `18px` | not set (inherits) | `1.6` | not set | Color `--color-neutral-800`; `max-width` ~`46ch` |
| **Card / feature title** | `16–19px` | varies | often `1.2` when set | not set | Common supporting titles |
| **Body / supporting** | `13–16px` | not set | mostly **not set**; occasional `1.2` | not set | Muted copy often `--color-neutral-600` / `700` |
| **Button (default `.btn`)** | `14px` | `500` | not set | not set | |
| **Button (hero primary override)** | `15px` | `500` (via `.btn`) | not set | not set | Larger padding too — see buttons |
| **Nav links / small UI** | `13–15px` | not set | not set | not set | |
| **Nav brand** | `19px` | `600` (`.nav-brand`) | not set | `-0.02em` | Brand wordmark treatment |
| **Kicker (`.card-kicker`)** | `11px` | `500` | not set | `0.08em` | Uppercase; color `--color-accent-700` |
| **Small label / eyebrow** | `10px` | not set | not set | `0.1em` | Uppercase accents on deep/nav contexts |
| **Tag (`.tag`)** | `11px` | `500` | not set | not set | |
| **Process step index** | `12px` | not set | `1` | not set | Mono; color `--color-accent-700` |

### Other tracking values observed

- `0.06em` — used on some uppercase/small labels (alongside `0.1em` and kicker `0.08em`)
- `-0.02em` — nav brand only (one occurrence)

Where line-height or weight is **not set** in the design, do not invent a default for implementation fidelity — inherit from browser / parent / heading rules as the reference does.

### Selection

`::selection` background: `var(--color-accent-200)` (`#e7e5fe`).

---

## 3. Spacing & Layout Conventions

### Page container

| Property | Value |
|----------|-------|
| Max width | `1280px` |
| Horizontal padding | `clamp(24px, 4vw, 44px)` |
| Centering | `margin: 0 auto` |

### Section vertical rhythm

| Pattern | Value |
|---------|-------|
| Common section padding | `clamp(56px, 6.5vw, 92px)` vertical + horizontal clamp above |
| Hero (and occasional) | `clamp(56px, 6.5vw, 96px)` vertical |

Large sections sit in roughly **56–96px** of vertical padding depending on viewport.

### Nav bar

| Property | Value |
|----------|-------|
| Position | `sticky; top: 0; z-index: 40` |
| Background | `color-mix(in srgb, var(--band-paper) 90%, transparent)` + `backdrop-filter: blur(12px)` |
| Border | `1px solid var(--color-divider)` bottom |
| Inner padding | `16px` vertical + `clamp(24px, 4vw, 44px)` horizontal |
| Gap | `24px`; `flex-wrap: wrap` |

### Gaps (common)

`10px`, `12px`, `14px`, `16px`, `20px`, `24px` inside components and stacks.

Larger section/grid gaps: `clamp(32px, 5vw, 64px)`, `clamp(32px, 5vw, 72px)`, `clamp(36px, 5vw, 72px)`.

### Card / panel padding

| Surface | Typical padding |
|---------|-----------------|
| Feature / icon cards | `28px` |
| Larger panels | `30px` |
| Process step cards | `24px` |
| Compact rows / chips | `6px 14px`, `10px 14px`, `16px 12px` |

### Button padding (CSS default)

`10px 18px` (`.btn`); hero primary override `13px 24px`.

### Grid / columns

Homepage grids use CSS Grid with responsive auto-fit, which **stacks on narrow viewports** without a separate mobile-only layout system:

| Pattern | Usage |
|---------|--------|
| `repeat(auto-fit, minmax(340px, 1fr))` | Hero (two-column feel when wide) |
| `repeat(auto-fit, minmax(300px, 1fr))` | Feature-style blocks |
| `repeat(auto-fit, minmax(280px, 1fr))` | Card grids |
| `repeat(auto-fit, minmax(260px, 1fr))` | Card grids |
| `repeat(auto-fit, minmax(240px, 1fr))` | Denser cards |
| `repeat(auto-fit, minmax(190px, 1fr))` | Compact multi-column sets |

Hero: `align-items: center`; gap `clamp(36px, 5vw, 72px)`.

### Declared space scale (not the live homepage rhythm)

| Token | Value |
|-------|-------|
| `--space-1` | `2.8px` |
| `--space-2` | `5.6px` |
| `--space-3` | `8.4px` |
| `--space-4` | `11.2px` |
| `--space-6` | `16.8px` |
| `--space-8` | `22.4px` |

These tokens are **declared but unused** in homepage inline styles. Live spacing is ad-hoc `px` / `clamp` values above. Do not treat `--space-*` as the official rhythm until the implementation intentionally adopts them (see §6).

### Radius tokens

| Token | Value |
|-------|-------|
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `14px` |
| Full pill | `999px` (tags, hero eyebrow chip) |

### Shadow tokens

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 0 0 1px #e4e7f5, 0 1px 2px rgba(28,30,43,0.06)` |
| `--shadow-md` | `0 0 0 1px #dfe1ee, 0 6px 18px rgba(28,30,43,0.10)` |
| `--shadow-lg` | `0 0 0 1px #cfd3e5, 0 16px 40px rgba(28,30,43,0.14)` |

Pattern: **1px ring** + soft drop shadow (not a heavy multi-layer glow).

---

## 4. Component Styles

### Buttons

**Base (`.btn`)**

- `inline-flex`, centered, `gap: 6px`
- Padding `10px 18px`; radius `--radius-md` (`8px`)
- Font: body family, `14px`, weight `500`
- Border `1px solid transparent`; default background transparent; color `--color-text`
- Transition `background / color / border-color` `0.15s`
- Disabled: `opacity: 0.45`; `cursor: not-allowed`

**Primary (`.btn-primary`)** — outline, not solid fill

- Border `1px solid var(--color-accent)`
- Text `--color-accent-700`
- Background transparent
- Hover (CSS): `background: var(--color-accent-100)`

**Secondary (`.btn-secondary`)**

- Border `1px solid var(--color-divider)`
- Text `--color-text`
- Background `--band-paper`
- Hover: border `--color-accent-300`; background `--color-accent-100`

**Ghost (`.btn-ghost`)**

- Text `--color-accent-700`
- Hover: color `--color-accent`

**Homepage hover extras (`style-hover` on some CTAs)**

- `transform: translateY(-2px)` (sometimes with `scale(1.02)`)
- `box-shadow: var(--shadow-md)` or `--shadow-lg`
- `filter: brightness(1.06)`

**Hero primary size override**

- `font-size: 15px`; `padding: 13px 24px` (in addition to `.btn-primary` outline treatment)

### Cards / panels

Recurring patterns:

1. **Bordered feature card** — background `--color-bg` or `--band-paper`; `border: 1px solid var(--color-divider)`; radius `--radius-md`; padding ~`28px`; column flex; gap ~`10px`. Hover often `translateY(-4px)` + `--shadow-md` / `--shadow-lg`.
2. **Elevated paper panel** — `--band-paper`; radius `--radius-lg`; padding ~`30px`; `--shadow-md`; soft transitions on transform/shadow/background.
3. **Wash card** — `linear-gradient(150deg, var(--color-accent-100), var(--band-paper) 70%)` or `… 72%` (near-duplicate stops — see §6).
4. **Deep panel** — `linear-gradient` using `--band-deep` / `--band-deep-2` / `--color-section`; text `--band-deep-text` / muted `--band-deep-muted`.

Borders also appear as `1px solid var(--color-accent-300)` on tinted/emphasized surfaces.

### Tags / pills (`.tag`)

- `inline-flex`; padding `3px 9px`; radius `999px`; `11px` / weight `500`
- `.tag-accent` / `.tag-accent-2`: background `--color-accent-100`; color `--color-accent-700` (**identical rules**)
- `.tag-neutral`: background `--color-neutral-200`; color `--color-neutral-700`
- `.tag-outline`: border `1px solid var(--color-accent-300)`; color `--color-accent-700`

Hero eyebrow chip (related visual, not necessarily `.tag` class): padding `6px 14px`; pill radius; paper background; accent-300 border; `--shadow-sm`.

### Icons

- **Stroke-only** SVGs (`stroke="currentColor"`); no filled icon style observed
- Common sizes: **24×24**, **22×22**, **16×16**, **13×13** (also 12 / 14 / 15 / 20 less often)
- Color via parent `color` (typically accent / accent-700 / deep-band text)
- Often paired in a row with `display: flex; gap: 14px; align-items: flex-start`

### Kickers

`.card-kicker`: uppercase label above sections/cards — see typography table.

### Process timeline steps

- Indices `01`–`05` (zero-padded)
- `font: 12px/1 ui-monospace, monospace`; color `--color-accent-700`; margin below ~`12px`
- Step title ~`16px`; description ~`13px` muted
- Card: paper background; radius `--radius-md`; padding `24px`
- Hover: `translateY(-4px)` + `--shadow-md`

### FAQ

- Native `<details>` / `<summary>`
- `summary::-webkit-details-marker { display: none; }`
- Accordion chrome otherwise follows divider borders and section typography (exact open/close chevron treatment follows markup in the reference)

### Dividers / section bands

- Rule: `.hr` → `border-top: 1px solid var(--color-divider)`
- Section separators: `border-top` / `border-bottom` with `--color-divider` or `--color-accent-300`
- Background treatments observed:
  - Flat: `--color-bg`, `--band-paper`, `--band-tint`
  - Soft wash: `linear-gradient(170deg, var(--color-accent-200) 0%, var(--color-bg) 62%)` (hero-like)
  - Soft wash alt: `linear-gradient(170deg, var(--color-accent-100) 0%, var(--color-bg) 65%)`
  - Deep: `linear-gradient(160deg | 150deg | 180deg | 140deg, …)` using `--band-deep`, `--band-deep-2`, `--color-section`
  - Hatch overlays on `--color-bg` or `--band-paper` (see color section)

### Focus

```css
outline: 2px solid var(--color-accent);
outline-offset: 2px;
```

Applied to `a`, `button`, and `[tabindex]` on `:focus-visible` within `.ds-nocl`.

### Transitions (typical)

- Color/border/background: `0.15s`–`0.25s`
- Lift hovers: `transform` / `box-shadow` around `0.16s`–`0.2s ease`
- Keep interactions simple; no heavy motion systems in the reference

---

## 5. Imagery Guidelines

| Observation | Detail |
|-------------|--------|
| Photography | **None** — zero `<img>` tags on the homepage |
| Illustrations / product shots | **None** as raster assets |
| Dominant visuals | Layout geometry, soft blue→paper gradients, deep navy-blue section bands, light diagonal hatch, outline icons |
| Icon style | Line / stroke, monochrome via `currentColor` |
| Stock hospital / doctor clichés | **Not present** — consistent with the project’s non-generic medical-template direction |

Reproduce the same **abstract UI / icon / band** language on other pages. Do not introduce stock clinical photography unless a future brief explicitly adds imagery.

---

## 6. Anything Inconsistent or Ambiguous

Flagged separately — **do not bake these into the “official” system** as if they were deliberate single choices until product/design clarifies.

1. **Unused declared tokens:** `--color-accent-2`, `--color-section-glow`, `--color-section-ghost` appear in the token sheet but have little or no homepage markup usage.
2. **Unused space scale:** `--space-1`…`--space-8` are declared; homepage spacing uses raw `px` / `clamp` instead.
3. **Near-duplicate gradients:** Card washes use both `… 70%` and `… 72%` stops on the same `150deg` accent-100 → paper formula.
4. **Section padding max:** Most sections cap at `92px`; hero (and similar) use `96px` — close but not identical.
5. **Duplicate tag variants:** `.tag-accent` and `.tag-accent-2` share the same CSS declarations.
6. **Primary button sizing:** Shared `.btn-primary` is outline + `14px` / `10px 18px`; hero CTA bumps to `15px` / `13px 24px` via inline override.
7. **Link color conflict:** Global `a { color: #0a50d0 }` / hover `#0546c1` vs inherit rules in chrome. Which wins depends on cascade/specificity in a given context.
8. **Accent scale members with little direct use:** Mid stops such as accent-400/500/800/900 are in the palette but rarely referenced directly on the homepage (accent-100/300/600/700 dominate).
9. **Bundle contains a second page:** After the homepage, the same HTML file includes a Medical Billing service page. Patterns there may match, but this document’s section inventory and counts are homepage-scoped.
10. **`style-hover`:** Hover treatments are stored in a non-standard `style-hover` attribute in the reference (applied by the bundler runtime). When implementing in Next.js, map these to real CSS `:hover` (or equivalent) — the *visual* values are authoritative; the attribute mechanism is not.

---

## Radius, shadow, and font quick reference

```
Fonts:     Sora (heading) + Plus Jakarta Sans (body); heading weight 600
Radii:     4px / 10px / 16px / 999px
Shadows:   ring + soft drop (sm / md / lg); accent shadows use Primary Blue
Container: 1280px max, clamp(24px, 4vw, 44px) side padding
Accent:    #0a50d0 (Primary); Deep #0546c1; Bright #207dff
Page bg:   #f3f6fc
Text:      #16182a
```
