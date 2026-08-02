'use client';

import React from 'react';
import Link from 'next/link';

interface AboutSectionTwoProps {
  leftParagraph1?: string;
  leftParagraph2?: string;
  linkText?: string;
  linkHref?: string;
  rightHeading?: string;
  onLinkClick?: () => void;
}

export default function AboutSectionTwo({
  leftParagraph1 = 'Team Monsrow is an end-to-end custom software & AI engineering company that helps global enterprises, high-growth startups, and industry leaders build robust digital solutions, cloud systems, and intelligent applications.',
  leftParagraph2 = "Over 50+ innovative organizations turn to Team Monsrow to accelerate product development, modernize legacy infrastructure, and deploy custom agentic AI systems designed for real business impact.",
  linkText = "Learn more about Team Monsrow's services",
  linkHref = "#",
  rightHeading = "We're your end-to-end partner for custom software, enterprise cloud systems, and AI innovation.",
  onLinkClick,
}: AboutSectionTwoProps) {
  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-stretch">
        
        {/* Left Off-White Info Box */}
        <div className="bg-[#F4F4F2] rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 min-h-[340px] sm:min-h-[380px]">
          <div className="space-y-6">
            <p className="text-base sm:text-lg lg:text-[17px] text-[#1C1D21] leading-relaxed font-normal">
              {leftParagraph1}
            </p>
            <p className="text-base sm:text-lg lg:text-[17px] text-[#1C1D21] leading-relaxed font-normal">
              {leftParagraph2}
            </p>
          </div>

          <div className="pt-2">
            {onLinkClick ? (
              <button
                onClick={onLinkClick}
                className="text-base font-medium text-[#1C1D21] underline underline-offset-4 decoration-1 hover:text-[#FF5A60] transition-colors cursor-pointer text-left"
              >
                {linkText}
              </button>
            ) : (
              <Link
                href={linkHref}
                className="text-base font-medium text-[#1C1D21] underline underline-offset-4 decoration-1 hover:text-[#FF5A60] transition-colors inline-block"
              >
                {linkText}
              </Link>
            )}
          </div>
        </div>

        {/* Right Warm Yellow Statement Box */}
        <div className="bg-[#F5D665] text-[#1C1D21] rounded-3xl p-8 sm:p-10 lg:p-12 flex items-center min-h-[340px] sm:min-h-[380px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.18] tracking-tight font-sans text-[#1C1D21]">
            {rightHeading}
          </h2>
        </div>

      </div>
    </section>
  );
}
