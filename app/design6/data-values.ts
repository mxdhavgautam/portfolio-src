export type DocumentLink = {
  label: string
  href: string
}

export type WorkEntry = {
  title: string
  context: string
  period: string
  href: string
  summary: string
  notes: string[]
}

export type ExperienceEntry = {
  role: string
  org: string
  period: string
  note: string
}

export const documentHome = {
  title: "Madhav Gautam",
  updated: "Portfolio document",
  metadata: [
    "Research Officer, A*STAR Quantum Innovation Centre",
    "Singapore",
    "Open to full-time roles from late June / July 2026",
  ],
  intro:
    "I build between research code, cloud infrastructure, and product surfaces. Recent work has focused on making large scientific datasets inspectable and reproducible, while keeping a practical builder's range across full-stack products, browser runtimes, iOS ML, and local AI tooling.",
  note:
    "This page is intentionally closer to a working document than a homepage: concise links, selected work, current focus, and enough context for a technical reader to decide what to open next.",
  email: "mxdhavgautam@gmail.com",
  links: [
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing",
    },
    {
      label: "GitHub",
      href: "https://github.com/mxdhavgautam",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mxdhavgautam",
    },
    {
      label: "Email",
      href: "mailto:mxdhavgautam@gmail.com",
    },
  ] satisfies DocumentLink[],
}

export const currentFocus = [
  "Designing multi-terabyte AWS ETL and data lake workflows for GNOME research data.",
  "Profiling 347k raw HDF5 files across 9 stations and surfacing data quality issues at scale.",
  "Reproducing SR5/SR6 reference outputs to greater than 99% fidelity with calibration-aware preprocessing.",
  "Validating anomaly-detection feasibility on T4 GPU compute with repeatable evaluation paths.",
]

export const selectedWork = [
  {
    title: "A*STAR QInC / GNOME Research Infrastructure",
    context: "Scientific ML systems",
    period: "2026 - Present",
    href: "https://www.a-star.edu.sg/",
    summary:
      "Singapore-side research engineering for GNOME dark matter detection workflows, centered on AWS data movement, HDF5 corpus profiling, reproducibility, and anomaly-detection validation.",
    notes: [
      "Built multi-terabyte ETL and data lake workflows on AWS.",
      "Profiled 347k raw HDF5 files across 9 stations.",
      "Reproduced SR5/SR6 reference outputs to greater than 99% fidelity and validated an LSTM baseline on T4 GPU compute.",
    ],
  },
  {
    title: "Nandiniz'Aura",
    context: "Production commerce platform",
    period: "2025 - Ongoing",
    href: "https://nandinizaura.com",
    summary:
      "A production commerce platform for a small business with public storefront, protected admin workflows, checkout, order management, analytics, role-based auth, and transactional email.",
    notes: [
      "Implemented 21 API routes across storefront, admin, orders, and payment flows.",
      "Added Razorpay webhook verification, CSRF handling, and protected API paths.",
      "Covered API, auth, payments, and middleware behavior with a 28-file test suite.",
    ],
  },
  {
    title: "Friday for Codex",
    context: "Local AI developer tooling",
    period: "April 2026",
    href: "https://github.com/mxdhavgautam/friday-for-codex",
    summary:
      "A macOS voice-triggered wake flow for Codex that opens the right workspace, speaks a cached briefing, and refreshes recent work context in the background.",
    notes: [
      "Uses LaunchAgents, voice activation, custom XTTS voice config, and Codex workspace routing.",
      "Keeps wake-up fast with cached briefings and a 30-minute background refresh pipeline.",
      "Pulls from recent work context such as Chronicle summaries, Codex chats, email, and calendar.",
    ],
  },
  {
    title: "Video Grabber",
    context: "Chromium MV3 browser runtime",
    period: "January 2026",
    href: "https://github.com/mxdhavgautam/video-grabber",
    summary:
      "A strict client-side Chromium MV3 extension architecture for media handling through background workers, offscreen WASM tooling, OPFS checkpoints, and resumable jobs.",
    notes: [
      "Re-architected the project away from a server/VPS model.",
      "Designed deterministic error taxonomy, recovery matrix, and resumable processing behavior.",
      "Kept distribution aligned with open-source unpacked install constraints.",
    ],
  },
  {
    title: "CR3ATE.AI",
    context: "Computer vision product work",
    period: "January 2025 - December 2025",
    href: "https://cr3ate.ai",
    summary:
      "Remote developer work across ML, computer vision, iOS, backend systems, secure uploads, and 3D Gaussian splat reconstruction automation.",
    notes: [
      "Built CoreML blur-detection models for real-time iOS capture flows.",
      "Supported production iOS, web, and backend surfaces.",
      "Integrated Hive API, Nest.js, AWS Lambda, S3, MongoDB, and Firebase Auth workflows.",
    ],
  },
  {
    title: "Cardiac MRI Classification",
    context: "Applied deep learning study",
    period: "January 2025 - May 2025",
    href: "https://github.com/mxdhavgautam/A-Comparative-Study-of-Deep-Learning-Models-and-Training-Techniques-for-Cardiac-MRI-Classification",
    summary:
      "A comparative deep learning project for cardiac MRI classification using MobileNetV2, ResNet152V2, DenseNet201, and InceptionV3 on about 63k images.",
    notes: [
      "Explored transfer learning, augmentation, class weighting, a spatial attention block, and an attention ensemble.",
      "Produced reproducible training runs, evaluation plots, saved checkpoints, and an accompanying paper.",
    ],
  },
] satisfies WorkEntry[]

export const experienceSnapshot = [
  {
    role: "Research Officer",
    org: "A*STAR | Quantum Innovation Centre, Singapore",
    period: "January 2026 - Present",
    note: "Cloud and ML stack for GNOME research workflows: ETL, data lake organization, HDF5 profiling, reproducibility, and anomaly-detection validation.",
  },
  {
    role: "Developer Intern",
    org: "CR3ATE.AI | United States",
    period: "January 2025 - December 2025",
    note: "ML, iOS, backend, and cloud processing work for capture-quality checks, 3D reconstruction workflows, secure uploads, and production surfaces.",
  },
  {
    role: "Software Development Intern",
    org: "HCLTech | Lucknow",
    period: "October 2023 - December 2023",
    note: "Accessibility-first senior user manual app with larger typography, high-contrast themes, clear task guidance, and Agile feedback loops.",
  },
  {
    role: "SDLC Process Intern",
    org: "WESEE | Ministry of Defence, New Delhi",
    period: "August 2023 - September 2023",
    note: "Secure Qt communication applications for UDP/TCP-IP exchange, offline SQLite persistence, receiver-side control logic, and internal integration.",
  },
] satisfies ExperienceEntry[]
