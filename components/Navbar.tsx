"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

const MAIL = "mailto:support@elconinterior.com?subject=Project%20enquiry";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ${
          scrolled && !open ? "bg-cream-light/95 py-3 shadow-[0_1px_0_rgba(39,37,42,0.08)] backdrop-blur" : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="wrap flex items-center justify-between gap-6">
          <a href="#top" aria-label="ELCON Infrastructure — home" className="relative block h-9 w-[170px] shrink-0 sm:h-11 sm:w-[210px]" onClick={() => setOpen(false)}>
            <Image src="/brand/elcon-logo.png" alt="ELCON Infrastructure — Interior, MEP, Civil" fill sizes="210px" priority
              className={`object-contain object-left transition-opacity duration-500 ${solid && !open ? "opacity-100" : "opacity-0"}`} />
            <Image src="/brand/elcon-logo-light.png" alt="" aria-hidden fill sizes="210px" priority
              className={`object-contain object-left transition-opacity duration-500 ${solid && !open ? "opacity-0" : "opacity-100"}`} />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}
                    className={`group relative py-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${solid ? "text-navy" : "text-cream-light"}`}>
                    {n.label}
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a href={MAIL}
              className={`hidden min-h-[46px] items-center gap-2 border px-5 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 md:inline-flex ${
                solid ? "border-royal bg-royal text-cream-light hover:bg-indigo" : "border-cream-light/70 text-cream-light hover:bg-cream-light hover:text-navy"
              }`}>
              Discuss Your Project <ArrowUpRight size={15} aria-hidden />
            </a>
            <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className={`inline-flex h-12 w-12 items-center justify-center lg:hidden ${solid && !open ? "text-navy" : "text-cream-light"}`}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open} inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-navy px-5 pb-10 pt-28 transition-[opacity,clip-path] duration-500 sm:px-8 lg:hidden ${
          open ? "visible opacity-100 [clip-path:inset(0_0_0_0)]" : "invisible opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}>
        <ul className="flex-1 space-y-1">
          {nav.map((n, i) => (
            <li key={n.href} className="border-b border-cream-light/15">
              <a href={n.href} onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
                className={`flex min-h-[60px] items-center justify-between font-display text-[1.9rem] text-cream-light transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
                {n.label}<ArrowUpRight size={20} className="text-tint" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <a href={MAIL} className="btn-ghost-light mt-8 w-full">Discuss Your Project</a>
      </div>
    </>
  );
}
