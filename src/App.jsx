import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Intro from "./components/Intro";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionNavigator from "./components/SectionNAvigator";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
  if (showIntro) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [showIntro]);

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionNavigator />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
