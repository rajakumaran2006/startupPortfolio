'use client';

import React from 'react';

interface WallOfTrustProps {
  onOpenDemo: () => void;
  onOpenWorkflow: () => void;
}

interface CardItem {
  id: number;
  type: 'metric' | 'quote' | 'award';
  bgColor: string;
  textColor: string;
  logo?: string;
  logoSub?: string;
  stat?: string;
  statLabel?: string;
  quote?: string;
  author?: string;
  role?: string;
  title?: string;
  awardBadge?: React.ReactNode;
  btnBg?: string;
  btnText?: string;
}

export default function WallOfTrust({ onOpenDemo, onOpenWorkflow }: WallOfTrustProps) {
  const [isPaused, setIsPaused] = React.useState(false);

  const row1Cards: CardItem[] = [
    {
      id: 1,
      type: 'metric',
      bgColor: 'bg-[#FF5A60]',
      textColor: 'text-[#1C1D21]',
      logo: 'LAUNCH',
      logoSub: 'CREDIT UNION',
      stat: '3x',
      statLabel: 'Digital account opening growth',
      btnBg: 'bg-[#1C1D21] text-white hover:bg-black',
      btnText: 'READ CASE STUDY ▶'
    },
    {
      id: 2,
      type: 'quote',
      bgColor: 'bg-[#F8BAC0]',
      textColor: 'text-[#1C1D21]',
      logo: 'Meridian',
      quote: "Team Monsrow's ability to connect to hundreds of data sources allows us to...create the positive Member experience we strive to deliver while minimizing risk.",
      author: 'Matthew Seagrim',
      role: 'Chief Digital and Marketing Officer'
    },
    {
      id: 3,
      type: 'metric',
      bgColor: 'bg-[#A31661]',
      textColor: 'text-white',
      logo: 'incrediblebank',
      stat: '88%',
      statLabel: 'Reduction in application review time',
      btnBg: 'bg-[#F8BAC0] text-[#1C1D21] hover:bg-white',
      btnText: 'READ CASE STUDY ▶'
    },
    {
      id: 4,
      type: 'award',
      bgColor: 'bg-[#EAE8E3]',
      textColor: 'text-[#1C1D21]',
      title: 'Deloitte Technology Fast 500 2025',
      awardBadge: (
        <div className="flex flex-col items-center justify-center my-4">
          <div className="w-28 h-28 rounded-xl bg-white border border-gray-200 p-3 flex flex-col items-center justify-center text-center shadow-xs">
            <span className="text-2xl font-black text-emerald-600 tracking-tighter font-display leading-none">500</span>
            <span className="text-[9px] font-bold text-gray-700 tracking-tight mt-1">Technology Fast 500</span>
            <span className="text-[8px] text-gray-500 font-mono">2025 NORTH AMERICA</span>
            <span className="text-[10px] font-bold text-black mt-0.5">Deloitte.</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      type: 'metric',
      bgColor: 'bg-[#A31661]',
      textColor: 'text-white',
      logo: 'novo',
      stat: '2x',
      statLabel: 'Increase in customer conversions',
      btnBg: 'bg-[#F8BAC0] text-[#1C1D21] hover:bg-white',
      btnText: 'READ CASE STUDY ▶'
    }
  ];

  const row2Cards: CardItem[] = [
    {
      id: 6,
      type: 'quote',
      bgColor: 'bg-[#EAE8E3]',
      textColor: 'text-[#1C1D21]',
      logo: 'incrediblebank',
      quote: "Team Monsrow's automation capabilities drastically increases our scalability.",
      author: 'Phil Suckow',
      role: 'VP of Innovation',
      btnBg: 'bg-[#1C1D21] text-white hover:bg-black',
      btnText: 'READ CASE STUDY ▶'
    },
    {
      id: 7,
      type: 'metric',
      bgColor: 'bg-[#EAE8E3]',
      textColor: 'text-[#1C1D21]',
      logo: 'skyla',
      logoSub: 'CREDIT UNION',
      stat: '74%',
      statLabel: 'Reduction in fraud losses',
      btnBg: 'bg-[#1C1D21] text-white hover:bg-black',
      btnText: 'READ CASE STUDY ▶'
    },
    {
      id: 8,
      type: 'quote',
      bgColor: 'bg-[#F8BAC0]',
      textColor: 'text-[#1C1D21]',
      logo: 'LAUNCH',
      logoSub: 'CREDIT UNION',
      quote: "Team Monsrow's AI-powered Fraud Attack Radar enables us to act quickly before any loss is incurred.",
      author: 'Angie Crosby',
      role: 'VP of PMO',
      btnBg: 'bg-[#1C1D21] text-white hover:bg-black',
      btnText: 'READ CASE STUDY ▶'
    },
    {
      id: 9,
      type: 'quote',
      bgColor: 'bg-[#A31661]',
      textColor: 'text-white',
      logo: 'LiveOakBank',
      quote: "Not only does Team Monsrow help us make more informed decisions, it's also faster. Our partnership with Team Monsrow has ensured that our time is spent actually running our business instead of triaging issues, and you can't understate the value of that.",
      author: 'Joe Thompson',
      role: 'Head of Live Oak Express',
      btnBg: 'bg-[#F8BAC0] text-[#1C1D21] hover:bg-white',
      btnText: 'READ CASE STUDY ▶'
    },
    {
      id: 10,
      type: 'award',
      bgColor: 'bg-[#EAE8E3]',
      textColor: 'text-[#1C1D21]',
      title: "CNBC World's Top Fintech Companies 2025",
      awardBadge: (
        <div className="flex flex-col items-center justify-center my-4">
          <div className="w-32 h-24 rounded-lg bg-[#282C35] text-white p-3 flex flex-col items-center justify-center text-center shadow-md relative overflow-hidden border border-amber-500/40">
            <span className="text-[10px] font-bold text-amber-400 tracking-wider">CNBC</span>
            <span className="text-[11px] font-extrabold uppercase leading-tight tracking-tight my-1 text-white">
              WORLD&apos;S TOP FINTECH
            </span>
            <span className="text-[9px] text-amber-300 font-mono">COMPANIES 2025</span>
            <span className="text-[7px] text-gray-400 mt-1">statista</span>
          </div>
        </div>
      )
    }
  ];

  // Triplicate cards for smooth infinite loop
  const row1Loop = [...row1Cards, ...row1Cards, ...row1Cards];
  const row2Loop = [...row2Cards, ...row2Cards, ...row2Cards];

  const renderCard = (card: CardItem, idx: number) => (
    <div
      key={`${card.id}-${idx}`}
      className={`w-[280px] sm:w-[320px] h-[370px] sm:h-[390px] ${card.bgColor} ${card.textColor} rounded-2xl p-6 flex flex-col justify-between shrink-0 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-black/5 select-none`}
    >
      <div>
        {/* Logo */}
        {card.logo && (
          <div className="flex items-center gap-1.5 mb-4">
            <span className="font-extrabold text-base tracking-tight font-display">
              {card.logo}
            </span>
            {card.logoSub && (
              <span className="text-[8px] uppercase tracking-widest opacity-60 font-mono">
                {card.logoSub}
              </span>
            )}
          </div>
        )}

        {/* Big Stat */}
        {card.stat && (
          <div className="my-2">
            <div className="text-5xl sm:text-6xl font-normal font-display tracking-tight mb-2">
              {card.stat}
            </div>
            <p className="text-xs sm:text-sm font-medium leading-snug opacity-90">
              {card.statLabel}
            </p>
          </div>
        )}

        {/* Quote */}
        {card.quote && (
          <p className="text-xs sm:text-sm font-normal leading-relaxed opacity-95 my-2">
            &ldquo;{card.quote}&rdquo;
          </p>
        )}

        {/* Award Badge */}
        {card.awardBadge}

        {/* Title for award */}
        {card.type === 'award' && card.title && (
          <h3 className="text-lg font-normal font-display mt-2 leading-snug">
            {card.title}
          </h3>
        )}
      </div>

      {/* Card Footer */}
      <div>
        {card.author && (
          <div className="mb-3 pt-3 border-t border-current/15">
            <div className="font-bold text-xs">{card.author}</div>
            <div className="text-[10px] opacity-70">{card.role}</div>
          </div>
        )}

        {card.btnText && (
          <button
            onClick={onOpenWorkflow}
            className={`${card.btnBg} text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0`}
          >
            <span>{card.btnText}</span>
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section id="results" className="bg-[#F5F4F0] py-16 lg:py-24 border-b border-[#E2E0D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Eyebrow & Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-[#FF5A60] font-bold text-xs uppercase tracking-widest">
              <span className="text-[10px]">▲</span>
              <span>RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#1C1D21] font-display tracking-tight">
              Built on industry trust from 900+ clients
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-4 py-2.5 rounded-full border border-gray-300 hover:border-[#1C1D21] text-[#1C1D21] text-xs font-mono uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer bg-white/60"
              title={isPaused ? "Resume Carousel" : "Pause Carousel"}
            >
              <span>{isPaused ? "▶ PLAY" : "⏸ PAUSE"}</span>
            </button>

            <button
              onClick={onOpenWorkflow}
              className="px-6 py-3 rounded-full border border-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[#1C1D21] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>EXPLORE CUSTOMER STORIES</span>
              <span className="text-[#FF5A60]">▶</span>
            </button>
          </div>
        </div>

      </div>

      {/* Smooth Continuous Infinite 2-Row Carousel Container */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5F4F0] via-[#F5F4F0]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5F4F0] via-[#F5F4F0]/80 to-transparent z-10 pointer-events-none" />

        <div className="space-y-6">
          {/* Row 1 (Scrolling Left) */}
          <div
            className={`flex gap-5 ${
              isPaused ? '' : 'animate-marquee-slow'
            }`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {row1Loop.map((card, idx) => renderCard(card, idx))}
          </div>

          {/* Row 2 (Scrolling Right) */}
          <div
            className={`flex gap-5 ${
              isPaused ? '' : 'animate-marquee-reverse'
            }`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {row2Loop.map((card, idx) => renderCard(card, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}


