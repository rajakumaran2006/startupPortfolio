'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import { Navbar, Footer } from '@/components/layout';
import { ScheduleDemoModal, InteractiveWorkflowModal, SearchModal } from '@/components/modals';
import {
  Database, User, FileText, SlidersHorizontal, Cpu, Shield, Cloud, Sparkles,
  ChevronDown, ArrowRight
} from 'lucide-react';

const iconMap = {
  database: Database,
  user: User,
  file: FileText,
  sliders: SlidersHorizontal,
  cpu: Cpu,
  shield: Shield,
  cloud: Cloud,
  sparkles: Sparkles,
};

export default function ServicePage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : '';

  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const data = servicesData[slug];
  if (!data) return notFound();

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#1C1D21] font-sans antialiased">
      <Navbar
        onOpenDemo={() => setIsDemoOpen(true)}
        onOpenWorkflow={() => setIsWorkflowOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="pt-0">

        {/* ── HERO ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E4E2DC] shadow-xs">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF5A60] bg-[#FFF0F0] border border-[#FFD0D2] px-3 py-1 rounded-full mb-6">
              {data.tag}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-[#1C1D21] leading-tight tracking-tight max-w-4xl mb-6">
              {data.heroHeadline}
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
              {data.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="bg-[#1C1D21] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-[#FF5A60] transition-colors cursor-pointer"
              >
                Schedule a Demo
              </button>
              <Link
                href="/contact"
                className="border border-[#1C1D21] text-[#1C1D21] text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-[#1C1D21] hover:text-white transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 text-center">
            {data.clientImpactHeadline}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E4E2DC] shadow-xs flex flex-col justify-between gap-4">
                <p className="text-sm text-gray-600 leading-relaxed italic">"{t.quote}"</p>
                <div className="text-xs font-bold uppercase tracking-widest text-[#1C1D21]">{t.logoText}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SUITE CARDS ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-[#1C1D21] rounded-3xl p-8 sm:p-12 lg:p-16">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF5A60] border border-[#FF5A60]/40 px-3 py-1 rounded-full mb-6">
              {data.suiteTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white leading-tight mb-3 max-w-2xl">
              {data.suiteHeadline}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-10">
              {data.suiteDescription}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.suiteCards.map((card, i) => (
                <div key={i} className={`${card.bgColor} ${card.textColor} rounded-2xl p-6 flex flex-col justify-between min-h-[200px]`}>
                  <div>
                    <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">{card.number}</span>
                    <h3 className="text-xl font-extrabold font-display mt-2 leading-snug">{card.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed opacity-80 mt-4">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UNIFIED FEATURES ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E4E2DC] shadow-xs">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF5A60] bg-[#FFF0F0] border border-[#FFD0D2] px-3 py-1 rounded-full mb-6">
              {data.unifiedTag}
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#1C1D21] leading-tight mb-4">
                  {data.unifiedHeadline}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                  {data.unifiedDescription}
                </p>
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="bg-[#FF5A60] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-[#E0474D] transition-colors cursor-pointer"
                >
                  See it in action
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.unifiedFeatures.map((feat, i) => {
                  const Icon = iconMap[feat.iconName] || Sparkles;
                  return (
                    <div key={i} className="bg-[#F5F4F0] rounded-2xl p-5 border border-[#E4E2DC]">
                      <div className="w-9 h-9 rounded-xl bg-[#1C1D21] text-white flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-[#1C1D21] mb-1">{feat.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold font-display text-[#1C1D21] mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#E4E2DC] overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-left text-sm font-semibold text-[#1C1D21] hover:bg-[#F5F4F0] transition-colors cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 ml-4 text-gray-400 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-[#F0EEE8]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-[#FF5A60] rounded-3xl p-10 sm:p-14 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">Ready to get started?</h2>
            <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Talk to a Team Monsrow solutions architect and see how {data.title} can transform your operations.
            </p>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="bg-white text-[#FF5A60] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#1C1D21] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              Schedule Your Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </main>

      <Footer
        onOpenDemo={() => setIsDemoOpen(true)}
        onOpenWorkflow={() => setIsWorkflowOpen(true)}
      />

      <ScheduleDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <InteractiveWorkflowModal isOpen={isWorkflowOpen} onClose={() => setIsWorkflowOpen(false)} />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenDemo={() => { setIsSearchOpen(false); setIsDemoOpen(true); }}
      />
    </div>
  );
}
