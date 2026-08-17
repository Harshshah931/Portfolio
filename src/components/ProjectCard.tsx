import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import type { Project } from '../data/content';
import { FiArrowUpRight, FiGithub, FiMaximize2 } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: () => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX - rect.width / 2);
    y.set(mouseY - rect.top - rect.height / 2);
    e.currentTarget.style.setProperty('--x', `${mouseX}px`);
    e.currentTarget.style.setProperty('--y', `${mouseY}px`);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    animate(x, 0, { duration: 0.4 });
    animate(y, 0, { duration: 0.4 });
    e.currentTarget.style.removeProperty('--x');
    e.currentTarget.style.removeProperty('--y');
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
      onClick={onSelect}
      className={project.featured ? 'md:col-span-2' : ''}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative glass rounded-3xl p-7 sm:p-8 h-full flex flex-col justify-between group cursor-pointer overflow-hidden border border-white/10 hover:border-[var(--color-primary)]/50 transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
      >
        {/* Dynamic Laser Border Sweep on Hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(500px circle at var(--x,50%) var(--y,50%), rgba(124,92,255,0.18), rgba(34,211,238,0.06), transparent 65%)',
          }}
        />

        {/* Top Info */}
        <div style={{ transform: 'translateZ(25px)' }}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              {project.featured && (
                <span className="inline-block text-[10px] uppercase tracking-[0.25em] font-mono-sub text-[var(--color-accent)] font-semibold mb-1">
                  ★ Featured Project
                </span>
              )}
              <h3 className="font-display text-xl sm:text-2xl font-semibold group-hover:text-[var(--color-primary-soft)] transition-colors">
                {project.title}
              </h3>
            </div>

            {/* External Links */}
            <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors"
                  aria-label="Repository"
                >
                  <FiGithub size={15} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors"
                  aria-label="Live site"
                >
                  <FiArrowUpRight size={15} />
                </a>
              )}
              <button
                type="button"
                onClick={onSelect}
                aria-label="Expand case study"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-primary)]/20 hover:bg-[var(--color-primary)] text-[var(--color-primary-soft)] hover:text-white transition-all group/btn"
              >
                <FiMaximize2 size={13} className="group-hover/btn:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          <p className="text-[var(--color-text-dim)] leading-relaxed mb-6 text-sm sm:text-base font-light">
            {project.description}
          </p>
        </div>

        {/* Bottom Tags & View Case Study Cue */}
        <div style={{ transform: 'translateZ(20px)' }} className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-[var(--color-accent)] border border-white/5 font-mono-sub"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[var(--color-primary-soft)] group-hover:text-white font-mono-sub font-medium transition-colors">
            <span>Case Study</span>
            <FiArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
