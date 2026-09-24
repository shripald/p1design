# PressONE Design System

PressONE — **For Better Communications.** A business communications provider (hosted VoIP, SIP trunking, omnichannel contact center, AI voice agents, business messaging, POTS replacement, CRM integrations) whose promise is live, dedicated, human support. Everything here serves that promise: warm, plain-spoken, confident.

## Content fundamentals

**Voice.** Conversational, plain-spoken, lightly witty. Authoritative without being corporate. Say what the thing does; drop the marketing hedge. Write like a small team, never like an enterprise.

**Person.**
- Talk to the customer as **you / your**: *"Your phone system should keep up."*
- Speak as **we / our**, the team: *"We built hosted VoIP to actually solve the problems…"*
- Don't write "PressONE delivers…" in body copy. Third person is for legal lines and the footer.

**Casing.**
- Sentence case for headings. Product names keep their capitals: *Hosted VoIP, Omnichannel Contact Center, POTS Replacement, SIP Trunking.*
- The name is always **PressONE**: one word, "ONE" in caps. Never "Press One" or "Pressone".
- Tagline in title case: **For Better Communications**.
- UPPERCASE only for eyebrows and key CTA labels (`REQUEST A DEMO`, `LEARN MORE`).

**Sentence shapes.**
- Short and punchy; mix one-liners with a longer explanation.
- Rhetorical questions are a signature: *"Power outage? Flooded break room? Random squirrel chewing through a cable?"*
- Em-dash asides and an ellipsis beat are in voice: *"You just… log in, set things up, and go."*
- Fragments are fine: *"Done." "Easy."*

**Numbers.** Concrete, rounded numbers beat vague claims: *"cut phone system costs by up to 70 percent"*, *"handle over 80 percent of routine inquiries"*. Spell out "percent" in prose; use `%` in tight UI (pricing, stat strips).

**Emoji.** None in product UI or on the website. The only exception is ✅ in social-post checklists.

**Avoid.** "Cutting-edge", "world-class", "industry-leading", "seamlessly", and "solutions" stacked without saying what they solve.

**In voice:**

> **Tired of duct-taping three tools together?**
> We built hosted VoIP to actually solve the problems that affect how your business communicates — bad call quality, clunky tools, overcomplicated pricing. You just log in, set things up, and go. And when something does go sideways, you get a real person on the phone. (Yes, really.)

## Visual foundations

Every token below is a CSS custom property in `colors_and_type.css` (`p1-purple-800` is `var(--p1-purple-800)`). `tokens.json` lists them all with a usage note for each.

### Color

Two brand hues plus neutrals. **No third hue.** If you need variety, move along an existing ramp.

| Role | Token | Hex | Use |
|---|---|---|---|
| Primary brand | `p1-purple-800` / `brand` | #45166A | "PRESS" in the wordmark, headlines, navbars, secondary buttons |
| Deep purple | `p1-purple-900` | #2A0E45 | Hero and footer grounds |
| Mid purple | `p1-purple-600` / `link` | #8154A4 | Links, decorative accents |
| Soft purple | `p1-purple-400` | #AE8CC8 | Dividers and quiet text on dark purple |
| Accent / CTA | `p1-orange-600` / `accent` | #FF8200 | Primary buttons, "ONE" in the wordmark, key figures |
| Gold | `p1-orange-500` | #FAA633 | Highlights and emphasis on dark purple, the mark's lower rows |
| Body ink | `p1-ink-800` / `fg2` | #363636 | Default body text |
| Surface | `p1-white` / `bg` | #FFFFFF | Pages and cards |

- Build UI with the semantic names: `bg`, `bg-alt`, `bg-tint`, `bg-inverse`, `surface-card`, `fg1`–`fg4`, `fg-on-dark`, `fg-on-dark-2`, `accent`, `brand`, `link`, `border`, `hairline`.
- Text on light grounds: `fg1` for headings, `fg2` for body, `fg3` for secondary. `fg4` (2.8:1) is for placeholders and labels only.
- Text on dark purple: `fg-on-dark` for headlines, `fg-on-dark-2` for body, `p1-orange-500` for highlights.
- The orange CTA with white text is 2.5:1, below AA. The brand keeps it; set the label bold, uppercase and at least 14px, and never put small white text on `accent`.
- The mood is warm. Orange carries the emotion; purple carries authority. Cool greys and blues don't belong.

### Type

- **Instrument Serif** (`--font-display`) sets display headlines: `hero-display`, `display`, `h1`, `h2`. It has one weight (400) plus italic. Never bold it; emphasise with italic `<em>`. Never set it below 28px (`fs-28`).
- **Instrument Sans** (`--font-sans`) sets everything else: `h3`–`h5`, `body`, `lede`, `small`, `eyebrow`, buttons, navigation, forms.
- **Figures** (prices, stats, counters) stay in the sans via `--font-figure` at `weight-black`, `tracking-tight`, tabular numerals, so they read as data.
- Both faces load from Google Fonts; `colors_and_type.css` imports them.
- Tracking: `tracking-snug` on headings, `tracking-eyebrow` (+0.12em) on uppercase eyebrows and CTA labels.
- Line height: `lh-tight` for display and `h1`, `lh-snug` for headings, `lh-relaxed` for body.
- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.

### Spacing and layout

- 4px base grid: `space-1` (4) through `space-24` (96).
- Marketing sections breathe: `space-20`–`space-24` vertical padding. Components stay tight: `space-2`–`space-4` inside.
- Center marketing pages on a 1200px container with 28px side padding; hero and footer colour blocks run full-bleed behind it.
- 12-column grid, 24px gutters (`space-6`) on desktop.
- Mark transitions on long pages with a 4px `p1-purple-800` ribbon at the section's top edge.

### Radii

| Token | Px | Use |
|---|---|---|
| `radius-xs` | 4 | Inline tags, code chips |
| `radius-sm` | 6 | Inputs and selects |
| `radius-md` | 10 | Default cards and panels |
| `radius-lg` | 16 | Feature cards, hero blocks |
| `radius-xl` | 24 | Large showcase containers, device mockups |
| `radius-pill` | 999 | Primary CTAs, eyebrow chips, badges |

The pill is a recurring brand shape. Every "Request a Demo" or "Learn More" button is a pill.

### Elevation and borders

- Shadows are purple-tinted, never neutral grey: `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`.
- `shadow-cta` glows orange and belongs only to the primary CTA at rest.
- Cards use a 1px `hairline` border **and** `shadow-sm`; never shadow alone.
- Borders: `hairline` (#ECECEC), `border` (#D9D9D9), `border-strong` (#9B9B9B).

### States

| State | Treatment |
|---|---|
| Primary CTA hover | `accent` → `accent-hover`, shadow lifts one step, `translateY(-1px)` |
| Primary CTA press | Shadow drops, `translateY(1px)` |
| Secondary / ghost hover | Fill picks up `brand-soft` |
| Link hover | `link` → `link-hover`; keep the underline |
| Card hover | `shadow-sm` → `shadow-md`, `translateY(-2px)` |
| Focus | 2px ring in `focus-ring` at 2px offset |

`focus-ring` (#FFB347) reads on dark purple but is only 1.8:1 on white. On light grounds, pair it with a `brand` inner ring so focus stays visible.

### Motion

- `easing-standard` for hovers, fills and slide-ins; `easing-spring` only for icon hovers and success states.
- `dur-fast` (120ms) for colour and opacity, `dur-base` (220ms) for fills and slides, `dur-slow` (380ms) for entrances.
- No bounces, no big swooshes. Brief and calm.

### Backgrounds and imagery

- White is the default surface. Alternate sections between `bg` and `bg-tint`.
- Heroes sit on flat `p1-purple-900`: no gradient mesh, no noise.
- One sanctioned gradient: `linear-gradient(135deg, var(--p1-purple-800), var(--p1-orange-600))`, only for the hero wordmark fill or a single decorative ribbon such as the `CtaBand` ground.
- No full-bleed photo heroes. Keep photography inside cards, lockups, or a device-on-a-colour-block composition.
- Photography is warm, well-lit, slightly desaturated: real teams in offices, hospitality and retail on phones and headsets, or a clean device shot. Never abstract, never hand-drawn illustration or mascots.

### Transparency

Two uses only:
1. Sticky navbar: `rgba(255,255,255,0.86)` with `backdrop-filter: blur(12px)` and a `hairline` bottom border.
2. Photo overlay on a dark hero: flat `rgba(42,14,69,0.55)`, no blur.

### Cards

- **Default card:** `surface-card`, `radius-md`, 1px `hairline`, `shadow-sm`, `space-6` padding. Title in `fg1`, body in `fg3`.
- **Feature card:** `radius-lg`, no border, `shadow-md`. A 56×56 `brand-soft` tile holds an orange icon at top-left.
- **Selected pricing card:** `p1-purple-800` ground, white type, `shadow-lg`, optional `accent` ribbon top-right.

### Fixed chrome

- Navbar: sticky, blurred white, 72px tall on desktop, 56px on mobile.
- The phone number sits top-right in the navbar and again in the footer and CTA band, with the phone icon. This is a telecom; the number is part of the chrome.
- The live-chat launcher is a 60px orange circle pinned bottom-right, glowing with `shadow-cta`.

## Iconography

- **Icon set:** Lucide-style line icons, 24px box, 1.75px stroke, round caps and joins. The `Icon` component carries the set used across the kit (`phone`, `chat`, `bubble`, `video`, `users`, `headset`, `sparkle`, `shield`, `globe`, `check`, `x`, `chevronDown`, `arrowRight`, `mic`, `send`, `menu` and four social marks). This is a flagged substitution: no official PressONE icon set has been supplied.
- Default icon colour is `p1-purple-800`; orange (`accent`) on hover or inside feature tiles.
- **Logo:** the PressONE wordmark with the dot-grid mark at left: a 3×4 grid, top two rows purple (#45166A), bottom rows gold/orange (#FAA633 / #FF8200), bottom-right cell omitted to imply an arrow. Use the uploads in **Logos**:
  - `pressone-logo.svg`: full colour, for light grounds.
  - `pressone-logo-white.svg`: white knockout, for `p1-purple-900` and photography.
  - `pressone-mark.svg`: the dot grid alone, for favicons and small lockups.
  - **pressone-favicon** holds the favicon set (SVG plus 16–512px PNGs).
- Never redraw, recolour or re-space the mark.
- Unicode `→` may follow CTA link text. Don't use Unicode glyphs for navigation or status.

## Components

The React components below live in `ui_kits/website/`. They are a hi-fi recreation of the pressone.net marketing site, not production code. Their layout styles live in `ui_kits/website/styles.css`; `ui_kits/website/index.html` wires them into one page.

| Component | Purpose | Props |
|---|---|---|
| `Icon` | Shared line-icon set | `name`, `size`, `color`, `strokeWidth`, `style` |
| `Navbar` | Sticky blurred nav: logo, links, phone CTA, menu | `onDemoClick`, `onChatClick` |
| `Hero` | Purple hero: eyebrow, serif headline, dual CTA, stats, live-call mockup | `onDemoClick` |
| `LogoStrip` | "Trusted by" wordmark strip (placeholder names) | — |
| `ProductGrid` | Six product cards with icon tiles | — |
| `FeatureSection` | Copy-and-visual deep-dive row on `bg-tint` | — |
| `Testimonial` | Customer quote on `p1-purple-800` | — |
| `Pricing` | Three plans, middle one featured | `onDemoClick` |
| `CtaBand` | Closing CTA band before the footer | `onDemoClick` |
| `Footer` | Multi-column footer on dark purple | — |
| `ChatLauncher` | Pinned live-chat button and panel | — |
| `DemoModal` | "Request a Demo" form with success state | `open`, `onClose` |

The showcase pages (Buttons, Buttons dark, Badges, Card feature, Card pricing, Hero CTA, Iconography, Inputs, and the Website UI kit page) are plain HTML references: copy their markup and class recipes.

## Files in this repo

| Path | What it is |
|---|---|
| `colors_and_type.css` | All tokens as CSS custom properties, the Instrument Serif and Sans imports, and element-level type rules. Link it from any page you build. |
| `tokens.json` | Every token with its value and a usage note. |
| `product_sheets/` | Printable product sheets (US Letter). `index.html` links them all. Shared styles: `sheet.css`, `brochure.css`. |
| `preview/` | One small card per foundation: colors, type, spacing, radii, elevation, logos, and showcase components. |
| `ui_kits/website/` | The pressone.net marketing-site recreation. |
| `icons/` | Microsoft Teams connector icons. |
| `assets/` | Logos (full colour, white knockout, mark) and `pressone-favicon/`. |
| `fonts/` | The Encode Sans family, kept from the previous type system. |
| `uploads/` | Source files: the GreenStar style guide PDF and original logo files. |
