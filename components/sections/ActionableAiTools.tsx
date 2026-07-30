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
        {/* Header matching Image 5 */}
        <div className="mb-12 space-y-3 max-w-3xl">
          <div className="flex items-center gap-1.5 text-[#FF5A60] font-bold text-xs uppercase tracking-widest">
            <span className="text-[10px]">▲</span>
            <span>ACTIONABLE AI &amp; AUTOMATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#1C1D21] font-display tracking-tight leading-[1.08]">
            Predict, automate, and optimize with our suite of Actionable AI tools
          </h2>
          <p className="text-sm sm:text-base text-[#4A4D57] leading-relaxed">
            Your teams shouldn&apos;t spend hours on repetitive backlogs. Our native AI continuously handles system data orchestration, IoT hardware triage, and digital marketing optimizations.
          </p>
        </div>

        {/* 3 AI Tool Cards matching Image 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AI Systems Intelligence */}
          <div className="bg-[#EAE8E3] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-1.5 mb-4 text-[10px] font-bold font-mono uppercase tracking-wider text-gray-500">
                <span className="w-1.5 h-1.5 bg-[#FF5A60] rounded-xs" />
                <span>01 SYSTEMS INTELLIGENCE</span>
              </div>

              {/* Shared PII Graphic */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6 space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-xs font-bold text-[#1C1D21]">
                  <span>System Workload</span>
                  <span className="font-mono text-gray-500">60%</span>
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
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A60]" /> App Server Load
                    </span>
                    <span className="font-mono text-gray-800">41%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A60]" /> IoT Sensor Signal
                    </span>
                    <span className="font-mono text-gray-800">12%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A60]" /> Ad Campaign Traffic
                    </span>
                    <span className="font-mono text-gray-800">7%</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-normal text-[#1C1D21] font-display mb-3">
                Systems Intelligence Radar
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4D57] leading-relaxed mb-6 font-normal">
                AI-powered intelligence alerts you to software bottlenecks, cloud resource spikes, and IoT hardware anomalies, keeping your digital operations running at peak speed.
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

          {/* Card 2: Predictive ML Analytics */}
          <div className="bg-[#EAE8E3] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-1.5 mb-4 text-[10px] font-bold font-mono uppercase tracking-wider text-gray-500">
                <span className="w-1.5 h-1.5 bg-[#FF5A60] rounded-xs" />
                <span>02 PREDICTIVE AI</span>
              </div>

              {/* Fraud Signal Line Graph Graphic */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6 space-y-2 shadow-xs min-h-[140px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-bold text-[#1C1D21]">
                  <span>Growth Velocity</span>
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
                Predictive ML Analytics
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4D57] leading-relaxed mb-6 font-normal">
                Our machine learning models continuously predict user churn, hardware maintenance cycles, and digital ad conversion potential, giving your business a strategic edge.
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
              <div className="bg-[#d53f57] rounded-xl p-3 border border-pink-200 mb-6 space-y-3 shadow-xs">
                <div className="text-[9px] font-bold uppercase tracking-wider text-white">TASK AUTOMATION</div>
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

                <div className="bg-[#a15bec] text-white px-3 py-1.5 rounded-md text-[10px] font-medium flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="text-[10px]"></span> AI Code &amp; Campaign Review:
                  </span>
                  <span className="bg-emerald-800 text-white px-1.5 py-0.5 rounded text-[9px] font-bold">Approved</span>
                </div>
              </div>

              <h3 className="text-xl font-normal text-[#1C1D21] font-display mb-3">
                AI Workflow Assistant
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4D57] leading-relaxed mb-6 font-normal">
                Agentic AI analyzes workflow triggers and automates next steps across custom software, IoT device monitoring, and marketing lead management.
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

