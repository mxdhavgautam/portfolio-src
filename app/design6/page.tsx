import Link from "next/link"
import type { ReactNode } from "react"

import {
  currentFocus,
  documentHome,
  experienceSnapshot,
  selectedWork,
} from "./data-values"

function DocumentHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 mt-11 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#777066]">
      {children}
    </h2>
  )
}

function InlineArrow() {
  return (
    <span aria-hidden="true" className="text-[#9a9287] transition group-hover:text-[#24211d]">
      -&gt;
    </span>
  )
}

export default function Design6() {
  return (
    <main className="min-h-dvh bg-[#fbfaf7] px-5 py-8 text-[#292621] antialiased sm:px-8 sm:py-12">
      <article className="mx-auto max-w-[820px]">
        <header className="border-b border-[#e5dfd5] pb-8">
          <Link
            href="/"
            className="inline-flex text-sm text-[#766f65] underline decoration-[#d1c8bb] underline-offset-4 transition hover:text-[#24211d]"
          >
            mxdhavgautam.com
          </Link>

          <div className="mt-10">
            <p className="text-sm text-[#8c8478]">{documentHome.updated}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-normal text-[#181613] sm:text-5xl">
              {documentHome.title}
            </h1>
          </div>

          <dl className="mt-6 grid gap-3 text-sm leading-6 text-[#665f56] sm:grid-cols-[8rem_1fr]">
            <dt className="text-[#9a9287]">Currently</dt>
            <dd>{documentHome.metadata[0]}</dd>
            <dt className="text-[#9a9287]">Location</dt>
            <dd>{documentHome.metadata[1]}</dd>
            <dt className="text-[#9a9287]">Availability</dt>
            <dd>{documentHome.metadata[2]}</dd>
          </dl>
        </header>

        <section
          aria-label="Quick links"
          className="mt-7 border-l-4 border-[#d8d0c4] bg-[#f2eee7] px-5 py-4"
        >
          <p className="text-sm font-semibold text-[#3d3832]">Quick links</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {documentHome.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-[#5c554d] underline decoration-[#c8beb0] underline-offset-4 transition hover:text-[#24211d]"
              >
                {link.label}
                <InlineArrow />
              </a>
            ))}
          </div>
        </section>

        <section aria-label="Intro" className="mt-8 space-y-4">
          <p className="text-[17px] leading-8 text-[#3d3832]">{documentHome.intro}</p>
          <p className="text-[15px] leading-7 text-[#665f56]">{documentHome.note}</p>
        </section>

        <DocumentHeading>Selected Work</DocumentHeading>
        <section className="divide-y divide-[#e5dfd5] border-y border-[#e5dfd5]">
          {selectedWork.map((work) => (
            <a
              key={work.title}
              href={work.href}
              className="group block py-6 transition hover:bg-[#f5f1ea]"
            >
              <div className="grid gap-4 sm:grid-cols-[11.25rem_1fr]">
                <div className="text-sm leading-6 text-[#8c8478]">
                  <p>{work.period}</p>
                  <p>{work.context}</p>
                </div>
                <div>
                  <h3 className="inline-flex items-center gap-2 text-xl font-semibold leading-snug tracking-normal text-[#24211d]">
                    {work.title}
                    <InlineArrow />
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#514b43]">{work.summary}</p>
                  <ul className="mt-3 space-y-1 text-sm leading-6 text-[#665f56]">
                    {work.notes.map((note) => (
                      <li key={note} className="grid grid-cols-[1rem_1fr] gap-2">
                        <span className="text-[#aaa196]">-</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </section>

        <div className="grid gap-10 border-b border-[#e5dfd5] pb-12 md:grid-cols-[0.95fr_1.05fr]">
          <section>
            <DocumentHeading>Current Focus</DocumentHeading>
            <ul className="space-y-3 text-[15px] leading-7 text-[#514b43]">
              {currentFocus.map((item) => (
                <li key={item} className="grid grid-cols-[1rem_1fr] gap-2">
                  <span className="text-[#aaa196]">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <DocumentHeading>Experience Snapshot</DocumentHeading>
            <div className="space-y-5">
              {experienceSnapshot.map((item) => (
                <article key={`${item.org}-${item.period}`}>
                  <p className="text-sm text-[#8c8478]">{item.period}</p>
                  <h3 className="mt-1 text-base font-semibold text-[#24211d]">{item.role}</h3>
                  <p className="text-sm text-[#766f65]">{item.org}</p>
                  <p className="mt-2 text-[15px] leading-7 text-[#514b43]">{item.note}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <footer className="py-8 text-sm leading-7 text-[#766f65]">
          Best entry point:{" "}
          <a
            href={`mailto:${documentHome.email}`}
            className="text-[#3d3832] underline decoration-[#c8beb0] underline-offset-4 transition hover:text-[#181613]"
          >
            {documentHome.email}
          </a>
          .
        </footer>
      </article>
    </main>
  )
}
