'use client';

import React, { useState } from 'react';
import { soundFX } from '@/lib/audioFX';

interface AudienceSegmentSectionProps {
  onOpenDemo: () => void;
  onOpenWorkflow: () => void;
}

export default function AudienceSegmentSection({ onOpenDemo, onOpenWorkflow }: AudienceSegmentSectionProps) {
  const [activeSegment, setActiveSegment] = useState<'banks' | 'fintechs' | 'unions'>('banks');

  const switchSegment = (seg: 'banks' | 'fintechs' | 'unions') => {
    soundFX.playSwitch();
    setActiveSegment(seg);
  };

  return (
    <section id="who-we-serve" className="bg-[#EAE8E3] py-16 lg:py-24 border-b border-[#D8D5CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-normal text-[#1C1D21] font-display tracking-tight mb-8">
          Purpose-built for teams like yours
        </h2>

        {/* Audience Filter Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => switchSegment('banks')}
            className={`px-6 py-3 rounded-t-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeSegment === 'banks'
                ? 'bg-white text-[#1C1D21] shadow-xs'
                : 'bg-[#D8D5CD] text-[#555] hover:bg-[#CCC9C1]'
            }`}
          >
            FOR STARTUPS
          </button>
          <button
            onClick={() => switchSegment('fintechs')}
            className={`px-6 py-3 rounded-t-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeSegment === 'fintechs'
                ? 'bg-white text-[#1C1D21] shadow-xs'
                : 'bg-[#D8D5CD] text-[#555] hover:bg-[#CCC9C1]'
            }`}
          >
            FOR ENTERPRISES
          </button>
          <button
            onClick={() => switchSegment('unions')}
            className={`px-6 py-3 rounded-t-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeSegment === 'unions'
                ? 'bg-white text-[#1C1D21] shadow-xs'
                : 'bg-[#D8D5CD] text-[#555] hover:bg-[#CCC9C1]'
            }`}
          >
            FOR INDUSTRIALS
          </button>
        </div>

        {/* White Main Container Card */}
        <div className="bg-white rounded-tr-2xl rounded-b-2xl p-6 sm:p-10 shadow-sm border border-gray-200">
          
          {/* Internal Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-normal text-[#1C1D21] font-display tracking-tight max-w-xl leading-tight">
              {activeSegment === 'banks' && 'Accelerate custom software development and launch digital marketing fast'}
              {activeSegment === 'fintechs' && 'Scale enterprise ERP, CRM, and cloud infrastructure with total reliability'}
              {activeSegment === 'unions' && 'Connect factories and industrial plants with smart IoT hardware systems'}
            </h3>

            <button
              onClick={onOpenWorkflow}
              className="px-6 py-3 rounded-full border border-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[#1C1D21] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
            >
              <span>
                {activeSegment === 'banks' && 'SEE STARTUP SOLUTIONS'}
                {activeSegment === 'fintechs' && 'SEE ENTERPRISE SOLUTIONS'}
                {activeSegment === 'unions' && 'SEE INDUSTRIAL SOLUTIONS'}
              </span>
              <span className="text-[#FF5A60]">▶</span>
            </button>
          </div>

          {/* Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Article - Split Face Illustration */}
            <div className="bg-[#F5F4F0] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Custom Split Face SVG Art */}
                <div className="w-full h-36 rounded-xl overflow-hidden bg-gradient-to-r from-blue-200 via-pink-100 to-purple-200 relative flex items-center justify-center border border-gray-200">
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

                <h4 className="text-base sm:text-lg font-normal text-[#1C1D21] font-display leading-snug">
                  The fusion of authentication and fraud prevention is here. Are you ready for it?
                </h4>
              </div>

              <button
                onClick={onOpenWorkflow}
                className="mt-6 bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
              >
                <span className="text-[8px]">■</span>
                <span>READ MORE</span>
              </button>
            </div>

            {/* Card 2: Article - Handshake Illustration */}
            <div className="bg-[#F5F4F0] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Custom Handshake SVG Art */}
                <div className="w-full h-36 rounded-xl overflow-hidden bg-[#2563EB] relative flex items-center justify-center border border-gray-200">
                  <svg viewBox="0 0 200 120" className="w-full h-full object-cover">
                    <rect width="200" height="120" fill="#1D4ED8" />
                    {/* Yellow sphere left */}
                    <circle cx="35" cy="70" r="22" fill="#EAB308" />
                    {/* Blue sleeve left */}
                    <rect x="20" y="30" width="50" height="40" fill="#0284C7" />
                    {/* Pink hand center */}
                    <path d="M 70 45 L 120 45 C 125 45 130 50 130 55 L 130 70 C 130 75 125 80 120 80 L 70 80 Z" fill="#FF8A8E" />
                    {/* Fingers line texture */}
                    <line x1="85" y1="50" x2="85" y2="75" stroke="#E11D48" strokeWidth="1.5" />
                    <line x1="95" y1="50" x2="95" y2="75" stroke="#E11D48" strokeWidth="1.5" />
                    <line x1="105" y1="50" x2="105" y2="75" stroke="#E11D48" strokeWidth="1.5" />
                    <line x1="115" y1="50" x2="115" y2="75" stroke="#E11D48" strokeWidth="1.5" />
                    {/* Bank building right */}
                    <polygon points="170,30 150,45 190,45" fill="#334155" />
                    <rect x="153" y="46" width="34" height="40" fill="#475569" />
                    <line x1="160" y1="46" x2="160" y2="86" stroke="#FFFFFF" strokeWidth="2" />
                    <line x1="170" y1="46" x2="170" y2="86" stroke="#FFFFFF" strokeWidth="2" />
                    <line x1="180" y1="46" x2="180" y2="86" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>

                <div className="inline-block">
                  <span className="bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    ARTICLE
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-normal text-[#1C1D21] font-display leading-snug">
                  When protection becomes a product feature
                </h4>
              </div>

              <button
                onClick={onOpenWorkflow}
                className="mt-6 bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
              >
                <span className="text-[8px]">■</span>
                <span>READ MORE</span>
              </button>
            </div>

            {/* Card 3 Column: Stacked Case Study + Report Cards */}
            <div className="flex flex-col gap-6">
              
              {/* Top Card: LiveOakBank Case Study */}
              <div className="bg-[#F5F4F0] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow grow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      CASE STUDY
                    </span>
                    {/* LiveOakBank Logo */}
                    <div className="flex items-center gap-1 font-bold text-xs text-[#1C1D21]">
                      <svg className="w-4 h-4 text-[#1C1D21]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L4 9v13h16V9L12 2zm0 3.2L18 10v10H6V10l6-4.8z"/>
                      </svg>
                      <span>LiveOakBank</span>
                    </div>
                  </div>

                  <div className="text-4xl sm:text-5xl font-normal font-display text-[#1C1D21] my-2">
                    27%
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    decrease in fraud YoY
                  </p>
                </div>

                <button
                  onClick={onOpenWorkflow}
                  className="mt-4 bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
                >
                  <span className="text-[8px]">■</span>
                  <span>READ MORE</span>
                </button>
              </div>

              {/* Bottom Card: 2026 State of Fraud Report */}
              <div className="bg-[#F5F4F0] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="mb-3">
                    <span className="bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      REPORT
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-normal text-[#1C1D21] font-display leading-snug">
                    2026 State of Fraud Report
                  </h4>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="mt-4 bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
                >
                  <span className="text-[8px]">■</span>
                  <span>READ MORE</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

