/**
 * Intelligems A/B Test: Postcode Checker
 * Test ID: 0b5d77cc-2ab0-4879-a62b-dae863f1cae4
 *
 * Control: Old postcode app (shadow DOM from oddbunch-postcodes)
 * Treatment: New custom postcode checker component
 *
 * ============================================================
 * TO RESOLVE EXPERIMENT WHEN DONE:
 * ============================================================
 * 1. Remove all Intelligems integration code (EXPERIMENT_ID, GROUP_IDS, initIntelligemsTest, etc.)
 * 2. If TREATMENT wins:
 *    - Keep hideAppElement() and createPostcodeChecker() functions
 *    - Call them directly in init() without A/B logic
 * 3. If CONTROL wins:
 *    - Delete this entire file
 *    - Remove <script> tag from theme.liquid
 * ============================================================
 */

(function() {
  // Intelligems Test Configuration
  const EXPERIMENT_ID = '0b5d77cc-2ab0-4879-a62b-dae863f1cae4';
  const CONTROL_GROUP_ID = 'e5fb3413-3453-4ff4-8e82-12c4fb8cf263';
  const TREATMENT_GROUP_ID = '22112f72-7f16-46ec-816f-7f766746751a';

  // Postcode API Configuration
  const API_ENDPOINT = 'https://www.oddies.au/apps/postcodes/postcodes/check';
  const TIMEZONE = 'Australia/Sydney';
  const CUTOFF_DAY = 3; // Wednesday
  const CUTOFF_HOUR = 23;
  const CUTOFF_MINUTE = 55;

  // Track if test has been initialized
  let testInitialized = false;

  /**
   * Main initialization - waits for Intelligems then runs test
   */
  function init() {
    const appElements = document.querySelectorAll('[data-app="oddbunch-postcodes"]');

    if (appElements.length === 0) {
      console.log('[PostcodeChecker] No postcode app elements found, skipping');
      return;
    }

    console.log('[PostcodeChecker] Found', appElements.length, 'postcode app elements');

    // Check if Intelligems is already loaded
    if (window.igData) {
      initIntelligemsTest(appElements);
    } else {
      // Wait for Intelligems ig:ready event
      window.addEventListener('ig:ready', () => {
        initIntelligemsTest(appElements);
      });

      // Fallback: if Intelligems doesn't load within 3 seconds, show control
      setTimeout(() => {
        if (!testInitialized) {
          console.warn('[PostcodeChecker] Intelligems timeout - defaulting to control');
          showVariant('control', appElements);
        }
      }, 3000);
    }
  }

  /**
   * Initialize the A/B test based on Intelligems group assignment
   */
  function initIntelligemsTest(appElements) {
    if (testInitialized) return;
    testInitialized = true;

    const testGroup = window.igData?.user?.getTestGroup(EXPERIMENT_ID);

    if (!testGroup) {
      console.log('[PostcodeChecker] No test group assigned - showing control');
      showVariant('control', appElements);
      return;
    }

    // Determine variant based on test group ID
    let variant = 'control'; // default

    if (testGroup.id === TREATMENT_GROUP_ID) {
      variant = 'treatment';
    } else if (testGroup.id === CONTROL_GROUP_ID) {
      variant = 'control';
    } else {
      // Fallback: check group name if ID doesn't match
      variant = testGroup.name.toLowerCase().includes('new group') ? 'treatment' : 'control';
    }

    console.log('[PostcodeChecker] Intelligems Test:', {
      experimentId: EXPERIMENT_ID,
      testGroupId: testGroup.id,
      testGroupName: testGroup.name,
      variant: variant
    });

    showVariant(variant, appElements);
  }

  /**
   * Show the appropriate variant (control or treatment)
   */
  function showVariant(variant, appElements) {
    console.log('[PostcodeChecker] Showing variant:', variant);

    appElements.forEach((el, index) => {
      if (variant === 'treatment') {
        // TREATMENT: Hide old app, show new component
        hideAppElement(el);

        // Create and insert the new postcode checker
        const checker = createPostcodeChecker();
        el.parentNode.insertBefore(checker, el.nextSibling);

        // Watch for the app trying to show itself again
        const observer = new MutationObserver(() => hideAppElement(el));
        observer.observe(el, { attributes: true, attributeFilter: ['style'] });

        console.log('[PostcodeChecker] Treatment: Inserted new component', index);
      } else {
        // CONTROL: Show old app (do nothing - it's already visible)
        console.log('[PostcodeChecker] Control: Keeping old app visible', index);
      }
    });
  }

  /**
   * Aggressively hide the old postcode app element (shadow DOM)
   */
  function hideAppElement(el) {
    el.style.cssText = 'display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; position: absolute !important; pointer-events: none !important;';

    // Also inject hiding styles into the shadow root if it exists
    if (el.shadowRoot) {
      const existingStyle = el.shadowRoot.querySelector('#postcode-hide-style');
      if (!existingStyle) {
        const style = document.createElement('style');
        style.id = 'postcode-hide-style';
        style.textContent = '* { display: none !important; }';
        el.shadowRoot.appendChild(style);
      }
    }
  }

  /**
   * Create the new postcode checker component (treatment variant)
   */
  function createPostcodeChecker() {
    const wrapper = document.createElement('div');
    wrapper.className = 'postcode-checker-wrapper';
    wrapper.innerHTML = `
      <p class="postcode-checker-label">Check if we deliver to you</p>
      <div class="postcode-checker">
        <input
          type="text"
          class="postcode-input"
          placeholder="Enter postcode"
          pattern="[0-9]*"
          inputmode="numeric"
          maxlength="4"
        >
        <button type="button" class="check-delivery-btn">Check Delivery</button>
      </div>
      <div class="postcode-result"></div>
    `;

    const input = wrapper.querySelector('.postcode-input');
    const button = wrapper.querySelector('.check-delivery-btn');
    const resultContainer = wrapper.querySelector('.postcode-result');
    const form = wrapper.querySelector('.postcode-checker');

    // Bind events
    button.addEventListener('click', () => handleCheck(input, button, resultContainer, form));

    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleCheck(input, button, resultContainer, form);
      }
    });

    // Only allow numeric input
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    return wrapper;
  }

  async function handleCheck(input, button, resultContainer, form) {
    const postcode = input.value.trim();

    if (!postcode || postcode.length !== 4) {
      showResult(resultContainer, {
        success: false,
        message: 'Please enter a valid 4-digit postcode'
      });
      return;
    }

    setLoading(button, form, true);

    try {
      const response = await checkPostcode(postcode);
      processResponse(response, resultContainer);
    } catch (error) {
      console.error('[PostcodeChecker] API error:', error);
      showResult(resultContainer, {
        success: false,
        message: 'Unable to check delivery availability. Please try again.'
      });
    } finally {
      setLoading(button, form, false);
    }
  }

  async function checkPostcode(zip) {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ zip })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  function processResponse(data, resultContainer) {
    if (!data.success) {
      showResult(resultContainer, {
        success: false,
        message: 'Unable to check this postcode. Please try again.'
      });
      return;
    }

    if (data.result === 'NOT_SUPPORTED') {
      showResult(resultContainer, {
        success: false,
        message: "Sorry, we don't deliver to your area yet."
      });
      return;
    }

    if (data.result === 'FOUND') {
      const timeInfo = calculateTimeToNextCutoff();
      const message = formatDeliveryMessage(data, timeInfo);

      showResult(resultContainer, {
        success: true,
        ...message
      });
    }
  }

  function calculateTimeToNextCutoff() {
    const now = new Date();
    const auTimeString = now.toLocaleString('en-US', { timeZone: TIMEZONE });
    const auNow = new Date(auTimeString);

    const currentDay = auNow.getDay();
    let daysUntilWednesday = (CUTOFF_DAY - currentDay + 7) % 7;

    if (daysUntilWednesday === 0) {
      const currentHour = auNow.getHours();
      const currentMinute = auNow.getMinutes();

      if (currentHour > CUTOFF_HOUR ||
          (currentHour === CUTOFF_HOUR && currentMinute >= CUTOFF_MINUTE)) {
        daysUntilWednesday = 7;
      }
    }

    const nextCutoff = new Date(auNow);
    nextCutoff.setDate(auNow.getDate() + daysUntilWednesday);
    nextCutoff.setHours(CUTOFF_HOUR, CUTOFF_MINUTE, 0, 0);

    const diffMs = nextCutoff - auNow;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    const remainingHours = diffHours % 24;

    return {
      totalHours: diffHours,
      days: diffDays,
      hours: remainingHours,
      isUnder24Hours: diffHours < 24
    };
  }

  function formatDeliveryMessage(data, timeInfo) {
    const { deliveryDay, startTime, endTime, deliveryFee } = data;

    const formatTime = (time) => {
      const [hours] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'pm' : 'am';
      const displayHour = hour % 12 || 12;
      return `${displayHour}${ampm}`;
    };

    const timeWindow = `${formatTime(startTime)} and ${formatTime(endTime)}`;

    let urgencyText;
    if (timeInfo.isUnder24Hours) {
      urgencyText = `${timeInfo.totalHours} hour${timeInfo.totalHours !== 1 ? 's' : ''}`;
    } else {
      urgencyText = `${timeInfo.days} day${timeInfo.days !== 1 ? 's' : ''}`;
    }

    return {
      deliveryDay,
      timeWindow,
      fee: deliveryFee,
      urgencyText
    };
  }

  function showResult(resultContainer, result) {
    if (!resultContainer) return;

    if (result.success) {
      resultContainer.innerHTML = `
        <p class="postcode-result__headline">Woohoo! We deliver in your area.</p>
        <p class="postcode-result__details">
          Order within the next <strong>${result.urgencyText}</strong> to get it between ${result.timeWindow} on
        </p>
        <p class="postcode-result__day">${result.deliveryDay}</p>
        <p class="postcode-result__fee">Delivery is a flat rate of $${result.fee}.</p>
      `;
      resultContainer.className = 'postcode-result postcode-result--success';
    } else {
      resultContainer.innerHTML = `
        <p class="postcode-result__message">${result.message}</p>
      `;
      resultContainer.className = 'postcode-result postcode-result--error';
    }

    resultContainer.style.display = 'block';
  }

  function setLoading(button, form, isLoading) {
    if (isLoading) {
      form?.classList.add('postcode-checker--loading');
      button.textContent = 'Checking...';
      button.disabled = true;
    } else {
      form?.classList.remove('postcode-checker--loading');
      button.textContent = 'Check Delivery';
      button.disabled = false;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
