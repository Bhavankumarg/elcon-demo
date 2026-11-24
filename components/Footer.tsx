import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { company, nav, offices, services } from "@/lib/content";

const h = "text-[11px] font-semibold uppercase tracking-eyebrow text-tint";
const link = "transition-colors hover:text-cream-light";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 text-[15px] text-grey-line md:pt-24">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="relative h-11 w-[220px]">
              <Image src="/brand/elcon-logo-light.png" alt="ELCON Infrastructure — Interior, MEP, Civil" fill sizes="220px" className="object-contain object-left" />
            </div>
            <p className="mt-6 max-w-xs leading-relaxed text-grey-body">
              Workplace environments that bring together people, performance and purpose, delivered through Interior, MEP and Civil expertise.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-[0.8fr_1.1fr_1.3fr_1.2fr]">
            <div>
              <h3 className={`${h} !font-sans`}>Explore</h3>
              <ul className="mt-5 space-y-3">{nav.map((n) => <li key={n.href}><a className={link} href={n.href}>{n.label}</a></li>)}</ul>
            </div>
            <div>
              <h3 className={`${h} !font-sans`}>Services</h3>
              <ul className="mt-5 space-y-3">{services.slice(0, 6).map((s) => <li key={s.title}><a className={link} href="#services">{s.title}</a></li>)}</ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className={`${h} !font-sans`}>Contact</h3>
              <ul className="mt-5 space-y-3">
                <li><a className={link} href={`tel:${company.phoneHref}`}>{company.phone}</a></li>
                <li><a className={link} href={`mailto:${company.email}`}>{company.email}</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <h3 className={`${h} !font-sans`}>Offices</h3>
              <ul className="mt-5 space-y-5">
                {offices.map((o) => (
                  <li key={o.label}>
                    <p className="font-semibold text-cream-light">{o.label}</p>
                    {o.placeholder ? <span className="placeholder-tag mt-1 !border-tint/50 !text-tint">Address to be supplied</span>
                      : <address className="mt-1 not-italic leading-relaxed text-grey-body">{o.lines.map((l) => <span key={l} className="block">{l}</span>)}</address>}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream-light/15 py-7 text-[12.5px] text-grey-body sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ELCON Infrastructure. All rights reserved.</p>
          <a href="#top" className={`inline-flex items-center gap-2 uppercase tracking-[0.14em] ${link}`}>Back to top <ArrowUp size={14} aria-hidden /></a>
        </div>
      </div>
    </footer>
  );
}
