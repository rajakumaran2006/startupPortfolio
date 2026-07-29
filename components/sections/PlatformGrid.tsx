'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui';

interface PlatformGridProps {
  onOpenWorkflow: () => void;
}

export default function PlatformGrid({ onOpenWorkflow }: PlatformGridProps) {
  const platformCards = [
    {
      number: '01',
      title: 'Open data ecosystem',
      description: "Access 270+ partner solutions. Team Monsrow's vendor-neutral approach lets you integrate best-in-class providers, compare performance, and swap solutions as needed.",
      cta: 'EXPLORE DATA PARTNERS',
      icon: (
        <svg className="w-14 h-14 text-[#1C1D21]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          {/* Orbital Atom Geometry */}
          <circle cx="50" cy="50" r="10" stroke="currentColor" />
          <ellipse cx="50" cy="50" rx="35" ry="14" stroke="currentColor" />
          <ellipse cx="50" cy="50" rx="35" ry="14" stroke="currentColor" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="35" ry="14" stroke="currentColor" transform="rotate(120 50 50)" />
        </svg>
      ),
      bgColor: 'bg-[#F8BAC0]',
      textColor: 'text-[#1C1D21]',
      btnBg: 'bg-transparent border border-[#1C1D21] text-[#1C1D21] hover:bg-[#1C1D21] hover:text-white',
    },
    {
      number: '02',
      title: 'Orchestration engine',
      description: "Team Monsrow's orchestration layer sits between the data ecosystem and intelligence layer, routing inputs, sequencing vendor calls, and managing dependencies across every workflow.",
      cta: 'EXPLORE DATA ORCHESTRATION',
      icon: (
        <svg className="w-14 h-14 text-[#1C1D21]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          {/* Orchestration Network Cluster */}
          <circle cx="50" cy="50" r="14" stroke="currentColor" />
          <circle cx="50" cy="18" r="6" stroke="currentColor" />
          <circle cx="82" cy="50" r="6" stroke="currentColor" />
          <circle cx="50" cy="82" r="6" stroke="currentColor" />
          <circle cx="18" cy="50" r="6" stroke="currentColor" />
          <line x1="50" y1="36" x2="50" y2="24" stroke="currentColor" />
          <line x1="64" y1="50" x2="76" y2="50" stroke="currentColor" />
          <line x1="50" y1="64" x2="50" y2="76" stroke="currentColor" />
          <line x1="36" y1="50" x2="24" y2="50" stroke="currentColor" />
        </svg>
      ),
      bgColor: 'bg-[#FF5A60]',
      textColor: 'text-[#1C1D21]',
      btnBg: 'bg-transparent border border-[#1C1D21] text-[#1C1D21] hover:bg-[#1C1D21] hover:text-white',
    },
    {
      number: '03',
      title: 'Actionable AI',
      description: "Team Monsrow's Actionable AI suite combines predictive machine learning and agentic AI to help your team spend time on what matters most. Every step is logged, explainable, and tied to your policies.",
      cta: 'EXPLORE ACTIONABLE AI',
      icon: (
        <svg className="w-14 h-14 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          {/* AI Profile Head & Circuits */}
          <path d="M 40 20 C 65 20, 75 35, 75 50 C 75 62, 68 70, 68 80 L 32 80 C 32 70, 25 62, 25 50 C 25 35, 35 20, 40 20 Z" />
          <circle cx="50" cy="42" r="4" fill="currentColor" />
          <line x1="50" y1="46" x2="50" y2="60" stroke="currentColor" />
          <line x1="50" y1="52" x2="62" y2="52" stroke="currentColor" />
          <circle cx="64" cy="52" r="2.5" fill="currentColor" />
        </svg>
      ),
      bgColor: 'bg-[#A31661]',
      textColor: 'text-white',
      btnBg: 'bg-transparent border border-white text-white hover:bg-white hover:text-[#A31661]',
    }
  ];

  return (
    <section id="platform" className="bg-[#F5F4F0] py-16 lg:py-24 border-b border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Image 3 */}
        <div className="mb-12 space-y-3 max-w-3xl">
          <div className="flex items-center gap-1.5 text-[#FF5A60] font-bold text-xs uppercase tracking-widest">
            <span className="text-[10px]">▲</span>
            <span>PLATFORM</span>
          </div>
          <ScrollReveal
            baseOpacity={0.35}
            enableBlur={true}
            baseRotation={2}
            blurStrength={3}
            start="top 90%"
            rotationEnd="top 60%"
            wordAnimationEnd="top 50%"
            textClassName="text-3xl sm:text-5xl font-normal text-[#1C1D21] font-display tracking-tight leading-[1.08]"
          >
            End-to-end risk management starts here
          </ScrollReveal>
          <p className="text-sm sm:text-base text-[#4A4D57] leading-relaxed">
            Team Monsrow&apos;s open data ecosystem, orchestration engine, and Actionable AI form a unified platform that gets smarter with every signal and every decision.
          </p>
        </div>

        {/* 3 Pillar Cards (Image 3 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platformCards.map((card, idx) => (
            <div
              key={idx}
              className={`${card.bgColor} ${card.textColor} rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 min-h-[440px] border border-black/5 relative overflow-hidden`}
            >
              {/* Top Row with Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold tracking-widest opacity-60">
                    {card.number}
                  </span>
                  <div>
                    {card.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-normal font-display mb-4">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm opacity-90 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-6">
                <button
                  onClick={onOpenWorkflow}
                  className={`${card.btnBg} text-[10px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer`}
                >
                  <span>{card.cta}</span>
                  <span className="text-xs">▶</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

