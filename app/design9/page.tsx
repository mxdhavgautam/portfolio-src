'use client'

import Link from 'next/link'
import { artifacts, domains, education, experience, knownFor, profile, proofMetrics, stack } from './data-values'

const navItems = ['proof', 'artifacts', 'domains', 'timeline', 'contact']

export default function Design9() {
  return (
    <div className="min-h-dvh bg-[#f4f1e8] text-[#161616]">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.42]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(22,22,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,22,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <header className="sticky top-0 z-40 border-b-2 border-[#161616] bg-[#f4f1e8]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="font-mono text-xs font-black uppercase tracking-[0.2em]">
            {profile.handle}
          </Link>
          <nav className="hidden items-center border-l-2 border-[#161616] md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="border-r-2 border-[#161616] px-4 py-2 font-mono text-[11px] font-black uppercase tracking-[0.16em] hover:bg-[#161616] hover:text-[#f4f1e8]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl border-x-2 border-[#161616]">
        <section className="grid min-h-[calc(100dvh-50px)] border-b-2 border-[#161616] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10">
            <div>
              <p className="w-fit border-2 border-[#161616] bg-[#f9d84a] px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.2em]">
                Systems dossier / proof board
              </p>
              <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.92] tracking-normal sm:text-7xl lg:text-8xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 sm:text-2xl">
                {profile.title}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#343434]">
                {profile.summary}
              </p>
            </div>

            <div className="mt-10 grid gap-px border-2 border-[#161616] bg-[#161616] sm:grid-cols-3">
              {[
                ['Current', profile.current],
                ['Start window', profile.availability],
                ['Location fit', profile.locations],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#fffaf0] p-4">
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.18em] text-[#b32d1f]">{label}</p>
                  <p className="mt-2 text-sm font-black leading-6">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="border-t-2 border-[#161616] bg-[#fffaf0] lg:border-l-2 lg:border-t-0">
            <div className="border-b-2 border-[#161616] bg-[#161616] px-5 py-3 font-mono text-[11px] font-black uppercase tracking-[0.2em] text-[#f4f1e8]">
              Why you might know me
            </div>
            <div className="divide-y-2 divide-[#161616]">
              {knownFor.map((item, index) => (
                <div key={item} className="grid grid-cols-[58px_1fr]">
                  <div className="border-r-2 border-[#161616] p-4 font-mono text-xs font-black text-[#b32d1f]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="p-4 text-sm font-semibold leading-7">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="proof" className="border-b-2 border-[#161616]">
          <div className="grid border-b-2 border-[#161616] bg-[#161616] text-[#f4f1e8] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b-2 border-[#f4f1e8] p-5 sm:p-8 lg:border-b-0 lg:border-r-2">
              <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-[#f9d84a]">Proof first</p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Numbers before narrative.</h2>
            </div>
            <p className="p-5 text-base leading-8 text-[#e7e0d0] sm:p-8">
              This route is deliberately evidence-heavy: facts, shipped surfaces, system domains, and current hiring signal in one dense board.
            </p>
          </div>

          <div className="grid gap-px bg-[#161616] sm:grid-cols-2 lg:grid-cols-3">
            {proofMetrics.map((item) => (
              <article key={`${item.metric}-${item.label}`} className="min-h-56 bg-[#fffaf0] p-5">
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.18em] text-[#b32d1f]">{item.label}</p>
                <p className="mt-5 text-5xl font-black tracking-normal">{item.metric}</p>
                <p className="mt-5 text-sm font-semibold leading-7 text-[#343434]">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="artifacts" className="border-b-2 border-[#161616] bg-[#f4f1e8]">
          <div className="grid border-b-2 border-[#161616] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b-2 border-[#161616] p-5 sm:p-8 lg:border-b-0 lg:border-r-2">
              <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-[#b32d1f]">Artifact ledger</p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Work that can be inspected.</h2>
            </div>
            <div className="grid gap-px bg-[#161616] md:grid-cols-2">
              {artifacts.map((artifact) => (
                <a
                  key={artifact.id}
                  href={artifact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group min-h-80 bg-[#fffaf0] p-5 hover:bg-[#f9d84a]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <p className="font-mono text-[11px] font-black uppercase tracking-[0.18em] text-[#b32d1f]">{artifact.id}</p>
                    <p className="border border-[#161616] px-2 py-1 font-mono text-[10px] font-black uppercase tracking-[0.14em]">
                      {artifact.type}
                    </p>
                  </div>
                  <h3 className="mt-6 text-2xl font-black leading-tight">{artifact.title}</h3>
                  <p className="mt-3 font-mono text-xs font-black leading-6 text-[#5a5146]">{artifact.stack}</p>
                  <p className="mt-5 text-sm font-semibold leading-7 text-[#343434]">{artifact.proof}</p>
                  <p className="mt-6 font-mono text-[11px] font-black uppercase tracking-[0.18em] text-[#b32d1f] group-hover:text-[#161616]">
                    Open record
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="domains" className="grid border-b-2 border-[#161616] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b-2 border-[#161616] bg-[#fffaf0] p-5 sm:p-8 lg:border-b-0 lg:border-r-2">
            <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-[#b32d1f]">Systems domains</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">The hiring shape.</h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-[#343434]">
              The target is engineering-heavy work: research infrastructure, AI/ML engineering, product systems, developer tooling, and data workflows.
            </p>
          </div>
          <div className="grid gap-px bg-[#161616] md:grid-cols-2">
            {domains.map((domain) => (
              <article key={domain.name} className="bg-[#f4f1e8] p-5">
                <h3 className="text-2xl font-black leading-tight">{domain.name}</h3>
                <ul className="mt-5 space-y-3">
                  {domain.evidence.map((line) => (
                    <li key={line} className="grid grid-cols-[18px_1fr] gap-3 text-sm font-semibold leading-6 text-[#343434]">
                      <span className="mt-2 block h-2 w-2 bg-[#b32d1f]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="timeline" className="border-b-2 border-[#161616]">
          <div className="border-b-2 border-[#161616] bg-[#161616] p-5 text-[#f4f1e8] sm:p-8">
            <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-[#f9d84a]">Timeline and stack</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Operator history.</h2>
          </div>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="divide-y-2 divide-[#161616] border-b-2 border-[#161616] lg:border-b-0 lg:border-r-2">
              {experience.map((item) => (
                <article key={item.org} className="grid gap-4 bg-[#fffaf0] p-5 sm:grid-cols-[170px_1fr] sm:p-6">
                  <div>
                    <p className="font-mono text-[11px] font-black uppercase tracking-[0.18em] text-[#b32d1f]">{item.years}</p>
                    <p className="mt-3 text-sm font-black">{item.role}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black leading-tight">{item.org}</h3>
                    <p className="mt-3 text-sm font-semibold leading-7 text-[#343434]">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
            <aside className="bg-[#f4f1e8] p-5 sm:p-6">
              <div className="border-2 border-[#161616] bg-[#fffaf0] p-5">
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.18em] text-[#b32d1f]">Education</p>
                <h3 className="mt-4 text-2xl font-black">{education.org}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[#343434]">{education.degree}</p>
                <p className="mt-3 font-mono text-xs font-black">{education.years}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((tool) => (
                  <span key={tool} className="border-2 border-[#161616] bg-[#fffaf0] px-3 py-2 font-mono text-[11px] font-black">
                    {tool}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="contact" className="grid bg-[#161616] text-[#f4f1e8] lg:grid-cols-[1fr_0.82fr]">
          <div className="border-b-2 border-[#f4f1e8] p-5 sm:p-8 lg:border-b-0 lg:border-r-2">
            <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-[#f9d84a]">Hiring signal</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Available late June / July 2026.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#e7e0d0]">
              Open to engineering-heavy teams in Delhi, Gurgaon, or remote roles across AI/ML engineering, software engineering, data engineering, GenAI product development, and developer tooling.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-8 p-5 sm:p-8">
            <a href={`mailto:${profile.email}`} className="break-words text-2xl font-black underline decoration-[#f9d84a] decoration-4 underline-offset-8">
              {profile.email}
            </a>
            <div className="flex flex-wrap gap-3">
              {[
                ['GitHub', profile.github],
                ['LinkedIn', profile.linkedin],
                ['Resume', profile.resume],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-[#f4f1e8] px-4 py-3 font-mono text-[11px] font-black uppercase tracking-[0.18em] hover:bg-[#f4f1e8] hover:text-[#161616]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
