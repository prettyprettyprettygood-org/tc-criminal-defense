# Site Plan — Criminal Defense Attorney Site

This is the design and build plan for the client site. It expands on `PROJECT_BRIEF.md` with the
specifics needed to actually build the pages. Treat this as the working plan; update it as real
copy, brand decisions, and assets come in from the client.

Built on the Astro Mission-First Template — see `README.md`, `docs/STANDARDS.md`, and
`docs/WCAG_2.2_CHECKLIST.md` for the rules this plan must stay inside.

## 1. Client Facts (Confirmed)

- Attorney: **Carol I. Zacheiss** — solo criminal defense attorney, **strictly criminal defense,
  no civil law of any kind.** Applied sitewide (nav brand, page titles, footer, metadata).
- Phone: **(804) 352-3550**. Wired into `src/config/site.ts` (`phone`/`phoneHref`) and used on the
  Contact page and Home closing CTA.
- 34 years practicing (started roughly 1992, as of 2026): 7 years as a prosecutor in Brooklyn and
  the Bronx, NY; prosecutor at the Richmond City Commonwealth's Attorney's Office (violent crime,
  Domestic Violence Team); Petersburg Public Defender's Office; helped open two new Public
  Defender's Offices in the Tidewater region; now in private criminal defense practice.
- Serves the Tri-Cities area of Virginia: **Hopewell, Prince George, and Petersburg.**
- Pronouns: she/her.
- Business cards are dark blue and white — this is the anchor for the site's color theme.
- Desired tone: **"Something very classy that really sticks out — nothing too flashy."**
- Wants a slogan/tagline (see Section 4) — still needs her sign-off.
- Explicitly does **not** practice traffic law ("I don't really do traffic at all... my practice is
  criminal defense") — dropped from Practice Areas. Client also sent an old bio from a prior
  employer that mentioned Concealed Carry Permit appeals alongside traffic; kept CCW appeals
  (bundled with gun rights restoration) since only traffic was explicitly disclaimed, but flag for
  her to confirm.
- Provided asset: `public/images/law-firm.jpg` — a bronze/brass Lady Justice statue (scales,
  blindfold) against a warm neutral wall. Works well with a navy + brass palette.
- Bio content (Home/About) is now real, rewritten from scratch in an original voice rather than
  reused from her prior employer's bio, per her request. Practice Areas descriptions are grounded
  in her real background. Remaining lorem ipsum is limited to office address — see Section 8.

## 2. Brand & Visual Direction

### 2.1 Color palette

"Classy, stands out, not flashy" plus dark-blue/white business cards points toward a deep navy
and white palette with a small amount of muted brass/gold as an accent — echoing the bronze tone
of the Lady Justice statue image without tipping into "gold and glitzy." No bright/saturated
colors, no gradients-as-decoration.

Proposed values for the existing token system in `src/styles/global.css` (names must stay the
same; only values change, per the "no hard-coded component colors" rule in `docs/STANDARDS.md`):

| Token | Value (applied) | Purpose |
| --- | --- | --- |
| `--tone-bg` | `#f6f6f4` | Page background — soft off-white, not stark white |
| `--tone-bg-accent` | `#e6ecf2` | Subtle blue-tinted background wash |
| `--tone-surface` | `#ffffff` | Cards, panels |
| `--tone-surface-strong` | `#eef1f5` | Slightly stronger panel surface |
| `--tone-text` | `#16202b` | Body/heading text — near-black navy-charcoal |
| `--tone-text-muted` | `#55606b` | Secondary text |
| `--tone-border` | `#7c8a99` | Hairlines, card/input borders |
| `--tone-primary` | `#16324f` | Dark navy — matches business cards; primary buttons, brand |
| `--tone-primary-hover` | `#0e2136` | Navy hover state |
| `--tone-primary-contrast` | `#ffffff` | Text on navy |
| `--tone-secondary` | `#2c5d8f` | Lighter steel blue — links, secondary emphasis |
| `--tone-accent` | `#8a6a22` | Muted brass/gold — kickers, small accents only, used sparingly |
| `--tone-ring` | `#16324f` | Focus ring |

Applied to `src/styles/global.css`. Contrast checked against WCAG 2.2 AA (relative-luminance
formula): body text ~15:1, muted text ~5.9:1, brass-gold kicker text ~4.66:1 (clears the 4.5:1
normal-text threshold), white-on-navy buttons ~13–16:1, and the border tone ~3.2–3.5:1 against
background/surface (matching the original template's border contrast for input/card boundaries).

Notes:

- Brass/gold is kept as a *minor* accent (eyebrow text, small dividers, icon backgrounds) — not
  buttons or large fills — to stay "classy," not "flashy."
- `--font-display` was changed to a serif system stack (`Georgia, 'Times New Roman', serif`) for
  headings only, for a more traditional law-firm feel — no new font dependency added.

### 2.2 Typography

Template default is `system-ui` for both body and display fonts. For a more traditional,
upscale law-firm feel without adding a new font dependency (site-builder mode does not add
dependencies unless requested), set `--font-display` to a refined serif system stack for
headings only, and keep `--font-body` as the existing sans stack for readability:

- `--font-display: Georgia, 'Times New Roman', serif;`
- `--font-body:` unchanged (`system-ui, sans-serif`)

This is a token-value change only, consistent with allowed Site Builder work.

### 2.3 Imagery

- `public/images/law-firm.jpg` (Lady Justice statue) as the Home page hero image — pairs
  naturally with the navy/brass palette.
- Consider reusing a cropped/smaller version as a quiet accent on the About or Contact page.
- Flag for phase two: a generic Justice statue is common in the industry; professional photography
  of the attorney and/or office would strengthen trust and differentiation once available.

## 3. Sitemap

| Page | Route | Priority |
| --- | --- | --- |
| Home | `/` | Day one |
| About | `/about` | Day one |
| Practice Areas | `/practice-areas` | Day one |
| Contact | `/contact` | Day one |
| FAQ | `/faq` | Phase two |
| Results / Testimonials | `/results` | Phase two — see compliance note in Section 7 |

Build new pages from `src/pages/example.astro`'s scaffold and structure per
`docs/agents/site-builder/README.md`; keep section spacing/rhythm consistent with Home.

## 4. Slogan Directions (Draft — needs client sign-off)

She wants "a slogan of some sort." Draft options to bring to her, all restrained/no gimmicks,
built around the 34-years and Tri-Cities angle:

1. "Three Decades of Trusted Criminal Defense."
2. "Serving the Tri-Cities for Over 30 Years."
3. "Experienced Defense. Uncompromising Advocacy."
4. "Criminal Defense, Backed by 34 Years of Experience."
5. "Tri-Cities Criminal Defense — Built on Experience."

Treat these as placeholders in the hero copy until she picks/edits one or supplies her own.

## 5. Page-by-Page Content Plan

Component choices follow `docs/STANDARDS.md` (Card reserved for browsable collections; use
FeatureItem/TimelineItem/InfoBlock for pillars, steps, and contact-style info).

### Home (`/`)

1. **Hero** — kicker, H1 (slogan candidate, still pending her sign-off), real hero copy summarizing
   her 34-year career, primary CTA ("Request a Consultation" / call), `law-firm.jpg` as hero image.
2. **Credibility strip** — `FeatureItem` row: "34 Years of Experience," "Tri-Cities Focused,"
   "Criminal Defense Only."
3. **Practice areas preview** — `FeatureItem` grid of 4 real focus areas, linking to
   `/practice-areas` (not `Card`, since these are pillars, not a browsable collection).
4. **About preview** — real bio excerpt + link to `/about`.
5. **Service area** — `InfoBlock` listing Hopewell, Prince George, Petersburg, VA.
6. **Closing CTA** — contact prompt + call button using `SITE.phone`.

### About (`/about`)

- Full attorney bio — rewritten from scratch (not reused from her prior employer's bio) covering:
  NY prosecutor background, Richmond prosecutor role, Petersburg Public Defender's Office, opening
  two Tidewater Public Defender's Offices, current practice focus, and personal interests.
- `TimelineItem` sequence for career milestones. No exact years were given beyond "34 years" and
  "first seven years" in NY, so eyebrows use era labels (Early Career / Richmond / Petersburg /
  Tidewater / Today) rather than fabricated dates.
- Emphasizes criminal-defense-only focus explicitly.

### Practice Areas (`/practice-areas`)

- Intro paragraph stating the practice is strictly criminal defense, no civil matters.
- `FeatureItem` grid, grounded in her real background: Drug Crime Defense, Firearms & Weapons
  Charges, Fourth Amendment / Search & Seizure Defense, Criminal Record Expungement, Gun Rights
  Restoration & Concealed Carry Permit Appeals, Protective & Restraining Order Matters, General
  Criminal Defense. Traffic intentionally excluded (see Section 1).

### Contact (`/contact`)

- `InfoBlock` for phone (real, `tel:` link via `SITE.phone`/`SITE.phoneHref`), email (still
  placeholder), and office address (still placeholder).
- Service area list (Hopewell, Prince George, Petersburg, VA / Tri-Cities).
- A live submission form needs backend enablement — see
  `docs/agents/template-maintainer/BACKEND_ENABLEMENT.md` — only if she wants one.

## 6. Missing Inputs Needed From Client

- Email address and office address(es) — still placeholder on the Contact page.
- Bar admission year/state and education credentials for the About page (only "34 years" and
  "first seven years in NY" are confirmed; no exact dates were given).
- Confirmation that the Practice Areas list in Section 5 is complete/accurate, and whether CCW
  permit appeals should stay listed (only traffic was explicitly disclaimed).
- Slogan pick (from Section 4 or her own) — the homepage H1 is still a draft.
- Preference on whether case results/testimonials should appear at all (see Section 7).
- Headshot/office photos, if available, for phase two.

## 7. Compliance Note (Flag for Client/Bar Review)

Attorney advertising is subject to Virginia Rules of Professional Conduct (Rule 7.1–7.5-type
restrictions common to most states): avoid unverifiable superlative claims ("best," "top") without
support, and any testimonials/results section typically needs a disclaimer that past results don't
guarantee future outcomes. This is a planning flag, not legal advice — confirm exact wording
requirements with her before publishing a Results/Testimonials page.

## 8. Content Status

Name, phone, and bio content are now real (see Section 1). Remaining placeholders: office address
and email on the Contact page, exact bar admission year, and the final slogan pick. Don't treat the
current homepage H1/slogan as final — it's still a draft awaiting her sign-off from Section 4.

## 9. Build Checklist

- [x] Apply palette from Section 2.1 to `src/styles/global.css` tokens.
- [x] Update `--font-display` per Section 2.2.
- [x] Update `src/config/site.ts` (name, nav, footer links, phone) with real values.
- [x] Build Home, About, Practice Areas, Contact from the Example scaffold.
- [x] Place `law-firm.jpg` in the Home hero.
- [x] Verify WCAG 2.2 AA contrast on the new palette (`docs/WCAG_2.2_CHECKLIST.md`).
- [x] Run `npm run validate` before handoff.
- [ ] Get client sign-off on the slogan/H1 (Section 4).
- [ ] Fill in office address and email once client provides them.
- [ ] Confirm Practice Areas list accuracy with client, especially the CCW-appeals item.

## 10. Design Pass 2 (Applied)

Follow-up polish pass on top of the initial build:

- **Section rhythm**: bumped `--space-16` gaps to a fluid `clamp(3.5rem, 6vw, --space-24)` between
  sections, and added two reusable section modifiers to `global.css` — `.section--panel` (a subtle
  full-bleed tinted band for visual separation) and `.section--frame` (a bordered/elevated card
  treatment used for closing-CTA sections). Applied in an alternating rhythm across all four pages.
- **Icons**: added `src/components/ui/Icon.astro`, a small inline-SVG icon primitive. Icons are
  copied directly from Lucide's `lucide-static` package (ISC license) rather than added as an npm
  dependency, per the template's default of not adding dependencies without being asked — this was
  an explicit request, so a dependency-free approach was used instead of installing `lucide-astro`.
  Used in the `FeatureItem` icon slot (credibility strip, both Practice Areas grids) and inline
  next to Contact page `InfoBlock` text (new `.inline-icon` utility class).
- **Navbar**: nav links now right-align (`justify-content: flex-end` instead of `center`).
- **Meta/OG**: `BaseLayout.astro` now emits Open Graph and Twitter Card tags (title, description,
  `og:image` defaulting to `law-firm.jpg`, `og:site_name` from `SITE.name`). `og:image`/
  `twitter:image` are currently relative paths — convert to absolute URLs once the production
  domain is set (Operations section of `PROJECT_BRIEF.md` still lists hosting as TBD).
- **Favicon**: replaced the generic template mark with a navy rounded-square badge containing a
  white scales-of-justice glyph (`public/favicon.svg`), plus regenerated `public/favicon.ico`
  (multi-size) and added `public/apple-touch-icon.png` (180×180) to match.
