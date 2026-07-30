'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Fingerprint, 
  Check, 
  X, 
  Edit3, 
  Info, 
  Zap, 
  Shield, 
  Activity, 
  ChevronRight,
  Sparkles,
  Search,
  CheckCircle2
} from 'lucide-react';

import { soundFX } from '@/lib/audioFX';

interface RiskManagementTabsProps {
  onOpenDemo: () => void;
  onOpenWorkflow: () => void;
}

export default function RiskManagementTabs({ onOpenDemo, onOpenWorkflow }: RiskManagementTabsProps) {
  const [activeTab, setActiveTab] = useState<'onboarding' | 'fraud' | 'compliance'>('onboarding');

  const onboardingRef = useRef<HTMLDivElement>(null);
  const fraudRef = useRef<HTMLDivElement>(null);
  const complianceRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll-linked active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.3,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'section-onboarding') {
            setActiveTab((prev) => {
              if (prev !== 'onboarding') soundFX.playLand();
              return 'onboarding';
            });
          } else if (entry.target.id === 'section-fraud') {
            setActiveTab((prev) => {
              if (prev !== 'fraud') soundFX.playLand();
              return 'fraud';
            });
          } else if (entry.target.id === 'section-compliance') {
            setActiveTab((prev) => {
              if (prev !== 'compliance') soundFX.playLand();
              return 'compliance';
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (onboardingRef.current) observer.observe(onboardingRef.current);
    if (fraudRef.current) observer.observe(fraudRef.current);
    if (complianceRef.current) observer.observe(complianceRef.current);

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tabId: 'onboarding' | 'fraud' | 'compliance') => {
    soundFX.playSwitch();
    setActiveTab(tabId);
    let targetRef: React.RefObject<HTMLDivElement | null> | null = null;
    if (tabId === 'onboarding') targetRef = onboardingRef;
    if (tabId === 'fraud') targetRef = fraudRef;
    if (tabId === 'compliance') targetRef = complianceRef;

    if (targetRef && targetRef.current) {
      const topOffset = targetRef.current.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  // Timeline Progress Bar Colors and Widths based on Active Tab
  const getProgressStyles = () => {
    switch (activeTab) {
      case 'onboarding':
        return { width: '33.3%', color: '#3B82F6' }; // Blue (Image 1)
      case 'fraud':
        return { width: '66.6%', color: '#FF5A60' }; // Coral Red (Image 2)
      case 'compliance':
        return { width: '100%', color: '#EAB308' }; // Gold/Yellow (Image 3)
      default:
        return { width: '33.3%', color: '#3B82F6' };
    }
  };

  const progress = getProgressStyles();

  return (
    <section id="platform-section" className="bg-[#ECEBE6] text-[#1C1D21] py-16 sm:py-24 border-b border-[#E2E0D8] relative">
      {/* Background Muted Geometric Pattern on the right edge matching Image 1 */}
      <div className="absolute top-12 right-4 sm:right-12 pointer-events-none opacity-40 select-none hidden lg:block">
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div className="w-4 h-4 bg-gray-300/60 rounded-xs" />
          <div className="w-4 h-4 rounded-full border-2 border-gray-300/80" />
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-gray-400/60" />
          <div className="w-4 h-4 bg-gray-400/40 rounded-full" />
          <div className="w-4 h-4 rounded-xs border-2 border-gray-400/80" />
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#FF5A60]/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            HEADER TITLE & EYEBROW
           ========================================================= */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-2 text-[#FF5A60] font-bold text-xs uppercase tracking-[0.2em]">
            <span className="text-[9px]">▲</span>
            <span className="text-gray-600 font-bold">UNIFIED TECHNOLOGY SOLUTIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1D21] font-sans tracking-tight leading-[1.1] max-w-4xl">
            Accelerate software delivery, optimize IoT hardware, and scale digital growth
          </h2>
        </div>

        {/* =========================================================
            STICKY TIMELINE & CATEGORY PILLS BAR (Matching Images 1, 2, 3)
           ========================================================= */}
        <div className="sticky top-[72px] bg-[#ECEBE6] sm:top-[80px] z-30 pt-4 pb-6 transition-all duration-300  mb-8">
          
          {/* Top Timeline Line with Triangle Markers */}
          <div className="relative w-full h-1.5 bg-gray-300/80 rounded-full mb-6">
            {/* Animated Active Progress Line */}
            <div
              className="absolute left-0 top-0 h-full transition-all duration-500 ease-out rounded-full"
              style={{ width: progress.width, backgroundColor: progress.color }}
            />

            {/* Glowing lead head pulse indicator */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full shadow-lg border-2 border-white transition-all duration-500 ease-out z-20 pointer-events-none"
              style={{ left: progress.width, transform: 'translate(-50%, -50%)', backgroundColor: progress.color, boxShadow: `0 0 12px ${progress.color}` }}
            />

            {/* Triangle Markers at Stage Intervals */}
            {/* Marker 1 (End of Onboarding at 33.3%) */}
            <div className="absolute left-[33.3%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <span className={`text-[10px] transition-colors duration-300 ${activeTab === 'onboarding' || activeTab === 'fraud' || activeTab === 'compliance' ? 'text-[#1C1D21] font-bold' : 'text-gray-400'}`}>
                ▲
              </span>
            </div>

            {/* Marker 2 (End of Fraud at 66.6%) */}
            <div className="absolute left-[66.6%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <span className={`text-[10px] transition-colors duration-300 ${activeTab === 'fraud' || activeTab === 'compliance' ? 'text-[#1C1D21] font-bold' : 'text-gray-400'}`}>
                ▲
              </span>
            </div>

            {/* Marker 3 (Far Right Alloy Play Wireframe Logo) */}
            <div className="absolute right-1 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="w-4 h-4 text-[#1C1D21]">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="12" className="w-full h-full">
                  <path d="M 18 12 C 12 9, 6 14, 6 22 L 6 78 C 6 86, 12 91, 18 88 L 86 54 C 92 50, 92 46, 86 42 Z" />
                  <line x1="6" y1="22" x2="86" y2="42" />
                  <line x1="6" y1="78" x2="86" y2="54" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Pill Buttons (Matching Images 1, 2, 3) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            
            {/* Pill 1: Software & App Engineering */}
            <button
              onClick={() => handleTabClick('onboarding')}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer border ${
                activeTab === 'onboarding'
                  ? 'border-[#1C1D21] text-[#1C1D21]  font-semibold shadow-xs scale-105'
                  : 'border-gray-300/80 text-gray-500 hover:text-[#1C1D21] hover:border-gray-400 bg-transparent'
              }`}
              data-cursor="SOFTWARE"
            >
              Software &amp; App Engineering
            </button>

            {/* Pill 2: Factory & IoT Hardware */}
            <button
              onClick={() => handleTabClick('fraud')}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer border ${
                activeTab === 'fraud'
                  ? 'border-[#1C1D21] text-[#1C1D21] font-semibold shadow-xs scale-105'
                  : 'border-gray-300/80 text-gray-500 hover:text-[#1C1D21] hover:border-gray-400 '
              }`}
              data-cursor="HARDWARE IOT"
            >
              Factory &amp; IoT Hardware
            </button>

            {/* Pill 3: AI & Digital Marketing */}
            <button
              onClick={() => handleTabClick('compliance')}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer border ${
                activeTab === 'compliance'
                  ? 'border-[#1C1D21] text-[#1C1D21] font-semibold shadow-xs scale-105'
                  : 'border-gray-300/80 text-gray-500 hover:text-[#1C1D21] hover:border-gray-400'
              }`}
              data-cursor="DIGITAL MARKETING"
            >
              AI &amp; Digital Marketing
            </button>

          </div>
        </div>

        {/* =========================================================
            TWO-COLUMN SPLIT SCREEN LAYOUT WITH STICKY SCROLL
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
          
          {/* LEFT COLUMN: Narrative Sections (Scrolls vertically with smooth blur reveal effect) */}
          <div className="lg:col-span-6 space-y-36 sm:space-y-48 py-6">
            
            {/* SECTION 1: ONBOARDING AT SCALE (Image 1) */}
            <motion.div
              id="section-onboarding"
              ref={onboardingRef}
              initial={{ filter: 'blur(10px)', opacity: 0.2, y: 24 }}
              whileInView={{
                filter: activeTab === 'onboarding' ? 'blur(0px)' : 'blur(4px)',
                opacity: activeTab === 'onboarding' ? 1 : 0.6,
                y: activeTab === 'onboarding' ? 0 : 10,
                scale: activeTab === 'onboarding' ? 1 : 0.98,
              }}
              animate={{
                filter: activeTab === 'onboarding' ? 'blur(0px)' : 'blur(4px)',
                opacity: activeTab === 'onboarding' ? 1 : 0.6,
                y: activeTab === 'onboarding' ? 0 : 10,
                scale: activeTab === 'onboarding' ? 1 : 0.98,
              }}
              viewport={{ margin: '-10% 0px -20% 0px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="scroll-mt-60 space-y-6 min-h-[320px] flex flex-col justify-center transform-gpu"
            >
              <h3 className="text-3xl sm:text-4xl font-normal text-[#1C1D21] font-sans tracking-tight leading-tight">
                Fast, frictionless onboarding that minimizes risk
              </h3>

              <ul className="space-y-3 text-sm sm:text-base text-gray-600 font-normal">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Approve more good customers quickly and confidently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Reduce drop-off by eliminating unnecessary friction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Verify customer identity across acquisition channels</span>
                </li>
              </ul>

              <div className="pt-4">
                <button
                  onClick={onOpenWorkflow}
                  className="bg-transparent border border-[#1C1D21] text-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all group cursor-pointer"
                >
                  <span>EXPLORE ONBOARDING</span>
                  <span className="text-xs group-hover:translate-x-0.5 transition-transform">▶</span>
                </button>
              </div>
            </motion.div>

            {/* SECTION 2: FULL-LIFECYCLE FRAUD PREVENTION (Image 2) */}
            <motion.div
              id="section-fraud"
              ref={fraudRef}
              initial={{ filter: 'blur(10px)', opacity: 0.2, y: 24 }}
              whileInView={{
                filter: activeTab === 'fraud' ? 'blur(0px)' : 'blur(4px)',
                opacity: activeTab === 'fraud' ? 1 : 0.6,
                y: activeTab === 'fraud' ? 0 : 10,
                scale: activeTab === 'fraud' ? 1 : 0.98,
              }}
              animate={{
                filter: activeTab === 'fraud' ? 'blur(0px)' : 'blur(4px)',
                opacity: activeTab === 'fraud' ? 1 : 0.6,
                y: activeTab === 'fraud' ? 0 : 10,
                scale: activeTab === 'fraud' ? 1 : 0.98,
              }}
              viewport={{ margin: '-10% 0px -20% 0px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="scroll-mt-60 space-y-6 min-h-[320px] flex flex-col justify-center transform-gpu"
            >
              <h3 className="text-3xl sm:text-4xl font-normal text-[#1C1D21] font-sans tracking-tight leading-tight">
                Fraud detection built to outpace threats
              </h3>

              <ul className="space-y-3 text-sm sm:text-base text-gray-600 font-normal">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Catch more fraud without blocking legitimate customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Ditch static rules for Fraud Signal, our machine learning model that adapts as threats evolve</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Get a single view of fraud risk across onboarding, transactions, and account activity</span>
                </li>
              </ul>

              <div className="pt-4">
                <button
                  onClick={onOpenWorkflow}
                  className="bg-transparent border border-[#1C1D21] text-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all group cursor-pointer"
                >
                  <span>EXPLORE FRAUD PREVENTION</span>
                  <span className="text-xs text-[#FF5A60] group-hover:text-white group-hover:translate-x-0.5 transition-all">▶</span>
                </button>
              </div>
            </motion.div>

            {/* SECTION 3: END-TO-END COMPLIANCE (Image 3) */}
            <motion.div
              id="section-compliance"
              ref={complianceRef}
              initial={{ filter: 'blur(10px)', opacity: 0.2, y: 24 }}
              whileInView={{
                filter: activeTab === 'compliance' ? 'blur(0px)' : 'blur(4px)',
                opacity: activeTab === 'compliance' ? 1 : 0.6,
                y: activeTab === 'compliance' ? 0 : 10,
                scale: activeTab === 'compliance' ? 1 : 0.98,
              }}
              animate={{
                filter: activeTab === 'compliance' ? 'blur(0px)' : 'blur(4px)',
                opacity: activeTab === 'compliance' ? 1 : 0.6,
                y: activeTab === 'compliance' ? 0 : 10,
                scale: activeTab === 'compliance' ? 1 : 0.98,
              }}
              viewport={{ margin: '-10% 0px -20% 0px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="scroll-mt-60 space-y-6 min-h-[320px] flex flex-col justify-center transform-gpu"
            >
              <h3 className="text-3xl sm:text-4xl font-normal text-[#1C1D21] font-sans tracking-tight leading-tight">
                Compliance you can count on as your portfolio grows
              </h3>

              <ul className="space-y-3 text-sm sm:text-base text-gray-600 font-normal">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Monitor your portfolio continuously with real-time risk signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Streamline perpetual KYC/KYB, AML, and fraud checks with fully auditable agentic automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Extend your compliance program to embedded finance products</span>
                </li>
              </ul>

              <div className="pt-4">
                <button
                  onClick={onOpenWorkflow}
                  className="bg-transparent border border-[#1C1D21] text-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all group cursor-pointer"
                >
                  <span>EXPLORE COMPLIANCE</span>
                  <span className="text-xs text-[#EAB308] group-hover:text-white group-hover:translate-x-0.5 transition-all">▶</span>
                </button>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: STICKY INTERACTIVE VISUAL CONTAINER */}
          <div className="lg:col-span-6">
            <div className="sticky top-[180px] sm:top-[200px] w-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                
                {/* =========================================================
                    VISUAL 1: DOCUMENT VERIFICATION DECISION TREE (Image 1)
                   ========================================================= */}
                {activeTab === 'onboarding' && (
                  <motion.div
                    key="visual-onboarding"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200/80 text-[#1C1D21] relative overflow-hidden flex items-center justify-center min-h-[380px]"
                  >
                    {/* Decision Tree Diagram matching Image 1 */}
                    <div className="relative w-full max-w-md flex flex-col items-center">
                      
                      {/* Top Node: Document Verification */}
                      <div className="relative mb-8 z-10">
                        <div className="bg-[#EFEFEF] border border-gray-300 text-[#1C1D21] px-5 py-3 rounded-2xl shadow-xs flex items-center gap-2.5 font-medium text-sm sm:text-base">
                          <Fingerprint className="w-5 h-5 text-gray-700" />
                          <span>Document Verification</span>
                        </div>
                      </div>

                      {/* Connecting Tree Branch Lines */}
                      <div className="relative w-full flex justify-center items-stretch h-12 -mt-8 mb-2">
                        <svg className="w-full h-full text-gray-300" viewBox="0 0 300 40" fill="none" preserveAspectRatio="none">
                          <path d="M 150 0 L 150 15 L 50 15 L 50 40 M 150 15 L 150 40 M 150 15 L 250 15 L 250 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>

                      {/* Bottom 3 Outcome Nodes Stack/Grid (Approved, Denied, Review) */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                        
                        {/* Approved (Green) */}
                        <div className="bg-[#E8F8F0] border border-[#A7F3D0] text-[#10B981] px-4 py-3 rounded-2xl text-center flex items-center justify-center gap-2 text-sm font-medium shadow-xs hover:scale-105 transition-transform cursor-pointer">
                          <Check className="w-4 h-4 text-[#10B981]" />
                          <span>Approved</span>
                        </div>

                        {/* Denied (Red) */}
                        <div className="bg-[#FEEFEF] border border-[#FECACA] text-[#EF4444] px-4 py-3 rounded-2xl text-center flex items-center justify-center gap-2 text-sm font-medium shadow-xs hover:scale-105 transition-transform cursor-pointer">
                          <X className="w-4 h-4 text-[#EF4444]" />
                          <span>Denied</span>
                        </div>

                        {/* Review (Yellow) */}
                        <div className="bg-[#FFFBEB] border border-[#FDE68A] text-[#F59E0B] px-4 py-3 rounded-2xl text-center flex items-center justify-center gap-2 text-sm font-medium shadow-xs hover:scale-105 transition-transform cursor-pointer">
                          <Edit3 className="w-4 h-4 text-[#F59E0B]" />
                          <span>Review</span>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                )}

                {/* =========================================================
                    VISUAL 2: FRAUD SIGNAL ML GRAPH (Image 2)
                   ========================================================= */}
                {activeTab === 'fraud' && (
                  <motion.div
                    key="visual-fraud"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/80 text-[#1C1D21] relative overflow-hidden flex flex-col justify-between min-h-[380px]"
                  >
                    {/* Top Header Row matching Image 2 */}
                    <div className="flex items-center justify-between pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-lg tracking-tight text-[#1C1D21]">Fraud Signal</span>
                        <div className="bg-red-50 border border-red-200 text-red-600 text-xs font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Activity className="w-3 h-3 text-red-500" />
                          <span>.91</span>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-gray-500">Jane Doe</span>
                    </div>

                    {/* Time-Series Line Graph SVG matching Image 2 */}
                    <div className="relative h-40 my-3 w-full">
                      
                      {/* Vertical Alert Lightning Lines */}
                      <div className="absolute inset-0 flex justify-between pointer-events-none px-6">
                        <div className="h-full border-r border-dashed border-blue-400 relative left-[35%]">
                          <Zap className="w-3 h-3 text-blue-500 absolute -top-3 -left-1.5 fill-blue-500" />
                        </div>
                        <div className="h-full border-r border-dashed border-blue-400 relative left-[65%]">
                          <Zap className="w-3 h-3 text-blue-500 absolute -top-3 -left-1.5 fill-blue-500" />
                        </div>
                        <div className="h-full border-r border-dashed border-blue-400 relative left-[75%]">
                          <Zap className="w-3 h-3 text-blue-500 absolute -top-3 -left-1.5 fill-blue-500" />
                        </div>
                        <div className="h-full border-r border-dashed border-blue-400 relative left-[80%]">
                          <Zap className="w-3 h-3 text-blue-500 absolute -top-3 -left-1.5 fill-blue-500" />
                        </div>
                      </div>

                      {/* Smooth SVG Score Wave Line */}
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 350 120" fill="none">
                        <path
                          d="M 10 100 Q 40 90 70 80 T 130 50 T 190 60 T 250 50 T 290 48 L 340 20"
                          stroke="#FF5A60"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                        />
                        {/* Node Dots on Line */}
                        <circle cx="10" cy="100" r="4" fill="#6EE7B7" stroke="white" strokeWidth="2" />
                        <circle cx="40" cy="90" r="4" fill="#FDE047" stroke="white" strokeWidth="2" />
                        <circle cx="70" cy="80" r="4" fill="#FDE047" stroke="white" strokeWidth="2" />
                        <circle cx="100" cy="100" r="4" fill="#FDE047" stroke="white" strokeWidth="2" />
                        <circle cx="130" cy="50" r="4" fill="#FF5A60" stroke="white" strokeWidth="2" />
                        <circle cx="160" cy="60" r="4" fill="#FF5A60" stroke="white" strokeWidth="2" />
                        <circle cx="190" cy="70" r="4" fill="#FF5A60" stroke="white" strokeWidth="2" />
                        <circle cx="250" cy="50" r="4" fill="#FF5A60" stroke="white" strokeWidth="2" />
                        <circle cx="290" cy="48" r="4" fill="#FF5A60" stroke="white" strokeWidth="2" />
                        <circle cx="315" cy="35" r="5" fill="#DC2626" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>

                    {/* Chart Legend Pills Row matching Image 2 */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs pt-1 pb-3 text-gray-600">
                      <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-teal-400" /> Low &lt; 25
                      </span>
                      <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-amber-400" /> Mid 25 - 80
                      </span>
                      <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500" /> High &gt; 80
                      </span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full border border-gray-400" /> FS Score
                      </span>
                      <span className="text-blue-600 flex items-center gap-1 font-semibold">
                        <Zap className="w-2.5 h-2.5" /> Alert
                      </span>
                    </div>

                    {/* Bottom Risk Indicators Grid matching Image 2 */}
                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold mb-2">
                        <span>Top Fraud Signal Indicators</span>
                        <Info className="w-3 h-3 text-gray-400" />
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-gray-100/90 text-gray-800 px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium">
                          <Activity className="w-3.5 h-3.5 text-red-500" />
                          <span className="truncate">Account Dormancy</span>
                        </div>
                        <div className="bg-gray-100/90 text-gray-800 px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium">
                          <Activity className="w-3.5 h-3.5 text-red-500" />
                          <span className="truncate">Excessive Wire Transfers</span>
                        </div>
                        <div className="bg-gray-100/90 text-gray-800 px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium">
                          <Activity className="w-3.5 h-3.5 text-red-500" />
                          <span className="truncate">PII Match</span>
                        </div>
                        <div className="bg-gray-100/90 text-gray-800 px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium">
                          <Activity className="w-3.5 h-3.5 text-red-500" />
                          <span className="truncate">Transaction High-Amounts</span>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                )}

                {/* =========================================================
                    VISUAL 3: COMPLIANCE RISK RATING TABLE (Image 3)
                   ========================================================= */}
                {activeTab === 'compliance' && (
                  <motion.div
                    key="visual-compliance"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-200/80 text-[#1C1D21] relative overflow-hidden flex flex-col justify-center min-h-[380px]"
                  >
                    {/* Compliance Risk Rating Table matching Image 3 */}
                    <div className="w-full space-y-4">
                      
                      {/* Table Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-gray-300/80 text-xs sm:text-sm font-extrabold text-gray-800">
                        <span>Input</span>
                        <span>Risk Rating</span>
                      </div>

                      {/* Rows */}
                      <div className="space-y-2 text-sm sm:text-base font-normal text-gray-600">
                        
                        {/* Row 1: UK */}
                        <div className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors">
                          <span className="text-gray-500 font-normal">UK</span>
                          <span className="flex items-center gap-2 font-medium text-[#1C1D21]">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            <span>0</span>
                          </span>
                        </div>

                        {/* Row 2: 2 Years */}
                        <div className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-gray-50/80 font-normal">
                          <span className="text-gray-500 font-normal">2 Years</span>
                          <span className="flex items-center gap-2 font-medium text-[#1C1D21]">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <span>20</span>
                          </span>
                        </div>

                        {/* Row 3: Private Limited Company Ltd */}
                        <div className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors">
                          <span className="text-gray-500 font-normal">Private Limited Company Ltd</span>
                          <span className="flex items-center gap-2 font-medium text-[#1C1D21]">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            <span>12</span>
                          </span>
                        </div>

                        {/* Row 4: Not Matched */}
                        <div className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-gray-50/80 font-normal">
                          <span className="text-gray-500 font-normal">Not Matched</span>
                          <span className="flex items-center gap-2 font-medium text-[#1C1D21]">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            <span>0</span>
                          </span>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
