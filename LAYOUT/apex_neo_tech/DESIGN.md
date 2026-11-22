---
name: Apex Neo-Tech
colors:
  surface: '#111411'
  surface-dim: '#111411'
  surface-bright: '#373a36'
  surface-container-lowest: '#0c0f0c'
  surface-container-low: '#191c19'
  surface-container: '#1d201d'
  surface-container-high: '#282b27'
  surface-container-highest: '#333632'
  on-surface: '#e1e3dd'
  on-surface-variant: '#c3caae'
  inverse-surface: '#e1e3dd'
  inverse-on-surface: '#2e312d'
  outline: '#8d947a'
  outline-variant: '#434934'
  surface-tint: '#a2d800'
  primary: '#ffffff'
  on-primary: '#263500'
  primary-container: '#bbf527'
  on-primary-container: '#516e00'
  inverse-primary: '#4c6700'
  secondary: '#c4c8c1'
  on-secondary: '#2d312d'
  secondary-container: '#464a45'
  on-secondary-container: '#b6b9b3'
  tertiary: '#ffffff'
  on-tertiary: '#2a3329'
  tertiary-container: '#dbe5d8'
  on-tertiary-container: '#5d675c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#bbf527'
  primary-fixed-dim: '#a2d800'
  on-primary-fixed: '#141f00'
  on-primary-fixed-variant: '#384e00'
  secondary-fixed: '#e0e4dc'
  secondary-fixed-dim: '#c4c8c1'
  on-secondary-fixed: '#191d18'
  on-secondary-fixed-variant: '#444843'
  tertiary-fixed: '#dbe5d8'
  tertiary-fixed-dim: '#bfc9bc'
  on-tertiary-fixed: '#151e15'
  on-tertiary-fixed-variant: '#40493f'
  background: '#111411'
  on-background: '#e1e3dd'
  surface-variant: '#333632'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system establishes a high-performance, dark-mode-first aesthetic for cutting-edge software platforms. Rooted in technical precision, high-velocity data visualization, and minimalist developer-centric sensibilities, it caters to enterprise innovators, engineers, and digital asset leaders.

The visual style blends modern technical minimalism with high-contrast neo-tech elements:
- **Tone:** Authoritative, razor-sharp, visionary, and hyper-modern.
- **Visual Motif:** Deep basalt and obsidian canvas foundations (#090C09) anchored by modular bento structures, luminous electric lime signals (#C4FF33), and atmospheric radial illumination.
- **Interface Structure:** Crisp 1px translucent boundaries frame dense metrics, high-precision analytics, and pill-shaped interactive triggers.

## Colors
The palette balances an ultra-deep green-tinted charcoal ground with high-impact electric lime accents for focused user orientation.

- **Primary (`#C4FF33`):** Electric lime for critical calls to action, active states, key metric highlights, and directional focus. On dark canvas, text renders in `#090C09` when placed over lime fills.
- **Secondary (`#131713`):** Surface card graphite providing baseline contrast against canvas backgrounds.
- **Tertiary (`#222B22`):** Elevated card tiers, subtle input tracks, and interactive hover surfaces.
- **Neutral (`#090C09`):** The primary canvas ground, complemented by `#0E120E` for subtle background transitions.
- **Text & Borders:** High-tier text is anchored with `#FFFFFF` (pure white) and `#94A3B8` (slate neutral for secondary text). Structural outlines use pure white at 8% opacity (`rgba(255, 255, 255, 0.08)`), transitioning to `rgba(196, 255, 51, 0.3)` on hover states.

## Typography
The system couples `Plus Jakarta Sans` for aggressive, tight-tracking headlines with `Inter` for optimal tabular reading, metric display, and UI controls.

- **Headlines:** Set in `Plus Jakarta Sans` with tight kerning (`-0.02em` to `-0.03em`). Headline spans frequently mix crisp `#FFFFFF` copy with single primary lime highlight phrases (`#C4FF33`) to drive eye flow.
- **Body & Metrics:** `Inter` handles operational copy and micro-labels. Digits across charts and dashboard cards utilize monospace feature settings (`font-feature-settings: 'tnum' on, 'cv05' on`) to ensure zero jitter during real-time data streaming.

## Layout & Spacing
The layout adheres to a modular 12-column bento-grid framework engineered for flexible technical showcases, product telemetry, and feature deep dives.

- **Desktop (1200px+):** 12-column grid, max-width 1280px, with `1.5rem` gutters and generous `2.5rem` section spacing. Bento cards span 4, 6, 8, or 12 columns.
- **Tablet (768px - 1199px):** 8-column grid with `1.25rem` gutters, reflowing complex bento setups into 4-column paired blocks.
- **Mobile (< 768px):** Single-column stack with `1rem` outer canvas padding and compact `space-md` gaps.
- **Background Grid Texture:** A subtle 32px × 32px technical grid pattern drawn via `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)` spans behind the primary viewport canvas to reinforce the architectural tech theme.

## Elevation & Depth
Depth in this system avoids murky black drop shadows, relying instead on low-contrast structural outlines and diffuse radial illumination:

- **Surface Tiers:**
  - *Base Canvas:* `#090C09`
  - *Bento Panels / Surface Cards:* `#131713`
  - *Elevated / Floating Overlays:* `#1C221C`
- **Ghost Outlines:** Every card and modal is defined by an ultra-thin `1px` border with `rgba(255, 255, 255, 0.08)`. This keeps containers crisp and architectural.
- **Radial Glows & Ambient Lights:** Primary feature sections employ deep radial green gradient backdrops (`radial-gradient(circle at 50% 0%, rgba(196, 255, 51, 0.12) 0%, transparent 70%)`) to create a halo behind device mockups, metric charts, and featured cards.
- **Interactive Focus:** Hovered cards introduce an outer glow: `box-shadow: 0 0 24px rgba(196, 255, 51, 0.15)`.

## Shapes
The system utilizes pill-shaped geometry for all functional interactive items, balanced against large rounded bento containers:

- **Buttons, Badges, and Chips:** Full pill radius (`roundedness: 3` / `9999px`) provides a tactile, modern software aesthetic.
- **Bento & Feature Cards:** Scaled at `rounded-xl` (24px to 32px) to preserve a soft, modern housing for inner content.
- **Input Fields:** Semi-pill or generous `rounded-lg` (16px) curvature to match button heights effortlessly.

## Components

### Buttons
- **Primary CTA:** Full pill shape, solid `#C4FF33` fill, text in `#090C09` (`Plus Jakarta Sans` semi-bold). On hover, soft brightness elevation and a tight `0 0 16px rgba(196, 255, 51, 0.4)` bloom.
- **Secondary / Ghost:** Full pill shape, background `rgba(255, 255, 255, 0.04)`, `1px` border `rgba(255, 255, 255, 0.12)`, text `#FFFFFF`. Hover transitions border to `rgba(196, 255, 51, 0.5)` and text to `#C4FF33`.
- **Icon / Utility Triggers:** Circular pill containers (40px × 40px) housing micro-icons, featuring `#131713` fill with `1px solid rgba(255, 255, 255, 0.08)`.

### Cards & Bento Modules
- **Default Card:** Surface fill `#131713`, `1px` outer border `rgba(255, 255, 255, 0.08)`, border radius `24px`, padding `space-lg` to `space-xl`.
- **Hero Featured Card:** Full solid accent fill `#C4FF33` with `#090C09` typography, deployed strategically to break monotony and emphasize primary product offerings.
- **Telemetry Card:** Dark surface containing sparklines in `#C4FF33`, glowing nodes, and clean tabular Inter typography with secondary captions in `#94A3B8`.

### Chips & Badges
- **Status Chips:** Pill-shaped, `rgba(196, 255, 51, 0.1)` background with `1px solid rgba(196, 255, 51, 0.25)`, text in `#C4FF33`, accompanied by a 6px pulsing green indicator dot.
- **Counter / Pill Avatars:** Overlapping user clusters framed with `2px solid #090C09` boundaries paired with a trailing pill badge displaying aggregate counts (`168K+ Realtime Users`).

### Form Inputs & Fields
- **Input Ground:** Background `#0E120E`, border `1px solid rgba(255, 255, 255, 0.1)`. Radius `16px`.
- **Focus State:** Border shifts to `#C4FF33`, subtle green ambient inner glow `0 0 0 1px #C4FF33`.
- **Checkboxes & Radios:** Pill or rounded-sm indicators with dark fill and crisp `#C4FF33` inner markers when active.