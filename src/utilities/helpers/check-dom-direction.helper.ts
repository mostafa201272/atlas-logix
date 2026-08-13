/**
 * Get DOM Direction
 * @returns
 */
export function domDir() {
  return getComputedStyle(document.documentElement).direction;
}

/**
 * Check if the DOM direction is RTL
 * @returns
 */
export function isRtl() {
  return getComputedStyle(document.documentElement).direction === 'rtl';
}

/**
 * Check if the DOM direction is LTR
 * @returns
 */
export function isLtr() {
  return getComputedStyle(document.documentElement).direction === 'ltr';
}
