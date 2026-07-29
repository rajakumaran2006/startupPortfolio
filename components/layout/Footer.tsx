'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ASCIIText } from '@/components/ui';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenWorkflow: () => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  // Typewriter & Brand Entrance Animation States
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [activeStage, setActiveStage] = useState<'typewriter' | 'brand'>('typewriter');
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  const fullHeadline = 'Derisk your growth';

  // Intersection Observer to trigger typewriter when banner enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedAnimation) {
          setHasStartedAnimation(true);
        }
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStartedAnimation]);

  // Typewriter effect logic
  useEffect(() => {
    if (!hasStartedAnimation) return;

    if (activeStage === 'typewriter') {
      if (typedText.length < fullHeadline.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullHeadline.slice(0, typedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Once typing finishes, wait 1.8 seconds then transition to the brand logo view (Image 1)
        const transitionTimeout = setTimeout(() => {
          setActiveStage('brand');
        }, 1800);
        return () => clearTimeout(transitionTimeout);
      }
    }
  }, [hasStartedAnimation, typedText, activeStage]);

  // Cursor blinking interval
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 450);
    return () => clearInterval(interval);
  }, []);

  const handleReplay = () => {
    setTypedText('');
    setActiveStage('typewriter');
    setHasStartedAnimation(true);
  };

  return (
    <footer id="footer" className="bg-[#0A0B0D] text-white">
      {/* =========================================================================
          SECTION 1: TOP DARK FOOTER LINKS & ENTERPRISE SECURITY BADGES (Image 1 Top)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-xs">
          
          {/* Column 1: PLATFORM */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">PLATFORM</h4>
            <ul className="space-y-2 text-gray-400 font-normal">
              <li><a href="#platform" className="hover:text-white transition-colors">Actionable AI suite</a></li>
              <li><a href="#risk-management" className="hover:text-white transition-colors">Continuous fraud management</a></li>
              <li><a href="#risk-management" className="hover:text-white transition-colors">Customer onboarding</a></li>
              <li><a href="#data-partners" className="hover:text-white transition-colors">Data partner ecosystem</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Identity verification</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Orchestration &amp; decisioning engine</a></li>
            </ul>
          </div>

          {/* Column 2: USE CASES */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">USE CASES</h4>
            <ul className="space-y-2 text-gray-400 font-normal">
              <li><a href="#risk-management" className="hover:text-white transition-colors">Onboarding</a></li>
              <li><a href="#risk-management" className="hover:text-white transition-colors">Authentication &amp; account servicing</a></li>
              <li><a href="#risk-management" className="hover:text-white transition-colors">Transaction monitoring</a></li>
              <li><a href="#risk-management" className="hover:text-white transition-colors">Credit</a></li>
              <li><a href="#risk-management" className="hover:text-white transition-colors">End-to-end compliance</a></li>
              <li><a href="#risk-management" className="hover:text-white transition-colors">Full-lifecycle fraud prevention</a></li>
            </ul>
          </div>

          {/* Column 3: WHO WE WORK WITH */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">WHO WE WORK WITH</h4>
            <ul className="space-y-2 text-gray-400 font-normal">
              <li><a href="#who-we-serve" className="hover:text-white transition-colors">Banks</a></li>
              <li><a href="#who-we-serve" className="hover:text-white transition-colors">Credit unions</a></li>
              <li><a href="#who-we-serve" className="hover:text-white transition-colors">Fintechs</a></li>
              <li><a href="#who-we-serve" className="hover:text-white transition-colors">Sponsor banks</a></li>
              <li><a href="#who-we-serve" className="hover:text-white transition-colors">Crypto</a></li>
              <li><a href="#data-partners" className="hover:text-white transition-colors">Data &amp; channel partners</a></li>
            </ul>
          </div>

          {/* Column 4: RESOURCES */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">RESOURCES</h4>
            <ul className="space-y-2 text-gray-400 font-normal">
              <li><a href="#resources" className="hover:text-white transition-colors">Content library</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Client stories</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Developer hub</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo(); }} className="hover:text-white transition-colors">Get in touch</a></li>
            </ul>
          </div>

          {/* Column 5: ABOUT US */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">ABOUT US</h4>
            <ul className="space-y-2 text-gray-400 font-normal">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Column 6: ENTERPRISE-GRADE SECURITY (Pixel-Perfect 2x2 Circular Seal Badges matching Image 1) */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">ENTERPRISE-GRADE SECURITY</h4>
            
            <div className="grid grid-cols-2 gap-2 pt-1 border border-gray-800/80 p-2 rounded-lg bg-[#111215]">
              {/* Seal 1: AICPA SOC 2 Type II (Yellow) */}
              <div className="flex flex-col items-center justify-center p-2 rounded border border-gray-800 text-center hover:border-yellow-500/50 transition-colors">
                <div className="w-11 h-11 rounded-full border-2 border-dashed border-yellow-400 p-0.5 flex items-center justify-center mb-1">
                  <div className="w-full h-full rounded-full bg-yellow-400/20 text-yellow-300 font-extrabold text-[7.5px] uppercase tracking-tighter flex flex-col items-center justify-center leading-none">
                    <span>AICPA</span>
                    <span className="font-bold text-[6.5px]">SOC 2</span>
                    <span className="text-[5.5px]">TYPE II</span>
                  </div>
                </div>
              </div>

              {/* Seal 2: COMPLIANCE ISO 27001 (Pink) */}
              <div className="flex flex-col items-center justify-center p-2 rounded border border-gray-800 text-center hover:border-pink-500/50 transition-colors">
                <div className="w-11 h-11 rounded-full border-2 border-dashed border-[#FF5A60] p-0.5 flex items-center justify-center mb-1">
                  <div className="w-full h-full rounded-full bg-[#FF5A60]/20 text-[#FF5A60] font-extrabold text-[7px] uppercase tracking-tighter flex flex-col items-center justify-center leading-none">
                    <span className="text-[5.5px]">COMPLIANCE</span>
                    <span className="font-bold text-[6.5px]">ISO 27001</span>
                  </div>
                </div>
              </div>

              {/* Seal 3: PRIVACY GDPR (Blue) */}
              <div className="flex flex-col items-center justify-center p-2 rounded border border-gray-800 text-center hover:border-blue-500/50 transition-colors">
                <div className="w-11 h-11 rounded-full border-2 border-dashed border-blue-400 p-0.5 flex items-center justify-center mb-1">
                  <div className="w-full h-full rounded-full bg-blue-500/20 text-blue-300 font-extrabold text-[7.5px] uppercase tracking-tighter flex flex-col items-center justify-center leading-none">
                    <span className="text-[5.5px]">PRIVACY</span>
                    <span className="font-bold text-[7px]">GDPR</span>
                  </div>
                </div>
              </div>

              {/* Seal 4: COMPLIANCE CCPA (Olive/Grey) */}
              <div className="flex flex-col items-center justify-center p-2 rounded border border-gray-800 text-center hover:border-emerald-500/50 transition-colors">
                <div className="w-11 h-11 rounded-full border-2 border-dashed border-emerald-400 p-0.5 flex items-center justify-center mb-1">
                  <div className="w-full h-full rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-[7px] uppercase tracking-tighter flex flex-col items-center justify-center leading-none">
                    <span className="text-[5.5px]">COMPLIANCE</span>
                    <span className="font-bold text-[7px]">CCPA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Horizontal Line & Bottom Metadata Row (Image 1 Bottom Row) */}
        <div className="mt-12 pt-6 border-t border-gray-800/80 flex flex-col xl:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#FF5A60] animate-pulse" />
            <span>Hi AI assistants, learn about Team Monsrow!</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-gray-400 text-center">
            <span>© 2026 Team Monsrow</span>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Modern Slavery Act Statement</a>
            <span>88 University Place, 4th Floor • New York, NY 10003</span>
            <a href="#" className="hover:text-white transition-colors">Do Not Sell My Info</a>
          </div>

          {/* Social Media Outlined Circular Icons */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="X Twitter"
              className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-[10px] text-gray-400 hover:border-white hover:text-white transition-colors"
            >
              𝕏
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-[10px] text-gray-400 hover:border-white hover:text-white transition-colors font-serif font-bold"
            >
              f
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-[10px] text-gray-400 hover:border-white hover:text-white transition-colors font-bold"
            >
              in
            </a>
            <a
              href="#"
              aria-label="Podcast"
              className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-[10px] text-gray-400 hover:border-white hover:text-white transition-colors"
            >
              🎙
            </a>
          </div>
        </div>
      </div>


      {/* =========================================================================
          SECTION 2: HIGH-IMPACT CORAL BANNER (#FF5A60) WITH TYPEWRITER & BRAND REVEAL
          (Image 2 Entrance -> Image 1 Brand Mark)
         ========================================================================= */}
      <div
        ref={bannerRef}
        className="bg-[#FF5A60] text-[#1C1D21] min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] px-4 sm:px-8 py-16 sm:py-24 flex flex-col justify-between items-center relative overflow-hidden transition-colors duration-700 select-none"
      >
        {/* Toggle / Replay Controls top-right */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => setActiveStage('typewriter')}
            className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all ${
              activeStage === 'typewriter'
                ? 'bg-[#1C1D21] text-white border-[#1C1D21]'
                : 'bg-white/20 text-[#1C1D21] border-black/20 hover:bg-white/40'
            }`}
          >
            Typewriter Mode
          </button>
          <button
            onClick={() => setActiveStage('brand')}
            className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all ${
              activeStage === 'brand'
                ? 'bg-[#1C1D21] text-white border-[#1C1D21]'
                : 'bg-white/20 text-[#1C1D21] border-black/20 hover:bg-white/40'
            }`}
          >
            Brand Mark Mode
          </button>
          <button
            onClick={handleReplay}
            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/30 text-[#1C1D21] hover:bg-white/60 transition-all border border-black/20"
            title="Replay Entrance Animation"
          >
            ↻ Replay
          </button>
        </div>

        {/* Content Area */}
        <div className="w-full max-w-7xl mx-auto my-auto flex flex-col items-center justify-center text-center">
          
          {/* STAGE 1: TYPEWRITER ENTRANCE (Image 2) */}
          {activeStage === 'typewriter' && (
            <div className="animate-fade-in flex items-center justify-center min-h-[220px] sm:min-h-[280px]">
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal font-sans tracking-tight text-[#1C1D21] leading-none inline-flex items-center">
                <span>{typedText}</span>
                <span
                  className={`inline-block w-1.5 sm:w-3 h-[0.8em] bg-[#1C1D21] ml-2 ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-100`}
                />
              </h2>
            </div>
          )}

          {/* STAGE 2: GIANT ALLOY BRAND LOGO & MARK (Image 1) */}
          {activeStage === 'brand' && (
            <div className="animate-fade-in flex flex-col items-center justify-center gap-8 sm:gap-12 w-full py-4">
              {/* Giant Geometric Triangle Delta Mark + ALLOY Text */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-12 w-full max-w-6xl">
                {/* Geometric Wireframe Triangle Logo Mark (Image 1) */}
                <div className="shrink-0 w-20 sm:w-32 lg:w-44 h-20 sm:h-32 lg:h-44">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-[#1C1D21] stroke-current"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Outer Play Triangle with Smooth Corners */}
                    <path
                      d="M 18 12 C 12 9, 6 14, 6 22 L 6 78 C 6 86, 12 91, 18 88 L 86 54 C 92 50, 92 46, 86 42 Z"
                      strokeWidth="5"
                    />
                    {/* Intersecting Geometric Facet Lines */}
                    <line x1="6" y1="22" x2="86" y2="42" />
                    <line x1="6" y1="78" x2="86" y2="54" />
                    <line x1="6" y1="50" x2="86" y2="48" />
                    <line x1="26" y1="28" x2="26" y2="72" />
                    <line x1="6" y1="22" x2="48" y2="70" />
                    <line x1="6" y1="78" x2="48" y2="30" />
                  </svg>
                </div>

                {/* Massive MONSROW Typography with Interactive ASCII Text Effect */}
                <div className="relative w-full max-w-2xl h-36 sm:h-48 lg:h-64 flex items-center justify-center">
                  <ASCIIText
                    text="MONSROW"
                    enableWaves={true}
                    asciiFontSize={7}
                    textFontSize={150}
                    textColor="#1C1D21"
                    planeBaseHeight={8}
                  />
                </div>
              </div>

              {/* SCHEDULE A DEMO Button Pill (Image 1 Bottom Center) */}
              <div className="mt-4 sm:mt-8">
                <button
                  onClick={onOpenDemo}
                  className="bg-transparent border-2 border-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[#1C1D21] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 sm:px-10 py-3.5 sm:py-4 rounded-full inline-flex items-center gap-2 transition-all shadow-sm transform hover:scale-105 active:scale-95 group"
                >
                  <span>SCHEDULE A DEMO</span>
                  <span className="text-[#1C1D21] group-hover:text-white transition-colors text-xs font-bold">▶</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Small Demo CTA in Typewriter mode (Image 2) */}
        {activeStage === 'typewriter' && (
          <div className="mt-auto pt-6 animate-fade-in">
            <button
              onClick={onOpenDemo}
              className="bg-transparent border border-[#1C1D21] text-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all"
            >
              <span>SCHEDULE A DEMO</span>
              <span className="text-xs font-bold">▶</span>
            </button>
          </div>
        )}
      </div>

    </footer>
  );
}
