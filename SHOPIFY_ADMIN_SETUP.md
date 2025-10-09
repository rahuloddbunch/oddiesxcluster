# Shopify Admin Configuration Guide

This document provides step-by-step instructions for configuring the Shopify admin to support the homepage A/B test variants.

## Table of Contents

1. [Product Metafields Setup](#product-metafields-setup)
2. [Product Tags Setup](#product-tags-setup)
3. [Testing the Configuration](#testing-the-configuration)

---

## Product Metafields Setup

The enhanced product cards in Variant 1 and Variant 2 rely on three custom metafields to display additional product information. Follow these steps to create them:

### 1. Access Metafield Settings

1. Log in to your Shopify admin
2. Navigate to **Settings** > **Custom data**
3. Click on **Products** in the left sidebar

### 2. Create "People" Metafield

This metafield displays how many people a box serves.

1. Click **Add definition**
2. Fill in the following details:
   - **Name:** `people`
   - **Namespace and key:** `custom.people`
   - **Description:** `Number of people this box serves (e.g., "2-3 people")`
   - **Type:** Select **Single line text**
   - **Validation:** None required (optional: set minimum 1 character)
3. Under **Storefronts**:
   - Check ✓ **Expose this metafield via the Storefront API**
4. Click **Save**

**Example values:**
- "2-3"
- "4-5"
- "1-2"

### 3. Create "Varieties" Metafield

This metafield shows how many varieties of produce are in the box.

1. Click **Add definition**
2. Fill in the following details:
   - **Name:** `varieties`
   - **Namespace and key:** `custom.varieties`
   - **Description:** `Number of produce varieties in the box (e.g., "12+ varieties")`
   - **Type:** Select **Single line text**
   - **Validation:** None required
3. Under **Storefronts**:
   - Check ✓ **Expose this metafield via the Storefront API**
4. Click **Save**

**Example values:**
- "12+ varieties"
- "8-10 varieties"
- "15+ varieties"

### 4. Create "KG" Metafield

This metafield indicates the weight of the box.

1. Click **Add definition**
2. Fill in the following details:
   - **Name:** `kg`
   - **Namespace and key:** `custom.kg`
   - **Description:** `Weight of the box in kilograms (e.g., "5kg")`
   - **Type:** Select **Single line text**
   - **Validation:** None required
3. Under **Storefronts**:
   - Check ✓ **Expose this metafield via the Storefront API**
4. Click **Save**

**Example values:**
- "5kg"
- "8kg"
- "3kg"

---

## Product Tags Setup

The enhanced product cards can display a "Bestseller" badge for products tagged with "bestseller".

### 1. Add Bestseller Tag to Products

1. Navigate to **Products** in your Shopify admin
2. Click on the product you want to mark as a bestseller
3. Scroll down to the **Tags** section
4. Type `bestseller` (all lowercase) and press Enter
5. Click **Save**

**Important notes:**
- The tag must be exactly `bestseller` (lowercase) to work
- Multiple products can have this tag
- The badge will only show if the product is not on sale or sold out (sale and sold-out badges take priority)

### 2. Recommended Products for Bestseller Badge

Consider tagging your top-performing or featured boxes:
- Small Mixed Box
- Medium Mixed Box
- Large Mixed Box
- Any seasonal or promotional boxes you want to highlight

---

## Testing the Configuration

### Test Metafields Display

1. **Add metafield values to a test product:**
   - Navigate to **Products** > Select a product
   - Scroll to the **Metafields** section
   - Fill in values for `people`, `varieties`, and `kg`
   - Click **Save**

2. **View the product card:**
   - Visit your online store
   - Navigate to the homepage (using variant-1 or variant-2 template)
   - The product card should now display:
     - Number of varieties (e.g., "12+ varieties")
     - Weight (e.g., "5kg")
     - Serves indicator with icon (e.g., "Serves 2-3")

3. **Verify styling:**
   - Check that the metafield values appear in light green pill-shaped containers
   - Verify the "Serves" label has a person icon
   - Confirm hover effects work on the product cards

### Test Bestseller Badge

1. **Tag a product:**
   - Add the `bestseller` tag to a product
   - Make sure the product is in stock and not on sale

2. **View the badge:**
   - Go to the homepage
   - The product should display a gold "🔥 BESTSELLER" badge in the top-left corner
   - Verify the badge has proper styling (gold background, dark text)

3. **Test badge priority:**
   - Mark the product as sold out → should show "Sold out" badge
   - Put the product on sale → should show "Sale" badge
   - Make it available and regular price → should show "Bestseller" badge

---

## Troubleshooting

### Metafields Not Showing

**Problem:** Metafield values are set but don't appear on product cards

**Solution:**
1. Verify the namespace and key are exactly `custom.people`, `custom.varieties`, `custom.kg`
2. Confirm **Storefront API access** is enabled for each metafield
3. Clear your browser cache and refresh the page
4. Check the theme is using the updated `card-product.liquid` snippet

### Bestseller Badge Not Appearing

**Problem:** Product has `bestseller` tag but badge doesn't show

**Solution:**
1. Verify the tag is exactly `bestseller` (all lowercase, no spaces)
2. Check the product is available (not sold out)
3. Confirm the product is not on sale
4. Clear browser cache and refresh
5. Verify the CSS for `.badge--bestseller` is loaded

### Styling Issues

**Problem:** Metafields or badges appear but look incorrect

**Solution:**
1. Verify `custom.css` includes the "Enhanced Product Cards - Variant 1" section
2. Check for CSS conflicts with other themes or apps
3. Test on different browsers and devices
4. Inspect element to see if styles are being overridden

---

## Additional Resources

- **Shopify Metafields Documentation:** https://help.shopify.com/en/manual/custom-data/metafields
- **Product Tags Guide:** https://help.shopify.com/en/manual/products/details/tags
- **Theme Customization:** https://help.shopify.com/en/manual/online-store/themes

---

## Support

For questions or issues with this configuration:
1. Check the troubleshooting section above
2. Review the implementation files:
   - `snippets/card-product.liquid` - Product card rendering
   - `assets/custom.css` - Enhanced card styling
   - `locales/en.default.json` - Translation strings
3. Contact your development team for technical support

---

**Last Updated:** January 2025
**Version:** 1.0
**Applies to:** Variant 1 and Variant 2 homepage templates
