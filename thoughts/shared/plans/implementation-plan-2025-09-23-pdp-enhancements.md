# Product Detail Page Enhancements Implementation Plan

## Overview

Enhance the Oddies AI Shopify theme PDP to improve conversion rates through better visual presentation, trust indicators, and social proof elements. This will be implemented as a new product template to allow A/B testing and gradual rollout.

## Current State Analysis

The theme currently has:
- Basic single-image product display
- Standard Add to Cart button without trust indicators
- Social proof sections exist but are below the fold
- Price display shows strikethrough pricing but no percentage discount
- Robust media gallery system ready for expansion

## Desired End State

A conversion-optimized PDP featuring:
- Multi-image gallery with product shots, social proof, and infographics
- Trust badges immediately below Add to Cart button showing shipping, guarantees, and payment methods
- Prominent star ratings and social proof above the fold
- Clear discount percentage with urgency messaging ("Launch Sale - Limited Time")

## What We're NOT Doing

- Modifying the existing default product template
- Changing the core theme structure
- Implementing complex backend features (reviews system, etc.)
- Modifying checkout or cart functionality

## Implementation Approach

Create a new product template `product.enhanced.json` that can be assigned to specific products for testing before full rollout. All modifications will be contained in new sections and snippets to maintain separation from existing code.

## Phase 1: Create New Product Template Structure

### Overview
Set up the foundation for the enhanced PDP by creating a new template and its associated sections.

### Changes Required:

#### 1. Create New Product Template
**File**: `templates/product.enhanced.json`
**Changes**: Create new template based on existing `product.json` with enhanced structure (using the cp command)

```json
{
  "sections": {
    "main": {
      "type": "main-product-enhanced",
      "blocks": {
        "title": {
          "type": "title",
          "settings": {}
        },
        "social_proof": {
          "type": "social_proof_above_fold",
          "settings": {
            "rating": 4.8,
            "reviews_count": 1247,
            "trusted_count": "5,000+"
          }
        },
        "price": {
          "type": "price",
          "settings": {
            "show_discount_percentage": true,
            "discount_label": "Launch Sale"
          }
        },
        "variant_picker": {
          "type": "variant_picker",
          "settings": {}
        },
        "buy_buttons": {
          "type": "buy_buttons",
          "settings": {}
        },
        "trust_badges": {
          "type": "trust_badges",
          "settings": {
            "show_shipping": true,
            "show_guarantee": true,
            "show_payment_icons": true
          }
        }
      }
    }
  }
}
```

#### 2. Create Enhanced Main Product Section
**File**: `sections/main-product-enhanced.liquid`
**Changes**: Copy `main-product.liquid` and modify to support new blocks

### Success Criteria:

#### Automated Verification:
- [x] Template file exists: `ls templates/product.enhanced.json`
- [x] Section file exists: `ls sections/main-product-enhanced.liquid`
- [x] No Liquid syntax errors: run `shopify theme check --output json > output.json || true` . This will output linter errors to output.json. Follow this command up with `jq 'map(select(.path == <absolute_path1> or .path == <absolute_path2>))' output.json` to filter the errors to relevant files you've edited.

#### Manual Verification:
- [ ] New template appears in Shopify admin product template selector
- [ ] Template loads without errors when assigned to a test product
- [ ] All existing product functionality remains intact

---

## Phase 2: Configure Product Image Gallery

### Overview
The existing gallery already supports multiple images with thumbnail slider. Just ensure it's properly configured in the new template.

### Changes Required:

#### 1. Configure Gallery in Enhanced Template
**File**: `sections/main-product-enhanced.liquid`
**Changes**: Ensure gallery is configured with thumbnail slider layout

```liquid
{% comment %}
  Use existing gallery with thumbnail slider configuration
  Gallery already supports multiple images - just ensure proper settings
{% endcomment %}

<!-- In the media gallery section -->
{% render 'product-media-gallery',
  variant_images: variant_images
%}
```

#### 2. Set Gallery Layout in Schema
**File**: `sections/main-product-enhanced.liquid` (schema section)
**Changes**: Default to thumbnail_slider layout for better multi-image display

```json
{
  "type": "select",
  "id": "gallery_layout",
  "default": "thumbnail_slider",
  "label": "Gallery layout",
  "options": [
    {
      "value": "stacked",
      "label": "Stacked"
    },
    {
      "value": "thumbnail_slider",
      "label": "Thumbnail slider"
    }
  ]
}
```

### Success Criteria:

#### Automated Verification:
- [x] Gallery is properly configured in template
- [x] No Liquid syntax errors: run `shopify theme check --output json > output.json || true` . This will output linter errors to output.json. Follow this command up with `jq 'map(select(.path == <absolute_path1> or .path == <absolute_path2>))' output.json` to filter the errors to relevant files you've edited.

#### Manual Verification:
- [ ] Gallery displays all product images (not just one)
- [ ] Thumbnail slider appears at bottom with all images
- [ ] Thumbnail navigation works smoothly
- [ ] Mobile swipe gestures function correctly
- [ ] Image zoom/lightbox features work

---

## Phase 3: Add Trust Badges Section

### Overview
Implement trust badges below the Add to Cart button showing shipping info, money-back guarantee, and payment security.

### Assets Required:

Use the following assets (with img tags) when implementing the changes:

Payment icons:
- Paypal svg: https://raw.githubusercontent.com/activemerchant/payment_icons/master/app/assets/images/payment_icons/paypal.svg
- Klarna svg: https://raw.githubusercontent.com/activemerchant/payment_icons/master/app/assets/images/payment_icons/klarna.svg
- Mastercard svg: https://raw.githubusercontent.com/activemerchant/payment_icons/master/app/assets/images/payment_icons/master.svg
- Visa svg: https://raw.githubusercontent.com/activemerchant/payment_icons/master/app/assets/images/payment_icons/visa.svg
- American Express svg: https://raw.githubusercontent.com/activemerchant/payment_icons/master/app/assets/images/payment_icons/american_express.svg
- Apple Pay svg: https://raw.githubusercontent.com/activemerchant/payment_icons/master/app/assets/images/payment_icons/apple_pay.svg

### Changes Required:

#### 1. Create Trust Badges Snippet
**File**: `snippets/trust-badges.liquid`
**Changes**: New snippet for trust indicators

```liquid
<div class="trust-badges" {{ block.shopify_attributes }}>
  <div class="trust-badges__container">
    {% if block.settings.show_shipping %}
      <div class="trust-badge">
        <img class="trust-badge__icon"
             src="https://cdn.shopify.com/s/files/1/0833/7391/6508/files/local_shipping_24dp_000000_FILL0_wght400_GRAD0_opsz24_fa8def13-a787-4bf3-bf34-83e21df19727.svg?v=1729857822"
             alt="Fast Delivery"
             width="24"
             height="24">
        <div class="trust-badge__text">
          <span class="trust-badge__title">Fast Delivery</span>
          <span class="trust-badge__subtitle">2-4 business days</span>
        </div>
      </div>
    {% endif %}

    {% if block.settings.show_guarantee %}
      <div class="trust-badge">
        <img class="trust-badge__icon"
             src="https://cdn.shopify.com/s/files/1/0833/7391/6508/files/return.png?v=1732142623"
             alt="Money Back Guarantee"
             width="24"
             height="24">
        <div class="trust-badge__text">
          <span class="trust-badge__title">Money Back Guarantee</span>
          <span class="trust-badge__subtitle">30-day return policy</span>
        </div>
      </div>
    {% endif %}

    {% if block.settings.show_warranty %}
      <div class="trust-badge">
        <img class="trust-badge__icon"
             src="https://cdn.shopify.com/s/files/1/0833/7391/6508/files/new_releases_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?v=1729857720"
             alt="Warranty"
             width="24"
             height="24">
        <div class="trust-badge__text">
          <span class="trust-badge__title">Quality Guarantee</span>
          <span class="trust-badge__subtitle">Fresh produce promise</span>
        </div>
      </div>
    {% endif %}

    {% if block.settings.show_payment_icons %}
      <div class="trust-badge trust-badge--payment">
        <span class="trust-badge__title">Secure Payment</span>
        <div class="payment-icons">
          {{ 'icon-paypal.svg' | inline_asset_content }}
          {{ 'icon-visa.svg' | inline_asset_content }}
          {{ 'icon-mastercard.svg' | inline_asset_content }}
          {{ 'icon-amex.svg' | inline_asset_content }}
          {{ 'icon-apple-pay.svg' | inline_asset_content }}
        </div>
      </div>
    {% endif %}
  </div>
</div>
```

#### 2. Add Trust Badge Styles
**File**: `assets/component-trust-badges.css`
**Changes**: Styling for trust badges section

```css
.trust-badges {
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 8px;
  background: #f9f9f9;
}

.trust-badges__container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.trust-badge__icon {
  flex-shrink: 0;
  filter: brightness(0) saturate(100%) invert(39%) sepia(4%) saturate(10%) hue-rotate(178deg) brightness(83%) contrast(85%);
}

.trust-badge__text {
  display: flex;
  flex-direction: column;
}

.trust-badge__title {
  font-weight: 600;
  font-size: 0.875rem;
  color: #333;
}

.trust-badge__subtitle {
  font-size: 0.75rem;
  color: #666;
}

.payment-icons {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.payment-icons svg {
  height: 24px;
  width: auto;
}
```

#### 3. Integrate into Buy Buttons
**File**: `snippets/buy-buttons-enhanced.liquid`
**Changes**: Modified version of buy-buttons.liquid with trust badges

```liquid
<!-- After the add to cart button and dynamic checkout -->
</div>
{%- endform -%}
</product-form>

<!-- Add trust badges -->
{% render 'trust-badges', block: block %}
```

### Success Criteria:

#### Automated Verification:
- [x] Trust badges snippet exists: `ls snippets/trust-badges.liquid`
- [x] CSS file exists: `ls assets/component-trust-badges.css`
- [x] SVG icon files exist in assets
- [x] No Liquid syntax errors: run `shopify theme check --output json > output.json || true` . This will output linter errors to output.json. Follow this command up with `jq 'map(select(.path == <absolute_path1> or .path == <absolute_path2>))' output.json` to filter the errors to relevant files you've edited.

#### Manual Verification:
- [ ] Trust badges appear below Add to Cart button
- [ ] Icons display correctly
- [ ] Payment icons are recognizable
- [ ] Section is responsive on mobile
- [ ] Text is legible and well-formatted

---

## Phase 4: Integrate Above-the-Fold Social Proof

### Overview

Move the "Trusted by X Aussies" from underneath the reviews to right underneath the product title.

### Success Criteria:

#### Automated Verification:
- [x] No Liquid syntax errors: run `shopify theme check --output json > output.json || true` . This will output linter errors to output.json. Follow this command up with `jq 'map(select(.path == <absolute_path1> or .path == <absolute_path2>))' output.json` to filter the errors to relevant files you've edited.

#### Manual Verification:
- [ ] Star rating displays correctly with proper fill
- [ ] Review count is visible and formatted
- [ ] "Trusted by X Aussies" message appears
- [ ] Elements are properly aligned
- [ ] Responsive on mobile devices

---

## Phase 5: Implement Discount Badge with Justification

### Overview
Calculate and display percentage discount with time-limited sale messaging to create urgency.

### Changes Required:

#### 1. Create Enhanced Price Display
**File**: `snippets/price-enhanced.liquid`
**Changes**: Extended price snippet with percentage calculation

```liquid
{% comment %}
  Enhanced price display with discount percentage and justification
{% endcomment %}

{%- liquid
  assign target = product.selected_or_first_available_variant
  assign compare_at_price = target.compare_at_price
  assign price = target.price

  if compare_at_price > price
    assign discount_amount = compare_at_price | minus: price
    assign discount_percentage = discount_amount | times: 100.0 | divided_by: compare_at_price | round
  endif
-%}

<div class="price-enhanced">
  <div class="price__container">
    <div class="price__sale">
      <span class="price__original">
        <span class="visually-hidden">Was</span>
        {{ compare_at_price | money }}
      </span>
      <span class="price__current">
        <span class="visually-hidden">Now</span>
        {{ price | money }}
      </span>

      {% if discount_percentage %}
        <span class="price__discount-badge">
          Save {{ discount_percentage }}%
        </span>
      {% endif %}
    </div>
  </div>

  {% if block.settings.discount_label %}
    <div class="price__promotion">
      <svg class="promotion-icon" width="16" height="16">
        <!-- Clock/fire icon for urgency -->
      </svg>
      <span class="promotion-text">
        {{ block.settings.discount_label }} - Limited Time
      </span>
    </div>
  {% endif %}
</div>
```

#### 2. Add Enhanced Price Styles
**File**: `assets/component-price-enhanced.css`
**Changes**: Styling for enhanced price display

```css
.price-enhanced {
  margin: 1rem 0;
}

.price__sale {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.price__original {
  text-decoration: line-through;
  color: #999;
  font-size: 1.125rem;
}

.price__current {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.price__discount-badge {
  background: #FF5722;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.price__promotion {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: #FF5722;
  font-size: 0.875rem;
  font-weight: 500;
}

.promotion-icon {
  fill: currentColor;
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

### Success Criteria:

#### Automated Verification:
- [x] Enhanced price snippet exists: `ls snippets/price-enhanced.liquid`
- [x] CSS file exists: `ls assets/component-price-enhanced.css`
- [x] Percentage calculation is accurate
- [x] No Liquid syntax errors: run `shopify theme check --output json > output.json || true` . This will output linter errors to output.json. Follow this command up with `jq 'map(select(.path == <absolute_path1> or .path == <absolute_path2>))' output.json` to filter the errors to relevant files you've edited.

#### Manual Verification:
- [ ] Discount percentage displays correctly
- [ ] "Launch Sale" or custom label appears
- [ ] Animation effects work smoothly
- [ ] Price formatting is correct for currency
- [ ] Responsive layout on mobile

---

## Testing Strategy

### Unit Tests:
- Verify discount percentage calculations for various price points
- Test trust badge conditional display logic
- Validate star rating rendering for different values
- Check image gallery with varying numbers of images

### Integration Tests:
- Run `timeout 10 shopify theme dev 2>&1 | tee theme-dev-logs.txt` to run the theme dev server and check for errors in the logs.

### Manual Testing Steps:
1. Assign enhanced template to test product
2. Verify all images load in gallery
3. Check trust badges display below Add to Cart
4. Confirm star rating and social proof visibility
5. Validate discount percentage calculation
6. Test on mobile devices (iOS/Android)
7. Check page speed metrics
8. Verify accessibility compliance

## Performance Considerations

- Lazy load gallery images beyond first 4
- Optimize SVG icons with sprite sheet
- Minimize CSS with critical path extraction
- Use native browser APIs for gallery interactions
- Implement efficient star rating rendering

## Migration Notes

1. Upload product images:
   - Add multiple product photos showing different angles
   - Include box contents images
   - Add any size comparison or infographic images

2. Gradual rollout strategy:
   - Test on 5-10 products initially
   - Monitor conversion metrics for 2 weeks
   - Roll out to full catalog if positive results

3. Fallback handling:
   - Template gracefully handles missing metafields
   - Default values for ratings if not configured
   - Trust badges can be toggled per product

## References

- Original requirements: User specifications from 2025-09-23
- Shopify Dawn theme: Reference implementation patterns
- Current theme structure: `/sections/main-product.liquid`
- Style guide: Oddies brand guidelines