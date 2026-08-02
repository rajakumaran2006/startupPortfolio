'use client';

import React, { useState } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { ScheduleDemoModal, InteractiveWorkflowModal, SearchModal } from '@/components/modals';
import { 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { soundFX } from '@/lib/audioFX';

export default function ContactPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form inputs matching Image 2
  const [formData, setFormData] = useState({
    businessEmail: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    companyName: '',
    howCanWeHelp: '',
    howDidYouHear: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...formData }),
      });
    } catch (err) {
      console.error('Contact lead error:', err);
    } finally {
      setIsLoading(false);
      soundFX.playSuccess();
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          businessEmail: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
          companyName: '',
          howCanWeHelp: '',
          howDidYouHear: ''
        });
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#1C1D21] font-sans antialiased selection:bg-[#FF5A6E] selection:text-white">
      {/* Navbar */}
      <Navbar 
        onOpenDemo={() => setIsDemoOpen(true)}
        onOpenWorkflow={() => setIsWorkflowOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="pt-0 pb-20">
        {/* =========================================================================
            SECTION 1: TOP MAIN CONTACT SPLIT SECTION (Pixel-perfect matching Image 2)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-7 pb-6 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left White Hero Box (Matching Image 2 left side) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E4E2DC] shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-block text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#1C1D21] mb-4">
                  CONTACT US
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1C1D21] leading-[1.18] tracking-tight font-sans mb-4 sm:mb-5">
                  We'd love to hear <br className="hidden sm:inline" />from you
                </h1>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-6">
                  Please fill out the quick form, and we will be in touch!
                </p>
              </div>

              {/* Direct Info Highlights */}
              <div className="pt-4 border-t border-gray-100 space-y-4">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#1C1D21]">
                  <div className="w-9 h-9 rounded-xl bg-[#F4F3EF] flex items-center justify-center text-[#FF5A6E]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-normal uppercase">Direct Sales Email</div>
                    <div>solutions@teammonsrow.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold text-[#1C1D21]">
                  <div className="w-9 h-9 rounded-xl bg-[#F4F3EF] flex items-center justify-center text-[#FF5A6E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-normal uppercase">Global Headquarters</div>
                    <div>New York • San Francisco • London</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card (Matching Image 2 right side) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E4E2DC] shadow-xs">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#1C1D21] font-display">Message Sent!</h3>
                  <p className="text-gray-600 text-base max-w-md mx-auto">
                    Thank you for reaching out to Team Monsrow. A specialist will get back to you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* BUSINESS EMAIL */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                      BUSINESS EMAIL *
                    </label>
                    <input 
                      type="email"
                      name="businessEmail"
                      required
                      value={formData.businessEmail}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-sm text-[#1C1D21] focus:outline-none focus:border-[#FF5A6E] focus:bg-white transition-all"
                    />
                  </div>

                  {/* FIRST NAME & LAST NAME */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                        FIRST NAME *
                      </label>
                      <input 
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Alex"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-sm text-[#1C1D21] focus:outline-none focus:border-[#FF5A6E] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                        LAST NAME *
                      </label>
                      <input 
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-sm text-[#1C1D21] focus:outline-none focus:border-[#FF5A6E] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* PHONE NUMBER & COMPANY NAME */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                        PHONE NUMBER (OPTIONAL)
                      </label>
                      <input 
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-sm text-[#1C1D21] focus:outline-none focus:border-[#FF5A6E] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                        COMPANY NAME *
                      </label>
                      <input 
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Acme Financial Corp"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-sm text-[#1C1D21] focus:outline-none focus:border-[#FF5A6E] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* HOW CAN WE HELP YOU? */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                      HOW CAN WE HELP YOU? *
                    </label>
                    <textarea 
                      name="howCanWeHelp"
                      rows={4}
                      required
                      value={formData.howCanWeHelp}
                      onChange={handleChange}
                      placeholder="Tell us about your team's goals, operational challenges, or deployment timeframe..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-sm text-[#1C1D21] focus:outline-none focus:border-[#FF5A6E] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* HOW DID YOU HEAR ABOUT US? */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                      HOW DID YOU HEAR ABOUT US?
                    </label>
                    <select
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-sm text-[#1C1D21] focus:outline-none focus:border-[#FF5A6E] focus:bg-white transition-all"
                    >
                      <option value="">Select an option...</option>
                      <option value="Search Engine">Search Engine (Google / Bing)</option>
                      <option value="Industry Partner">Industry Partner Referral</option>
                      <option value="Social Media">LinkedIn / Twitter / Social Media</option>
                      <option value="News & Media">Press & News Coverage</option>
                      <option value="Colleague">Colleague or Peer Recommendation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Privacy Legal Note matching Image 2 */}
                  <p className="text-xs text-gray-500 leading-relaxed font-normal pt-2">
                    Team Monsrow may use the information submitted on this page for marketing and inquiry purposes, including to send you relevant solution proposals regarding the Team Monsrow Service. By submitting your information above, you consent to Team Monsrow's storage and handling of your data in accordance with our <a href="#" className="underline font-bold text-black hover:text-[#FF5A6E]">Privacy Policy</a>.
                  </p>

                  {/* Submit Button (Bright Salmon Pink matching Image 2) */}
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-3.5 bg-[#FF5A6E] hover:bg-[#E0475B] disabled:opacity-60 text-white font-bold rounded-xl text-sm transition-all cursor-pointer shadow-sm hover:shadow"
                    >
                      {isLoading ? 'Sending…' : 'Submit'}
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2: GET TO KNOW TEAM MONSROW (4 Colorful Cards matching Image 2)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Header Title Box */}
            <div className="lg:col-span-4 bg-[#EFECE6] rounded-3xl p-8 sm:p-10 border border-[#E0DDD5] flex items-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D21] font-display leading-tight">
                Get to know Team Monsrow
              </h2>
            </div>

            {/* 4 Colorful Cards Matrix matching Image 2 */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: What is Team Monsrow? (Soft Pink #F8A2BF) */}
              <a 
                href="/about"
                onClick={() => soundFX.playClick()}
                className="bg-[#F8A2BF] text-[#1C1D21] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[160px] group transition-transform hover:-translate-y-1 shadow-2xs"
              >
                <h3 className="text-2xl font-extrabold font-display">
                  What is Team Monsrow?
                </h3>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider mt-4">
                  <div className="w-7 h-7 rounded-full bg-[#1C1D21] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <span>Learn more</span>
                </div>
              </a>

              {/* Card 2: Our Story (Coral Red #FF576D) */}
              <a 
                href="/about"
                onClick={() => soundFX.playClick()}
                className="bg-[#FF576D] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[160px] group transition-transform hover:-translate-y-1 shadow-2xs"
              >
                <h3 className="text-2xl font-extrabold font-display">
                  Our Story
                </h3>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider mt-4">
                  <div className="w-7 h-7 rounded-full bg-white text-[#1C1D21] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 text-[#1C1D21]" />
                  </div>
                  <span>Learn more</span>
                </div>
              </a>

              {/* Card 3: Industries We Serve (Plum Purple #9B1B5B) */}
              <a 
                href="/industries"
                onClick={() => soundFX.playClick()}
                className="bg-[#9B1B5B] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[160px] group transition-transform hover:-translate-y-1 shadow-2xs"
              >
                <h3 className="text-2xl font-extrabold font-display">
                  Industries We Serve
                </h3>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider mt-4">
                  <div className="w-7 h-7 rounded-full bg-white text-[#1C1D21] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 text-[#1C1D21]" />
                  </div>
                  <span>Learn more</span>
                </div>
              </a>

              {/* Card 4: Come work with us (Rose Pink #E76E99) */}
              <a 
                href="/careers"
                onClick={() => soundFX.playClick()}
                className="bg-[#E76E99] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[160px] group transition-transform hover:-translate-y-1 shadow-2xs"
              >
                <h3 className="text-2xl font-extrabold font-display">
                  Come work with us
                </h3>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider mt-4">
                  <div className="w-7 h-7 rounded-full bg-white text-[#1C1D21] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 text-[#1C1D21]" />
                  </div>
                  <span>Learn more</span>
                </div>
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer 
        onOpenDemo={() => setIsDemoOpen(true)}
        onOpenWorkflow={() => setIsWorkflowOpen(true)}
      />

      {/* Modals */}
      <ScheduleDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <InteractiveWorkflowModal isOpen={isWorkflowOpen} onClose={() => setIsWorkflowOpen(false)} />
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onOpenDemo={() => {
          setIsSearchOpen(false);
          setIsDemoOpen(true);
        }} 
      />
    </div>
  );
}
