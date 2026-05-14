---
name: pressone-design
description: Use this skill to generate well-branded interfaces and assets for PressONE, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a hosted-VoIP / unified-communications product.
user-invocable: true
---

# PressONE design skill

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out of `assets/` and import `colors_and_type.css` to inherit the
tokens — then create static HTML files for the user to view. If working on
production code, you can copy assets and read the rules here to become an
expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what
they want to build or design, ask some questions, and act as an expert
designer who outputs HTML artifacts _or_ production code, depending on the
need.

## What's here

- `README.md` — full brand brief: company context, content fundamentals (voice, casing, sample copy), visual foundations (colors, type, spacing, hover/press, layout rules), iconography. **Read this first.**
- `colors_and_type.css` — every design token as CSS custom properties: brand colors with semantic aliases, Encode Sans + scale, spacing, radii, shadows, easing. Import this from any HTML you build.
- `assets/` — logos (full color, white knockout, mark only).
- `preview/` — small per-concept preview cards (colors, type, components). Reference for visual fidelity.
- `ui_kits/website/` — hi-fi recreation of pressone.net (Navbar, Hero, ProductGrid, FeatureSection, Testimonial, Pricing, CtaBand, Footer, ChatLauncher, DemoModal). Copy components from here when prototyping new marketing pages.

## Quick brand cheatsheet

| Property | Value |
|---|---|
| Brand name | **PressONE** (one word, "ONE" caps; never "Press One"). Tagline: *For Better Communications*. |
| Primary purple | `#45166A` (`--p1-purple-800`) — wordmark "PRESS", headlines, navbars. |
| Primary orange | `#FF8200` (`--p1-orange-600`) — CTAs, "ONE" in wordmark, accent. |
| Typeface | Encode Sans (Google Fonts) — everything. |
| Default CTA shape | Pill (`--radius-pill`), orange fill, white text, orange glow shadow. |
| Voice | Conversational, plain-spoken, lightly witty. We/you. Em-dashes + rhetorical questions OK. No emoji except ✅. |
| Icons | Lucide, 1.75-px stroke, 24-px box. *Flagged substitution — replace if official set surfaces.* |

## Tips when building with this system

- Don't invent new colors. The brand is locked at **two hues + neutrals.** If something needs more variety, vary lightness within an existing ramp.
- Don't introduce a second typeface. Encode Sans does everything from 12px UI labels up to 80px display.
- Hero sections sit on flat `--p1-purple-900` — no gradient meshes, no noise textures.
- The one sanctioned gradient is `linear-gradient(135deg, #45166A → #FF8200)` and it's reserved for either the wordmark fill or a single CTA ribbon.
- Cards: white, `--radius-md` (10px) for utility cards, `--radius-lg` (16px) for feature cards. Always 1px hairline + a purple-tinted shadow.
- Phone-number CTAs are part of the product — surface them in nav and footer with the phone icon.
