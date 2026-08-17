import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { achievements } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiAward, FiArrowUpRight, FiCalendar } from 'react-icons/fi';

export default function Achievements() {
  const { ref: headerRef, visible } = useScrollReveal<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 85%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="relative py-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] font-mono-sub text-[var(--color-accent)] mb-4 font-semibold"
          >
            04 / Recognition & Milestones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Honors & <span className="gradient-text">achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-[var(--color-text-dim)] font-light mt-3 max-w-xl"
          >
            Key highlights, competitive programming milestones, and technical recognitions.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Background Track Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-8 w-[2px] -translate-x-1/2 bg-white/10" />

          {/* Animated Glowing Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary-soft)] shadow-[0_0_12px_var(--color-accent)] origin-top pointer-events-none"
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {achievements.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.title + idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="absolute w-8 h-8 rounded-full border border-[var(--color-primary)]/0 group-hover:border-[var(--color-accent)]/50 group-hover:scale-125 transition-all duration-500 ease-out" />
                    <div className="w-4 h-4 rounded-full bg-[#0b0b16] border-2 border-[var(--color-primary)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] shadow-[0_0_12px_rgba(124,92,255,0.8)] group-hover:shadow-[0_0_16px_var(--color-accent)] transition-all duration-300 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-10 w-full">
                    <div className="relative glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group/card laser-sweep">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono-sub font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary-soft)] border border-[var(--color-primary)]/30">
                            <FiAward size={12} />
                            {item.category || 'Achievement'}
                          </span>
                          {item.highlight && (
                            <span className="text-[10px] font-mono-sub px-2 py-0.5 rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 font-medium">
                              {item.highlight}
                            </span>
                          )}
                        </div>

                        {item.date && (
                          <div className="flex items-center gap-1 text-xs text-[var(--color-text-dim)] font-mono-sub">
                            <FiCalendar size={12} className="text-[var(--color-accent)]" />
                            <span>{item.date}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover/card:text-[var(--color-accent-soft)] transition-colors mb-2 leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[var(--color-text-dim)] leading-relaxed font-light mb-4">
                        {item.description}
                      </p>

                      {/* Verification Link (if any) */}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono-sub text-[var(--color-primary-soft)] hover:text-white transition-colors group/link font-medium"
                        >
                          <span>View details / credential</span>
                          <FiArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Empty side spacer for desktop layout balance */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
