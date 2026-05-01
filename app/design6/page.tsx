import Image from "next/image"
import Link from "next/link"
import {
  capabilities,
  currentWork,
  experience,
  profile,
  selectedWork,
  thinking,
} from "./data-values"

const navItems = [
  ["Thesis", "#thesis"],
  ["Work", "#work"],
  ["Profile", "#profile"],
  ["Contact", "#contact"],
]

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="border-t border-[#d8d2c5] pt-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8b3f2f]">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#201f1b] sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function ExternalMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="M6.5 13.5 13.5 6.5M8 6.5h5.5V12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function Design6() {
  return (
    <div className="min-h-dvh bg-[#f5f1e8] text-[#201f1b] antialiased">
      <header className="sticky top-0 z-40 border-b border-[#d8d2c5] bg-[#f5f1e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-[#201f1b] transition hover:text-[#8b3f2f]"
          >
            {profile.name}
          </Link>
          <nav className="hidden items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5e5a50] md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-[#8b3f2f]">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <section
          id="thesis"
          className="grid min-h-[calc(100dvh-58px)] items-end gap-12 border-b border-[#d8d2c5] py-16 md:grid-cols-[1.28fr_0.72fr] md:py-24"
        >
          <div>
            <p className="mb-8 max-w-md text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8b3f2f]">
              Research-builder / systems-minded product engineer / AI tooling builder
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-[#201f1b] sm:text-7xl lg:text-8xl">
              {profile.thesis}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5e5a50]">
              {profile.summary}
            </p>
          </div>

          <aside className="border-t border-[#d8d2c5] pt-5 md:self-stretch">
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="space-y-6 text-sm leading-7 text-[#5e5a50]">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b3f2f]">
                    Current
                  </p>
                  <p className="mt-2 text-[#201f1b]">{profile.role}</p>
                  <p>{profile.location}</p>
                </div>
                <p>{profile.availability}</p>
              </div>

              <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
                <a
                  href="#work"
                  className="inline-flex min-h-11 items-center border border-[#201f1b] px-4 transition hover:bg-[#201f1b] hover:text-[#f5f1e8]"
                >
                  Read work
                </a>
                <a
                  href={profile.links.resume}
                  className="inline-flex min-h-11 items-center border border-[#d8d2c5] px-4 text-[#5e5a50] transition hover:border-[#201f1b] hover:text-[#201f1b]"
                >
                  Resume
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-10 border-b border-[#d8d2c5] py-16 md:grid-cols-[0.72fr_1.28fr]">
          <SectionLabel eyebrow="Current focus" title="Large research data, made reproducible." />
          <div className="grid gap-px bg-[#d8d2c5] sm:grid-cols-2">
            {currentWork.map((item) => (
              <article key={item.label} className="bg-[#f5f1e8] p-6">
                <h3 className="text-base font-semibold text-[#201f1b]">{item.label}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5e5a50]">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="border-b border-[#d8d2c5] py-16">
          <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr]">
            <SectionLabel eyebrow="Selected work" title="Products and tools with operational edges." />
            <div className="space-y-0">
              {selectedWork.map((work, index) => (
                <a
                  key={work.title}
                  href={work.href}
                  className="group grid gap-5 border-t border-[#d8d2c5] py-7 transition first:border-t-0 hover:border-[#8b3f2f] sm:grid-cols-[8.5rem_1fr] md:grid-cols-[4rem_8.5rem_1fr]"
                >
                  <span className="text-sm font-semibold tabular-nums text-[#8b3f2f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative aspect-[4/3] overflow-hidden border border-[#d8d2c5] bg-[#ede7da]">
                    <Image
                      src={work.image}
                      alt={work.imageAlt}
                      fill
                      sizes="(min-width: 768px) 136px, 50vw"
                      className="object-cover opacity-80 grayscale transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                    />
                  </span>
                  <span>
                    <span className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                      <span className="text-2xl font-semibold tracking-tight text-[#201f1b] group-hover:text-[#8b3f2f]">
                        {work.title}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7c776c]">
                        {work.meta}
                      </span>
                    </span>
                    <span className="mt-4 block max-w-3xl text-sm leading-7 text-[#5e5a50]">
                      {work.body}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="grid gap-10 border-b border-[#d8d2c5] py-16 md:grid-cols-[0.72fr_1.28fr]">
          <SectionLabel eyebrow="Profile" title="Research instincts, product taste, implementation range." />
          <div>
            <p className="max-w-3xl text-xl leading-9 tracking-tight text-[#201f1b]">
              {profile.profile}
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="border border-[#d8d2c5] px-3 py-2 text-xs font-medium text-[#5e5a50]"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-b border-[#d8d2c5] py-16 md:grid-cols-[0.72fr_1.28fr]">
          <SectionLabel eyebrow="Experience" title="Recent roles, reduced to the work that matters." />
          <div className="space-y-8">
            {experience.map((item) => (
              <article key={item.org} className="grid gap-4 border-t border-[#d8d2c5] pt-6 sm:grid-cols-[11rem_1fr]">
                <p className="text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-[#7c776c]">
                  {item.years}
                </p>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#201f1b]">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#8b3f2f]">{item.org}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5e5a50]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-[#d8d2c5] py-16 md:grid-cols-[0.72fr_1.28fr]">
          <SectionLabel eyebrow="Current thinking" title="The operating notes behind the work." />
          <div className="grid gap-px bg-[#d8d2c5]">
            {thinking.map((note) => (
              <article key={note.title} className="bg-[#f5f1e8] p-6">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-[#201f1b]">
                  {note.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e5a50]">{note.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-10 py-16 md:grid-cols-[0.72fr_1.28fr]">
          <SectionLabel eyebrow="Contact" title="Useful conversations are welcome." />
          <div className="flex flex-col justify-between gap-10">
            <p className="max-w-2xl text-lg leading-8 text-[#5e5a50]">
              For AI/ML engineering, full-stack product engineering, data engineering, GenAI tooling, or research engineering roles aligned with a late June / July 2026 start window.
            </p>
            <div className="grid gap-4 text-sm sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-14 items-center justify-between gap-3 border border-[#201f1b] px-5 font-semibold transition hover:bg-[#201f1b] hover:text-[#f5f1e8]"
              >
                {profile.email}
              </a>
              {[
                ["LinkedIn", profile.links.linkedin],
                ["GitHub", profile.links.github],
                ["X / Twitter", profile.links.x],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex min-h-14 items-center justify-between gap-3 border border-[#d8d2c5] px-5 font-semibold text-[#5e5a50] transition hover:border-[#201f1b] hover:text-[#201f1b]"
                >
                  {label}
                  <ExternalMark />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
