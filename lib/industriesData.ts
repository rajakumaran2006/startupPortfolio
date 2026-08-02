export interface BenefitItem {
  title: string;
  desc: string;
  iconName?: string;
}

export interface SolutionColumn {
  title: string;
  iconName: string;
  items: string[];
}

export interface IndustryData {
  slug: string;
  title: string;
  tag: string;
  heroHeadline: string;
  heroCopy: string;
  heroCtaText: string;
  heroIllustrationType: 'bank' | 'fintech' | 'creditunion' | 'crypto' | 'lending' | 'insurance' | 'manufacturing' | 'healthcare' | 'education' | 'finance' | 'saas' | 'ecommerce';
  trustHeadline: string;
  partnerLogos: string[];
  caseStudy: {
    clientLogo: string;
    clientName: string;
    title: string;
    description: string;
    bullets: string[];
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
  };
  benefitsHeadline: string;
  benefits: BenefitItem[];
  solutionsHeadline: string;
  solutions: SolutionColumn[];
  bannerHeadline: string;
  bannerCopy: string;
  bannerCtaText: string;
}

export const industriesData: Record<string, IndustryData> = {
  manufacturing: {
    slug: 'manufacturing',
    title: 'Manufacturing & Industrial',
    tag: 'MANUFACTURING',
    heroHeadline: 'Smart manufacturing, Industrial IoT & enterprise software',
    heroCopy: 'Team Monsrow builds custom IIoT telemetry software, predictive maintenance AI models, supply chain orchestration systems, and automated ERP integrations for modern manufacturing enterprises. We help industrial leaders digitize factory operations, optimize shop-floor equipment efficiency, and automate quality control in real time.',
    heroCtaText: 'Schedule a Demo',
    heroIllustrationType: 'manufacturing',
    trustHeadline: 'Trusted by leading manufacturing enterprises & industrial innovators',
    partnerLogos: ['Aura Industrial', 'ZENITH Systems', 'Apex Heavy Industry', 'Nova Robotics', 'Orion Factory Automation'],
    caseStudy: {
      clientLogo: 'Aura Industrial',
      clientName: 'Aura Industrial Manufacturing',
      title: 'How Aura Industrial automated factory telemetry & reduced machine downtime by 38%',
      description: 'Aura Industrial partnered with Team Monsrow to integrate IoT sensor monitoring, automated ERP sync, and predictive maintenance algorithms.',
      bullets: [
        'reduced unplanned downtime by 38%',
        'improved overall equipment effectiveness (OEE) by 24%',
        'automated supply chain reordering in real time'
      ],
      quote: '"Team Monsrow built an industrial IoT dashboard that gives our plant managers complete visibility across 12 manufacturing sites. The operational efficiency gains have been extraordinary."',
      quoteAuthor: 'Marcus Vance',
      quoteRole: 'VP of Global Operations at Aura Industrial'
    },
    benefitsHeadline: 'Benefits for manufacturing',
    benefits: [
      {
        title: 'Real-time IIoT sensor telemetry',
        desc: 'Connect physical machinery, temperature sensors, and assembly lines to high-throughput cloud dashboards for instant telemetry and anomaly alerts.'
      },
      {
        title: 'Predictive maintenance AI models',
        desc: 'Use machine learning to forecast component wear and schedule preventative servicing before costly equipment failures occur.'
      },
      {
        title: 'Seamless ERP & supply chain integration',
        desc: 'Unify inventory tracking, bill of materials (BOM), raw material procurement, and warehouse logistics into one automated software suite.'
      },
      {
        title: 'Automated quality control & defect detection',
        desc: 'Deploy computer vision AI on production lines to inspect manufactured goods and flag precision defects in milliseconds.'
      }
    ],
    solutionsHeadline: 'Team Monsrow solutions for manufacturing',
    solutions: [
      {
        title: 'Factory Automation',
        iconName: 'cpu',
        items: ['IIoT sensor pipelines', 'Shop-floor telemetry', 'Quality control AI', 'Equipment status monitoring']
      },
      {
        title: 'Supply Chain & ERP',
        iconName: 'truck',
        items: ['Automated inventory tracking', 'BOM management', 'Supplier portal integration', 'Logistics optimization']
      },
      {
        title: 'Predictive Maintenance',
        iconName: 'shield',
        items: ['Machine failure forecasting', 'Vibration analysis', 'Automated maintenance tickets', 'Spare parts management']
      },
      {
        title: 'Operations Analytics',
        iconName: 'user',
        items: ['Overall equipment effectiveness (OEE)', 'Energy consumption tracking', 'Worker safety monitoring', 'Plant performance reporting']
      }
    ],
    bannerHeadline: 'Ready to digitize your manufacturing operations?',
    bannerCopy: 'Discover how Team Monsrow engineers custom IIoT & industrial software built for scale.',
    bannerCtaText: 'Schedule a Demo'
  },

  healthcare: {
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    tag: 'HEALTHCARE',
    heroHeadline: 'HIPAA-compliant healthcare platforms & medical AI software',
    heroCopy: 'Team Monsrow designs secure EHR/EMR portals, telemedicine web applications, clinical AI diagnostics, and HIPAA-compliant data pipelines. We enable healthcare providers, hospital networks, and healthtech startups to deliver seamless patient care while ensuring strict data privacy and regulatory compliance.',
    heroCtaText: 'Schedule a Demo',
    heroIllustrationType: 'healthcare',
    trustHeadline: 'Trusted by innovative health networks and medical technology platforms',
    partnerLogos: ['Starlight Health Network', 'Beacon Clinicals', 'Quantum Diagnostics', 'Pulse Medical Group', 'Velox Health Tech'],
    caseStudy: {
      clientLogo: 'Starlight Health',
      clientName: 'Starlight Health Systems',
      title: 'How Starlight Health delivered a 99.9% uptime telemedicine platform with Team Monsrow',
      description: 'Starlight Health partnered with Team Monsrow to architect a multi-tenant, HIPAA-compliant virtual care and patient records portal.',
      bullets: [
        'scaled to 500,000+ monthly virtual appointments',
        'reduced patient intake wait times by 45%',
        'maintained 100% HIPAA and SOC 2 security compliance'
      ],
      quote: '"Team Monsrow\'s medical software expertise allowed us to launch our virtual care portal in record time with total confidence in security and compliance."',
      quoteAuthor: 'Dr. Elena Rostova',
      quoteRole: 'Chief Medical Officer at Starlight Health'
    },
    benefitsHeadline: 'Benefits for healthcare',
    benefits: [
      {
        title: 'HIPAA & HITECH compliance by design',
        desc: 'Architect end-to-end encrypted medical software with automated access audit logs, role-based security, and cloud infrastructure compliance.'
      },
      {
        title: 'Telemedicine & patient portals',
        desc: 'Build high-performance video consultation suites, e-prescriptions, appointment booking, and patient records access on desktop and mobile.'
      },
      {
        title: 'Clinical AI & diagnostic tools',
        desc: 'Integrate machine learning models to assist clinicians with medical image analysis, patient risk stratification, and automated triage.'
      },
      {
        title: 'Automated medical billing & claims',
        desc: 'Streamline insurance eligibility verification, claims submission, and denial management to reduce administrative overhead.'
      }
    ],
    solutionsHeadline: 'Team Monsrow solutions for healthcare',
    solutions: [
      {
        title: 'Virtual Care & EHR',
        iconName: 'user',
        items: ['Telemedicine web/mobile apps', 'EHR/EMR integrations', 'Patient portal portals', 'E-Prescription gateways']
      },
      {
        title: 'Medical AI & Analytics',
        iconName: 'shield',
        items: ['Clinical AI decision support', 'Medical image analysis', 'Patient risk scoring', 'HIPAA auditable logging']
      },
      {
        title: 'Patient Engagement',
        iconName: 'coins',
        items: ['Appointment scheduling', 'Automated SMS reminders', 'Remote patient monitoring (RPM)', 'Secure messaging']
      },
      {
        title: 'Revenue Cycle Management',
        iconName: 'file',
        items: ['Insurance eligibility verification', 'Automated medical billing', 'Claims processing', 'Denial management AI']
      }
    ],
    bannerHeadline: 'Transform your healthcare software experience',
    bannerCopy: 'Build secure, HIPAA-compliant patient applications and medical AI platforms with Team Monsrow.',
    bannerCtaText: 'Schedule a Demo'
  },

  education: {
    slug: 'education',
    title: 'Education & EdTech',
    tag: 'EDUCATION',
    heroHeadline: 'Next-generation EdTech platforms & learning management systems',
    heroCopy: 'Team Monsrow engineers custom Learning Management Systems (LMS), virtual classroom portals, student performance AI analytics, and automated grading pipelines for educational institutions, universities, and EdTech platforms worldwide.',
    heroCtaText: 'Schedule a Demo',
    heroIllustrationType: 'education',
    trustHeadline: 'Trusted by leading educational academies and EdTech innovators',
    partnerLogos: ['Hamilton Learning Academy', 'Venus School', 'Starlight Education', 'Beacon Academy', 'Crestview University'],
    caseStudy: {
      clientLogo: 'Hamilton Academy',
      clientName: 'Hamilton Learning Academy',
      title: 'How Hamilton Academy launched an interactive AI learning portal for 50k+ students',
      description: 'Hamilton Academy partnered with Team Monsrow to build a custom multi-tenant LMS with live video classrooms and real-time student AI progress dashboards.',
      bullets: [
        'increased course completion rates by 34%',
        'handled 50,000+ simultaneous live video sessions',
        'automated grading & student feedback reporting'
      ],
      quote: '"Team Monsrow transformed our digital curriculum into an interactive, fast, and engaging learning platform that students and teachers love."',
      quoteAuthor: 'Arthur Pendelton',
      quoteRole: 'Dean of Digital Learning at Hamilton'
    },
    benefitsHeadline: 'Benefits for education',
    benefits: [
      {
        title: 'Custom LMS & virtual classrooms',
        desc: 'Deliver smooth video streaming, interactive quizzes, student progress tracking, and gamified learning experiences on any device.'
      },
      {
        title: 'AI student performance analytics',
        desc: 'Track learning milestones, identify at-risk students early, and generate personalized study recommendations automatically.'
      },
      {
        title: 'Seamless institutional SIS integration',
        desc: 'Integrate with SIS, university payment gateways, single sign-on (SSO), and Google Classroom / Canvas standards.'
      },
      {
        title: 'Gamified learning & automated assessment',
        desc: 'Boost student engagement with interactive achievement badges, peer leaderboards, and instant AI-assisted assignment feedback.'
      }
    ],
    solutionsHeadline: 'Team Monsrow solutions for education',
    solutions: [
      {
        title: 'Learning Platforms',
        iconName: 'user',
        items: ['Custom LMS portals', 'Virtual video classrooms', 'Gamified learning modules', 'Interactive assignment tools']
      },
      {
        title: 'EdTech AI & Analytics',
        iconName: 'coins',
        items: ['Student performance AI', 'Automated essay/quiz grading', 'SIS & SSO integrations', 'Parent/Student portals']
      },
      {
        title: 'Campus Management',
        iconName: 'shield',
        items: ['Enrollment & admissions portals', 'Tuition payment processing', 'Attendance tracking', 'Course catalog management']
      },
      {
        title: 'Digital Credentials',
        iconName: 'file',
        items: ['Verifiable digital diplomas', 'Micro-credential badges', 'Academic transcript portals', 'Alumni network management']
      }
    ],
    bannerHeadline: 'Ready to build the future of digital education?',
    bannerCopy: 'Explore custom EdTech solutions and LMS platforms engineered by Team Monsrow.',
    bannerCtaText: 'Schedule a Demo'
  },

  finance: {
    slug: 'finance',
    title: 'Finance & Banking',
    tag: 'FINANCE',
    heroHeadline: 'Enterprise banking platforms & financial software systems',
    heroCopy: 'Team Monsrow architects resilient core banking systems, digital payment gateways, credit underwriting engines, and AI-driven fraud detection. We help financial institutions and fintechs streamline onboarding and maintain BSA/AML compliance.',
    heroCtaText: 'Schedule a Demo',
    heroIllustrationType: 'finance',
    trustHeadline: 'Trusted by financial institutions & innovative fintech leaders',
    partnerLogos: ['Aura Financial', 'ZENITH Capital', 'Apex Global Bank', 'Nova Core Pay', 'Orion Credit Union'],
    caseStudy: {
      clientLogo: 'Aura Financial',
      clientName: 'Aura Pay',
      title: 'How Aura Pay scaled sub-second payment processing & reduced fraud by 42%',
      description: 'Aura Pay integrated Team Monsrow\'s real-time risk orchestration engine and high-speed API microservices.',
      bullets: [
        'achieved 99.999% uptime during peak transaction volumes',
        'processed over 10M+ daily API transactions under 100ms',
        'reduced synthetic identity fraud attacks by 42%'
      ],
      quote: '"Team Monsrow gave us the architectural foundation to scale our fintech platform across global markets without compromising speed or security."',
      quoteAuthor: 'Robert Vance',
      quoteRole: 'Chief Technology Officer at Aura Financial'
    },
    benefitsHeadline: 'Benefits for finance',
    benefits: [
      {
        title: 'High-throughput core banking APIs',
        desc: 'Architect resilient financial microservices, digital wallet platforms, and real-time payment processing under 100ms latency.'
      },
      {
        title: 'Automated fraud & BSA/AML compliance',
        desc: 'Screen transactions in real time, automate KYC/KYB identity checks, and generate auditable compliance logs.'
      },
      {
        title: 'Instant credit underwriting',
        desc: 'Leverage alternative data sources and machine learning scoring to automate credit decisions with high accuracy.'
      },
      {
        title: 'Real-time digital wallet orchestration',
        desc: 'Enable frictionless multi-currency transfers, peer-to-peer payments, and automated ledger balancing.'
      }
    ],
    solutionsHeadline: 'Team Monsrow solutions for finance',
    solutions: [
      {
        title: 'Digital Banking & Payments',
        iconName: 'coins',
        items: ['Mobile banking apps', 'Real-time payment gateways', 'Digital wallet infrastructure', 'Core API microservices']
      },
      {
        title: 'Risk & Compliance',
        iconName: 'shield',
        items: ['AI fraud monitoring', 'KYC / KYB automation', 'BSA / AML screening', 'Credit decision engines']
      },
      {
        title: 'Lending & Credit',
        iconName: 'user',
        items: ['Consumer & commercial lending', 'Mortgage pre-approval', 'Credit line management', 'Automated underwriting']
      },
      {
        title: 'Wealth & Investments',
        iconName: 'file',
        items: ['Robo-advisory platforms', 'Portfolio analytics', 'Trading API integrations', 'Investor reporting']
      }
    ],
    bannerHeadline: 'Modernize your financial services infrastructure',
    bannerCopy: 'Build secure, scalable banking platforms and payment software with Team Monsrow.',
    bannerCtaText: 'Schedule a Demo'
  },

  saas: {
    slug: 'saas',
    title: 'SaaS & Enterprise Tech',
    tag: 'SAAS & ENTERPRISE',
    heroHeadline: 'Scalable multi-tenant SaaS platforms & cloud architecture',
    heroCopy: 'Team Monsrow designs high-throughput SaaS web applications, microservices architecture, developer API ecosystems, and automated CI/CD cloud infrastructure. We enable enterprise software vendors to scale seamlessly with zero downtime.',
    heroCtaText: 'Schedule a Demo',
    heroIllustrationType: 'saas',
    trustHeadline: 'Trusted by fast-growing SaaS startups and enterprise cloud platforms',
    partnerLogos: ['Aura Tech Labs', 'ZENITH Cloud', 'Nexus Digital', 'Pulse Cloud Systems', 'Velox Enterprise'],
    caseStudy: {
      clientLogo: 'Aura Cloud',
      clientName: 'Aura Tech Labs',
      title: 'How Aura Tech scaled their B2B SaaS platform to 10M+ daily active API calls',
      description: 'Aura Tech partnered with Team Monsrow to refactor their legacy monolith into cloud-native Kubernetes microservices.',
      bullets: [
        'reduced AWS cloud infrastructure costs by 32%',
        'improved global API response times from 450ms to 85ms',
        'enabled 99.99% multi-region high availability'
      ],
      quote: '"Team Monsrow\'s cloud architects restructured our entire SaaS backend. Our developer velocity tripled and server costs dropped significantly."',
      quoteAuthor: 'Sarah Lin',
      quoteRole: 'VP of Engineering at Aura Tech'
    },
    benefitsHeadline: 'Benefits for SaaS & Enterprise Tech',
    benefits: [
      {
        title: 'Multi-tenant cloud architecture',
        desc: 'Build isolated multi-tenant database models, custom subscription billing systems, and enterprise role-based permissions.'
      },
      {
        title: 'High-speed REST & GraphQL APIs',
        desc: 'Expose robust developer SDKs and Webhook gateways built to process millions of requests reliably.'
      },
      {
        title: 'DevOps & automated CI/CD pipelines',
        desc: 'Deploy Kubernetes clusters, Terraform infrastructure as code, and zero-downtime release pipelines on AWS, GCP, or Azure.'
      },
      {
        title: 'Enterprise SSO & RBAC security',
        desc: 'Implement SAML 2.0, OAuth 2.0, fine-grained permission controls, and SOC 2 security compliance out of the box.'
      }
    ],
    solutionsHeadline: 'Team Monsrow solutions for SaaS',
    solutions: [
      {
        title: 'SaaS Development',
        iconName: 'cpu',
        items: ['Multi-tenant web apps', 'Developer API portals', 'Subscription & billing engines', 'RBAC & Enterprise SSO']
      },
      {
        title: 'Cloud & Infrastructure',
        iconName: 'truck',
        items: ['Kubernetes & Docker pipelines', 'Terraform Infrastructure', 'Serverless microservices', 'Database auto-scaling']
      },
      {
        title: 'Integration Ecosystem',
        iconName: 'user',
        items: ['Webhook event gateways', 'Third-party API connectors', 'App marketplace builder', 'Data sync pipelines']
      },
      {
        title: 'Security & Governance',
        iconName: 'shield',
        items: ['SOC 2 audit compliance', 'Data encryption at rest/transit', 'Automated vulnerability scanning', 'Tenant isolation']
      }
    ],
    bannerHeadline: 'Ready to scale your SaaS application?',
    bannerCopy: 'Build high-performance SaaS products and cloud architectures with Team Monsrow.',
    bannerCtaText: 'Schedule a Demo'
  },

  ecommerce: {
    slug: 'ecommerce',
    title: 'Retail & E-Commerce',
    tag: 'RETAIL & E-COMMERCE',
    heroHeadline: 'Omnichannel e-commerce platforms & AI recommendation engines',
    heroCopy: 'Team Monsrow builds custom headless e-commerce platforms, mobile shopping apps, AI-powered product recommendation engines, and real-time inventory tracking systems for high-growth retail brands.',
    heroCtaText: 'Schedule a Demo',
    heroIllustrationType: 'ecommerce',
    trustHeadline: 'Trusted by leading e-commerce brands and retail innovators',
    partnerLogos: ['Aura Retail Group', 'Apex Commerce', 'Crestview Stores', 'Velox Direct', 'Beacon Outlets'],
    caseStudy: {
      clientLogo: 'Crestview Retail',
      clientName: 'Crestview Stores',
      title: 'How Crestview boosted mobile conversion by 47% with a custom headless checkout',
      description: 'Crestview collaborated with Team Monsrow to build a high-speed Next.js headless e-commerce store with instant one-click checkout.',
      bullets: [
        'increased mobile conversion rate by 47%',
        'reduced page load times to under 0.9 seconds',
        'boosted average order value (AOV) by 18% with AI recommendations'
      ],
      quote: '"The headless storefront built by Team Monsrow gives us incredible speed and full creative control. Our holiday revenue shattered all previous records."',
      quoteAuthor: 'Chloe Bennett',
      quoteRole: 'Head of E-Commerce at Crestview'
    },
    benefitsHeadline: 'Benefits for retail & e-commerce',
    benefits: [
      {
        title: 'Headless e-commerce speed',
        desc: 'Deliver instant page loads and seamless mobile shopping experiences using Next.js, React, and GraphQL.'
      },
      {
        title: 'AI product recommendations',
        desc: 'Increase average order value with personalized cross-sell recommendations driven by machine learning user behavior models.'
      },
      {
        title: 'Omnichannel inventory sync',
        desc: 'Synchronize warehouse stock, physical POS systems, and online orders in real time without overselling.'
      },
      {
        title: 'Automated fulfillment & order tracking',
        desc: 'Streamline order routing, shipping carrier APIs, real-time tracking updates, and automated customer returns.'
      }
    ],
    solutionsHeadline: 'Team Monsrow solutions for retail & e-commerce',
    solutions: [
      {
        title: 'Headless Storefronts',
        iconName: 'user',
        items: ['Next.js e-commerce apps', 'Mobile shopping apps', 'One-click checkout gateways', 'PWA mobile experiences']
      },
      {
        title: 'AI & Operations',
        iconName: 'coins',
        items: ['Personalized AI recommendations', 'Real-time inventory sync', 'POS system integrations', 'Order fulfillment pipelines']
      },
      {
        title: 'Customer Loyalty',
        iconName: 'shield',
        items: ['Reward point programs', 'VIP membership portals', 'Custom coupon & promo engines', 'Subscription box billing']
      },
      {
        title: 'Analytics & Merchandising',
        iconName: 'file',
        items: ['Conversion rate optimization', 'A/B testing engines', 'Customer LTV dashboards', 'Dynamic pricing AI']
      }
    ],
    bannerHeadline: 'Accelerate your e-commerce growth',
    bannerCopy: 'Build lightning-fast headless e-commerce platforms and AI shopping experiences with Team Monsrow.',
    bannerCtaText: 'Schedule a Demo'
  }
};
