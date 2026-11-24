import Image from "next/image";
import { insights } from "@/lib/content";
import SectionHeader from "./ui/SectionHeader";

export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-20 bg-cream py-24 md:py-32 lg:py-40">
      <div className="wrap">
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <SectionHeader eyebrow="Insights" title="Thinking on workplace design and delivery." className="max-w-2xl" />
          <p data-reveal className="max-w-xs text-[14px] leading-relaxed text-grey-muted">
            Articles have not been supplied yet. <span className="placeholder-tag">Content placeholder</span>
          </p>
        </div>

        <div data-stagger className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {insights.map((a, i) => (
            <article key={i} className="group">
              <div className="zoom-frame relative aspect-[4/3] bg-cream-light">
                <Image src={a.src} alt={a.alt} fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover" />
              </div>
              <p className="eyebrow mt-6">{a.topic}</p>
              <h3 className="mt-3 text-[1.5rem] leading-snug text-navy/70">Article title to be supplied by ELCON</h3>
              <p className="mt-4 border-t border-grey-line/80 pt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-grey-muted">Publish date — TBC · Read time — TBC</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
