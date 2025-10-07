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

Add a Comparison Chart section below the fold on the product page that renders the provided table: columns = Feature / Dimension, Oddies, Grocery Store Delivery, Going to the Store; rows = Save money, Convenience, Freshness, Fighting Food Waste with the ✅/❌ indicators as shown. Build this as a theme-editable section (so merchant can update rows/labels), styled to match the theme and responsive—desktop shows a table, mobile collapses to stacked rows or an accessible accordion. Use semantic HTML for accessibility and ensure the section integrates into the product template below existing content.

**Section Type:** comparison_chart

**Pre-work done for this task:** Added ss-comparison-table-12.liquid template at project/sections/ss-comparison-table-12.liquid. IMPORTANT: make sure to customize the chart's colors to match the brand.

## Task 2

**Type:** modify_theme_component

Update the product page 'How it Works' area: rename the option label from “You Pick” to “You Check” and replace the explanatory copy with: “Check our Weekly Harvest every Monday on our website and socials. If you like the haul, you’re all set. If you want to skip, it’s just one button click.” Ensure this text replacement appears wherever the old label/copy is shown (block, modal, or tooltip) so customers clearly understand the selection flow.

## Task 3

**Type:** modify_theme_component

Refactor the Reviews section to look cleaner: left-align all review text, make each review card slightly wider and a bit shorter (reduce vertical padding and constrain height), and add an inline SVG of 5 stars directly above the textual portion of every review. Update the review template and CSS so layout stays responsive and the star SVGs inherit the theme color; preserve existing rating data and any links/metadata shown with reviews.

