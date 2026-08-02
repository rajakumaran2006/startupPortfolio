'use client';

import React from 'react';

export default function TrustedProviders() {
  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E2E0D8]">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1D21] font-sans tracking-tight leading-tight max-w-xl mb-8">
        Trusted by clients &amp; partners
      </h2>

      {/* Grid of 18 Brand Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        
        {/* ROW 1 */}

        {/* 1. destylus (Off-White) */}
        <div className="bg-[#F6F5F2] hover:bg-[#EFECE6] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 border border-black/5 shadow-2xs">
          <span className="text-lg sm:text-xl font-black font-sans tracking-tight text-[#1C1D21]">
            destylus<span className="text-[#FF5A60]">.</span>
          </span>
        </div>

        {/* 2. Hamilton Learning Academy (Off-White) */}
        <div className="bg-[#F6F5F2] hover:bg-[#EFECE6] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-3 border border-black/5 shadow-2xs">
          <div className="text-center leading-tight">
            <div className="text-xs sm:text-sm font-extrabold tracking-tight text-[#1C1D21]">Hamilton</div>
            <div className="text-[9px] uppercase font-bold tracking-wider text-gray-600">Learning Academy</div>
          </div>
        </div>

        {/* 3. Venus School (Off-White) */}
        <div className="bg-[#F6F5F2] hover:bg-[#EFECE6] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 gap-2 border border-black/5 shadow-2xs">
          <svg className="w-4 h-4 text-[#1C1D21]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8" opacity="0.3" />
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
          </svg>
          <span className="text-base sm:text-lg font-bold text-[#1C1D21] tracking-tight">Venus School</span>
        </div>

        {/* 4. monsrow (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 border border-black/5 shadow-2xs">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1C1D21] font-display">
            monsrow
          </span>
        </div>

        {/* 5. Aura Tech (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 gap-1.5 border border-black/5 shadow-2xs">
          <span className="text-base sm:text-xl font-black tracking-tight text-[#1C1D21]">aura tech</span>
        </div>

        {/* 6. Zenith Enterprise (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 border border-black/5 shadow-2xs">
          <span className="text-sm sm:text-base font-extrabold text-[#1C1D21] tracking-wider uppercase font-mono">
            ZENITH
          </span>
        </div>


        {/* ROW 2 */}

        {/* 7. Apex Global (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 gap-1.5 border border-black/5 shadow-2xs">
          <div className="w-5 h-5 rounded-full border-2 border-[#1C1D21] flex items-center justify-center font-black text-[10px] text-[#1C1D21]">
            A
          </div>
          <div className="leading-none text-left">
            <div className="text-sm sm:text-base font-black text-[#1C1D21]">Apex</div>
            <div className="text-[8px] uppercase tracking-tighter font-semibold text-[#1C1D21]">Global Tech</div>
          </div>
        </div>

        {/* 8. Nova Core (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-3 gap-1.5 border border-black/5 shadow-2xs">
          <span className="text-xs sm:text-sm font-extrabold text-[#1C1D21] tracking-tight">Nova Core</span>
        </div>

        {/* 9. Nexus Digital (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 border border-black/5 shadow-2xs">
          <span className="text-lg sm:text-xl font-black text-[#1C1D21] tracking-tight">Nexus</span>
        </div>

        {/* 10. Orion Systems (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-3 border border-black/5 shadow-2xs">
          <div className="text-center leading-none">
            <div className="text-base sm:text-lg font-extrabold text-[#1C1D21]">Orion</div>
            <div className="text-[7px] uppercase tracking-tighter font-medium text-[#1C1D21] mt-0.5">Systems</div>
          </div>
        </div>

        {/* 11. Hyperion Labs (Off-White) */}
        <div className="bg-[#F6F5F2] hover:bg-[#EFECE6] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-3 gap-1.5 border border-black/5 shadow-2xs">
          <span className="text-xs sm:text-sm font-black tracking-wider text-[#1C1D21]">HYPERION</span>
        </div>

        {/* 12. Crestview (Off-White) */}
        <div className="bg-[#F6F5F2] hover:bg-[#EFECE6] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 border border-black/5 shadow-2xs">
          <span className="text-base sm:text-lg font-black text-[#1C1D21] tracking-tight">
            Crestview
          </span>
        </div>


        {/* ROW 3 */}

        {/* 13. Beacon Intl (Off-White) */}
        <div className="bg-[#F6F5F2] hover:bg-[#EFECE6] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-3 border border-black/5 shadow-2xs">
          <div className="text-center leading-tight">
            <div className="text-[10px] font-black uppercase tracking-wider text-[#1C1D21]">BEACON</div>
            <div className="text-[7px] font-bold uppercase tracking-widest text-[#1C1D21]">International</div>
          </div>
        </div>

        {/* 14. Starlight Academy (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-3 gap-1.5 border border-black/5 shadow-2xs">
          <span className="text-xs sm:text-sm font-extrabold text-[#1C1D21] tracking-tight">Starlight</span>
        </div>

        {/* 15. Pulse Dynamics (Off-White) */}
        <div className="bg-[#F6F5F2] hover:bg-[#EFECE6] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 gap-1.5 border border-black/5 shadow-2xs">
          <span className="text-base sm:text-lg font-black text-[#1C1D21] tracking-tight">Pulse</span>
        </div>

        {/* 16. Velox Tech (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-3 gap-1 border border-black/5 shadow-2xs">
          <div className="leading-none text-left">
            <div className="text-[9px] font-black uppercase tracking-tighter text-[#1C1D21]">VELOX TECH</div>
            <div className="text-[6px] font-semibold uppercase tracking-tighter text-[#1C1D21]">SOLUTIONS</div>
          </div>
        </div>

        {/* 17. Quantum Mind (Off-White) */}
        <div className="bg-[#F6F5F2] hover:bg-[#EFECE6] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-3 gap-1.5 border border-black/5 shadow-2xs">
          <div className="leading-none text-left">
            <div className="text-[10px] font-extrabold text-[#1C1D21]">Quantum</div>
            <div className="text-[6px] uppercase tracking-tighter text-[#1C1D21]">Mind AI</div>
          </div>
        </div>

        {/* 18. Vanguard (Pink Background) */}
        <div className="bg-[#FAA0B5] hover:bg-[#F88EA7] transition-colors rounded-2xl h-18 sm:h-20 flex items-center justify-center px-4 border border-black/5 shadow-2xs">
          <span className="text-base sm:text-lg font-black text-[#1C1D21] tracking-widest uppercase">
            VANGUARD
          </span>
        </div>

      </div>
    </section>
  );
}
