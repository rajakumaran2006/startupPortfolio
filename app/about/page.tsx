'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/layout';
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

  const clientLogosRow1 = ['ally', 'b7', 'Bancorp', 'CFI', 'crossriver', 'AMEX'];
  const clientLogosRow2 = ['Fifth Third', 'FIRST BANK', 'flex', 'm1', 'Mercury', 'MORGAN STANLEY'];
  const clientLogosRow3 = ['citi', 'Prudential', 'SYNCHRONY', 'VALLEY', 'vanguard', 'SOCIETE GENERALE'];

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
      name: 'Raja Kumaran',
      title: 'CEO & Co-Founder',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Laura Miller',
      title: 'CTO & Co-Founder',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Tommy Nicholas',
      title: 'Chief Product Officer',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Charles Potts',
      title: 'Chief Risk Officer',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Jane Doe',
      title: 'VP of Engineering',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sarah Smith',
      title: 'VP of AI & Data Science',
      img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
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
          SECTION 1: HERO SECTION (Matches Screenshot Top Hero Split)
         ========================================================================= */}
      <section className="pt-4 sm:pt-6 lg:pt-7 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left White Hero Box */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#E2E0D8] shadow-xs flex flex-col justify-between min-h-[360px]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1D21]">
                <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
                <span>COMPANY</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-display text-[#1C1D21] leading-tight tracking-tight">
                Team Monsrow is an end-to-end technology solutions company across software, hardware, AI, cloud, and digital marketing
              </h1>
            </div>

            <p className="text-xs text-gray-500 font-normal pt-6">
              Building the global standard for software engineering &amp; enterprise decisioning.
            </p>
          </div>

          {/* Right Coral Red Hero Box with Perspective Graphics */}
          <div className="bg-[#FF5A60] rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between text-[#1C1D21] min-h-[360px] border border-white/20">
            <div className="relative z-10">
              <div className="bg-[#C7383E] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider inline-block">
                ▲ UNIFIED ENGINEERING
              </div>
            </div>

            {/* Geometric Perspective Graphics matching screenshot */}
            <div className="absolute right-0 top-0 bottom-0 w-3/4 pointer-events-none opacity-40 overflow-hidden">
              <svg className="w-full h-full text-black" viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M 150 0 L 300 150 L 150 300 L 0 150 Z" />
                <path d="M 180 30 L 300 150 L 180 270 L 60 150 Z" />
                <path d="M 210 60 L 300 150 L 210 240 L 120 150 Z" />
                <line x1="150" y1="0" x2="150" y2="300" />
                <line x1="0" y1="150" x2="300" y2="150" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SPLIT STATEMENT & YELLOW BANNER (Matches Screenshot)
         ========================================================================= */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left White Quote Box */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E0D8] shadow-xs flex flex-col justify-between space-y-4">
            <p className="text-xs sm:text-sm text-[#1C1D21] leading-relaxed">
              Businesses must continuously innovate while giving customers a seamless digital experience. Team Monsrow makes it possible by bringing custom software, hardware IoT, AI automation, cloud systems, and digital marketing under one unified roof.
            </p>
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
              — TEAM MONSROW LEADERSHIP
            </span>
          </div>

          {/* Right Yellow Banner Box */}
          <div className="bg-[#FACC15] text-[#1C1D21] rounded-2xl p-6 sm:p-8 flex items-center justify-center font-bold text-xl sm:text-2xl font-display leading-snug tracking-tight border border-black/5">
            With a unified platform for software engineering, identity, decisions, and enterprise AI.
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TRUSTED BY HUNDREDS OF FINANCIAL SERVICES (Matches Screenshot)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E2E0D8]">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-medium font-display text-[#1C1D21]">
            Trusted by hundreds of financial services &amp; tech innovators
          </h2>

          <div className="space-y-3">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {clientLogosRow1.map((logo, idx) => (
                <span
                  key={idx}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border border-black/5 ${
                    idx % 2 === 0 ? 'bg-[#F8BAC0] text-[#1C1D21]' : 'bg-[#EBE9E4] text-[#1C1D21]'
                  }`}
                >
                  {logo}
                </span>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {clientLogosRow2.map((logo, idx) => (
                <span
                  key={idx}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border border-black/5 ${
                    idx % 3 === 0 ? 'bg-[#FF5A60] text-white' : 'bg-[#EBE9E4] text-[#1C1D21]'
                  }`}
                >
                  {logo}
                </span>
              ))}
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {clientLogosRow3.map((logo, idx) => (
                <span
                  key={idx}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border border-black/5 ${
                    idx % 2 === 1 ? 'bg-[#F8BAC0] text-[#1C1D21]' : 'bg-[#EBE9E4] text-[#1C1D21]'
                  }`}
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

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
          SECTION 5: OUR PARTNERS (Matches Screenshot)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E2E0D8]">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium font-display text-[#1C1D21]">
              Our partners
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Team Monsrow integrates with top-tier technology and data solutions globally.
            </p>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {partnerLogos.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl py-4 px-5 text-center border border-[#E2E0D8] font-bold text-xs sm:text-sm tracking-wider uppercase text-[#1C1D21] shadow-2xs hover:border-black transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => setWorkflowOpen(true)}
              className="text-xs font-bold text-[#1C1D21] hover:text-[#FF5A60] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>▶ View all partners</span>
            </button>
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
              Alloy uses data orchestration to help fraud and risk command teams make smarter decisions.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="relative bg-[#1C1D21] rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl border border-gray-800 text-white min-h-[320px] flex items-center justify-center cursor-pointer group"
                 onClick={() => setWorkflowOpen(true)}>
              
              {/* Decorative Pipeline Graphic */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 500 300" fill="none">
                  <path d="M 50 150 H 200 V 50 H 450" stroke="#FF5A60" strokeWidth="8" />
                  <path d="M 50 150 H 200 V 250 H 450" stroke="#FACC15" strokeWidth="8" />
                  <path d="M 100 150 H 450" stroke="#3B82F6" strokeWidth="8" />
                </svg>
              </div>

              {/* Play Button Overlay */}
              <div className="relative z-10 flex items-center gap-4 bg-black/60 backdrop-blur-md px-6 py-4 rounded-full border border-white/20 group-hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-full bg-[#FF5A60] flex items-center justify-center text-white">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
                <span className="text-sm font-bold tracking-wider uppercase">WATCH PLATFORM DEMO</span>
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
              About Alloy
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E0D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-medium font-display text-[#1C1D21]">
              Meet our leadership team
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Building the future of software, cloud, and enterprise AI.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setDemoOpen(true)}
                className="text-xs font-bold text-[#1C1D21] hover:text-[#FF5A60] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>▶ Meet the whole team</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {leadershipTeam.map((member, idx) => (
                <div key={idx} className="space-y-3 group">
                  <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-gray-200 border border-black/5 shadow-xs">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#1C1D21]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-normal mt-0.5">
                      {member.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-gray-600">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: OUR INVESTORS (Matches Screenshot)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E0D8]">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium font-display text-[#1C1D21]">
              Our investors
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Backed by leading venture capital firms and strategic technology partners.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {investors.map((investor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-full px-6 py-3 border border-[#E2E0D8] text-xs font-extrabold uppercase tracking-wider text-[#1C1D21] shadow-2xs"
              >
                {investor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: TEAM MONSROW IN THE NEWS (Matches Screenshot 3 Cards)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E0D8]">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1D21]">
              <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
              <span>PRESS &amp; MEDIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium font-display text-[#1C1D21]">
              Alloy in the news
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Forbes (Dark Blue) */}
            <div className="bg-[#2B3A82] text-white rounded-2xl p-7 flex flex-col justify-between min-h-[260px] shadow-md">
              <div className="space-y-6">
                <span className="font-black text-xl tracking-wider uppercase font-display">FORBES</span>
                <h3 className="text-lg font-medium leading-snug">
                  Team Monsrow Named to Forbes Fintech 50 List of Top Innovators
                </h3>
              </div>
              <div className="pt-6">
                <a href="#" className="text-xs font-bold inline-flex items-center gap-1 hover:underline">
                  <span>▶ Read story</span>
                </a>
              </div>
            </div>

            {/* Card 2: NYT (Light Blue) */}
            <div className="bg-[#B6D2E8] text-[#1C1D21] rounded-2xl p-7 flex flex-col justify-between min-h-[260px] shadow-md">
              <div className="space-y-6">
                <span className="font-black text-xl tracking-wider uppercase font-display">N.Y. TIMES</span>
                <h3 className="text-lg font-medium leading-snug">
                  How Team Monsrow is Building the Future of Enterprise AI Decisioning
                </h3>
              </div>
              <div className="pt-6">
                <a href="#" className="text-xs font-bold inline-flex items-center gap-1 hover:underline">
                  <span>▶ Read story</span>
                </a>
              </div>
            </div>

            {/* Card 3: TechCrunch (Medium Blue) */}
            <div className="bg-[#6B8CD5] text-white rounded-2xl p-7 flex flex-col justify-between min-h-[260px] shadow-md">
              <div className="space-y-6">
                <span className="font-black text-xl tracking-wider uppercase font-display">TECHCRUNCH</span>
                <h3 className="text-lg font-medium leading-snug">
                  Team Monsrow Raises $100M to Scale Global Engineering &amp; AI Platform
                </h3>
              </div>
              <div className="pt-6">
                <a href="#" className="text-xs font-bold inline-flex items-center gap-1 hover:underline">
                  <span>▶ Read story</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: DIVERSITY & COMMUNITY CULTURE BANNER (Matches Screenshot)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E0D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Coral Red Culture Card */}
          <div className="lg:col-span-5 bg-[#FF5A60] text-[#1C1D21] rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
            <h2 className="text-2xl sm:text-4xl font-medium font-display leading-tight">
              Our pair-programming &amp; engineering culture is built on diversity and community
            </h2>
            <p className="text-xs sm:text-sm text-[#1C1D21]/85 leading-relaxed font-normal">
              We believe that building world-class software requires diverse perspectives, open collaboration, and continuous learning.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setDemoOpen(true)}
                className="text-xs font-bold text-[#1C1D21] underline hover:no-underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>▶ Learn about our culture</span>
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-7">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-xl border border-black/10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team Monsrow Community Culture"
                fill
                className="object-cover"
              />
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
