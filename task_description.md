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

Add a new Comparison Chart section to the product template that renders the provided 4-column table (Feature / Dimension, Oddies, Grocery Store Delivery, Going to the Store) with the given checkmarks. Make the chart editable in the theme editor (rows, labels and icons) and responsive so it reads as a table on desktop and stacks sensibly on mobile. Implement accessible markup (table or semantic list) and lightweight styling consistent with the product page.

**Section Type:** comparison_chart

**Pre-work done for this task:** Added ss-comparison-table-12.liquid template at project/sections/ss-comparison-table-12.liquid

## Task 2

**Type:** modify_theme_component

Update the product template's How It Works / "You Pick" block: change the heading from “You Pick” to “You Check” and replace the body copy with: “Check our Weekly Harvest every Monday on our website and socials. If you like the haul, you’re all set. If you want to skip, it’s just one button click.” Apply this change in the theme section and language files so the new label and copy appear in the theme editor and on live pages. Ensure the prominent “What’s in the box” element remains visible and the new copy removes ambiguity about choosing box contents.

## Task 3

**Type:** modify_theme_component

Restyle the Reviews section on the product template: left-align all review text, make individual review cards wider and a bit shorter (reduce vertical padding/line-length), and add a 5-star rating element above each review body. Also add a bottom progress indicator (carousel/page indicator) for multi-card review pagination. If reviews are rendered by a third-party app, apply these layout/styling changes either in the app's embed snippet or by overriding its markup/CSS in the theme.

