# hash. design system

The single source of truth for how this portfolio looks and reads. Any new
section, page, or component follows this document.

## Brand

- Wordmark: `hash.` lowercase, Bricolage Grotesque 800, ink, violet full stop.
  No icon next to it.
- Favicon: ink rounded tile with a two-tone violet `#` (app/icon.svg). The
  favicon and the wordmark are different marks on purpose.
- Mascot: small SVG girl (bun, violet dress, ink lines). Footer rotates her
  stories every 12s with a `currently: …` caption. Case pages each get one
  fixed story. She never appears twice on one screen.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| page | #FAFAFC | page background |
| card | #FFFFFF | card surfaces |
| panel | #F4F4F8 | inner panels inside cards |
| line | #E8E8EE | 1px hairlines everywhere |
| ink | #17171C | headlines, body, primary buttons |
| muted | #6E6E78 | secondary text |
| faint | #9A9AA6 | captions, metadata |
| accent | #5E5CE6 | links-adjacent accents, chips, live dots, checkmarks |
| deep | #4644C7 | small accent text, hover, kickers |
| tint | #EEEEFC | chip backgrounds |

One accent only. Red #DC2626 and amber #A16207 may appear solely as status
text inside the FinConnect simulation. No green anywhere. No gradients.

## Typography

| Role | Font | Spec |
| --- | --- | --- |
| h1 | Bricolage Grotesque 800 | 38 to 56px, line-height 1.05 to 1.08, tracking -0.03em |
| h2 (section) | Bricolage Grotesque 800 | 30 to 34px, tracking -0.025em |
| card title | Bricolage Grotesque 700 | 15 to 19px, tracking -0.015 to -0.02em |
| body | Inter 400 | 15 to 16px, line-height 1.6 to 1.65 |
| small body | Inter 400 | 13 to 13.5px |
| kicker | JetBrains Mono 400 | 11px, lowercase, deep violet |
| chip / caption | JetBrains Mono 400 | 10 to 10.5px, lowercase (never lowercase credentials or codes) |

Copy rules: sentence case; NO em dashes anywhere (commas, colons, or rewrite;
hyphens in compound words are fine); numbers live in prose with mechanism,
never as display type; always "Wedbush Securities" in full; links have no
arrow decorations and signal themselves by color or underline only.

## Whitespace standard

All spacing sits on an 8px grid. These are the only vertical rhythms in use:

| Where | Value |
| --- | --- |
| Content max width | 1120px, 24px side gutters |
| Section vertical padding (home, work, chat) | 96px (py-24); 64px on mobile where it wraps |
| Page header top (case, about pages, hero) | 64px (pt-16), 96px on desktop hero (md:pt-24) |
| Case-page sub-section | 64px top margin (mt-16) + 48px padding above content (pt-12), hairline rule between |
| About-page content blocks | 48px gap (gap-12), 40px after each rule (pt-10) |
| Section kicker to title | 16px; title to content | 24 to 40px |
| Card padding | 24px feature (p-6), 18px standard, 12 to 14px inner panels |
| Grid gaps | 16px (gap-4) |
| Footer | 40px vertical padding (py-10), mascot at 150px wide |

If a new section needs spacing not listed here, round to the nearest value
above rather than inventing a new one.

## Cards

White, 1px `line` border, radius 14 to 16px, no shadows at rest. Rows inside
cards separate with 1px hairlines; values right-align. Hover: border turns
accent and the card lifts 4px on a 0.35s ease. Chips: mono tag (tint bg, deep
text, radius 6) or status pill (same colors, radius 999).

## Motion budget

Nothing animates outside this list:

1. Hero product cards: float loops (6 to 7.5s), spring cursor parallax, live
   miniatures. Plus the hero meta ribbon's blinking status dot (kfLivePulse,
   2.4s).
2. One site-wide scroll reveal: fade + 24px rise, 0.6s, 80ms stagger, once.
3. FinConnect simulation and mascot stories.
4. Card hover lift.

Every animation has a `prefers-reduced-motion` fallback (static, fully
visible). Reveals are guarded by watchdogs (`lib/useIoWorks.ts`,
`lib/useForceVisible.ts`) so content can never stay hidden.

## Structure

Nav: `hash.` + Home · Work · About · Let's Chat (routes, no anchors, no CTA
pill). Home: hero (name column + product cards + meta ribbon), about (one
paragraph + scene), how I work (beliefs with receipts), certifications,
footer. Hero status chip: right-aligned mono line directly under the nav,
NO rule under it: blinking accent dot + "open to opportunities" (deep) ·
"ny, nj" (faint). The clients line `infosys · wedbush securities · truist
bank` sits under the hero CTAs (faint mono), its original spot. Work: three builds + experience + skills.
About: story, studio scene, journey, education, off the clock, this site.
Chat: contact links + mailer mascot. 404: searcher mascot.
