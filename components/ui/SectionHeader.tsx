import SplitHeading from "./SplitHeading";

export default function SectionHeader({
  eyebrow, title, light, className = "",
}: { eyebrow: string; title: string; light?: boolean; className?: string }) {
  return (
    <div className={className}>
      <p data-reveal className={`eyebrow ${light ? "!text-tint" : ""}`}>{eyebrow}</p>
      <SplitHeading
        text={title}
        className={`mt-5 text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.1] ${light ? "!text-cream-light" : ""}`}
      />
    </div>
  );
}
