import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";
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
      <AnimatedBackground />
      <ScrollProgressBar />
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
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
