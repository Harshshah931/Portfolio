import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import CaseStudy from './pages/CaseStudy';
import { LenisContext } from './LenisContext';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}

function App() {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    setLenisInstance(lenis);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      <div className="noise relative bg-[var(--color-bg)] min-h-screen text-[var(--color-text)]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<CaseStudy />} />
          </Routes>
        </main>
      </div>
    </LenisContext.Provider>
  );
}

export default App;
