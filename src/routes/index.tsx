import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import {
  Rocket, Zap, Globe, CheckCircle2, TrendingUp,
  ArrowRight, Star, Award, Users
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: 'NexonAce — Build a Website That Actually Converts' },
      { name: 'description', content: 'Premium websites for global startups and businesses. Fast, modern, engineered for growth.' },
    ],
  }),
})

// ─── Brand-consistent Unsplash images ──────────────────────────────
const IMG = {
  hero: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80&auto=format&fit=crop',
  dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
  coding: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop',
}

function LandingPage() {
  return (
    <main className="flex flex-col">

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,51,153,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,51,153,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Glow orbs */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-[var(--brand-blue)] opacity-[0.06] rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[var(--brand-orange)] opacity-[0.06] rounded-full blur-[100px]" />

        <div className="page-wrap relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
          {/* TEXT COLUMN */}
          <div className="rise-in">
            {/* Eyebrow badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 px-5 py-2">
              <span className="flex h-2 w-2 rounded-full bg-[var(--brand-orange)] shadow-[0_0_8px_var(--brand-orange)]" />
              <span className="text-xs font-black uppercase tracking-widest text-[var(--brand-blue)]">
                Web Design & Development for SaaS & B2B Companies
              </span>
            </div>

            <h1 className="display-title text-5xl font-extrabold leading-[1.08] md:text-6xl lg:text-7xl text-[var(--sea-ink)] mb-8">
              Build Websites That{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--brand-orange)]">Actually</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-[var(--brand-orange)]/10 -z-0 rounded" />
              </span>{' '}
              <span className="text-[var(--brand-blue)]">Convert.</span>
            </h1>

            <p className="mb-12 max-w-lg text-lg leading-relaxed text-[var(--sea-ink-soft)]">
              We craft high-performance, premium websites for global startups, SMEs, and institutions.
              Fast delivery. Measurable results. No compromise.
            </p>

            <div className="flex flex-wrap gap-5 mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_12px_40px_-8px_var(--brand-orange)] transition-all hover:scale-105 hover:shadow-[0_20px_50px_-8px_var(--brand-orange)] active:scale-95"
                style={{ color: 'white' }}
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-8">
              {[
                { icon: <Star size={14} className="text-yellow-500" fill="currentColor" />, text: '4.8 Rating' },
                { icon: <Award size={14} className="text-[var(--brand-blue)]" />, text: '25+ Projects' },
                { icon: <Users size={14} className="text-[var(--brand-orange)]" />, text: '25 Global Clients' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-[var(--sea-ink-soft)]">
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="relative hidden lg:block rise-in [animation-delay:150ms]">
            {/* Main hero image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,51,153,0.25)]">
              <img
                src={IMG.hero}
                alt="Modern workspace"
                className="w-full h-[520px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-blue)]/30 to-transparent" />
            </div>

            {/* Floating stat card - top right */}
            <div className="absolute -top-6 -right-8 bg-white rounded-3xl p-5 shadow-2xl border border-[var(--line)] flex items-center gap-4 min-w-[180px]">
              <div className="w-12 h-12 bg-[var(--brand-orange)]/10 rounded-2xl flex items-center justify-center">
                <TrendingUp className="text-[var(--brand-orange)]" size={22} />
              </div>
              <div>
                <div className="text-2xl font-black text-[var(--sea-ink)]">+240%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--sea-ink-soft)]">Avg. Conversion</div>
              </div>
            </div>

            {/* Floating stat card - bottom left */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-3xl p-5 shadow-2xl border border-[var(--line)] flex items-center gap-4 min-w-[180px]">
              <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-2xl flex items-center justify-center">
                <Zap className="text-[var(--brand-blue)]" size={22} />
              </div>
              <div>
                <div className="text-2xl font-black text-[var(--sea-ink)]">0.8s</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--sea-ink-soft)]">Avg Load Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ LOGOS / TRUST BAR ━━━━━━━━━━━━━━━━ */}
      <section className="border-y border-[var(--line)] bg-[var(--foam)] py-12">
        <div className="page-wrap">
          <p className="mb-8 text-center text-[10px] font-black uppercase tracking-[0.35em] text-[var(--sea-ink-soft)]/50">
            Trusted by teams worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 opacity-30">
            {['TechFlow', 'ApexGroup', 'SwiftScale', 'GlobalNexus', 'VantageIT'].map((logo) => (
              <span key={logo} className="text-2xl font-black italic tracking-tight text-[var(--sea-ink)]">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ SERVICES ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-32">
        <div className="mb-20 max-w-2xl">
          <div className="island-kicker mb-5">What we do</div>
          <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight">
            End-to-End Digital <br />
            <span className="text-[var(--brand-orange)]">Growth Solutions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ServiceCard
            img={IMG.coding}
            icon={<Globe className="text-[var(--brand-blue)]" size={24} />}
            title="Website Development"
            desc="Landing pages, corporate profiles, and e-commerce designed to turn visitors into paying customers."
            tags={['Landing Pages', 'Corporate Sites', 'E-commerce']}
          />
          <ServiceCard
            img={IMG.dashboard}
            icon={<Rocket className="text-[var(--brand-orange)]" size={24} />}
            title="Web Applications"
            desc="Custom SaaS dashboards and internal systems engineered for scale, speed, and security."
            tags={['SaaS MVP', 'Dashboards', 'CMS Systems']}
            featured
          />
          <ServiceCard
            img={IMG.office}
            icon={<Zap className="text-yellow-500" size={24} />}
            title="Performance & SEO"
            desc="Core Web Vitals, technical SEO, and lighthouse-perfect scores that keep you ranking #1."
            tags={['Speed Audit', 'SEO Strategy', 'Core Web Vitals']}
          />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FEATURED CONCEPT PROJECTS ━━━━━━━━━━━━━━━━ */}
      <section className="relative py-32 bg-[var(--sea-ink)] overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,102,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,102,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--brand-blue)] opacity-[0.06] rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--brand-orange)] opacity-[0.05] rounded-full blur-[120px]" />

        <div className="page-wrap relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[var(--brand-orange)] shadow-[0_0_8px_var(--brand-orange)]" />
              <span className="text-xs font-black uppercase tracking-widest text-white/60">
                Selected Work
              </span>
            </div>
            <h2 className="display-title text-4xl font-extrabold md:text-6xl text-white leading-tight mb-6">
              Concept Projects That{' '}
              <span className="text-[var(--brand-orange)]">Prove Quality.</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/40">
              Real execution. Real standards. Concept work that showcases our thinking, process, and what we'll bring to your project.
            </p>
          </div>

          {/* Project 1 — E-Commerce Redesign (Left image) */}
          <div className="mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Big Screenshot */}
              <div className="relative group">
                <div className="rounded-[2rem] overflow-hidden shadow-[0_32px_80px_-16px_rgba(0,0,0,0.5)] border border-white/5 transition-all duration-500 group-hover:shadow-[0_40px_100px_-16px_rgba(255,102,0,0.2)]">
                  <img
                    src="/case-ecommerce.png"
                    alt="E-Commerce Platform Concept"
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[2rem]" />
                </div>
                <div className="absolute top-5 left-5 rounded-full bg-[var(--sea-ink)]/80 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                  ✦ Concept Project
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--brand-orange)] mb-3 block">
                  SaaS Landing Page Redesign
                </span>
                <h3 className="display-title text-3xl font-extrabold md:text-4xl text-white leading-tight mb-5">
                  E-Commerce Platform — Redesigned for Conversion
                </h3>
                <p className="text-white/40 text-base leading-relaxed mb-8">
                  A concept exploring how single-page checkout, headless architecture, and mobile-first UX can drastically reduce cart abandonment rates.
                </p>

                {/* Design Target Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                  {[
                    { value: '<1s', label: 'Target Load' },
                    { value: '1-Step', label: 'Checkout Flow' },
                    { value: '30+', label: 'Devices Tested' },
                    { value: '98', label: 'Lighthouse Score' },
                  ].map(m => (
                    <div key={m.label} className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center hover:bg-white/10 transition-colors duration-300">
                      <div className="text-2xl font-black text-[var(--brand-orange)]">{m.value}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-white/30 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-[var(--brand-orange)] hover:border-[var(--brand-orange)] hover:shadow-[0_12px_40px_-8px_var(--brand-orange)] hover:scale-105 active:scale-95"
                  style={{ color: 'white' }}
                >
                  View Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 — Analytics Dashboard (Right image) */}
          <div className="mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-400 mb-3 block">
                  Fintech Dashboard UI
                </span>
                <h3 className="display-title text-3xl font-extrabold md:text-4xl text-white leading-tight mb-5">
                  Analytics Dashboard — From Data Overload to Insight
                </h3>
                <p className="text-white/40 text-base leading-relaxed mb-8">
                  An internal build exploring how SaaS dashboards can move beyond spreadsheet-style tables toward intuitive, drag-and-drop widget systems.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                  {[
                    { value: '<3 min', label: 'Onboarding' },
                    { value: '20+', label: 'Custom Widgets' },
                    { value: 'AAA', label: 'Accessibility' },
                    { value: '2', label: 'Theme Modes' },
                  ].map(m => (
                    <div key={m.label} className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center hover:bg-white/10 transition-colors duration-300">
                      <div className="text-2xl font-black text-blue-400">{m.value}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-white/30 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-[var(--brand-blue)] hover:border-[var(--brand-blue)] hover:shadow-[0_12px_40px_-8px_var(--brand-blue)] hover:scale-105 active:scale-95"
                  style={{ color: 'white' }}
                >
                  View Case Study <ArrowRight size={14} />
                </Link>
              </div>

              <div className="relative group order-1 lg:order-2">
                <div className="rounded-[2rem] overflow-hidden shadow-[0_32px_80px_-16px_rgba(0,0,0,0.5)] border border-white/5 transition-all duration-500 group-hover:shadow-[0_40px_100px_-16px_rgba(0,51,153,0.3)]">
                  <img
                    src="/case-saas.png"
                    alt="Analytics Dashboard Concept"
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[2rem]" />
                </div>
                <div className="absolute top-5 left-5 rounded-full bg-[var(--sea-ink)]/80 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                  ✦ Concept Project
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 — Fintech (Full width) */}
          <div className="relative group">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/5">
              <div className="relative h-[360px] md:h-[440px] overflow-hidden">
                <img
                  src="/case-fintech.png"
                  alt="Fintech Platform Concept"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--sea-ink)] via-[var(--sea-ink)]/60 to-transparent" />
                <div className="absolute top-6 left-6 rounded-full bg-[var(--sea-ink)]/80 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                  ✦ Concept Project
                </div>
              </div>

              <div className="relative -mt-44 z-10 p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-400 mb-3 block">
                      Startup Marketing Website
                    </span>
                    <h3 className="display-title text-3xl font-extrabold md:text-4xl text-white leading-tight mb-4">
                      Fintech Launch — Building Trust Through Design
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-lg">
                      A concept exploring how design itself builds trust for fintech startups — from transparent pricing UIs to security-first mobile dashboards.
                    </p>
                    <Link
                      to="/case-studies"
                      className="inline-flex items-center gap-2 rounded-full bg-purple-500 px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:scale-105 hover:shadow-[0_12px_40px_-8px_rgba(139,92,246,0.5)] active:scale-95"
                      style={{ color: 'white' }}
                    >
                      View Case Study <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { value: '100%', label: 'Mobile Ready' },
                      { value: 'AA+', label: 'WCAG Level' },
                      { value: 'Live', label: 'Data Sync' },
                      { value: '2', label: 'Theme Modes' },
                    ].map(m => (
                      <div key={m.label} className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                        <div className="text-2xl font-black text-purple-400">{m.value}</div>
                        <div className="text-[9px] font-bold uppercase tracking-widest text-white/30 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* See All CTA */}
          <div className="text-center mt-20">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--brand-orange)] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_16px_50px_-8px_var(--brand-orange)] transition-all hover:scale-105 active:scale-95"
              style={{ color: 'white' }}
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>

          {/* Transparency note */}
          <p className="text-center mt-8 text-xs text-white/20">
            All projects shown are independent concept work showcasing our design capabilities.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ WHY US ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--foam)] py-32">
        <div className="page-wrap grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={IMG.team}
                alt="Our global team"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 flex items-center justify-between shadow-xl">
              <div className="grid grid-cols-3 gap-8 text-center w-full">
                {[
                  { value: '100+', label: 'Deliveries' },
                  { value: '4.9★', label: 'Client Rating' },
                  { value: '24/7', label: 'Support' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-[var(--brand-blue)]">{s.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--sea-ink-soft)] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <div className="island-kicker mb-5">Why NexonAce</div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight mb-8">
              Enterprise Quality. <br />
              <span className="text-[var(--brand-orange)]">Startup Agility.</span>
            </h2>
            <p className="text-[var(--sea-ink-soft)] text-lg leading-relaxed mb-12">
              We work the way the best Silicon Valley teams do — fast, focused, and always pushing for more.
              Every project is treated as if it were our own business.
            </p>
            <div className="space-y-5">
              {[
                { title: 'Conversion-First Design', desc: 'Every pixel earns its place by driving measurable growth.' },
                { title: 'Modern Tech Stack', desc: 'React, TanStack, Vite, Tailwind — the tools of industry leaders.' },
                { title: 'Global Pricing', desc: 'World-class quality at a price that makes sense for your stage.' },
                { title: 'Fast Turnaround', desc: 'Most projects shipped in 2–4 weeks, not 6 months.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--brand-orange)]/10 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-[var(--brand-orange)]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[var(--sea-ink)] mb-0.5">{item.title}</h4>
                    <p className="text-sm text-[var(--sea-ink-soft)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ PROCESS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--sea-ink)] py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)] opacity-5 blur-3xl rounded-full" />
        <div className="page-wrap">
          <div className="text-center mb-20">
            <div className="island-kicker mb-5 text-white/40">How it works</div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-white">4 Steps to Launch.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'We deep-dive into your goals, users, and competitive landscape.', color: 'text-blue-400' },
              { num: '02', title: 'Design', desc: 'Conversion-focused UI/UX prototypes crafted in modern tools.', color: 'text-[var(--brand-orange)]' },
              { num: '03', title: 'Build', desc: 'Clean, fast code using industry best-in-class frameworks.', color: 'text-blue-400' },
              { num: '04', title: 'Launch', desc: 'Global deployment with SEO ready and performance tested.', color: 'text-[var(--brand-orange)]' },
            ].map((step, i) => (
              <div key={i} className="relative group">
                {i < 3 && (
                  <div className="absolute top-8 left-full w-full h-px bg-white/10 hidden md:block" />
                )}
                <div className={`text-7xl font-black ${step.color} opacity-10 mb-4 group-hover:opacity-30 transition-all`}>
                  {step.num}
                </div>
                <h3 className="text-white font-extrabold text-xl mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FINAL CTA ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-32">
        <div className="relative rounded-[4rem] overflow-hidden">
          <img
            src={IMG.office}
            alt="Premium office"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-[var(--brand-blue)]/10" />
          <div className="relative z-10 p-16 md:p-28 text-center">
            <div className="island-kicker mb-6">Your Growth Starts Here</div>
            <h2 className="display-title text-5xl font-extrabold md:text-7xl text-[var(--sea-ink)] leading-tight mb-8">
              Let's Build Something <br />
              <span className="text-[var(--brand-orange)]">Extraordinary.</span>
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-xl text-[var(--sea-ink-soft)]">
              Free consultation. No obligation. Just results.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-12 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-110 hover:bg-[var(--brand-orange)] [color:white!important]"
                style={{ color: 'white' }}
              >
                Get Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── Sub-components ─────────────────────────────────────────────────

function ServiceCard({ img, icon, title, desc, tags, featured = false }: any) {
  return (
    <div className={`group flex flex-col rounded-[2.5rem] overflow-hidden border transition-all hover:-translate-y-2 hover:shadow-2xl ${featured
      ? 'border-[var(--brand-orange)]/40 shadow-lg shadow-[var(--brand-orange)]/10'
      : 'border-[var(--line)] bg-white'
      }`}>
      {/* Card image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className={`absolute inset-0 ${featured ? 'bg-[var(--brand-orange)]/20' : 'bg-[var(--brand-blue)]/10'}`} />
        {/* Icon bubble */}
        <div className="absolute bottom-4 left-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
          {icon}
        </div>
        {featured && (
          <div className="absolute top-4 right-4 rounded-full bg-[var(--brand-orange)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
            Most Popular
          </div>
        )}
      </div>
      {/* Card body */}
      <div className="flex flex-col flex-grow p-8 bg-white">
        <h3 className="text-xl font-extrabold text-[var(--sea-ink)] mb-3">{title}</h3>
        <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-6 flex-grow">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t: string) => (
            <span key={t} className="rounded-full bg-[var(--foam)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
