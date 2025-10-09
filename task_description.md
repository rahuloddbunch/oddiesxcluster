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

Create a new homepage template 'variant-1' by duplicating the current homepage and applying the requested layout/content changes. This template will be the A variant for the test and should be kept separate from the live homepage so it can be used in A/B testing. Ensure the template preserves existing sections not explicitly changed.

**Section Type:** other

## Task 2

**Type:** add_theme_section

Create a second homepage template 'variant-2' by duplicating the Variant-1 template and removing the hero image and CTA so the page starts directly with the box/product grid. Keep all other Variant-1 changes identical so Variant-2 is identical except for the removed hero area.

**Section Type:** other

## Task 3

**Type:** modify_theme_component

Remove the postcode checker element from the homepage templates (both new variants). This is a straightforward removal of the component and any related JS/CSS so it no longer renders or attempts to initialize on the duplicated templates.

## Task 4

**Type:** modify_theme_component

Reorder the homepage sections so that the 'Our Customers say it Best' (testimonials) section appears above the 'Why Pick Oddies?' section. Update the homepage template(s) block order accordingly and ensure spacing/margins are adjusted so the transition looks natural.

## Task 5

**Type:** modify_theme_component

Redesign the product cards in the 'Choose Your Box' section to be visually richer using Oddies brand colors and improved layout (no quick-add to cart button). Update the card markup and CSS to include clearer product imagery, prominent title, price, and a styled primary CTA (view product or select) while removing the quick-add control.

## Task 6

**Type:** custom_data_modeling

Add support for showing the number of people each box serves on the product card by reading the product metafield 'people' (product.metafields.custom.people or similar). Implement a safe fallback if the metafield is missing (e.g., hide the label or show 'Serves X') and surface this value in the redesigned card near the product title or as a small callout.

## Task 7

**Type:** modify_theme_component

Add a 'Bestseller' badge to the Medium Mixed Box product card similar to the Huel example, implemented as a conditional badge. To keep it maintainable, show the badge when the product has a specific tag (e.g., 'bestseller') or when the product handle equals the Medium Mixed Box handle; if you prefer I will assume use of the 'bestseller' tag so the badge can be toggled without code changes.

