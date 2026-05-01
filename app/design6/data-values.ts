export const profile = {
  name: "Madhav Gautam",
  handle: "mxdhavgautam.com",
  role: "Research Officer at A*STAR Quantum Innovation Centre",
  location: "Singapore",
  thesis:
    "Research systems should be legible enough to trust, and useful enough to leave the lab.",
  summary:
    "I work as a research-builder: part systems-minded product engineer, part AI tooling builder, part full-stack developer. The work spans scientific ML pipelines, multi-terabyte cloud data systems, agent workflows, and production software.",
  profile:
    "Madhav builds between research code, infrastructure, and product surfaces. The through-line is practical clarity: make data inspectable, make systems repeatable, and make tools that hold up after the demo.",
  availability:
    "Open to full-time roles starting late June / July 2026 in Delhi, Gurgaon, or remote teams.",
  email: "mxdhavgautam@gmail.com",
  links: {
    site: "https://mxdhavgautam.com",
    github: "https://github.com/mxdhavgautam",
    linkedin: "https://linkedin.com/in/mxdhavgautam",
    x: "https://x.com/mxdhavgautam",
    telegram: "https://t.me/mxdhavgautam",
    instagram: "https://instagram.com/mxdhavgautam",
    resume:
      "https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing",
  },
}

export const currentWork = [
  {
    label: "AWS data lake workflows",
    detail:
      "Designing multi-terabyte ETL paths for GNOME research data so storage, transforms, and downstream validation stay reproducible.",
  },
  {
    label: "347k HDF5 file profiling",
    detail:
      "Profiling data quality and station behavior across 9 stations, with attention to failure modes that only appear at scale.",
  },
  {
    label: "SR5/SR6 reproducibility",
    detail:
      "Rebuilding reference outputs to greater than 99% fidelity through calibration-aware preprocessing and careful comparison runs.",
  },
  {
    label: "T4 anomaly validation",
    detail:
      "Testing anomaly-detection feasibility on T4 GPU compute with clear baselines, repeatable evaluation paths, and audit-friendly outputs.",
  },
]

export const selectedWork = [
  {
    title: "A*STAR QInC / GNOME",
    meta: "Research infrastructure",
    href: "https://www.a-star.edu.sg/",
    image: "/assets/images/astar-card.webp",
    imageAlt: "A*STAR Quantum Innovation Centre visual",
    body:
      "Singapore-side cloud and ML workflows for GNOME: data lake design, HDF5 profiling, SR5/SR6 reproducibility, and anomaly-detection validation for scientific time-series data.",
  },
  {
    title: "Nandiniz'Aura",
    meta: "Production commerce platform",
    href: "https://nandinizaura.com",
    image: "/assets/images/nandinizaura-card.webp",
    imageAlt: "Nandiniz'Aura product preview",
    body:
      "A full-stack Next.js commerce system with storefront, admin workflows, checkout, orders, analytics, protected APIs, Razorpay payments, transactional email, and tests across auth and payments.",
  },
  {
    title: "Friday for Codex",
    meta: "Local AI tooling",
    href: "https://github.com/mxdhavgautam/friday-for-codex",
    image: "/assets/images/friday-for-codex-card.webp",
    imageAlt: "Friday for Codex project preview",
    body:
      "A macOS voice-triggered workflow for Codex that opens the right workspace, plays a greeting, and reads a cached spoken briefing assembled from recent work context.",
  },
  {
    title: "Video Grabber",
    meta: "Chromium MV3 extension",
    href: "https://github.com/mxdhavgautam/video-grabber",
    image: "/assets/images/video-grabber-card.webp",
    imageAlt: "Video Grabber browser extension preview",
    body:
      "A client-side media capture runtime using TypeScript, React, ffmpeg.wasm, OPFS checkpoints, background workers, deterministic errors, and recovery rules.",
  },
  {
    title: "CR3ATE.AI",
    meta: "Computer vision product work",
    href: "https://cr3ate.ai",
    image: "/assets/images/cr3ate.webp",
    imageAlt: "CR3ATE.AI product preview",
    body:
      "Product and ML work across CoreML blur detection, iOS capture flows, reconstruction automation, secure uploads, AWS Lambda, S3, MongoDB, and Firebase Auth.",
  },
]

export const experience = [
  {
    org: "A*STAR | Quantum Innovation Centre, Singapore",
    role: "Research Officer",
    years: "January 2026 - Present",
    body:
      "Building cloud and ML infrastructure for GNOME research, including AWS data systems, large HDF5 profiling, SR5/SR6 reproducibility, and anomaly-detection validation.",
  },
  {
    org: "CR3ATE.AI | United States",
    role: "Developer Intern",
    years: "January 2025 - December 2025",
    body:
      "Worked across ML, iOS, backend, computer vision, reconstruction automation, and production app surfaces.",
  },
  {
    org: "HCLTech | Lucknow",
    role: "Software Development Intern",
    years: "October 2023 - December 2023",
    body:
      "Shipped an accessibility-first Flutter manual for senior users with larger typography, high-contrast themes, clearer touch targets, and pilot iteration.",
  },
  {
    org: "WESEE | Ministry of Defence, New Delhi",
    role: "SDLC Process Intern",
    years: "August 2023 - September 2023",
    body:
      "Designed and integrated secure Qt communication applications using UDP, TCP/IP, and SQLite-backed offline persistence in a constrained internal environment.",
  },
]

export const thinking = [
  {
    title: "Scientific ML is product work when it has to be operated.",
    body:
      "A pipeline is not finished when it produces a chart. It needs lineage, reproducibility, failure visibility, and a path for other people to understand the result.",
  },
  {
    title: "Agent tools should lower context cost first.",
    body:
      "The useful version of AI tooling is often quiet: fewer setup steps, better handoff state, and less friction before the real work starts.",
  },
  {
    title: "Full-stack quality lives in the edge cases.",
    body:
      "Auth, payments, recovery, deployment, data cleanup, and support paths are where product taste becomes engineering discipline.",
  },
]

export const capabilities = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "PyTorch",
  "TensorFlow",
  "AWS EC2/S3/Lambda",
  "Docker",
  "PostgreSQL",
  "Prisma",
  "Nest.js",
  "Flutter",
  "CoreML",
  "SQLite",
  "LangChain",
  "RAG",
  "OpenAI and Anthropic APIs",
]
