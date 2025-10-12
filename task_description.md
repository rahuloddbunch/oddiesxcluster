# Original User Instructions

Hey I want you to create two new homepage templates (from the current one) for an A/B test.

Variant #1:
- remove the postcode checker 
- Move the "Our Customers say it Best" to be above "Why Pick Oddies?"
- Spruce up the product cards in the "Choose Your Box" Section. They're looking a little plain. Make them look BEAUTIFUL, TASTEFULLY. don't just give me some generic shadow and hover effect and call it a day. Also, I would highlight the number of people the box serves (can be found on the `people` product metafield). I'm attaching a screenshot from HUEL as layout/design inspo. Look at the design but do not completely copy them. We should use Oddies brand colors, I don't want the quick add to cart button. 
- Activate the badge setting on the featured collection compoenent (the default style)
- Make sure to really adapt the featured collection cards to the brand vibe
- It shouldn't be a scrollable section (with arrows) - just a 2x2 grid

Variant #2:
- SAME CHANGES AS VARIANT #1
- Remove hero image and CTA and just go straight into the box grid.



# Tasks

## Task 1

**Type:** add_theme_section

Create two new homepage templates derived from the current homepage for an A/B test: Variant #1 and Variant #2. For both variants remove the postcode checker and move the “Our Customers say it Best” section so it appears above the “Why Pick Oddies?” section; Variant #2 should also remove the hero image and CTA so the page starts directly with the box grid. Name and register both templates in the theme editor so they can be selected for the A/B test and ensure both templates remain responsive and maintain existing header/footer behavior.

**Section Type:** other

## Task 2

**Type:** modify_theme_component

Redesign the product cards in the “Choose Your Box” section to be tasteful and premium while using Oddies brand colors and typography. Remove the quick-add-to-cart control, prominently display the product metafield 'people' (number of people served) on each card, and improve imagery, spacing and subtle interactions (use the provided HUEL screenshot as visual inspiration but do not copy). Ensure the new card design is responsive across breakpoints and integrates with existing product data (prices, labels, links) without changing product behavior.

**Pre-work done for this task:** 
            Added ss-featured-collection-10.liquid template at project/sections/ss-featured-collection-10.liquid.
            If the modification is minor, ignore this file and simply modify the existing component.
            If the modification requires major restyling, decide whether replacing the existing component with this prebuilt component aligns better with the plan's requirements.
            If the modification entails kinda revamping/elevating the style of the component, then use this prebuilt component.
            IF (and only if) you decide to use this prebuilt component, use `{{% render 'ss-featured-collection-10' %}}` to render the snippet in theme a section or block. Make sure to adapt styling, colors etc to match the user's context."
            

## Task 3

**Type:** modify_theme_component

Update the featured-collection component: enable the built-in badge setting (default style) and restyle the collection cards to match the Oddies brand vibe (colors, typography and card treatments). Replace any carousel/scrollable layout with a simple static 2x2 grid (no arrows) on desktop, with sensible responsive stacking on smaller screens, and ensure badges render correctly and do not overlap or break the grid layout. Make sure the featured collection cards visually align with the redesigned “Choose Your Box” cards for a coherent homepage look.

