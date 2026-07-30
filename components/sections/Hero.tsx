'use client';

import React from 'react';
import { GeometricBackground, TrueFocus, GLSLHills, IdentityFingerprintOrbit } from '@/components/ui';
import { ShieldCheck, Cpu, CheckCircle2, Zap, ArrowRight, Activity, Layers } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenWorkflow: () => void;
}

export default function Hero({ onOpenDemo, onOpenWorkflow }: HeroProps) {

  // Logos directly from Image 2
  const trustLogos = [
    {
      id: 'ally',
      component: (
        <span className="font-extrabold text-2xl tracking-tighter text-[#1C1D21] font-sans">
          ally
        </span>
      ),
    },
    {
      id: 'mtbank',
      component: (
        <div className="font-bold text-xl tracking-tight text-[#1C1D21] flex items-center gap-0.5">
          <span>M&amp;T</span>
          <span className="font-serif font-normal text-lg">Bank</span>
        </div>
      ),
    },
    {
      id: 'ramp',
      component: (
        <div className="flex items-center gap-1.5 font-extrabold text-2xl tracking-tight text-[#1C1D21]">
          <span>ramp</span>
          <svg className="w-5 h-5 text-[#1C1D21] fill-current" viewBox="0 0 24 24">
            <path d="M4 18c8 0 12-8 16-12h-4c-3 3-6 8-12 8v4z"/>
          </svg>
        </div>
      ),
    },
    {
      id: 'shopify',
      component: (
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#1C1D21]">
          <svg className="w-6 h-6 text-[#1C1D21] fill-current" viewBox="0 0 24 24">
            <path d="M19 6.5l-2.5-1.5-1.5 2.5L12 3 9 7.5 7.5 5 5 6.5l.5 12.5h13L19 6.5z"/>
          </svg>
          <span>shopify</span>
        </div>
      ),
    },
    {
      id: 'suncoast',
      component: (
        <div className="flex items-center gap-2 text-[#1C1D21]">
          <div className="w-6 h-6 rounded-full bg-[#1C1D21] flex items-center justify-center p-0.5 shrink-0">
            <div className="w-full h-full rounded-full border-2 border-white bg-[#1C1D21]" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-xs uppercase tracking-tight">Suncoast</span>
            <span className="text-[9px] font-medium text-gray-700">Credit Union</span>
          </div>
        </div>
      ),
    },
    {
      id: 'frost',
      component: (
        <div className="flex items-center gap-2 text-[#1C1D21]">
          <svg className="w-6 h-6 text-[#1C1D21]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"/>
          </svg>
          <span className="font-black text-lg tracking-wider font-serif">Frost</span>
        </div>
      ),
    },
    {
      id: 'liveoak',
      component: (
        <div className="flex items-center gap-1.5 text-[#1C1D21]">
          <svg className="w-5 h-5 text-[#1C1D21] fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2L8 8h3v6H8l4 6 4-6h-3V8h3l-4-6z"/>
          </svg>
          <div className="flex items-baseline text-left leading-none font-bold text-sm">
            <span>LiveOak</span>
            <span className="font-normal">Bank.</span>
          </div>
        </div>
      ),
    },
    {
      id: 'mountain',
      component: (
        <div className="flex items-center gap-1.5 text-[#1C1D21]">
          <svg className="w-6 h-5 text-[#1C1D21] fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2L2 19h20L12 2zm0 4l6 11H6l6-11z"/>
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-[10px] uppercase tracking-tighter">MOUNTAIN AMERICA</span>
            <span className="text-[7.5px] font-bold uppercase tracking-widest text-gray-700">CREDIT UNION</span>
          </div>
        </div>
      ),
    },
    {
      id: 'grasshopper',
      component: (
        <div className="flex items-center gap-1.5 text-[#1C1D21]">
          <svg className="w-6 h-4 text-[#1C1D21]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M2 18C8 18 14 6 22 4M6 20c6 0 12-8 16-12"/>
          </svg>
          <span className="font-semibold text-base italic tracking-tight">Grasshopper</span>
        </div>
      ),
    },
  ];

  return (
    <section className="relative bg-[#F5F4F0] pt-4 pb-0 lg:pt-7 lg:pb-0 overflow-hidden border-b border-[#E2E0D8]">
      {/* Background 3D GLSL Hills Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
        <GLSLHills width="100%" height="100%" cameraZ={125} planeSize={256} speed={0.5} />
      </div>

      {/* Background Geometric Grid of Circles, Triangles and Squares */}
      <GeometricBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* Centered Hero Copy */}
          <div className="lg:col-span-12 max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
            
            {/* Title Eyebrow / Description with TrueFocus animation */}
            <div className="text-center font-display w-full flex justify-center">
              <TrueFocus
                sentence="SOFTWARE HARDWARE & DIGITAL MARKETING SOLUTIONS"
                borderColor="#FF5A60"
                glowColor="rgba(255, 90, 96, 0.6)"
                blurAmount={1.5}
                animationDuration={0.4}
                pauseBetweenAnimations={1.0}
              />
            </div>

            <p className="text-lg sm:text-xl text-[#626570] font-normal leading-relaxed max-w-2xl text-center">
              Team Monsrow is an end-to-end technology solutions company empowering businesses with custom software development, IoT hardware systems, AI automation, cloud architecture, and data-driven digital marketing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full flex items-center gap-2 transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>SCHEDULE A DEMO</span>
                <span className="text-[#FF5A60] group-hover:text-white transition-colors">▶</span>
              </button>

              <button
                onClick={onOpenWorkflow}
                className="bg-[#FF5A60] hover:bg-[#E0484E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full flex items-center gap-2 transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>SEE HOW IT WORKS</span>
                <span className="text-white">▶</span>
              </button>
            </div>

            {/* Micro Badge / Stat Indicator */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span>99.99% Engine Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1C1D21] font-bold">270+</span>
                <span>Pre-integrated Data Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1C1D21] font-bold">&lt; 100ms</span>
                <span>Decision Latency</span>
              </div>
            </div>

          </div>

        </div>

        {/* Continuous Marquee Trust Bar Carousel - Exact 40px top and bottom spacing */}
        <div className="mt-[40px] pt-[40px] pb-[40px] border-t border-[#E2E0D8] overflow-hidden relative">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#626570] mb-4">
            Built on industry trust from 900+ clients
          </p>

          {/* Marquee Carousel Container */}
          <div className="w-full overflow-hidden py-2 relative">
            {/* Gradient fade edges for seamless carousel feel */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F5F4F0] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F5F4F0] to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee flex items-center gap-12 sm:gap-16">
              {/* First loop of items */}
              {trustLogos.map((logo, idx) => (
                <div
                  key={`logo-1-${logo.id}-${idx}`}
                  className="shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200 transform hover:scale-105 cursor-pointer px-2"
                >
                  {logo.component}
                </div>
              ))}
              {/* Duplicate loop of items for infinite seamless scroll */}
              {trustLogos.map((logo, idx) => (
                <div
                  key={`logo-2-${logo.id}-${idx}`}
                  className="shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200 transform hover:scale-105 cursor-pointer px-2"
                >
                  {logo.component}
                </div>
              ))}
              {/* Triplicate loop to ensure seamless wide-screen scroll */}
              {trustLogos.map((logo, idx) => (
                <div
                  key={`logo-3-${logo.id}-${idx}`}
                  className="shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200 transform hover:scale-105 cursor-pointer px-2"
                >
                  {logo.component}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
