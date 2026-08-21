import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function goToSection(id: string) {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }

  function goHome() {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'py-2.5' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled ? 'glass py-3 px-6 mx-4 sm:mx-auto border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : ''
          }`}
        >
          <button
            onClick={goHome}
            className="font-display font-bold text-xl tracking-tight flex items-center gap-1 group"
          >
            <span className="text-white group-hover:text-[var(--color-primary-soft)] transition-colors">Harsh</span>
            <span className="text-[var(--color-accent)] animate-pulse">.</span>
          </button>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => goToSection(link.id)}
                className="text-xs uppercase tracking-[0.2em] font-mono-sub text-[var(--color-text-dim)] hover:text-white transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => goToSection('contact')}
              className="text-xs uppercase tracking-[0.2em] font-mono-sub px-5 py-2 rounded-full glow-border glass hover:bg-[var(--color-primary)] text-white hover:text-white transition-all duration-300 font-medium"
            >
              Let's talk
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-2xl glass border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] md:hidden flex flex-col gap-4 bg-[#0a0a14]/95 backdrop-blur-2xl"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => goToSection(link.id)}
                className="text-left text-sm uppercase tracking-[0.2em] font-mono-sub text-white/90 hover:text-[var(--color-accent)] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
