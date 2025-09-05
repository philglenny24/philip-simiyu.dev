import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-black bg-white min-h-screen scroll-smooth">
      <Header />

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
    </div>
  );
}

export default App;
