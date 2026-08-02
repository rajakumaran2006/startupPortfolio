'use client';

import React from 'react';

interface AboutHeroProps {
  eyebrow?: string;
  title?: string;
}

export default function AboutHero({
  eyebrow = 'OUR MISSION',
  title = 'Team Monsrow empowers global enterprises with AI-driven custom software, cloud platforms, and digital engineering',
}: AboutHeroProps) {
  return (
    <section className="pt-4 sm:pt-6 lg:pt-8 pb-10 lg:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Side: White Mission Card */}
        <div className="bg-white rounded-3xl sm:rounded-[28px] p-8 sm:p-12 lg:p-14 border border-[#E2E0D8] shadow-xs flex flex-col justify-start min-h-[380px] sm:min-h-[440px] transition-all">
          <div className="space-y-8 sm:space-y-10">
            <span className="inline-block text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#1C1D21]">
              {eyebrow}
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1C1D21] leading-[1.18] tracking-tight font-sans">
              {title}
            </h1>
          </div>
        </div>

        {/* Right Side: Geometric Color Quadrant & Concentric Squares Graphic */}
        <div className="relative bg-[#FF586B] rounded-3xl sm:rounded-[28px] border border-[#E2E0D8] shadow-xs overflow-hidden flex flex-col min-h-[380px] sm:min-h-[440px]">
          
          {/* Main 4-Quadrant Color Grid */}
          <div className="flex-1 grid grid-cols-2 relative">
            
            {/* Top-Left Quadrant: Light Pink */}
            <div className="bg-[#F898AC] border-r border-b border-black/15" />

            {/* Top-Right Quadrant: Coral Red (Background for top of concentric squares) */}
            <div className="bg-[#FF586B] border-b border-black/15" />

            {/* Bottom-Left Quadrant: Coral Red */}
            <div className="bg-[#FF586B] border-r border-black/15" />

            {/* Bottom-Right Quadrant: Deep Plum */}
            <div className="bg-[#7D1959]" />

            {/* Concentric Squares Overlay (Centered over the right column) */}
            <div className="absolute top-0 bottom-0 right-0 w-1/2 flex items-center justify-center p-3 sm:p-6 pointer-events-none z-10">
              <svg 
                className="w-full h-full max-w-[340px] max-h-[340px] text-[#1C1D21]" 
                viewBox="0 0 320 320" 
                fill="none"
              >
                {/* 8 Concentric Squares with crisp stroke */}
                <rect x="10" y="10" width="300" height="300" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <rect x="32" y="32" width="256" height="256" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <rect x="54" y="54" width="212" height="212" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <rect x="76" y="76" width="168" height="168" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <rect x="98" y="98" width="124" height="124" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <rect x="120" y="120" width="80" height="80" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <rect x="142" y="142" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <rect x="153" y="153" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.75" />
              </svg>
            </div>
          </div>

          {/* Bottom Dark Purple Horizontal Stripe */}
          <div className="h-7 sm:h-9 bg-[#690F49] w-full relative flex items-center justify-end px-3 sm:px-4 shrink-0">
            {/* Cookie / Preferences Icon Badge */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shadow-md flex items-center justify-center p-1 cursor-pointer hover:scale-105 transition-transform z-20">
              <svg className="w-3.5 h-3.5 text-[#690F49]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10 3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 12 2zm-3 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-2 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
