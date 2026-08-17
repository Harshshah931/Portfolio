import { motion } from 'framer-motion';
import { skills } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-32 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] font-mono-sub text-[var(--color-accent)] mb-4 font-semibold"
        >
          03 / Skills & Toolkit
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-16"
        >
          Skills & <span className="gradient-text">technologies</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <h3 className="font-display font-semibold text-lg text-[var(--color-primary-soft)] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono-sub px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-[var(--color-text)] hover:text-white transition-colors border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
