# Original User Instructions

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

Add a new, theme-editor configurable Comparison Chart section that renders the provided 4-column table (Feature / Dimension, Oddies, Grocery Store Delivery, Going to the Store) with tick/cross icons for each row. The section should show bolded row headings, support merchant editing of rows/cells in the theme editor, and be fully responsive (stack or scroll on narrow screens). Ensure accessible table/semantic markup and icon-based visual states for ✓/✕.

**Section Type:** comparison_chart

**Pre-work done for this task:** Added ss-comparison-table-12.liquid template at project/sections/ss-comparison-table-12.liquid. IMPORTANT: make sure to customize the chart's colors to match the brand.

## Task 2

**Type:** modify_theme_component

Update the existing “How it Works” component copy: change the label “You Pick” to “You Check” and replace the body text with: “Check our Weekly Harvest every Monday on our website and socials. If you like the haul, you’re all set. If you want to skip, it’s just one button click.” This is a text/content change only — do not alter functionality unless asked; preserve the prominent placement and retain the high click-through item “What’s in the box.”

## Task 3

**Type:** modify_theme_component

Refine the Reviews section layout: left-align all review text, adjust review card CSS to make cards slightly wider and a bit shorter (reduce vertical padding and/or max-height), and add a 5-star rating row above each review body. Also add a bottom progress indicator for the reviews carousel/list so users can see position (dot or progress bar) and ensure the changes remain responsive across breakpoints.

