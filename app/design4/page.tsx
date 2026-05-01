'use client'

import { DataValues } from '@/data/data-values'
import Link from 'next/link'

const chapters = [
  ['01', DataValues.projectsOrg2Title, 'Production commerce with auth, payments, admin, analytics, API tests, and webhook handling.', DataValues.nandinizauraUrl],
  ['02', DataValues.projectsOrg5Title, 'A local Codex wake flow with voice, workspace routing, cached briefings, and background refresh.', DataValues.fridayForCodexUrl],
  ['03', DataValues.projectsOrg4Title, 'A Chromium extension runtime rebuilt around MV3, WASM media tooling, OPFS checkpoints, and recovery rules.', DataValues.videoGrabberUrl],
  ['04', DataValues.projectsOrg3Title, 'A comparative deep learning study over cardiac MRI data with repeatable model training and evaluation.', DataValues.cardiacUrl],
]

const timeline = [
  [DataValues.experienceOrg4Years, DataValues.experienceOrg4Role, DataValues.experienceOrg4Title],
  [DataValues.experienceOrg3Years, DataValues.experienceOrg3Role, DataValues.experienceOrg3Title],
  [DataValues.experienceOrg2Years, DataValues.experienceOrg2Role, DataValues.experienceOrg2Title],
  [DataValues.experienceOrg1Years, DataValues.experienceOrg1Role, DataValues.experienceOrg1Title],
]

const tools = DataValues.aboutMeSkillsDescription.split(', ')

export default function Design4() {
  return (
    <div className="min-h-dvh bg-[#121212] text-[#FFFFFF]">
      <div className="fixed inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(229,57,53,0.16), transparent 28%), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: 'auto, 68px 68px, 68px 68px',
      }} />

      <header className="sticky top-0 z-40 border-b border-[#2A2A2A] bg-[#121212]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-x border-[#2A2A2A]">
          <Link href="/" className="px-5 py-4 font-serif text-lg font-black uppercase tracking-[0.18em] text-[#E53935]">
            Madhav
          </Link>
          <nav className="hidden border-l border-[#2A2A2A] md:flex">
            {['manifest', 'works', 'ledger', 'signal'].map((item) => (
              <a key={item} href={`#${item}`} className="border-r border-[#2A2A2A] px-5 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#1F1F1F]">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl border-x border-[#2A2A2A]">
        <section className="grid border-b border-[#2A2A2A] lg:grid-cols-[1fr_0.86fr]">
          <div className="min-h-[calc(100dvh-57px)] p-6 sm:p-10 lg:p-14">
            <p className="mb-8 text-[11px] font-black uppercase tracking-[0.24em] text-[#E53935]">Personal portfolio / human first</p>
            <h1 className="font-serif text-6xl font-black leading-[0.9] sm:text-7xl lg:text-8xl">
              {DataValues.headerName}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#CDCDCD]">
              A systems builder with a range: production web apps, AI automation, applied ML, secure mobile/backend work, and research infrastructure.
            </p>
            <div className="mt-10 grid gap-px bg-[#2A2A2A] sm:grid-cols-3">
              {[
                ['Product', 'shipping useful software'],
                ['AI', 'agent workflows and ML systems'],
                ['Infra', 'cloud, local runtimes, data'],
              ].map(([title, body]) => (
                <div key={title} className="bg-[#191919] p-5">
                  <p className="font-serif text-2xl font-black text-[#E53935]">{title}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#939393]">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="border-t border-[#2A2A2A] bg-[#191919] lg:border-l lg:border-t-0">
            <div className="border-b border-[#2A2A2A] p-5 text-[11px] font-black uppercase tracking-[0.22em] text-[#E53935]">Transmission</div>
            <div className="p-6 sm:p-10">
              <div className="border border-[#2A2A2A] bg-[#0F0F0F] p-5 font-mono text-sm leading-7 text-[#FFFFFF]">
                <p className="text-[#E53935]">madhav@portfolio:~$ ./summon-profile</p>
                <p className="mt-5">name: {DataValues.headerName}</p>
                <p>title: {DataValues.headerTitle}</p>
                <p>looking_for: AI/ML, software, data, GenAI</p>
                <p>start_window: late June / July 2026</p>
                <p>location: Delhi, Gurgaon, remote</p>
              </div>
              <p className="mt-8 border-l border-[#E53935] pl-5 text-sm leading-7 text-[#CDCDCD]">
                {DataValues.aboutMeGoalDescription}
              </p>
            </div>
          </aside>
        </section>

        <section id="manifest" className="grid border-b border-[#2A2A2A] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b border-[#2A2A2A] p-6 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#E53935]">Manifest</p>
            <h2 className="mt-4 font-serif text-5xl font-black">About the person, not just the current lab.</h2>
          </div>
          <div className="p-6 sm:p-10">
            <p className="text-base leading-8 text-[#FFFFFF]">{DataValues.aboutMeBiographyDescription}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                [DataValues.aboutMeStudentTitle, DataValues.aboutMeStudentDescription],
                [DataValues.aboutMeEnthusiastTitle, DataValues.aboutMeEnthusiastDescription],
                [DataValues.aboutMeDeveloperTitle, DataValues.aboutMeDeveloperDescription],
              ].map(([title, body]) => (
                <div key={title} className="border border-[#2A2A2A] bg-[#191919] p-4">
                  <h3 className="font-serif text-xl font-black text-[#E53935]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#CDCDCD]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="works" className="border-b border-[#2A2A2A]">
          <div className="border-b border-[#2A2A2A] p-5 text-[11px] font-black uppercase tracking-[0.22em] text-[#E53935]">Works as artifacts</div>
          <div className="grid md:grid-cols-2">
            {chapters.map(([num, title, body, href]) => (
              <a href={href} key={title} className="group min-h-72 border-b border-[#2A2A2A] p-6 hover:bg-[#1F1F1F] md:border-r md:[&:nth-child(even)]:border-r-0">
                <p className="font-serif text-5xl font-black text-[#E53935]">{num}</p>
                <h2 className="mt-6 text-2xl font-black leading-tight">{title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#CDCDCD]">{body}</p>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-[#E53935] group-hover:text-white">Open record</p>
              </a>
            ))}
          </div>
        </section>

        <section id="ledger" className="grid border-b border-[#2A2A2A] lg:grid-cols-[1fr_1fr]">
          <div className="border-b border-[#2A2A2A] p-6 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#E53935]">Experience ledger</p>
            <div className="mt-8 space-y-5">
              {timeline.map(([years, role, org]) => (
                <div key={org} className="border-l border-[#E53935] pl-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#939393]">{years}</p>
                  <h3 className="mt-2 text-xl font-black">{role}</h3>
                  <p className="mt-1 text-sm text-[#CDCDCD]">{org}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 sm:p-10">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#E53935]">Tool cabinet</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="border border-[#2A2A2A] bg-[#191919] px-3 py-2 text-xs font-bold text-[#FFFFFF]">{tool}</span>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="border border-[#2A2A2A] p-5">
                <p className="font-serif text-3xl font-black text-[#E53935]">VIT Chennai</p>
                <p className="mt-3 text-sm leading-7">{DataValues.educationOrg2Course1Name}</p>
              </div>
              <div className="border border-[#2A2A2A] p-5">
                <p className="font-serif text-3xl font-black text-[#E53935]">Leadership</p>
                <p className="mt-3 text-sm leading-7">{DataValues.extracOrg5Role} at {DataValues.extracOrg5Title}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="signal" className="grid bg-[#0F0F0F] lg:grid-cols-[1fr_0.75fr]">
          <div className="border-b border-[#2A2A2A] p-6 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#E53935]">Signal</p>
            <h2 className="mt-4 font-serif text-5xl font-black">Reach out if the work clicks.</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#CDCDCD]">{DataValues.contactDescription}</p>
          </div>
          <div className="flex flex-col justify-between gap-8 p-6 sm:p-10">
            <a href={`mailto:${DataValues.contactEmail}`} className="text-xl font-black text-[#E53935] underline underline-offset-8">{DataValues.contactEmail}</a>
            <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
              <a href={DataValues.githubURL} className="border border-[#2A2A2A] px-4 py-3 hover:bg-[#FFFFFF] hover:text-[#121212]">GitHub</a>
              <a href={DataValues.linkedinURL} className="border border-[#2A2A2A] px-4 py-3 hover:bg-[#FFFFFF] hover:text-[#121212]">LinkedIn</a>
              <a href={DataValues.resumeURL} className="border border-[#2A2A2A] px-4 py-3 hover:bg-[#FFFFFF] hover:text-[#121212]">Resume</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
