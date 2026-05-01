export type Design10Link = {
  label: string
  href: string
}

export type Design10Project = {
  title: string
  category: string
  period: string
  description: string
  impact: string[]
  stack: string[]
  href?: string
}

export type Design10Experience = {
  company: string
  role: string
  period: string
  location: string
  description: string
}

export const DataValues = {
  name: 'Madhav Gautam',
  siteName: 'mxdhavgautam.com',
  role: 'Research Officer at A*STAR Quantum Innovation Centre',
  headline: 'Research-builder for scientific ML, AI tooling, and production software.',
  summary:
    'I work across research systems and product engineering: turning messy scientific datasets, cloud infrastructure, ML validation, and full-stack product surfaces into software that can be trusted by real users.',
  location: 'Singapore / India',
  availability: 'Available for late June / July 2026 starts',
  targetLocations: 'Delhi, Gurgaon, or remote',
  email: 'mxdhavgautam@gmail.com',
  resumeURL:
    'https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing',
  githubURL: 'https://github.com/mxdhavgautam',
  linkedinURL: 'https://linkedin.com/in/mxdhavgautam',
  twitterURL: 'https://x.com/mxdhavgautam',
  profile:
    "I'm a Computer Science graduate from VIT Chennai and a Research Officer at A*STAR's Quantum Innovation Centre in Singapore. My work spans multi-terabyte scientific data systems, anomaly-detection validation, agentic AI tooling, full-stack web products, and secure software delivery. The through-line is systems-minded engineering: I like understanding the data, the runtime, the product surface, and the operational constraints together.",
  currentWork: [
    'Building AWS ETL and data lake workflows for GNOME-scale scientific datasets.',
    'Profiling 347k raw HDF5 files across 9 stations to understand coverage, quality, and reproducibility.',
    'Reproducing SR5/SR6 reference outputs to greater than 99% fidelity for trustable downstream analysis.',
    'Validating anomaly-detection feasibility on T4 GPU compute with calibration-aware preprocessing.',
  ],
  focusAreas: [
    {
      title: 'Research Systems',
      body: 'Scientific preprocessing, reproducibility checks, data lake design, GPU validation, and experiment hygiene.',
    },
    {
      title: 'Product Engineering',
      body: 'Next.js, TypeScript, auth, payments, admin workflows, APIs, mobile surfaces, and user-facing reliability.',
    },
    {
      title: 'AI Tooling',
      body: 'Agent workflows, local automation, RAG patterns, model-backed product flows, and developer experience tooling.',
    },
  ],
  proofPoints: [
    { value: '347k', label: 'HDF5 files profiled' },
    { value: '9', label: 'GNOME stations analyzed' },
    { value: '>99%', label: 'SR5/SR6 fidelity target reproduced' },
    { value: 'T4', label: 'GPU validation environment' },
  ],
  projects: [
    {
      title: 'A*STAR QInC / GNOME Research Infrastructure',
      category: 'Scientific ML Systems',
      period: '2026 - Present',
      href: 'https://www.a-star.edu.sg/',
      description:
        'Research engineering for GNOME dark matter detection workflows, centered on AWS-backed ETL, large HDF5 corpus profiling, reproducibility, and anomaly-detection validation.',
      impact: [
        'Designed multi-terabyte AWS ETL and data lake workflows.',
        'Profiled 347k HDF5 files across 9 stations.',
        'Reproduced SR5/SR6 reference outputs to greater than 99% fidelity.',
      ],
      stack: ['Python', 'AWS', 'HDF5', 'GPU compute', 'Scientific ML'],
    },
    {
      title: "Nandiniz'Aura",
      category: 'Production Commerce',
      period: '2025 - Ongoing',
      description:
        'A real small-business commerce platform with a public storefront, protected admin workflows, checkout, order management, analytics, auth, payment verification, and transactional email.',
      impact: [
        'Built full-stack storefront and admin workflows.',
        'Implemented Razorpay payment and webhook handling.',
        'Added API, auth, payment, and middleware test coverage.',
      ],
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Razorpay'],
      href: 'https://nandinizaura.com',
    },
    {
      title: 'Friday for Codex',
      category: 'AI Developer Tooling',
      period: 'April 2026',
      description:
        'A local macOS voice-triggered wake flow for Codex that opens the right workspace, speaks a cached briefing, and refreshes recent work context in the background.',
      impact: [
        'Connected launch automation with workspace context.',
        'Used cached spoken briefings to keep startup fast.',
        'Focused on practical agent-driven development ergonomics.',
      ],
      stack: ['macOS automation', 'LaunchAgents', 'OpenAI Codex', 'XTTS'],
      href: 'https://github.com/mxdhavgautam/friday-for-codex',
    },
    {
      title: 'Video Grabber',
      category: 'Browser Runtime',
      period: 'January 2026',
      description:
        'A Chromium MV3 browser extension architecture that moved media handling client-side through background workers, offscreen WASM tooling, OPFS checkpoints, and resumable jobs.',
      impact: [
        'Re-architected away from a server/VPS model.',
        'Designed deterministic error and recovery behavior.',
        'Kept distribution aligned with open-source unpacked install constraints.',
      ],
      stack: ['TypeScript', 'React', 'Chrome MV3', 'ffmpeg.wasm', 'OPFS'],
      href: 'https://github.com/mxdhavgautam/video-grabber',
    },
    {
      title: 'CR3ATE.AI',
      category: 'Computer Vision Product',
      period: 'January 2025 - December 2025',
      href: 'https://cr3ate.ai',
      description:
        'Remote developer work across CoreML blur detection, iOS capture flows, backend services, secure uploads, and 3D Gaussian splat reconstruction automation.',
      impact: [
        'Built model-backed real-time iOS capture checks.',
        'Supported production app, web, and backend surfaces.',
        'Integrated cloud processing and secure upload workflows.',
      ],
      stack: ['CoreML', 'iOS', 'Nest.js', 'AWS Lambda', 'MongoDB'],
    },
  ] satisfies Design10Project[],
  experience: [
    {
      company: 'A*STAR | Quantum Innovation Centre (QInC), Singapore',
      role: 'Research Officer',
      period: 'January 2026 - Present',
      location: 'Singapore',
      description:
        'Designing the Singapore-side cloud and ML stack for GNOME research workflows, including multi-terabyte AWS ETL, data lake organization, HDF5 corpus profiling, SR5/SR6 reproducibility, and anomaly-detection validation on GPU compute.',
    },
    {
      company: 'CR3ATE.AI',
      role: 'Developer Intern',
      period: 'January 2025 - December 2025',
      location: 'Remote / United States',
      description:
        'Worked across ML, computer vision, iOS, and backend systems for capture-quality checks, 3D reconstruction workflows, secure uploads, and production product surfaces.',
    },
    {
      company: 'HCLTech',
      role: 'Software Development Intern (Flutter)',
      period: 'October 2023 - December 2023',
      location: 'Lucknow',
      description:
        'Shipped an accessibility-first senior user manual app with larger typography, high-contrast themes, clear task guidance, and Agile iteration from user feedback.',
    },
    {
      company: 'WESEE | Ministry of Defence',
      role: 'Software Development Life Cycle Process Intern',
      period: 'August 2023 - September 2023',
      location: 'New Delhi',
      description:
        'Built secure Qt/Qt Creator communication applications for UDP and TCP/IP data exchange, offline SQLite persistence, validated receiver-side control logic, and internal integration.',
    },
  ] satisfies Design10Experience[],
  skills: [
    'Python',
    'TypeScript',
    'Next.js',
    'React',
    'PyTorch',
    'TensorFlow',
    'AWS EC2/S3/Lambda',
    'Docker',
    'PostgreSQL',
    'Prisma',
    'Nest.js',
    'Flutter',
    'CoreML',
    'SQLite',
    'LangChain',
    'RAG',
    'OpenAI APIs',
    'Anthropic APIs',
  ],
  links: [
    { label: 'Email', href: 'mailto:mxdhavgautam@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/mxdhavgautam' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mxdhavgautam' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing' },
  ] satisfies Design10Link[],
}
