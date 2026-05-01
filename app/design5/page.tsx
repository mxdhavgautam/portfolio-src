'use client'

import { DataValues } from '@/data/data-values'

export default function Design5() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b-2 border-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm font-bold tracking-wider">
            {DataValues.appNameLong.toUpperCase()}
          </div>
          <nav className="flex gap-8 text-xs font-bold tracking-widest">
            <a href="#about" className="hover:bg-white hover:text-black px-2 py-1 transition">ABOUT</a>
            <a href="#work" className="hover:bg-white hover:text-black px-2 py-1 transition">WORK</a>
            <a href="#contact" className="hover:bg-white hover:text-black px-2 py-1 transition">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="border-b-2 border-white p-12">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-bold tracking-widest mb-8 border-l-4 border-white pl-4">
                SYSTEMS BUILDER
              </div>
              <h1 className="text-7xl font-black mb-8 leading-tight">
                {DataValues.headerName}
              </h1>
              <h2 className="text-sm font-bold tracking-wider mb-8 text-white/80">
                {DataValues.headerTitle}
              </h2>
              <p className="text-sm leading-relaxed mb-8 max-w-md">
                Production web, AI automation, applied ML, mobile/backend systems, and research infrastructure. This portfolio is about the range of work I can ship, not one current workplace.
              </p>
              <div className="flex gap-4">
                <a href="#work" className="px-6 py-3 bg-white text-black font-bold text-xs tracking-wider hover:bg-white/80 transition">
                  → VIEW WORK
                </a>
                <a href="#contact" className="px-6 py-3 border-2 border-white font-bold text-xs tracking-wider hover:bg-white hover:text-black transition">
                  CONTACT
                </a>
              </div>
            </div>

            <div className="border-l-4 border-white pl-8">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold tracking-widest mb-2">RANGE</p>
                  <p className="text-lg font-bold">Full-stack, AI/ML, Data, GenAI</p>
                  <p className="text-xs text-white/60 mt-2">Currently a Research Officer, but the portfolio leads with shipped systems.</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest mb-2">START WINDOW</p>
                  <p className="text-sm">Late June / July 2026</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest mb-2">PROOF POINTS</p>
                  <p className="text-sm">21 API routes in production commerce</p>
                  <p className="text-sm">28-file auth/payment/API test suite</p>
                  <p className="text-sm">63k-image deep learning study</p>
                  <p className="text-sm">Client-side MV3 media runtime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-b-2 border-white p-12">
          <h2 className="text-sm font-bold tracking-widest mb-8">◉ ABOUT</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 space-y-4">
              <p className="text-sm leading-relaxed">
                {DataValues.aboutMeDescription}
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                {DataValues.aboutMeBiographyDescription}
              </p>
            </div>
            <div className="border-l-4 border-white pl-6 space-y-6">
              <div>
                <p className="text-xs font-bold tracking-widest mb-2">FOCUS</p>
                <p className="text-xs text-white/80 leading-relaxed">
                  {DataValues.aboutMeGoalDescription}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest mb-2">LOCATION</p>
                <p className="text-xs text-white/80">Singapore, India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-b-2 border-white p-12">
          <h2 className="text-sm font-bold tracking-widest mb-8">◉ TECH STACK</h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              { category: 'ML/AI', items: ['Python', 'PyTorch', 'TensorFlow', 'RAG'] },
              { category: 'BACKEND', items: ['FastAPI', 'NestJS', 'PostgreSQL', 'AWS'] },
              { category: 'FRONTEND', items: ['TypeScript', 'React', 'Next.js', 'Tailwind'] },
              { category: 'DEVOPS', items: ['Docker', 'Lambda', 'S3', 'EC2'] }
            ].map((stack, i) => (
              <div key={i} className="space-y-3">
                <p className="text-xs font-bold tracking-widest border-b-2 border-white pb-2">
                  {stack.category}
                </p>
                {stack.items.map((item) => (
                  <p key={item} className="text-xs font-bold">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="border-b-2 border-white p-12">
          <h2 className="text-sm font-bold tracking-widest mb-8">◉ EXPERIENCE</h2>
          <div className="space-y-8">
            {[
              {
                title: DataValues.experienceOrg4Title,
                role: DataValues.experienceOrg4Role,
                years: DataValues.experienceOrg4Years,
                desc: DataValues.experienceOrg4Vales
              },
              {
                title: DataValues.experienceOrg3Title,
                role: DataValues.experienceOrg3Role,
                years: DataValues.experienceOrg3Years,
                desc: DataValues.experienceOrg3Vales
              },
              {
                title: DataValues.experienceOrg2Title,
                role: DataValues.experienceOrg2Role,
                years: DataValues.experienceOrg2Years,
                desc: DataValues.experienceOrg2Vales
              },
              {
                title: DataValues.experienceOrg1Title,
                role: DataValues.experienceOrg1Role,
                years: DataValues.experienceOrg1Years,
                desc: DataValues.experienceOrg1Vales
              }
            ].map((exp, i) => (
              <div key={i} className="border-l-4 border-white pl-6 pb-6 last:pb-0">
                <p className="text-sm font-bold mb-2">{exp.title}</p>
                <p className="text-xs font-bold text-white/60 mb-1">{exp.role}</p>
                <p className="text-xs text-white/60 mb-3">{exp.years}</p>
                <p className="text-xs leading-relaxed text-white/70">
                  {exp.desc.substring(0, 200)}...
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="border-b-2 border-white p-12">
          <h2 className="text-sm font-bold tracking-widest mb-8">◉ PROJECTS</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                title: DataValues.projectsOrg5Title,
                desc: DataValues.projectsOrg5Values,
                year: DataValues.projectsOrg5Years
              },
              {
                title: DataValues.projectsOrg2Title,
                desc: 'A production commerce platform for a small business with storefront, admin workflows, checkout, order management, analytics, protected APIs, payments, and email flows.',
                year: DataValues.projectsOrg2Years
              },
              {
                title: DataValues.projectsOrg4Title,
                desc: DataValues.projectsOrg4Values,
                year: DataValues.projectsOrg4Years
              },
              {
                title: DataValues.projectsOrg3Title,
                desc: DataValues.projectsOrg3Values,
                year: DataValues.projectsOrg3Years
              }
            ].map((proj, i) => (
              <div key={i} className="border-2 border-white p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-black flex-1">{proj.title}</h3>
                  <p className="text-xs text-white/60 font-bold ml-4">{proj.year}</p>
                </div>
                <p className="text-xs leading-relaxed text-white/80 mb-4">
                  {proj.desc.substring(0, 150)}...
                </p>
                <a href="#" className="text-xs font-bold text-white hover:bg-white hover:text-black px-2 py-1 transition inline-block">
                  → LEARN MORE
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-b-2 border-white p-12">
          <h2 className="text-sm font-bold tracking-widest mb-8">◉ EDUCATION</h2>
          <div className="space-y-6">
            {[
              {
                org: DataValues.educationOrg2Title,
                course: DataValues.educationOrg2Course1Name,
                year: DataValues.educationOrg2Course1Year
              },
              {
                org: DataValues.educationOrg1Title,
                course: DataValues.educationOrg1Course1Name,
                year: DataValues.educationOrg1Course1Year
              }
            ].map((edu, i) => (
              <div key={i} className="border-l-4 border-white pl-6">
                <p className="text-sm font-bold mb-2">{edu.org}</p>
                <p className="text-xs text-white/80 mb-1">{edu.course}</p>
                <p className="text-xs text-white/60">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-b-2 border-white p-12">
          <h2 className="text-sm font-bold tracking-widest mb-8">◉ CONTACT</h2>
          <div className="max-w-xl">
            <p className="text-sm leading-relaxed mb-8">
              {DataValues.contactDescription}
            </p>
            <div className="border-l-4 border-white pl-6 space-y-4">
              <div>
                <p className="text-xs font-bold tracking-widest mb-2">EMAIL</p>
                <a 
                  href={`mailto:${DataValues.contactEmail}`}
                  className="text-sm font-bold hover:bg-white hover:text-black px-2 py-1 transition inline-block"
                >
                  {DataValues.contactEmail}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest mb-3">SOCIAL</p>
                <div className="flex gap-4">
                  <a href={DataValues.githubURL} className="text-xs font-bold hover:bg-white hover:text-black px-3 py-1 transition border border-white">
                    GH
                  </a>
                  <a href={DataValues.linkedinURL} className="text-xs font-bold hover:bg-white hover:text-black px-3 py-1 transition border border-white">
                    LI
                  </a>
                  <a href={`mailto:${DataValues.contactEmail}`} className="text-xs font-bold hover:bg-white hover:text-black px-3 py-1 transition border border-white">
                    ML
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-12 border-t-2 border-white">
          <p className="text-xs font-bold tracking-widest">
            {DataValues.copyright} — BUILT WITH NEXT.JS & TYPESCRIPT
          </p>
        </footer>
      </main>
    </div>
  )
}
