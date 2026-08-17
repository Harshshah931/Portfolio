import { motion } from 'framer-motion';
import { profile } from '../data/content';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative py-32 px-6 sm:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] font-mono-sub text-[var(--color-accent)] mb-4 font-semibold"
        >
          05 / Contact & Connect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Let's build something <span className="gradient-text">great</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[var(--color-text-dim)] mb-10 max-w-xl mx-auto font-light leading-relaxed"
        >
          I'm actively looking for SWE and AI/ML engineering internships. If you're building ambitious systems or want to talk tech, my inbox is open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href={`mailto:${profile.email}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-primary)] hover:bg-[#6844fc] text-white font-medium text-sm transition-all shadow-[0_0_30px_rgba(124,92,255,0.4)] hover:scale-105"
          >
            <FiMail size={16} /> Email me
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full glass hover:bg-white/15 text-white transition-all text-sm border border-white/10"
          >
            <FiLinkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full glass hover:bg-white/15 text-white transition-all text-sm border border-white/10"
          >
            <FiGithub size={16} /> GitHub
          </a>
        </motion.div>
      </div>

      <footer className="mt-32 text-center text-xs text-[var(--color-text-dim)] font-mono-sub">
        © {new Date().getFullYear()} {profile.name}. Designed & Built with React, Three.js & Framer Motion.
      </footer>
    </section>
  );
}
