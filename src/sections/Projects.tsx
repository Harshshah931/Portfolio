import { motion } from 'framer-motion';
import { projects } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative py-32 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] font-mono-sub text-[var(--color-accent)] mb-4 font-semibold"
          >
            02 / Work & Case Studies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Selected <span className="gradient-text">projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-[var(--color-text-dim)] font-light mt-3 max-w-xl"
          >
            Click on any project card to open its full case study, technical highlights, and source code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
