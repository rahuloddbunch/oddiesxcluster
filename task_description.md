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

Create two new homepage templates cloned from the current homepage for the A/B test: Variant #1 and Variant #2. The clones should preserve existing blocks and sections initially so further changes can be applied to each variant separately, and register them so they are selectable in the Shopify template selector.

**Section Type:** other

## Task 2

**Type:** modify_theme_component

Remove the postcode checker component from both new homepage templates so it no longer renders or runs its JS on those pages. Ensure removal does not leave layout gaps or break any scripts that expect the element to exist.

## Task 3

**Type:** modify_theme_component

Reorder the homepage sections in both new templates so the “Our Customers say it Best” section appears above the “Why Pick Oddies?” section. Update the template section order only for the two new templates (do not change the live default homepage) and verify spacing/responsive behavior after the swap.

## Task 4

**Type:** modify_theme_component

Redesign the product cards in the “Choose Your Box” section across both variants: improve visual hierarchy (image, title, price), apply Oddies brand colors for accents, and remove the quick-add-to-cart button from the card. Also add a visible label on each card that shows how many people the box serves (value pulled from the product metafield), and adjust spacing so the card remains responsive.

## Task 5

**Type:** custom_data_modeling

Expose and display the product metafield used for 'people' on product cards. Implement reading product.metafields (e.g. namespace.key such as product.metafields.custom.people) with a safe fallback (empty or ‘serves X’ default) and ensure the chosen metafield is available to the storefront JSON/template for both homepage templates.

## Task 6

**Type:** modify_theme_component

Add a “Bestseller” badge on the Medium Mixed Box product card only. Implement the badge with logic that targets the Medium Mixed Box (identify by product.handle or product.id — e.g., handle 'medium-mixed-box' — and document the identifier used), and style the badge using Oddies brand colors consistent with the redesigned cards.

## Task 7

**Type:** modify_theme_component

For Variant #2 only, remove the hero image block and the hero CTA from the template so the page jumps straight into the box grid on load. Confirm that removing the hero does not introduce layout shifts and that any hero-specific schema/SEO markup is handled appropriately (removed or preserved elsewhere as needed).

