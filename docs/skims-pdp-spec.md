# SKIMS Product Page (PDP) — build spec

Reference: https://skims.com/en-eg/products/cotton-jersey-mini-dress-cherry-blossom
Captured 2026-06-25 @ 1600px viewport. Target: rebuild SBJ PDP to match.

## Layout
Two columns. LEFT = large image gallery (~50% width), RIGHT = info column.
- Gallery: big primary image, left/right arrows overlaid, zoom (+) icon top-left, wishlist heart top-right, "MODEL SIZING" pill bottom-left. Likely a vertical/horizontal image set.
- Info column right, vertically near top.

## Right column, top to bottom
1. **Eyebrow** (fabric): `COTTON JERSEY` — 12px, weight **700**, ls normal, uppercase text, color #2D2A26.
2. **Name**: `MINI DRESS` — 24px, weight **400**, ls **0.6px**, uppercase text, #2D2A26.
3. **Price**: `EGP 3,655` — 16px, weight **500**, ls 0.4px.
4. **Color label row**: small `Limited Edition` / `Color Spotlight` tag + the selected color name (e.g. **Cherry Blossom**), bold.
5. **Color swatches**: row of ~14px square swatches (same as cards), active has outline ring.
6. **Size**: label `Size` left + `Size Guide` link right. Then a grid/row of **9 size buttons**: XXS XS S M L XL 2X 3X 4X (bordered boxes, ~square).
7. **CTA button**: full-width (~320px+ / 100%). Before size chosen: text `Select a Size`, **white bg, grey text + 1px grey border**, 16px. After size chosen: becomes dark `Add to Bag`.
8. **Tabs / accordion**: `Details` · `Fit & Fabric` · `Shipping & Returns` with the description body under Details.

## Our current PDP (to change)
- `templates/product.json` has eyebrow_pdp custom-liquid + native blocks.
- `sbj-card-css.liquid` PDP rules: title 26px/700 (change toward 24px/400 ls0.6), price Inter 16px, full-width black add-to-cart.
- Need: square color swatches on PDP, size buttons styled like SKIMS, CTA "Select a Size" grey-outline state, Details/Fit/Shipping tabs, gallery with arrows + MODEL SIZING.

## Notes
- Sizes on our products are XS–XL (5). SKIMS shows XXS–4X (9). Consider expanding size option to match, or leave 5.
- Keep eyebrow/name/price consistent with the collection card styling already shipped.
