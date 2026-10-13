import Lenis from 'lenis';

let lenis = null;

export const initLenis = () => {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  let rafId;
  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);
  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    lenis = null;
  };
};

export const scrollToId = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -84, duration: 1.2 });
  else el.scrollIntoView({ behavior: 'smooth' });
};
