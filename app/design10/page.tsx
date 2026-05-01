import Link from 'next/link'
import { experience, profile, projects } from './data-values'

function ExternalArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
      <path
        d="M5 11 11 5M6.25 5H11v4.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  )
}

export default function Design10() {
  return (
    <main className="min-h-dvh bg-[#fbfaf7] px-5 py-8 text-[#181714] antialiased sm:px-8 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <header className="border-b border-[#dfddd5] pb-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
            <Link href="/" className="text-sm font-semibold tracking-tight hover:text-[#8c3324]">
              {profile.handle}
            </Link>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#676158]">
              {profile.links.map((link) => (
                <a key={link.label} href={link.href} className="inline-flex items-center gap-1.5 hover:text-[#8c3324]">
                  {link.label}
                  <ExternalArrow />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl">
            <p className="text-sm font-medium text-[#8c3324]">{profile.role}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#181714] sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#4f4a43]">{profile.summary}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#676158]">{profile.availability}</p>
          </div>
        </header>

        <section className="py-12 sm:py-16" aria-labelledby="project-archive">
          <div className="mb-7 flex items-baseline justify-between gap-6 border-b border-[#dfddd5] pb-3">
            <h2 id="project-archive" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8c3324]">
              Project-first archive
            </h2>
            <p className="text-sm tabular-nums text-[#8a8377]">{projects.length} records</p>
          </div>

          <div className="divide-y divide-[#dfddd5]">
            {projects.map((project, index) => (
              <article key={project.title} className="grid gap-4 py-8 sm:grid-cols-[4.5rem_1fr]">
                <a
                  href={project.href}
                  className="text-sm font-semibold tabular-nums text-[#8c3324] transition hover:text-[#181714]"
                  aria-label={`Open ${project.title}`}
                >
                  {String(index + 1).padStart(2, '0')}
                </a>

                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-2xl font-semibold leading-snug tracking-tight">
                      <a href={project.href} className="hover:text-[#8c3324]">
                        {project.title}
                      </a>
                    </h3>
                    <p className="shrink-0 text-sm tabular-nums text-[#8a8377]">{project.year}</p>
                  </div>

                  <p className="mt-2 text-sm font-medium text-[#8c3324]">{project.kind}</p>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[#4f4a43]">{project.summary}</p>

                  <ul className="mt-5 space-y-2">
                    {project.details.map((detail) => (
                      <li key={detail} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-7 text-[#676158]">
                        <span className="mt-[0.7rem] h-px bg-[#b8b2a7]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#dfddd5] py-12 sm:py-16" aria-labelledby="experience-notes">
          <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
            <div>
              <h2 id="experience-notes" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8c3324]">
                Experience
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#676158]">
                Kept lightweight so the projects stay first.
              </p>
            </div>

            <div className="divide-y divide-[#dfddd5]">
              {experience.map((item) => (
                <article key={item.org} className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[10rem_1fr]">
                  <p className="text-sm tabular-nums leading-6 text-[#8a8377]">{item.period}</p>
                  <div>
                    <h3 className="text-base font-semibold leading-6">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-[#8c3324]">{item.org}</p>
                    <p className="mt-3 text-sm leading-7 text-[#676158]">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#dfddd5] py-8 text-sm text-[#676158] sm:flex-row sm:items-center sm:justify-between">
          <a href={`mailto:${profile.email}`} className="font-medium text-[#181714] hover:text-[#8c3324]">
            {profile.email}
          </a>
          <p>Selected work archive for Madhav Gautam.</p>
        </footer>
      </div>
    </main>
  )
}
