# PressONE Design System

> Visual + interaction toolkit for **PressONE — For Better Communications.**
> A 25-year-old (originally founded 1978 by parent AMP Networks) business
> communications provider selling hosted VoIP, SIP trunking, hosted call
> centers, omnichannel contact centers, AI voice agents, chatbots, business
> messaging, POTS replacement, and ERP/CRM integrations. Small, nimble team —
> the brand promise is **live, dedicated, human support.**

---

## Index

| File | Purpose |
|---|---|
| `colors_and_type.css` | All design tokens — color palette, semantic vars, typography scale, spacing, radii, shadows, easing. Import this from any HTML you build. |
| `assets/` | Logos (full color + white knockout + isolated mark) and brand imagery. |
| `fonts/` | The full Encode Sans family (standard, condensed, semi-condensed, semi-expanded, expanded widths × all weights). Wired up in `colors_and_type.css` via `@font-face`. |
| `preview/` | One small HTML card per design-system concept. These power the Design System tab. |
| `ui_kits/website/` | High-fidelity recreation of pressone.net components and key marketing screens. |
| `SKILL.md` | Cross-compatible Agent Skill manifest — describes how an AI agent should use this folder. |

---

## Sources used to build this system

- **Brand style guide PDF** — *PressONE Website Style Guide*, prepared by GreenStar Marketing. Defines the official palette + Encode Sans typeface + button treatments + hero mockup.
- **Logo files** — `newlogo20160223_nonbold_outline (1).500x90png.png` (PNG, transparent) and `newlogo20160223_nonbold (1).ai` (Illustrator master — not directly readable; PNG was used).
- **Live product copy** — https://pressone.net (Hosted VoIP, Omnichannel Contact Center, POTS Replacement, Hospitality, Cloud Phone System blog posts).
- **GitHub repo** — https://github.com/shripald/p1design (placeholder — currently contains only a README. Reader is encouraged to explore once it's populated for higher-fidelity component references.)

---

## Content Fundamentals

PressONE's voice, distilled from the live website and the GreenStar-authored
copy guidance:

> *"All copy will be written with your ideal business persona in mind to
> assure that visitors are receiving the same level of professionalism and
> brand representation that they would receive when talking with a team
> member."*

**The vibe.** Conversational, plain-spoken, lightly witty. Authoritative
without being corporate. Says the quiet part out loud. Drops the marketing
hedge and just tells you what the thing does. A small-team voice — never
"enterprise-speak."

**Person & address.**
- **You / your** (always, talking *to* the customer) — *"Your phone system should keep up."*
- **We / our** (the team, not a faceless brand) — *"We built hosted VoIP to actually solve the problems…"*
- First-person plural is the default — it reinforces the "live dedicated support" promise. Don't use third-person ("PressONE delivers…") in body copy.

**Casing.**
- Sentence case for headings (proper-noun product names capitalize: *Hosted VoIP, Omnichannel Contact Center, POTS Replacement, SIP Trunking*).
- Wordmark is always **PressONE** — `Press` + `ONE`, no space, "ONE" in caps. *Never* "Press One" or "Pressone."
- Tagline: **For Better Communications** (title case).
- UPPERCASE used sparingly — eyebrow labels, button text on key CTAs (`REQUEST A DEMO`, `LEARN MORE`).

**Sentence shapes.**
- Short and punchy. Mix one-liners with longer explanatory sentences.
- Rhetorical questions are a signature move: *"Power outage? Flooded break room? Random squirrel chewing through a cable?"*
- Em-dash + casual aside is on-brand: *"Phones aren't tied to desks anymore."*
- Ellipsis as a beat-pause is in voice: *"You just… log in, set things up, and go."*
- Don't be afraid of fragments. *"Done." "Easy."*

**Numbers and proof.**
- Concrete, rounded numbers beat vague claims: *"cut phone system costs by up to 70 percent,"* *"Handle over 80 percent of routine inquiries,"* *"save as much as 25%."*
- Always spell out "percent" in long-form prose; use `%` in tight UI (pricing, stat cards).

**Emoji.** Rare. The LinkedIn social feed uses ✅ in bullet lists, but the website itself does not. **Default: no emoji.** If used, only ✅ for benefit checklists.

**What to avoid.**
- "Cutting-edge / world-class / industry-leading" — bland enterprise filler.
- "Seamlessly" appears in older marketing copy. The newer voice is sharper; prefer concrete verbs.
- Avoid "solutions" as a noun-noun-noun stack. Pair it with what it solves.

**Sample copy in voice.**

> Title: *Tired of duct-taping three tools together?*
> Body: *We built hosted VoIP to actually solve the problems that affect how your business communicates — bad call quality, clunky tools, overcomplicated pricing. You just log in, set things up, and go. And when something does go sideways, you get a real person on the phone. (Yes, really.)*

---

## Visual Foundations

### Colors

The brand palette is locked by the style guide. Two anchor families plus
neutrals — **no third hue** has license to appear.

| Role | Token | Hex | Use |
|---|---|---|---|
| **Primary brand** | `--p1-purple-800` | `#45166A` | Wordmark "PRESS", headlines, navbars, link hover-on-light. |
| Deep extension | `--p1-purple-900` | `#2A0E45` | Hero backgrounds, footer. |
| Mid purple | `--p1-purple-600` | `#8154A4` | Secondary accents, decorative shapes. |
| Soft purple | `--p1-purple-400` | `#AE8CC8` | Body text on purple bg, dividers. |
| **Accent / CTA** | `--p1-orange-600` | `#FF8200` | Primary buttons, "ONE" in wordmark, key data points. |
| Gold accent | `--p1-orange-500` | `#FAA633` | Highlights, hover-glow, the bottom rows of the dot-grid mark. |
| Body ink | `--p1-ink-800` | `#363636` | Default body text (per style guide). |
| Page surface | `--p1-white` | `#FFFFFF` | Cards, hero text plates. |

The full ramp with neutrals is in `colors_and_type.css`. Semantic
aliases (`--bg`, `--fg1..4`, `--accent`, `--brand`, `--link`, `--focus-ring`)
are defined there too.

**Vibe.** Warm. The orange does the heavy emotional lifting; the purple
gives the system its authority. Cool greys and blues do **not** belong here.

### Typography

- **Family: Encode Sans** (Google Fonts) — used for *everything*: display, headers, body, captions, UI. There is no secondary face.
- **Weights in play:** 300 (large display only), 400 (body), 500/600 (UI + subheads), 700 (headlines), 800 (hero/display).
- **Letter-spacing:** tight on large display (`-0.02em`), neutral on body, wide (`+0.12em`) on UPPERCASE eyebrows + button labels.
- **Line-height:** `1.05` hero, `1.2` headlines, `1.5–1.65` body.
- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.

### Spacing & rhythm

A **4-px base grid** scaled `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`. Marketing
sections breathe (`80–96 px` vertical padding); UI components stay tight
(`8–16 px` internal).

### Corner radii

| Token | Px | Use |
|---|---|---|
| `--radius-xs` | 4 | Inline tags, code chips. |
| `--radius-sm` | 6 | Form inputs. |
| `--radius-md` | 10 | Cards, panels. |
| `--radius-lg` | 16 | Hero CTAs, feature cards. |
| `--radius-pill` | 999 | The primary button shape, eyebrow chips. |

The style guide's button mockup uses a **fully pill-shaped** primary CTA —
that's our default for any "Request a Demo" / "Learn More" action.

### Elevation / shadow

Shadows are **purple-tinted, not neutral grey** — they keep the warm brand
temperature. Five steps: `xs / sm / md / lg / cta`. The `--shadow-cta`
token glows orange (`rgba(255,130,0,0.32)`) and is reserved for the primary
CTA in resting state.

### Borders

Hairline `#ECECEC`, standard `#D9D9D9`, strong `#9B9B9B`. Cards use a 1px
hairline + a `--shadow-sm`; we **don't** rely on shadow alone.

### Animation

- **Default easing:** `cubic-bezier(0.2, 0.7, 0.2, 1)` — a soft, confident ease-out. Stored in `--easing-standard`.
- **Spring easing** (`--easing-spring`, `cubic-bezier(0.34, 1.56, 0.64, 1)`) — used sparingly for icon hovers, success states.
- **Durations:** `120ms` fast (color/opacity), `220ms` base (hover-fills, slide-ins), `380ms` slow (entrance animations, drawer reveals).
- **No bounces, no big swooshes.** Confident, brief, calm.

### Hover & press states

| State | Treatment |
|---|---|
| **Primary CTA hover** | Background `--p1-orange-600` → `--p1-orange-700` (darken ~6%) + lift shadow one step. |
| **Primary CTA press** | Drop shadow + shift `translateY(1px)`. |
| **Secondary / ghost hover** | Outline thickens 1→2px in `--brand`, fill picks up `--brand-soft` tint. |
| **Link hover** | Color shifts from `--p1-purple-600` → `--p1-orange-600`. |
| **Card hover** | Shadow `--shadow-sm` → `--shadow-md`, `translateY(-2px)`. |
| **Focus** | 2-px outer ring in `--focus-ring` (`#FFB347`) at 2-px offset. |

### Backgrounds & imagery

- **White is the default surface.** Sections alternate `--bg` and `--bg-tint` (`#F8F4FB`).
- **Hero sections** use `--p1-purple-900` flat (no gradient mesh, no noise).
- **No full-bleed photo heroes** — photography is contained in cards, in lockups, or as a "device-on-a-color-block" composition.
- **No hand-drawn illustrations.** Imagery is photographic — warm, well-lit, slightly desaturated stock of office/hospitality/retail teams using phones and headsets. Always shows people *or* a clean device shot, never abstract.
- **No gradient backgrounds in marketing**, beyond the one subtle exception below.
- **One sanctioned gradient:** purple-to-orange diagonal, used only for the "PressONE" hero wordmark fill or a single decorative ribbon. Token: `linear-gradient(135deg, var(--p1-purple-800) 0%, var(--p1-orange-600) 100%)`.

### Transparency & blur

Used sparingly. The two sanctioned uses:
1. **Sticky nav** — `rgba(255,255,255,0.86)` + `backdrop-filter: blur(12px)`, hairline bottom border.
2. **Image overlay on dark hero** — `rgba(42,14,69,0.55)` flat fill, *no blur*, to drop white text legibly on a photo.

### Cards

- **Default card:** white surface, `--radius-md` (10px), 1px hairline border, `--shadow-sm`. Internal padding `24px`. Title in `--fg1`, body in `--fg3`.
- **Feature card on the homepage:** larger `--radius-lg` (16px), no border, `--shadow-md`. Icon (orange) sits in a `--brand-soft` rounded square at top-left, 56×56.
- **Pricing card (selected):** purple `--p1-purple-800` background, white type, `--shadow-lg`, optional `--accent` ribbon at top-right.

### Capsules / pills

- The pill is a **recurring brand shape** — primary CTA, eyebrow chips, status badges, the "ONE" implied highlight in lockups.
- Pills use solid fills (no outline-only) except for status badges: 1px in `currentColor`, fill at `12% currentColor`.

### Fixed elements

- Top nav: sticky, blurred white, 72-px tall on desktop, 56 on mobile.
- Phone-number CTA pinned top-right (this is a telecom — the phone number is part of the chrome, not an afterthought).
- "Live chat" launcher pinned bottom-right (orange circle, 56-px).

### Layout rules

- Marketing pages center on a **1200-px max-width container**; full-bleed colour blocks extend behind it for hero/footer.
- 12-column grid, 24-px gutters on desktop.
- Major sections break with a `--p1-purple-800` thin ribbon (4-px tall) at the top edge to mark transitions on long pages.

---

## Iconography

The PressONE codebase isn't public, so no proprietary icon set was available.

- **Substitution flagged:** This system standardises on **Lucide** (1.5-px stroke, 24-px box) for all UI iconography, loaded from CDN. Lucide's stroke weight and rounded line caps match the friendly-but-precise tone of the brand. *Please replace with the official set if/when shared.*
- **Logo / mark.** The PressONE logo is a wordmark with a small **pixel-grid mark** at the left — a 3×4 dot pattern, top two rows purple (`#45166A`), bottom two rows gold/orange (`#FAA633`/`#FF8200`), with the bottom-right cell omitted to form an implied arrow shape. The mark is available standalone (`assets/pressone-mark.png`) for favicons / small lockups.
- **Logo variants in `assets/`:**
  - `pressone-logo.png` — primary, full colour on transparent (raster).
  - `pressone-logo.svg` — same, as crisp vector (outlines, no font dependency).
  - `pressone-logo-white.png` — knockout white for use on `--p1-purple-900` and photography.
  - `pressone-logo-white.svg` — knockout vector.
  - `pressone-mark.png` — just the dot grid (raster, sampled from the original logo).
  - `pressone-mark.svg` — the same dot grid as a clean vector for scaling up to favicon-or-billboard size.
- **Emoji.** Not used in product UI. Only ✅ may appear in feature checklists (matching social-channel usage).
- **Unicode characters as icons.** Acceptable for arrows in inline links: `→` after CTA link text. Do not use for navigation or status (use Lucide).
- **Hand-drawn illustrations / mascots.** None. Don't introduce any.

---

## Caveats & open questions for the next iteration

> The bold ask is at the bottom of this turn's reply — these are the
> specifics.

1. **GitHub `shripald/p1design`** currently contains only a README — no component code was pulled. Once populated, the UI kit can be re-derived from real source.
3. **Hero mockup + imagery samples** are referenced in the GreenStar PDF but not embedded as separate files; the renderings could not be cleanly extracted in this session. The "Visual Foundations → Backgrounds & imagery" rules are based on the live pressone.net site plus the PDF's textual description ("warm, photographic, people-and-devices"). Please share photo references if a specific photo-style library exists.
4. **Icon set is a flagged substitution (Lucide)** — please supply the official icon set if there is one.
5. **AI logo source file** (`.ai`) is in `uploads/` but not directly readable in this environment; PNG was used as the visual source of truth.

