# Original User Instructions

Hey I want you to create two new homepage templates (from the cureent one) for an A/B test.

Variant #1:
- remove the postcode checker 
- Move the "Our Customers say it Best" to be above "Why Pick Oddies?"
- Spruce up the product cards in the "Choose Your Box" Section. They're looking a little plain. Also, I would highlight the number of people the box serves (can be found on the `people` product metafield). I'm attching huel as layout/design inspo but do not completely copy them. We should use Oddies brand colors, I don't want the quick add to cart button. 
- Put a "Bestseller" badge like huel has (see screenshot) on the "Medium Mixed Box"

Variant #2:
- SAME CHANGES AS VARIANT #1
- Remove hero image and CTA and just go straight into the box grid.

# Tasks

## Task 1

**Type:** modify_theme_component

Create two new homepage templates for the A/B test by duplicating the current homepage template into: homepage.variant1 (Variant #1) and homepage.variant2 (Variant #2). Keep all existing sections and settings in the duplicates as a starting point so changes can be implemented independently and each template can be selected in Shopify or by your A/B testing tool.

## Task 2

**Type:** modify_theme_component

Remove the postcode checker component from both Variant #1 and Variant #2 templates. Ensure the layout collapses cleanly where the postcode checker was (no large empty gaps) and any JS related specifically to that checker is not loaded on these templates.

## Task 3

**Type:** modify_theme_component

Re-order the homepage sections so the “Our Customers say it Best” section appears above the “Why Pick Oddies?” section on both variant templates. Ensure the move preserves section content, padding/margins, and responsive behavior.

## Task 4

**Type:** modify_theme_component

Redesign/spruce up the product cards in the “Choose Your Box” section on both variant templates: improve visual hierarchy (image, title, price), use Oddies brand colors for accents, remove the quick-add-to-cart button, and add a clear display of how many people each box serves by reading the product's `people` metafield. Use the Huel screenshot as high-level inspiration for card layout (badge/overlay, prominence of people-served), but do not copy — keep Oddies branding and tone.

## Task 5

**Type:** modify_theme_component

Add a “Bestseller” badge to the Medium Mixed Box product card in the Choose Your Box grid on both variants (visual style inspired by the Huel example but implemented in Oddies colors). Implement the badge so it can be keyed to the product (by handle, tag, or a simple setting) so content managers can toggle it later without code changes; if no product handle is available, match by product title.

## Task 6

**Type:** modify_theme_component

For Variant #2 only: remove the hero image and hero CTA section entirely and make the page start immediately with the Choose Your Box grid. Ensure spacing and visual flow are adjusted so the top-of-page looks purposeful (correct top padding, meta/title placement) and that SEO/title/structured data remain intact.

## Task 7

**Type:** custom_data_modeling

Implement theme code to read and surface the product metafield that contains the number of people served (the `people` metafield). Add a safe fallback when the metafield is missing (e.g., hide the people label or show ‘— people’) and make the metafield key configurable in a single spot so it can be adjusted if your metafield namespace/key differs across products.

## Task 8

**Type:** modify_theme_component

Final QA and A/B test preparation: verify both templates render correctly across desktop/tablet/mobile, confirm postcode checker is absent, the section order is correct, product cards show the people value and bestseller badge, and Variant #2 begins with the box grid. Prepare short implementation notes for the A/B testing tool (template names and URLs) and list any toggles/setting locations used (e.g., product handle for bestseller badge, metafield key used).

