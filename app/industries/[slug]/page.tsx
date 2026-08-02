'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { industriesData } from '@/lib/industriesData';
import { Navbar, Footer } from '@/components/layout';
import { ScheduleDemoModal, InteractiveWorkflowModal, SearchModal } from '@/components/modals';
import { CustomCursor, TargetCursor } from '@/components/ui';
import { IndustriesWeServeSection } from '@/components/sections';
import { 
  Building2, 
  Zap, 
  Users, 
  Cpu, 
  Sliders, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Layers,
  BarChart3,
  Puzzle,
  UserCheck,
  Coins,
  FileText,
  ShieldAlert
} from 'lucide-react';

export default function DynamicIndustryPage() {
  const params = useParams();
  const router = useRouter();
  const rawSlug = params?.slug;
  const slug = (Array.isArray(rawSlug) ? rawSlug[0] : rawSlug) || 'manufacturing';

  const industry = industriesData[slug] || industriesData['manufacturing'];

  const [demoOpen, setDemoOpen] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // SVG Bank & Fintech Illustration matching Screenshot 1 & 5
  const renderIllustration = (type: string) => {
    return (
      <div className="w-full h-full min-h-[320px] sm:min-h-[400px] bg-[#9BB7D4]/40 rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#8BA7C4]/40 shadow-inner">
        <svg className="w-full max-w-[420px] h-auto drop-shadow-lg" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background graphic elements */}
          <rect x="10" y="10" width="380" height="300" rx="16" fill="#7FA4CC" fillOpacity="0.3" />
          
          {/* Bank Building */}
          <path d="M40 80L200 20L360 80V95H40V80Z" fill="#1D2E68" />
          <rect x="50" y="95" width="300" height="20" fill="#2E438E" />
          
          {/* Pillars */}
          <rect x="70" y="115" width="30" height="150" fill="#2E438E" />
          <rect x="130" y="115" width="30" height="150" fill="#2E438E" />
          <rect x="190" y="115" width="30" height="150" fill="#2E438E" />
          <rect x="250" y="115" width="30" height="150" fill="#2E438E" />
          <rect x="310" y="115" width="30" height="150" fill="#2E438E" />
          
          <rect x="80" y="130" width="10" height="120" fill="#88AEE4" />
          <rect x="140" y="130" width="10" height="120" fill="#88AEE4" />
          <rect x="200" y="130" width="10" height="120" fill="#88AEE4" />
          <rect x="260" y="130" width="10" height="120" fill="#88AEE4" />
          <rect x="320" y="130" width="10" height="120" fill="#88AEE4" />

          {/* Roof Pediment Circle */}
          <circle cx="200" cy="55" r="14" fill="#1C1D21" />

          {/* Base */}
          <rect x="40" y="265" width="320" height="25" fill="#1D2E68" />
        </svg>

        {/* Decorative Overlay Nodes */}
        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#1D2E68] border-2 border-white" />
        <div className="absolute bottom-6 left-6 w-5 h-5 rounded-full bg-[#FF5A60] border-2 border-white animate-ping" />
      </div>
    );
  };

  const renderBannerIllustration = () => {
    return (
      <div className="w-full h-full min-h-[320px] bg-[#9BB7D4]/30 rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#8BA7C4]/30">
        <svg className="w-full max-w-[450px] h-auto" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bank Building Left */}
          <rect x="20" y="60" width="180" height="220" fill="#1D2E68" rx="8" />
          <path d="M20 60L110 10L200 60H20Z" fill="#2E438E" />
          <rect x="40" y="90" width="20" height="170" fill="#88AEE4" />
          <rect x="80" y="90" width="20" height="170" fill="#88AEE4" />
          <rect x="120" y="90" width="20" height="170" fill="#88AEE4" />
          <rect x="160" y="90" width="20" height="170" fill="#88AEE4" />

          {/* Connected Network Lines */}
          <path d="M200 120H280V160H320" stroke="#1D2E68" strokeWidth="4" strokeDasharray="6 6" />
          <circle cx="280" cy="120" r="6" fill="#2E438E" />
          <circle cx="320" cy="160" r="6" fill="#FF5A60" />

          {/* Mobile Phone Right */}
          <rect x="310" y="110" width="120" height="170" rx="16" fill="#88AEE4" stroke="#1D2E68" strokeWidth="4" />
          <rect x="330" y="125" width="80" height="10" rx="5" fill="#1D2E68" />
          <rect x="385" y="145" width="30" height="90" fill="#1D2E68" rx="4" />
          <rect x="365" y="170" width="15" height="65" fill="#2E438E" rx="4" />

          {/* Stack of Coins */}
          <ellipse cx="290" cy="220" rx="30" ry="12" fill="#FFFFFF" stroke="#1D2E68" strokeWidth="3" />
          <ellipse cx="290" cy="235" rx="30" ry="12" fill="#E4E2DC" stroke="#1D2E68" strokeWidth="3" />
          <ellipse cx="290" cy="250" rx="30" ry="12" fill="#2E438E" stroke="#1D2E68" strokeWidth="3" />
        </svg>
      </div>
    );
  };

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'user':
        return <UserCheck className="w-5 h-5 text-[#1C1D21]" />;
      case 'coins':
        return <Coins className="w-5 h-5 text-[#1C1D21]" />;
      case 'shield':
        return <ShieldAlert className="w-5 h-5 text-[#1C1D21]" />;
      case 'file':
        return <FileText className="w-5 h-5 text-[#1C1D21]" />;
      default:
        return <UserCheck className="w-5 h-5 text-[#1C1D21]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#EBE9E4] text-[#1C1D21] font-sans selection:bg-[#FF5A60] selection:text-white">
      
      {/* High-End Custom Cursor */}
      <CustomCursor />
      <TargetCursor cursorColor="#FF5A60" cursorColorOnTarget="#1C1D21" spinDuration={3} />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenDemo={() => setDemoOpen(true)}
        onOpenWorkflow={() => setWorkflowOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* =========================================================================
          SECTION 1: HERO BANNER (Matches Screenshot 1 Exactly)
         ========================================================================= */}
      <IndustriesWeServeSection
        initialTab={slug}
        showTabs={true}
        onOpenDemo={() => setDemoOpen(true)}
        onOpenWorkflow={() => setWorkflowOpen(true)}
      />

      {/* =========================================================================
          SECTION 2: TRUST GRID & CASE STUDY (Matches Screenshot 2 Exactly)
         ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#1C1D21] font-display tracking-tight">
          {industry.trustHeadline}
        </h2>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {industry.partnerLogos.map((logo, index) => (
            <div 
              key={index}
              className={`py-4 px-3 rounded-xl border border-black/5 flex items-center justify-center font-bold text-xs sm:text-sm tracking-tight text-center ${
                index === 2 || index === 6 ? 'bg-[#F2DF7A] text-[#1C1D21]' : 'bg-[#F5F4F0] text-[#4A4D55]'
              }`}
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Case Study & Quote Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          
          {/* Card Left: Case Study Summary (Off-white background) */}
          <div className="lg:col-span-6 bg-[#F5F4F0] rounded-3xl p-8 border border-[#DCDAD2] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-white rounded-lg border border-gray-200 text-xs font-bold text-[#1C1D21]">
                {industry.caseStudy.clientLogo}
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#1C1D21] font-display leading-tight">
                {industry.caseStudy.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#525560] leading-relaxed">
                {industry.caseStudy.description}
              </p>

              <ul className="space-y-2 pt-1 text-xs sm:text-sm font-semibold text-[#1C1D21]">
                {industry.caseStudy.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C1D21]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Card Right: Red/Coral Quote Box (Matches Screenshot 2 Exactly) */}
          <div className="lg:col-span-6 bg-[#FF5A60] text-[#1C1D21] rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-sm">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium font-display leading-snug tracking-tight">
              {industry.caseStudy.quote}
            </blockquote>

            <div className="text-xs sm:text-sm font-bold text-[#1C1D21] pt-4 border-t border-black/10">
              {industry.caseStudy.quoteAuthor}, {industry.caseStudy.quoteRole}
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 3: BENEFITS GRID (Matches Screenshot 3 Exactly)
         ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <h2 className="text-3xl sm:text-4xl font-medium text-[#1C1D21] font-display tracking-tight">
          {industry.benefitsHeadline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industry.benefits.map((benefit, index) => {
            const icons = [
              <Send key="1" className="w-7 h-7 stroke-[1.5] text-[#1C1D21]" />,
              <Layers key="2" className="w-7 h-7 stroke-[1.5] text-[#1C1D21]" />,
              <BarChart3 key="3" className="w-7 h-7 stroke-[1.5] text-[#1C1D21]" />,
              <Puzzle key="4" className="w-7 h-7 stroke-[1.5] text-[#1C1D21]" />
            ];

            return (
              <div 
                key={index}
                className="bg-[#F5F4F0] rounded-3xl p-8 border border-[#DCDAD2] flex flex-col sm:flex-row items-start gap-6"
              >
                {/* Circle Pink Icon (Matches Screenshot 3) */}
                <div className="w-16 h-16 rounded-full bg-[#F8BAC0] flex items-center justify-center shrink-0">
                  {icons[index % icons.length]}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-[#1C1D21] font-display">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525560] leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SOLUTIONS COLUMNS (Matches Screenshot 4 Exactly)
         ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <h2 className="text-3xl sm:text-4xl font-medium text-[#1C1D21] font-display tracking-tight">
          {industry.solutionsHeadline}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industry.solutions.map((col, idx) => (
            <div 
              key={idx}
              className="bg-[#F5F4F0] rounded-3xl overflow-hidden border border-[#DCDAD2] flex flex-col"
            >
              {/* Pink Header Banner Bar */}
              <div className={`p-6 flex items-center gap-3 ${idx === 1 ? 'bg-[#FF5A60] text-white' : 'bg-[#F8BAC0] text-[#1C1D21]'}`}>
                <div className="p-2 rounded-xl bg-white/40">
                  {getSolutionIcon(col.iconName)}
                </div>
                <h3 className="font-bold text-base sm:text-lg leading-snug">
                  {col.title}
                </h3>
              </div>

              {/* Items List */}
              <div className="p-6 space-y-3 flex-1">
                <ul className="space-y-3 text-xs sm:text-sm text-[#3A3D44]">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#1C1D21] font-bold text-xs mt-0.5">•</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: EMBEDDED FINANCE & CONTROL BANNER (Matches Screenshot 5)
         ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F5F4F0] border border-[#DCDAD2] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1D21] font-display leading-tight">
              {industry.bannerHeadline}
            </h2>

            <p className="text-sm sm:text-base text-[#525560] leading-relaxed">
              {industry.bannerCopy}
            </p>

            <button
              onClick={() => setDemoOpen(true)}
              className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#1C1D21] hover:text-[#FF5A60] transition-colors cursor-pointer group"
            >
              <span className="w-7 h-7 rounded-full bg-[#1C1D21] text-white flex items-center justify-center text-xs group-hover:bg-[#FF5A60] transition-colors">➔</span>
              <span>{industry.bannerCtaText}</span>
            </button>
          </div>

          <div className="lg:col-span-5 h-full">
            {renderBannerIllustration()}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer 
        onOpenDemo={() => setDemoOpen(true)} 
        onOpenWorkflow={() => setWorkflowOpen(true)}
      />

      {/* Interactive Modals */}
      <ScheduleDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <InteractiveWorkflowModal isOpen={workflowOpen} onClose={() => setWorkflowOpen(false)} />
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onOpenDemo={() => setDemoOpen(true)}
      />

    </div>
  );
}
