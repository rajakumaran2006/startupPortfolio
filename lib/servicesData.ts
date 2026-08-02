export interface TestimonialItem {
  quote: string;
  client: string;
  logoText: string;
}

export interface SuiteCardItem {
  number: string;
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
  slug?: string;
  link?: string;
}

export interface UnifiedFeatureItem {
  title: string;
  desc: string;
  iconName: 'database' | 'user' | 'file' | 'sliders' | 'cpu' | 'shield' | 'cloud' | 'sparkles';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tag: string;
  heroHeadline: string;
  heroSubtitle: string;
  clientImpactHeadline: string;
  testimonials: TestimonialItem[];
  suiteTag: string;
  suiteHeadline: string;
  suiteDescription: string;
  suiteCards: SuiteCardItem[];
  unifiedTag: string;
  unifiedHeadline: string;
  unifiedDescription: string;
  unifiedFeatures: UnifiedFeatureItem[];
  faqs: FaqItem[];
}

export const servicesData: Record<string, ServiceData> = {
  'software-development': {
    slug: 'software-development',
    title: 'Software Development',
    tag: 'SOFTWARE DEVELOPMENT',
    heroHeadline: 'Build websites, apps, SaaS, and custom enterprise software',
    heroSubtitle: 'Engineered with high-performance architectures, enterprise security controls, and scalable infrastructure.',
    clientImpactHeadline: 'Software Development delivers real-world performance, not just code snippets',
    testimonials: [
      {
        quote: "Team Monsrow's engineering team delivered our core SaaS platform 3x faster than estimated, with enterprise-grade resilience.",
        client: 'EDGE MARKETS',
        logoText: 'EDGE MARKETS',
      },
      {
        quote: "The custom web applications built for our finance workflows reduced load times by 70% and streamlined user onboarding.",
        client: 'STASH',
        logoText: 'STASH',
      },
      {
        quote: "From mobile apps to cloud microservices, Team Monsrow is our trusted digital engineering partner across all products.",
        client: 'CAMBRIDGE SAVINGS BANK',
        logoText: 'csb Cambridge Savings Bank',
      },
    ],
    suiteTag: 'SOFTWARE DEVELOPMENT SUITE',
    suiteHeadline: 'Modern web architectures meet enterprise full-stack development',
    suiteDescription: 'Whether you are building a new SaaS platform from scratch or scaling an existing enterprise monolith, Team Monsrow delivers end-to-end digital software.',
    suiteCards: [
      {
        number: '01',
        title: 'Custom Web & SaaS Apps',
        desc: 'Automate operationally-heavy web workflows and build scalable multi-tenant SaaS architectures.',
        bgColor: 'bg-[#F8BAC0]',
        textColor: 'text-[#1C1D21]',
        slug: 'software-development',
      },
      {
        number: '02',
        title: 'Mobile App Engineering',
        desc: 'iOS and Android native and cross-platform mobile apps built for seamless user experience.',
        bgColor: 'bg-[#FF5A60]',
        textColor: 'text-[#1C1D21]',
        slug: 'software-development',
      },
      {
        number: '03',
        title: 'Enterprise Software Systems',
        desc: 'High-throughput microservices, API integrations, and robust backend infrastructure.',
        bgColor: 'bg-[#A31661]',
        textColor: 'text-white',
        slug: 'cloud-infrastructure',
      },
    ],
    unifiedTag: 'UNIFIED ENGINEERING',
    unifiedHeadline: "Engineering that's native to modern cloud performance and security",
    unifiedDescription: 'Our software engineering frameworks operate on high-speed data pipelines, modular component architectures, and strict DevSecOps protocols to maximize system stability.',
    unifiedFeatures: [
      {
        title: 'Deep data foundation',
        desc: 'Unify frontend states and backend data flows under a single robust REST/GraphQL API architecture.',
        iconName: 'database',
      },
      {
        title: 'Security-centric by design',
        desc: 'Built-in OAuth2, RBAC, encrypted payload transmission, and SOC 2 auditable codebases.',
        iconName: 'shield',
      },
      {
        title: 'High-throughput microservices',
        desc: 'Distributed microservices engineered for low latency, sub-50ms execution, and seamless scalability.',
        iconName: 'cpu',
      },
      {
        title: 'Automated CI/CD deployment',
        desc: 'Zero-downtime deployment pipelines with integrated automated test suites and health telemetry.',
        iconName: 'cloud',
      },
    ],
    faqs: [
      {
        question: 'What technology stacks do you use for web and SaaS development?',
        answer: 'We leverage modern stacks including React, Next.js, TypeScript, Node.js, Python, PostgreSQL, and AWS/GCP cloud infrastructure.',
      },
      {
        question: 'How do you ensure code security and regulatory compliance?',
        answer: 'All projects adhere to OWASP security standards, automated code vulnerability scanning, and strict data encryption protocols.',
      },
      {
        question: 'Can you integrate custom software with existing ERP/CRM systems?',
        answer: 'Yes, our engineers specialize in custom API middleware to connect legacy enterprise software with modern web portals.',
      },
      {
        question: 'What is your development workflow and timeline?',
        answer: 'We follow agile 2-week sprint cycles with continuous integration, transparent staging deployments, and weekly progress demos.',
      },
      {
        question: 'Do you offer ongoing post-launch maintenance and updates?',
        answer: 'We provide dedicated SLA support packages covering 24/7 monitoring, security patches, and ongoing feature updates.',
      },
      {
        question: 'How do you handle scalability for high-traffic web applications?',
        answer: 'We design containerized cloud architectures using Kubernetes and auto-scaling serverless edge functions.',
      },
      {
        question: 'How do we get started on a custom software project?',
        answer: 'Click "Schedule a Demo" to connect with our senior solutions architect for an initial technical blueprint consultation.',
      },
    ],
  },

  'business-solutions': {
    slug: 'business-solutions',
    title: 'Business Solutions',
    tag: 'BUSINESS SOLUTIONS',
    heroHeadline: 'Simplify operations with ERP, CRM, HRMS, and industry platforms',
    heroSubtitle: 'Streamline enterprise workflows, automate core business processes, and unify operational data.',
    clientImpactHeadline: 'Business Solutions deliver operational efficiency, not manual bottlenecks',
    testimonials: [
      {
        quote: "Integrating ERP and CRM through Team Monsrow saved our operational team over 40 hours per week in manual reconciliation.",
        client: 'EDGE MARKETS',
        logoText: 'EDGE MARKETS',
      },
      {
        quote: "Our HRMS and internal workflow automation now run seamlessly with automated compliance auditing.",
        client: 'STASH',
        logoText: 'STASH',
      },
      {
        quote: "Unified enterprise dashboards allow our executives to monitor real-time business health across all locations.",
        client: 'CAMBRIDGE SAVINGS BANK',
        logoText: 'csb Cambridge Savings Bank',
      },
    ],
    suiteTag: 'BUSINESS SOLUTIONS SUITE',
    suiteHeadline: 'Unified operational tools meet intelligent process automation',
    suiteDescription: 'Empower your teams with integrated enterprise systems. Eliminate data silos and automate complex operational workflows.',
    suiteCards: [
      {
        number: '01',
        title: 'ERP & Resource Planning',
        desc: 'Centralize finance, inventory, and supply chain management into a single real-time platform.',
        bgColor: 'bg-[#F8BAC0]',
        textColor: 'text-[#1C1D21]',
        slug: 'business-solutions',
      },
      {
        number: '02',
        title: 'CRM & Customer Portals',
        desc: 'Manage customer lifecycles, lead pipelines, and automated support interactions.',
        bgColor: 'bg-[#FF5A60]',
        textColor: 'text-[#1C1D21]',
        slug: 'business-solutions',
      },
      {
        number: '03',
        title: 'HRMS & Workforce Tools',
        desc: 'Automate payroll, onboarding, performance tracking, and employee compliance logging.',
        bgColor: 'bg-[#A31661]',
        textColor: 'text-white',
        slug: 'business-solutions',
      },
    ],
    unifiedTag: 'UNIFIED ENTERPRISE',
    unifiedHeadline: "Solutions that are native to your operational workflows",
    unifiedDescription: 'Our business solution platforms integrate directly with existing databases, HR toolkits, and financial ledgers for centralized visibility.',
    unifiedFeatures: [
      {
        title: 'Deep data foundation',
        desc: 'Centralize operational signals from ERP, CRM, and accounting into one real-time data warehouse.',
        iconName: 'database',
      },
      {
        title: 'Workflow-centric by design',
        desc: 'Custom rule engines and step-by-step approvals built around your exact business requirements.',
        iconName: 'sliders',
      },
      {
        title: 'Full-context decisioning',
        desc: 'Executives and department managers access holistic operational context to accelerate decision making.',
        iconName: 'file',
      },
      {
        title: 'Actionable insights',
        desc: 'Automated reporting triggers and predictive inventory/resource allocation alerts.',
        iconName: 'sparkles',
      },
    ],
    faqs: [
      {
        question: 'How do custom ERP/CRM solutions compare to off-the-shelf software?',
        answer: 'Custom solutions eliminate expensive per-user licensing fees and adapt 100% to your unique business processes without compromise.',
      },
      {
        question: 'Can you migrate data from legacy spreadsheets or old databases?',
        answer: 'Yes, our automated data migration pipelines securely map and sanitize legacy data with zero operational downtime.',
      },
      {
        question: 'Is user access role-based for security and privacy?',
        answer: 'All systems include granular Role-Based Access Control (RBAC), multi-factor authentication, and audit logs.',
      },
      {
        question: 'How long does a typical ERP or CRM deployment take?',
        answer: 'Initial MVP releases are typically deployed within 6 to 10 weeks, followed by iterative feature enhancements.',
      },
      {
        question: 'Can internal staff manage the platform after deployment?',
        answer: 'We provide comprehensive admin documentation, video training portals, and non-technical admin consoles.',
      },
      {
        question: 'How do you ensure data compliance for HR and financial data?',
        answer: 'Our architectures meet GDPR, HIPAA, and SOC 2 data protection and retention regulations.',
      },
      {
        question: 'How do we schedule a business discovery session?',
        answer: 'Click "Schedule a Demo" to consult with our enterprise solutions team.',
      },
    ],
  },

  'artificial-intelligence': {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    tag: 'ACTIONABLE AI',
    heroHeadline: 'Accelerate fraud prevention and compliance decisions with Actionable AI',
    heroSubtitle: 'Automate, detect, respond, and scale without compromising your controls.',
    clientImpactHeadline: 'Actionable AI delivers real-world value, not just informational alerts',
    testimonials: [
      {
        quote: "Team Monsrow's AI Assistant saves me a significant amount of time and gives me the confidence to quickly review and close watchlist alerts based on the insights it provides.",
        client: 'EDGE MARKETS',
        logoText: 'EDGE MARKETS',
      },
      {
        quote: "Fraud Signal delivers the precision and speed necessary to intercept emerging fraud, effectively augmenting the capabilities of our existing controls.",
        client: 'STASH',
        logoText: 'STASH',
      },
      {
        quote: "Not only will [Fraud Attack Radar] notifications allow us to take quick action and contain potential risk, they'll save time and resources in the long term.",
        client: 'CAMBRIDGE SAVINGS BANK',
        logoText: 'csb Cambridge Savings Bank',
      },
    ],
    suiteTag: 'ACTIONABLE AI SUITE',
    suiteHeadline: 'Predictive machine learning models meet generative and agentic AI',
    suiteDescription: "Whether you're stopping fraud at origination or automating compliance work behind the scenes, Team Monsrow helps you apply AI where it matters most.",
    suiteCards: [
      {
        number: '01',
        title: 'The AI Assistant',
        desc: 'Automate operationally-heavy tasks and eliminate manual friction in risk and compliance workflows.',
        bgColor: 'bg-[#F8BAC0]',
        textColor: 'text-[#1C1D21]',
        slug: 'artificial-intelligence',
      },
      {
        number: '02',
        title: 'Fraud Signal',
        desc: 'Score customer risk to surface suspicious behavior throughout the customer lifecycle.',
        bgColor: 'bg-[#FF5A60]',
        textColor: 'text-[#1C1D21]',
        slug: 'artificial-intelligence',
      },
      {
        number: '03',
        title: 'Fraud Attack Radar',
        desc: 'Detect coordinated fraud attacks at account opening across your origination channel.',
        bgColor: 'bg-[#A31661]',
        textColor: 'text-white',
        slug: 'artificial-intelligence',
      },
    ],
    unifiedTag: 'UNIFIED AI',
    unifiedHeadline: "AI that's native to Team Monsrow's identity and fraud prevention platform",
    unifiedDescription: "Team Monsrow's machine learning models and AI Assistant operate on the same data, policies, and customer history as your end-to-end identity and fraud prevention workflows. You can even bring your own third-party and internal AI models to our platform.",
    unifiedFeatures: [
      {
        title: 'Deep data foundation',
        desc: 'Stop bad actors before money moves by connecting fragmented data under a central interface.',
        iconName: 'database',
      },
      {
        title: 'Identity-centric by design',
        desc: "Powered by rich identity signals and behavioral insights from Team Monsrow's network of 270+ data solutions.",
        iconName: 'user',
      },
      {
        title: 'Full-context decisioning',
        desc: "Policymakers and Team Monsrow's AI Assistant operate on richer context, referencing real policies, past actions, and customer history to make decisions.",
        iconName: 'file',
      },
      {
        title: 'Actionable insights',
        desc: 'Close the loop between decisioning and action. Deploy fallback workflows and understand the policies in place.',
        iconName: 'sliders',
      },
    ],
    faqs: [
      {
        question: 'How does Team Monsrow use AI to detect fraud?',
        answer: 'Team Monsrow combines predictive machine learning models with real-time velocity checking and behavioral signals to identify synthetic identity patterns, device spoofing, and ATO risk.',
      },
      {
        question: 'How does Team Monsrow respond when fraud is detected?',
        answer: 'When high risk is detected, the orchestration engine automatically triggers decline actions or step-up verification rules (e.g. DocV, biometric check) without manual delay.',
      },
      {
        question: 'What is Fraud Attack Radar?',
        answer: 'Fraud Attack Radar detects coordinated cross-institution attack clusters across your origination channel in real time.',
      },
      {
        question: 'How does Fraud Signal work?',
        answer: 'Fraud Signal computes a composite risk score for every transaction by cross-referencing global identity databases and device fingerprints.',
      },
      {
        question: 'What is the Team Monsrow AI Assistant?',
        answer: 'The AI Assistant is an agentic copilot that summarizes complex risk signals, recommends policy updates, and automates SAR logging.',
      },
      {
        question: 'How does the AI Assistant help improve efficiency for fraud and compliance teams?',
        answer: 'It eliminates manual investigation overhead by synthesizing complex multi-vendor signals into concise natural language summaries.',
      },
      {
        question: 'How does Team Monsrow reduce manual reviews?',
        answer: 'By dynamically routing low-risk applicants to auto-approval while flagging only edge-cases for human review.',
      },
    ],
  },

  'factory-iot': {
    slug: 'factory-iot',
    title: 'Factory & IoT',
    tag: 'FACTORY & IOT',
    heroHeadline: 'Connect factories with automation, IoT, and smart monitoring',
    heroSubtitle: 'Real-time sensor telemetry, automated machinery control, and predictive maintenance dashboards.',
    clientImpactHeadline: 'Factory IoT delivers continuous uptime, not unexpected downtime',
    testimonials: [
      {
        quote: "Smart sensor monitoring reduced our machinery downtime by 85% and automated maintenance alert schedules.",
        client: 'EDGE MARKETS',
        logoText: 'EDGE MARKETS',
      },
      {
        quote: "Real-time telemetry across 12 manufacturing plants gives us unified visibility over production rates.",
        client: 'STASH',
        logoText: 'STASH',
      },
      {
        quote: "Automated anomaly detection alerts our site operators before costly equipment failures occur.",
        client: 'CAMBRIDGE SAVINGS BANK',
        logoText: 'csb Cambridge Savings Bank',
      },
    ],
    suiteTag: 'FACTORY & IOT SUITE',
    suiteHeadline: 'Industrial IoT hardware meets cloud-connected edge intelligence',
    suiteDescription: 'Transform raw factory sensor signals into actionable automation workflows and predictive maintenance schedules.',
    suiteCards: [
      {
        number: '01',
        title: 'Industrial Sensor Telemetry',
        desc: 'Connect temperature, vibration, and pressure sensors with sub-second MQTT data ingestion.',
        bgColor: 'bg-[#F8BAC0]',
        textColor: 'text-[#1C1D21]',
        slug: 'factory-iot',
      },
      {
        number: '02',
        title: 'Predictive Maintenance ML',
        desc: 'Analyze machine wear-and-tear patterns to schedule repairs before breakdown.',
        bgColor: 'bg-[#FF5A60]',
        textColor: 'text-[#1C1D21]',
        slug: 'artificial-intelligence',
      },
      {
        number: '03',
        title: 'Smart Factory Control Center',
        desc: 'Unified supervisory dashboard for factory managers, line operators, and executive oversight.',
        bgColor: 'bg-[#A31661]',
        textColor: 'text-white',
        slug: 'factory-iot',
      },
    ],
    unifiedTag: 'UNIFIED IOT',
    unifiedHeadline: "IoT intelligence that's native to smart factory automation",
    unifiedDescription: 'Edge processing nodes and cloud telemetry work together to stream machine health data and execute emergency stop protocols.',
    unifiedFeatures: [
      {
        title: 'Deep data foundation',
        desc: 'Stream high-frequency MQTT and Modbus telemetry into a single time-series database.',
        iconName: 'database',
      },
      {
        title: 'Edge-centric by design',
        desc: 'Local edge gateway processing ensures automated safety shutdowns even during network outage.',
        iconName: 'cpu',
      },
      {
        title: 'Full-context decisioning',
        desc: 'Cross-reference historical machine diagnostics with real-time temperature and vibration metrics.',
        iconName: 'file',
      },
      {
        title: 'Actionable insights',
        desc: 'Automated work-order generation for maintenance technicians before equipment breakdown occurs.',
        iconName: 'sliders',
      },
    ],
    faqs: [
      {
        question: 'Which industrial IoT protocols do you support?',
        answer: 'We support MQTT, OPC UA, Modbus TCP/RTU, PROFINET, and custom serial protocols.',
      },
      {
        question: 'Can edge gateways process sensor data locally without internet connection?',
        answer: 'Yes, our edge nodes run lightweight containerized ML models locally for instant offline automation.',
      },
      {
        question: 'How do you handle sensor data security and encryption?',
        answer: 'All telemetry packets are encrypted at rest and in transit using TLS 1.3 and hardware security modules.',
      },
      {
        question: 'What is the hardware installation process for existing factories?',
        answer: 'We retrofit non-invasive wireless clamp-on sensors without needing to interrupt active assembly lines.',
      },
      {
        question: 'Can the dashboard send alerts via SMS or push notification?',
        answer: 'Yes, instant alerts are dispatched via SMS, email, PagerDuty, or webhook integrations.',
      },
      {
        question: 'How does predictive maintenance lower operational costs?',
        answer: 'By replacing scheduled manual inspections with data-driven repairs, reducing emergency downtime by up to 80%.',
      },
      {
        question: 'How do we schedule a site evaluation?',
        answer: 'Click "Schedule a Demo" to arrange a technical consultation with our industrial IoT engineers.',
      },
    ],
  },

  'cloud-infrastructure': {
    slug: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    tag: 'CLOUD & INFRASTRUCTURE',
    heroHeadline: 'Deploy secure cloud platforms, APIs, and scalable infrastructure',
    heroSubtitle: 'Cloud-native deployments, high-throughput REST APIs, and automated DevOps infrastructure.',
    clientImpactHeadline: 'Scalable Infrastructure delivers 99.99% uptime, not server bottlenecks',
    testimonials: [
      {
        quote: "Migrating to cloud-native microservices allowed us to handle 10x traffic spikes without latency penalties.",
        client: 'EDGE MARKETS',
        logoText: 'EDGE MARKETS',
      },
      {
        quote: "Team Monsrow's automated CI/CD pipelines cut our release cycle times from weeks to minutes.",
        client: 'STASH',
        logoText: 'STASH',
      },
      {
        quote: "Bank-grade SOC 2 compliance and encrypted database clusters gave us full confidence in production scale.",
        client: 'CAMBRIDGE SAVINGS BANK',
        logoText: 'csb Cambridge Savings Bank',
      },
    ],
    suiteTag: 'CLOUD INFRASTRUCTURE SUITE',
    suiteHeadline: 'Cloud-native architecture meets automated DevSecOps pipelines',
    suiteDescription: 'Architect, deploy, and monitor scalable cloud environments engineered for enterprise reliability and zero downtime.',
    suiteCards: [
      {
        number: '01',
        title: 'Kubernetes & Container Mesh',
        desc: 'Deploy resilient container clusters with dynamic auto-scaling and zero-downtime rolling updates.',
        bgColor: 'bg-[#F8BAC0]',
        textColor: 'text-[#1C1D21]',
        slug: 'cloud-infrastructure',
      },
      {
        number: '02',
        title: 'High-Throughput API Gateways',
        desc: 'REST and GraphQL endpoints engineered for sub-20ms responses and global rate limiting.',
        bgColor: 'bg-[#FF5A60]',
        textColor: 'text-[#1C1D21]',
        slug: 'cloud-infrastructure',
      },
      {
        number: '03',
        title: 'Automated CI/CD & Security',
        desc: 'Infrastructure-as-code scripts, automated security scanning, and SOC 2 auditable deployments.',
        bgColor: 'bg-[#A31661]',
        textColor: 'text-white',
        slug: 'cloud-infrastructure',
      },
    ],
    unifiedTag: 'UNIFIED CLOUD',
    unifiedHeadline: "Infrastructure that's native to high-throughput cloud operations",
    unifiedDescription: 'Multi-cloud deployments across AWS, GCP, and Azure with unified Terraform scripts, automated load balancing, and 24/7 observability.',
    unifiedFeatures: [
      {
        title: 'Deep data foundation',
        desc: 'Global database replication with multi-region failover and real-time backup snapshotting.',
        iconName: 'database',
      },
      {
        title: 'Cloud-native by design',
        desc: 'Stateless microservices running on Kubernetes clusters for elastic auto-scaling during traffic spikes.',
        iconName: 'cloud',
      },
      {
        title: 'Full-context observability',
        desc: 'Centralized Prometheus and Datadog logging for sub-second anomaly detection and tracing.',
        iconName: 'file',
      },
      {
        title: 'Actionable failover controls',
        desc: 'Automated traffic rerouting and DNS failover execution when regional cloud disruptions occur.',
        iconName: 'sliders',
      },
    ],
    faqs: [
      {
        question: 'Which cloud providers do you support (AWS, GCP, Azure)?',
        answer: 'We support multi-cloud deployments on AWS, Google Cloud Platform (GCP), Microsoft Azure, and bare-metal environments.',
      },
      {
        question: 'How do you handle infrastructure migration without downtime?',
        answer: 'We use dual-write blue-green deployment strategies to migrate traffic incrementally with zero disruption.',
      },
      {
        question: 'Are cloud environments built using Infrastructure as Code (IaC)?',
        answer: 'Yes, 100% of cloud resources are provisioned via Terraform and Ansible scripts for repeatable deployments.',
      },
      {
        question: 'How do you optimize monthly cloud spending and server costs?',
        answer: 'We implement spot instance orchestration, reserved capacity optimization, and automated resource shutdown rules.',
      },
      {
        question: 'What SLAs do you provide for cloud availability and uptime?',
        answer: 'We architect for 99.99% uptime SLAs backed by automated multi-availability-zone failover.',
      },
      {
        question: 'Do you provide continuous monitoring and incident response?',
        answer: 'We offer 24/7 SRE monitoring with automated incident escalation and 15-minute response guarantees.',
      },
      {
        question: 'How can we audit our existing cloud setup?',
        answer: 'Click "Schedule a Demo" to request a free cloud architecture and security audit.',
      },
    ],
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tag: 'DIGITAL MARKETING',
    heroHeadline: 'Grow your business through SEO, advertising, and lead generation',
    heroSubtitle: 'Data-driven marketing campaigns, search engine optimization, and high-converting acquisition funnels.',
    clientImpactHeadline: 'Digital Marketing delivers qualified revenue, not empty traffic numbers',
    testimonials: [
      {
        quote: "Our organic search rankings jumped to top 3 positions for primary industry keywords within 90 days.",
        client: 'EDGE MARKETS',
        logoText: 'EDGE MARKETS',
      },
      {
        quote: "Performance ad campaign optimizations lowered our Customer Acquisition Cost (CAC) by 45%.",
        client: 'STASH',
        logoText: 'STASH',
      },
      {
        quote: "High-converting landing page funnels increased our inbound lead conversion rate by 2.4x.",
        client: 'CAMBRIDGE SAVINGS BANK',
        logoText: 'csb Cambridge Savings Bank',
      },
    ],
    suiteTag: 'DIGITAL MARKETING SUITE',
    suiteHeadline: 'Data-driven acquisition campaigns meet high-converting landing pages',
    suiteDescription: 'Scale your brand visibility, generate high-intent inbound leads, and maximize return on ad spend with precision marketing.',
    suiteCards: [
      {
        number: '01',
        title: 'Technical SEO & Content Strategy',
        desc: 'Dominating search results with optimized site performance, keyword authority, and structured data.',
        bgColor: 'bg-[#F8BAC0]',
        textColor: 'text-[#1C1D21]',
        slug: 'digital-marketing',
      },
      {
        number: '02',
        title: 'Performance Paid Ads',
        desc: 'Precision targeted campaign management across Google Ads, LinkedIn, and programmatic channels.',
        bgColor: 'bg-[#FF5A60]',
        textColor: 'text-[#1C1D21]',
        slug: 'digital-marketing',
      },
      {
        number: '03',
        title: 'Conversion Funnel Optimization',
        desc: 'Data-backed UX optimizations, A/B testing, and lead capture workflows to boost conversion rates.',
        bgColor: 'bg-[#A31661]',
        textColor: 'text-white',
        slug: 'digital-marketing',
      },
    ],
    unifiedTag: 'UNIFIED MARKETING',
    unifiedHeadline: "Growth marketing that's native to measurable revenue results",
    unifiedDescription: 'Combine search engine optimization, paid ad campaigns, and CRO funnels under unified attribution analytics.',
    unifiedFeatures: [
      {
        title: 'Deep data attribution',
        desc: 'Track user journeys from first ad click to closed customer contract across all touchpoints.',
        iconName: 'database',
      },
      {
        title: 'Intent-centric by design',
        desc: 'Target buyers displaying active commercial intent through high-value search keywords.',
        iconName: 'user',
      },
      {
        title: 'Full-funnel optimization',
        desc: 'Continuous A/B testing on copy, headlines, and call-to-action buttons to maximize conversion rate.',
        iconName: 'file',
      },
      {
        title: 'Actionable ROI reporting',
        desc: 'Real-time marketing ROI dashboards mapping CAC, LTV, and return on ad spend (ROAS).',
        iconName: 'sliders',
      },
    ],
    faqs: [
      {
        question: 'How quickly can we expect results from Technical SEO?',
        answer: 'Technical fixes often yield indexation improvements in 2-4 weeks, while core ranking authority gains mature within 60 to 90 days.',
      },
      {
        question: 'Which ad channels generate the highest B2B lead conversion?',
        answer: 'Google Search Ads capture active intent, while LinkedIn Ads and retargeting campaigns build decision-maker brand trust.',
      },
      {
        question: 'Do you design and code high-converting landing pages?',
        answer: 'Yes, we build ultra-fast, mobile-optimized Next.js landing pages tailored specifically for high conversion rates.',
      },
      {
        question: 'How do you measure marketing Return on Ad Spend (ROAS)?',
        answer: 'We install custom multi-touch attribution tracking to measure exact revenue generated per marketing dollar.',
      },
      {
        question: 'Can you work alongside our existing internal marketing team?',
        answer: 'Yes, we can act as an extended execution partner handling technical SEO, ad operations, or funnel development.',
      },
      {
        question: 'What is included in the initial digital marketing audit?',
        answer: 'We analyze your website technical health, backlink profile, competitor rankings, and current ad account efficiency.',
      },
      {
        question: 'How do we request a custom growth strategy consultation?',
        answer: 'Click "Schedule a Demo" to consult with our digital growth team.',
      },
    ],
  },
};
