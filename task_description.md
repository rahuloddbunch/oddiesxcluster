# Original User Instructions

Hey I want you to create two new homepage templates (from the cureent one) for an A/B test.

Variant #1:
- remove the postcode checker 
- Move the "Our Customers say it Best" to be above "Why Pick Oddies?"
- Spruce up the product cards in the "Choose Your Box" Section. They're looking a little plain. Make them look BEAUTIFUL, TASTEFULLY. don't just give me some generic shadow and hover effect and call it a day. Also, I would highlight the number of people the box serves (can be found on the `people` product metafield). I'm attaching a screenshot from HUEL as layout/design inspo. Look at the design but do not completely copy them. We should use Oddies brand colors, I don't want the quick add to cart button. 
- Put a "Bestseller" badge like huel has (exctly likr the one in the screenshot) on the "Medium Mixed Box"

Variant #2:
- SAME CHANGES AS VARIANT #1
- Remove hero image and CTA and just go straight into the box grid.

# Tasks

## Task 1

**Type:** add_theme_section

Create two new homepage templates (A/B test variants) by duplicating the current homepage template. Name them clearly (e.g. homepage.ab_test_variant_1 and homepage.ab_test_variant_2) and keep all existing sections/settings from the source so each variant can be edited independently.

**Section Type:** other

## Task 2

**Type:** modify_theme_component

Remove the postcode checker component from both new homepage variants and ensure the surrounding layout/spacing reflows correctly after its removal. Make sure any scripts or CSS only loaded for that checker are not left orphaned on these templates.

## Task 3

**Type:** modify_theme_component

Move the "Our Customers say it Best" section so it appears above the "Why Pick Oddies?" section on both homepage variants. Preserve the content and settings of both sections while adjusting template order and spacing so the transition looks natural.

## Task 4

**Type:** modify_theme_component

Overhaul the product cards in the "Choose Your Box" section to a tasteful, elevated design using Oddies brand colors and refined visual treatments (not just a generic shadow/hover). Display the number of people served using the existing product metafield `people`, remove the quick-add-to-cart button, and add a prominent "Bestseller" badge (styled like the provided HUEL screenshot) specifically for the Medium Mixed Box. Use the provided HUEL screenshot as layout inspiration but do not copy it exactly; ensure the new cards are responsive and maintain existing product data (price, title, link).

**Pre-work done for this task:** 
            Added ss-featured-collection-10.liquid template at project/sections/ss-featured-collection-10.liquid.
            If the modification is minor, ignore this file and simply modify the existing component.
            If the modification requires major restyling, decide whether replacing the existing component with this prebuilt component aligns better with the plan's requirements.
            IF (and only if) you decide to use this prebuilt component, use `{{% render 'ss-featured-collection-10' %}}` to render the snippet in theme a section or block. Make sure to adapt styling, colors etc to match the user's context."
            

## Task 5

**Type:** custom_data_modeling

Add a lightweight product-level metafield(s) to manage badges: a boolean `is_bestseller` (true/false) and an optional `badge_text` (single-line string) so badges can be controlled from the admin going forward. Implement the product card logic to prefer the metafield value for displaying badges; if the metafield is absent, fall back to a hard-coded check for the Medium Mixed Box handle until the metafield is populated.

## Task 6

**Type:** modify_theme_component

For Variant #2 only: remove the hero image and CTA block so the page flows directly into the "Choose Your Box" product grid. Adjust vertical spacing and any scroll/anchor behavior so the page feels cohesive without the hero.

