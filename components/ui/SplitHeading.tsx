import { createElement } from "react";

type Props = { text: string; as?: "h1" | "h2" | "h3"; className?: string; hero?: boolean };

/** Server-rendered word split. Each word sits in a clipped mask; MotionProvider slides it up. */
export default function SplitHeading({ text, as = "h2", className, hero }: Props) {
  const words = text.split(" ");
  return createElement(
    as,
    { className, "data-split": "", ...(hero ? { "data-hero-title": "" } : {}) },
    words.map((w, i) => (
      <span key={i}>
        <span className="split-word"><span className="split-inner">{w}</span></span>
        {i < words.length - 1 ? " " : null}
      </span>
    )),
  );
}
