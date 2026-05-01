export type Artifact = {
  title: string
  eyebrow: string
  period: string
  href?: string
  image: string
  imageAlt: string
  summary: string
  artifact: string
  proof: string[]
  stack: string[]
}

export type Capability = {
  title: string
  description: string
  evidence: string[]
}

export type Experience = {
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
  location: 'Singapore / India',
  email: 'mxdhavgautam@gmail.com',
  resumeURL:
    'https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing',
  githubURL: 'https://github.com/mxdhavgautam',
  linkedinURL: 'https://linkedin.com/in/mxdhavgautam',
  twitterURL: 'https://x.com/mxdhavgautam',
  availability: 'Open to full-time roles starting late June / July 2026 in Delhi, Gurgaon, or remote.',
  headline: 'Research systems, AI tooling, and product software with visible proof.',
  intro:
    'Madhav is a research-builder and systems-minded product engineer working across scientific ML infrastructure, agent workflows, browser runtimes, and full-stack product surfaces.',
  currentProof:
    'Current work at A*STAR Quantum Innovation Centre in Singapore includes multi-terabyte AWS ETL and data lake workflows for GNOME, profiling 347k HDF5 files across 9 stations, SR5/SR6 reproducibility to >99% fidelity, and anomaly-detection validation on T4 GPU compute.',
  proofStats: [
    { value: '347k', label: 'HDF5 files profiled' },
    { value: '9', label: 'GNOME stations analyzed' },
    { value: '>99%', label: 'SR5/SR6 reproducibility fidelity' },
    { value: 'T4', label: 'GPU anomaly-validation baseline' },
  ],
  artifacts: [
    {
      title: 'A*STAR QInC / GNOME Research Infrastructure',
      eyebrow: 'Scientific ML systems',
      period: '2026 - Present',
      image: '/assets/images/astar-card.webp',
      imageAlt: 'A*STAR research systems project card',
      summary:
        'Singapore-side research engineering for GNOME dark matter detection workflows, centered on cloud data movement, corpus profiling, reproducibility, and validation discipline.',
      artifact: 'A research workflow surface built around AWS data lake organization, HDF5 profiling reports, SR5/SR6 comparison outputs, and GPU-backed anomaly-detection experiments.',
      proof: [
        'Multi-terabyte AWS ETL and data lake workflows for GNOME-scale data.',
        '347k raw HDF5 files profiled across 9 stations to understand coverage and quality.',
        'SR5/SR6 reference outputs reproduced to greater than 99% fidelity before downstream modeling.',
      ],
      stack: ['Python', 'AWS', 'HDF5', 'Scientific ML', 'GPU compute'],
    },
    {
      title: "Nandiniz'Aura",
      eyebrow: 'Production commerce',
      period: '2025 - Ongoing',
      href: 'https://nandinizaura.com',
      image: '/assets/images/nandinizaura-card.webp',
      imageAlt: "Nandiniz'Aura storefront and product surface",
      summary:
        'A full-stack commerce platform for a small business, including storefront, admin dashboard, checkout, orders, analytics, protected APIs, and operational flows.',
      artifact:
        'A live product surface with customer-facing commerce, admin workflows, payment verification, transactional email, and a backend shaped for day-to-day operation.',
      proof: [
        '21 API routes spanning auth, admin, commerce, orders, analytics, and payments.',
        'Razorpay webhook verification, CSRF handling, middleware protection, and transactional email.',
        'API, auth, middleware, and payment behavior covered by a focused test suite.',
      ],
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Razorpay'],
    },
    {
      title: 'Friday for Codex',
      eyebrow: 'AI developer tooling',
      period: 'April 2026',
      href: 'https://github.com/mxdhavgautam/friday-for-codex',
      image: '/assets/images/friday-for-codex-card.webp',
      imageAlt: 'Friday for Codex workflow preview',
      summary:
        'A local macOS voice-triggered wake flow for Codex that opens the right workspace and speaks a cached briefing from recent work context.',
      artifact:
        'A practical local agent workflow with LaunchAgent refreshes, spoken briefings, work-context caching, and workspace handoff rather than a standalone assistant demo.',
      proof: [
        '30-minute cache keeps wake-up fast while preserving current context.',
        'Briefings combine recent development activity, Codex chats, email, and calendar context.',
        'Designed around real daily workflow friction: launch, orient, and continue.',
      ],
      stack: ['macOS', 'LaunchAgents', 'OpenAI Codex', 'XTTS', 'Automation'],
    },
    {
      title: 'Video Grabber',
      eyebrow: 'Browser runtime architecture',
      period: 'January 2026',
      href: 'https://github.com/mxdhavgautam/video-grabber',
      image: '/assets/images/video-grabber-card.webp',
      imageAlt: 'Video Grabber extension project surface',
      summary:
        'A Chromium MV3 media extension architecture that moves jobs client-side through browser workers, offscreen WASM tooling, OPFS checkpoints, and resumable recovery paths.',
      artifact:
        'A browser-native runtime plan with deterministic job states, error taxonomy, recovery behavior, and a distribution path aligned with open-source unpacked installs.',
      proof: [
        'Replaced a server/VPS model with background worker and offscreen WASM execution.',
        'OPFS checkpoints and resumable jobs define recovery behavior instead of hoping jobs finish.',
        'Policy-aware architecture keeps the extension grounded in browser platform constraints.',
      ],
      stack: ['TypeScript', 'React', 'Chrome MV3', 'ffmpeg.wasm', 'OPFS'],
    },
    {
      title: 'CR3ATE.AI',
      eyebrow: 'Computer vision product',
      period: 'January 2025 - December 2025',
      image: '/assets/images/cr3ate.webp',
      imageAlt: 'CR3ATE.AI project surface',
      summary:
        'Developer work across CoreML blur detection, iOS capture flows, backend services, secure uploads, and 3D Gaussian splat reconstruction automation.',
      artifact:
        'Model-backed capture checks and production product infrastructure connecting mobile quality control, upload flows, cloud processing, and reconstruction automation.',
      proof: [
        'Built real-time blur detection experiments for iOS capture quality checks.',
        'Worked across production app, web, backend, AWS Lambda/S3, MongoDB, and Firebase Auth.',
        'Automated workflow handoffs around upload processing and reconstruction tasks.',
      ],
      stack: ['CoreML', 'iOS', 'Nest.js', 'AWS Lambda', 'MongoDB'],
    },
  ] satisfies Artifact[],
  capabilities: [
    {
      title: 'Research-builder',
      description:
        'Turns research uncertainty into traceable pipelines, reproducibility checks, and validation loops that can support scientific judgment.',
      evidence: ['GNOME workflows', 'HDF5 corpus profiling', 'SR5/SR6 reproducibility'],
    },
    {
      title: 'Systems-minded product engineer',
      description:
        'Builds the product surface and the less glamorous machinery around it: auth, payments, APIs, admin flows, tests, and operations.',
      evidence: ['Protected APIs', 'Payment verification', 'Admin workflows'],
    },
    {
      title: 'AI tooling builder',
      description:
        'Designs AI and agent workflows that sit close to actual work, with context, latency, and handoff constraints treated as product requirements.',
      evidence: ['Codex automation', 'Spoken briefings', 'GPU validation'],
    },
    {
      title: 'Full-stack developer',
      description:
        'Moves across frontend, backend, mobile, browser extensions, cloud services, databases, and ML-adjacent infrastructure.',
      evidence: ['Next.js', 'Flutter', 'Chrome MV3', 'AWS'],
    },
  ] satisfies Capability[],
  experience: [
    {
      company: 'A*STAR | Quantum Innovation Centre',
      role: 'Research Officer',
      period: 'January 2026 - Present',
      location: 'Singapore',
      description:
        'Building Singapore-side cloud and ML workflows for GNOME, including multi-terabyte AWS ETL, HDF5 profiling, SR5/SR6 reproducibility, and anomaly-detection validation on T4 GPU compute.',
    },
    {
      company: 'CR3ATE.AI',
      role: 'Developer Intern',
      period: 'January 2025 - December 2025',
      location: 'Remote / United States',
      description:
        'Worked across ML, iOS, backend services, upload processing, CoreML capture-quality checks, AWS Lambda/S3, MongoDB, Firebase Auth, and reconstruction automation.',
    },
    {
      company: 'HCLTech',
      role: 'Software Development Intern, Flutter',
      period: 'October 2023 - December 2023',
      location: 'Lucknow',
      description:
        'Built an accessibility-first elderly user manual app with larger typography, high-contrast themes, clearer touch targets, and guided smartphone tasks.',
    },
    {
      company: 'WESEE | Ministry of Defence',
      role: 'SDLC Process Intern',
      period: 'August 2023 - September 2023',
      location: 'New Delhi',
      description:
        'Designed secure Qt/Qt Creator communication applications using UDP, TCP/IP, SQLite persistence, receiver-side command logic, and integration documentation.',
    },
  ] satisfies Experience[],
  stack: [
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
    'LangChain',
    'RAG',
    'OpenAI APIs',
  ],
}
