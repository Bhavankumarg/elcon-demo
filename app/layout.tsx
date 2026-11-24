import type { Metadata, Viewport } from "next";
import { Manrope, Marcellus } from "next/font/google";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const display = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-marcellus", display: "swap" });

export const metadata: Metadata = {
  title: "ELCON Infrastructure | Interior, MEP & Civil — Workplace Design and Delivery",
  description:
    "ELCON Infrastructure designs and delivers thoughtful workplace environments, bringing together interior, MEP and civil works in one accountable team.",
};
export const viewport: Viewport = { themeColor: "#002F8E", width: "device-width", initialScale: 1 };

// Runs before paint. Enables hidden-until-animated states only if motion is allowed,
// with a fail-safe so content can never stay hidden if the animation bundle fails.
const motionGate = `(function(){var d=document.documentElement;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.classList.add('motion-ok');
setTimeout(function(){if(!window.__motionReady){d.classList.remove('motion-ok');d.classList.add('motion-fail');}},4000);})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: motionGate }} /></head>
      <body>{children}</body>
    </html>
  );
}
