'use client'

import Link from 'next/link'
import { DataValues } from './data-values'

const navItems = ['work', 'experience', 'profile', 'contact']

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M6 14L14 6M8 6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Design10() {
  const featuredProjects = DataValues.projects

  return (
    <div className="min-h-dvh bg-[#F5F4F0] text-[#151515] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#151515]/10 bg-[#F5F4F0]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="text-sm font-semibold tracking-tight text-[#151515]">
            {DataValues.siteName}
          </Link>
          <nav className="hidden items-center gap-6 text-[13px] font-medium text-[#151515]/58 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="capitalize transition hover:text-[#151515]">
                {item}
              </a>
            ))}
          </nav>
          <a
            href={DataValues.resumeURL}
            className="inline-flex min-h-10 items-center rounded-full bg-[#151515] px-5 text-[13px] font-semibold text-white transition hover:bg-[#8A1F1D]"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100dvh-73px)] max-w-7xl content-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#8A1F1D]">
              Research-builder / systems-minded product engineer
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-[#151515] sm:text-7xl lg:text-8xl">
              {DataValues.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4C4A45] sm:text-xl sm:leading-9">
              {DataValues.summary}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#151515] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8A1F1D]"
              >
                Selected work
              </a>
              <a
                href={`mailto:${DataValues.email}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#151515]/15 bg-white/55 px-6 text-sm font-semibold text-[#151515] transition hover:-translate-y-0.5 hover:border-[#151515]/30 hover:bg-white"
              >
                Contact Madhav
              </a>
            </div>
          </div>

          <aside className="self-end border-l border-[#151515]/12 pl-6 lg:pl-10">
            <div className="max-w-md">
              <p className="text-sm font-semibold text-[#151515]">{DataValues.role}</p>
              <p className="mt-3 text-sm leading-7 text-[#4C4A45]">{DataValues.profile}</p>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#151515]/12 pt-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-[#77736B]">Location</dt>
                  <dd className="mt-1 text-sm font-semibold">{DataValues.location}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-[#77736B]">Hiring window</dt>
                  <dd className="mt-1 text-sm font-semibold">{DataValues.availability}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-xs uppercase tracking-[0.16em] text-[#77736B]">Open to</dt>
                  <dd className="mt-1 text-sm font-semibold">{DataValues.targetLocations}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </section>

        <section className="border-y border-[#151515]/10 bg-[#151515] text-white">
          <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {DataValues.proofPoints.map((point) => (
              <div key={point.label} className="bg-[#151515] px-5 py-8 sm:px-8">
                <div className="text-4xl font-semibold tracking-tight">{point.value}</div>
                <p className="mt-2 text-sm leading-6 text-white/62">{point.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#8A1F1D]">Selected work</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Evidence across research, product, and tooling.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#4C4A45]">
                The strongest signal is not a single niche. It is the ability to move between rigorous data work, robust systems, and polished software that people can actually use.
              </p>
            </div>
            <div className="grid gap-4">
              {featuredProjects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.href ?? '#contact'}
                  className="group grid gap-6 border-t border-[#151515]/12 py-7 transition hover:border-[#8A1F1D] sm:grid-cols-[0.95fr_1.25fr_auto]"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A1F1D]">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-2 text-sm text-[#77736B]">{project.period}</p>
                  </div>
                  <div>
                    <p className="text-sm leading-7 text-[#4C4A45]">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((item) => (
                        <span key={item} className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#4C4A45] ring-1 ring-[#151515]/10">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#151515]/15 text-[#151515] transition group-hover:border-[#8A1F1D] group-hover:bg-[#8A1F1D] group-hover:text-white sm:mt-1">
                    <ArrowIcon />
                  </div>
                  {index === featuredProjects.length - 1 ? <div className="hidden border-b border-[#151515]/12" /> : null}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#8A1F1D]">Experience</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                Serious research context, practical product delivery.
              </h2>
            </div>
            <div className="mt-12 divide-y divide-[#151515]/10 border-y border-[#151515]/10">
              {DataValues.experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="grid gap-5 py-8 md:grid-cols-[0.7fr_0.9fr_1.25fr]">
                  <div>
                    <p className="text-sm font-semibold text-[#151515]">{item.period}</p>
                    <p className="mt-1 text-sm text-[#77736B]">{item.location}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{item.role}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#4C4A45]">{item.company}</p>
                  </div>
                  <p className="text-sm leading-7 text-[#4C4A45]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#8A1F1D]">Profile</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Built for high-trust teams that need both research depth and product judgment.
            </h2>
          </div>
          <div className="space-y-8">
            <div className="border-l border-[#151515]/15 pl-6">
              <h3 className="text-xl font-semibold tracking-tight">Current research work</h3>
              <ul className="mt-5 space-y-3">
                {DataValues.currentWork.map((item) => (
                  <li key={item} className="text-sm leading-7 text-[#4C4A45]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {DataValues.focusAreas.map((area) => (
                <div key={area.title} className="border-t border-[#151515]/15 pt-5">
                  <h3 className="text-base font-semibold tracking-tight">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#4C4A45]">{area.body}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77736B]">Core stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {DataValues.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white/75 px-3 py-1.5 text-xs font-medium text-[#4C4A45] ring-1 ring-[#151515]/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-6 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 bg-[#151515] px-6 py-12 text-white sm:px-10 sm:py-16 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#D98B86]">Contact</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Looking for AI, ML, data, or full-stack roles starting late June / July 2026.
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-sm leading-7 text-white/68">
                Open to Delhi, Gurgaon, or remote teams. Best fit: research-builder, systems-minded product engineer, AI tooling builder, or full-stack developer roles where reliability and clarity matter.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {DataValues.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/12 transition hover:bg-white hover:text-[#151515]"
                  >
                    {link.label}
                    {link.href.startsWith('http') ? <ArrowIcon /> : null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
