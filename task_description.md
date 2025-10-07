# Original User Instructions

1. **Comparison Chart**
A good comparison chart always hits. implement this on the product page:    
    
    | Feature / Dimension | Oddies | Grocery Store Delivery | Going to the Store |
    | --- | --- | --- | --- |
    | **Save money** | ✅  | ❌  | ❌ |
    | **Convenience**  | ✅  | ✅  | ❌  |
    | **Freshness**  | ✅  | ✅  | ✅  |
    | **Fighting Food Waste** | ✅ | ❌ | ❌  |

2. Make Reviews Section Look Cleaner

**Action:** 

- Left align text
- Make cards slightly wider and shorter
- Put an svg of 5 stars directly above the text of every review.

# Tasks

## Task 1

**Type:** add_theme_section

Add a reusable comparison chart section to the product page that renders the provided 4-column table (Feature / Dimension vs Oddies, Grocery Store Delivery, Going to the Store). The section should be responsive (full table on desktop, stacked/stackable cards or rows on narrow screens) and configurable from the theme editor so content labels and checkmark states can be updated without code.

**Section Type:** comparison_chart

**Pre-work done for this task:** Added ss-comparison-table-12.liquid template at project/sections/ss-comparison-table-12.liquid. IMPORTANT: make sure to customize the chart's colors to match the brand.

## Task 2

**Type:** modify_theme_component

Update the existing Reviews section so each review card's text is left-aligned, cards are slightly wider and a bit shorter to improve density, and an inline SVG of 5 stars appears directly above the review text for every review. Implement these changes in the review template and CSS so the layout remains responsive and spacing is consistent across breakpoints; ensure the star SVG scales with the card width.

