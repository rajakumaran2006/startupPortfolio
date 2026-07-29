'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Play, ShieldCheck, Cpu, Sliders, Layers } from 'lucide-react';

interface InteractiveWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveWorkflowModal({ isOpen, onClose }: InteractiveWorkflowModalProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  if (!isOpen) return null;

  const steps = [
    {
      step: 1,
      title: '01. Ingestion & Identity Signal Stream',
      desc: 'Applicant submits basic details via Web or Mobile SDK. Team Monsrow ingests device fingerprint, IP geolocation, and applicant PII in under 12ms.',
      previewText: '[INGESTION] IP: 198.51.100.42 (NYC) | Device: iPhone 16 Pro | PII: Verified'
    },
    {
      step: 2,
      title: '02. Parallel Multi-Vendor Orchestration',
      desc: 'Team Monsrow simultaneously queries pre-integrated vendor APIs (Socure, Experian, ComplyAdvantage, Sift) without hardcoded vendor locks.',
      previewText: '[CALLS] Socure DocV (Pass 42ms) | Experian KYC (Pass 38ms) | ComplyAdvantage (0 Hits)'
    },
    {
      step: 3,
      title: '03. Actionable AI & Fraud Signal ML',
      desc: 'Predictive ML models combine all vendor responses to check for synthetic identity patterns, device anomalies, and portfolio-wide velocity clusters.',
      previewText: '[FRAUD SIGNAL ML] Computed Composite Risk Score: 14 / 100 (Low Risk)'
    },
    {
      step: 4,
      title: '04. Automated Action & Audit Logging',
      desc: 'Orchestration engine triggers AUTO-APPROVE, grants access to account funding, and encrypts a complete immutable audit trail for compliance regulators.',
      previewText: '[DECISION] ACTION: AUTO_APPROVE | Total Latency: 74ms | Audit ID: #MONSROW-8921'
    }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setIsSimulating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsSimulating(false);
      }, 400);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#1C1D21] text-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-700 relative space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#FF5A60] font-bold text-xs uppercase tracking-widest">
          <Layers className="w-4 h-4" />
          <span>INTERACTIVE PLATFORM SIMULATOR</span>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold font-display">
            How Team Monsrow Orchestrates Identity &amp; Fraud Intelligence
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Step through the 4-stage pipeline to see real-time decisioning in action.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between gap-2 border-b border-gray-800 pb-4">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentStep(num)}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all text-center border ${
                currentStep === num
                  ? 'bg-[#FF5A60] text-white border-[#FF5A60]'
                  : currentStep > num
                  ? 'bg-emerald-900/40 text-emerald-300 border-emerald-700'
                  : 'bg-[#27282D] text-gray-400 border-gray-700 hover:bg-gray-700'
              }`}
            >
              Stage 0{num}
            </button>
          ))}
        </div>

        {/* Step Card Details */}
        <div className="bg-[#27282D] rounded-xl p-6 border border-gray-700 space-y-4 min-h-[220px] flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-white font-display">
              {steps[currentStep - 1].title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {steps[currentStep - 1].desc}
            </p>
          </div>

          <div className="p-3 bg-[#121316] rounded-lg border border-gray-800 text-xs font-mono text-emerald-400">
            {isSimulating ? (
              <span className="text-[#FF5A60] animate-pulse">Executing workflow logic step...</span>
            ) : (
              <span>{steps[currentStep - 1].previewText}</span>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="text-xs text-gray-400 hover:text-white disabled:opacity-30 font-bold uppercase tracking-wider"
          >
            ◀ Previous Stage
          </button>

          {currentStep === 4 ? (
            <button
              onClick={onClose}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase px-6 py-3 rounded-full transition-colors"
            >
              Complete Simulation ✓
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-[#FF5A60] hover:bg-[#E0484E] text-white text-xs font-bold uppercase px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
            >
              <span>Next Stage</span>
              <span>▶</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
