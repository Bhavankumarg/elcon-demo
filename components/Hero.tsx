import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { hero } from "@/lib/content";
import SplitHeading from "./ui/SplitHeading";

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-charcoal">
      <div data-hero-image className="absolute inset-0 -z-10 will-change-transform">
        <Image src="/images/corporate-office.jpg" alt="Open-plan commercial workplace with a planted seating island, ring pendant lighting and exposed services"
          fill priority sizes="100vw" quality={85} className="object-cover object-[60%_55%]" />
      </div>
      {/* Legibility scrims only — flat, no decorative colour */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,22,70,0.82)_0%,rgba(0,22,70,0.45)_38%,rgba(0,0,0,0)_68%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,22,70,0.5)_0%,rgba(0,22,70,0)_62%)]" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/45 to-transparent" />

      <div className="wrap mt-auto pb-10 pt-40 sm:pb-14 lg:pb-16">
        <SplitHeading as="h1" hero text={hero.headline}
          className="max-w-[17ch] !text-cream-light text-[clamp(2.5rem,6.4vw,5.75rem)] leading-[1.04] sm:max-w-[20ch]" />
        <p data-hero-fade className="mt-7 max-w-xl text-[17px] leading-relaxed text-cream-light/90 sm:text-lg">{hero.copy}</p>
        <div data-hero-fade className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="#projects" className="btn-solid sm:min-w-[200px]">Explore Projects</a>
          <a href="mailto:support@elconinterior.com?subject=Project%20enquiry" className="btn-ghost-light sm:min-w-[200px]">Discuss Your Project</a>
        </div>

        <div data-hero-fade className="mt-12 hidden items-center justify-between border-t border-cream-light/30 pt-5 text-[11px] font-semibold uppercase tracking-eyebrow text-cream-light/80 md:flex">
          <span>Interior · MEP · Civil</span>
          <a href="#about" className="inline-flex items-center gap-2 transition-colors hover:text-cream-light">Scroll <ArrowDown size={14} aria-hidden /></a>
        </div>
      </div>
    </section>
  );
}
