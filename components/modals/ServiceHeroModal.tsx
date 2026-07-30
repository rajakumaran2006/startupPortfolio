'use client';

import React from 'react';
import { X } from 'lucide-react';

export interface ServiceDetail {
  title: string;
  tag: string;
  headline: string;
  description: string;
  subText: string;
}

interface ServiceHeroModalProps {
  isOpen: boolean;
  service: ServiceDetail | null;
  onClose: () => void;
  onOpenDemo: () => void;
}

export default function ServiceHeroModal({
  isOpen,
  service,
  onClose,
  onOpenDemo,
}: ServiceHeroModalProps) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#FF5A60] text-[#1C1D21] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden border border-white/20">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 bg-black/10 hover:bg-black/20 text-[#1C1D21] rounded-full transition-colors cursor-pointer"
          title="Close Modal"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Decorative Geometric Background Pattern (Matches Image 1) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-25 hidden md:block overflow-hidden">
          <svg className="w-full h-full text-white" viewBox="0 0 400 400" fill="currentColor">
            {/* Grid of Triangles, Squares, Circles matching Image 1 */}
            <polygon points="300,40 330,80 270,80" opacity="0.7" />
            <rect x="340" y="100" width="30" height="30" opacity="0.6" />
            <circle cx="280" cy="140" r="16" opacity="0.7" />
            <polygon points="320,180 350,220 290,220" opacity="0.5" />
            <circle cx="360" cy="240" r="20" opacity="0.8" />
            <rect x="260" y="260" width="28" height="28" opacity="0.6" />
            <circle cx="330" cy="320" r="14" opacity="0.7" />
            
            <circle cx="200" cy="60" r="12" opacity="0.6" />
            <rect x="220" y="120" width="24" height="24" opacity="0.5" />
            <polygon points="240,200 270,240 210,240" opacity="0.6" />
            <circle cx="210" cy="300" r="18" opacity="0.7" />
            <polygon points="350,20 380,60 320,60" opacity="0.6" />
          </svg>
        </div>

        {/* Main Content (Matches Image 1 Layout) */}
        <div className="relative z-10 space-y-6 max-w-3xl">
          
          {/* Header Badge */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1C1D21]">
            <span className="text-xs">▲</span>
            <span>{service.tag || service.title}</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium font-display text-[#1C1D21] leading-[1.08] tracking-tight">
            {service.headline}
          </h2>

          {/* Tagline / Subtitle */}
          <p className="text-base sm:text-xl text-[#1C1D21]/80 leading-relaxed font-normal pt-2">
            {service.subText || service.description}
          </p>

          {/* Primary Action Button */}
          <div className="pt-6">
            <button
              onClick={() => {
                onClose();
                onOpenDemo();
              }}
              className="bg-[#1C1D21] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full inline-flex items-center gap-3 transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>SCHEDULE A DEMO</span>
              <span className="text-white text-xs">▶</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
