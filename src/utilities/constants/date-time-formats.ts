/** ============================================
 * GLOBAL/API FORMATS
 * ============================================ */

/** Default date and time format for endpoints */
export const GLOBAL_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

/** Default date format for endpoints */
export const GLOBAL_DATE_FORMAT = 'DD/MM/YYYY';

/** Default time format for endpoints */
export const GLOBAL_TIME_FORMAT = 'HH:mm';

/** Default time format for endpoints with seconds */
export const GLOBAL_TIME_FORMAT_SEC = 'HH:mm:ss';

/** Request date format (ISO-like format, e.g., 2023-04-15) */
export const REQUEST_DATE_FORMAT = 'YYYY-MM-DD';

/** ============================================
 * DATE DISPLAY FORMATS
 * ============================================ */

/** Date name format (e.g., January 2023) */
export const DATE_NAME_FORMAT = 'MMMM YYYY';

/** Date month and year format (e.g., Jan 2023) */
export const DATE_MONTH_YEAR_FORMAT = 'MMM YYYY';

/** Default day and month format (e.g., 18 Nov) */
export const GLOBAL_DAY_MONTH_FORMAT = 'DD MMM';

/** Date format with day, month, and year (e.g., 18 Nov 2020) */
export const GLOBAL_DATE_FORMAT_DD_MMM = 'DD MMM YYYY';

/** Date format with day, month, and 2-digit year (e.g., 18 Nov 20) */
export const GLOBAL_DATE_FORMAT_DD_MMM_YY = 'DD MMM YY';

/** Full date format with weekday (e.g., Friday, July 17, 2020) */
export const FULL_DATE_FORMAT = 'dddd, MMM D, YYYY';

/** ============================================
 * TIME DISPLAY FORMATS
 * ============================================ */

/** 12-hour time format with seconds (e.g., 02:30:15 PM) */
export const GLOBAL_TIME_FORMAT_SEC_12_HOUR = 'hh:mm:ss A';

/** 12-hour time format with meridian (e.g., 02:30 PM) */
export const MERIDIAN_TIME_FORMAT = 'hh:mm A';

/** ============================================
 * COMBINED DATE & TIME FORMATS
 * ============================================ */

/** Table date and time format with meridian (e.g., 18-11-2023 | 02:30 PM) */
export const GLOBAL_TABLE_TIME_FORMAT = 'DD-MM-YYYY | hh:mm A';

/** Form-specific date and time format with meridian (e.g., 18-11-2023 02:30 PM) */
export const FORM_DATE_FORMAT_ORIGINAL = 'DD-MM-YYYY hh:mm A';

/** ISO 8601 date-time format with timezone */
export const FORM_DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

/** ISO 8601 date-time format without timezone */
export const FORM_DATE_TIME_FORMAT_WITHOUT_ZONE = 'YYYY-MM-DDTHH:mm:ss';

/** ISO date format */
export const FORM_DATE_FORMAT = 'YYYY-MM-DD';

/** Time format with seconds */
export const FORM_TIME_FORMAT = 'HH:mm:ss';

/** Combined format for forms (e.g., 15-04-2023T14:30:00) */
export const FORM_DATETIME_FORMAT = 'DD-MM-YYYYTHH:mm:ss';

/** Compact date-time format (e.g., 2023-04-15 14:30) */
export const FORM_SHORT_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm';

/** ============================================
 * RELATIVE & DURATION FORMATS
 * ============================================ */

/** Duration format (e.g., 2h 30m) */
export const DURATION_FORMAT = 'H[h] m[m]';

/** Duration format with seconds (e.g., 2h 30m 15s) */
export const DURATION_FORMAT_WITH_SECONDS = 'H[h] m[m] s[s]';

/** ============================================
 * ANGULAR DATE PIPE FORMATS
 * ============================================ */

export const ANGULAR_DATE_PIPE_FORMATS = {
  SHORT_DATE: 'shortDate', // e.g., 4/15/23
  LONG_DATE: 'longDate', // e.g., April 15, 2023
  SHORT_TIME: 'shortTime', // e.g., 2:30 PM
  MEDIUM: 'medium', // e.g., Apr 15, 2023, 2:30:15 PM
  MEDIUM_DATE: 'mediumDate', // e.g., Apr 15, 2023
  MEDIUM_TIME: 'mediumTime', // e.g., 2:30:15 PM
  FULL_DATE: 'fullDate', // e.g., Friday, April 15, 2023
  FULL_TIME: 'fullTime', // e.g., 2:30:15 PM GMT+2
  LONG_DATE_TIME: 'full', // e.g., Friday, April 15, 2023 at 2:30:15 PM GMT+2
} as const;

/** ============================================
 * HELPER CONSTANTS
 * ============================================ */

/** Common timezone offsets (in hours from UTC) */
export const TIMEZONE_OFFSETS = {
  UTC: 0,
  GMT_PLUS_1: 1,
  GMT_PLUS_2: 2,
  GMT_MINUS_5: -5,
  GMT_MINUS_8: -8,
} as const;

/** Days in milliseconds */
export const TIME_IN_MS = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24,
  WEEK: 1000 * 60 * 60 * 24 * 7,
} as const;
