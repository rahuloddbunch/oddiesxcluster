# Original User Instructions

Hey I want you to create two new homepage templates (from the cureent one) for an A/B test.

Variant #1:
- remove the postcode checker 
- Move the "Our Customers say it Best" to be above "Why Pick Oddies?"
- Spruce up the product cards in the "Choose Your Box" Section. They're looking a little plain. Also, I would highlight the number of people the box serves (can be found on the `people` product metafield). I'm attching huel as layout/design inspo but do not completely copy them. We should use Oddies brand colors, I don't want the quick add to cart button. 
- Put a "Bestseller" badge like huel has on the "Medium Mixed Box"

Variant #2:
- SAME CHANGES AS VARIANT #1
- Remove hero image and CTA and just go straight into the box grid.

# Tasks

## Task 1

**Type:** add_theme_section

Create two new homepage templates (variant-1 and variant-2) by duplicating the current homepage so they can be used in an A/B test. Preserve existing section settings and blocks from the original template but give each new template a clear handle and descriptive name so they can be targeted by the A/B test tool or theme settings. Ensure both templates are added to the theme and are selectable in the Shopify theme editor.

**Section Type:** other

## Task 2

**Type:** modify_theme_component

Remove the postcode checker element from the new homepage variants so it does not render on either variant. If the postcode checker is rendered by a dedicated section or a block within the homepage, remove or conditionally hide that section/block only for the two new templates (do not remove from the original template).

## Task 3

**Type:** modify_theme_component

Re-order the homepage sections on both new variants so the 'Our Customers say it Best' section appears above the 'Why Pick Oddies?' section. Implement the change in the duplicated templates only and ensure spacing and responsive behavior remain consistent after reordering.

## Task 4

**Type:** modify_theme_component

Redesign the product cards in the 'Choose Your Box' section to be more visually engaging while staying on-brand with Oddies colors. Highlight the number of people served by each box by reading the product's 'people' metafield and displaying it prominently on the card; remove the quick-add-to-cart button from these cards. Use the provided Huel image as layout inspiration (do not copy), update typography, spacing and card accents to match Oddies branding, and ensure mobile and desktop layouts work well.

## Task 5

**Type:** modify_theme_component

Add a 'Bestseller' badge to the Medium Mixed Box product card in the 'Choose Your Box' grid. Implement the badge to display when the product handle or a dedicated product metafield indicates the Medium Mixed Box; if the handle differs, add an admin-editable product metafield (e.g., 'is_bestseller') to control the badge so it can be toggled without code changes.

## Task 6

**Type:** modify_theme_component

For variant-2 only, remove the hero image and the hero CTA block so the page flows directly into the box grid on load. Ensure any required spacing or visual separators are handled so the top of the box grid aligns cleanly with the page top and that SEO/relevant hero metadata is preserved if needed.

