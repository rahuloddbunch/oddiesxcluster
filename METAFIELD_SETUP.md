# Product Metafields Setup for Homepage Variants

This document outlines the required metafields for the homepage A/B test variants to function correctly.

## Required Product Metafields

The variant product cards (`card-product-variant.liquid`) rely on three custom metafields to display enhanced product information. These metafields must be configured in your Shopify admin.

### 1. Varieties Metafield
**Purpose:** Display the number/type of varieties in a box
**Example Values:** "8-10 Varieties", "12+ Items"

- **Namespace:** `custom`
- **Key:** `varieties`
- **Type:** Single line text
- **Display Name:** Varieties

### 2. Weight/Size Metafield
**Purpose:** Display the weight or size of the product
**Example Values:** "5-7kg", "Medium Box (5kg)"

- **Namespace:** `custom`
- **Key:** `kg`
- **Type:** Single line text
- **Display Name:** Weight/Size

### 3. Serving Size Metafield
**Purpose:** Display how many people the box serves
**Example Values:** "2", "2-3", "4+"

- **Namespace:** `custom`
- **Key:** `people`
- **Type:** Single line text or Number (integer)
- **Display Name:** Serves (People)

### 4. Bestseller Badge Metafield
**Purpose:** Display a "BESTSELLER" badge on featured products
**Example Values:** `true` or `false`

- **Namespace:** `custom`
- **Key:** `is_bestseller`
- **Type:** Boolean (true/false)
- **Display Name:** Is Bestseller

## Setup Instructions

### Step 1: Access Metafield Definitions
1. Log into your Shopify admin
2. Navigate to **Settings** > **Custom data** > **Products**
3. Click **Add definition**

### Step 2: Create Each Metafield
For each metafield above, create a new definition with the exact namespace and key specified.

#### Example: Creating the "Varieties" Metafield
1. Click **Add definition**
2. **Name:** Varieties
3. **Namespace and key:**
   - Namespace: `custom`
   - Key: `varieties`
4. **Description (optional):** "Number of varieties in the box (e.g., '8-10 Varieties')"
5. **Type:** Single line text
6. **Validation (optional):** None required
7. Click **Save**

### Step 3: Add Values to Products
After creating all metafield definitions:

1. Go to **Products** in your Shopify admin
2. Select a product (e.g., "Small Mixed Box")
3. Scroll to the **Metafields** section
4. Fill in the values for each metafield:
   - **Varieties:** "8-10 Varieties"
   - **Weight/Size:** "5-7kg"
   - **Serves (People):** "2-3"
   - **Is Bestseller:** Check the box if this product should show the bestseller badge
5. Click **Save**

## Visual Rendering

### How Metafields Appear on Product Cards

```
┌────────────────────────────────┐
│                                │
│     [Product Image]            │
│                                │
│  🔥 BESTSELLER (if applicable) │
│                                │
│  Product Title                 │
│                                │
│  8-10 Varieties  |  5-7kg  |  👤 Serves 2-3
│                                │
│  $XX.XX                        │
│                                │
│  [View Box Button]             │
│                                │
└────────────────────────────────┘
```

### CSS Styling
- **Varieties & Weight:** Plain text in gray (#5D5D5D)
- **Serves (People):** Green pill badge with person icon (#007431 bg, #F0F9F4 light bg)
- **Bestseller:** Gradient green badge with fire emoji

## Template Usage

These metafields are ONLY used in:
- `snippets/card-product-variant.liquid` (variant product card)
- `sections/featured-collection-variant.liquid` (variant collection section)
- `templates/index.variant-1.json` (Variant 1 homepage)
- `templates/index.variant-2.json` (Variant 2 homepage)

The original homepage (`templates/index.json`) and standard product card (`snippets/card-product.liquid`) are NOT affected.

## Testing Checklist

After setting up metafields:

- [ ] All four metafield definitions created in Shopify admin
- [ ] Metafield values added to at least 3 products for testing
- [ ] Preview `index.variant-1` template - metafields display correctly
- [ ] Preview `index.variant-2` template - metafields display correctly
- [ ] Bestseller badge appears on designated products
- [ ] "Serves" pill has green styling with person icon
- [ ] Missing metafields gracefully hide (no errors or empty sections)

## Troubleshooting

**Q: Metafields don't appear on the product card**
- Verify the namespace is exactly `custom` (lowercase)
- Verify the keys match exactly: `varieties`, `kg`, `people`, `is_bestseller`
- Check that values are saved on the product
- Clear theme cache and reload

**Q: Bestseller badge not showing**
- Ensure `is_bestseller` is a Boolean type (not text)
- Check the box is checked (value = `true`)
- Verify you're viewing a variant template, not the original

**Q: Icons missing on "Serves" badge**
- The SVG icon is inline in the Liquid template
- Check browser console for CSS errors
- Ensure `component-card-variant.css` is loaded

## Notes
- Metafields are optional - if not set, that information simply won't display
- The card layout adapts gracefully to missing data
- These metafields can be bulk-edited using Shopify's CSV import/export
- Consider using metaobjects for more complex product data structures in the future
