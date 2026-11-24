import Image from "next/image";
import { projects } from "@/lib/content";
import SectionHeader from "./ui/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-cream-light py-24 md:py-32 lg:py-40">
      <div className="wrap">
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <SectionHeader eyebrow="Featured projects" title="Spaces shaped around the people who use them." className="max-w-2xl" />
          <p data-reveal className="max-w-xs text-[14px] leading-relaxed text-grey-muted">
            Photography supplied by ELCON. Project names, clients and locations are <span className="placeholder-tag">to be confirmed</span>
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[380px] lg:gap-y-10">
          {projects.map((p, i) => (
            <figure key={p.src} data-reveal data-delay={i % 2 ? 0.08 : 0}
              className={`group flex flex-col ${p.className} ${i === 0 ? "lg:row-span-2" : ""}`}>
              <div className={`zoom-frame relative min-h-[260px] flex-1 bg-cream ${p.ratio}`}>
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 55vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover" style={{ objectPosition: p.pos }} />
              </div>
              <figcaption className="flex flex-col gap-1 pt-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="font-display text-[1.25rem] text-navy">{p.kind}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-grey-muted sm:text-right">Project name · Location — TBC</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
