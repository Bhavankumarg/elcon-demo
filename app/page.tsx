import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import WhyElcon from "@/components/WhyElcon";
import Insights from "@/components/Insights";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionProvider>
      <a href="#about" className="sr-only z-[60] bg-cream-light px-4 py-3 text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Projects />
        <Approach />
        <WhyElcon />
        <Insights />
        <ContactCta />
      </main>
      <Footer />
    </MotionProvider>
  );
}
