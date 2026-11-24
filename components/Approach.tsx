import Image from "next/image";
import { approach } from "@/lib/content";
import SectionHeader from "./ui/SectionHeader";

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 bg-navy py-24 text-cream-light md:py-32 lg:py-40">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeader light eyebrow={approach.eyebrow} title={approach.heading} />
            <p data-reveal className="mt-8 max-w-md text-[17px] text-cream-light/80">{approach.lead}</p>
            <div data-reveal className="zoom-frame relative mt-12 hidden aspect-[4/3] max-w-md lg:block">
              <Image src="/images/office-renovation.jpg" alt="Training room with ring pendants, timber ceiling and full-height glazing" fill sizes="30vw" className="object-cover" />
            </div>
          </div>
        </div>

        <ul data-stagger className="lg:col-span-6 lg:col-start-7">
          {approach.principles.map((p, i) => (
            <li key={p.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-cream-light/20 py-8 last:border-b md:grid-cols-[3.5rem_1fr] md:py-10">
              <span className="pt-2 text-[12px] font-semibold tracking-[0.14em] text-tint">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="!text-cream-light text-[1.9rem] leading-tight md:text-[2.2rem]">{p.title}</h3>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed text-cream-light/75">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
