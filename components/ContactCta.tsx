import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { company, cta } from "@/lib/content";
import SplitHeading from "./ui/SplitHeading";

export default function ContactCta() {
  return (
    <section id="contact" className="relative isolate scroll-mt-20 overflow-hidden bg-navy py-28 md:py-40 lg:py-48">
      <Image src="/images/training-room.jpg" alt="" aria-hidden fill sizes="100vw" className="-z-10 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy/85" />
      <div className="wrap">
        <p data-reveal className="eyebrow !text-tint">Contact</p>
        <SplitHeading text={cta.heading} className="mt-5 max-w-4xl !text-cream-light text-[clamp(2.2rem,5.2vw,4.5rem)] leading-[1.06]" />
        <p data-reveal className="mt-8 max-w-xl text-[17px] text-cream-light/80">{cta.copy}</p>
        <div data-reveal className="mt-11 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href={`mailto:${company.email}?subject=Project%20enquiry`} className="btn border-cream-light bg-cream-light text-navy hover:bg-transparent hover:text-cream-light sm:min-w-[260px]">
            Discuss Your Project <ArrowUpRight size={16} aria-hidden />
          </a>
          <a href={`tel:${company.phoneHref}`} className="btn-ghost-light sm:min-w-[220px]"><Phone size={15} aria-hidden /> {company.phone}</a>
        </div>
      </div>
    </section>
  );
}
