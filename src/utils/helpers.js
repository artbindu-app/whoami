/**
 * Calculate work experience from start date
 * @param {string} startDate - Start date in format 'MM-DD-YYYY'
 * @returns {string} Years of experience with suffix
 */
export function getWorkExperience(startDate = '06-15-2019') {
  const start = new Date(startDate);
  const current = new Date();

  const startData = {
    yy: start.getUTCFullYear(),
    mm: start.getUTCMonth() + 1,
    dd: start.getUTCDate() + 1,
  };

  const currentData = {
    yy: current.getUTCFullYear(),
    mm: current.getUTCMonth() + 1,
    dd: current.getUTCDate() + 1,
  };

  // Calculate days
  if (currentData.dd < startData.dd) {
    currentData.mm = currentData.mm - 1;
    currentData.dd = currentData.dd + 30;
  }

  // Calculate months
  if (currentData.mm < startData.mm) {
    currentData.yy = currentData.yy - 1;
    currentData.mm = currentData.mm + 12;
  }
  const months = currentData.mm - startData.mm;

  // Calculate years
  const years = currentData.yy - startData.yy;

  // Format output
  let result = '' + years;
  if (months === 6) {
    result += '.5';
  } else if (months >= 7) {
    result += '.5+';
  } else if (months >= 1) {
    result += '+';
  }

  return result;
}

/**
 * Calculate age from birth date
 * @param {Date} birthDate - Date of birth
 * @returns {number} Age in years
 */
export function getAge(birthDate = new Date()) {
  const currentDate = new Date();
  let years = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
     currentDate.getDate() < birthDate.getDate())
  ) {
    years--;
  }

  return years;
}

/**
 * Detect user's operating system
 * @returns {string|null} OS name
 */
export function getOS() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
  const macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    return 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return 'Windows';
  } else if (/Android/.test(userAgent)) {
    return 'Android';
  } else if (/Linux/.test(platform)) {
    return 'Linux';
  }

  return null;
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of target element
 * @param {number} duration - Animation duration in ms
 */
export function smoothScrollTo(elementId, duration = 1000) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 300) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
