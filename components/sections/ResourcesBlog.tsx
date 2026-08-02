'use client';

import React, { useState } from 'react';

interface ResourcesBlogProps {
  onOpenDemo: () => void;
  onOpenWorkflow: () => void;
}

export default function ResourcesBlog({ onOpenDemo, onOpenWorkflow }: ResourcesBlogProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section id="resources" className="bg-[#F5F4F0] py-16 lg:py-24 border-b border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-[#FF5A60] font-bold text-xs uppercase tracking-widest">
              <span className="text-[10px]">▲</span>
              <span>LATEST UPDATES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#1C1D21] font-display tracking-tight">
              Tech & Engineering Insights from Team Monsrow
            </h2>
          </div>

          <button
            onClick={onOpenWorkflow}
            className="px-6 py-3 rounded-full border border-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[#1C1D21] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
          >
            <span>EXPLORE MORE</span>
            <span className="text-[#FF5A60]">▶</span>
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Article Card 1: Shield with Lock SVG */}
          <div className="bg-[#EAE8E3] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-full h-40 rounded-xl overflow-hidden bg-[#FCE7F3] relative flex items-center justify-center border border-gray-200">
                <svg viewBox="0 0 200 120" className="w-full h-full object-cover">
                  {/* Grid background */}
                  <defs>
                    <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#F472B6" strokeWidth="0.5" opacity="0.4" />
                    </pattern>
                  </defs>
                  <rect width="200" height="120" fill="url(#gridPattern)" />
                  {/* Green Shield */}
                  <path d="M 100 20 L 150 35 C 150 75, 100 100, 100 100 C 100 100, 50 75, 50 35 Z" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
                  {/* Yellow Shield Inner border */}
                  <path d="M 100 25 L 144 38 C 144 72, 100 93, 100 93 C 100 93, 56 72, 56 38 Z" fill="none" stroke="#EAB308" strokeWidth="3" />
                  {/* Pink Lock Body */}
                  <rect x="85" y="55" width="30" height="25" rx="3" fill="#FF5A60" />
                  {/* Lock Shackle */}
                  <path d="M 92 55 L 92 48 C 92 43, 108 43, 108 48 L 108 55" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                  {/* Keyhole */}
                  <circle cx="100" cy="65" r="2.5" fill="#FFFFFF" />
                  <polygon points="98.5,65 101.5,65 101,72 99,72" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="inline-block">
                <span className="bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  ARTICLE
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-normal text-[#1C1D21] font-display leading-snug">
                Bypass the buzzwords: 5 ways AI actually scales enterprise software
              </h3>
            </div>

            <button
              onClick={onOpenWorkflow}
              className="mt-6 bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
            >
              <span className="text-[8px]">■</span>
              <span>READ MORE</span>
            </button>
          </div>

          {/* Article Card 2: Pixelated Mosaic Pattern SVG */}
          <div className="bg-[#EAE8E3] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-full h-40 rounded-xl overflow-hidden bg-[#FEF08A] relative flex items-center justify-center border border-gray-200">
                <svg viewBox="0 0 200 120" className="w-full h-full object-cover">
                  {/* Pixelated Abstract Mosaic Blocks */}
                  <rect x="0" y="0" width="40" height="40" fill="#EAB308" />
                  <rect x="40" y="0" width="40" height="40" fill="#CA8A04" />
                  <rect x="80" y="0" width="40" height="40" fill="#A16207" />
                  <rect x="120" y="0" width="40" height="40" fill="#F59E0B" />
                  <rect x="160" y="0" width="40" height="40" fill="#D97706" />

                  <rect x="0" y="40" width="40" height="40" fill="#38BDF8" />
                  <rect x="40" y="40" width="40" height="40" fill="#B45309" />
                  <rect x="80" y="40" width="40" height="40" fill="#78350F" />
                  <rect x="120" y="40" width="40" height="40" fill="#D97706" />
                  <rect x="160" y="40" width="40" height="40" fill="#92400E" />

                  <rect x="0" y="80" width="40" height="40" fill="#0284C7" />
                  <rect x="40" y="80" width="40" height="40" fill="#0369A1" />
                  <rect x="80" y="80" width="40" height="40" fill="#92400E" />
                  <rect x="120" y="80" width="40" height="40" fill="#B45309" />
                  <rect x="160" y="80" width="40" height="40" fill="#78350F" />
                </svg>
              </div>

              <div className="inline-block">
                <span className="bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  ARTICLE
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-normal text-[#1C1D21] font-display leading-snug">
                Data engineering and machine learning in modern web platforms
              </h3>
            </div>

            <button
              onClick={onOpenWorkflow}
              className="mt-6 bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
            >
              <span className="text-[8px]">■</span>
              <span>READ MORE</span>
            </button>
          </div>

          {/* Article Card 3: Split Face SVG */}
          <div className="bg-[#EAE8E3] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-full h-40 rounded-xl overflow-hidden bg-gradient-to-r from-blue-200 via-pink-100 to-purple-200 relative flex items-center justify-center border border-gray-200">
                <svg viewBox="0 0 200 120" className="w-full h-full object-cover">
                  <rect width="200" height="120" fill="#93C5FD" />
                  {/* Left half face */}
                  <path d="M 60 20 C 60 20, 100 20, 100 100 C 100 100, 60 100, 60 20 Z" fill="#FF5A60" />
                  {/* Right half face */}
                  <path d="M 100 20 C 100 20, 140 20, 140 100 C 140 100, 100 100, 100 20 Z" fill="#F8C8CC" />
                  {/* Left Eye */}
                  <circle cx="80" cy="50" r="10" fill="#FFFFFF" />
                  <circle cx="80" cy="50" r="5" fill="#1D4ED8" />
                  {/* Right Eye */}
                  <path d="M 110 50 Q 120 40 130 50 Q 120 55 110 50 Z" fill="#1D4ED8" />
                  {/* Nose */}
                  <polygon points="95,60 105,60 100,80" fill="#854D0E" />
                  {/* Ear Left */}
                  <circle cx="58" cy="60" r="8" fill="#FF5A60" />
                  {/* Ear Right */}
                  <circle cx="142" cy="60" r="8" fill="#A3E635" />
                </svg>
              </div>

              <div className="inline-block">
                <span className="bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  ARTICLE
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-normal text-[#1C1D21] font-display leading-snug">
                The fusion of AI automation and custom app development is here. Are you ready for it?
              </h3>
            </div>

            <button
              onClick={onOpenWorkflow}
              className="mt-6 bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
            >
              <span className="text-[8px]">■</span>
              <span>READ MORE</span>
            </button>
          </div>

        </div>

        {/* Newsletter Subscription Box */}
        <div className="bg-[#EAE8E3] rounded-2xl p-6 sm:p-10 border border-[#DDD9CE]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-normal text-[#1C1D21] font-display">
                Subscribe to the blog
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Be the first to read Team Monsrow&apos;s latest reports and insights on AI engineering, cloud solutions, and digital transformation.
              </p>
            </div>

            <div className="lg:w-1/2">
              {subscribed ? (
                <div className="bg-emerald-100 text-emerald-900 p-4 rounded-full border border-emerald-300 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <span>✓</span>
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/80 border border-gray-300 rounded-full px-5 py-3 text-xs text-[#1C1D21] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5A60] w-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#FF5A60] hover:bg-[#E0484E] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-1.5 transition-colors shrink-0 cursor-pointer w-full sm:w-auto"
                  >
                    <span>SUBSCRIBE</span>
                    <span>▶</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

