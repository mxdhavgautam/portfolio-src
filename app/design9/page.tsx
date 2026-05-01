import Link from 'next/link'
import type { ReactNode } from 'react'

import {
  contactReferences,
  education,
  fitNotes,
  profile,
  profileFacts,
  roleRecords,
  workRecords,
  type ContactReference,
  type FitNote,
  type ProfileFact,
  type RoleRecord,
  type WorkRecord,
} from './data-values'

function ExternalMark() {
  return (
    <span aria-hidden="true" className="text-[#6F7C70] transition group-hover:translate-x-0.5">
      -&gt;
    </span>
  )
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7C857A]">
      {children}
    </p>
  )
}

function RuleSection({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-[#D9DDD5] py-9 sm:py-11">
      <div className="grid gap-6 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
        <div>
          <Kicker>{label}</Kicker>
          <h2 className="mt-3 max-w-[16rem] text-xl font-semibold leading-snug text-[#22261F]">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function ProfileFactRow({ fact }: { fact: ProfileFact }) {
  return (
    <div className="grid gap-2 border-t border-[#E2E5DF] py-4 first:border-t-0 md:grid-cols-[10rem_minmax(0,1fr)]">
      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6F7C70]">
        {fact.label}
      </dt>
      <dd className="text-sm leading-7 text-[#4B5148]">{fact.value}</dd>
    </div>
  )
}

function FitMemo({ note, index }: { note: FitNote; index: number }) {
  return (
    <article className="grid gap-4 border-t border-[#E2E5DF] py-6 first:border-t-0 first:pt-0 md:grid-cols-[5rem_minmax(0,1fr)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A7662]">
        {String(index + 1).padStart(2, '0')}
      </p>
      <div>
        <h3 className="text-lg font-semibold leading-snug text-[#22261F]">{note.track}</h3>
        <p className="mt-2 text-sm leading-7 text-[#4B5148]">{note.read}</p>
        <p className="mt-3 border-l border-[#BBC4B8] pl-4 text-sm leading-7 text-[#5D665B]">
          {note.evidence}
        </p>
      </div>
    </article>
  )
}

function WorkRecordRow({ record, index }: { record: WorkRecord; index: number }) {
  const body = (
    <article className="group border-t border-[#D9DDD5] py-7 first:border-t-0 first:pt-0">
      <div className="grid gap-4 xl:grid-cols-[8rem_minmax(0,1fr)]">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A7662]">
            {String(index + 1).padStart(2, '0')}
          </p>
          <p className="text-xs leading-5 text-[#727A70]">{record.timeframe}</p>
        </div>
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#6F7C70]">
                {record.classification}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-snug text-[#22261F]">
                {record.title}
              </h3>
            </div>
            {record.href ? (
              <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6F7C70]">
                Open <ExternalMark />
              </span>
            ) : null}
          </div>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#3E453D]">
            {record.relevance}
          </p>
          <ul className="mt-4 space-y-2.5">
            {record.evidence.map((item) => (
              <li key={item} className="grid grid-cols-[0.9rem_minmax(0,1fr)] gap-2 text-sm leading-7 text-[#555D53]">
                <span aria-hidden="true" className="text-[#9CA692]">
                  -
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )

  if (!record.href) {
    return body
  }

  return (
    <a href={record.href} target="_blank" rel="noreferrer" className="block transition hover:bg-[#F7F8F4]">
      {body}
    </a>
  )
}

function RoleRow({ record }: { record: RoleRecord }) {
  return (
    <article className="grid gap-4 border-t border-[#E2E5DF] py-5 first:border-t-0 first:pt-0 lg:grid-cols-[12rem_13rem_minmax(0,1fr)]">
      <div>
        <p className="text-sm font-semibold text-[#22261F]">{record.period}</p>
        <p className="mt-1 text-xs leading-5 text-[#727A70]">{record.location}</p>
      </div>
      <div>
        <h3 className="text-base font-semibold leading-6 text-[#22261F]">{record.role}</h3>
        <p className="mt-1 text-sm leading-6 text-[#5D665B]">{record.organization}</p>
      </div>
      <p className="text-sm leading-7 text-[#4B5148]">{record.scope}</p>
    </article>
  )
}

function ReferenceLink({ link }: { link: ContactReference }) {
  const external = link.href.startsWith('http')

  return (
    <a
      href={link.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group block border-t border-[#E2E5DF] py-4 transition hover:bg-[#F7F8F4]"
    >
      <span className="flex items-center justify-between gap-3 text-sm font-semibold text-[#22261F]">
        {link.label}
        {external ? <ExternalMark /> : null}
      </span>
      <span className="mt-1 block text-sm leading-6 text-[#5D665B]">{link.value}</span>
    </a>
  )
}

export default function StructuredHiringPage() {
  return (
    <main className="min-h-dvh bg-[#F0F2EC] px-4 py-5 text-[#22261F] antialiased sm:px-6 sm:py-8">
      <article className="mx-auto max-w-[1040px] border border-[#D4D9D0] bg-[#FEFFFB] shadow-[0_28px_90px_rgba(51,61,48,0.08)]">
        <header className="border-b border-[#D9DDD5] px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-sm font-semibold text-[#22261F] transition hover:text-[#6F7C70]">
              {profile.handle}
            </Link>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7C857A]">
              Structured hiring page
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_19rem]">
          <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            <section className="pb-9">
              <Kicker>Candidate brief</Kicker>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-normal text-[#22261F] sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#3E453D]">{profile.headline}</p>
            </section>

            <section className="border-y border-[#D9DDD5] py-5">
              <dl>
                {profileFacts.map((fact) => (
                  <ProfileFactRow key={fact.label} fact={fact} />
                ))}
              </dl>
            </section>

            <RuleSection label="Screening memo" title="Where the evidence is strongest for a recruiter read.">
              <div>
                {fitNotes.map((note, index) => (
                  <FitMemo key={note.track} note={note} index={index} />
                ))}
              </div>
            </RuleSection>

            <RuleSection label="Selected evidence" title="Project and research records stated as hiring evidence.">
              <div className="border-y border-[#D9DDD5]">
                {workRecords.map((record, index) => (
                  <WorkRecordRow key={record.title} record={record} index={index} />
                ))}
              </div>
            </RuleSection>

            <RuleSection label="Role history" title="Recent roles with scope, not inflated claims.">
              <div className="border-y border-[#D9DDD5]">
                {roleRecords.map((record) => (
                  <RoleRow key={`${record.organization}-${record.role}`} record={record} />
                ))}
              </div>
            </RuleSection>
          </div>

          <aside className="border-t border-[#D9DDD5] bg-[#F7F8F4] px-5 py-7 sm:px-8 lg:border-l lg:border-t-0 lg:px-6">
            <div className="space-y-7">
              <section>
                <Kicker>Availability</Kicker>
                <p className="mt-3 text-sm leading-7 text-[#3E453D]">{profile.availability}</p>
                <p className="mt-3 text-sm leading-7 text-[#3E453D]">{profile.locationPreference}</p>
              </section>

              <section className="border-t border-[#D9DDD5] pt-6">
                <Kicker>Current title</Kicker>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#22261F]">{profile.currentRole}</p>
              </section>

              <section className="border-t border-[#D9DDD5] pt-6">
                <Kicker>Education</Kicker>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#22261F]">{education.institution}</p>
                <p className="mt-2 text-sm leading-7 text-[#4B5148]">{education.credential}</p>
                <p className="mt-2 text-xs leading-5 text-[#727A70]">{education.period}</p>
              </section>

              <section className="border-t border-[#D9DDD5] pt-6">
                <Kicker>References</Kicker>
                <div className="mt-3">
                  {contactReferences.map((link) => (
                    <ReferenceLink key={link.label} link={link} />
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
