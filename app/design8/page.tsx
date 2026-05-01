import Image from 'next/image'
import Link from 'next/link'
import { DataValues, type Artifact } from './data-values'

const navItems = ['work', 'capability', 'experience', 'contact']

function ArtifactCard({ artifact, index }: { artifact: Artifact; index: number }) {
  const content = (
    <article className="group grid overflow-hidden border border-[#171412]/12 bg-white shadow-[0_18px_70px_rgba(23,20,18,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#d83b2d]/45 hover:shadow-[0_28px_90px_rgba(23,20,18,0.11)] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="relative min-h-[300px] border-b border-[#171412]/10 bg-[#ece8df] lg:border-b-0 lg:border-r">
        <Image
          src={artifact.image}
          alt={artifact.imageAlt}
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.025]"
          priority={index === 0}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#171412]/72 to-transparent p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">Artifact</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/90">{artifact.artifact}</p>
        </div>
      </div>

      <div className="flex min-h-[430px] flex-col justify-between p-5 sm:p-7 lg:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#777068]">
            <span className="text-[#d83b2d]">{artifact.eyebrow}</span>
            <span className="h-1 w-1 rounded-full bg-[#171412]/28" />
            <span>{artifact.period}</span>
          </div>
          <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#171412] sm:text-5xl">
            {artifact.title}
          </h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5d5851] sm:text-base sm:leading-8">
            {artifact.summary}
          </p>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#171412]">Proof points</p>
          <div className="mt-4 grid gap-2">
            {artifact.proof.map((point) => (
              <p key={point} className="border-l-2 border-[#d83b2d] bg-[#f7f4ee] px-4 py-3 text-sm leading-6 text-[#3e3934]">
                {point}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {artifact.stack.map((item) => (
              <span key={item} className="border border-[#171412]/12 px-3 py-1.5 text-xs font-semibold text-[#5d5851]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )

  if (!artifact.href) {
    return content
  }

  return (
    <a href={artifact.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d83b2d] focus-visible:ring-offset-4">
      {content}
    </a>
  )
}

export default function Design8() {
  const featuredArtifact = DataValues.artifacts[0]
  const productArtifacts = DataValues.artifacts.slice(1)

  return (
    <div className="min-h-dvh bg-[#f4f0e8] text-[#171412] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#171412]/10 bg-[#f4f0e8]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-semibold tracking-tight text-[#171412]">
            {DataValues.siteName}
          </Link>
          <nav className="hidden items-center gap-6 text-[13px] font-medium text-[#5d5851] md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="capitalize transition hover:text-[#d83b2d]">
                {item}
              </a>
            ))}
          </nav>
          <a
            href={DataValues.resumeURL}
            className="inline-flex min-h-10 items-center bg-[#171412] px-4 text-sm font-semibold text-white transition hover:bg-[#d83b2d]"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100dvh-65px)] max-w-7xl content-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d83b2d]">
              Artifact-led case study gallery
            </p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-[#171412] sm:text-7xl lg:text-8xl">
              {DataValues.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d5851] sm:text-xl sm:leading-9">
              {DataValues.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center bg-[#d83b2d] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#171412]"
              >
                View selected work
              </a>
              <a
                href={`mailto:${DataValues.email}`}
                className="inline-flex min-h-12 items-center justify-center border border-[#171412]/15 bg-white/70 px-6 text-sm font-semibold text-[#171412] transition hover:-translate-y-0.5 hover:border-[#171412]/35"
              >
                Contact Madhav
              </a>
            </div>
          </div>

          <aside className="border border-[#171412]/12 bg-[#171412] p-3 text-white shadow-[0_28px_100px_rgba(23,20,18,0.22)]">
            <div className="border border-white/10 bg-[#221f1c]">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff9b91]">Current proof</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">GNOME research workflow</h2>
                </div>
                <span className="border border-white/16 px-3 py-1 text-xs font-semibold text-white/72">Singapore</span>
              </div>
              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {DataValues.proofStats.map((stat) => (
                  <div key={stat.label} className="bg-[#221f1c] p-5">
                    <p className="text-4xl font-semibold tracking-tight text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/62">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="border-t border-white/10 p-5 text-sm leading-7 text-white/70">
                {DataValues.currentProof}
              </p>
            </div>
          </aside>
        </section>

        <section id="work" className="border-y border-[#171412]/10 bg-[#fbfaf7] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d83b2d]">Selected work</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Work cards that start with the artifact, then show the evidence.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[#5d5851] sm:text-base sm:leading-8 lg:justify-self-end">
                The layout treats each project as a case study: surface first, context second, proof always visible. It is meant to be scannable for hiring while still giving technical depth.
              </p>
            </div>

            <div className="grid gap-7">
              <ArtifactCard artifact={featuredArtifact} index={0} />
              {productArtifacts.map((artifact, index) => (
                <ArtifactCard key={artifact.title} artifact={artifact} index={index + 1} />
              ))}
            </div>
          </div>
        </section>

        <section id="capability" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.74fr_1.26fr] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d83b2d]">Capability framing</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                A product-minded engineer with research-grade habits.
              </h2>
              <p className="mt-6 text-sm leading-7 text-[#5d5851] sm:text-base sm:leading-8">
                The same operating style shows up across the portfolio: make the data legible, make the system repeatable, make the interface useful, and leave proof behind.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {DataValues.capabilities.map((capability) => (
                <article key={capability.title} className="border border-[#171412]/12 bg-white p-6">
                  <h3 className="text-2xl font-semibold tracking-tight">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5d5851]">{capability.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {capability.evidence.map((item) => (
                      <span key={item} className="bg-[#171412] px-3 py-1.5 text-xs font-semibold text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-[#171412] py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff9b91]">Experience</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Research context, product delivery, and secure systems.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-white/64">{DataValues.availability}</p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {DataValues.experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="grid gap-5 py-7 md:grid-cols-[0.72fr_0.92fr_1.36fr]">
                  <div>
                    <p className="text-sm font-semibold text-white">{item.period}</p>
                    <p className="mt-1 text-sm text-white/50">{item.location}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{item.role}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{item.company}</p>
                  </div>
                  <p className="text-sm leading-7 text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div className="border border-[#171412]/12 bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d83b2d]">Stack</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
                Tools chosen for the artifact, not the other way around.
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {DataValues.stack.map((item) => (
                  <span key={item} className="bg-[#f4f0e8] px-3 py-1.5 text-xs font-semibold text-[#4b4540] ring-1 ring-[#171412]/8">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div id="contact" className="bg-[#d83b2d] p-6 text-white shadow-[0_18px_70px_rgba(216,59,45,0.2)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
                Useful for teams that need research depth and product judgment in the same builder.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/80">{DataValues.availability}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href={`mailto:${DataValues.email}`} className="inline-flex min-h-11 items-center justify-center bg-white px-5 text-sm font-semibold text-[#171412] transition hover:bg-[#171412] hover:text-white">
                  Email
                </a>
                <a href={DataValues.githubURL} className="inline-flex min-h-11 items-center justify-center border border-white/35 px-5 text-sm font-semibold transition hover:bg-white hover:text-[#171412]">
                  GitHub
                </a>
                <a href={DataValues.linkedinURL} className="inline-flex min-h-11 items-center justify-center border border-white/35 px-5 text-sm font-semibold transition hover:bg-white hover:text-[#171412]">
                  LinkedIn
                </a>
                <a href={DataValues.twitterURL} className="inline-flex min-h-11 items-center justify-center border border-white/35 px-5 text-sm font-semibold transition hover:bg-white hover:text-[#171412]">
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
