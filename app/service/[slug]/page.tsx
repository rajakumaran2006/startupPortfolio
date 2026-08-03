'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import { Navbar, Footer } from '@/components/layout';
import { ScheduleDemoModal, InteractiveWorkflowModal, SearchModal } from '@/components/modals';
import { CustomCursor, TargetCursor } from '@/components/ui';
import { 
  Sparkles, 
  Brain, 
  Cpu, 
  ShieldCheck, 
  Database, 
  UserCheck, 
  FileText, 
  Sliders, 
  Cloud, 
  Plus, 
  Minus 
} from 'lucide-react';

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || 'artificial-intelligence';
  const service = servicesData[slug] || servicesData['artificial-intelligence'];

  const [demoOpen, setDemoOpen] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'database':
        return <Database className="w-6 h-6 stroke-[1.8]" />;
      case 'user':
        return <UserCheck className="w-6 h-6 stroke-[1.8]" />;
      case 'file':
        return <FileText className="w-6 h-6 stroke-[1.8]" />;
      case 'sliders':
        return <Sliders className="w-6 h-6 stroke-[1.8]" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6 stroke-[1.8]" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 stroke-[1.8]" />;
      case 'cpu':
        return <Cpu className="w-6 h-6 stroke-[1.8]" />;
      default:
        return <Sparkles className="w-6 h-6 stroke-[1.8]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#1C1D21] font-sans selection:bg-[#FF5A60] selection:text-white">
      
      {/* High-End Custom Techy Interactive Cursor */}
      <CustomCursor />
      <TargetCursor cursorColor="#FF5A60" cursorColorOnTarget="#1C1D21" spinDuration={3} />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenDemo={() => setDemoOpen(true)}
        onOpenWorkflow={() => setWorkflowOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* =========================================================================
          SECTION 1: HERO SECTION (Matches Image 1)
         ========================================================================= */}
      <section className="relative w-full bg-[#FF5A60] text-[#1C1D21] pt-6 sm:pt-8 lg:pt-9 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E2E0D8]">
        
        {/* Decorative Geometric Background Pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-25 hidden md:block overflow-hidden">
          <svg className="w-full h-full text-white" viewBox="0 0 400 400" fill="currentColor">
            <polygon points="300,40 330,80 270,80" opacity="0.7" />
            <rect x="340" y="100" width="30" height="30" opacity="0.6" />
            <circle cx="280" cy="140" r="16" opacity="0.7" />
            <polygon points="320,180 350,220 290,220" opacity="0.5" />
            <circle cx="360" cy="240" r="20" opacity="0.8" />
            <rect x="260" y="260" width="28" height="28" opacity="0.6" />
            <circle cx="330" cy="320" r="14" opacity="0.7" />
            <circle cx="200" cy="60" r="12" opacity="0.6" />
            <rect x="220" y="120" width="24" height="24" opacity="0.5" />
            <polygon points="240,200 270,240 210,240" opacity="0.6" />
            <circle cx="210" cy="300" r="18" opacity="0.7" />
            <polygon points="350,20 380,60 320,60" opacity="0.6" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          {/* Header Tag Badge */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1C1D21]">
            <span className="text-xs">▲</span>
            <span>{service.tag}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium font-display text-[#1C1D21] leading-[1.08] tracking-tight max-w-4xl">
            {service.heroHeadline}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-xl text-[#1C1D21]/80 max-w-2xl font-normal leading-relaxed pt-2">
            {service.heroSubtitle}
          </p>

          {/* Primary Action Button */}
          <div className="pt-6">
            <button
              onClick={() => setDemoOpen(true)}
              className="bg-[#1C1D21] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full inline-flex items-center gap-3 transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>SCHEDULE A DEMO</span>
              <span className="text-white text-xs">▶</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CLIENT IMPACT TESTIMONIALS (Matches Image 2 Top Section)
         ========================================================================= */}
      <section className="bg-[#F5F4F0] py-16 lg:py-24 border-b border-[#E2E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 space-y-3 max-w-3xl">
            <div className="flex items-center gap-1.5 text-[#FF5A60] font-bold text-xs uppercase tracking-widest">
              <span className="text-[10px]">▲</span>
              <span>CLIENT IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#1C1D21] font-display tracking-tight leading-tight">
              {service.clientImpactHeadline}
            </h2>
          </div>

          {/* 3 Client Quote Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#EBE9E4] rounded-2xl p-7 flex flex-col justify-between shadow-xs border border-black/5 min-h-[280px]"
              >
                <p className="text-xs sm:text-sm text-[#1C1D21] leading-relaxed font-normal opacity-90">
                  &quot;{t.quote}&quot;
                </p>

                <div className="pt-8 border-t border-black/5">
                  <span className="font-extrabold text-sm sm:text-base tracking-wider uppercase text-[#1C1D21]">
                    {t.logoText}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SUITE & TOOLS GRID (Matches Image 2 Bottom Section)
         ========================================================================= */}
      <section className="bg-[#F5F4F0] py-16 lg:py-24 border-b border-[#E2E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 space-y-3 max-w-3xl">
            <div className="flex items-center gap-1.5 text-[#FF5A60] font-bold text-xs uppercase tracking-widest">
              <span className="text-[10px]">▲</span>
              <span>{service.suiteTag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#1C1D21] font-display tracking-tight leading-tight">
              {service.suiteHeadline}
            </h2>
            <p className="text-sm sm:text-base text-[#4A4D57] leading-relaxed pt-1">
              {service.suiteDescription}
            </p>
          </div>

          {/* 3 Colorful Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.suiteCards.map((card, idx) => (
              <div
                key={idx}
                className={`${card.bgColor} ${card.textColor} rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 min-h-[380px] border border-black/5 relative overflow-hidden`}
              >
                {/* Top Row with Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold tracking-widest opacity-60">
                      {card.number}
                    </span>
                    <div>
                      {idx === 0 ? (
                        <Brain className="w-10 h-10 stroke-[1.8]" />
                      ) : idx === 1 ? (
                        <Cpu className="w-10 h-10 stroke-[1.8]" />
                      ) : (
                        <ShieldCheck className="w-10 h-10 stroke-[1.8]" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-normal font-display mb-4">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6">
                  <button
                    onClick={() => router.push('/contact')}
                    className="bg-transparent border border-current text-current text-[10px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer hover:bg-black/10"
                  >
                    <span>LEARN MORE</span>
                    <span className="text-xs">▶</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: UNIFIED ARCHITECTURE GRID (Matches New Image 1)
         ========================================================================= */}
      <section className="relative w-full bg-[#FF5A60] text-[#1C1D21] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E2E0D8]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1C1D21]">
              <span className="text-xs">▲</span>
              <span>{service.unifiedTag}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium font-display text-[#1C1D21] leading-[1.08] tracking-tight">
              {service.unifiedHeadline}
            </h2>

            <p className="text-base sm:text-lg text-[#1C1D21]/80 font-normal leading-relaxed pt-2">
              {service.unifiedDescription}
            </p>
          </div>

          {/* 4 Feature Items in 2x2 Grid (Matches Image 1 layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-6">
            {service.unifiedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-5">
                <div className="p-3.5 rounded-full bg-white/20 text-[#1C1D21] shrink-0 w-12 h-12 flex items-center justify-center border border-white/20">
                  {getFeatureIcon(feat.iconName)}
                </div>

                <div className="space-y-1.5 pt-0.5">
                  <h3 className="font-bold text-lg sm:text-xl text-[#1C1D21]">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1C1D21]/85 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FAQS ACCORDION & GET STARTED CTA (Matches New Image 2)
         ========================================================================= */}
      <section className="bg-[#F5F4F0] py-20 lg:py-28 border-b border-[#E2E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* SECTION 5A: FAQs Accordion List */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-medium font-display text-[#1C1D21] mb-10">
              FAQs
            </h2>

            <div className="divide-y divide-gray-300/80 border-t border-b border-gray-300/80">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-5 transition-colors">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 text-left font-medium text-base sm:text-lg text-[#1C1D21] hover:text-[#FF5A60] transition-colors cursor-pointer group"
                    >
                      <span className="font-display font-medium pr-4">{faq.question}</span>
                      <span className="text-gray-600 group-hover:text-[#FF5A60] shrink-0 text-lg">
                        {isOpen ? (
                          <Minus className="w-5 h-5 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 text-xs sm:text-sm text-[#525560] leading-relaxed font-normal pr-8 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 5B: Get Started Banner (Matches Image 2 Bottom) */}
          <div className="text-center space-y-6 pt-8 border-t border-gray-300/50">
            <h2 className="text-3xl sm:text-5xl font-medium font-display text-[#1C1D21]">
              Get Started
            </h2>

            <div>
              <button
                onClick={() => setDemoOpen(true)}
                className="bg-[#FF5A60] hover:bg-[#E0484E] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-105"
              >
                <span>SCHEDULE A DEMO</span>
                <span className="text-white text-xs">▶</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Signature High-Impact Coral Footer */}
      <Footer
        onOpenDemo={() => setDemoOpen(true)}
        onOpenWorkflow={() => setWorkflowOpen(true)}
      />

      {/* Modals */}
      <ScheduleDemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
      />

      <InteractiveWorkflowModal
        isOpen={workflowOpen}
        onClose={() => setWorkflowOpen(false)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onOpenDemo={() => setDemoOpen(true)}
      />

    </div>
  );
}
