export type IntroBullet = {
  label: string
  text: string
}

export type FeaturedProject = {
  code: string
  title: string
  period: string
  kind: string
  href: string
  summary: string
  stack: string
}

export type LinkLogItem = {
  date: string
  label: string
  href: string
  note: string
}

export const DataValues = {
  name: "Madhav Gautam",
  handle: "mxdhavgautam.com",
  role: "Research Officer at A*STAR Quantum Innovation Centre",
  email: "mxdhavgautam@gmail.com",
  githubURL: "https://github.com/mxdhavgautam",
  linkedinURL: "https://linkedin.com/in/mxdhavgautam",
  twitterURL: "https://x.com/mxdhavgautam",
  resumeURL:
    "https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing",
  summary:
    "Research-builder working across scientific ML infrastructure, agent workflows, browser runtimes, and full-stack product systems.",
  availability:
    "Open to full-time roles from late June / July 2026 in Delhi, Gurgaon, or remote teams.",
}

export const introBullets = [
  {
    label: "current",
    text: "At A*STAR QInC, building Singapore-side cloud and ML workflows for the GNOME dark matter detection project.",
  },
  {
    label: "research",
    text: "Working with multi-terabyte ETL paths, 347k raw HDF5 files across 9 stations, SR5/SR6 reproducibility, and T4 GPU anomaly-detection baselines.",
  },
  {
    label: "product",
    text: "Ships practical software across Next.js commerce, local AI tooling, Chromium MV3 runtimes, iOS ML flows, and backend systems.",
  },
  {
    label: "fit",
    text: DataValues.availability,
  },
] satisfies IntroBullet[]

export const featuredProjects = [
  {
    code: "gnome",
    title: "A*STAR QInC / GNOME research infrastructure",
    period: "2026 - present",
    kind: "scientific ML systems",
    href: "https://www.a-star.edu.sg/",
    summary:
      "AWS-backed data lake and ML workflow work for GNOME research: large HDF5 corpus profiling, reference-output reproduction to greater than 99% fidelity, and anomaly-detection validation.",
    stack: "Python, AWS, HDF5, GPU compute, scientific preprocessing",
  },
  {
    code: "nza",
    title: "Nandiniz'Aura",
    period: "2025 - ongoing",
    kind: "production commerce",
    href: "https://nandinizaura.com",
    summary:
      "Full-stack small-business commerce platform with storefront, admin dashboard, checkout, orders, analytics, role-based auth, protected APIs, Razorpay webhooks, transactional email, and test coverage.",
    stack: "Next.js, TypeScript, PostgreSQL, Prisma, NextAuth, Razorpay, Vitest",
  },
  {
    code: "friday",
    title: "Friday for Codex",
    period: "April 2026",
    kind: "local AI tooling",
    href: "https://github.com/mxdhavgautam/friday-for-codex",
    summary:
      "macOS voice-triggered wake flow for Codex that opens the right workspace, speaks an immediate greeting, and reads cached briefings refreshed from recent work context.",
    stack: "macOS automation, LaunchAgents, XTTS, OpenAI Codex workflows",
  },
  {
    code: "vg",
    title: "Video Grabber",
    period: "January 2026",
    kind: "browser runtime",
    href: "https://github.com/mxdhavgautam/video-grabber",
    summary:
      "Chromium MV3 extension architecture rebuilt around client-side media processing, offscreen WASM tooling, OPFS checkpoints, resumable jobs, and deterministic recovery rules.",
    stack: "TypeScript, React, Chrome MV3, ffmpeg.wasm, OPFS",
  },
  {
    code: "cmri",
    title: "Cardiac MRI Classification",
    period: "January 2025 - May 2025",
    kind: "deep learning study",
    href: "https://github.com/mxdhavgautam/A-Comparative-Study-of-Deep-Learning-Models-and-Training-Techniques-for-Cardiac-MRI-Classification",
    summary:
      "Comparative cardiac MRI classification work over about 63k images using transfer learning, augmentation, class weighting, a spatial attention block, and an attention ensemble.",
    stack: "MobileNetV2, ResNet152V2, DenseNet201, InceptionV3, TensorFlow",
  },
] satisfies FeaturedProject[]

export const linkLog = [
  {
    date: "profile",
    label: "GitHub",
    href: DataValues.githubURL,
    note: "public repositories and project records",
  },
  {
    date: "profile",
    label: "LinkedIn",
    href: DataValues.linkedinURL,
    note: "role history and professional context",
  },
  {
    date: "doc",
    label: "Resume",
    href: DataValues.resumeURL,
    note: "current resume",
  },
  {
    date: "contact",
    label: DataValues.email,
    href: `mailto:${DataValues.email}`,
    note: "direct email",
  },
  {
    date: "social",
    label: "X / Twitter",
    href: DataValues.twitterURL,
    note: "public updates",
  },
] satisfies LinkLogItem[]
