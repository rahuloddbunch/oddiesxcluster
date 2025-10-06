# Original User Instructions

Create a new product template:

1. **Comparison Chart**
A good comparison chart always hits.    
    
    | Feature / Dimension | Oddies | Grocery Store Delivery | Going to the Store |
    | --- | --- | --- | --- |
    | **Save money** | ✅  | ❌  | ❌ |
    | **Convenience**  | ✅  | ✅  | ❌  |
    | **Freshness**  | ✅  | ✅  | ✅  |
    | **Fighting Food Waste** | ✅ | ❌ | ❌  |
2. **How it Works**
Maybe just me but was slightly confused if I can pick box contents or not.

”What’s in the box” most clicked element according to Clarity
    
    
    **Action:**
    
    - Change “You Pick” to “You Check” and the text to “Check our Weekly Harvest every Monday on our website and socials. If you like the haul, you’re all set. If you want to skip, it’s just one button click.”

3. Make Reviews Section Look Cleaner

**Action:** 

- Left align text
- Make cards slightly wider and shorter
- Add bottom progress indicator &  5 stars on top of the review text.

# Tasks

## Task 1

**Type:** add_theme_section

Create a new custom product template that assembles the product hero, the new Comparison Chart section, the How It Works section (with updated copy), and the Reviews section. This template should be selectable per-product in Shopify and follow the store's existing layout and responsive breakpoints. Place the comparison chart shortly below the product details and the reviews toward the bottom of the template.

**Section Type:** other

## Task 2

**Type:** add_theme_section

Add a Comparison Chart section to the new product template that renders a responsive 4-column table matching the provided example (Feature / Dimension, Oddies, Grocery Store Delivery, Going to the Store). Cells should display bold left-column feature labels and clear check/cross indicators for each cell; styling should match the theme (tablet/mobile friendly) and be editable in the theme editor (title, rows, icons/labels). Include the ability to toggle visibility and to add/remove rows so store admins can update features without code changes.

**Section Type:** comparison_chart

**Pre-work done for this task:** Added ss-comparison-table-12.liquid template at project/sections/ss-comparison-table-12.liquid. IMPORTANT: make sure to customize the chart's colors to match the brand.

## Task 3

**Type:** modify_theme_component

Update the How It Works section on the product template to change the copy for the relevant step: replace the heading/text 'You Pick' with 'You Check' and update the body copy to: “Check our Weekly Harvest every Monday on our website and socials. If you like the haul, you’re all set. If you want to skip, it’s just one button click.” Ensure the updated copy appears wherever the 'You Pick' label currently exists (desktop and mobile). Also ensure the 'What’s in the box' element remains prominent given it’s the most-clicked element — keep its placement and interaction the same unless content changes are requested.

## Task 4

**Type:** modify_theme_component

Refactor the Reviews section so review text is left-aligned, review cards are slightly wider and shorter (reduce vertical padding and increase horizontal width within the content column), and display a 5-star rating row above the review text. Add a bottom progress indicator within the review carousel/cards that reflects the currently visible review (dots or a thin progress bar). Preserve existing review sourcing (e.g., Shopify/Product reviews or 3rd-party app) and ensure layout works responsively.

