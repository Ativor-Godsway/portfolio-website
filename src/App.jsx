import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App scroll-smooth mb-[80vh]">
      <Hero />
      <About />
      <Projects />
      <Skills />

      <Contact />
      <div id="contact"></div>
    </div>
  );
}

export default App;
