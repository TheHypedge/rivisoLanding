/**
 * Brand logos for the trust carousel.
 *
 * 1. Drop image files into: public/logos/brands/
 * 2. Add or update an entry below (file name must match exactly).
 */

export const BRAND_LOGOS_DIR = "/logos/brands" as const;

export type BrandLogoEntry = {
  id: string;
  name: string;
  /** File name inside public/logos/brands/ (case-sensitive on deploy) */
  file: string;
};

export const brandLogoEntries: BrandLogoEntry[] = [
  { id: "hypedge", name: "Hypedge", file: "Hypedge.png" },
  { id: "ttsfm", name: "TTSFM", file: "TTSFM.png" },
  { id: "sheokand", name: "Sheokand Legal", file: "Sheokand Legal.png" },
  { id: "kcs", name: "KCS", file: "KCS.png" },
];

export function brandLogoSrc(file: string) {
  return `${BRAND_LOGOS_DIR}/${encodeURIComponent(file)}`;
}
