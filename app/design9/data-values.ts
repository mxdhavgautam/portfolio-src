export type ProfileFact = {
  label: string
  value: string
}

export type FitNote = {
  track: string
  read: string
  evidence: string
}

export type WorkRecord = {
  title: string
  timeframe: string
  classification: string
  href?: string
  relevance: string
  evidence: string[]
}

export type RoleRecord = {
  role: string
  organization: string
  period: string
  location: string
  scope: string
}

export type ContactReference = {
  label: string
  value: string
  href: string
}

export const profile = {
  name: 'Madhav Gautam',
  handle: 'mxdhavgautam.com',
  email: 'mxdhavgautam@gmail.com',
  currentRole: 'Research Officer, A*STAR Quantum Innovation Centre',
  headline:
    'Research engineer and software builder working across scientific ML infrastructure, cloud data systems, AI tooling, and shipped product software.',
  availability:
    'Looking for full-time AI/ML, software, data, or GenAI product engineering roles from late June / July 2026.',
  locationPreference: 'Delhi, Gurgaon, or remote teams.',
  resume:
    'https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing',
  github: 'https://github.com/mxdhavgautam',
  linkedin: 'https://linkedin.com/in/mxdhavgautam',
}

export const profileFacts: ProfileFact[] = [
  {
    label: 'Current work',
    value:
      'Singapore-side cloud and ML workflows for the GNOME dark matter detection project at A*STAR QInC.',
  },
  {
    label: 'Most relevant roles',
    value:
      'AI/ML engineering, research engineering, data engineering, GenAI product engineering, full-stack product work, and developer tooling.',
  },
  {
    label: 'Working style',
    value:
      'Takes ambiguous technical work into inspectable systems: reproducible data movement, validation artifacts, useful interfaces, and operational safeguards.',
  },
]

export const fitNotes: FitNote[] = [
  {
    track: 'Research engineering / scientific ML',
    read:
      'Strongest current signal. The work is data-heavy, reproducibility-minded, and tied to real research infrastructure rather than isolated notebooks.',
    evidence:
      'A*STAR GNOME work includes multi-terabyte AWS ETL and data lake workflows, profiling 347k raw HDF5 files across 9 stations, reproducing SR5/SR6 reference outputs to greater than 99% fidelity, and validating an LSTM anomaly-detection baseline on T4 GPU compute.',
  },
  {
    track: 'Full-stack product engineering',
    read:
      'Can own practical product surfaces and backend behavior beyond a visual prototype.',
    evidence:
      "Nandiniz'Aura includes a public storefront, admin dashboard, checkout, order management, analytics, role-based auth, protected APIs, Razorpay webhook verification, CSRF handling, transactional email, and a 28-file Vitest suite.",
  },
  {
    track: 'AI tooling / developer workflows',
    read:
      'Builds AI-assisted workflow tools around context handoff, latency, recovery, and day-to-day usability.',
    evidence:
      'Friday for Codex opens the right workspace, plays an immediate greeting, and reads cached spoken briefings assembled from recent work context, with a 30-minute background refresh pipeline.',
  },
  {
    track: 'Client-side systems / runtime design',
    read:
      'Has evidence of treating browser and mobile constraints as architecture problems, not just UI implementation.',
    evidence:
      'Video Grabber was re-architected away from a server/VPS model into a strict client-side Chromium MV3 extension with background worker execution, offscreen WASM media tooling, OPFS checkpoints, resumable jobs, and deterministic recovery rules.',
  },
]

export const workRecords: WorkRecord[] = [
  {
    title: 'A*STAR QInC / GNOME research infrastructure',
    timeframe: '2026 - present',
    classification: 'Current research engineering work',
    relevance: 'Scientific ML infrastructure, AWS data workflows, reproducibility',
    evidence: [
      'Designing Singapore-side cloud and ML workflows for GNOME dark matter detection.',
      'Building multi-terabyte ETL and data lake workflows on AWS.',
      'Profiling 347k raw HDF5 files across 9 stations and comparing SR5/SR6 reference outputs to greater than 99% fidelity.',
      'Validating anomaly-detection feasibility with an LSTM baseline on T4 GPU compute.',
    ],
  },
  {
    title: "Nandiniz'Aura - production e-commerce platform",
    timeframe: '2025 - ongoing',
    classification: 'Full-stack commerce product',
    href: 'https://nandinizaura.com',
    relevance: 'Production web app, protected APIs, payments, tests',
    evidence: [
      'Built a storefront, admin dashboard, checkout, order management, analytics, role-based auth, and transactional email.',
      'Implemented 21 API routes across storefront, admin, orders, and payment flows.',
      'Added Razorpay webhook verification, CSRF handling, and protected API paths.',
      'Covered API, auth, payments, and middleware behavior with a 28-file test suite.',
    ],
  },
  {
    title: 'Friday for Codex',
    timeframe: 'April 2026',
    classification: 'Local AI developer tooling',
    href: 'https://github.com/mxdhavgautam/friday-for-codex',
    relevance: 'Agent workflows, local automation, context systems',
    evidence: [
      'Built a macOS voice-triggered wake flow for Codex that opens the right workspace and speaks a cached briefing.',
      'Uses LaunchAgents, voice activation, custom XTTS voice config, and Codex workspace routing.',
      'Refreshes recent work context from Chronicle summaries, Codex chats, email, and calendar on a 30-minute background pipeline.',
    ],
  },
  {
    title: 'Video Grabber - Chromium MV3 browser extension',
    timeframe: 'January 2026',
    classification: 'Browser runtime architecture',
    href: 'https://github.com/mxdhavgautam/video-grabber',
    relevance: 'Client-side systems, WASM tooling, resumable jobs',
    evidence: [
      'Re-architected the project from a server/VPS model into a strict client-side Chromium MV3 extension.',
      'Used background worker execution, offscreen WASM yt-dlp and ffmpeg runtime, OPFS checkpoints, and resumable jobs.',
      'Defined a deterministic error taxonomy, recovery matrix, and policy-aware distribution strategy for open-source unpacked installs.',
    ],
  },
  {
    title: 'Cardiac MRI classification comparative study',
    timeframe: 'January 2025 - May 2025',
    classification: 'Applied deep learning study',
    href:
      'https://github.com/mxdhavgautam/A-Comparative-Study-of-Deep-Learning-Models-and-Training-Techniques-for-Cardiac-MRI-Classification',
    relevance: 'Model comparison, training artifacts, evaluation',
    evidence: [
      'Compared MobileNetV2, ResNet152V2, DenseNet201, and InceptionV3 on about 63k cardiac MRI images.',
      'Explored transfer learning, augmentation, class weighting, a spatial attention block, and an attention ensemble.',
      'Produced reproducible training runs, evaluation plots, saved checkpoints, and an accompanying paper.',
    ],
  },
  {
    title: 'CR3ATE.AI',
    timeframe: 'January 2025 - December 2025',
    classification: 'Computer vision product work',
    href: 'https://cr3ate.ai',
    relevance: 'ML, iOS capture flows, backend/cloud processing',
    evidence: [
      'Worked across ML, computer vision, iOS, backend systems, secure uploads, and 3D Gaussian splat reconstruction automation.',
      'Built CoreML blur-detection models for real-time iOS capture flows.',
      'Supported production iOS, web, and backend surfaces with Nest.js, AWS Lambda, S3, MongoDB, and Firebase Auth.',
    ],
  },
]

export const roleRecords: RoleRecord[] = [
  {
    role: 'Research Officer',
    organization: 'A*STAR | Quantum Innovation Centre',
    period: 'January 2026 - Present',
    location: 'Singapore',
    scope:
      'Cloud and ML stack for GNOME research workflows: ETL, data lake organization, HDF5 profiling, reproducibility checks, and GPU-backed anomaly-detection validation.',
  },
  {
    role: 'Developer Intern',
    organization: 'CR3ATE.AI',
    period: 'January 2025 - December 2025',
    location: 'Remote / United States',
    scope:
      'CoreML blur detection, iOS capture flows, web/backend systems, secure uploads, AWS Lambda/S3, MongoDB, Firebase Auth, and 3D Gaussian splat reconstruction automation.',
  },
  {
    role: 'Software Development Intern, Flutter',
    organization: 'HCLTech',
    period: 'October 2023 - December 2023',
    location: 'Lucknow',
    scope:
      'Accessibility-first elderly user manual app with larger typography, high-contrast themes, clear task guidance, and Agile feedback loops.',
  },
  {
    role: 'SDLC Process Intern',
    organization: 'WESEE | Ministry of Defence',
    period: 'August 2023 - September 2023',
    location: 'New Delhi',
    scope:
      'Qt/Qt Creator communication applications for UDP/TCP exchange, offline SQLite persistence, validated receiver-side command logic, and internal integration documentation.',
  },
]

export const education = {
  institution: 'Vellore Institute of Technology',
  credential:
    'BTech in Computer Science Engineering with Specialisation in Artificial Intelligence and Robotics',
  period: '2021 - 2025',
}

export const contactReferences: ContactReference[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'Resume',
    value: 'Google Drive resume',
    href: profile.resume,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mxdhavgautam',
    href: profile.linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/mxdhavgautam',
    href: profile.github,
  },
]
