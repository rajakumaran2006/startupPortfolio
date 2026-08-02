'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { GeometricBackground, TrueFocus, GLSLHills, IdentityFingerprintOrbit } from '@/components/ui';
import { ShieldCheck, Cpu, CheckCircle2, Zap, ArrowRight, Activity, Layers } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenWorkflow: () => void;
}

export default function Hero({ onOpenDemo, onOpenWorkflow }: HeroProps) {
  const router = useRouter();

  // Client logos matching the About Us client section (TrustedProviders)
  const trustLogos = [
    {
      id: 'destylus',
      component: (
        <span className="font-black text-xl tracking-tight text-[#1C1D21] font-sans">
          destylus<span className="text-[#FF5A60]">.</span>
        </span>
      ),
    },
    {
      id: 'hamilton',
      component: (
        <div className="flex flex-col text-left leading-none text-[#1C1D21]">
          <span className="font-extrabold text-sm tracking-tight">Hamilton</span>
          <span className="text-[9px] uppercase font-bold tracking-wider text-gray-500">Learning Academy</span>
        </div>
      ),
    },
    {
      id: 'venus',
      component: (
        <div className="flex items-center gap-2 text-[#1C1D21]">
          <svg className="w-4 h-4 text-[#1C1D21]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8" opacity="0.3" />
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
          </svg>
          <span className="text-lg font-bold tracking-tight">Venus School</span>
        </div>
      ),
    },
    {
      id: 'monsrow',
      component: (
        <span className="text-2xl font-black tracking-tight text-[#1C1D21] font-display">
          monsrow
        </span>
      ),
    },
    {
      id: 'auratech',
      component: (
        <span className="text-xl font-black tracking-tight text-[#1C1D21]">
          aura tech
        </span>
      ),
    },
    {
      id: 'zenith',
      component: (
        <span className="text-base font-extrabold text-[#1C1D21] tracking-wider uppercase font-mono">
          ZENITH
        </span>
      ),
    },
    {
      id: 'apex',
      component: (
        <div className="flex items-center gap-2 text-[#1C1D21]">
          <div className="w-5 h-5 rounded-full border-2 border-[#1C1D21] flex items-center justify-center font-black text-[10px] text-[#1C1D21]">
            A
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-base font-black">Apex</span>
            <span className="text-[8px] uppercase tracking-tighter font-semibold text-gray-600">Global Tech</span>
          </div>
        </div>
      ),
    },
    {
      id: 'novacore',
      component: (
        <span className="text-base font-extrabold text-[#1C1D21] tracking-tight">
          Nova Core
        </span>
      ),
    },
    {
      id: 'nexus',
      component: (
        <span className="text-xl font-black text-[#1C1D21] tracking-tight">
          Nexus
        </span>
      ),
    },
    {
      id: 'orion',
      component: (
        <div className="flex flex-col text-center leading-none text-[#1C1D21]">
          <span className="text-lg font-extrabold">Orion</span>
          <span className="text-[8px] uppercase tracking-tighter font-medium text-gray-500 mt-0.5">Systems</span>
        </div>
      ),
    },
    {
      id: 'hyperion',
      component: (
        <span className="text-base font-black tracking-wider text-[#1C1D21]">
          HYPERION
        </span>
      ),
    },
    {
      id: 'crestview',
      component: (
        <span className="text-lg font-black text-[#1C1D21] tracking-tight">
          Crestview
        </span>
      ),
    },
    {
      id: 'beacon',
      component: (
        <div className="flex flex-col text-center leading-tight text-[#1C1D21]">
          <span className="text-xs font-black uppercase tracking-wider">BEACON</span>
          <span className="text-[7px] font-bold uppercase tracking-widest text-gray-500">International</span>
        </div>
      ),
    },
    {
      id: 'starlight',
      component: (
        <span className="text-base font-extrabold text-[#1C1D21] tracking-tight">
          Starlight
        </span>
      ),
    },
    {
      id: 'pulse',
      component: (
        <span className="text-lg font-black text-[#1C1D21] tracking-tight">
          Pulse
        </span>
      ),
    },
    {
      id: 'velox',
      component: (
        <div className="flex flex-col text-left leading-none text-[#1C1D21]">
          <span className="text-[10px] font-black uppercase tracking-tighter">VELOX TECH</span>
          <span className="text-[7px] font-semibold uppercase tracking-tighter text-gray-500">SOLUTIONS</span>
        </div>
      ),
    },
    {
      id: 'quantummind',
      component: (
        <div className="flex flex-col text-left leading-none text-[#1C1D21]">
          <span className="text-xs font-extrabold">Quantum</span>
          <span className="text-[7px] uppercase tracking-tighter text-gray-500">Mind AI</span>
        </div>
      ),
    },
    {
      id: 'vanguard',
      component: (
        <span className="text-base font-black text-[#1C1D21] tracking-widest uppercase">
          VANGUARD
        </span>
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
                sentence="AI-POWERED ENTERPRISE SOFTWARE PLATFORM"
                borderColor="#FF5A60"
                glowColor="rgba(255, 90, 96, 0.6)"
                blurAmount={1.5}
                animationDuration={0.4}
                pauseBetweenAnimations={1.0}
              />
            </div>

            <p className="text-lg sm:text-xl text-[#626570] font-normal leading-relaxed max-w-2xl text-center">
              Team Monsrow is an AI-powered enterprise software company empowering businesses with real-time decisioning engines, automated onboarding, fraud prevention intelligence, and seamless cloud data orchestration.
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
                onClick={() => router.push('/about')}
                className="bg-[#FF5A60] hover:bg-[#E0484E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full flex items-center gap-2 transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>LEARN MORE</span>
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
      </div>

      {/* Continuous Marquee Trust Bar Carousel - Full Screen Corner to Corner */}
      <div className="w-full mt-[40px] pt-[40px] pb-[40px] border-t border-[#E2E0D8] overflow-hidden relative">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[#626570] mb-4">
          Built on industry trust from 50+ clients
        </p>

        {/* Marquee Carousel Container */}
        <div className="w-full overflow-hidden py-2 relative">
          {/* Gradient fade edges for seamless carousel feel matching Hero background */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#F5F4F0] via-[#F5F4F0]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#F5F4F0] via-[#F5F4F0]/80 to-transparent z-10 pointer-events-none" />
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
    </section>
  );
}
