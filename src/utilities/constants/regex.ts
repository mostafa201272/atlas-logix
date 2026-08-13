/**
 * Comprehensive regex patterns for common validation and matching use cases
 * All patterns are defined as static readonly properties for type safety
 */
export class REGEX {
  // ============================================
  // AUTHENTICATION & SECURITY
  // ============================================

  /** Email validation regex (RFC 5322 simplified) */
  public static readonly EMAIL_REGEX: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /** Strong password: min 8 chars, uppercase, lowercase, number, special char */
  public static readonly STRONG_PASSWORD_REGEX: RegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?_&])[A-Za-z\d$@$!%*#?_&]{8,}$/;

  /** Moderate password: min 6 chars with letters and numbers */
  public static readonly MODERATE_PASSWORD_REGEX: RegExp =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;

  // ============================================
  // WEB & CONNECTIVITY
  // ============================================

  /** URL validation (http/https) */
  public static readonly URL_REGEX: RegExp =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

  /** Phone number (international format with +, spaces, hyphens) */
  public static readonly PHONE_REGEX: RegExp =
    /^(\+?\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  /** IPv4 address validation */
  public static readonly IPV4_REGEX: RegExp =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // ============================================
  // IDENTIFIERS & CODES
  // ============================================

  /** UUID/GUID validation (v4 format) */
  public static readonly UUID_REGEX: RegExp =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  /** Alphanumeric with underscores (username format) */
  public static readonly USERNAME_REGEX: RegExp = /^[a-zA-Z0-9_]{3,20}$/;

  // ============================================
  // NAMES & TEXT
  // ============================================

  /** Name validation: 2-11 chars, letters, numbers, spaces, &, _, -, . */
  public static readonly NAME_REGEX: RegExp = /^(?=.*[A-Za-z])[A-Za-z\d\s_&\-.]{2,11}$/;

  /** Full name (allows letters, spaces, hyphens, apostrophes) */
  public static readonly FULL_NAME_REGEX: RegExp = /^[a-zA-Z\s\-']{2,50}$/;

  // ============================================
  // NUMERIC PATTERNS
  // ============================================

  /** Positive integer (no decimals, no leading zeros) */
  public static readonly POSITIVE_INTEGER_REGEX: RegExp = /^[1-9]\d*$/;

  /** Non-negative integer (includes zero) */
  public static readonly NON_NEGATIVE_INTEGER_REGEX: RegExp = /^[0-9]\d*$/;

  /** Decimal number (up to 2 decimal places) */
  public static readonly DECIMAL_REGEX: RegExp = /^[0-9]*(\.[0-9]{0,2})?$/;

  /** Decimal with any precision */
  public static readonly DECIMAL_ANY_PRECISION_REGEX: RegExp = /^[0-9]*(\.[0-9]+)?$/;

  /** Percentage (0-100) */
  public static readonly PERCENTAGE_REGEX: RegExp = /^(100|[0-9]{1,2}(\.[0-9]{1,2})?)$/;

  /** Contains at least one number */
  public static readonly CONTAINS_NUMBER: RegExp = /\d/;

  // ============================================
  // CHARACTER CLASSES
  // ============================================

  /** Uppercase letter */
  public static readonly UPPERCASE_LETTER_REGEX: RegExp = /[A-Z]+/;

  /** Lowercase letter */
  public static readonly LOWERCASE_LETTER_REGEX: RegExp = /[a-z]+/;

  /** Special characters */
  public static readonly SPECIAL_CHARACTER_REGEX: RegExp = /[$@$!%*#?&]+/;

  /** English letters only (including spaces) */
  public static readonly ENGLISH_LETTERS_REGEX: RegExp = /^[a-zA-Z\s]*$/;

  /** Arabic letters only (including spaces) */
  public static readonly ARABIC_LETTERS_REGEX: RegExp = /^[\u0600-\u06FF\s]+$/;

  /** Alphanumeric characters only */
  public static readonly ALPHANUMERIC_REGEX: RegExp = /^[a-zA-Z0-9]+$/;

  /** Whitespace only */
  public static readonly WHITESPACE_REGEX: RegExp = /^\s+$/;

  // ============================================
  // FORMATTING & PATTERNS
  // ============================================

  /** Time format HH:MM or HH:MM:SS */
  public static readonly TIME_REGEX: RegExp = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;

  /** Date format DD/MM/YYYY or DD-MM-YYYY */
  public static readonly DATE_REGEX: RegExp =
    /^(0?[1-9]|[12][0-9]|3[01])[-/](0?[1-9]|1[012])[-/]\d{4}$/;

  /** Hex color code */
  public static readonly HEX_COLOR_REGEX: RegExp = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  /** Credit card number (basic validation) */
  public static readonly CREDIT_CARD_REGEX: RegExp = /^\d{13,19}$/;

  /** File extension validation */
  public static readonly FILE_EXTENSION_REGEX: RegExp = /\.[0-9a-z]+$/i;
}
