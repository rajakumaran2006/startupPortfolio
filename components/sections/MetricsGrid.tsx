'use client';

import React, { useState } from 'react';
import { X, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { soundFX } from '@/lib/audioFX';

interface CaseStudy {
  id: string;
  metric: string;
  label: string;
  company: string;
  bgColor: string;
  logoComponent: React.ReactNode;
  storyTitle: string;
  storySummary: string;
  keyResults: string[];
}

export default function MetricsGrid() {
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'incredible',
      metric: '90%',
      label: 'Account openings automated',
      company: 'IncredibleBank',
      bgColor: 'bg-[#FF5A60]', // Vibrant Coral Red (Image 3)
      logoComponent: (
        <span className="font-extrabold text-2xl tracking-tighter text-[#1C1D21]">
          incrediblebank<span className="text-xs font-normal align-top font-sans">™</span>
        </span>
      ),
      storyTitle: 'IncredibleBank Automates 90% of Account Openings in Real-Time',
      storySummary: 'IncredibleBank replaced manual KYC/KYB backlogs with Team Monsrow’s automated decisioning engine, reducing onboarding latency from 48 hours to under 30 seconds while maintaining strict regulatory compliance.',
      keyResults: [
        '90% auto-approval rate for compliant applicants',
        'Reduced customer acquisition drop-off by 42%',
        'Seamless integration with core banking stack'
      ]
    },
    {
      id: 'suncoast',
      metric: '35%',
      label: 'Decrease in fraud losses',
      company: 'Suncoast Credit Union',
      bgColor: 'bg-[#FFA0AF]', // Soft Coral Pink (Image 3)
      logoComponent: (
        <div className="flex items-center gap-2 text-[#1C1D21]">
          <div className="w-8 h-8 rounded-full bg-[#1C1D21] p-0.5 shrink-0">
            <div className="w-full h-full rounded-full border-2 border-[#FFA0AF] bg-[#1C1D21]" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-base uppercase tracking-tight">Suncoast</span>
            <span className="text-[11px] font-bold">Credit Union</span>
          </div>
        </div>
      ),
      storyTitle: 'Suncoast Credit Union Cuts Fraud Loss by 35% with Behavioral Signals',
      storySummary: 'By layering Fraud Signal ML and device telemetry into their credit union onboarding workflows, Suncoast intercepted synthetic identity networks before account funding.',
      keyResults: [
        '35% reduction in first-party and synthetic fraud losses',
        'Zero impact on legitimate member approval friction',
        'Saved $2.4M annually in manual review bandwidth'
      ]
    },
    {
      id: 'consumers',
      metric: '5x',
      label: 'Fraud savings per dollar spent',
      company: 'Consumers Credit Union',
      bgColor: 'bg-[#FF5A60]', // Vibrant Coral Red (Image 3)
      logoComponent: (
        <div className="flex items-center gap-1.5 text-[#1C1D21]">
          <svg className="w-7 h-7 text-[#1C1D21] fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/>
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-base tracking-tight">consumers</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-900">credit union</span>
          </div>
        </div>
      ),
      storyTitle: 'Consumers Credit Union Achieves 5x ROI on Fraud Operations',
      storySummary: 'By orchestrating multi-vendor risk signals in a single API, Consumers Credit Union optimized data vendor calls, paying only for step-up verification when high-risk anomalies were flagged.',
      keyResults: [
        '5x ROI per dollar spent on risk data orchestration',
        'Eliminated duplicate vendor subscription costs',
        'Full operational visibility across deposit & loan products'
      ]
    },
    {
      id: 'earnest',
      metric: '56%',
      label: 'Increase in automated approval rate',
      company: 'earnest',
      bgColor: 'bg-[#FFA0AF]', // Soft Coral Pink (Image 3)
      logoComponent: (
        <span className="font-extrabold text-3xl tracking-tighter text-[#1C1D21] font-sans">
          earnest
        </span>
      ),
      storyTitle: 'Earnest Boosts Digital Lending Approval Rates by 56%',
      storySummary: 'Lending platform Earnest deployed Team Monsrow Actionable AI to continuously re-evaluate edge-case applicants, automatically approving verified low-risk borrowers without human friction.',
      keyResults: [
        '56% increase in instant lending approvals',
        'Sub-second underwriting decision engine',
        'Enhanced borrower experience & conversion'
      ]
    }
  ];

  return (
    <section className="bg-[#F5F4F0] py-12 lg:py-16 border-b border-[#E2E0D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Cards Grid - Animated one by one jumping from top on scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -180, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              onViewportEnter={() => {
                setTimeout(() => {
                  soundFX.playLand();
                }, index * 160 + 100);
              }}
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 14,
                bounce: 0.55,
                delay: index * 0.16,
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 400, damping: 20 } 
              }}
              className={`${item.bgColor} rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 min-h-[420px] text-[#1C1D21] relative cursor-pointer group`}
            >
              {/* Top Section: Metric & Label */}
              <div>
                <div className="text-6xl sm:text-7xl lg:text-8xl font-normal font-sans tracking-tight text-[#1C1D21] leading-none mb-4 group-hover:scale-105 transition-transform duration-300 transform-gpu origin-left">
                  {item.metric}
                </div>
                <p className="text-xl sm:text-2xl font-normal text-[#1C1D21] leading-snug">
                  {item.label}
                </p>
              </div>

              {/* Middle Section: Read Story Pill Button */}
              <div className="pt-6">
                <button
                  onClick={() => setActiveModal(item)}
                  className="bg-[#1C1D21] hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-2 transition-transform active:scale-95 shadow-sm group/btn"
                >
                  {/* Square Bullet icon matching Image 3 */}
                  <span className="w-2 h-2 bg-white inline-block shrink-0 group-hover/btn:scale-125 transition-transform" />
                  <span>READ STORY</span>
                </button>
              </div>

              {/* Bottom Section: Divider line + Logo */}
              <div>
                <div className="border-t border-[#1C1D21]/20 my-6" />
                <div className="flex items-center justify-start min-h-[40px]">
                  {item.logoComponent}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2E0D8] relative space-y-6">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="bg-[#FF5A60] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                CASE STUDY
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                {activeModal.company}
              </span>
            </div>

            <div>
              <div className="text-5xl font-extrabold text-[#FF5A60] font-display mb-1">
                {activeModal.metric}
              </div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {activeModal.label}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#1C1D21] leading-snug">
                {activeModal.storyTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {activeModal.storySummary}
              </p>
            </div>

            <div className="bg-[#F5F4F0] p-4 rounded-xl space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1D21] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#FF5A60]" />
                <span>Key Impact Metrics</span>
              </h4>
              <ul className="space-y-1.5 pt-1">
                {activeModal.keyResults.map((result, idx) => (
                  <li key={idx} className="text-xs text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-gray-100">
              <span className="text-xs text-gray-400">Powered by Team Monsrow Intelligence</span>
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#1C1D21] text-white text-xs font-bold uppercase px-5 py-2.5 rounded-full hover:bg-[#FF5A60] transition-colors"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

