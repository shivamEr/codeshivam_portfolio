import { useState } from 'react';
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handleLoadingComplete} />}
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education/>
        <Project/>
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;