export type WorkspaceAction = {
  label: string
  href: string
  kind: "primary" | "secondary"
}

export type MetaNote = {
  label: string
  value: string
}

export type CalloutNote = {
  label: string
  title: string
  body: string
  tone: "amber" | "mint" | "blue"
}

export type ProjectNote = {
  title: string
  href: string
  period: string
  folder: string
  summary: string
  receipts: string[]
}

export type WorkNote = {
  role: string
  org: string
  period: string
  note: string
  openLoops: string[]
}

export type SideNote = {
  label: string
  value: string
}

export const profile = {
  name: "Madhav Gautam",
  handle: "mxdhavgautam.com",
  email: "mxdhavgautam@gmail.com",
  role: "Research Officer at A*STAR Quantum Innovation Centre",
  location: "Singapore / India",
  title: "Clean workspace for research systems, AI tooling, and production software.",
  intro:
    "A document-style view of Madhav's portfolio: current research context, selected shipped systems, and concise notes for deciding what to open next.",
  availability:
    "Looking for full-time AI/ML, software, data, or GenAI product engineering roles in Delhi, Gurgaon, or remote teams from late June / July 2026.",
}

export const actions: WorkspaceAction[] = [
  {
    label: "GitHub",
    href: "https://github.com/mxdhavgautam",
    kind: "primary",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mxdhavgautam",
    kind: "secondary",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing",
    kind: "secondary",
  },
]

export const metaNotes: MetaNote[] = [
  {
    label: "Active file",
    value: "A*STAR QInC / GNOME dark matter detection workflows",
  },
  {
    label: "Working mode",
    value: "Research code, cloud data infrastructure, ML validation, and product surfaces",
  },
  {
    label: "Best fit",
    value: "AI/ML engineering, data engineering, software engineering, GenAI product development",
  },
]

export const callouts: CalloutNote[] = [
  {
    label: "Pinned",
    title: "Research engineering is the current center of gravity.",
    body:
      "At A*STAR, Madhav designs the Singapore-side cloud and ML stack for GNOME: multi-terabyte AWS ETL, HDF5 corpus profiling, SR5/SR6 reference-output reproduction, and anomaly-detection validation.",
    tone: "amber",
  },
  {
    label: "Reading guide",
    title: "Open the receipts, not a generic portfolio grid.",
    body:
      "The notes below keep each project compact: one useful summary, linked artifact, and concrete implementation evidence from the local portfolio records.",
    tone: "mint",
  },
  {
    label: "Scope",
    title: "No blog layer or invented claims.",
    body:
      "This page uses repo-local Madhav data only, with older work kept as context instead of being stretched into headline proof points.",
    tone: "blue",
  },
]

export const projectNotes: ProjectNote[] = [
  {
    title: "A*STAR QInC / GNOME Research Infrastructure",
    href: "https://www.a-star.edu.sg/",
    period: "2026 - Present",
    folder: "scientific-ml-systems",
    summary:
      "Singapore-side research engineering for GNOME dark matter detection workflows, centered on AWS data movement, HDF5 profiling, reproducibility, and anomaly-detection validation.",
    receipts: [
      "Multi-terabyte ETL and data lake workflows on AWS.",
      "347k raw HDF5 files profiled across 9 stations.",
      "SR5/SR6 reference outputs reproduced to greater than 99% fidelity; LSTM anomaly-detection feasibility validated on T4 GPU compute.",
    ],
  },
  {
    title: "Nandiniz'Aura - Production E-Commerce Platform",
    href: "https://nandinizaura.com",
    period: "2025 - Ongoing",
    folder: "full-stack-commerce",
    summary:
      "Production commerce platform for a small business with storefront, protected admin workflows, checkout, order management, analytics, role-based auth, and transactional email.",
    receipts: [
      "21 API routes across storefront, admin, orders, analytics, auth, and payment flows.",
      "Razorpay webhook verification, CSRF handling, protected API paths, and Resend email.",
      "Focused Vitest coverage for API, auth, payments, and middleware behavior.",
    ],
  },
  {
    title: "Friday for Codex",
    href: "https://github.com/mxdhavgautam/friday-for-codex",
    period: "April 2026",
    folder: "local-ai-tooling",
    summary:
      "macOS voice-triggered wake flow for Codex that opens the right workspace, speaks a cached briefing, and refreshes recent work context in the background.",
    receipts: [
      "LaunchAgents, voice activation, custom XTTS voice config, and Codex workspace routing.",
      "30-minute background refresh pipeline keeps wake-up fast.",
      "Briefings draw from Chronicle summaries, Codex chats, email, and calendar.",
    ],
  },
  {
    title: "Video Grabber - Chromium MV3 Browser Extension",
    href: "https://github.com/mxdhavgautam/video-grabber",
    period: "January 2026",
    folder: "browser-runtime",
    summary:
      "Client-side Chromium MV3 media extension architecture using background workers, offscreen WASM tooling, OPFS checkpoints, and resumable jobs.",
    receipts: [
      "Re-architected away from a server/VPS model.",
      "WASM-based yt-dlp and ffmpeg runtime with OPFS-backed recovery state.",
      "Deterministic error taxonomy, recovery matrix, and open-source unpacked install strategy.",
    ],
  },
  {
    title: "Cardiac MRI Classification",
    href: "https://github.com/mxdhavgautam/A-Comparative-Study-of-Deep-Learning-Models-and-Training-Techniques-for-Cardiac-MRI-Classification",
    period: "January 2025 - May 2025",
    folder: "applied-deep-learning",
    summary:
      "Comparative cardiac MRI classification study using MobileNetV2, ResNet152V2, DenseNet201, and InceptionV3 on about 63k images.",
    receipts: [
      "Explored transfer learning, augmentation, class weighting, a spatial attention block, and an attention ensemble.",
      "Includes reproducible training, evaluation plots, saved checkpoints, and an accompanying paper.",
    ],
  },
]

export const currentWork: WorkNote[] = [
  {
    role: "Research Officer",
    org: "A*STAR | Quantum Innovation Centre, Singapore",
    period: "January 2026 - Present",
    note:
      "Cloud and ML stack for GNOME research workflows: ETL, data lake organization, HDF5 profiling, reproducibility, and anomaly-detection validation.",
    openLoops: [
      "AWS-backed ETL and data lake design",
      "Calibration-aware preprocessing and SR5/SR6 reproduction",
      "LSTM feasibility validation for time-series anomaly detection",
    ],
  },
  {
    role: "Developer Intern",
    org: "CR3ATE.AI | United States",
    period: "January 2025 - December 2025",
    note:
      "ML, iOS, backend, and cloud processing work for capture-quality checks, 3D reconstruction workflows, secure uploads, and production surfaces.",
    openLoops: [
      "CoreML blur-detection experiments for iOS capture flows",
      "Hive API automation for 3D Gaussian splat reconstruction",
      "Nest.js, AWS Lambda, S3, MongoDB, and Firebase Auth support",
    ],
  },
]

export const sideNotes: SideNote[] = [
  {
    label: "Education",
    value:
      "BTech in Computer Science Engineering with Specialisation in Artificial Intelligence and Robotics, VIT Chennai, 2021 - 2025.",
  },
  {
    label: "Earlier engineering",
    value:
      "HCLTech Flutter accessibility app for seniors; WESEE secure Qt communication applications with UDP/TCP-IP and SQLite persistence.",
  },
  {
    label: "Contact",
    value: "mxdhavgautam@gmail.com",
  },
]
