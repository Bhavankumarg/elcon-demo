"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global { interface Window { __motionReady?: boolean } }

const EASE = "power3.out";

/**
 * All scroll/entrance motion lives here. Restrained by design:
 * fade-up reveals, word-mask headings, one gentle hero scale, count-up numbers.
 * No parallax, no scroll hijack, no cursor effects, nothing looping.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) { window.__motionReady = true; return; }

    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.toArray as <T extends Element>(s: string) => T[];

    const ctx = gsap.context(() => {
      // ---- Hero (plays on load)
      const heroTl = gsap.timeline({ defaults: { ease: EASE } });
      heroTl
        .fromTo("[data-hero-image]", { scale: 1.1 }, { scale: 1, duration: 2.6, ease: "power2.out" }, 0)
        .fromTo("[data-hero-title] .split-inner", { yPercent: 105, y: 0 }, { yPercent: 0, y: 0, duration: 1.1, stagger: 0.07 }, 0.25)
        .fromTo("[data-hero-fade]", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 }, 0.9);

      // ---- Word-mask headings (below the fold)
      q<HTMLElement>("[data-split]:not([data-hero-title])").forEach((el) => {
        gsap.fromTo(el.querySelectorAll(".split-inner"), { yPercent: 105, y: 0 }, {
          yPercent: 0, y: 0, duration: 1, ease: EASE, stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      // ---- Fade-up reveals
      q<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 24 }, {
          autoAlpha: 1, y: 0, duration: 0.9, ease: EASE,
          delay: Number(el.dataset.delay ?? 0),
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      // ---- Short staggered groups
      q<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.fromTo(group.children, { autoAlpha: 0, y: 24 }, {
          autoAlpha: 1, y: 0, duration: 0.85, ease: EASE, stagger: 0.09,
          scrollTrigger: { trigger: group, start: "top 88%", once: true },
        });
      });

      // ---- Count-up figures
      q<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? "";
        const state = { n: 0 };
        gsap.to(state, {
          n: end, duration: 1.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => { el.textContent = Math.round(state.n) + suffix; },
        });
      });
    });

    window.__motionReady = true;
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => { window.removeEventListener("load", refresh); ctx.revert(); };
  }, []);

  return <>{children}</>;
}
