import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { intro } from "@/lib/content";
import SectionHeader from "./ui/SectionHeader";

export default function Intro() {
  return (
    <section id="about" className="scroll-mt-20 bg-cream-light py-24 md:py-32 lg:py-40">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={intro.eyebrow} title={intro.heading} />
          <div data-stagger className="mt-9 max-w-md space-y-5 text-[17px]">
            {intro.body.map((p) => <p key={p}>{p}</p>)}
          </div>
          <a data-reveal href="#services" className="group mt-10 inline-flex items-center gap-3 border-b border-navy/40 pb-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:border-navy">
            Our services <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </a>
        </div>

        <figure data-reveal className="lg:col-span-6 lg:col-start-7">
          <div className="zoom-frame relative aspect-[4/5] w-full bg-cream sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image src="/images/pantry-office.jpg" alt="Pantry with deep navy joinery, a high bar table and planting" fill
              sizes="(min-width:1024px) 46vw, 100vw" className="object-cover object-[22%_50%]" />
          </div>
          <figcaption className="mt-4 flex items-center justify-between border-t border-grey-line/70 pt-3 text-[12px] uppercase tracking-[0.14em] text-grey-muted">
            <span>Pantry &amp; breakout</span><span>ELCON project photography</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
