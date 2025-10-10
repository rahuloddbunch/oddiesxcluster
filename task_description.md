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

Create a new homepage template (Variant #1) by duplicating the current homepage. The duplicate should preserve existing blocks/settings but be isolated so changes below only affect this variant (used for A/B testing).

**Section Type:** other

## Task 2

**Type:** modify_theme_component

Remove the postcode checker from Variant #1 so it no longer appears on that homepage template. This should be removed or hidden only on the variant template, not deleted globally, so the original homepage remains unchanged.

## Task 3

**Type:** modify_theme_component

Reorder the homepage sections so the “Our Customers say it Best” (testimonials) section appears above the “Why Pick Oddies?” section on Variant #1. Ensure the move preserves responsive stacking and spacing across breakpoints.

## Task 4

**Type:** modify_theme_component

Redesign the product cards in the “Choose Your Box” section on Variant #1: update markup and CSS to produce a tasteful, elevated card (not just generic shadow/hover). Use Oddies brand colors, remove the quick-add-to-cart button, and display the number of people served using the product.metafields (people). Use the attached HUEL screenshot as visual inspiration but do not copy it exactly.

**Images:**
- huel_inspo_screenshot.png

## Task 5

**Type:** modify_theme_component

Add a “Bestseller” badge styled like the badge in the provided screenshot to the Medium Mixed Box card on Variant #1. Implement this as a conditional badge (initially target the Medium Mixed Box by its product handle or ID) and provide a future-proof toggle (e.g., by product tag or metafield) so the badge can be moved to other products later.

**Images:**
- huel_inspo_screenshot.png

## Task 6

**Type:** add_theme_section

Create a second homepage template (Variant #2) by duplicating Variant #1 and removing the hero image and CTA so the page starts directly with the Choose Your Box grid. Keep all other Variant #1 changes identical so Variant #2 differs only by the missing hero/CTA.

**Section Type:** other

