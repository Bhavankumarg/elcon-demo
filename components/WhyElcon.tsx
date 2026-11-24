import Image from "next/image";
import { clients, proofPoints, stats } from "@/lib/content";
import SectionHeader from "./ui/SectionHeader";

export default function WhyElcon() {
  return (
    <section id="why" className="scroll-mt-20 bg-cream-light py-24 md:py-32 lg:py-40">
      <div className="wrap">
        <SectionHeader eyebrow="Why ELCON" title="A single team accountable for the whole workplace." className="max-w-3xl" />

        <dl data-stagger className="mt-16 grid gap-10 border-t border-grey-line/80 pt-12 sm:grid-cols-3 md:mt-24">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-[clamp(3.5rem,7vw,5.5rem)] leading-none text-navy">
                <span data-count={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</span>
              </dd>
              <dt className="mt-4 max-w-[18ch] text-[12px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-grey-muted">{s.label}</dt>
            </div>
          ))}
        </dl>

        <div data-stagger className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
          {proofPoints.map((p) => (
            <div key={p.title} className="border-t border-navy pt-6">
              <h3 className="text-[1.5rem] leading-snug">{p.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32">
          <div data-reveal className="flex items-center gap-6">
            <p className="eyebrow whitespace-nowrap">Trusted by</p>
            <span className="hairline" />
          </div>
          <ul data-stagger className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((c) => (
              <li key={c.name} className="relative h-14 sm:h-16">
                <Image src={c.src} alt={c.name} fill sizes="(min-width:1024px) 14vw, (min-width:640px) 28vw, 44vw"
                  className="object-contain opacity-70 mix-blend-multiply grayscale contrast-125 brightness-105 transition duration-500 hover:opacity-100 hover:grayscale-0" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
