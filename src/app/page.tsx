import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BlueprintRuler from "@/components/BlueprintRuler";
import AvatarCompanion from "@/components/AvatarCompanion";
import TechMarquee from "@/components/TechMarquee";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
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
      <BlueprintRuler />
      <AvatarCompanion />
      <main id="conteudo-principal">
        <Hero />
        <TechMarquee />
        <About />
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
