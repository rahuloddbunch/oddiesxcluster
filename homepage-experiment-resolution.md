# Homepage Experiment Resolution (index vs index.v2)

This runbook closes the homepage experiment by consolidating the winner into `templates/index.json`.

## Current experiment diff scope
- `templates/index.v2.json` (treatment homepage config/content/layout)
- `assets/index-v2-usp.css` (v2-only USP sizing/animation/spacing overrides)
- `layout/theme.liquid` (conditional include for `index-v2-usp.css` only when template suffix is `v2`)

## Option A: Control wins
Goal: keep default homepage (`index.json`) as canonical and remove experiment plumbing.

1. Keep `templates/index.json` unchanged.
2. Remove v2-only include from `layout/theme.liquid`:
   - Remove:
     - `{% if template.name == 'index' and template.suffix == 'v2' %}`
     - `{{ 'index-v2-usp.css' | asset_url | stylesheet_tag }}`
     - `{% endif %}`
3. Delete experiment artifacts:
   - `templates/index.v2.json`
   - `assets/index-v2-usp.css`
4. In Shopify admin, ensure homepage template is `index` (no suffix).

## Option B: Treatment wins
Goal: promote treatment to default homepage (`index.json`).

1. Replace default homepage template with treatment:
   - Copy `templates/index.v2.json` -> `templates/index.json`.
2. Keep treatment CSS active for default homepage:
   - Preferred: move contents of `assets/index-v2-usp.css` into `assets/custom.css` (or load it unconditionally).
3. Remove v2-only conditional include in `layout/theme.liquid` (it is no longer needed once treatment is default).
4. Remove deprecated experiment template:
   - `templates/index.v2.json`
5. Validate in Theme Editor/preview:
   - Hero + USP order
   - USP icon sizing (Fight Food Waste/Farmers)
   - USP animation timing with hero
   - No unexpected spacing between hero CTA and USP row
6. Cleanup redundant experiment scoping:
   - Remove selectors that only exist to target the `v2` suffix context.
   - Keep only the rules still required for the winning default homepage.
   - If moving CSS into `assets/custom.css`, delete duplicates and keep one final source for each rule.

## CSS/Code cleanup (required either outcome)
- Remove any experiment-only asset include logic in `layout/theme.liquid` once winner is merged.
- Remove orphaned files:
  - `assets/index-v2-usp.css` if no longer referenced.
  - `templates/index.v2.json` if treatment is merged or control is kept.
- Search for obsolete experiment selectors/comments and delete them:
  - `rg -n \"index-v2|__multicolumn_cK6CdD|__image_width_textslider_BhHDxR\" layout assets templates`
- Ensure no duplicate rules define the same USP sizing/animation in multiple files.

## Recommended verification checklist (both outcomes)
- Homepage loads on mobile and desktop.
- No console errors.
- `templates/index.json` is the single source of truth for homepage.
- No dead assets or conditional logic left from experiment.
