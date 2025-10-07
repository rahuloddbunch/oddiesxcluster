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

Add a new comparison-chart section to the product page, placed below the fold (for example under the product description or existing meta sections). Implement the 4-column table exactly as provided (Feature / Dimension, Oddies, Grocery Store Delivery, Going to the Store) with the check and cross indicators, responsive stacking on narrow screens, and scoped theme styling so it matches the product page look and spacing. Use semantic table HTML (or an accessible alternative) and prefer SVG/icon assets for the ✓/✕ visuals so they scale cleanly.

**Section Type:** comparison_chart

**Pre-work done for this task:** Added ss-comparison-table-12.liquid template at project/sections/ss-comparison-table-12.liquid. IMPORTANT: make sure to customize the chart's colors to match the brand.

## Task 2

**Type:** modify_theme_component

Update the existing 'How it Works' / 'You Pick' component on the product page to reduce confusion about box contents. Change the label 'You Pick' to 'You Check' and replace the supporting copy with: “Check our Weekly Harvest every Monday on our website and socials. If you like the haul, you’re all set. If you want to skip, it’s just one button click.” Ensure the 'What’s in the box' clickable element remains prominent (it can still open the same modal or anchor) and that spacing/layout still fits the section.

## Task 3

**Type:** modify_theme_component

Refine the product reviews section styling so reviews read cleaner and more compact. Left-align all review text, increase card width slightly while reducing card height (so each card is wider and shorter on desktop, stack naturally on mobile), and add a 5-star SVG (full stars) directly above the body text of every review (one SVG per review). Keep existing review metadata (author, date, rating value) visible and ensure the new layout is responsive and preserves accessibility/reading order.

