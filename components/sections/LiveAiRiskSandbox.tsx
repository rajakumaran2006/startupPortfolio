'use client';

import React, { useState } from 'react';
import { Sparkles, Cpu, Sliders, CheckCircle2, AlertCircle, ArrowRight, RefreshCw, Layers, ShieldCheck } from 'lucide-react';
import { OptionWheel } from '@/components/ui';
import { soundFX } from '@/lib/audioFX';

export default function LiveAiRiskSandbox() {
  const [businessType, setBusinessType] = useState('Fintech Neobank');
  const [scenario, setScenario] = useState('Prevent synthetic identity fraud & ATO during instant mobile onboarding');
  const [volume, setVolume] = useState('250,000 monthly applications');
  const [targetRegion, setTargetRegion] = useState('North America & Europe');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const presets = [
    {
      label: 'Digital Mortgage Lender',
      bType: 'Digital Mortgage & Commercial Lending',
      scen: 'Complex KYB/KYC document verification & income anomaly detection',
      vol: '50,000 monthly applicants',
      reg: 'North America'
    },
    {
      label: 'Crypto Onramp & Exchange',
      bType: 'Crypto & Web3 Platform',
      scen: 'Global sanctions screening, PEP checks & instant high-velocity ACH risk scoring',
      vol: '500,000 monthly transactions',
      reg: 'Global / Multi-Jurisdiction'
    },
    {
      label: 'Credit Union Deposit Onboarding',
      bType: 'Regional Credit Union',
      scen: 'Zero-friction member onboarding with automated step-up MFA for VPN/proxy devices',
      vol: '15,000 monthly new accounts',
      reg: 'United States'
    }
  ];

  const handleGenerateArchitecture = async () => {
    soundFX.playClick();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/gemini/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessType, scenario, volume, targetRegion })
      });

      const contentType = res.headers.get('content-type') || '';
      let json;
      if (contentType.includes('application/json')) {
        json = await res.json();
      } else {
        const text = await res.text();
        throw new Error(res.ok ? 'Unexpected response format from server' : `Server error (${res.status}): ${text.slice(0, 100)}`);
      }

      if (!res.ok || json.error) {
        throw new Error(json.error || 'Failed to generate AI architecture');
      }

      setResult(json.data);
      soundFX.playSuccess();
    } catch (err: any) {
      setError(err.message || 'Error communicating with AI engine');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-sandbox" className="bg-[#1C1D21] text-white py-16 lg:py-24 border-b border-gray-800 relative overflow-hidden">
      
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-monsrow-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#FF5A60] text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE MONSROW AI ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.08]">
            Tailor your custom risk orchestration architecture in seconds
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            Test Team Monsrow&apos;s Actionable AI logic on your specific institution profile. Select a scenario below or enter your operational requirements to generate an end-to-end data partner &amp; decision pipeline.
          </p>
        </div>

        {/* Input Parameters Box */}
        <div className="bg-[#27282D] rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-2xl mb-10 space-y-6">
          
          {/* OptionWheel Interactive Selector */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#121316] p-4 sm:p-6 rounded-xl border border-gray-700/80">
            <div className="md:col-span-5 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#FF5A60] uppercase tracking-widest">
                ▲ INTERACTIVE WHEEL SELECTOR
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                Spin &amp; Select Risk Profile
              </h3>
              <p className="text-xs text-gray-400">
                Drag or scroll the wheel to load pre-configured enterprise fraud &amp; compliance pipelines with tactile feedback.
              </p>
            </div>

            <div className="md:col-span-7 h-[160px] relative overflow-hidden bg-[#1C1D21] rounded-lg border border-gray-800">
              <OptionWheel
                items={[
                  'Fintech Neobank',
                  'Digital Mortgage Lender',
                  'Crypto Onramp & Exchange',
                  'Credit Union Deposit Onboarding',
                  'Commercial Lending Bank',
                  'Cross-Border Remittance'
                ]}
                defaultSelected={0}
                textColor="#828590"
                activeColor="#FF5A60"
                fontSize={1.05}
                spacing={2.2}
                curve={0}
                tilt={0}
                blur={1.0}
                fade={0.4}
                inset={20}
                onChange={(idx, label) => {
                  setBusinessType(label);
                  if (label === 'Digital Mortgage Lender') {
                    setScenario('Complex KYB/KYC document verification & income anomaly detection');
                    setVolume('50,000 monthly applicants');
                    setTargetRegion('North America');
                  } else if (label === 'Crypto Onramp & Exchange') {
                    setScenario('Global sanctions screening, PEP checks & instant high-velocity ACH risk scoring');
                    setVolume('500,000 monthly transactions');
                    setTargetRegion('Global / Multi-Jurisdiction');
                  } else if (label === 'Credit Union Deposit Onboarding') {
                    setScenario('Zero-friction member onboarding with automated step-up MFA for VPN/proxy devices');
                    setVolume('15,000 monthly new accounts');
                    setTargetRegion('United States');
                  } else if (label === 'Fintech Neobank') {
                    setScenario('Prevent synthetic identity fraud & ATO during instant mobile onboarding');
                    setVolume('250,000 monthly applications');
                    setTargetRegion('North America & Europe');
                  } else {
                    setScenario('KYB corporate verification & ultimate beneficial owner (UBO) discovery');
                    setVolume('20,000 corporate clients');
                    setTargetRegion('Global');
                  }
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                Business Type
              </label>
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full bg-[#121316] border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5A60]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                Primary Risk Objective
              </label>
              <input
                type="text"
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
                className="w-full bg-[#121316] border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5A60]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                Application Volume
              </label>
              <input
                type="text"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full bg-[#121316] border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5A60]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                Target Region
              </label>
              <input
                type="text"
                value={targetRegion}
                onChange={(e) => setTargetRegion(e.target.value)}
                className="w-full bg-[#121316] border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5A60]"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleGenerateArchitecture}
              disabled={loading}
              className="bg-[#FF5A60] hover:bg-[#E0484E] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-lg disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Compiling AI Architecture...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>GENERATE AI RISK WORKFLOW</span>
                  <span>▶</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Error Output */}
        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 p-4 rounded-xl text-xs flex items-center gap-3 mb-8">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* AI Output Visualization Panel */}
        {result && (
          <div className="bg-[#27282D] rounded-2xl p-6 sm:p-8 border border-[#FF5A60]/40 space-y-8 animate-in fade-in duration-300">
            
            {/* Header / Executive Summary */}
            <div className="border-b border-gray-700 pb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#FF5A60] font-bold uppercase tracking-wider">
                  GENERATED ENTERPRISE PIPELINE
                </span>
                <span className="text-xs bg-emerald-900/80 text-emerald-300 border border-emerald-700 px-3 py-1 rounded-full font-bold">
                  OPTIMIZED FOR {businessType.toUpperCase()}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {result.executiveSummary}
              </h3>
            </div>

            {/* Impact Metric Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#121316] p-4 rounded-xl border border-gray-700 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-[#FF5A60] font-display">
                    {result.estimatedApprovalBoost || '+24%'}
                  </div>
                  <div className="text-xs text-gray-400">Estimated Auto-Approval Lift</div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-[#FF5A60]" />
              </div>

              <div className="bg-[#121316] p-4 rounded-xl border border-gray-700 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-display">
                    {result.estimatedFraudReduction || '42%'}
                  </div>
                  <div className="text-xs text-gray-400">Estimated Fraud Reduction</div>
                </div>
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
            </div>

            {/* Orchestration Workflow Pipeline */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FF5A60]" />
                <span>Sequenced Orchestration Pipeline</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {result.orchestrationWorkflow?.map((step: any, idx: number) => (
                  <div key={idx} className="bg-[#121316] p-4 rounded-xl border border-gray-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-[#FF5A60] text-white text-xs font-bold flex items-center justify-center">
                        {step.stepNumber || idx + 1}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">Stage {idx + 1}</span>
                    </div>

                    <div className="font-bold text-sm text-white">{step.stage}</div>

                    <ul className="space-y-1 text-xs text-gray-300 pt-1">
                      {step.checks?.map((c: string, cIdx: number) => (
                        <li key={cIdx} className="flex items-center gap-1.5">
                          <span className="text-[#FF5A60]">▸</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-2 bg-[#27282D] rounded text-[10px] text-gray-400 font-mono mt-2">
                      Logic: {step.ruleLogic}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Data Partners */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Recommended Integrated Partners
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.recommendedDataPartners?.map((p: any, pIdx: number) => (
                  <div key={pIdx} className="bg-[#121316] px-3.5 py-2 rounded-lg border border-gray-700 text-xs">
                    <span className="font-bold text-white">{p.name}</span>
                    <span className="text-gray-400 ml-1.5 font-mono text-[10px]">({p.category})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
