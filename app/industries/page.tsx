'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Footer } from '@/components/layout';
import { ScheduleDemoModal, InteractiveWorkflowModal, SearchModal } from '@/components/modals';
import { CustomCursor, TargetCursor } from '@/components/ui';
import { IndustriesWeServeSection } from '@/components/sections';
import { industriesData } from '@/lib/industriesData';
import { 
  Building2, 
  Zap, 
  Users, 
  Cpu, 
  Sliders, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function IndustriesPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const getIndustryIcon = (slug: string) => {
    switch (slug) {
      case 'banks':
        return <Building2 className="w-8 h-8 text-[#1C1D21] stroke-[1.8]" />;
      case 'fintechs':
        return <Zap className="w-8 h-8 text-[#1C1D21] stroke-[1.8]" />;
      case 'credit-unions':
        return <Users className="w-8 h-8 text-[#1C1D21] stroke-[1.8]" />;
      case 'crypto':
        return <Cpu className="w-8 h-8 text-[#1C1D21] stroke-[1.8]" />;
      case 'lending':
        return <Sliders className="w-8 h-8 text-[#1C1D21] stroke-[1.8]" />;
      case 'insurance':
        return <ShieldCheck className="w-8 h-8 text-[#1C1D21] stroke-[1.8]" />;
      default:
        return <Building2 className="w-8 h-8 text-[#1C1D21] stroke-[1.8]" />;
    }
  };

  const allIndustries = Object.values(industriesData);

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
          SECTION 1: HERO SECTION
         ========================================================================= */}
      <section className="relative w-full pt-10 pb-16 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4E2DC] text-[#1C1D21] text-xs font-extrabold uppercase tracking-widest border border-[#DCDAD2]">
            <span className="w-2 h-2 rounded-full bg-[#FF5A60] animate-pulse" />
            <span>INDUSTRIES WE SERVE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C1D21] font-display leading-[1.1]">
            Custom Software, Cloud Architecture &amp; AI Engineering for Every Industry Sector
          </h1>

          <p className="text-lg sm:text-xl text-[#4A4D55] font-normal leading-relaxed max-w-3xl">
            Whether you are in Financial Services, Tech &amp; SaaS, E-Commerce, Healthcare, Supply Chain, or Enterprise Tech — Team Monsrow builds custom web &amp; mobile apps, enterprise cloud systems, AI decision engines, and scalable digital platforms tailored to your exact industry requirements.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setDemoOpen(true)}
              className="bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-sm font-extrabold uppercase tracking-wider px-8 py-4 rounded-full flex items-center gap-3 transition-all shadow-md transform hover:scale-105 group cursor-pointer"
            >
              <span>Schedule an Industry Demo</span>
              <span className="text-white">▶</span>
            </button>

            <button
              onClick={() => setWorkflowOpen(true)}
              className="bg-[#E4E2DC] hover:bg-[#DCDAD2] text-[#1C1D21] text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-full flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Interactive Decision Builder</span>
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 pt-8 border-t border-[#DCDAD2] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1C1D21] font-display">800+</div>
            <div className="text-xs sm:text-sm text-[#525560] font-medium mt-1">Financial Institutions</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1C1D21] font-display">270+</div>
            <div className="text-xs sm:text-sm text-[#525560] font-medium mt-1">Global Data Integrations</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1C1D21] font-display">99.8%</div>
            <div className="text-xs sm:text-sm text-[#525560] font-medium mt-1">Instant Approval Accuracy</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1C1D21] font-display">&lt; 800ms</div>
            <div className="text-xs sm:text-sm text-[#525560] font-medium mt-1">Average Response Latency</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1.5: INTERACTIVE TABBED SHOWCASE (MATCHES DESIGN SCREENSHOT)
         ========================================================================= */}
      <IndustriesWeServeSection 
        onOpenDemo={() => setDemoOpen(true)}
        onOpenWorkflow={() => setWorkflowOpen(true)}
      />

      {/* =========================================================================
          SECTION 2: 6 SEPARATE INDUSTRY SECTOR CARDS GRID
         ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-4 mb-10">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#1C1D21] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
            <span>EXPLORE OUR SEPARATE INDUSTRY PAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-[#1C1D21] font-display">
            Select Your Industry Sector
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allIndustries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-300 rounded-3xl p-6 border border-[#DCDAD2] hover:border-[#F48695] flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F4F0] flex items-center justify-center border border-black/5 group-hover:scale-105 transition-transform">
                    {getIndustryIcon(ind.slug)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1C1D21]/10 text-[#1C1D21]">
                    {ind.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1D21] font-display mb-2 group-hover:text-[#1C1D21]">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525560] leading-relaxed line-clamp-3">
                    {ind.heroCopy.split('\n')[0]}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#1C1D21]">
                <span>Explore {ind.title} Solutions</span>
                <ChevronRight className="w-4 h-4 text-[#1C1D21] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE UNIFIED CAPABILITIES ACROSS ALL INDUSTRIES
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#1C1D21] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#FF5A60] flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>THE TEAM MONSROW ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-display leading-snug">
              One Unified Decision Engine for Every Financial Product
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              No matter which financial vertical you operate in, Team Monsrow eliminates siloed risk systems by combining identity checks, credit underwriting, fraud monitoring, and compliance into a single modular API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FF5A60]/20 text-[#FF5A60] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h4 className="text-lg font-bold text-white">Instant Onboarding</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                KYC, KYB, document liveness, and sanction screening in under 800 milliseconds.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FF5A60]/20 text-[#FF5A60] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h4 className="text-lg font-bold text-white">Credit Underwriting</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Bureau aggregation, cash flow telemetry, and alternative credit data scoring.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FF5A60]/20 text-[#FF5A60] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h4 className="text-lg font-bold text-white">Fraud Prevention</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Synthetic ID shielding, transaction risk monitoring, and ATO account defense.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FF5A60]/20 text-[#FF5A60] flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h4 className="text-lg font-bold text-white">Compliance Automation</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Perpetual AML screening, automated SAR drafting, and SOC 2 auditable logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SCHEDULE A DEMO CTA
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1D21] font-display">
          Ready to transform decisioning for your industry?
        </h2>
        <p className="text-[#525560] max-w-2xl mx-auto text-base sm:text-lg">
          Talk with our financial industry specialists to see custom workflow demonstrations tailored to your exact regulatory requirements.
        </p>
        <div className="pt-2 flex items-center justify-center gap-4">
          <button
            onClick={() => setDemoOpen(true)}
            className="bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-sm font-extrabold uppercase tracking-wider px-8 py-4 rounded-full flex items-center gap-3 transition-all shadow-md transform hover:scale-105 cursor-pointer"
          >
            <span>SCHEDULE A DEMO</span>
            <span className="text-white">▶</span>
          </button>
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
