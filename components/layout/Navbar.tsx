'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  VolumeX,
  Code2,
  Cloud,
  TrendingUp
} from 'lucide-react';
import { soundFX } from '@/lib/audioFX';

export interface ServiceDetail {
  title: string;
  tag: string;
  headline: string;
  description: string;
  subText: string;
}

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenWorkflow: () => void;
  onOpenSearch: () => void;
  onSelectService?: (service: ServiceDetail) => void;
}

export default function Navbar({ onOpenDemo, onOpenWorkflow, onOpenSearch, onSelectService }: NavbarProps) {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when navbar dropdown menu or mobile menu is open
  useEffect(() => {
    const isMenuOpen = activeMenu !== null || mobileOpen;
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle === 'hidden' ? '' : originalStyle;
      };
    }
  }, [activeMenu, mobileOpen]);

  // Close active menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMenu = (menuKey: string) => {
    soundFX.playClick();
    if (activeMenu === menuKey) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuKey);
    }
  };

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay to close menu on outside click and prevent background interaction */}
      {(activeMenu !== null || mobileOpen) && (
        <div 
          onClick={closeMenus}
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] transition-opacity duration-200"
        />
      )}

      <header className="sticky top-0 z-50 w-full pt-1.5 px-2 sm:px-4 lg:px-6 bg-transparent pointer-events-none">
        {/* Main Floating Navbar Card Container */}
        <div 
          ref={navContainerRef}
          className="max-w-[1440px] mx-auto bg-[#F0EFEA] border border-[#E2E0D8] rounded-[18px] sm:rounded-[24px] p-2 sm:p-3 lg:p-3.5 shadow-xl transition-all duration-300 relative z-50 pointer-events-auto"
        >
          {/* Top Navbar Row */}
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Navigation Links */}
            <div className="flex items-center gap-6 xl:gap-10">
              {/* Alloy Logo */}
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  closeMenus();
                  router.push('/');
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
              <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-[#1C1D21]">
                <button
                  onClick={() => toggleMenu('platform')}
                  className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                    activeMenu === 'platform' ? 'font-semibold text-[#1C1D21]' : 'text-gray-800 hover:text-black'
                  }`}
                >
                  <span>What We Do</span>
                  {activeMenu === 'platform' ? (
                    <ChevronUp className="w-4 h-4 text-black stroke-[2.5]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-700 stroke-[2.5]" />
                  )}
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    closeMenus();
                    router.push('/careers');
                  }}
                  className="py-1 px-2.5 rounded-lg transition-colors cursor-pointer text-gray-800 hover:text-black font-medium"
                >
                  <span>Careers</span>
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    closeMenus();
                    router.push('/about');
                  }}
                  className="py-1 px-2.5 rounded-lg transition-colors cursor-pointer text-gray-800 hover:text-black font-medium"
                >
                  <span>About Us</span>
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    closeMenus();
                    router.push('/contact');
                  }}
                  className="py-1.5 px-3.5 rounded-full bg-[#1C1D21] text-white hover:bg-[#333] transition-all cursor-pointer text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow"
                >
                  <span>Contact Us</span>
                </button>
              </nav>
            </div>

            {/* Right Menu Controls */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Sleek Sound FX Audio Control Pill Button */}
              <button
                onClick={() => {
                  const nextMuted = !isMuted;
                  setIsMuted(nextMuted);
                  soundFX.setMuted(nextMuted);
                  if (!nextMuted) {
                    soundFX.playClick();
                  }
                }}
                className={`flex items-center gap-2 text-xs font-bold px-3.5 py-2.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                  isMuted
                    ? 'text-gray-500 bg-gray-200/80 border-gray-300 hover:bg-gray-300/80'
                    : 'text-[#1C1D21] bg-[#E4E2DC] border-gray-300 hover:bg-[#DDDCD4]'
                }`}
                title={isMuted ? 'Enable UI Sound Effects' : 'Mute UI Sound Effects'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-gray-500" />
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-[#FF5A60] animate-pulse" />
                  </>
                )}
              </button>

              {/* Schedule A Demo Primary Pill Button */}
              <button
                onClick={() => {
                  closeMenus();
                  onOpenDemo();
                }}
                className="bg-[#1C1D21] hover:bg-[#FF5A60] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-md transform hover:scale-105 group cursor-pointer"
              >
                <span>SCHEDULE A DEMO</span>
                <span className="text-white text-xs font-bold">▶</span>
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
            <div className="mt-8 pt-6 border-t border-[#DCDAD2] animate-in fade-in duration-200 max-h-[calc(100vh-140px)] overflow-y-auto pr-1">
              
              {/* PLATFORM MEGA MENU */}
              {activeMenu === 'platform' && (
                <div className="space-y-6">
                  {/* Header Tag & Description */}
                  <div className="space-y-3 max-w-4xl">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1D21]">
                      <span className="w-2 h-2 rounded-full bg-[#1C1D21]" />
                      <span>All Services</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1C1D21] leading-snug tracking-tight font-display">
                      Team Monsrow&apos;s open data ecosystem, orchestration engine, and Actionable AI form a unified platform that gets smarter with every signal and every decision.
                    </h3>
                  </div>

                  {/* 6 Grid Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
                    
                    {/* Card 1: Software Development */}
                    <div 
                      onClick={() => {
                        closeMenus();
                        router.push('/service/software-development');
                      }}
                      className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-200 rounded-2xl p-4.5 sm:p-5 border border-transparent hover:border-[#F48695]/60 flex items-start justify-between cursor-pointer group"
                    >
                      <div className="flex items-start gap-4 pr-2">
                        <Code2 className="w-6 h-6 stroke-[1.8] text-[#1C1D21] shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h4 className="font-bold text-[#1C1D21] text-sm sm:text-base leading-snug">
                            Software Development
                          </h4>
                          <p className="text-xs text-[#525560] leading-relaxed font-normal">
                            Build websites, apps, SaaS, and custom enterprise software.
                          </p>
                        </div>
                      </div>
                      <span className="text-[#1C1D21]/60 group-hover:text-[#1C1D21] group-hover:translate-x-1 transition-all pt-1 text-[10px] shrink-0">▶</span>
                    </div>

                    {/* Card 2: Business Solutions */}
                    <div 
                      onClick={() => {
                        closeMenus();
                        router.push('/service/business-solutions');
                      }}
                      className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-200 rounded-2xl p-4.5 sm:p-5 border border-transparent hover:border-[#F48695]/60 flex items-start justify-between cursor-pointer group"
                    >
                      <div className="flex items-start gap-4 pr-2">
                        <Briefcase className="w-6 h-6 stroke-[1.8] text-[#1C1D21] shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h4 className="font-bold text-[#1C1D21] text-sm sm:text-base leading-snug">
                            Business Solutions
                          </h4>
                          <p className="text-xs text-[#525560] leading-relaxed font-normal">
                            Simplify operations with ERP, CRM, HRMS, and industry platforms.
                          </p>
                        </div>
                      </div>
                      <span className="text-[#1C1D21]/60 group-hover:text-[#1C1D21] group-hover:translate-x-1 transition-all pt-1 text-[10px] shrink-0">▶</span>
                    </div>

                    {/* Card 3: Artificial Intelligence */}
                    <div 
                      onClick={() => {
                        closeMenus();
                        router.push('/service/artificial-intelligence');
                      }}
                      className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-200 rounded-2xl p-4.5 sm:p-5 border border-transparent hover:border-[#F48695]/60 flex items-start justify-between cursor-pointer group"
                    >
                      <div className="flex items-start gap-4 pr-2">
                        <Sparkles className="w-6 h-6 stroke-[1.8] text-[#1C1D21] shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h4 className="font-bold text-[#1C1D21] text-sm sm:text-base leading-snug">
                            Artificial Intelligence
                          </h4>
                          <p className="text-xs text-[#525560] leading-relaxed font-normal">
                            Transform businesses with AI, automation, and machine learning.
                          </p>
                        </div>
                      </div>
                      <span className="text-[#1C1D21]/60 group-hover:text-[#1C1D21] group-hover:translate-x-1 transition-all pt-1 text-[10px] shrink-0">▶</span>
                    </div>

                    {/* Card 4: Factory & IoT */}
                    <div 
                      onClick={() => {
                        closeMenus();
                        router.push('/service/factory-iot');
                      }}
                      className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-200 rounded-2xl p-4.5 sm:p-5 border border-transparent hover:border-[#F48695]/60 flex items-start justify-between cursor-pointer group"
                    >
                      <div className="flex items-start gap-4 pr-2">
                        <Cpu className="w-6 h-6 stroke-[1.8] text-[#1C1D21] shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h4 className="font-bold text-[#1C1D21] text-sm sm:text-base leading-snug">
                            Factory &amp; IoT
                          </h4>
                          <p className="text-xs text-[#525560] leading-relaxed font-normal">
                            Connect factories with automation, IoT, and smart monitoring.
                          </p>
                        </div>
                      </div>
                      <span className="text-[#1C1D21]/60 group-hover:text-[#1C1D21] group-hover:translate-x-1 transition-all pt-1 text-[10px] shrink-0">▶</span>
                    </div>

                    {/* Card 5: Cloud & Infrastructure */}
                    <div 
                      onClick={() => {
                        closeMenus();
                        router.push('/service/cloud-infrastructure');
                      }}
                      className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-200 rounded-2xl p-4.5 sm:p-5 border border-transparent hover:border-[#F48695]/60 flex items-start justify-between cursor-pointer group"
                    >
                      <div className="flex items-start gap-4 pr-2">
                        <Cloud className="w-6 h-6 stroke-[1.8] text-[#1C1D21] shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h4 className="font-bold text-[#1C1D21] text-sm sm:text-base leading-snug">
                            Cloud &amp; Infrastructure
                          </h4>
                          <p className="text-xs text-[#525560] leading-relaxed font-normal">
                            Deploy secure cloud platforms, APIs, and scalable infrastructure.
                          </p>
                        </div>
                      </div>
                      <span className="text-[#1C1D21]/60 group-hover:text-[#1C1D21] group-hover:translate-x-1 transition-all pt-1 text-[10px] shrink-0">▶</span>
                    </div>

                    {/* Card 6: Digital Marketing */}
                    <div 
                      onClick={() => {
                        closeMenus();
                        router.push('/service/digital-marketing');
                      }}
                      className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-200 rounded-2xl p-4.5 sm:p-5 border border-transparent hover:border-[#F48695]/60 flex items-start justify-between cursor-pointer group"
                    >
                      <div className="flex items-start gap-4 pr-2">
                        <TrendingUp className="w-6 h-6 stroke-[1.8] text-[#1C1D21] shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h4 className="font-bold text-[#1C1D21] text-sm sm:text-base leading-snug">
                            Digital Marketing
                          </h4>
                          <p className="text-xs text-[#525560] leading-relaxed font-normal">
                            Grow your business through SEO, advertising, and lead generation.
                          </p>
                        </div>
                      </div>
                      <span className="text-[#1C1D21]/60 group-hover:text-[#1C1D21] group-hover:translate-x-1 transition-all pt-1 text-[10px] shrink-0">▶</span>
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
                        onClick={() => { closeMenus(); onOpenWorkflow(); }}
                        className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-200 rounded-2xl p-4.5 border border-transparent hover:border-[#F48695]/60 flex items-start justify-between cursor-pointer group"
                      >
                        <div className="flex items-start gap-3.5 pr-2">
                          <uc.icon className="w-6 h-6 stroke-[1.8] text-[#1C1D21] shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <h4 className="font-bold text-[#1C1D21] text-sm leading-snug">{uc.title}</h4>
                            <p className="text-xs text-[#525560] leading-relaxed">{uc.desc}</p>
                          </div>
                        </div>
                        <span className="text-[#1C1D21]/60 group-hover:text-[#1C1D21] group-hover:translate-x-1 transition-all pt-1 text-[10px] shrink-0">▶</span>
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
                        onClick={() => { closeMenus(); onOpenWorkflow(); }}
                        className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-200 rounded-2xl p-4.5 border border-transparent hover:border-[#F48695]/60 flex items-start justify-between cursor-pointer group"
                      >
                        <div className="flex items-start gap-3.5 pr-2">
                          <aud.icon className="w-6 h-6 stroke-[1.8] text-[#1C1D21] shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <h4 className="font-bold text-[#1C1D21] text-sm leading-snug">{aud.title}</h4>
                            <p className="text-xs text-[#525560] leading-relaxed">{aud.desc}</p>
                          </div>
                        </div>
                        <span className="text-[#1C1D21]/60 group-hover:text-[#1C1D21] group-hover:translate-x-1 transition-all pt-1 text-[10px] shrink-0">▶</span>
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
                        onClick={() => { closeMenus(); onOpenWorkflow(); }}
                        className="bg-[#EBE9E4] hover:bg-[#F89DA9] transition-all duration-200 rounded-2xl p-4.5 border border-transparent hover:border-[#F48695]/60 flex items-start justify-between cursor-pointer group"
                      >
                        <div className="flex items-start gap-3.5 pr-2">
                          <res.icon className="w-6 h-6 stroke-[1.8] text-[#1C1D21] shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <h4 className="font-bold text-[#1C1D21] text-sm leading-snug">{res.title}</h4>
                            <p className="text-xs text-[#525560] leading-relaxed">{res.desc}</p>
                          </div>
                        </div>
                        <span className="text-[#1C1D21]/60 group-hover:text-[#1C1D21] group-hover:translate-x-1 transition-all pt-1 text-[10px] shrink-0">▶</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}



            </div>
          )}

          {/* Mobile Navigation Drawer */}
          {mobileOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-[#DCDAD2] space-y-4 animate-in slide-in-from-top duration-200 max-h-[calc(100vh-120px)] overflow-y-auto">
              <div className="space-y-2">
                {['platform', 'useCases', 'whoWeWorkWith'].map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveMenu(activeMenu === key ? null : key);
                    }}
                    className={`w-full text-left font-bold text-[#1C1D21] text-base py-2 px-3 rounded-xl flex items-center justify-between ${
                      activeMenu === key ? 'bg-[#E4E2DC]' : 'hover:bg-[#E4E2DC]/50'
                    }`}
                  >
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    {activeMenu === key ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                ))}
                <button
                  onClick={() => {
                    closeMenus();
                    router.push('/about');
                  }}
                  className="w-full text-left font-bold text-[#1C1D21] text-base py-2 px-3 rounded-xl block hover:bg-[#E4E2DC]/50 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </div>

              <div className="pt-2 space-y-2 border-t border-gray-200">
                <button
                  onClick={() => {
                    closeMenus();
                    onOpenWorkflow();
                  }}
                  className="w-full bg-[#E4E2DC] text-[#1C1D21] text-xs font-bold uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Interactive Decision Builder</span>
                </button>
                
                <button
                  onClick={() => {
                    closeMenus();
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
    </>
  );
}

