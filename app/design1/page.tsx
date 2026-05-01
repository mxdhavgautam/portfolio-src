'use client'

import { DataValues } from '@/data/data-values'
import Link from 'next/link'

export default function Design1() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(1px solid rgba(255,255,255,0.1)), linear-gradient(90deg, rgba(255,255,255,0.1) 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 border-b border-[#222] bg-[#0a0a0a]/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-base font-medium hover:text-[#E53935] transition">
              {DataValues.appNameLong}
            </Link>
            <nav className="hidden md:flex gap-6 text-xs text-[#999]">
              <a href="#about" className="hover:text-white transition">ABOUT ME</a>
              <a href="#education" className="hover:text-white transition">EDUCATION</a>
              <a href="#experience" className="hover:text-white transition">EXPERIENCE</a>
              <a href="#projects" className="hover:text-white transition">PROJECTS</a>
            </nav>
          </div>
          <a 
            href={DataValues.resumeURL}
            className="px-4 py-2 border border-[#E53935] text-[#E53935] text-xs font-medium hover:bg-[#E53935]/10 transition"
          >
            RESUME
          </a>
        </div>
      </header>

      {/* Line numbers background */}
      <div className="fixed left-0 top-20 bottom-0 w-16 border-r border-[#222] text-[#444] text-xs leading-[1.6] font-mono select-none pointer-events-none overflow-hidden">
        <div className="flex flex-col pt-8">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="text-right pr-4">{String(i + 1).padStart(2, '0')}</div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="ml-16 relative z-10">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-2 text-xs text-[#E53935] font-mono">
            <div className="w-3 h-3 bg-[#E53935]"></div>
            PORTFOLIO / SYSTEMS BUILDER
          </div>

          {/* Hero Content */}
          <div className="grid grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#E53935] text-sm font-mono mb-4 flex items-center gap-2">
                {'>'} Hey! I&apos;m
              </div>
              <h1 className="text-6xl font-serif font-bold mb-4 leading-tight">
                {DataValues.headerName}
              </h1>
              <p className="text-sm text-[#999] font-mono mb-6 tracking-wider">
                {DataValues.headerTitle}
              </p>
              <p className="text-sm text-[#ccc] leading-relaxed mb-8 max-w-md">
                {DataValues.appDescription}
              </p>
              <div className="flex gap-4">
                <a href="#projects" className="px-6 py-3 bg-[#E53935] text-white text-sm font-medium hover:bg-[#c41c1c] transition">
                  → PROJECTS
                </a>
                <a href="#contact" className="px-6 py-3 border border-[#444] text-white text-sm font-medium hover:border-[#E53935] hover:text-[#E53935] transition">
                  CONTACT
                </a>
              </div>
            </div>

            {/* Code Editor Panel */}
            <div className="bg-[#1a1a1a] border border-[#222] rounded">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#222] bg-[#0f0f0f]">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#E53935]">main</span>
                  <span className="text-xs text-[#999]">portfolio.ts</span>
                </div>
                <span className="text-xs text-[#E53935]">active</span>
              </div>
              <div className="font-mono text-xs p-4 overflow-x-auto">
                <div className="text-[#999]">01 {'{}'}</div>
                <div className="text-[#999]">02   name: <span className="text-[#E53935]">&quot;{DataValues.headerName}&quot;</span>,</div>
                <div className="text-[#999]">03   role: <span className="text-[#E53935]">&quot;{DataValues.headerTitle}&quot;</span>,</div>
                <div className="text-[#999]">04   current: <span className="text-[#E53935]">&quot;Research Officer at A*STAR QInC&quot;</span>,</div>
                <div className="text-[#999]">05   focus: [</div>
                <div className="text-[#999]">06     <span className="text-[#E53935]">&quot;production full-stack products&quot;</span>,</div>
                <div className="text-[#999]">07     <span className="text-[#E53935]">&quot;agentic AI tooling&quot;</span>,</div>
                <div className="text-[#999]">08     <span className="text-[#E53935]">&quot;applied ML experiments&quot;</span>,</div>
                <div className="text-[#999]">09     <span className="text-[#E53935]">&quot;cloud and local runtime systems&quot;</span></div>
                <div className="text-[#999]">10   ],</div>
                <div className="text-[#999]">11   availability: <span className="text-[#E53935]">&quot;late June / July 2026&quot;</span></div>
                <div className="text-[#999]">12 {'}'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-[#222]">
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Product Builder', desc: 'Web, mobile, backend' },
              { label: 'AI/ML Engineer', desc: 'Models, agents, RAG' },
              { label: 'Systems Mindset', desc: 'Infra, data, tooling' },
              { label: 'Open to Roles', desc: 'Delhi, Gurgaon, remote' }
            ].map((metric, i) => (
              <div key={i} className="px-4 py-3 bg-[#1a1a1a] border border-[#222] rounded text-xs text-[#999]">
                <div className="font-mono text-[#E53935] mb-1">{metric.label}</div>
                <div className="text-[#666]">{metric.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#222]">
          <div className="mb-12">
            <h2 className="flex items-center gap-2 text-sm font-mono font-bold mb-6">
              <div className="w-3 h-3 bg-[#E53935]"></div>
              ABOUT ME
            </h2>
            <p className="text-sm text-[#ccc] leading-relaxed max-w-3xl mb-8">
              {DataValues.aboutMeDescription}
            </p>
          </div>

          {/* About Grid */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="px-4 py-3 bg-[#1a1a1a] border border-[#222] rounded">
                <div className="text-[#E53935] text-xs font-mono font-bold mb-3">{'>'} Current Role</div>
              <div className="text-[#E53935] text-xs font-mono mb-2">{DataValues.aboutMeStudentTitle}</div>
              <p className="text-xs text-[#999] leading-relaxed">{DataValues.aboutMeStudentDescription.substring(0, 120)}...</p>
            </div>
            <div className="px-4 py-3 bg-[#1a1a1a] border border-[#222] rounded">
                <div className="text-[#E53935] text-xs font-mono font-bold mb-3">{'>'} AI Builder</div>
              <div className="text-[#E53935] text-xs font-mono mb-2">{DataValues.aboutMeEnthusiastTitle}</div>
              <p className="text-xs text-[#999] leading-relaxed">{DataValues.aboutMeEnthusiastDescription.substring(0, 120)}...</p>
            </div>
            <div className="px-4 py-3 bg-[#1a1a1a] border border-[#222] rounded">
                <div className="text-[#E53935] text-xs font-mono font-bold mb-3">{'>'} Full-Stack</div>
              <div className="text-[#E53935] text-xs font-mono mb-2">{DataValues.aboutMeDeveloperTitle}</div>
              <p className="text-xs text-[#999] leading-relaxed">{DataValues.aboutMeDeveloperDescription.substring(0, 120)}...</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-xs font-mono font-bold text-[#E53935] mb-4">TECH STACK</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'TypeScript', 'Next.js', 'React', 'PyTorch', 'AWS', 'Docker', 'PostgreSQL', 'FastAPI', 'Agentic AI'].map((skill) => (
                <div key={skill} className="px-3 py-2 bg-[#1a1a1a] border border-[#333] rounded text-xs text-[#ccc] font-mono">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#222]">
          <h2 className="flex items-center gap-2 text-sm font-mono font-bold mb-8">
            <div className="w-3 h-3 bg-[#E53935]"></div>
            EXPERIENCE
          </h2>
          <div className="space-y-6">
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
              <div key={i} className="px-4 py-4 bg-[#1a1a1a] border border-[#222] rounded hover:border-[#E53935]/50 transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-bold text-white">{exp.title}</h3>
                    <div className="text-xs text-[#E53935] font-mono mt-1">{exp.role}</div>
                  </div>
                  <div className="text-xs text-[#666] font-mono">{exp.years}</div>
                </div>
                <p className="text-xs text-[#999] leading-relaxed">{exp.desc.substring(0, 200)}...</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#222]">
          <h2 className="flex items-center gap-2 text-sm font-mono font-bold mb-8">
            <div className="w-3 h-3 bg-[#E53935]"></div>
            EDUCATION
          </h2>
          <div className="space-y-4">
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
              <div key={i} className="px-4 py-3 bg-[#1a1a1a] border border-[#222] rounded">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">{edu.org}</h3>
                    <p className="text-xs text-[#999] mt-1">{edu.course}</p>
                  </div>
                  <div className="text-xs text-[#666] font-mono">{edu.year}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#222]">
          <h2 className="flex items-center gap-2 text-sm font-mono font-bold mb-8">
            <div className="w-3 h-3 bg-[#E53935]"></div>
            PROJECTS
          </h2>
          <div className="space-y-4">
            {[
              {
                title: DataValues.projectsOrg5Title,
                role: DataValues.projectsOrg5Role,
                years: DataValues.projectsOrg5Years,
                desc: DataValues.projectsOrg5Values,
                color: 'bg-[#E53935]'
              },
              {
                title: DataValues.projectsOrg2Title,
                role: DataValues.projectsOrg2Role,
                years: DataValues.projectsOrg2Years,
                desc: 'A production commerce platform for a small business with storefront, admin workflows, checkout, order management, analytics, protected APIs, payments, and email flows.',
                color: 'bg-[#333333]'
              },
              {
                title: DataValues.projectsOrg4Title,
                role: DataValues.projectsOrg4Role,
                years: DataValues.projectsOrg4Years,
                desc: DataValues.projectsOrg4Values,
                color: 'bg-[#666666]'
              },
              {
                title: DataValues.projectsOrg3Title,
                role: DataValues.projectsOrg3Role,
                years: DataValues.projectsOrg3Years,
                desc: DataValues.projectsOrg3Values,
                color: 'bg-[#666]'
              }
            ].map((proj, i) => (
              <div key={i} className="px-4 py-4 bg-[#1a1a1a] border border-[#222] rounded hover:border-[#E53935]/50 transition flex gap-4">
                <div className={`${proj.color} w-10 h-10 rounded flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {proj.title.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                    <span className="text-xs text-[#666] font-mono">{proj.years}</span>
                  </div>
                  <p className="text-xs text-[#E53935] font-mono mb-2">{proj.role}</p>
                  <p className="text-xs text-[#999] leading-relaxed">{proj.desc.substring(0, 160)}...</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#222]">
          <h2 className="flex items-center gap-2 text-sm font-mono font-bold mb-8">
            <div className="w-3 h-3 bg-[#E53935]"></div>
            CONTACT ME
          </h2>
          <p className="text-sm text-[#ccc] leading-relaxed max-w-2xl mb-8">
            {DataValues.contactDescription}
          </p>
          <div className="px-6 py-4 bg-[#1a1a1a] border border-[#222] rounded w-fit">
            <div className="text-xs text-[#666] font-mono mb-2">EMAIL</div>
            <a href={`mailto:${DataValues.contactEmail}`} className="text-[#E53935] font-mono font-bold hover:underline">
              {DataValues.contactEmail}
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-[#222] mt-20">
          <div className="flex justify-between items-center">
            <p className="text-xs text-[#666] font-mono">
              {DataValues.copyright}
            </p>
            <div className="flex gap-6 font-mono text-xs text-[#666]">
              <a href={DataValues.githubURL} className="hover:text-[#E53935] transition">
                GitHub
              </a>
              <a href={DataValues.linkedinURL} className="hover:text-[#E53935] transition">
                LinkedIn
              </a>
              <a href={`mailto:${DataValues.contactEmail}`} className="hover:text-[#E53935] transition">
                Email
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
