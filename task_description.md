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

Create two new homepage templates by duplicating the current homepage: one for Variant A and one for Variant B (e.g. index.ab_test_a and index.ab_test_b). Apply the shared structural changes to both copies: remove the postcode checker component and move the “Our Customers say it Best” block to appear above the “Why Pick Oddies?” block. For Variant B only, remove the hero image and its CTA so the page starts directly with the box grid.

**Section Type:** other

## Task 2

**Type:** modify_theme_component

Redesign the product cards used in the “Choose Your Box” section to be visually elevated and tasteful (not just a simple shadow). Use Oddies brand colors and typography, remove the quick-add-to-cart button, surface the product 'people' metafield prominently (e.g. “Serves X people”), improve imagery layout/spacing, and add tasteful hover/focus states appropriate for desktop and mobile. Also add a “Bestseller” badge styled closely to the HUEL screenshot (inspiration only) and show that badge only on the Medium Mixed Box product; if the Medium Mixed Box cannot be reliably detected by handle, implement a way to tie the badge to the product (see theme setting task).

**Pre-work done for this task:** 
            Added ss-featured-collection-10.liquid template at project/sections/ss-featured-collection-10.liquid.
            If the modification is minor, ignore this file and simply modify the existing component.
            If the modification requires major restyling, decide whether replacing the existing component with this prebuilt component aligns better with the plan's requirements.
            If the modification entails kinda revamping/elevating the style of the component, then use this prebuilt component.
            IF (and only if) you decide to use this prebuilt component, use `{{% render 'ss-featured-collection-10' %}}` to render the snippet in theme a section or block. Make sure to adapt styling, colors etc to match the user's context."
            

## Task 3

**Type:** custom_data_modeling

Add a small theme-setting or product-flagging mechanism so the bestseller badge isn’t hardcoded to a product handle. Implement a theme setting (or product metafield toggle) that lets the merchant select one product (or product handle/tag) to display the “Bestseller” badge, and confirm that the product 'people' metafield key used by the card is configurable if needed. This prevents hardcoding and makes the badge and people-count source editable from the theme editor.

