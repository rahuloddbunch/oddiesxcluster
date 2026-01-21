/**
 * Custom Postcode Checker for Oddies
 * Replaces the external oddbunch-postcodes app for A/B testing
 */

(function() {
  const API_ENDPOINT = 'https://www.oddies.au/apps/postcodes/postcodes/check';
  const TIMEZONE = 'Australia/Sydney';
  const CUTOFF_DAY = 3; // Wednesday
  const CUTOFF_HOUR = 23;
  const CUTOFF_MINUTE = 55;

  function init() {
    const appElements = document.querySelectorAll('[data-app="oddbunch-postcodes"]');

    console.log('[PostcodeChecker] Init - found', appElements.length, 'app elements to replace');

    appElements.forEach((el, index) => {
      console.log('[PostcodeChecker] Hiding old app element', index, el);

      // Aggressively hide the existing app element (shadow DOM)
      hideAppElement(el);

      // Create and insert the new postcode checker
      const checker = createPostcodeChecker();
      el.parentNode.insertBefore(checker, el.nextSibling);

      console.log('[PostcodeChecker] Inserted new component after old element');

      // Watch for the app trying to show itself again
      const observer = new MutationObserver(() => {
        console.log('[PostcodeChecker] Old app tried to show itself, re-hiding');
        hideAppElement(el);
      });
      observer.observe(el, { attributes: true, attributeFilter: ['style'] });
    });
  }

  function hideAppElement(el) {
    // Force hide with !important
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
      console.error('Postcode check error:', error);
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
    // Get current time in Australia/Sydney timezone
    const now = new Date();
    const auTimeString = now.toLocaleString('en-US', { timeZone: TIMEZONE });
    const auNow = new Date(auTimeString);

    // Calculate days until next Wednesday
    const currentDay = auNow.getDay();
    let daysUntilWednesday = (CUTOFF_DAY - currentDay + 7) % 7;

    // If it's Wednesday, check if we've passed the cutoff time
    if (daysUntilWednesday === 0) {
      const currentHour = auNow.getHours();
      const currentMinute = auNow.getMinutes();

      if (currentHour > CUTOFF_HOUR ||
          (currentHour === CUTOFF_HOUR && currentMinute >= CUTOFF_MINUTE)) {
        daysUntilWednesday = 7; // Next Wednesday
      }
    }

    // Create cutoff date
    const nextCutoff = new Date(auNow);
    nextCutoff.setDate(auNow.getDate() + daysUntilWednesday);
    nextCutoff.setHours(CUTOFF_HOUR, CUTOFF_MINUTE, 0, 0);

    // Calculate difference
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

    // Format time window (convert 24h to 12h format)
    const formatTime = (time) => {
      const [hours] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'pm' : 'am';
      const displayHour = hour % 12 || 12;
      return `${displayHour}${ampm}`;
    };

    const timeWindow = `${formatTime(startTime)} and ${formatTime(endTime)}`;

    // Build urgency message
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
