'use client';

import React, { useState } from 'react';
import { soundFX } from '@/lib/audioFX';
import { industriesData, IndustryData } from '@/lib/industriesData';

interface IndustriesWeServeSectionProps {
  onOpenDemo?: () => void;
  onOpenWorkflow?: () => void;
  initialTab?: string;
  showTabs?: boolean;
}

export default function IndustriesWeServeSection({
  onOpenDemo,
  onOpenWorkflow,
  initialTab = 'manufacturing',
  showTabs = true,
}: IndustriesWeServeSectionProps) {
  const [activeSlug, setActiveSlug] = useState<string>(initialTab);

  const activeData: IndustryData = industriesData[activeSlug] || industriesData['manufacturing'];

  const switchTab = (slug: string) => {
    soundFX.playSwitch();
    setActiveSlug(slug);
  };

  const renderIllustration = (type: string) => {
    switch (type) {
      case 'manufacturing':
        return (
          <div className="w-full h-full min-h-[360px] sm:min-h-[420px] bg-[#A2C2DD] rounded-3xl relative overflow-hidden flex items-center justify-center p-6 border border-[#8AAECB]">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#6E9BCA]/40" />
            <svg className="w-full max-w-[440px] h-auto drop-shadow-md relative z-10" viewBox="0 0 460 340" fill="none">
              <rect x="65" y="80" width="330" height="200" rx="16" fill="#182550" />
              <rect x="85" y="100" width="130" height="160" rx="8" fill="#5E87D6" />
              <rect x="235" y="100" width="140" height="70" rx="8" fill="#8BB3DF" />
              <rect x="235" y="185" width="140" height="75" rx="8" fill="#FF5A60" />
              <circle cx="150" cy="180" r="28" fill="#182550" />
              <path d="M150 162v36M132 180h36" stroke="#FFFFFF" strokeWidth="4" />
            </svg>
          </div>
        );

      case 'healthcare':
        return (
          <div className="w-full h-full min-h-[360px] sm:min-h-[420px] bg-[#93C8D0] rounded-3xl relative overflow-hidden flex items-center justify-center p-6 border border-[#7CB7C0]">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#5EACB7]/30" />
            <svg className="w-full max-w-[440px] h-auto drop-shadow-md relative z-10" viewBox="0 0 460 340" fill="none">
              <rect x="140" y="40" width="180" height="260" rx="24" fill="#182550" />
              <rect x="152" y="55" width="156" height="230" rx="16" fill="#FFFFFF" />
              <circle cx="230" cy="140" r="36" fill="#FF5A60" />
              <path d="M230 120v40M210 140h40" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
              <rect x="175" y="195" width="110" height="12" rx="6" fill="#182550" />
              <rect x="190" y="218" width="80" height="8" rx="4" fill="#5EACB7" />
            </svg>
          </div>
        );

      case 'education':
        return (
          <div className="w-full h-full min-h-[360px] sm:min-h-[420px] bg-[#D6C4AD] rounded-3xl relative overflow-hidden flex items-center justify-center p-6 border border-[#C5AF97]">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#B89F82]/30" />
            <svg className="w-full max-w-[440px] h-auto drop-shadow-md relative z-10" viewBox="0 0 460 340" fill="none">
              <path d="M230 50L390 120L230 190L70 120Z" fill="#182550" />
              <path d="M230 65L360 120L230 175L100 120Z" fill="#C5AF97" />
              <rect x="130" y="160" width="200" height="110" rx="12" fill="#182550" />
              <rect x="150" y="180" width="160" height="70" rx="6" fill="#FFFFFF" />
              <circle cx="230" cy="215" r="18" fill="#FF5A60" />
            </svg>
          </div>
        );

      case 'finance':
      default:
        return (
          <div className="w-full h-full min-h-[360px] sm:min-h-[420px] bg-[#A2C2DD] rounded-3xl relative overflow-hidden flex items-center justify-center p-6 border border-[#8AAECB]">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#6E9BCA]/40" />
            <svg className="w-full max-w-[440px] h-auto drop-shadow-md relative z-10" viewBox="0 0 460 340" fill="none">
              <rect x="67" y="65" width="365" height="235" fill="#182550" />
              <path d="M110 130L275 60L440 130H110Z" fill="#182550" />
              <path d="M115 130L275 66L435 130H115Z" fill="#FFFFFF" />
              <rect x="155" y="150" width="28" height="140" fill="#8BB3DF" />
              <rect x="225" y="150" width="28" height="140" fill="#8BB3DF" />
              <rect x="295" y="150" width="28" height="140" fill="#8BB3DF" />
              <rect x="365" y="150" width="28" height="140" fill="#8BB3DF" />
            </svg>
          </div>
        );

      case 'saas':
        return (
          <div className="w-full h-full min-h-[360px] sm:min-h-[420px] bg-[#C5B3D4] rounded-3xl relative overflow-hidden flex items-center justify-center p-6 border border-[#A892BA]">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#8B6E9E]/30" />
            <svg className="w-full max-w-[440px] h-auto drop-shadow-md relative z-10" viewBox="0 0 460 340" fill="none">
              <rect x="80" y="70" width="300" height="200" rx="16" fill="#182550" />
              <rect x="100" y="90" width="260" height="160" rx="8" fill="#FFFFFF" />
              <circle cx="130" cy="115" r="8" fill="#FF5A60" />
              <circle cx="155" cy="115" r="8" fill="#FACC15" />
              <circle cx="180" cy="115" r="8" fill="#3B82F6" />
              <rect x="100" y="135" width="260" height="2" fill="#E2E0D8" />
              <rect x="120" y="155" width="100" height="70" rx="6" fill="#182550" />
              <rect x="240" y="155" width="100" height="70" rx="6" fill="#A892BA" />
            </svg>
          </div>
        );

      case 'ecommerce':
        return (
          <div className="w-full h-full min-h-[360px] sm:min-h-[420px] bg-[#D4B3BE] rounded-3xl relative overflow-hidden flex items-center justify-center p-6 border border-[#BE98A6]">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#AA788A]/30" />
            <svg className="w-full max-w-[440px] h-auto drop-shadow-md relative z-10" viewBox="0 0 460 340" fill="none">
              <path d="M120 90H340L320 230H140L120 90Z" fill="#182550" />
              <path d="M170 90V60C170 40 190 25 230 25C270 25 290 40 290 60V90" stroke="#182550" strokeWidth="12" strokeLinecap="round" />
              <circle cx="230" cy="160" r="28" fill="#FF5A60" />
            </svg>
          </div>
        );
    }
  };

  const tabs = [
    { slug: 'banks', label: 'BANKS' },
    { slug: 'fintechs', label: 'FINTECHS' },
    { slug: 'credit-unions', label: 'CREDIT UNIONS' },
    { slug: 'crypto', label: 'CRYPTO & WEB3' },
    { slug: 'lending', label: 'LENDING' },
    { slug: 'insurance', label: 'INSURANCE' },
  ];

  return (
    <section id="industries-we-serve" className="w-full bg-[#F4F3EF] pt-4 sm:pt-6 lg:pt-7 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Main Card Container (Exact Careers Hero Alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Clean White Content Box (col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E4E2DC] shadow-xs flex flex-col justify-between space-y-4">
            <div>
              {/* Upper Category Tag */}
              <span className="inline-block text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#1C1D21] mb-4">
                {activeData.tag}
              </span>

              {/* Main Clean Title matching About Us title font style */}
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-normal text-[#1C1D21] leading-[1.18] tracking-tight font-sans mb-4 sm:mb-5">
                {activeData.heroHeadline}
              </h1>

              {/* Detailed Body Copy Paragraphs */}
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-5">
                {activeData.heroCopy.split('\n\n')[0]}
              </p>
            </div>

            {/* Bottom Underlined Action Link */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={onOpenDemo}
                className="text-[#1C1D21] font-bold underline underline-offset-4 hover:text-[#FF5A60] transition-colors cursor-pointer text-sm sm:text-base inline-block"
              >
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Right Column: Vector Illustration Box (col-span-7) */}
          <div className="lg:col-span-7 h-full min-h-[340px] md:min-h-[420px]">
            {renderIllustration(activeData.heroIllustrationType || activeSlug)}
          </div>

        </div>
      </div>
    </section>
  );
}
