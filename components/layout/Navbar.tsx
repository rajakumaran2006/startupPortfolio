'use client';

import React, { useState, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Globe, 
  User, 
  Search, 
  Menu, 
  X, 
  Play, 
  ShieldCheck, 
  Zap, 
  Users, 
  BookOpen, 
  Building2, 
  Sliders, 
  Cpu, 
  Sparkles,
  Database,
  UserCheck,
  FileText,
  Lock,
  Briefcase,
  Volume2,
  VolumeX
} from 'lucide-react';
import { soundFX } from '@/lib/audioFX';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenWorkflow: () => void;
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenDemo, onOpenWorkflow, onOpenSearch }: NavbarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>('platform');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('US');
  const [isMuted, setIsMuted] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menuKey: string) => {
    if (activeMenu === menuKey) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuKey);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-3 px-2 sm:px-4 lg:px-6 bg-[#F5F4F0]">
      {/* Main Floating Navbar Card Container */}
      <div 
        ref={navContainerRef}
        className="max-w-[1440px] mx-auto bg-[#F0EFEA] border border-[#E2E0D8] rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-7 shadow-xl transition-all duration-300 relative"
      >
        {/* Top Navbar Row */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Navigation Links */}
          <div className="flex items-center gap-6 xl:gap-10">
            {/* Alloy Logo */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu ? null : 'platform');
              }}
              className="flex items-center gap-2.5 group cursor-pointer shrink-0"
            >
              {/* Alloy Triangle Logo Icon */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#1C1D21] group-hover:opacity-80 transition-opacity">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0L28 24H0L14 0Z" fill="#1C1D21"/>
                  <path d="M14 6L22 20H6L14 6Z" fill="#F0EFEA"/>
                  <path d="M14 11L18 18H10L14 11Z" fill="#1C1D21"/>
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1C1D21] font-display uppercase">
                TEAM MONSROW
              </span>
            </a>

            {/* Desktop Navigation Link Pills */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-[#1C1D21]">
              <button
                onClick={() => toggleMenu('platform')}
                className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeMenu === 'platform' ? 'font-semibold text-[#1C1D21]' : 'text-gray-800 hover:text-black'
                }`}
              >
                <span>Platform</span>
                {activeMenu === 'platform' ? (
                  <ChevronUp className="w-4 h-4 text-black stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-700 stroke-[2.5]" />
                )}
              </button>

              <button
                onClick={() => toggleMenu('useCases')}
                className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeMenu === 'useCases' ? 'font-semibold text-[#1C1D21]' : 'text-gray-800 hover:text-black'
                }`}
              >
                <span>Use Cases</span>
                {activeMenu === 'useCases' ? (
                  <ChevronUp className="w-4 h-4 text-black stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-700 stroke-[2.5]" />
                )}
              </button>

              <button
                onClick={() => toggleMenu('whoWeWorkWith')}
                className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeMenu === 'whoWeWorkWith' ? 'font-semibold text-[#1C1D21]' : 'text-gray-800 hover:text-black'
                }`}
              >
                <span>Who We Work With</span>
                {activeMenu === 'whoWeWorkWith' ? (
                  <ChevronUp className="w-4 h-4 text-black stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-700 stroke-[2.5]" />
                )}
              </button>

              <button
                onClick={() => toggleMenu('resources')}
                className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeMenu === 'resources' ? 'font-semibold text-[#1C1D21]' : 'text-gray-800 hover:text-black'
                }`}
              >
                <span>Resources</span>
                {activeMenu === 'resources' ? (
                  <ChevronUp className="w-4 h-4 text-black stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-700 stroke-[2.5]" />
                )}
              </button>

              <button
                onClick={() => toggleMenu('aboutUs')}
                className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeMenu === 'aboutUs' ? 'font-semibold text-[#1C1D21]' : 'text-gray-800 hover:text-black'
                }`}
              >
                <span>About Us</span>
                {activeMenu === 'aboutUs' ? (
                  <ChevronUp className="w-4 h-4 text-black stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-700 stroke-[2.5]" />
                )}
              </button>
            </nav>
          </div>

          {/* Right Menu Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1D21] px-2.5 py-2 hover:bg-[#E4E2DC] rounded-full transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4 stroke-[2]" />
                <span>{selectedLang}</span>
                <ChevronDown className="w-3.5 h-3.5 stroke-[2]" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-[#E2E0D8] p-1.5 z-50 text-xs font-medium">
                  {['US', 'UK', 'EU', 'CA'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${
                        selectedLang === lang ? 'font-bold bg-gray-50 text-[#FF5A60]' : 'text-gray-700'
                      }`}
                    >
                      Region: {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Audio Sound Effects FX Toggle */}
            <button
              onClick={() => {
                const nextMuted = !isMuted;
                setIsMuted(nextMuted);
                soundFX.setMuted(nextMuted);
                if (!nextMuted) {
                  soundFX.playClick();
                }
              }}
              className={`w-9 h-9 rounded-full border border-gray-400/80 flex items-center justify-center transition-colors cursor-pointer ${
                isMuted ? 'text-gray-400 bg-gray-200/60' : 'text-[#FF5A60] bg-[#FF5A60]/10 border-[#FF5A60]/40'
              }`}
              title={isMuted ? 'Enable UI Sound Effects' : 'Mute UI Sound Effects'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
            </button>

            {/* Profile User Icon */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-9 h-9 rounded-full border border-gray-400/80 flex items-center justify-center text-[#1C1D21] hover:bg-[#E4E2DC] transition-colors cursor-pointer"
                title="User Account"
              >
                <User className="w-4 h-4 stroke-[2]" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#E2E0D8] p-2 z-50 text-xs">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <div className="font-bold text-gray-900">Demo Organization</div>
                    <div className="text-[11px] text-gray-500">sandbox@monsrow.com</div>
                  </div>
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      onOpenWorkflow();
                    }}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg mt-1 flex items-center justify-between"
                  >
                    <span>Launch Decision Builder</span>
                    <span className="text-[#FF5A60]">▶</span>
                  </button>
                </div>
              )}
            </div>

            {/* Schedule A Demo Primary Pill Button */}
            <button
              onClick={onOpenDemo}
              className="bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full flex items-center gap-2 transition-all shadow-md group cursor-pointer"
            >
              <span>SCHEDULE A DEMO</span>
              <span className="text-white text-[10px]">▶</span>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#1C1D21] hover:bg-[#E4E2DC] rounded-xl transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MEGA MENU CONTAINER - Matches exact screenshot layout */}
        {activeMenu && (
          <div className="mt-8 pt-6 border-t border-[#DCDAD2] animate-in fade-in duration-200">
            
            {/* PLATFORM MEGA MENU */}
            {activeMenu === 'platform' && (
              <div className="space-y-6">
                {/* Header Tag & Description */}
                <div className="space-y-3 max-w-4xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1D21]">
                    <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
                    <span>PLATFORM</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1C1D21] leading-snug tracking-tight font-display">
                    Team Monsrow&apos;s open data ecosystem, orchestration engine, and Actionable AI form a unified platform that gets smarter with every signal and every decision.
                  </h3>
                </div>

                {/* 6 Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
                  
                  {/* Card 1: Actionable AI Suite */}
                  <div 
                    onClick={onOpenWorkflow}
                    className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex items-start justify-between cursor-pointer group"
                  >
                    <div className="space-y-2 pr-2">
                      <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                        <Sparkles className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h4 className="font-bold text-[#1C1D21] text-base leading-snug group-hover:text-black">
                        Actionable AI suite
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed font-normal">
                        Predictive and agentic AI to help your team spend time on what matters most.
                      </p>
                    </div>
                    <span className="text-[#1C1D21] group-hover:translate-x-1 transition-transform pt-1 text-xs">▶</span>
                  </div>

                  {/* Card 2: Continuous fraud management */}
                  <div 
                    onClick={onOpenWorkflow}
                    className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex items-start justify-between cursor-pointer group"
                  >
                    <div className="space-y-2 pr-2">
                      <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                        <ShieldCheck className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h4 className="font-bold text-[#1C1D21] text-base leading-snug group-hover:text-black">
                        Continuous fraud management
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed font-normal">
                        Detect and prevent fraud across the entire customer lifecycle.
                      </p>
                    </div>
                    <span className="text-[#1C1D21] group-hover:translate-x-1 transition-transform pt-1 text-xs">▶</span>
                  </div>

                  {/* Card 3: Customer onboarding */}
                  <div 
                    onClick={onOpenWorkflow}
                    className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex items-start justify-between cursor-pointer group"
                  >
                    <div className="space-y-2 pr-2">
                      <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                        <Users className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h4 className="font-bold text-[#1C1D21] text-base leading-snug group-hover:text-black">
                        Customer onboarding
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed font-normal">
                        Accelerate onboarding with orchestrated identity verification.
                      </p>
                    </div>
                    <span className="text-[#1C1D21] group-hover:translate-x-1 transition-transform pt-1 text-xs">▶</span>
                  </div>

                  {/* Card 4: Data partner ecosystem */}
                  <div 
                    onClick={onOpenWorkflow}
                    className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex items-start justify-between cursor-pointer group"
                  >
                    <div className="space-y-2 pr-2">
                      <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                        <Search className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h4 className="font-bold text-[#1C1D21] text-base leading-snug group-hover:text-black">
                        Data partner ecosystem
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed font-normal">
                        Access 270+ data solutions with a vendor-neutral approach.
                      </p>
                    </div>
                    <span className="text-[#1C1D21] group-hover:translate-x-1 transition-transform pt-1 text-xs">▶</span>
                  </div>

                  {/* Card 5: Identity verification */}
                  <div 
                    onClick={onOpenWorkflow}
                    className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex items-start justify-between cursor-pointer group"
                  >
                    <div className="space-y-2 pr-2">
                      <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                        <UserCheck className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h4 className="font-bold text-[#1C1D21] text-base leading-snug group-hover:text-black">
                        Identity verification
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed font-normal">
                        Verify customer identities with confidence across all touchpoints.
                      </p>
                    </div>
                    <span className="text-[#1C1D21] group-hover:translate-x-1 transition-transform pt-1 text-xs">▶</span>
                  </div>

                  {/* Card 6: Orchestration & decisioning engine */}
                  <div 
                    onClick={onOpenWorkflow}
                    className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex items-start justify-between cursor-pointer group"
                  >
                    <div className="space-y-2 pr-2">
                      <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                        <Database className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h4 className="font-bold text-[#1C1D21] text-base leading-snug group-hover:text-black">
                        Orchestration &amp; decisioning engine
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed font-normal">
                        Route inputs, sequence vendor calls, and manage dependencies.
                      </p>
                    </div>
                    <span className="text-[#1C1D21] group-hover:translate-x-1 transition-transform pt-1 text-xs">▶</span>
                  </div>

                </div>
              </div>
            )}

            {/* USE CASES MEGA MENU */}
            {activeMenu === 'useCases' && (
              <div className="space-y-6">
                <div className="space-y-3 max-w-4xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1D21]">
                    <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
                    <span>USE CASES</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1C1D21] leading-snug tracking-tight font-display">
                    Tailored risk decisioning workflows built for every critical milestone across the customer lifecycle.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {[
                    { title: 'Consumer & Business Onboarding', desc: 'Instant KYC, KYB, CIP & sanction checks with dynamic step-up.', icon: Users },
                    { title: 'Continuous Fraud & ATO Prevention', desc: 'Real-time account takeover and transaction risk scoring.', icon: Zap },
                    { title: 'Credit & Loan Underwriting', desc: 'Alternative data enrichment for credit risk evaluation.', icon: Sliders },
                    { title: 'Compliance & Audit Readiness', desc: 'Perpetual AML monitoring and SOC 2 auditable decision trails.', icon: ShieldCheck }
                  ].map((uc, i) => (
                    <div 
                      key={i}
                      onClick={onOpenWorkflow}
                      className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex flex-col justify-between cursor-pointer group"
                    >
                      <div className="space-y-2">
                        <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                          <uc.icon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <h4 className="font-bold text-[#1C1D21] text-base leading-snug">{uc.title}</h4>
                        <p className="text-xs text-gray-700 leading-relaxed">{uc.desc}</p>
                      </div>
                      <div className="pt-4 flex justify-end text-[#1C1D21] group-hover:translate-x-1 transition-transform text-xs">
                        ▶
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WHO WE WORK WITH MEGA MENU */}
            {activeMenu === 'whoWeWorkWith' && (
              <div className="space-y-6">
                <div className="space-y-3 max-w-4xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1D21]">
                    <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
                    <span>WHO WE WORK WITH</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1C1D21] leading-snug tracking-tight font-display">
                    Trusted by over 600+ leading global banks, credit unions, high-growth fintechs, and Web3 platforms.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {[
                    { title: 'Commercial & Retail Banks', desc: 'Enterprise controls & modern decisioning without legacy friction.', icon: Building2 },
                    { title: 'Fintechs & Neobanks', desc: 'Hyper-scalable onboarding with instant risk verification.', icon: Zap },
                    { title: 'Credit Unions', desc: 'Member trust protection and seamless digital loan applications.', icon: Users },
                    { title: 'Crypto & Web3 Platforms', desc: 'Global sanction screening, Travel Rule compliance, and fiat gateways.', icon: Cpu }
                  ].map((aud, i) => (
                    <div 
                      key={i}
                      onClick={onOpenWorkflow}
                      className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex flex-col justify-between cursor-pointer group"
                    >
                      <div className="space-y-2">
                        <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                          <aud.icon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <h4 className="font-bold text-[#1C1D21] text-base leading-snug">{aud.title}</h4>
                        <p className="text-xs text-gray-700 leading-relaxed">{aud.desc}</p>
                      </div>
                      <div className="pt-4 flex justify-end text-[#1C1D21] group-hover:translate-x-1 transition-transform text-xs">
                        ▶
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RESOURCES MEGA MENU */}
            {activeMenu === 'resources' && (
              <div className="space-y-6">
                <div className="space-y-3 max-w-4xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1D21]">
                    <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
                    <span>RESOURCES</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1C1D21] leading-snug tracking-tight font-display">
                    Explore industry benchmarks, REST API documentation, and real customer case studies.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {[
                    { title: '2026 State of Fraud Report', desc: 'Key benchmarks and threat trends across 900+ fraud teams.', icon: FileText },
                    { title: 'Developer Hub & API Docs', desc: 'REST endpoints, Webhooks, and SDK integration guides.', icon: Cpu },
                    { title: 'Customer Case Studies', desc: 'How leading institutions reduced fraud losses by 40%.', icon: BookOpen },
                    { title: 'Team Monsrow Insights Blog', desc: 'Latest analysis on agentic AI, SAR filings, and AML rules.', icon: Sparkles }
                  ].map((res, i) => (
                    <div 
                      key={i}
                      onClick={onOpenWorkflow}
                      className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex flex-col justify-between cursor-pointer group"
                    >
                      <div className="space-y-2">
                        <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                          <res.icon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <h4 className="font-bold text-[#1C1D21] text-base leading-snug">{res.title}</h4>
                        <p className="text-xs text-gray-700 leading-relaxed">{res.desc}</p>
                      </div>
                      <div className="pt-4 flex justify-end text-[#1C1D21] group-hover:translate-x-1 transition-transform text-xs">
                        ▶
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ABOUT US MEGA MENU */}
            {activeMenu === 'aboutUs' && (
              <div className="space-y-6">
                <div className="space-y-3 max-w-4xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1D21]">
                    <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
                    <span>ABOUT US</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1C1D21] leading-snug tracking-tight font-display">
                    We build the identity decisioning infrastructure that powers trust in financial transactions worldwide.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {[
                    { title: 'Our Mission & Story', desc: 'Eliminating friction and financial fraud through open data orchestration.', icon: Building2 },
                    { title: 'Careers & Culture', desc: 'Join our team of risk architects, engineers, and problem solvers.', icon: Briefcase },
                    { title: 'Security & Compliance', desc: 'SOC 2 Type II, ISO 27001, and enterprise bank-grade security.', icon: Lock }
                  ].map((ab, i) => (
                    <div 
                      key={i}
                      onClick={onOpenWorkflow}
                      className="bg-[#E4E2DC] hover:bg-[#DDDCD4] transition-colors rounded-2xl p-5 border border-[#D5D3CB]/60 flex flex-col justify-between cursor-pointer group"
                    >
                      <div className="space-y-2">
                        <div className="p-2 w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#1C1D21] mb-3">
                          <ab.icon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <h4 className="font-bold text-[#1C1D21] text-base leading-snug">{ab.title}</h4>
                        <p className="text-xs text-gray-700 leading-relaxed">{ab.desc}</p>
                      </div>
                      <div className="pt-4 flex justify-end text-[#1C1D21] group-hover:translate-x-1 transition-transform text-xs">
                        ▶
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#DCDAD2] space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-2">
              {['platform', 'useCases', 'whoWeWorkWith', 'resources', 'aboutUs'].map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveMenu(activeMenu === key ? null : key);
                  }}
                  className={`w-full text-left font-bold text-[#1C1D21] text-base py-2 px-3 rounded-xl flex items-center justify-between ${
                    activeMenu === key ? 'bg-[#E4E2DC]' : 'hover:bg-[#E4E2DC]/50'
                  }`}
                >
                  <span className="capitalize">{key.replace(/([AZ])/g, ' $1')}</span>
                  {activeMenu === key ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-2 border-t border-gray-200">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenWorkflow();
                }}
                className="w-full bg-[#E4E2DC] text-[#1C1D21] text-xs font-bold uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Interactive Decision Builder</span>
              </button>
              
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenDemo();
                }}
                className="w-full bg-[#1C1D21] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2"
              >
                <span>SCHEDULE A DEMO</span>
                <span className="text-white">▶</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

