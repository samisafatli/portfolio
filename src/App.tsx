import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <SEO />
        <Header />
        <main>
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
