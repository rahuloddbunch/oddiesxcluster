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

Create two new homepage templates for an A/B test by duplicating the current homepage template. Name them (for example) homepage.variant-1 and homepage.variant-2 and keep the original homepage untouched so the experiment can point to these two templates. Ensure both templates are selectable in the Shopify theme editor and that changes below are applied only to the new variants.

**Section Type:** other

## Task 2

**Type:** modify_theme_component

Remove the postcode checker component from both new homepage variants (variant-1 and variant-2) while leaving it intact on the original homepage. Ensure any JS/CSS related to the postcode checker is not loaded on the variant templates to avoid unnecessary requests.

## Task 3

**Type:** modify_theme_component

Move the “Our Customers say it Best” section so it appears above the “Why Pick Oddies?” section in both new variants. Preserve the existing content and settings of that customer/testimonial section while updating the template order only on the variant templates.

## Task 4

**Type:** modify_theme_component

Revamp the product cards inside the “Choose Your Box” section on both variants: improve layout and visual hierarchy using Oddies brand colors (not an exact copy of the Huel example), remove the quick-add-to-cart button, and visually highlight the number of people each box serves by showing the product's people metafield value on the card. Maintain responsive behavior and ensure the new styles apply only to the variant templates' box grid.

## Task 5

**Type:** custom_data_modeling

Read and expose the product metafield that stores the number of people the box serves (referred to as the `people` metafield). If the metafield does not exist or is in a non-standard namespace, add a fallback: allow display from a product tag or a simple theme setting, and document which namespace/key is expected so editors can populate it for each product.

## Task 6

**Type:** modify_theme_component

Add a “Bestseller” badge to the Medium Mixed Box card on both variants and provide a theme-side way to control which products show this badge (preferably via a product metafield or product tag so it’s editable from the admin). If the Medium Mixed Box is identified by handle or ID, implement the badge if that handle matches; otherwise support a tag/metafield toggle and include styles consistent with Oddies branding and the updated product card design.

## Task 7

**Type:** modify_theme_component

For Variant #2 only, remove the hero image and CTA block so the page immediately displays the box grid below (i.e., hero section removed/hidden in the homepage.variant-2 template). Ensure layout spacing is adjusted so the transition to the box grid is visually balanced and mobile layouts are handled appropriately.

