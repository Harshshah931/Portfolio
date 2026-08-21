import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Suspense, lazy, useState, useRef } from 'react';
import { profile } from '../data/content';
import profileImg from '../assets/profile.png';
import { FiArrowDown, FiGithub, FiLinkedin, FiArrowUpRight, FiMail } from 'react-icons/fi';

const HeroScene = lazy(() => import('../three/HeroScene'));

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 12, y: -y * 12 });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-6 sm:px-12 lg:px-20 pt-28 pb-12"
    >
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-[var(--color-primary)]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[26rem] h-[26rem] bg-[var(--color-accent)]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_95%)] opacity-70" />

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 my-auto">

        {/* LEFT COLUMN: Main Headline, Bio & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-left"
        >
          {/* Status Pill Badge */}
          <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-[var(--color-primary)]/30 mb-6 glow-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-text)] font-medium font-mono-sub">
              {profile.location} · Available for internships
            </span>
          </motion.div>

          {/* Grand Cinematic Headline */}
          <motion.div variants={fadeUpVariants} className="mb-6 select-none">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold leading-[1.02] tracking-tight glow-text">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f1f5f9] to-[#cbd5e1]">
                CRAFTING
              </span>
              <span className="block gradient-text">
                INTELLIGENT
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#e0e7ff] via-[var(--color-primary-soft)] to-[var(--color-accent)]">
                SYSTEMS.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle / Bio */}
          <motion.p
            variants={fadeUpVariants}
            className="text-base sm:text-lg md:text-xl text-[var(--color-text-dim)] max-w-xl mb-8 leading-relaxed font-light"
          >
            Hi, I'm <span className="text-white font-medium">{profile.name}</span> — {profile.role}. {profile.tagline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <a
<button
  type="button"
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-primary)] hover:bg-[#6844fc] text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(124,92,255,0.35)] hover:shadow-[0_0_40px_rgba(124,92,255,0.55)] hover:scale-[1.03] group overflow-hidden laser-sweep cursor-pointer"
>
  <span>Explore My Work</span>
  <FiArrowUpRight className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={16} />
</button>

            <a
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass hover:bg-white/10 text-sm font-medium transition-all duration-300 border border-white/10 hover:border-white/20 text-white"
            >
              <FiMail size={15} />
              <span>Email Me</span>
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full glass hover:bg-white/15 hover:scale-105 transition-all text-[var(--color-text)]"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full glass hover:bg-white/15 hover:scale-105 transition-all text-[var(--color-text)]"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Styled Real Photo Frame & Holographic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-auto flex justify-center lg:justify-end z-20"
        >
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="relative p-3.5 sm:p-4 rounded-3xl glass-card border border-[var(--color-primary)]/30 shadow-[0_25px_70px_rgba(0,0,0,0.85)] max-w-sm sm:max-w-[340px] w-full group cursor-pointer"
          >
            {/* Cyber Corner Accent Brackets */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[var(--color-accent)] rounded-tl-xl transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[var(--color-primary)] rounded-tr-xl transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[var(--color-primary)] rounded-bl-xl transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[var(--color-accent)] rounded-br-xl transition-transform duration-300 group-hover:scale-110" />

            {/* Glowing Accent Glow Ring on Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)]/25 to-[var(--color-accent)]/25 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Photo Container */}
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#070710] border border-white/10">
              <img
                src={profileImg}
                alt="Harsh Shah"
                className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-95 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-700 ease-out"
              />

              {/* Bottom Soft Film Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090915] via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Status Overlay Badge on Photo */}
              <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono-sub text-[var(--color-accent)] font-semibold">
                    Harsh Shah
                  </span>
                  <span className="text-[10px] font-mono-sub text-[var(--color-text-dim)]">
                    TCET · 2028
                  </span>
                </div>
                <p className="text-[11px] text-[var(--color-text)] font-light leading-snug">
                  AI/ML Engineer & Systems Developer
                </p>
              </div>
            </div>

            {/* Bottom Statement & Signature */}
            <div className="pt-4 px-1 pb-1 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-mono-sub text-[var(--color-text-dim)]">
                  Code &middot; Intelligence
                </p>
              </div>
              <div className="font-signature text-2xl text-[var(--color-primary-soft)] tracking-wider group-hover:text-white transition-colors duration-300">
                Harsh Shah
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-20 flex flex-col items-center gap-2 text-[var(--color-text-dim)] pt-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono-sub">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={14} className="text-[var(--color-accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
