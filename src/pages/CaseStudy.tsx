import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { projects } from '../data/content';
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from 'react-icons/fi';

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = project?.images ?? [];

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') setActiveImage((i) => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setActiveImage((i) => (i + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxOpen, images.length]);

 useEffect(() => {
  const timer = setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
  return () => clearTimeout(timer);
}, [slug]);

  function handleBack() {
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-[var(--color-text-dim)] mb-4">Project not found.</p>
        <button
          onClick={() => navigate('/')}
          className="text-[var(--color-accent)] hover:underline"
        >
          Back to portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-24">
      <div className="flex items-center justify-between px-6 py-5 sm:px-10 border-b border-white/10">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-[var(--color-text-dim)] hover:text-white transition-colors cursor-pointer"
        >
          <FiArrowLeft size={16} /> Back to projects
        </button>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-primary)] hover:bg-[#6844fc] text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(124,92,255,0.4)]"
          >
            View Live <FiArrowUpRight size={15} />
          </a>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          {images.length > 0 && (
            <>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 mb-3">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 text-[11px] font-mono text-[var(--color-text-dim)]">
                    {project.link ? new URL(project.link).hostname : `${project.slug}.local`}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="relative w-full group cursor-zoom-in"
                  aria-label="Expand image"
                >
                  <img
                    src={images[activeImage]}
                    alt={`${project.title} screenshot ${activeImage + 1}`}
                    className="w-full h-auto max-h-[520px] object-contain bg-black"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                    <FiZoomIn
                      size={28}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                </button>
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage((i) => (i - 1 + images.length) % images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      onClick={() => setActiveImage((i) => (i + 1) % images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white"
                      aria-label="Next image"
                    >
                      <FiChevronRight />
                    </button>
                  </>
                )}
              </div>
              <p className="text-xs text-center text-[var(--color-text-dim)] font-mono-sub mb-4">
                {activeImage + 1} / {images.length}
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(i)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${i === activeImage
                      ? 'border-[var(--color-primary)]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                  >
                    <img src={img} alt="" className="w-full h-16 object-cover" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div>
          {project.tagline && (
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-mono-sub text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full px-3 py-1 mb-5">
              {project.tagline}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-5 gradient-text">
            {project.title}
          </h1>
          <p className="text-base text-[var(--color-text-dim)] leading-relaxed mb-8">
            {project.description}
          </p>

          {project.caseStudy?.map((section) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] font-mono-sub text-[var(--color-primary-soft)] mb-2 font-semibold">
                {section.heading}
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed font-light">
                {section.body}
              </p>
            </motion.div>
          ))}

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-[var(--color-accent)] border border-white/5 font-mono-sub"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-white/15 text-white text-sm font-medium transition-all border border-white/10"
            >
              <FiGithub size={15} /> View GitHub Repo
            </a>
          )}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <FiX size={22} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((i) => (i - 1 + images.length) % images.length);
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                >
                  <FiChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((i) => (i + 1) % images.length);
                  }}
                  aria-label="Next image"
                  className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                >
                  <FiChevronRight size={22} />
                </button>
              </>
            )}

            <motion.img
              key={activeImage}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={images[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1} full view`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/70 font-mono-sub">
              {activeImage + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
