import Link from "next/link"

import {
  DataValues,
  currentSystems,
  explorations,
  labStatus,
  notes,
  shippedWork,
  skills,
} from "./data-values"

const sectionLabel = "font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6f47]"

export default function Design7() {
  return (
    <div className="min-h-dvh bg-[#f8f3e7] text-[#191714] antialiased">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(25,23,20,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(25,23,20,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <header className="sticky top-0 z-40 border-b border-[#191714]/15 bg-[#f8f3e7]/88 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
            {DataValues.appNameLong}/design7
          </Link>
          <nav className="hidden items-center gap-5 font-mono text-xs text-[#51493f] md:flex">
            {["systems", "exploring", "shipped", "notes", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-[#b4452f]">
                {item}
              </a>
            ))}
          </nav>
          <a
            href={DataValues.resumeURL}
            className="border border-[#191714]/25 bg-[#fffaf0] px-4 py-2 font-mono text-xs font-semibold transition hover:border-[#b4452f] hover:text-[#b4452f]"
          >
            resume
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div className="flex min-h-[70dvh] flex-col justify-center">
            <p className={sectionLabel}>Living lab notebook</p>
            <h1 className="mt-5 max-w-4xl font-serif text-6xl font-black leading-[0.95] tracking-tight text-[#191714] sm:text-7xl lg:text-8xl">
              Madhav Gautam is building in public context.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#51493f]">
              A research-builder and systems-minded product engineer working across scientific data
              infrastructure, AI tooling, full-stack products, and practical ML validation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#systems"
                className="border border-[#191714] bg-[#191714] px-5 py-3 font-mono text-sm font-semibold text-[#fffaf0] transition hover:bg-[#b4452f]"
              >
                read current systems
              </a>
              <a
                href={`mailto:${DataValues.contactEmail}`}
                className="border border-[#191714]/25 bg-[#fffaf0] px-5 py-3 font-mono text-sm font-semibold transition hover:border-[#b4452f] hover:text-[#b4452f]"
              >
                start a thread
              </a>
            </div>
          </div>

          <aside className="self-center border border-[#191714]/20 bg-[#fffaf0] shadow-[10px_10px_0_rgba(25,23,20,0.10)]">
            <div className="border-b border-[#191714]/15 px-5 py-4 font-mono text-xs text-[#8b6f47]">
              active-context.md
            </div>
            <div className="divide-y divide-[#191714]/12">
              {labStatus.map((item) => (
                <div key={item.label} className="grid gap-3 p-5 sm:grid-cols-[0.36fr_0.64fr]">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8b6f47]">
                    {item.label}
                  </p>
                  <div>
                    <p className="text-xl font-semibold leading-tight">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[#51493f]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="systems" className="border-y border-[#191714]/15 bg-[#ede2cd]/70">
          <div className="mx-auto max-w-7xl px-5 py-16">
            <div className="max-w-3xl">
              <p className={sectionLabel}>Current systems</p>
              <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
                The live work is scientific, infrastructural, and a little messy in the useful way.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {currentSystems.map((system) => (
                <article key={system.title} className="border border-[#191714]/18 bg-[#fffaf0] p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#b4452f]">
                    {system.tag}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold leading-tight">{system.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {system.notes.map((note) => (
                      <li key={note} className="grid grid-cols-[18px_1fr] gap-3 text-sm leading-6 text-[#51493f]">
                        <span className="mt-2 h-px bg-[#b4452f]" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="exploring" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className={sectionLabel}>What he is exploring</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight">
              Questions with working code attached.
            </h2>
          </div>
          <div className="space-y-4">
            {explorations.map((item, index) => (
              <article key={item.question} className="border-l-2 border-[#b4452f] bg-[#fffaf0] p-5">
                <p className="font-mono text-xs text-[#8b6f47]">question {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[#51493f]">{item.context}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="shipped" className="border-y border-[#191714]/15 bg-[#191714] text-[#fffaf0]">
          <div className="mx-auto max-w-7xl px-5 py-16">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b16c]">
                  Shipped work
                </p>
                <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
                  Artifacts, not vibes.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#d9cfbe]">
                Product work spans Nandiniz&apos;Aura, Friday for Codex, Video Grabber, CR3ATE.AI,
                HCLTech, and WESEE.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-[#fffaf0]/15 bg-[#fffaf0]/15 md:grid-cols-2">
              {shippedWork.map((work) => (
                <a
                  key={work.title}
                  href={work.href}
                  className="group bg-[#191714] p-6 transition hover:bg-[#241f19]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d7b16c]">
                        {work.kind}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold leading-tight">{work.title}</h3>
                    </div>
                    <p className="font-mono text-xs text-[#d9cfbe]">{work.date}</p>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[#d9cfbe]">{work.summary}</p>
                  <p className="mt-6 font-mono text-xs font-semibold text-[#d7b16c] group-hover:text-[#fffaf0]">
                    open reference
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="notes" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.64fr_0.36fr]">
          <div>
            <p className={sectionLabel}>Notes and threads</p>
            <div className="mt-6 space-y-4">
              {notes.map((note) => (
                <article key={note.label} className="border border-[#191714]/15 bg-[#fffaf0] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#b4452f]">
                    {note.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">{note.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#51493f]">{note.body}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="h-fit border border-[#191714]/20 bg-[#ede2cd] p-6">
            <p className={sectionLabel}>Working stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#191714]/20 bg-[#fffaf0] px-3 py-1.5 font-mono text-xs text-[#51493f]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section id="contact" className="border-t border-[#191714]/15 bg-[#ede2cd]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className={sectionLabel}>Contact</p>
              <h2 className="mt-4 font-serif text-5xl font-black leading-tight">
                Useful conversation beats polished positioning.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#51493f]">
                Best fit: research engineering, AI tooling, systems-heavy product engineering,
                full-stack roles, and data infrastructure work. Start window: late June or July
                2026. Locations: Delhi, Gurgaon, or remote.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={`mailto:${DataValues.contactEmail}`} className="border border-[#191714] bg-[#191714] px-5 py-3 font-mono text-sm font-semibold text-[#fffaf0]">
                email
              </a>
              <a href={DataValues.githubURL} className="border border-[#191714]/25 bg-[#fffaf0] px-5 py-3 font-mono text-sm font-semibold">
                github
              </a>
              <a href={DataValues.linkedinURL} className="border border-[#191714]/25 bg-[#fffaf0] px-5 py-3 font-mono text-sm font-semibold">
                linkedin
              </a>
              <a href={DataValues.twitterURL} className="border border-[#191714]/25 bg-[#fffaf0] px-5 py-3 font-mono text-sm font-semibold">
                x/twitter
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
