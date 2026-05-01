import Link from "next/link"

import {
  actions,
  callouts,
  currentWork,
  metaNotes,
  profile,
  projectNotes,
  sideNotes,
  type CalloutNote,
  type ProjectNote,
  type WorkNote,
  type WorkspaceAction,
} from "./data-values"

const calloutTone = {
  amber: "border-[#eadfac] bg-[#fff9df]",
  mint: "border-[#c9decf] bg-[#f1fbf2]",
  blue: "border-[#c9d8eb] bg-[#f4f8ff]",
} satisfies Record<CalloutNote["tone"], string>

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none">
      <path
        d="M5 11 11 5M6.25 5H11v4.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.45"
      />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M5.5 3.5h5.4l3.6 3.6v9.4h-9z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.3" />
      <path d="M10.8 3.7V7.3h3.6M7.8 10.8h4.7M7.8 13.4h3.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
    </svg>
  )
}

function ActionLink({ action }: { action: WorkspaceAction }) {
  const isPrimary = action.kind === "primary"

  return (
    <a
      href={action.href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs font-medium transition ${
        isPrimary
          ? "border-[#26231d] bg-[#26231d] text-white hover:bg-[#4a4234]"
          : "border-[#ded8ca] bg-[#fffdf7] text-[#5d574d] hover:border-[#bcb3a2] hover:text-[#25231f]"
      }`}
    >
      {action.label}
      <ArrowIcon />
    </a>
  )
}

function Callout({ note }: { note: CalloutNote }) {
  return (
    <aside className={`rounded-md border px-4 py-3.5 ${calloutTone[note.tone]}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#817764]">{note.label}</p>
      <h2 className="mt-2 text-base font-semibold leading-6 tracking-tight text-[#25231f]">{note.title}</h2>
      <p className="mt-2 text-sm leading-7 text-[#5f594f]">{note.body}</p>
    </aside>
  )
}

function ProjectRow({ project, index }: { project: ProjectNote; index: number }) {
  return (
    <article className="grid gap-4 border-t border-[#e2dccf] py-6 first:border-t-0 first:pt-0 md:grid-cols-[9rem_minmax(0,1fr)]">
      <div className="flex items-center gap-3 md:block">
        <p className="font-mono text-xs tabular-nums text-[#8f8676]">{String(index + 1).padStart(2, "0")}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a907f] md:mt-3">{project.period}</p>
      </div>

      <div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#87612d]">/{project.folder}</p>
            <h3 className="mt-1 text-xl font-semibold leading-snug tracking-tight text-[#25231f]">
              <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#835b24]">
                {project.title}
                <ArrowIcon />
              </a>
            </h3>
          </div>
        </div>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#544e45]">{project.summary}</p>

        <div className="mt-4 space-y-2">
          {project.receipts.map((receipt) => (
            <p key={receipt} className="grid grid-cols-[1.1rem_1fr] rounded-md bg-[#fbf8ef] px-3 py-2 text-sm leading-6 text-[#665f54]">
              <span aria-hidden="true" className="text-[#a99d88]">
                -
              </span>
              <span>{receipt}</span>
            </p>
          ))}
        </div>
      </div>
    </article>
  )
}

function WorkRow({ item }: { item: WorkNote }) {
  return (
    <article className="border-t border-[#e2dccf] py-5 first:border-t-0 first:pt-0">
      <div className="grid gap-3 md:grid-cols-[9rem_minmax(0,1fr)]">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#8f8676]">{item.period}</p>
        <div>
          <h3 className="text-base font-semibold leading-6 text-[#25231f]">{item.role}</h3>
          <p className="mt-1 text-sm font-medium text-[#835b24]">{item.org}</p>
          <p className="mt-3 text-sm leading-7 text-[#5f594f]">{item.note}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {item.openLoops.map((loop) => (
              <p key={loop} className="rounded-md border border-[#e3ddcf] bg-[#fffdf7] px-3 py-2 text-xs leading-5 text-[#6a6258]">
                {loop}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Design8() {
  return (
    <main className="min-h-dvh bg-[#efede4] px-3 py-4 text-[#25231f] antialiased sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-[#d5cebf] bg-[#fffdf7] shadow-[0_24px_80px_rgba(49,44,34,0.08)]">
        <header className="border-b border-[#ded7c8] bg-[#f8f6ef]">
          <div className="flex flex-col gap-3 border-b border-[#ded7c8] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex min-w-0 items-center gap-2 text-xs text-[#746b5f]">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#dcd4c5] bg-white text-[#835b24]">
                <FileIcon />
              </span>
              <span className="truncate font-mono">madhav/workspace/notes.clean</span>
            </div>

            <div className="flex flex-wrap gap-2" aria-label="Workspace actions">
              {actions.map((action) => (
                <ActionLink key={action.label} action={action} />
              ))}
            </div>
          </div>

          <div className="grid gap-7 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-10 lg:py-10">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a806f] transition hover:text-[#25231f]"
              >
                Portfolio index
                <ArrowIcon />
              </Link>

              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[#87612d]">Clean workspace / notes page</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">{profile.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5d574d]">{profile.intro}</p>
            </div>

            <aside className="self-start rounded-md border border-[#ded7c8] bg-white px-4 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#958a79]">Document owner</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{profile.name}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5d574d]">{profile.role}</p>
              <p className="mt-4 border-t border-[#e8e1d4] pt-4 text-sm leading-6 text-[#6d665b]">{profile.availability}</p>
            </aside>
          </div>
        </header>

        <section aria-label="Workspace metadata" className="grid border-b border-[#ded7c8] bg-[#fbf9f3] md:grid-cols-3">
          {metaNotes.map((note) => (
            <div key={note.label} className="border-t border-[#ded7c8] px-5 py-4 first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0 lg:px-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#958a79]">{note.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#4f493f]">{note.value}</p>
            </div>
          ))}
        </section>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
            <section aria-label="Pinned workspace notes" className="grid gap-3">
              {callouts.map((note) => (
                <Callout key={note.title} note={note} />
              ))}
            </section>

            <section aria-labelledby="selected-notes" className="mt-9">
              <div className="border-b border-[#d7d0c0] pb-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#958a79]">Selected project notes</p>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <h2 id="selected-notes" className="text-2xl font-semibold tracking-tight">
                    Compact records with receipts attached.
                  </h2>
                  <p className="text-sm tabular-nums text-[#8b8274]">{projectNotes.length} linked records</p>
                </div>
              </div>

              <div className="mt-2">
                {projectNotes.map((project, index) => (
                  <ProjectRow key={project.title} project={project} index={index} />
                ))}
              </div>
            </section>

            <section aria-labelledby="current-notes" className="mt-8 border-t border-[#d7d0c0] pt-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#958a79]">Current work</p>
              <h2 id="current-notes" className="mt-2 text-2xl font-semibold tracking-tight">
                Role context, kept as notes.
              </h2>

              <div className="mt-5 rounded-md border border-[#ded7c8] bg-[#fbf9f3] px-4 sm:px-5">
                {currentWork.map((item) => (
                  <WorkRow key={item.org} item={item} />
                ))}
              </div>
            </section>
          </div>

          <aside className="border-t border-[#ded7c8] bg-[#f8f6ef] px-5 py-7 sm:px-8 lg:border-l lg:border-t-0 lg:px-6">
            <div className="rounded-md border border-[#ded7c8] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#958a79]">Workspace note</p>
              <p className="mt-3 text-sm leading-7 text-[#5d574d]">
                This page is shaped like a working document: light chrome, compact sections, and no homepage skeleton.
              </p>
            </div>

            <div className="mt-4 divide-y divide-[#ded7c8] rounded-md border border-[#ded7c8] bg-[#fffdf7]">
              {sideNotes.map((note) => (
                <section key={note.label} className="px-4 py-4">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#87612d]">{note.label}</h3>
                  {note.label === "Contact" ? (
                    <a href={`mailto:${profile.email}`} className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium leading-7 text-[#25231f] hover:text-[#835b24]">
                      {note.value}
                      <ArrowIcon />
                    </a>
                  ) : (
                    <p className="mt-2 text-sm leading-7 text-[#645d52]">{note.value}</p>
                  )}
                </section>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
