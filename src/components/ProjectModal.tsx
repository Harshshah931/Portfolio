import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/content';
import { FiX, FiGithub, FiArrowUpRight, FiCheckCircle, FiCode, FiTerminal } from 'react-icons/fi';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Trap body scroll and listen for Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[88vh] flex flex-col rounded-3xl bg-[#090914] border border-[var(--color-primary)]/30 shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 glass-card text-left overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Modal Header (Fixed Top) */}
            <div className="flex-shrink-0 flex items-center justify-between p-5 sm:px-7 border-b border-white/10 bg-[#090914]/95 backdrop-blur-xl z-20">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] font-mono-sub text-[var(--color-accent)] font-semibold">
                  {project.featured ? 'Featured Case Study' : 'Project Overview'}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all hover:rotate-90 duration-300"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Modal Scrollable Content Body */}
            <div data-lenis-prevent className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7 md:p-8 space-y-6">
              {/* Title & Short Description */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2.5 gradient-text">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-[var(--color-text-dim)] font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Clean Gradient Block / Project Visual Frame (No stock photos) */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#070710]">
                {/* Simulated App Chrome Top Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[11px] font-mono text-[var(--color-text-dim)] bg-black/40 px-3 py-0.5 rounded-full border border-white/5">
                    {project.link ? new URL(project.link).hostname : `${project.title.toLowerCase().replace(/\s+/g, '-')}.local`}
                  </div>
                  <div className="w-8" />
                </div>

                {/* Styled Gradient Preview Area */}
                <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-gradient-to-br from-[#120f26] via-[#090d1a] to-[#050912] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 shadow-[0_0_25px_rgba(124,92,255,0.25)]">
                    <FiTerminal className="text-2xl text-[var(--color-accent)]" />
                  </div>
                  <h4 className="font-display text-lg sm:text-xl text-white font-bold mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-dim)] font-mono-sub">
                    GitHub Repository &middot; {project.tags.slice(0, 3).join(' &middot; ')}
                  </p>
                </div>
              </div>

              {/* Full Detailed Description */}
              {project.longDescription && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-[var(--color-primary-soft)] text-xs font-semibold tracking-wider uppercase font-mono-sub">
                    <FiCode size={14} />
                    <span>Architecture & Implementation</span>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed font-light">
                    {project.longDescription}
                  </p>
                </div>
              )}

              {/* Key Features Bullet List */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[var(--color-accent)] text-xs font-semibold tracking-wider uppercase font-mono-sub">
                    <FiCheckCircle size={14} />
                    <span>Key Engineering Highlights</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0 shadow-[0_0_6px_var(--color-accent)]" />
                        <span className="text-xs sm:text-sm text-[var(--color-text-dim)] leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="space-y-2.5 pt-1">
                <p className="text-xs uppercase tracking-[0.2em] font-mono-sub text-[var(--color-text-dim)] font-medium">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-[var(--color-accent)] border border-white/5 font-mono-sub"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions (Fixed Bottom) */}
            <div className="flex-shrink-0 flex flex-wrap items-center justify-between gap-3 p-5 sm:px-7 border-t border-white/10 bg-[#090914]/95 backdrop-blur-xl z-20">
              <div className="flex items-center gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-primary)] hover:bg-[#6942fd] text-white text-xs sm:text-sm font-medium transition-all shadow-[0_0_20px_rgba(124,92,255,0.4)] hover:scale-105"
                  >
                    <span>Visit Live Site</span>
                    <FiArrowUpRight size={15} />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-white/15 text-white text-xs sm:text-sm font-medium transition-all border border-white/10"
                  >
                    <FiGithub size={15} />
                    <span>View GitHub Repo</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs uppercase tracking-[0.2em] font-mono-sub text-[var(--color-text-dim)] hover:text-white transition-colors px-3 py-2"
              >
                Close (Esc)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
