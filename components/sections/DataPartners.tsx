'use client';

import React from 'react';

interface DataPartnersProps {
  onOpenWorkflow: () => void;
}

export default function DataPartners({ onOpenWorkflow }: DataPartnersProps) {
  const partnerLogos = [
    { name: 'Parcha', icon: '✦ Parcha' },
    { name: 'Prove', icon: ':: Prove' },
    { name: 'QUANTIFIND', icon: '❖ QUANTIFIND' },
    { name: 'SentiLink', icon: '⧉ SentiLink' },
    { name: 'SEON', icon: '⨁ SEON' },
    { name: 'Sila', icon: 'Sila' },
    { name: 'Socure', icon: '◆ Socure' },
    { name: 'Experian', icon: 'Experian' },
    { name: 'Equifax', icon: 'EQUIFAX' },
    { name: 'Plaid', icon: 'PLAID' },
  ];

  return (
    <section id="data-partners" className="bg-[#ECEBE6] py-16 lg:py-20 border-b border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Image 4 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-[#FF5A60] font-bold text-xs uppercase tracking-widest">
              <span className="w-2.5 h-2.5 bg-[#FF5A60] rounded-xs" />
              <span>DATA PARTNERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1C1D21] font-display tracking-tight leading-[1.08]">
              Access the industry’s broadest ecosystem of identity data
            </h2>
            <p className="text-sm sm:text-base text-[#4A4D57] leading-relaxed max-w-2xl">
              Team Monsrow&apos;s vendor-neutral network gives you access to 270+ partner solutions. Swap, test, and optimize as your risk needs evolve.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenWorkflow}
              className="bg-transparent border border-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[#1C1D21] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
            >
              <span>CHECK OUT OUR PARTNER NETWORK</span>
              <span className="text-[#FF5A60] text-xs">▶</span>
            </button>
          </div>
        </div>

        {/* Partner Logos Banner Row with Infinite Smooth Marquee Carousel */}
        <div className="pt-8 border-t border-gray-300/80 overflow-hidden relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F5F4F0] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F5F4F0] to-transparent z-10 pointer-events-none" />

          <div className="w-full overflow-hidden py-2">
            <div className="animate-marquee flex items-center gap-12 text-[#1C1D21] opacity-85 font-bold text-base sm:text-lg font-display">
              {/* Loop 1 */}
              {partnerLogos.map((partner, idx) => (
                <div
                  key={`partner-1-${idx}`}
                  className="shrink-0 flex items-center gap-2 hover:opacity-100 hover:text-[#FF5A60] transition-all cursor-pointer px-3"
                >
                  <span>{partner.icon}</span>
                </div>
              ))}
              {/* Loop 2 */}
              {partnerLogos.map((partner, idx) => (
                <div
                  key={`partner-2-${idx}`}
                  className="shrink-0 flex items-center gap-2 hover:opacity-100 hover:text-[#FF5A60] transition-all cursor-pointer px-3"
                >
                  <span>{partner.icon}</span>
                </div>
              ))}
              {/* Loop 3 */}
              {partnerLogos.map((partner, idx) => (
                <div
                  key={`partner-3-${idx}`}
                  className="shrink-0 flex items-center gap-2 hover:opacity-100 hover:text-[#FF5A60] transition-all cursor-pointer px-3"
                >
                  <span>{partner.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

