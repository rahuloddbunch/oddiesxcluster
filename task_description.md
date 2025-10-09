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

Create a new homepage template for Variant #1 by duplicating the current homepage. Name the template clearly (e.g., index.variant-1 or home.variant-1) and keep markup/sections identical to the original as a starting point so subsequent component changes can be applied to this template only.

**Section Type:** other

## Task 2

**Type:** add_theme_section

Create a new homepage template for Variant #2 by duplicating Variant #1 (or the current homepage) and name it clearly (e.g., index.variant-2 or home.variant-2). This template will receive the same component changes as Variant #1, with one additional change to remove the hero/CTA so the page opens directly to the box grid.

**Section Type:** other

## Task 3

**Type:** modify_theme_component

Remove the postcode checker module from both new variants (Variant #1 and Variant #2). This should hide or remove the postcode checker block from the duplicated templates only, leaving the original homepage unchanged.

## Task 4

**Type:** modify_theme_component

Re-order the testimonial/ratings block so that the “Our Customers say it Best” section appears above the “Why Pick Oddies?” section on both variants. Preserve existing styling and content, only change the DOM/section order within the template so the testimonial block renders first.

## Task 5

**Type:** modify_theme_component

Redesign the product cards in the “Choose Your Box” grid for both variants: update layout (spacing, typography), apply Oddies brand colors for accents, prominently show the number of people the box serves by reading the product 'people' metafield (displayed as “Serves X”), and remove the quick-add/add-to-cart button from the card. Use the provided Huel layout as inspiration for proportions and badge placement but do not copy it exactly.

## Task 6

**Type:** modify_theme_component

Add a visible “Bestseller” badge to the Medium Mixed Box product card in the Choose Your Box grid. Target the Medium Mixed Box by product handle (e.g., 'medium-mixed-box') or product ID — I will default to using the handle 'medium-mixed-box'; if the store uses a different handle please provide it — and style the badge in Oddies colors, positioned similarly to the inspiration.

## Task 7

**Type:** modify_theme_component

For Variant #2 only: remove or hide the hero image and the hero CTA/button so the page no longer shows the hero block and instead starts directly at the Choose Your Box grid. Ensure the markup remains accessible and spacing between the top of the page and the first section is adjusted to look natural.

## Task 8

**Type:** custom_data_modeling

Ensure the product 'people' metafield is surfaced to the theme and available inside the product card Liquid. Implement a fallback if the metafield namespace/key differs; by default check common locations (e.g., product.metafields.custom.people or product.metafields.global.people) and log or display nothing if missing. If the metafield does not exist, I will add a short dev note describing what admin changes are required.

