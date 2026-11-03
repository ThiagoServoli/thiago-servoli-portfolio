import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ChapterIndicator from "@/components/ChapterIndicator";
import TechMarquee from "@/components/TechMarquee";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import ClickVenture from "@/sections/ClickVenture";
import Stack from "@/sections/Stack";
import Projects from "@/sections/Projects";
import Journey from "@/sections/Journey";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <ChapterIndicator />
      <main id="conteudo-principal">
        <Hero />
        <TechMarquee />
        <About />
        <ClickVenture />
        <Stack />
        <Projects />
        <Journey />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
