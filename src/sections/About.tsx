import { motion } from 'framer-motion';
import { profile } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-32 px-6 sm:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] font-mono-sub text-[var(--color-accent)] mb-4 font-semibold"
        >
          01 / About Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight"
        >
          Turning ideas into{' '}
          <span className="gradient-text">working systems</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-[var(--color-text-dim)] leading-relaxed max-w-3xl font-light"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 mt-16"
        >
          {[
            { label: 'Grad Year', value: '2028' },
            { label: 'Focus Area', value: 'AI/ML' },
            { label: 'Projects Built', value: '5+' },
            { label: 'Location', value: 'Mumbai' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-5 text-center laser-sweep">
              <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-[11px] text-[var(--color-text-dim)] mt-1.5 uppercase tracking-widest font-mono-sub font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
