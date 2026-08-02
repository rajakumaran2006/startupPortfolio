'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/layout';
import { AboutHero, AboutSectionTwo, TrustedProviders } from '@/components/sections';
import { ScheduleDemoModal, InteractiveWorkflowModal, SearchModal } from '@/components/modals';
import { CustomCursor, TargetCursor } from '@/components/ui';
import { Play, ArrowRight, Linkedin, Twitter, Github, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const partnerLogos = [
    'Socure', 'experian', 'Plaid', 'ComplyAdvantage', 'Sift',
    'TRULIOO', 'LexisNexis', 'CLEAR', 'PERSONA', 'Sentrink'
  ];

  const investors = [
    'BESSEMER VENTURES', 'CANAPI VENTURES', 'LIGHTSPEED',
    'A16Z', 'FELICIS', 'AVALANCHE', 'INDEX VENTURES'
  ];

  const leadershipTeam = [
    {
      name: 'Vivin M',
      title: 'Founder & CEO',
      img: '/assets/founder-ceo.png',
      hasImage: true,
    },
    {
      name: 'Vishal M',
      title: 'AI Developer',
      hasImage: false,
    },
    {
      name: 'Najla Fathima A',
      title: 'Software Developer',
      hasImage: false,
    },
    {
      name: 'Rajakumaran P',
      title: 'Software Developer',
      hasImage: false,
    },
  ];

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
          SECTION 1: HERO SECTION (Matches Reference Screenshot)
         ========================================================================= */}
      <AboutHero />

      {/* =========================================================================
          SECTION 2: SPLIT STATEMENT & YELLOW BANNER (Matches Reference Screenshot)
         ========================================================================= */}
      <AboutSectionTwo />

      {/* =========================================================================
          SECTION 3: TRUSTED BY HUNDREDS OF FINANCIAL SERVICES (Matches Reference Screenshot)
         ========================================================================= */}
      <TrustedProviders />

      {/* =========================================================================
          SECTION 4: CUSTOMER QUOTE BANNER (Light Blue/Grey) (Matches Screenshot)
         ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#D2DCE6] text-[#1C1D21] rounded-3xl p-8 sm:p-12 border border-black/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-black/10 pb-6 lg:pb-0 lg:pr-8">
            <span className="text-2xl font-black font-display tracking-tight uppercase">
              Lightyear
            </span>
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              CEO &amp; Founder, Lightyear
            </p>
          </div>

          <div className="lg:col-span-8">
            <blockquote className="text-base sm:text-xl font-normal leading-relaxed font-display text-[#1C1D21]">
              &quot;Team Monsrow&apos;s unified engineering platform allowed us to scale our software footprint 5x without increasing operational overhead. The speed, flexibility, and reliability of their solutions have been transformational for our business.&quot;
            </blockquote>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: VIDEO / PLATFORM DEMO CONTAINER (Matches Screenshot)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-medium font-display text-[#1C1D21] leading-tight">
              Team Monsrow delivers enterprise custom software, cloud infrastructure, and AI engineering to help modern businesses innovate faster.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="relative bg-[#1C1D21] rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl border border-gray-800 text-white min-h-[320px] flex items-center justify-center cursor-pointer group"
                 onClick={() => setWorkflowOpen(true)}>
              
              {/* Decorative Pipeline Graphic */}
              <div className="absolute inset-0  pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 500 300" fill="none">
                  <path d="M 50 150 H 200 V 50 H 450" stroke="#FF5A60" strokeWidth="8" />
                  <path d="M 50 150 H 200 V 250 H 450" stroke="#FACC15" strokeWidth="8" />
                  <path d="M 100 150 H 450" stroke="#3B82F6" strokeWidth="8" />
                </svg>
              </div>


            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ABOUT TEAM MONSROW (NARRATIVE STORY) (Matches Screenshot)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E0D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-medium font-display text-[#1C1D21]">
              About Team Monsrow
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-xs sm:text-sm text-[#4A4D57] leading-relaxed font-normal">
            <p>
              Team Monsrow was founded to eliminate the friction and fragmentation in modern enterprise software, cloud infrastructure, and AI engineering. As digital applications become increasingly complex, businesses need unified platforms that scale without breaking.
            </p>
            <p>
              We combine deep software architecture, real-time data pipelines, and agentic AI models to empower businesses to innovate at scale without compromising security or controls. Today, Team Monsrow powers mission-critical operations for leading fintechs, global banks, and enterprise innovators worldwide.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setDemoOpen(true)}
                className="text-xs font-bold text-[#1C1D21] hover:text-[#FF5A60] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>▶ Read our story</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: MEET OUR LEADERSHIP TEAM (Matches Screenshot Grid)
         ========================================================================= */}
      {/* =========================================================================
          SECTION 8: MEET OUR LEADERSHIP TEAM
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E0D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-medium font-display text-[#1C1D21]">
              Meet our leadership team
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Building the future of software, cloud, and enterprise AI.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {/* Founder & CEO Card (With Photo) */}
            {leadershipTeam.filter(m => m.hasImage).map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E0D8] shadow-xs grid grid-cols-1 sm:grid-cols-12 gap-6 items-center group">
                <div className="sm:col-span-5 relative aspect-4/5 rounded-2xl overflow-hidden bg-gray-200 border border-black/5 shadow-xs">
                  <Image
                    src={member.img!}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="sm:col-span-7 space-y-3">
                  <span className="inline-block px-3 py-1 bg-[#FF5A60] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                    FOUNDER &amp; CEO
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[#1C1D21]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-normal">
                    {member.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    Leading Team Monsrow's strategic vision, enterprise software innovations, and AI engineering operations worldwide.
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-gray-600">
                    <a href="#" className="w-8 h-8 rounded-full bg-[#F5F4F0] flex items-center justify-center hover:bg-[#FF5A60] hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-[#F5F4F0] flex items-center justify-center hover:bg-[#FF5A60] hover:text-white transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-[#F5F4F0] flex items-center justify-center hover:bg-[#FF5A60] hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Other Leadership Team Members (Text-Only Cards - No Images) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {leadershipTeam.filter(m => !m.hasImage).map((member, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-[#E2E0D8] shadow-2xs hover:border-black/30 transition-all flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-bold text-base text-[#1C1D21]">
                      {member.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-normal mt-1">
                      {member.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-gray-400 border-t border-gray-100">
                    <a href="#" className="hover:text-[#FF5A60] transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a href="#" className="hover:text-[#FF5A60] transition-colors">
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                    <a href="#" className="hover:text-[#FF5A60] transition-colors">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  

      {/* =========================================================================
          SECTION 10: COMPANY HIGHLIGHTS & PILLARS (Replaces news with useful content)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E0D8]">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1D21]">
              <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
              <span>STARTUP HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium font-display text-[#1C1D21]">
              Why startups &amp; enterprises partner with Team Monsrow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Agile Speed (Dark Blue) */}
            <div className="bg-[#2B3A82] text-white rounded-2xl p-7 flex flex-col justify-between min-h-[260px] shadow-md">
              <div className="space-y-6">
                <span className="font-black text-xl tracking-wider uppercase font-display">AGILE SPEED</span>
                <h3 className="text-lg font-medium leading-snug">
                  Rapid development cycles engineered for fast-moving startups and high-growth teams
                </h3>
              </div>
              <div className="pt-6">
                <a href="#contact" className="text-xs font-bold inline-flex items-center gap-1 hover:underline">
                  <span>▶ Learn our approach</span>
                </a>
              </div>
            </div>

            {/* Card 2: Founder Driven (Light Blue) */}
            <div className="bg-[#B6D2E8] text-[#1C1D21] rounded-2xl p-7 flex flex-col justify-between min-h-[260px] shadow-md">
              <div className="space-y-6">
                <span className="font-black text-xl tracking-wider uppercase font-display">HANDS-ON LEADS</span>
                <h3 className="text-lg font-medium leading-snug">
                  Direct collaboration with senior tech architects and dedicated engineering leads
                </h3>
              </div>
              <div className="pt-6">
                <a href="/careers" className="text-xs font-bold inline-flex items-center gap-1 hover:underline">
                  <span>▶ Explore leadership</span>
                </a>
              </div>
            </div>

            {/* Card 3: AI & Cloud Integration (Medium Blue) */}
            <div className="bg-[#6B8CD5] text-white rounded-2xl p-7 flex flex-col justify-between min-h-[260px] shadow-md">
              <div className="space-y-6">
                <span className="font-black text-xl tracking-wider uppercase font-display">AI INTEGRATION</span>
                <h3 className="text-lg font-medium leading-snug">
                  Custom AI models and cloud architecture built to scale seamlessly as you expand
                </h3>
              </div>
              <div className="pt-6">
                <a href="/industries" className="text-xs font-bold inline-flex items-center gap-1 hover:underline">
                  <span>▶ Explore solutions</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

     

      {/* =========================================================================
          SECTION 12: SEE WHAT YOU CAN BUILD CONTACT FORM (Matches Screenshot)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E0D8]">
        <div className="bg-[#1C1D21] text-white rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-medium font-display leading-tight">
              See what you can build
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              Connect with our senior engineering team to discuss your project requirements, schedule a live architecture walkthrough, or request a custom proposal.
            </p>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white text-[#1C1D21] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-xl font-bold font-display">Thank you!</h3>
                <p className="text-xs text-gray-600">Our engineering team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">First Name *</label>
                    <input required type="text" className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Last Name *</label>
                    <input required type="text" className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Work Email *</label>
                    <input required type="email" className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Company Name *</label>
                    <input required type="text" className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Industry</label>
                    <input type="text" className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Job Title</label>
                    <input type="text" className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">How can we help you? *</label>
                  <textarea required rows={3} className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black" />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-[#FF5A60] hover:bg-[#E0484E] text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <span>SUBMIT</span>
                    <span className="text-xs">▶</span>
                  </button>
                </div>
              </form>
            )}
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
