'use client'

import { DataValues } from '@/data/data-values'
import Link from 'next/link'

const work = [
  {
    area: 'Product engineering',
    title: DataValues.projectsOrg2Title,
    meta: 'Next.js / Prisma / Razorpay / Resend',
    desc: 'A production commerce platform for a small business, covering storefront, admin workflows, checkout, order management, analytics, protected APIs, payments, and transactional email.',
    href: DataValues.nandinizauraUrl,
  },
  {
    area: 'Local AI automation',
    title: DataValues.projectsOrg5Title,
    meta: 'macOS / LaunchAgents / voice context',
    desc: DataValues.projectsOrg5Values,
    href: DataValues.fridayForCodexUrl,
  },
  {
    area: 'Runtime architecture',
    title: DataValues.projectsOrg4Title,
    meta: 'Chromium MV3 / ffmpeg.wasm / OPFS',
    desc: DataValues.projectsOrg4Values,
    href: DataValues.videoGrabberUrl,
  },
  {
    area: 'Applied ML',
    title: DataValues.projectsOrg3Title,
    meta: 'MobileNetV2 / ResNet / DenseNet / Inception',
    desc: DataValues.projectsOrg3Values,
    href: DataValues.cardiacUrl,
  },
]

const queue = [
  ['portfolio-src', 'Rebuilt personal portfolio from Flutter to Next.js'],
  ['nandinizaura', 'Production commerce, admin, auth, payments, analytics'],
  ['friday-for-codex', 'Voice-triggered local agent wake and briefing flow'],
  ['video-grabber', 'Client-side extension runtime with resumable jobs'],
  ['cardiac-mri', 'Comparative deep learning study with reproducible outputs'],
  ['qinc-research', 'Scientific ML and AWS data workflows at A*STAR'],
]

const roles = [
  [DataValues.experienceOrg4Title, DataValues.experienceOrg4Role, DataValues.experienceOrg4Years],
  [DataValues.experienceOrg3Title, DataValues.experienceOrg3Role, DataValues.experienceOrg3Years],
  [DataValues.experienceOrg2Title, DataValues.experienceOrg2Role, DataValues.experienceOrg2Years],
  [DataValues.experienceOrg1Title, DataValues.experienceOrg1Role, DataValues.experienceOrg1Years],
]

export default function Design3() {
  return (
    <div className="min-h-dvh bg-[#121212] text-[#FFFFFF]">
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '96px 96px',
      }} />
      <div className="fixed left-[6vw] top-0 hidden h-full w-px bg-[#2A2A2A] lg:block" />
      <div className="fixed right-[6vw] top-0 hidden h-full w-px bg-[#2A2A2A] lg:block" />

      <header className="sticky top-0 z-40 border-b border-[#2A2A2A] bg-[#121212]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-sm font-semibold tracking-tight">{DataValues.appNameLong}</Link>
          <nav className="hidden gap-6 text-xs font-medium text-[#939393] md:flex">
            {['proof', 'work', 'systems', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-[#E53935]">{item}</a>
            ))}
          </nav>
          <a href={DataValues.resumeURL} className="border border-[#444444] px-4 py-2 text-xs font-semibold text-[#FFFFFF] hover:border-[#E53935] hover:text-white">Resume</a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100dvh-65px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#E53935]">Developer portfolio / not a lab page</p>
            <h1 className="font-serif text-6xl font-black leading-[0.92] text-[#E53935] sm:text-7xl lg:text-8xl">
              Your next systems builder.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#CDCDCD]">
              I&apos;m {DataValues.headerName}, a {DataValues.headerTitle.toLowerCase()} who moves between product, AI automation, ML experiments, and the infrastructure that makes them real.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="bg-[#E53935] px-5 py-3 text-sm font-bold text-[#FFFFFF] hover:bg-white">View selected work</a>
              <a href={`mailto:${DataValues.contactEmail}`} className="border border-[#444444] px-5 py-3 text-sm font-bold text-[#FFFFFF] hover:border-[#E53935]">Contact</a>
            </div>
          </div>

          <div className="overflow-hidden border border-[#2A2A2A] bg-[#191919] shadow-[0_0_0_1px_rgba(229,57,53,0.16),0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] bg-[#0F0F0F] px-4 py-3">
              <span className="text-xs font-semibold text-[#939393]">madhav.dev / active work</span>
              <span className="text-xs text-[#E53935]">portfolio.tsx</span>
            </div>
            <div className="grid lg:grid-cols-[0.8fr_1fr]">
              <div className="border-b border-[#2A2A2A] p-4 lg:border-b-0 lg:border-r">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#E53935]">Project queue</p>
                <div className="space-y-2">
                  {queue.map(([name, detail]) => (
                    <div key={name} className="rounded border border-[#333333] bg-[#121212] p-3">
                      <p className="font-mono text-xs text-[#FFFFFF]">{name}</p>
                      <p className="mt-1 text-xs leading-5 text-[#939393]">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 font-mono text-xs leading-6 text-[#CDCDCD]">
                <p><span className="text-[#E53935]">const</span> candidate = {'{'}</p>
                <p className="pl-4">name: <span className="text-[#E53935]">&quot;{DataValues.headerName}&quot;</span>,</p>
                <p className="pl-4">strengths: [<span className="text-[#E53935]">&quot;ship&quot;</span>, <span className="text-[#E53935]">&quot;debug&quot;</span>, <span className="text-[#E53935]">&quot;learn fast&quot;</span>],</p>
                <p className="pl-4">targets: [<span className="text-[#E53935]">&quot;AI/ML&quot;</span>, <span className="text-[#E53935]">&quot;software&quot;</span>, <span className="text-[#E53935]">&quot;data&quot;</span>],</p>
                <p className="pl-4">availability: <span className="text-[#E53935]">&quot;late June / July 2026&quot;</span>,</p>
                <p>{'}'}</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    ['Product', 'commerce + portfolio'],
                    ['AI', 'agents + ML systems'],
                    ['Runtime', 'browser + mobile surfaces'],
                    ['Infra', 'AWS + local tooling'],
                  ].map(([label, value]) => (
                    <div key={label} className="border border-[#2A2A2A] bg-[#0F0F0F] p-3">
                      <p className="text-[#E53935]">{label}</p>
                      <p className="mt-1 text-[#FFFFFF]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="border-y border-[#2A2A2A] bg-[#121212]/80">
          <div className="mx-auto grid max-w-7xl gap-px bg-[#2A2A2A] md:grid-cols-4">
            {[
              ['Product', 'full-stack delivery'],
              ['AI/ML', 'models, agents, RAG'],
              ['Runtime', 'web, mobile, browser'],
              ['Infra', 'cloud, data, tooling'],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#121212] p-6">
                <p className="font-serif text-5xl font-black text-[#E53935]">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#939393]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E53935]">Selected work</p>
            <h2 className="mt-4 font-serif text-5xl font-black text-[#E53935]">The work is the interface.</h2>
            <p className="mt-5 text-base leading-8 text-[#CDCDCD]">{DataValues.projectsDescription}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {work.map((item) => (
              <a key={item.title} href={item.href} className="group border border-[#2A2A2A] bg-[#191919] p-6 hover:border-[#E53935] hover:bg-[#1F1F1F]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">{item.area}</p>
                <h3 className="mt-4 text-2xl font-black leading-tight text-white">{item.title}</h3>
                <p className="mt-2 text-xs font-semibold text-[#939393]">{item.meta}</p>
                <p className="mt-5 text-sm leading-7 text-[#CDCDCD]">{item.desc}</p>
                <p className="mt-6 text-sm font-bold text-[#E53935] group-hover:text-white">Open project</p>
              </a>
            ))}
          </div>
        </section>

        <section id="systems" className="border-y border-[#2A2A2A] bg-[#191919]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#2A2A2A] p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <h2 className="font-serif text-5xl font-black text-[#E53935]">Profile</h2>
              <p className="mt-6 text-base leading-8 text-[#CDCDCD]">{DataValues.aboutMeBiographyDescription}</p>
              <p className="mt-6 border-l border-[#E53935] pl-5 text-sm leading-7 text-[#FFFFFF]">{DataValues.aboutMeGoalDescription}</p>
            </div>
            <div className="grid sm:grid-cols-2">
              {roles.map(([org, role, years]) => (
                <div key={org} className="border-b border-[#2A2A2A] p-6 odd:sm:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">{years}</p>
                  <h3 className="mt-4 text-xl font-black">{org}</h3>
                  <p className="mt-3 text-sm text-[#CDCDCD]">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-5 px-5 py-24 md:grid-cols-3">
          {[
            ['Education', DataValues.educationOrg2Title, DataValues.educationOrg2Course1Name],
            ['Community', DataValues.extracOrg1Title, DataValues.extracOrg1Vales],
            ['Leadership', DataValues.extracOrg5Title, DataValues.extracOrg5Vales],
          ].map(([label, title, body]) => (
            <div key={label} className="border border-[#2A2A2A] bg-[#191919] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">{label}</p>
              <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#CDCDCD]">{body}</p>
            </div>
          ))}
        </section>

        <section id="contact" className="border-t border-[#2A2A2A] bg-[#121212]">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E53935]">Contact</p>
              <h2 className="mt-4 font-serif text-5xl font-black text-[#E53935]">Let&apos;s talk.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${DataValues.contactEmail}`} className="bg-[#E53935] px-5 py-3 text-sm font-bold text-[#FFFFFF]">Email</a>
              <a href={DataValues.githubURL} className="border border-[#444444] px-5 py-3 text-sm font-bold">GitHub</a>
              <a href={DataValues.linkedinURL} className="border border-[#444444] px-5 py-3 text-sm font-bold">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
