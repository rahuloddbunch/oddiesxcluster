# Original User Instructions

### Below the Fold

1. **Comparison Chart**
A good comparison chart always hits. implement this on the product page:    
    
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
- Put an svg of 5 stars directly above the text of every review.

# Tasks

## Task 1

**Type:** add_theme_section

Add a comparison chart section below the fold on the product page that renders the provided 4-column table (Feature / Dimension, Oddies, Grocery Store Delivery, Going to the Store). Make the section editable in the theme editor (rows, column labels, and check/cross icons) and ensure the table is responsive (stacked rows on narrow screens) and uses semantic markup so it displays well on mobile and desktop.

**Section Type:** comparison_chart

**Pre-work done for this task:** Added ss-comparison-table-12.liquid template at project/sections/ss-comparison-table-12.liquid. IMPORTANT: make sure to customize the chart's colors to match the brand.

## Task 2

**Type:** modify_theme_component

Update the existing “How it Works” block on the product page to clarify box selection. Replace the heading/label “You Pick” with “You Check” and replace the paragraph copy with: “Check our Weekly Harvest every Monday on our website and socials. If you like the haul, you’re all set. If you want to skip, it’s just one button click.” Keep the placement/interaction the same but ensure the new copy is used in any CTA/tooltip that previously referenced the old text.

## Task 3

**Type:** modify_theme_component

Refine the Reviews section layout: left-align all review text, increase review card width slightly while reducing card height (adjust paddings and line-height so cards appear wider and shorter), and add an inline 5-star SVG directly above the review body for every review entry. Ensure the star SVG is added as an asset or inline markup so it scales responsively with the card.

