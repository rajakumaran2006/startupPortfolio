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

  // Typewriter effect logic + auto-loop
  useEffect(() => {
    if (!hasStartedAnimation) return;

    if (activeStage === 'typewriter') {
      if (typedText.length < fullHeadline.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullHeadline.slice(0, typedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Once typing finishes, wait 1.8s then show brand
        const transitionTimeout = setTimeout(() => {
          setActiveStage('brand');
        }, 1800);
        return () => clearTimeout(transitionTimeout);
      }
    }

    if (activeStage === 'brand') {
      // Show brand for 4s then loop back to typewriter
      const loopTimeout = setTimeout(() => {
        setTypedText('');
        setActiveStage('typewriter');
      }, 4000);
      return () => clearTimeout(loopTimeout);
    }
  }, [hasStartedAnimation, typedText, activeStage]);

  // Cursor blinking interval
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 450);
    return () => clearInterval(interval);
  }, []);

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
              <li><a href="#platform" className="hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Business Solutions</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Artificial Intelligence</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Factory &amp; IoT</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Cloud &amp; Infrastructure</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Column 2: SOLUTIONS */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">SOLUTIONS</h4>
            <ul className="space-y-2 text-gray-400 font-normal">
              <li><a href="/service" className="hover:text-white transition-colors">Risk &amp; Operations</a></li>
              <li><a href="/service" className="hover:text-white transition-colors">Software Engineering</a></li>
              <li><a href="/service" className="hover:text-white transition-colors">AI &amp; Automation</a></li>
              <li><a href="/service" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="/service" className="hover:text-white transition-colors">Security &amp; Auditing</a></li>
            </ul>
          </div>

          {/* Column 3: ENGAGEMENT */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">ENGAGEMENT</h4>
            <ul className="space-y-2 text-gray-400 font-normal">
              <li><a href="/contact" className="hover:text-white transition-colors">Get in Touch</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Schedule Consultation</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Request Demo</a></li>
            </ul>
          </div>

          {/* Column 4: COMPANY */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">COMPANY</h4>
            <ul className="space-y-2 text-gray-400 font-normal">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers &amp; Culture</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 5: RESOURCES */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">RESOURCES</h4>
            <ul className="space-y-2 text-gray-400 font-normal">
              <li><a href="/service" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Support Center</a></li>
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

          {/* STAGE 2: BRAND BANNER */}
          {activeStage === 'brand' && (
            <div className="animate-fade-in flex flex-col items-center justify-center gap-8 sm:gap-12 w-full py-4">
              {/* Massive TEAM MONSROW Typography */}
              <div className="relative w-full max-w-4xl h-36 sm:h-48 lg:h-64 flex items-center justify-center">
                <ASCIIText
                  text="TEAM MONSROW"
                  enableWaves={true}
                  asciiFontSize={7}
                  textFontSize={100}
                  textColor="#1C1D21"
                  planeBaseHeight={8}
                />
              </div>
            </div>
          )}

        </div>

        {/* Single Unified Schedule a Demo CTA */}
        <div className="mt-auto pt-6 sm:pt-8 animate-fade-in">
          <button
            onClick={onOpenDemo}
            className="bg-transparent border-[2.5px] border-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[#1C1D21] text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-widest px-10 sm:px-14 py-4 sm:py-5 rounded-full inline-flex items-center gap-3 transition-all shadow-md transform hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <span>SCHEDULE A DEMO</span>
            <span className="text-[#1C1D21] group-hover:text-white transition-colors text-sm sm:text-base font-extrabold">▶</span>
          </button>
        </div>
      </div>

    </footer>
  );
}
