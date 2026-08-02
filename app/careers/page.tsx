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
    'Internship Programs': [
      {
        title: 'AI & Machine Learning Engineering Intern',
        location: 'Remote',
        type: 'Internship',
        dept: 'Internship Programs',
        description: 'Collaborate with senior AI engineers to train, benchmark, and fine-tune LLMs, vector search algorithms, and machine learning pipelines.',
        requirements: ['Currently pursuing CS, AI, or Data Science degree', 'Proficiency in Python, PyTorch, or TensorFlow', 'Passionate about applied AI and neural network optimization']
      },
      {
        title: 'Full-Stack Software Engineering Intern',
        location: 'Hybrid / Remote',
        type: 'Internship',
        dept: 'Internship Programs',
        description: 'Build user-facing web applications, responsive components, and scalable REST/gRPC API integrations using Next.js, React, and TypeScript.',
        requirements: ['Experience with React, TypeScript & Node.js', 'Good understanding of web fundamentals, APIs, and Git', 'Eager to solve complex UI/UX and backend problems']
      },
      {
        title: 'Cloud Infrastructure & DevOps Intern',
        location: 'Remote',
        type: 'Internship',
        dept: 'Internship Programs',
        description: 'Assist in building automated Docker/Kubernetes container deployments, CI/CD pipelines, and cloud monitoring across AWS & GCP.',
        requirements: ['Understanding of Linux, Docker, and shell scripting', 'Basic knowledge of Cloud platforms (AWS/GCP/Azure)', 'Enthusiastic about DevOps and infrastructure automation']
      },
      {
        title: 'UI/UX & Product Design Intern',
        location: 'Remote',
        type: 'Internship',
        dept: 'Internship Programs',
        description: 'Design modern enterprise web interfaces, interactive prototypes, and custom design system components in Figma.',
        requirements: ['Portfolio demonstrating UI/UX design projects', 'Proficiency in Figma, typography, and responsive grid layouts', 'Keen eye for micro-interactions and modern design aesthetics']
      },
      {
        title: 'Data Analytics & Engineering Intern',
        location: 'Hybrid / Remote',
        type: 'Internship',
        dept: 'Internship Programs',
        description: 'Build automated data extraction pipelines, SQL analytics dashboards, and real-time reporting models for enterprise client datasets.',
        requirements: ['Strong SQL and Python data analysis skills (Pandas/NumPy)', 'Familiarity with data visualization tools and ETL processes', 'Analytical mindset with attention to detail']
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

      <main className="pt-0 pb-0">
        {/* =========================================================================
            SECTION 1: HERO SECTION (Gray Background)
           ========================================================================= */}
        <section className="w-full bg-[#F4F3EF] pt-4 sm:pt-6 lg:pt-7 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left White Card */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E4E2DC] shadow-xs flex flex-col justify-between space-y-4">
                <div>
                  <span className="inline-block text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#1C1D21] mb-4">
                    ABOUT
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1C1D21] leading-[1.18] tracking-tight font-sans mb-4 sm:mb-5">
                    Work at <br className="hidden sm:inline" />Team Monsrow
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-6">
                    Building mission-critical custom software, enterprise cloud infrastructure, and AI engineering solutions for high-growth companies worldwide.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-3 text-sm font-semibold text-[#1C1D21]">
                  <div className="w-8 h-8 rounded-full bg-[#F4F3EF] flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-[#1C1D21]" />
                  </div>
                  <span>{totalOpenings} open positions</span>
                </div>
              </div>

              {/* Right Graphic Card */}
              <div className="lg:col-span-7 bg-[#E5E6E0] rounded-3xl border border-[#1A1A1A] overflow-hidden min-h-[340px] md:min-h-[420px] relative flex items-end justify-end p-0">
                {/* Background SVG vertical parallel black lines matching image (8 lines) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="7" y1="0" x2="7" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
                  <line x1="14" y1="0" x2="14" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
                  <line x1="21" y1="0" x2="21" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
                  <line x1="28" y1="0" x2="28" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
                  <line x1="35" y1="0" x2="35" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
                  <line x1="42" y1="0" x2="42" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
                  <line x1="49" y1="0" x2="49" y2="73" stroke="#1A1A1A" strokeWidth="0.5" />
                  <line x1="56" y1="0" x2="56" y2="73" stroke="#1A1A1A" strokeWidth="0.5" />
                </svg>

                {/* Ascending 3 Bars & Top White Circle */}
                <div className="relative z-10 flex items-end gap-3 sm:gap-4 md:gap-5 h-full w-full justify-end pr-0 pb-0">
                  <div 
                    className="w-[18%] sm:w-24 md:w-28 bg-[#FA9CBD] rounded-t-xl sm:rounded-t-2xl transition-all duration-500 hover:opacity-95"
                    style={{ height: '27%' }}
                  ></div>
                  <div 
                    className="w-[18%] sm:w-24 md:w-28 bg-[#FF5768] rounded-t-xl sm:rounded-t-2xl transition-all duration-500 hover:opacity-95"
                    style={{ height: '54%' }}
                  ></div>
                  <div 
                    className="w-[18%] sm:w-24 md:w-28 flex flex-col items-center justify-end h-[96%] gap-2"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white flex-shrink-0"></div>
                    <div 
                      className="w-full bg-[#9B165B] rounded-t-xl sm:rounded-t-2xl transition-all duration-500 hover:opacity-95"
                      style={{ height: '81%' }}
                    ></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: CULTURE BANNER (White Background + Bottom-Right Concentric Arcs Graphic)
           ========================================================================= */}
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 border-y border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Soft Blue Banner with Concentric Arch lines originating from Bottom-Right (Exact match to reference image) */}
              <div className="lg:col-span-6 bg-[#A0C4E2] rounded-3xl overflow-hidden relative min-h-[280px] sm:min-h-[340px] border border-[#8EB6DB] p-0 flex items-center justify-center">
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  {/* Thin concentric black line arcs (5 lines originating from bottom-right corner 100, 100) */}
                  <path d="M 0,100 A 100,100 0 0,1 100,0" fill="none" stroke="#1A1A1A" strokeWidth="0.8" />
                  <path d="M 16,100 A 84,84 0 0,1 100,16" fill="none" stroke="#1A1A1A" strokeWidth="0.8" />
                  <path d="M 31,100 A 69,69 0 0,1 100,31" fill="none" stroke="#1A1A1A" strokeWidth="0.8" />
                  <path d="M 45,100 A 55,55 0 0,1 100,45" fill="none" stroke="#1A1A1A" strokeWidth="0.8" />
                  <path d="M 58,100 A 42,42 0 0,1 100,58" fill="none" stroke="#1A1A1A" strokeWidth="0.8" />

                  {/* Medium Royal Blue Filled Sector at Bottom-Right Corner */}
                  <path d="M 100,100 L 53,100 A 47,47 0 0,0 100,53 Z" fill="#587FD3" />

                  {/* Dark Navy Blue Filled Sector at Bottom-Right Corner */}
                  <path d="M 100,100 L 74,100 A 26,26 0 0,0 100,74 Z" fill="#1D2E62" />
                </svg>
              </div>

              {/* Right Text Block */}
              <div className="lg:col-span-6 bg-[#F4F3EF] rounded-3xl p-8 sm:p-10 flex flex-col justify-center border border-[#E4E2DC]">
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
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INTERVIEWING PROCESS (White Background)
           ========================================================================= */}
        <section className="w-full bg-white py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1D21] font-display mb-12 tracking-tight">
              Interviewing at Team Monsrow
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Step 1: Circle Left, Card Right */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-[#F5D442] flex items-center justify-center shrink-0 shadow-xs">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[#1C1D21]">1</span>
                </div>
                <div className="flex-1 bg-[#ECEAE3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] border border-[#E0DDD5]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1C1D21] mb-2 sm:mb-3 font-display">Resume screening</h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
                      Our talent acquisition team carefully reviews your experience, technical background, and portfolio to align with open team opportunities.
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-500 uppercase">
                    STAGE 01 • PROFILE EVALUATION
                  </span>
                </div>
              </div>

              {/* Step 2: Circle Left, Card Right */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-[#F5D442] flex items-center justify-center shrink-0 shadow-xs">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[#1C1D21]">2</span>
                </div>
                <div className="flex-1 bg-[#ECEAE3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] border border-[#E0DDD5]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1C1D21] mb-2 sm:mb-3 font-display">Interview</h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
                      A comprehensive conversation and technical deep dive to discuss your experience, career goals, problem-solving skills, and culture alignment.
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-500 uppercase">
                    STAGE 02 • TECHNICAL & CULTURE FIT
                  </span>
                </div>
              </div>

              {/* Step 3: Card Left, Circle Right */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex-1 bg-[#ECEAE3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] border border-[#E0DDD5]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1C1D21] mb-2 sm:mb-3 font-display">Onboarding</h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
                      A smooth onboarding experience with hands-on team introduction, environment setup, architecture walkthroughs, and dedicated mentorship.
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-500 uppercase">
                    STAGE 03 • SEAMLESS INTEGRATION
                  </span>
                </div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-[#F5D442] flex items-center justify-center shrink-0 shadow-xs">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[#1C1D21]">3</span>
                </div>
              </div>

              {/* Step 4: Card Left, Circle Right */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex-1 bg-[#ECEAE3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] border border-[#E0DDD5]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1C1D21] mb-2 sm:mb-3 font-display">Work-based full time</h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
                      Full-time integration into active enterprise software projects, leading innovation, driving impact, and building long-term career growth.
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-500 uppercase">
                    STAGE 04 • FULL-TIME ENGAGEMENT & GROWTH
                  </span>
                </div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-[#F5D442] flex items-center justify-center shrink-0 shadow-xs">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[#1C1D21]">4</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: EQUAL EMPLOYMENT OPPORTUNITY (Gray Background)
           ========================================================================= */}
        <section className="w-full bg-[#F4F3EF] py-12 sm:py-16 md:py-20 border-t border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: CURRENT OPENINGS (Gray Background)
           ========================================================================= */}
        <section className="w-full bg-[#F4F3EF] py-12 sm:py-16 md:py-20 border-t border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
