import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Initializes Lenis smooth scrolling. Skipped entirely when the user has
 * requested reduced motion, per WCAG 2.3.3 / prefers-reduced-motion.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.05,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
}
