'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { soundFX } from '@/lib/audioFX';

interface ServiceMetricCard {
  id: string;
  metric: string;
  label: string;
  company: string;
  bgColor: string;
  serviceSlug: string;
  logoComponent: React.ReactNode;
}

export default function MetricsGrid() {
  const router = useRouter();

  const serviceMetricCards: ServiceMetricCard[] = [
    {
      id: 'destylus',
      metric: '90%',
      label: 'Software & App Engineering workflows automated',
      company: 'destylus.',
      serviceSlug: 'software-development',
      bgColor: 'bg-[#FF5A60]', // Vibrant Coral Red
      logoComponent: (
        <span className="font-black text-2xl tracking-tight text-[#1C1D21] font-sans">
          destylus<span className="text-[#1C1D21]">.</span>
        </span>
      ),
    },
    {
      id: 'hamilton',
      metric: '35%',
      label: 'Increase in AI & Digital Growth efficiency',
      company: 'Hamilton Learning Academy',
      serviceSlug: 'artificial-intelligence',
      bgColor: 'bg-[#FFA0AF]', // Soft Coral Pink
      logoComponent: (
        <div className="flex flex-col text-left leading-none text-[#1C1D21]">
          <span className="font-extrabold text-base tracking-tight">Hamilton</span>
          <span className="text-[10px] uppercase font-bold tracking-wider text-gray-800">Learning Academy</span>
        </div>
      ),
    },
    {
      id: 'venus',
      metric: '5x',
      label: 'Performance ROI on Factory & IoT Smart Automation',
      company: 'Venus School',
      serviceSlug: 'factory-iot',
      bgColor: 'bg-[#FF5A60]', // Vibrant Coral Red
      logoComponent: (
        <div className="flex items-center gap-2 text-[#1C1D21]">
          <svg className="w-5 h-5 text-[#1C1D21]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8" opacity="0.3" />
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
          </svg>
          <span className="text-xl font-bold tracking-tight">Venus School</span>
        </div>
      ),
    },
    {
      id: 'auratech',
      metric: '56%',
      label: 'Accelerated Cloud & SaaS Infrastructure deployment',
      company: 'aura tech',
      serviceSlug: 'cloud-infrastructure',
      bgColor: 'bg-[#FFA0AF]', // Soft Coral Pink
      logoComponent: (
        <span className="text-2xl font-black tracking-tight text-[#1C1D21]">
          aura tech
        </span>
      ),
    }
  ];

  const handleServiceRedirect = (slug: string) => {
    router.push(`/service/${slug}`);
  };

  return (
    <section className="bg-[#F5F4F0] py-12 lg:py-16 border-b border-[#E2E0D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Cards Grid - Animated one by one jumping from top on scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {serviceMetricCards.map((item, index) => (
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
              onClick={() => handleServiceRedirect(item.serviceSlug)}
              className={`${item.bgColor} rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 min-h-[420px] text-[#1C1D21] relative cursor-pointer group`}
            >
              {/* Top Section: Metric & Label */}
              <div className="flex-1 flex flex-col">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-normal font-sans tracking-tight text-[#1C1D21] leading-none mb-4 group-hover:scale-105 transition-transform duration-300 transform-gpu origin-left">
                  {item.metric}
                </div>
                <p className="text-xl sm:text-2xl font-normal text-[#1C1D21] leading-snug">
                  {item.label}
                </p>
              </div>

              {/* Middle Section: View Service Pill Button (Horizontally aligned across all cards) */}
              <div className="pt-6 mt-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceRedirect(item.serviceSlug);
                  }}
                  className="bg-[#1C1D21] hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-2 transition-transform active:scale-95 shadow-sm group/btn cursor-pointer"
                >
                  <span className="w-2 h-2 bg-white inline-block shrink-0 group-hover/btn:scale-125 transition-transform" />
                  <span>VIEW SERVICE</span>
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
    </section>
  );
}
