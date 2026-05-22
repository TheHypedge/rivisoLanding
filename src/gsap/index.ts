/**
 * GSAP plugin registration utility.
 * Import this at the top of any component that uses GSAP plugins.
 * Only call on the client side.
 */

let registered = false;

export async function registerGSAP() {
  if (registered || typeof window === "undefined") return;

  const gsap = (await import("gsap")).default;
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  // Integrate Lenis with GSAP ticker for smooth scroll sync
  gsap.ticker.lagSmoothing(0);

  registered = true;

  return { gsap, ScrollTrigger };
}
