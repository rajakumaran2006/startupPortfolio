'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Building2, User, Mail, ShieldCheck } from 'lucide-react';

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleDemoModal({ isOpen, onClose }: ScheduleDemoModalProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: 'Chief Risk Officer',
    volume: '100k - 500k monthly',
    preferredDate: '2026-08-03',
    preferredTime: '10:00 AM EST'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [leadId, setLeadId] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'demo', ...formData }),
      });
      const json = await res.json();
      if (json.success) {
        setLeadId(json.leadId);
      }
    } catch (err) {
      console.error('Demo lead error:', err);
    } finally {
      setIsLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2E0D8] relative space-y-6 text-[#1C1D21]">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold font-display">
              Demo Confirmed!
            </h3>

            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-black">{formData.fullName || 'there'}</strong>. A Team Monsrow Solutions Architect has been assigned to your calendar invitation for <strong className="text-[#FF5A60]">{formData.preferredDate} at {formData.preferredTime}</strong>.
            </p>

            <div className="bg-[#F5F4F0] p-4 rounded-xl text-xs text-gray-600 space-y-1 text-left max-w-md mx-auto border">
              <div><strong>Company:</strong> {formData.company || 'Enterprise Partner'}</div>
              <div><strong>Scope:</strong> {formData.volume}</div>
              <div><strong>Confirmation Code:</strong> MONSROW-DEMO-9021</div>
            </div>

            {leadId && (
              <p className="text-[10px] text-gray-400">Ref: {leadId}</p>
            )}
            <button
              onClick={() => {
                setSubmitted(false);
                setLeadId('');
                onClose();
              }}
              className="bg-[#1C1D21] text-white text-xs font-bold uppercase px-8 py-3.5 rounded-full hover:bg-[#FF5A60] transition-colors"
            >
              Return to Platform
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="space-y-1">
              <span className="bg-[#FF5A60] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded">
                ENTERPRISE ACCESS
              </span>
              <h3 className="text-2xl font-extrabold font-display tracking-tight">
                Schedule a 1-on-1 Team Monsrow Demo
              </h3>
              <p className="text-xs text-gray-500">
                See how top global enterprises build custom software, deploy AI automation, and scale cloud infrastructure.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-[#1C1D21] focus:outline-none focus:ring-2 focus:ring-[#FF5A60]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@bank.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-[#1C1D21] focus:outline-none focus:ring-2 focus:ring-[#FF5A60]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Financial"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-[#1C1D21] focus:outline-none focus:ring-2 focus:ring-[#FF5A60]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                    Monthly Application Volume
                  </label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-[#1C1D21] focus:outline-none focus:ring-2 focus:ring-[#FF5A60]"
                  >
                    <option>&lt; 50k monthly</option>
                    <option>50k - 200k monthly</option>
                    <option>200k - 1M monthly</option>
                    <option>1M+ enterprise volume</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-[#1C1D21] focus:outline-none focus:ring-2 focus:ring-[#FF5A60]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#F5F4F0] border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-[#1C1D21] focus:outline-none focus:ring-2 focus:ring-[#FF5A60]"
                  >
                    <option>10:00 AM EST</option>
                    <option>01:00 PM EST</option>
                    <option>04:00 PM EST</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t flex items-center justify-between">
              <span className="text-[10px] text-gray-400">SOC 2 Type II Encrypted</span>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#1C1D21] hover:bg-[#FF5A60] disabled:opacity-60 text-white text-xs font-bold uppercase px-8 py-3.5 rounded-full transition-colors flex items-center gap-2"
              >
                <span>{isLoading ? 'BOOKING…' : 'CONFIRM DEMO BOOKING'}</span>
                {!isLoading && <span className="text-[#FF5A60] group-hover:text-white">▶</span>}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
