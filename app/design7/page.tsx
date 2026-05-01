import Link from "next/link"

import { DataValues, featuredProjects, introBullets, linkLog } from "./data-values"

function Arrow() {
  return (
    <span aria-hidden="true" className="text-[#d8e070] transition group-hover:translate-x-0.5">
      -&gt;
    </span>
  )
}

export default function Design7() {
  return (
    <main className="min-h-dvh bg-[#080a09] px-5 py-10 text-[#e5e0d1] antialiased sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-[760px]">
        <header className="border-b border-[#2b302c] pb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8d9487]">
            Minimal Dark Developer Index / design7
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-semibold leading-none tracking-tight text-[#f2efe3] sm:text-5xl">
                {DataValues.name}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#a7ada1]">
                {DataValues.summary}
              </p>
            </div>
            <Link
              href="/"
              className="group inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#d8e070] transition hover:text-[#f2efe3]"
            >
              home <Arrow />
            </Link>
          </div>
          <p className="mt-7 font-mono text-xs leading-6 text-[#747c70]">
            {DataValues.handle} / {DataValues.role}
          </p>
        </header>

        <section aria-label="Intro notes" className="border-b border-[#2b302c] py-8">
          <ul className="space-y-4">
            {introBullets.map((item) => (
              <li key={item.label} className="grid gap-2 sm:grid-cols-[7.5rem_1fr]">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6f776b]">
                  {item.label}
                </span>
                <span className="text-sm leading-7 text-[#c7c9bd]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="featured-projects" className="border-b border-[#2b302c] py-9">
          <div className="mb-5 flex items-baseline justify-between gap-4">
            <h2
              id="featured-projects"
              className="font-mono text-xs uppercase tracking-[0.22em] text-[#f2efe3]"
            >
              Featured projects
            </h2>
            <span className="font-mono text-[11px] text-[#6f776b]">compact rows</span>
          </div>

          <div className="divide-y divide-[#252a27] border-y border-[#252a27]">
            {featuredProjects.map((project) => (
              <a
                key={project.code}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-3 py-5 transition hover:bg-[#0d100e] sm:grid-cols-[5.5rem_1fr]"
              >
                <div className="flex items-baseline justify-between gap-4 sm:block">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8e070]">
                    {project.code}
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-[#6f776b]">{project.period}</p>
                </div>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold leading-snug text-[#f2efe3] group-hover:text-[#d8e070]">
                        {project.title}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#7f877b]">
                        {project.kind}
                      </p>
                    </div>
                    <Arrow />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#b7bbaf]">{project.summary}</p>
                  <p className="mt-3 font-mono text-xs leading-6 text-[#777f73]">{project.stack}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="working-notes" className="border-b border-[#2b302c] py-9">
          <h2
            id="working-notes"
            className="font-mono text-xs uppercase tracking-[0.22em] text-[#f2efe3]"
          >
            Working notes
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#c7c9bd]">
            <p>
              The through-line is inspectability: make large research data traceable, make product
              systems recoverable, and keep AI tooling fast enough to use every day.
            </p>
            <p>
              This index deliberately avoids the usual portfolio homepage shape. It is a quiet
              ledger for technical readers who want the active work, the shipped artifacts, and the
              next useful link without a tour.
            </p>
          </div>
        </section>

        <section aria-labelledby="link-log" className="py-9">
          <h2 id="link-log" className="font-mono text-xs uppercase tracking-[0.22em] text-[#f2efe3]">
            Open source / notable links
          </h2>
          <div className="mt-5 divide-y divide-[#252a27] border-y border-[#252a27]">
            {linkLog.map((item) => (
              <a
                key={`${item.date}-${item.label}`}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group grid gap-2 py-4 text-sm transition hover:bg-[#0d100e] sm:grid-cols-[6rem_1fr_1.5rem]"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6f776b]">
                  {item.date}
                </span>
                <span>
                  <span className="block font-medium text-[#f2efe3] group-hover:text-[#d8e070]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs leading-6 text-[#8f968a]">{item.note}</span>
                </span>
                <Arrow />
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
