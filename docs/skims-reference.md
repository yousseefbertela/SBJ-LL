# SKIMS Homepage — Exact Reference Spec

> Source: `https://skims.com/en-eg` · Measured at viewport **1440 × 900**, DPR 1 · Values pulled from **live computed CSS** (not estimated).
> Scope: header, nav (top-level only — mega-menu dropdowns excluded for now), homepage sections, footer, components, video.
> Underlying platform: SKIMS runs a custom Hydrogen/Tailwind front end. We will rebuild this on **Horizon (native Shopify)**; the values below are the target to match.

---

## 1. Design Tokens

### 1.1 Fonts
| Role | Family (exact) | Notes |
|------|----------------|-------|
| Display / headlines | **"Tstar Pro Headline"**, sans-serif | Loaded face is weight **900**; CSS applies it at `font-weight:400` but it always renders heavy. Tokens: `--font-primary`, `--font-tstar`. |
| Secondary | **"Tstar Pro Bold"**, sans-serif | Face weight 600. Token: `--font-secondary`. |
| Body / UI | **"Inter"**, "Helvetica Neue", Helvetica, Arial, sans-serif | Variable 100–900. Tokens: `--font-inter`, `--text-p`. |
| Mono | ui-monospace, SFMono-Regular, Menlo… | rarely used |
| Logo | inline **SVG** (108×24, `fill:#2D2A26`) | not a font |

⚠️ **Licensing:** "T-Star / Tstar Pro" is a **commercial licensed font** (not free). Inter is free (OFL).

✅ **Decision (build):** ship now with a **free grotesque substitute** for headlines, keep **Inter** for body. Real T-Star is a later one-line `@font-face` swap — no layout change (same metrics/letter-spacing targets in this doc).
- **Display substitute → `Archivo`** (Google Fonts, OFL), used at weight **800–900** for the heavy neutral-grotesque look. Tune letter-spacing to the values in this doc.
- Alt if we want punchier all-caps: `Anton` (single heavy weight, more condensed).
- **Body → `Inter`** (already what SKIMS uses).

### 1.2 Colors (exact hex)
| Token(s) | Hex | Use |
|----------|-----|-----|
| `onyx` / `primary` / `black` / `mink` / `brown` / `on-surface` | **#2D2A26** | All primary text, icons, logo (warm near-black) |
| `dark` | #000000 | true black (rarely used) |
| `white` / `marble` / `surface` / `light` | **#FFFFFF** | header, footer, section bgs |
| hero/banner text | **#F6F6F6** | overlay text on media (NOT pure white) |
| `lightGray` / `grayLighter` / `gray-105` | **#FAF8F5** | off-white panel background |
| `bone` | #FBF9EC | warm cream |
| `grayDark` / `darkGray` / `gray-darker` | **#E8E5DF** | borders / dividers |
| `gray-200` | #B6B1AD | |
| `gray-300` | #95918E | |
| `gray-500` | #6F6C69 | |
| `gray-600` | #615E5C | |
| `tertiary` / `subdued` | #787572 | muted text |
| `sand` | #E5CDB5 | warm accent |
| `clay` | #B69A81 | warm accent |
| `sienna` / `secondary` | #986B58 | warm accent / nav hover underline |
| `sale` (red-600) | #B6263D | sale price |
| `error` (red-500) | #CD2D2D | errors |
| `success` (green-500) | #007963 | success |

### 1.3 Type scale (`rem` → px @ root 16px)
| Token | rem | px | line-height |
|-------|-----|----|-----|
| xxs | .625 | 10 | — |
| xs | .75 | 12 | calc(1/.75) |
| sm | .875 | 14 | 1.25/.875 |
| base | 1 | 16 | 1.5 |
| lg | 1.125 | 18 | 1.75/1.125 |
| xl | 1.25 | 20 | 1.75/1.25 |
| 2xl | 1.5 | 24 | 2/1.5 |
| 3xl | 1.875 | 30 | 1.2 |
| 4xl | 2.25 | 36 | 2.5/2.25 |
| 5xl | 3 | 48 | 1 |

Line-height tokens: tight **1.25**, snug **1.375**, normal **1.5**, relaxed **1.625**.
Letter-spacing tokens: `tracking-wide` **.025em**, `tracking-wider` **.05em**, `letterSpacing-normal` **.04em**.

### 1.4 Spacing scale (base unit = 4px / .25rem)
`sm` **8px** · `md` **12px** · `base` **16px** · `lg` **24px** · `xl` **32px** · `3xl` **48px** (applies to both `margin-*` and `padding-*` tokens).

### 1.5 Layout
- Max content width: **1440px** (`--max-width-1440`). Also 1600px variant.
- Breakpoints: sm **428** · lg **1024** · xl **1280** · 2xl **1440** · 3xl **1600**.
- Cart drawer width: **384px** (`--aside-width`) / 450px (`--width-drawer`).

---

## 2. Header (sticky, white)

Total sticky header ≈ **96px** = promo bar (48) + nav row (48). `position: sticky; top: 0; z-index: 50;` Background **#FFFFFF** (the dark bar seen on first paint is a load flash — stable state is white).

### 2.1 Promo / announcement bar
- Container: `flex items-center border-b px-5 md:h-12 md:px-6`
- Height **48px**; horizontal padding **20px** mobile → **24px** desktop; **border-bottom** 1px (#E8E5DF).
- Text: Inter **12px** / line-height **16px** / weight **400** / letter-spacing normal / transform none / color **#2D2A26** / **centered**.
- Copy rotates: "International Shipping Available" / "Enjoy our great international shipping rates".

### 2.2 Nav row
- Container: `flex h-12 items-center justify-between border-b pr-6 pl-4`
- Height **48px**; padding-left **16px**, padding-right **24px**; **border-bottom** 1px.
- **Left:** SKIMS wordmark — inline **SVG 108×24**, fill **#2D2A26**.
- **Center/left nav links** (`subheading-3 lg:subheading-2`): Inter **14px** / weight **700** / line-height **20px** / letter-spacing normal / transform none / color **#2D2A26**.
- **Right icons:** Search · Account · Wishlist · Bag — ~**20×20px** line SVG icons, stroke #2D2A26.
- **Hover/active state:** thin bottom-border underline under the item (warm tone, ~#986B58).

### 2.3 Top-level menu items (left → right)
`New` · `Nike×SKIMS` (inline logo 66×10) · `Swim` · `Best Sellers` · `Clothing` · `Bras` · `Underwear` · `Shapewear` · `Mens` · `Accessories` · `Sale`
*(Mega-menu dropdown contents intentionally out of scope here.)*

---

## 3. Homepage Sections (top → bottom, exact @1440)

Container `div.home`, content height **4326px** (y 48 → 4374). Sections are **full-width grid rows** stacked with **thin spacer rows (10–20px)** between them — **no section margins, no side gutters**. Full-bleed media bands are **sized by their media aspect ratio**, not fixed vh.

| # | Section | Top (y) | Height | Media | Aspect |
|---|---------|--------:|-------:|-------|--------|
| 1 | **Hero** | 48 | **851** | full-bleed image | 1440×851 ≈ 1.69:1 |
|   | spacer | 899 | 20 | — | |
| 2 | **Category 4-up** | 919 | **479** | 4 portrait images | grid |
|   | spacer | 1398 | 20 | — | |
| 3 | **MENS** | 1418 | **851** | **full-bleed VIDEO** | 1440×851 ≈ 1.69:1 |
|   | spacer | 2269 | 10 | — | |
| 4 | **Two-up split** | 2279 | **710** | left = square VIDEO, right = image | each ~720×710 |
|   | spacer | 2989 | 20 | — | |
| 5 | **Nike×SKIMS Studio** | 3009 | **675** | full-bleed image | 1440×675 ≈ 2.13:1 |
|   | spacer | 3684 | 15 | — | |
| 6 | **TRENDING carousel** | 3699 | **371** | product cards | — |
| 7 | **Brand statement** | 4070 | **304** | text only | — |
|   | **Footer** | 4374 | 735 | | |

### 3.1 Hero
- Full-bleed image, `object-fit: cover`.
- Headline ("PINK-OBSESSED"): **Tstar Pro Headline / 48px / lh 56px / letter-spacing 1.2px / color #F6F6F6 / left**.
- Subhead: Inter **16px / lh 24px / #F6F6F6 / left**.
- CTA "Shop Now": Inter **14px / weight 700 / lh 20px / color #FFFFFF / `text-decoration: underline`** — no box, no border, no padding (underlined bold text).
- Text block anchored **bottom-left**, ~**24px** inset.

### 3.2 Category 4-up
- Grid: `grid-cols-2 md:grid-cols-4 gap-3 md:gap-6` → desktop **4 columns × 342px**, **gap 24px**, full-bleed (4×342 + 3×24 = 1440). Mobile = 2 columns, gap 12px.
- Each cell: portrait image + label beneath. Labels: BRAS · UNDERWEAR · TEES & TANKS · PANTS.

### 3.3 MENS (video) — see §6 for video spec
- Full-bleed autoplay video band (1440×851), `object-fit: cover`.
- Headline "MENS": Tstar Pro Headline **48px / lh 56px / ls 1.2px / #F6F6F6**.
- Subhead: Inter 16px/24px, #F6F6F6. CTA: underlined bold "Shop Now". Text bottom-left.

### 3.4 Two-up split (Color Spotlight | Bralette Bundles)
- Two equal full-bleed halves (~720px each), height **710px**.
- **Left** = square **video** 710×710 (Color Spotlight: Pink). **Right** = image (Bralette Bundles).
- Overlay headline: Tstar Pro Headline **30px / lh 36px / ls 0.75px / #FFFFFF / left** + subhead + underlined "Shop Now".

### 3.5 Nike×SKIMS Studio
- Full-bleed image band (1440×675). Headline + subhead + "Shop Now" bottom-left (same overlay system as Hero/Mens).

### 3.6 TRENDING carousel
- Section title "TRENDING": Tstar Pro Headline **20px / lh 24px / ls 0.5px / #2D2A26 / left**.
- Horizontal carousel with prev/next arrows + counter (e.g. 1/3). Card grid item width token **355px**.
- See §4.2 for card spec.

### 3.7 Brand statement
- Centered statement: Tstar Pro Headline **36px / lh 48px / ls 0.9px / #2D2A26 / center**.
- Copy: "SKIMS IS A SOLUTIONS ORIENTED BRAND CREATING THE NEXT GENERATION OF UNDERWEAR, CLOTHING AND SHAPEWEAR."

---

## 4. Components

### 4.1 Buttons / CTAs
- **Primary on-media CTA ("Shop Now"):** Inter **14px / 700 / lh 20px**, color **#FFFFFF** (on dark media) or **#2D2A26** (on light), **underline**, no fill, no border, no padding.
- **Newsletter submit:** solid **#2D2A26** square button with white "→" arrow.

### 4.2 Product card (Trending)
- Image on neutral background; **wishlist heart** icon top-right.
- Eyebrow (collection, e.g. "FITS EVERYBODY"): Inter **10px / weight 500 / lh 14px / letter-spacing 0.25px / `text-transform: uppercase` / #000000**.
- Name (e.g. "STRAPLESS BRA"): Tstar Pro Headline **14px / 400 / lh 20px / ls 0.35px / #2D2A26**.
- Price (e.g. "EGP 2,925"): Inter **10px / weight 500 / lh 14px / ls 0.25px / #2D2A26**.

---

## 5. Footer (white)

- Background **#FFFFFF**, height ~**735px**, divider borders **#E8E5DF**.
- Preceded by the centered brand statement (§3.7).
- Layout: 3 link columns + centered newsletter block.
  - **Column heading** (HELP / MORE): Tstar Pro Headline **16px / 400 / lh 20px / ls 0.4px / #2D2A26 / centered**.
  - **Links:** Inter **12px / 400 / line-height 28px / #2D2A26 / centered** (note the roomy 28px line-height).
  - **Newsletter heading** "STAY IN THE KNOW": Tstar Pro Headline **24px / lh 30px / ls 0.6px / #2D2A26 / centered**.
  - **Email input:** Inter **12px / lh 16px**, + solid dark square "→" submit button. Consent microcopy below.
  - **SMS:** "Text SKIMS to 68805…" + consent microcopy.
- **Social row** (centered): Instagram · Facebook · YouTube · X · TikTok.
- **Bottom bar:** left = region/currency selector (🇪🇬 **EGP**); right = legal links: **Sitemap · CA Transparency Act · Accessibility · Privacy · Terms · Do Not Sell or Share My Personal Information**.

### Footer link inventory
- **HELP:** Return Center · Order & Return Tracking · Size Guides · Ordering · Shipping · International · FAQs · Contact Us
- **MORE:** About · Store Locator · Environmental and Social Partnerships · Careers · Blog

---

## 6. Video (exact)

All `<video>` elements share: `autoplay loop muted playsinline`, **no controls**, **no poster** (first frame via `video-thumbnail=auto`), `object-fit: cover`. Hosted MP4 on imgix at **bitrate 3M**.

| Where | Dimensions | Source pattern |
|-------|-----------|----------------|
| **Mens** (full-bleed band) | 1440 × 851 | `skims.imgix.net/videos/.../<hash>.mp4?fm=mp4&video-bitrate=3M&video-thumbnail=auto` |
| **Color Spotlight** (two-up left, square) | 710 × 710 | same pattern, different hash |
| (hidden lazy thumb) | 0 × 0 | gif→webm |

**Pattern to replicate:** silent, controls-free, looping background video that behaves exactly like an image banner with text + CTA overlaid. (We host our own MP4 on Shopify; we do not hotlink SKIMS assets.)

---

## 7. Caveats
- Measured **desktop @1440** only. Mobile (sm 428) to be measured before building responsive.
- Headlines ship with **Archivo** (free) per decision in §1.1; T-Star is a later swap. Body = Inter (exact).
- Mega-menu dropdown panels intentionally excluded (per request) — to be specced separately.
