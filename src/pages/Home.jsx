import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
