export type ArchiveLink = {
  label: string
  href: string
}

export type ArchiveProject = {
  title: string
  year: string
  kind: string
  href: string
  summary: string
  details: string[]
}

export type ArchiveExperience = {
  org: string
  role: string
  period: string
  note: string
}

export const profile = {
  name: 'Madhav Gautam',
  handle: 'mxdhavgautam.com',
  role: 'Research Officer at A*STAR Quantum Innovation Centre',
  email: 'mxdhavgautam@gmail.com',
  summary:
    'Research-builder working across scientific ML infrastructure, cloud data systems, AI tooling, and production software. The work below is ordered by signal: shipped systems, technical depth, and relevance to AI/ML, data, and full-stack engineering roles.',
  availability:
    'Looking for full-time AI/ML, software, data, or GenAI product engineering roles in Delhi, Gurgaon, or remote teams from late June / July 2026.',
  links: [
    { label: 'GitHub', href: 'https://github.com/mxdhavgautam' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mxdhavgautam' },
    {
      label: 'Resume',
      href: 'https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing',
    },
  ] satisfies ArchiveLink[],
}

export const projects = [
  {
    title: 'A*STAR QInC / GNOME Research Infrastructure',
    year: '2026 - Present',
    kind: 'Scientific ML systems',
    href: 'https://www.a-star.edu.sg/',
    summary:
      'Singapore-side research engineering for GNOME dark matter detection workflows, centered on AWS data movement, HDF5 corpus profiling, reproducibility, and anomaly-detection validation.',
    details: [
      'Built multi-terabyte ETL and data lake workflows on AWS.',
      'Profiled 347k raw HDF5 files across 9 stations.',
      'Reproduced SR5/SR6 reference outputs to greater than 99% fidelity and validated an LSTM baseline on T4 GPU compute.',
    ],
  },
  {
    title: "Nandiniz'Aura - Production E-Commerce Platform",
    year: '2025 - Ongoing',
    kind: 'Full-stack commerce',
    href: 'https://nandinizaura.com',
    summary:
      'A production commerce platform for a small business with public storefront, protected admin workflows, checkout, order management, analytics, role-based auth, and transactional email.',
    details: [
      'Implemented 21 API routes across storefront, admin, orders, and payment flows.',
      'Added Razorpay webhook verification, CSRF handling, and protected API paths.',
      'Covered API, auth, payments, and middleware behavior with a 28-file test suite.',
    ],
  },
  {
    title: 'Friday for Codex',
    year: 'April 2026',
    kind: 'Local AI developer tooling',
    href: 'https://github.com/mxdhavgautam/friday-for-codex',
    summary:
      'A macOS voice-triggered wake flow for Codex that opens the right workspace, speaks a cached briefing, and refreshes recent work context in the background.',
    details: [
      'Uses LaunchAgents, voice activation, custom XTTS voice config, and Codex workspace routing.',
      'Keeps wake-up fast with cached briefings and a 30-minute background refresh pipeline.',
      'Pulls from recent work context such as Chronicle summaries, Codex chats, email, and calendar.',
    ],
  },
  {
    title: 'Video Grabber - Chromium MV3 Browser Extension',
    year: 'January 2026',
    kind: 'Browser runtime',
    href: 'https://github.com/mxdhavgautam/video-grabber',
    summary:
      'A strict client-side Chromium MV3 extension architecture for media handling through background workers, offscreen WASM tooling, OPFS checkpoints, and resumable jobs.',
    details: [
      'Re-architected the project away from a server/VPS model.',
      'Designed deterministic error taxonomy, recovery matrix, and resumable processing behavior.',
      'Kept distribution aligned with open-source unpacked install constraints.',
    ],
  },
  {
    title: 'Cardiac MRI Classification',
    year: 'January 2025 - May 2025',
    kind: 'Applied deep learning study',
    href: 'https://github.com/mxdhavgautam/A-Comparative-Study-of-Deep-Learning-Models-and-Training-Techniques-for-Cardiac-MRI-Classification',
    summary:
      'A comparative deep learning project for cardiac MRI classification using MobileNetV2, ResNet152V2, DenseNet201, and InceptionV3 on about 63k images.',
    details: [
      'Explored transfer learning, augmentation, class weighting, a spatial attention block, and an attention ensemble.',
      'Produced reproducible training runs, evaluation plots, saved checkpoints, and an accompanying paper.',
    ],
  },
  {
    title: 'CR3ATE.AI',
    year: 'January 2025 - December 2025',
    kind: 'Computer vision product work',
    href: 'https://cr3ate.ai',
    summary:
      'Remote developer work across ML, computer vision, iOS, backend systems, secure uploads, and 3D Gaussian splat reconstruction automation.',
    details: [
      'Built CoreML blur-detection models for real-time iOS capture flows.',
      'Supported production iOS, web, and backend surfaces.',
      'Integrated Hive API, Nest.js, AWS Lambda, S3, MongoDB, and Firebase Auth workflows.',
    ],
  },
] satisfies ArchiveProject[]

export const experience = [
  {
    org: 'A*STAR | Quantum Innovation Centre, Singapore',
    role: 'Research Officer',
    period: 'January 2026 - Present',
    note: 'Cloud and ML stack for GNOME research workflows: ETL, data lake organization, HDF5 profiling, reproducibility, and anomaly-detection validation.',
  },
  {
    org: 'CR3ATE.AI | United States',
    role: 'Developer Intern',
    period: 'January 2025 - December 2025',
    note: 'ML, iOS, backend, and cloud processing work for capture-quality checks, 3D reconstruction workflows, secure uploads, and production surfaces.',
  },
  {
    org: 'HCLTech | Lucknow',
    role: 'Software Development Intern (Flutter)',
    period: 'October 2023 - December 2023',
    note: 'Accessibility-first senior user manual app with larger typography, high-contrast themes, clear task guidance, and Agile feedback loops.',
  },
  {
    org: 'WESEE | Ministry of Defence, New Delhi',
    role: 'SDLC Process Intern',
    period: 'August 2023 - September 2023',
    note: 'Secure Qt communication applications for UDP/TCP-IP exchange, offline SQLite persistence, receiver-side control logic, and internal integration.',
  },
] satisfies ArchiveExperience[]
