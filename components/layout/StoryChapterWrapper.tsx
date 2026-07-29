'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { soundFX } from '@/lib/audioFX';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface StoryChapterWrapperProps {
  actNumber: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function StoryChapterWrapper({
  actNumber,
  title,
  subtitle,
  children,
  id,
  className = '',
}: StoryChapterWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.15, once: false });
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (isInView && !hasTriggeredRef.current) {
      soundFX.playHover();
      hasTriggeredRef.current = true;
    } else if (!isInView && hasTriggeredRef.current) {
      hasTriggeredRef.current = false;
    }
  }, [isInView]);

  return (
    <section id={id} ref={ref} className={`relative py-12 lg:py-20 ${className}`}>
      {/* Narrative Story Line Indicator on Desktop */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Story Chapter Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E0D8]/80 pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-[#1C1D21] text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3 h-3 text-[#FF5A60] animate-pulse" />
              {actNumber}
            </span>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1C1D21]/80 font-mono">
              {title}
            </h2>
          </div>

          {subtitle && (
            <p className="text-xs text-gray-500 font-medium italic hidden md:block">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Chapter Content with Smooth Stagger Storytelling Scroll Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 35 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
