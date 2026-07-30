'use client';

import React, { useState } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { ScheduleDemoModal, InteractiveWorkflowModal, SearchModal } from '@/components/modals';
import { 
  ArrowRight, 
  Briefcase, 
  ChevronRight, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Building2, 
  X,
  Sparkles,
  ShieldCheck,
  Send
} from 'lucide-react';
import { soundFX } from '@/lib/audioFX';

interface JobPosition {
  title: string;
  location: string;
  type: string;
  dept: string;
  description: string;
  requirements: string[];
}

export default function CareersPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  // Form states for job application modal
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantResume, setApplicantResume] = useState('');

  const jobOpenings: Record<string, JobPosition[]> = {
    'Artificial Intelligence': [
      {
        title: 'AI & Machine Learning Engineer',
        location: 'Remote',
        type: 'Full-time',
        dept: 'Artificial Intelligence',
        description: 'Develop and deploy predictive machine learning models, real-time anomaly detection algorithms, and LLM-powered enterprise workflows.',
        requirements: ['3+ years in production Machine Learning & NLP', 'Proficiency in Python, PyTorch, or TensorFlow', 'Experience with model serving & vector databases']
      }
    ],
    'Engineering': [
      {
        title: 'Senior Full-Stack Developer',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        dept: 'Engineering',
        description: 'Architect scalable Next.js applications, microservices, and real-time interactive user interfaces for enterprise clients.',
        requirements: ['4+ years with React, Next.js, TypeScript & Node.js', 'Experience with high-throughput PostgreSQL and REST/gRPC APIs', 'Strong UI aesthetics & state management mastery']
      },
      {
        title: 'Lead Cloud Infrastructure Engineer',
        location: 'Hybrid',
        type: 'Full-time',
        dept: 'Engineering',
        description: 'Manage AWS/GCP cloud environments, Kubernetes clusters, and automated CI/CD deployment pipelines.',
        requirements: ['Deep Terraform & Docker/Kubernetes experience', 'SOC 2 & enterprise security compliance automation', 'Proven uptime optimization track record']
      }
    ],
    'Internship Programs': [
      {
        title: 'AI Research & Data Science Intern',
        location: 'Remote',
        type: 'Internship',
        dept: 'Internship Programs',
        description: 'Collaborate with senior AI engineers to train, benchmark, and evaluate cutting-edge Machine Learning and data processing pipelines.',
        requirements: ['Currently pursuing CS, AI, or STEM degree', 'Solid foundation in Python & Data Structures', 'Passionate about applied AI research']
      },
      {
        title: 'Full-Stack Software Engineering Intern',
        location: 'Hybrid / Remote',
        type: 'Internship',
        dept: 'Internship Programs',
        description: 'Gain hands-on engineering experience building real-world web features, API integrations, and UI components.',
        requirements: ['Experience building projects with React / TypeScript & Node.js', 'Good understanding of Web fundamentals and Git', 'Eager to learn fast in a high-growth environment']
      }
    ]
  };

  const totalOpenings = Object.values(jobOpenings).reduce((acc, list) => acc + list.length, 0);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playSuccess();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantResume('');
    }, 2500);
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
            SECTION 1: HERO SECTION (Exact layout from Image 1)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-7 pb-8 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left White Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 md:p-12 border border-[#E4E2DC] shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">
                  ABOUT
                </span>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1C1D21] font-display mb-6 leading-[1.08]">
                  Work at <br className="hidden sm:inline" />Team Monsrow
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal mb-8">
                  Derisking client onboarding, risk management, and operational workflows for high-growth enterprises worldwide.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-3 text-sm font-semibold text-[#1C1D21]">
                <div className="w-8 h-8 rounded-full bg-[#F4F3EF] flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-[#1C1D21]" />
                </div>
                <span>{totalOpenings} open positions</span>
              </div>
            </div>

            {/* Right Graphic Card (Lined background with colorful graph bars matching Image 1) */}
            <div className="lg:col-span-7 bg-[#F0EFEA] rounded-3xl border border-[#E4E2DC] overflow-hidden min-h-[320px] md:min-h-[420px] relative p-8 flex items-end justify-end">
              {/* Background vertical parallel gridlines matching image 1 */}
              <div className="absolute inset-0 grid grid-cols-8 gap-0 opacity-40 pointer-events-none">
                <div className="border-r border-[#CFCDC4]"></div>
                <div className="border-r border-[#CFCDC4]"></div>
                <div className="border-r border-[#CFCDC4]"></div>
                <div className="border-r border-[#CFCDC4]"></div>
                <div className="border-r border-[#CFCDC4]"></div>
                <div className="border-r border-[#CFCDC4]"></div>
                <div className="border-r border-[#CFCDC4]"></div>
                <div></div>
              </div>

              {/* Sun/Moon Circle graphic */}
              <div className="absolute top-12 right-24 w-28 h-28 rounded-full bg-white opacity-90 shadow-xs pointer-events-none"></div>

              {/* Bar Graph Visual (Pink / Magenta / Deep Violet bars matching Image 1) */}
              <div className="relative z-10 flex items-end gap-5 h-64 sm:h-72 pr-6 sm:pr-12">
                <div 
                  className="w-14 sm:w-20 bg-[#F8A2BF] rounded-t-lg transition-all duration-700 hover:scale-105 shadow-sm"
                  style={{ height: '40%' }}
                ></div>
                <div 
                  className="w-14 sm:w-20 bg-[#FF576D] rounded-t-lg transition-all duration-700 hover:scale-105 shadow-sm"
                  style={{ height: '70%' }}
                ></div>
                <div 
                  className="w-14 sm:w-20 bg-[#9B1B5B] rounded-t-lg transition-all duration-700 hover:scale-105 shadow-sm"
                  style={{ height: '95%' }}
                ></div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2: CULTURE BANNER (Blue curve artwork + description matching Image 1)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Soft Blue Banner with Concentric Arch lines matching Image 1 */}
            <div className="lg:col-span-6 bg-[#9CB8E8] rounded-3xl overflow-hidden relative min-h-[260px] sm:min-h-[300px] border border-[#89A9DC] flex items-center justify-center p-8">
              {/* Concentric Circle Arcs */}
              <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[1.5px] border-blue-900/30"></div>
              <div className="absolute -bottom-8 -left-8 w-96 h-96 rounded-full border-[1.5px] border-blue-900/30"></div>
              <div className="absolute bottom-4 left-4 w-[28rem] h-[28rem] rounded-full border-[1.5px] border-blue-900/30"></div>
              <div className="absolute bottom-12 left-12 w-[34rem] h-[34rem] rounded-full border-[1.5px] border-blue-900/30"></div>
              
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#274690]"></div>
              <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-[#3B62B5]"></div>
              <div className="absolute bottom-2 left-2 w-32 h-32 rounded-full bg-[#5D85DC]"></div>
            </div>

            {/* Right Text Block */}
            <div className="lg:col-span-6 bg-[#F4F3EF] rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D21] font-display mb-4">
                We're proud of our culture
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6 font-normal">
                At Team Monsrow, we bring together curious minds, systems thinkers, and domain experts dedicated to building resilient enterprise tech. We thrive on autonomy, direct feedback, and continuous innovation.
              </p>
              <div>
                <a 
                  href="/about" 
                  onClick={() => soundFX.playClick()}
                  className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#1C1D21] hover:text-[#FF576D] transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-[#1C1D21] text-white flex items-center justify-center text-[10px]">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span>MEET OUR LEADERSHIP TEAM</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INTERVIEWING PROCESS (6 Yellow numbered circles matching Image 1)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D21] font-display mb-10">
            Interviewing at Team Monsrow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Step 1 */}
            <div className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 border border-[#E0DDD5] flex gap-5 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F5D442] text-[#1C1D21] font-black text-xl flex items-center justify-center shrink-0 shadow-xs">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1C1D21] mb-2">First recruiter screen</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A 30-minute introductory conversation to discuss your background, alignment with our mission, and mutual expectations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 border border-[#E0DDD5] flex gap-5 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F5D442] text-[#1C1D21] font-black text-xl flex items-center justify-center shrink-0 shadow-xs">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1C1D21] mb-2">Hiring manager deep dive</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A focused technical or strategic discussion with your potential manager exploring your past projects and problem-solving methodology.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 border border-[#E0DDD5] flex gap-5 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F5D442] text-[#1C1D21] font-black text-xl flex items-center justify-center shrink-0 shadow-xs">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1C1D21] mb-2">Practical assignment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A real-world technical task or case study designed to evaluate your hands-on execution and architectural judgment.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 border border-[#E0DDD5] flex gap-5 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F5D442] text-[#1C1D21] font-black text-xl flex items-center justify-center shrink-0 shadow-xs">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1C1D21] mb-2">Technical &amp; team panel</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A collaborative session with peer engineers and cross-functional partners to solve a live scenario together.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 border border-[#E0DDD5] flex gap-5 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F5D442] text-[#1C1D21] font-black text-xl flex items-center justify-center shrink-0 shadow-xs">
                5
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1C1D21] mb-2">Culture &amp; leadership sync</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  An open conversation with executive leadership regarding long-term vision, growth trajectory, and company values.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 border border-[#E0DDD5] flex gap-5 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F5D442] text-[#1C1D21] font-black text-xl flex items-center justify-center shrink-0 shadow-xs">
                6
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1C1D21] mb-2">Offer &amp; onboarding</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We walk through total compensation, stock options, perks, and prepare a tailored onboarding plan for your first day.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: EQUAL EMPLOYMENT OPPORTUNITY (Matching Image 1 layout)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-extrabold text-[#1C1D21] font-display">
                Equal Employment Opportunity
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Team Monsrow is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All employment decisions are based on business needs, job requirements, and individual qualifications, without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, veteran status, or disability status.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: CURRENT OPENINGS (Grouped list with dark circular arrows matching Image 1)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-4xl font-black text-[#1C1D21] font-display mb-12">
            Current Openings
          </h2>

          <div className="space-y-12">
            {Object.entries(jobOpenings).map(([category, jobs]) => (
              <div key={category} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-b border-[#E2DFD7] pb-10">
                {/* Category Header */}
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-bold text-[#1C1D21] font-display">
                    {category}
                  </h3>
                </div>

                {/* Jobs List */}
                <div className="lg:col-span-8 space-y-3">
                  {jobs.map((job, idx) => (
                    <div 
                      key={idx}
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedJob(job);
                      }}
                      className="bg-[#EFECE6] hover:bg-white rounded-2xl p-5 sm:p-6 border border-[#E0DDD5] hover:border-black/30 transition-all cursor-pointer flex items-center justify-between group shadow-2xs"
                    >
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#1C1D21] group-hover:text-[#FF576D] transition-colors">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 font-medium">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-gray-400" />
                            {job.location}
                          </span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-[#1C1D21] group-hover:bg-[#FF576D] text-white flex items-center justify-center transition-colors shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Application / Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-gray-200 shadow-2xl relative">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {appliedSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1C1D21]">Application Submitted!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you for applying to Team Monsrow for the <strong className="text-black">{selectedJob.title}</strong> position. Our recruiting team will review your application shortly.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF576D]">
                  {selectedJob.dept}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1D21] mt-1 mb-2 font-display">
                  {selectedJob.title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-6 pb-4 border-b border-gray-100">
                  <span>{selectedJob.location}</span>
                  <span>•</span>
                  <span>{selectedJob.type}</span>
                </div>

                <div className="space-y-4 text-sm text-gray-700 mb-6">
                  <p>{selectedJob.description}</p>
                  <div>
                    <h4 className="font-bold text-[#1C1D21] mb-2">Key Qualifications:</h4>
                    <ul className="space-y-1.5 list-disc list-inside text-gray-600">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4 pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-[#1C1D21] text-base">Quick Application</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">LinkedIn / Portfolio URL *</label>
                    <input 
                      type="url" 
                      required
                      value={applicantResume}
                      onChange={(e) => setApplicantResume(e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FF576D] hover:bg-[#e0475b] text-white font-bold rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

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
