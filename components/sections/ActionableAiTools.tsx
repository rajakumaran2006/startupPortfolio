'use client';

import React from 'react';

interface ActionableAiToolsProps {
  onOpenWorkflow: () => void;
}

export default function ActionableAiTools({ onOpenWorkflow }: ActionableAiToolsProps) {
  return (
    <section id="actionable-ai" className="bg-[#F5F4F0] py-16 lg:py-24 border-b border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Image 5 */}
        <div className="mb-12 space-y-3 max-w-3xl">
          <div className="flex items-center gap-1.5 text-[#FF5A60] font-bold text-xs uppercase tracking-widest">
            <span className="text-[10px]">▲</span>
            <span>ACTIONABLE AI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#1C1D21] font-display tracking-tight leading-[1.08]">
            Predict, detect, and triage with our suite of Actionable AI tools
          </h2>
          <p className="text-sm sm:text-base text-[#4A4D57] leading-relaxed">
            Your fraud team shouldn&apos;t be the last line of defense. Our native AI continuously handles fraud detection, scoring, and case review to reduce manual work for your team.
          </p>
        </div>

        {/* 3 AI Tool Cards matching Image 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Fraud Attack Radar */}
          <div className="bg-[#EAE8E3] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-1.5 mb-4 text-[10px] font-bold font-mono uppercase tracking-wider text-gray-500">
                <span className="w-1.5 h-1.5 bg-[#FF5A60] rounded-xs" />
                <span>01 FRAUD INTELLIGENCE</span>
              </div>

              {/* Shared PII Graphic */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6 space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-xs font-bold text-[#1C1D21]">
                  <span>Shared PII</span>
                  <span className="font-mono text-gray-500">60</span>
                </div>

                {/* Bar */}
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden flex">
                  <div className="w-[60%] h-full bg-[#FF5A60]" />
                  <div className="w-[20%] h-full bg-[#F8BAC0]" />
                  <div className="w-[20%] h-full bg-gray-300" />
                </div>

                <div className="space-y-1.5 text-[11px] text-gray-600 font-normal pt-1">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A60]" /> Shared SSN
                    </span>
                    <span className="font-mono text-gray-800">41</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A60]" /> Shared Email Address
                    </span>
                    <span className="font-mono text-gray-800">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A60]" /> Shared Home Address
                    </span>
                    <span className="font-mono text-gray-800">7</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-normal text-[#1C1D21] font-display mb-3">
                Fraud Attack Radar
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4D57] leading-relaxed mb-6 font-normal">
                AI-powered intelligence alerts you to coordinated fraud attacks at the portfolio level, so you can stop large-scale attacks before they escalate and keep your onboarding funnel flowing.
              </p>
            </div>

            <button
              onClick={onOpenWorkflow}
              className="bg-transparent border border-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[#1C1D21] text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
            >
              <span>SEE HOW IT WORKS</span>
              <span className="text-[#FF5A60] text-[10px]">▶</span>
            </button>
          </div>

          {/* Card 2: Fraud Signal */}
          <div className="bg-[#EAE8E3] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-1.5 mb-4 text-[10px] font-bold font-mono uppercase tracking-wider text-gray-500">
                <span className="w-1.5 h-1.5 bg-[#FF5A60] rounded-xs" />
                <span>02 PREDICTIVE AI</span>
              </div>

              {/* Fraud Signal Line Graph Graphic */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6 space-y-2 shadow-xs min-h-[140px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-bold text-[#1C1D21]">
                  <span>Fraud Signal</span>
                  <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-[9px]">⚡</div>
                </div>

                <div className="relative h-20 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 60" fill="none">
                    <line x1="100" y1="0" x2="100" y2="60" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="130" y1="0" x2="130" y2="60" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="100" cy="15" r="3" fill="#3B82F6" />
                    <circle cx="130" cy="15" r="3" fill="#3B82F6" />
                    <path d="M 10 50 L 50 40 L 90 20 L 130 18 L 180 18" stroke="#EAB308" strokeWidth="2.5" fill="none" />
                    <circle cx="10" cy="50" r="3" fill="#10B981" />
                    <circle cx="50" cy="40" r="3" fill="#EAB308" />
                    <circle cx="90" cy="20" r="3.5" fill="#EF4444" />
                    <circle cx="130" cy="18" r="3.5" fill="#EF4444" />
                    <circle cx="180" cy="18" r="3.5" fill="#EF4444" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-normal text-[#1C1D21] font-display mb-3">
                Fraud Signal
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4D57] leading-relaxed mb-6 font-normal">
                Our identity-centric machine learning model continuously predicts fraud risk from first touch to every subsequent interaction, so you can confidently distinguish good customers from bad actors.
              </p>
            </div>

            <button
              onClick={onOpenWorkflow}
              className="bg-transparent border border-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[#1C1D21] text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
            >
              <span>SEE HOW IT WORKS</span>
              <span className="text-[#FF5A60] text-[10px]">▶</span>
            </button>
          </div>

          {/* Card 3: AI Assistant */}
          <div className="bg-[#EAE8E3] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-1.5 mb-4 text-[10px] font-bold font-mono uppercase tracking-wider text-gray-500">
                <span className="w-1.5 h-1.5 bg-[#FF5A60] rounded-xs" />
                <span>03 AGENTIC AI</span>
              </div>

              {/* Document Review ID Card Graphic */}
              <div className="bg-[#FDF2F4] rounded-xl p-3 border border-pink-200 mb-6 space-y-3 shadow-xs">
                <div className="text-[9px] font-bold uppercase tracking-wider text-[#FF5A60]">IDENTIFICATION</div>
                <div className="bg-white rounded-lg p-2.5 border border-pink-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-500">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div className="space-y-1 grow">
                    <div className="h-2 bg-gray-200 rounded w-20" />
                    <div className="h-1.5 bg-gray-100 rounded w-16" />
                    <div className="h-1.5 bg-gray-100 rounded w-24" />
                  </div>
                </div>

                <div className="bg-[#E9D5FF]/60 text-purple-900 px-3 py-1.5 rounded-md text-[10px] font-medium flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="text-[10px]">✨</span> AI Document Review:
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded text-[9px] font-bold">Approved</span>
                </div>
              </div>

              <h3 className="text-xl font-normal text-[#1C1D21] font-display mb-3">
                AI Assistant
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4D57] leading-relaxed mb-6 font-normal">
                Agentic AI analyzes case triggers and recommends next steps for infinitely scalable risk management and compliance operations.
              </p>
            </div>

            <button
              onClick={onOpenWorkflow}
              className="bg-transparent border border-[#1C1D21] hover:bg-[#1C1D21] hover:text-white text-[#1C1D21] text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors w-fit cursor-pointer"
            >
              <span>SEE HOW IT WORKS</span>
              <span className="text-[#FF5A60] text-[10px]">▶</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

