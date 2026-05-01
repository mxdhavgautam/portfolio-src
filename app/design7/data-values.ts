export const DataValues = {
  appName: "Madhav Gautam",
  appNameLong: "mxdhavgautam.com",
  appDescription:
    "Research-builder, systems-minded product engineer, AI tooling builder, and full-stack developer.",
  headerTitle:
    "Research Officer at A*STAR Quantum Innovation Centre, Singapore",
  contactEmail: "mxdhavgautam@gmail.com",
  githubURL: "https://github.com/mxdhavgautam",
  linkedinURL: "https://linkedin.com/in/mxdhavgautam",
  twitterURL: "https://x.com/mxdhavgautam",
  telegramURL: "https://t.me/mxdhavgautam",
  resumeURL:
    "https://drive.google.com/file/d/1V0Hw4PZHLKYdP-nPoWT_a5lzu5F4kXFw/view?usp=sharing",
  nandinizauraUrl: "https://nandinizaura.com",
  videoGrabberUrl: "https://github.com/mxdhavgautam/video-grabber",
  fridayForCodexUrl: "https://github.com/mxdhavgautam/friday-for-codex",
  cardiacUrl:
    "https://github.com/mxdhavgautam/A-Comparative-Study-of-Deep-Learning-Models-and-Training-Techniques-for-Cardiac-MRI-Classification",
}

export const labStatus = [
  {
    label: "Current base",
    value: "A*STAR QInC, Singapore",
    detail:
      "Research Officer building Singapore-side cloud and ML workflows for the GNOME dark matter detection project.",
  },
  {
    label: "Availability",
    value: "Late June / July 2026",
    detail: "Open to Delhi, Gurgaon, or remote full-time roles.",
  },
  {
    label: "Frame",
    value: "Research-builder",
    detail:
      "Comfortable moving between scientific data, product code, AI tooling, and full-stack systems.",
  },
]

export const currentSystems = [
  {
    title: "GNOME AWS data lake",
    tag: "research infrastructure",
    notes: [
      "Multi-terabyte ETL and data lake workflows on AWS.",
      "Profiling 347k raw HDF5 files across 9 stations.",
      "Building preprocessing paths that stay auditable under scientific constraints.",
    ],
  },
  {
    title: "SR5 / SR6 reproducibility",
    tag: "scientific validation",
    notes: [
      "Reference output reproduction to more than 99% fidelity.",
      "Calibration-aware checks for magnetometer time-series data.",
      "Emphasis on traceable deltas rather than black-box experiment runs.",
    ],
  },
  {
    title: "Anomaly-detection baseline",
    tag: "ML feasibility",
    notes: [
      "Validation work on T4 GPU compute.",
      "LSTM baseline exploration for dark matter signal search workflows.",
      "Practical focus: determine what is reliable enough to operationalize.",
    ],
  },
]

export const explorations = [
  {
    question: "How should agentic tools keep context fresh without slowing down the wake path?",
    context:
      "Friday for Codex uses cached spoken briefings and background refreshes as a local workflow experiment.",
  },
  {
    question: "What does reproducibility look like when the dataset is too large to casually inspect?",
    context:
      "The GNOME work forces careful profiling, provenance, and comparison habits across raw HDF5 station data.",
  },
  {
    question: "Where should product systems draw the boundary between server trust and client capability?",
    context:
      "Video Grabber explores a strict client-side Chromium MV3 runtime with OPFS checkpoints and WASM tooling.",
  },
]

export const shippedWork = [
  {
    title: "Nandiniz'Aura",
    kind: "production commerce",
    date: "2025 - ongoing",
    href: DataValues.nandinizauraUrl,
    summary:
      "A full-stack commerce platform with storefront, admin dashboard, checkout, order management, analytics, role-based auth, protected APIs, Razorpay payments, transactional email, and tests.",
  },
  {
    title: "Friday for Codex",
    kind: "local AI tooling",
    date: "April 2026",
    href: DataValues.fridayForCodexUrl,
    summary:
      "A macOS voice-triggered Codex wake flow that opens the right workspace, greets immediately, and reads a cached briefing built from recent work context.",
  },
  {
    title: "Video Grabber",
    kind: "browser runtime",
    date: "January 2026",
    href: DataValues.videoGrabberUrl,
    summary:
      "A Chromium MV3 extension architecture using a background worker, offscreen WASM yt-dlp and ffmpeg runtime, OPFS checkpoints, resumable jobs, and a deterministic recovery model.",
  },
  {
    title: "CR3ATE.AI",
    kind: "ML, iOS, backend",
    date: "2025",
    href: DataValues.linkedinURL,
    summary:
      "Developer internship work across CoreML blur detection, iOS capture flows, 3D Gaussian splat reconstruction automation, secure uploads, Nest.js, AWS Lambda, S3, MongoDB, and Firebase Auth.",
  },
  {
    title: "HCLTech",
    kind: "accessible mobile product",
    date: "2023",
    href: DataValues.linkedinURL,
    summary:
      "Flutter internship shipping an accessibility-first elderly user manual app with larger typography, high-contrast themes, clearer touch targets, and pilot iteration.",
  },
  {
    title: "WESEE",
    kind: "secure desktop systems",
    date: "2023",
    href: DataValues.linkedinURL,
    summary:
      "Ministry of Defence internship building Qt applications for internal communication workflows, UDP and TCP/IP exchange, SQLite persistence, and validated receiver-side control logic.",
  },
]

export const notes = [
  {
    label: "thread 01",
    title: "Working notes over polished claims",
    body:
      "This page intentionally reads like a public lab notebook: active systems, unanswered questions, and shipped artifacts in one place.",
  },
  {
    label: "thread 02",
    title: "Research code and product code inform each other",
    body:
      "The same habits show up in both settings: inspect the data, build a reliable path, document the weird edges, and keep the interface understandable.",
  },
  {
    label: "thread 03",
    title: "Hiring signal",
    body:
      "Best fit: AI tooling, research engineering, data engineering, full-stack product engineering, or systems-heavy software roles starting late June or July 2026.",
  },
]

export const skills = [
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
  "CoreML",
  "Flutter",
  "LangChain",
  "RAG",
  "OpenAI / Anthropic APIs",
]
