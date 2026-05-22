/**
 * Riviso product logo paths (header, favicon, footer, etc.)
 * Files live in: public/logos/riviso/
 */

export const SITE_LOGO_DIR = "/logos/riviso" as const;

export const siteLogo = {
  /** Header & mega menu */
  default: `${SITE_LOGO_DIR}/logo.png`,
  /** Footer on dark background */
  onDark: `${SITE_LOGO_DIR}/logo-dark.png`,
  /** Favicon & app icon */
  icon: `${SITE_LOGO_DIR}/icon.png`,
  /** Apple touch icon */
  apple: `${SITE_LOGO_DIR}/apple-icon.png`,
  /** Open Graph / social preview */
  og: `${SITE_LOGO_DIR}/og-image.png`,
} as const;
