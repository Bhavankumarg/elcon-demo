import { services } from "@/lib/content";
import SectionHeader from "./ui/SectionHeader";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-cream py-24 md:py-32 lg:py-40">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeader eyebrow="Services" title="Interior, MEP and Civil, delivered as one." />
            <p data-reveal className="mt-8 max-w-sm text-[17px]">
              Each discipline is led by our own teams and coordinated from the first drawing, so nothing is lost between design and site.
            </p>
          </div>
        </div>

        <ol data-stagger className="lg:col-span-7 lg:col-start-6">
          {services.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-grey-line/80 py-7 last:border-b md:grid-cols-[3.5rem_1fr_auto] md:gap-x-6 md:py-9">
              <span className="pt-1.5 text-[12px] font-semibold tracking-[0.14em] text-blue">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[1.6rem] leading-tight md:text-[1.9rem]">{s.title}</h3>
                <p className="mt-3 max-w-md text-[15.5px] leading-relaxed">{s.desc}</p>
              </div>
              <span className="col-start-2 mt-4 text-[11px] font-semibold uppercase tracking-eyebrow text-grey-muted md:col-start-3 md:mt-2 md:text-right">{s.area}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
