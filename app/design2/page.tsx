'use client'

import { DataValues } from '@/data/data-values'
import Link from 'next/link'

const projects = [
  {
    eyebrow: 'Production product',
    title: DataValues.projectsOrg2Title,
    desc: 'A polished commerce platform for a real business, spanning storefront, admin workflows, checkout, orders, analytics, secure APIs, payments, and transactional email.',
    href: DataValues.nandinizauraUrl,
    surface: 'bg-white',
  },
  {
    eyebrow: 'Personal AI workflow',
    title: DataValues.projectsOrg5Title,
    desc: 'A local voice-triggered wake flow for Codex that opens the right workspace, speaks a cached briefing, and keeps context fresh in the background.',
    href: DataValues.fridayForCodexUrl,
    surface: 'bg-[#121212] text-white',
  },
  {
    eyebrow: 'Browser runtime',
    title: DataValues.projectsOrg4Title,
    desc: 'A client-side Chromium extension architecture with background workers, offscreen WASM media tooling, resumable jobs, and policy-aware distribution.',
    href: DataValues.videoGrabberUrl,
    surface: 'bg-[#F2F2F2]',
  },
  {
    eyebrow: 'Applied ML',
    title: DataValues.projectsOrg3Title,
    desc: 'A comparative deep learning study for cardiac MRI classification using transfer learning, augmentation, attention, reproducible outputs, and a paper.',
    href: DataValues.cardiacUrl,
    surface: 'bg-white',
  },
]

const experience = [
  [DataValues.experienceOrg4Role, DataValues.experienceOrg4Title, DataValues.experienceOrg4Years],
  [DataValues.experienceOrg3Role, DataValues.experienceOrg3Title, DataValues.experienceOrg3Years],
  [DataValues.experienceOrg2Role, DataValues.experienceOrg2Title, DataValues.experienceOrg2Years],
  [DataValues.experienceOrg1Role, DataValues.experienceOrg1Title, DataValues.experienceOrg1Years],
]

const strengths = [
  ['Product engineering', 'Full-stack products, admin tools, APIs, auth, payments, and interfaces that are meant to be used.'],
  ['AI systems', 'Applied ML, RAG, agent workflows, local automation, and model-backed product surfaces.'],
  ['Research infrastructure', 'Cloud data workflows, scientific preprocessing, reproducible experiments, and validation-minded engineering.'],
]

const stack = [
  'Python',
  'TypeScript',
  'Next.js',
  'React',
  'PyTorch',
  'AWS',
  'PostgreSQL',
  'Docker',
  'Flutter',
  'CoreML',
  'LangChain',
  'OpenAI APIs',
]

export default function Design2() {
  return (
    <div className="min-h-dvh bg-[#F7F7F7] text-[#121212] antialiased">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" className="min-h-11 rounded-full px-3 py-3 text-sm font-semibold tracking-tight transition hover:bg-black/[0.04]">
            {DataValues.appNameLong}
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-[#F2F2F2]/90 p-1 text-sm font-medium text-[#616161] md:flex">
            {['work', 'profile', 'experience', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[#121212]">
                {item}
              </a>
            ))}
          </nav>
          <a href={DataValues.resumeURL} className="min-h-11 rounded-full bg-[#121212] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E53935]">
            Resume
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto flex min-h-[calc(100dvh-69px)] max-w-6xl flex-col justify-center px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mx-auto mb-6 w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#E53935] shadow-sm ring-1 ring-black/5">
              {DataValues.headerTitle}
            </p>
            <h1 className="text-balance text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#121212] sm:text-7xl lg:text-8xl">
              Madhav builds software with a systems instinct.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-balance text-xl leading-8 text-[#616161] sm:text-2xl sm:leading-9">
              Production web apps, AI workflows, applied ML, research tooling, and the infrastructure glue that makes all of it feel reliable.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#work" className="min-h-12 rounded-full bg-[#E53935] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(229,57,53,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(229,57,53,0.3)]">
                See the work
              </a>
              <a href={`mailto:${DataValues.contactEmail}`} className="min-h-12 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#121212] shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:ring-black/10">
                Start a conversation
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {strengths.map(([title, body]) => (
              <div key={title} className="rounded-[28px] bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                <div className="mb-5 h-9 w-9 rounded-full bg-[#E53935]" />
                <h2 className="text-xl font-semibold tracking-[-0.02em]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#616161]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold text-[#E53935]">Selected work</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
                A portfolio that shows range, not one job title.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#616161]">{DataValues.projectsDescription}</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.href}
                  className={`${project.surface} group flex min-h-[360px] flex-col justify-between rounded-[36px] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_110px_rgba(0,0,0,0.12)] sm:p-9 ${index === 0 ? 'lg:col-span-2 lg:min-h-[420px]' : ''}`}
                >
                  <div>
                    <p className="text-sm font-semibold text-[#E53935]">{project.eyebrow}</p>
                    <h3 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                      {project.title}
                    </h3>
                    <p className={`mt-5 max-w-2xl text-base leading-7 ${project.surface.includes('text-white') ? 'text-white/72' : 'text-[#616161]'}`}>
                      {project.desc}
                    </p>
                  </div>
                  <div className={`mt-10 flex h-12 w-12 items-center justify-center rounded-full text-xl transition group-hover:translate-x-1 ${project.surface.includes('text-white') ? 'bg-white text-[#121212]' : 'bg-[#121212] text-white'}`} aria-hidden="true">
                    {'>'}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[36px] bg-[#121212] p-8 text-white shadow-[0_30px_120px_rgba(0,0,0,0.22)] sm:p-10">
              <p className="text-sm font-semibold text-[#E53935]">Profile</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Engineering breadth, presented calmly.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/72">{DataValues.aboutMeBiographyDescription}</p>
            </div>

            <div className="grid gap-5">
              {[
                [DataValues.aboutMeStudentTitle, DataValues.aboutMeStudentDescription],
                [DataValues.aboutMeEnthusiastTitle, DataValues.aboutMeEnthusiastDescription],
                [DataValues.aboutMeDeveloperTitle, DataValues.aboutMeDeveloperDescription],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[28px] bg-white p-7 shadow-[0_18px_70px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#616161]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#E53935]">Experience</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">Where the range came from.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#616161]">{DataValues.aboutMeGoalDescription}</p>
            </div>

            <div className="rounded-[36px] bg-[#F7F7F7] p-3 ring-1 ring-black/5">
              {experience.map(([role, org, years], index) => (
                <div key={org} className={`grid gap-3 rounded-[28px] p-6 transition hover:bg-white hover:shadow-sm md:grid-cols-[0.9fr_1.2fr_0.6fr] ${index !== experience.length - 1 ? 'border-b border-black/5' : ''}`}>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{role}</h3>
                  <p className="text-sm leading-6 text-[#616161]">{org}</p>
                  <p className="text-sm font-medium text-[#E53935] md:text-right">{years}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold text-[#E53935]">Stack</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">Tools are secondary. Judgment is the point.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#424242] shadow-sm ring-1 ring-black/5">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[36px] bg-white p-8 shadow-[0_24px_90px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
              <p className="text-sm font-semibold text-[#E53935]">Education & leadership</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">{DataValues.educationOrg2Title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#616161]">{DataValues.educationOrg2Course1Name}</p>
              <div className="my-7 h-px bg-black/10" />
              <h3 className="text-2xl font-semibold tracking-[-0.025em]">{DataValues.extracOrg4Title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#616161]">{DataValues.extracOrg4Role}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-8">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[40px] bg-[#121212] p-8 text-white shadow-[0_30px_120px_rgba(0,0,0,0.24)] sm:p-12 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-sm font-semibold text-[#E53935]">Contact</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">
                Let&apos;s build something clear, useful, and hard to fake.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-5">
              <p className="text-sm leading-7 text-white/70">{DataValues.contactDescription}</p>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${DataValues.contactEmail}`} className="min-h-12 rounded-full bg-[#E53935] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#121212]">
                  Email
                </a>
                <a href={DataValues.githubURL} className="min-h-12 rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white hover:text-[#121212]">
                  GitHub
                </a>
                <a href={DataValues.linkedinURL} className="min-h-12 rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white hover:text-[#121212]">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
