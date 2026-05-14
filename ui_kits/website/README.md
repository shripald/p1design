# PressONE — Marketing website UI kit

A hi-fi recreation of the pressone.net marketing surface, built on the
tokens in `colors_and_type.css`. This is a **visual + interaction**
recreation, not production code.

## What's here

- **`index.html`** — interactive click-thru. Top navbar, hero, product grid, contact-center deep-section, testimonials, pricing, CTA band, footer, sticky live-chat launcher, working "Request a Demo" modal.
- **`Navbar.jsx`** — sticky white-blur navbar with phone-number pinned right, dropdown menus, mobile drawer.
- **`Hero.jsx`** — purple hero with eyebrow + heading + dual CTA + supporting numbers strip.
- **`ProductGrid.jsx`** — three-up icon-card grid (Hosted VoIP / Omnichannel / AI).
- **`FeatureSection.jsx`** — alternating image-left/text-right rows for product deep dives.
- **`LogoStrip.jsx`** — "Trusted by" customer logo strip (placeholder marks).
- **`Pricing.jsx`** — three-tier pricing with featured plan.
- **`Testimonial.jsx`** — quote block on purple tint.
- **`CtaBand.jsx`** — orange CTA band before the footer.
- **`Footer.jsx`** — multi-column footer on purple-900.
- **`ChatLauncher.jsx`** — pinned bottom-right round chat button (interactive).
- **`DemoModal.jsx`** — modal that pops on "Request a Demo" with a form.

## How it ran

The codebase repo at `shripald/p1design` is empty save for a README, so
component shapes here were derived from:
- The official PressONE style guide PDF (palette, typography, button shape).
- The live site at https://pressone.net (copy, section composition, voice).
- The tokens defined in this design system's `colors_and_type.css`.

If/when the GitHub repo is populated with real components, this kit
should be re-derived from that source.
