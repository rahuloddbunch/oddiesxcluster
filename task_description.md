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

Create two new homepage templates from the current homepage for the A/B test: Variant #1 and Variant #2. Both templates should be full clones of the existing homepage but prepared so theme editors can assign them to run the test; include hooks so each variant can be selected in the theme editor or referenced by the testing tool. Document which template file names were created and where to select them in the admin.

**Section Type:** other

## Task 2

**Type:** modify_theme_component

Remove the postcode checker component entirely from both Variant #1 and Variant #2 homepage templates so it no longer appears on those variants. Ensure removal does not break layout spacing or other components and update any associated schema settings so editors can't accidentally re-enable it for these templates.

## Task 3

**Type:** modify_theme_component

Reorder the homepage sections so the testimonial block titled "Our Customers say it Best" appears above the "Why Pick Oddies?" section on both variants. Keep the testimonial block content and settings intact — only change its placement in the template and ensure mobile ordering is preserved.

## Task 4

**Type:** modify_theme_component

Redesign the product cards in the "Choose Your Box" section to be visually elevated and on-brand (use Oddies colors and typography). Use the attached HUEL screenshot only as inspiration for layout/visual hierarchy (don't copy); remove the quick-add-to-cart button, prominently display the product's 'people' metafield (e.g., "Serves 2"), and implement tasteful visual treatments (refined borders, layered surfaces, considered micro-typography and spacing) rather than a generic shadow/hover. Ensure the card remains responsive and that clicking the card still goes to product detail.

**Pre-work done for this task:** 
            Added ss-featured-collection-10.liquid template at project/sections/ss-featured-collection-10.liquid.
            If the modification is minor, ignore this file and simply modify the existing component.
            If the modification requires major restyling, decide whether replacing the existing component with this prebuilt component aligns better with the plan's requirements.
            If the modification entails kinda revamping/elevating the style of the component, then use this prebuilt component.
            IF (and only if) you decide to use this prebuilt component, use `{{% render 'ss-featured-collection-10' %}}` to render the snippet in theme a section or block. Make sure to adapt styling, colors etc to match the user's context."
            

## Task 5

**Type:** modify_theme_component

Activate the badge setting (default style) for the featured collection component and adapt the featured collection cards to fit the Oddies brand vibe. Make the featured collection render as a non-scrollable 2x2 grid (two columns by two rows) instead of a horizontally scrollable carousel; keep spacing and responsive behavior appropriate so it stacks correctly on mobile.

**Pre-work done for this task:** 
            Added ss-featured-collection-10.liquid template at project/sections/ss-featured-collection-10.liquid.
            If the modification is minor, ignore this file and simply modify the existing component.
            If the modification requires major restyling, decide whether replacing the existing component with this prebuilt component aligns better with the plan's requirements.
            If the modification entails kinda revamping/elevating the style of the component, then use this prebuilt component.
            IF (and only if) you decide to use this prebuilt component, use `{{% render 'ss-featured-collection-10' %}}` to render the snippet in theme a section or block. Make sure to adapt styling, colors etc to match the user's context."
            

## Task 6

**Type:** modify_theme_component

For Variant #2 only: remove the hero image and hero CTA block so the page flows directly into the box grid. Preserve any hero-related settings on the original template (so the original homepage remains unchanged) and ensure the top-of-page spacing and heading structure are adjusted so the box grid appears visually balanced without the hero.

