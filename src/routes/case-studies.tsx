import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, TrendingUp, Zap,
  ShoppingCart, BarChart3, Wallet, Lightbulb,
  CheckCircle2, Target, Layers, Globe, Eye, Cpu, Sparkles,
  Search, PenTool, Layout, Code2, Rocket, MessageCircle,
  UserCheck, Handshake, Timer, ShieldCheck,
} from 'lucide-react'

export const Route = createFileRoute('/case-studies')({
  component: CaseStudiesPage,
  head: () => ({
    meta: [
      { title: 'Selected Work & Concept Projects — NexonAce' },
      { name: 'description', content: 'Explore concept projects, redesigns, and internal builds that showcase NexonAce\'s thinking, process, and quality standards in web design & development.' },
    ],
  }),
})

// ─── Project Data (Concept Work) ────────────────────────────────────
const projects = [
  {
    id: 'swiftcart',
    category: 'SaaS Landing Page',
    label: 'Concept Project',
    title: 'SaaS E-Commerce Platform — Redesigned for Conversion',
    excerpt: 'A concept redesign exploring how a modern e-commerce SaaS platform could reduce cart abandonment through a streamlined single-page checkout, headless architecture, and mobile-first UX patterns.',
    image: '/case-ecommerce.png',
    icon: <ShoppingCart size={22} />,
    color: 'var(--brand-orange)',
    colorLight: 'var(--brand-orange-light)',
    problem: {
      title: 'The Problem We Explored',
      description: 'Most e-commerce platforms still rely on multi-step checkout flows that create friction. With average cart abandonment rates above 70% industry-wide, we explored how a conversion-first redesign could transform the buyer experience — from landing page to confirmation.',
      points: [
        'Multi-step checkout flows causing 70%+ abandonment industry-wide',
        'Slow page loads (5s+ average) destroying mobile conversion rates',
        'Generic product pages with zero personalization or smart recommendations',
        'Poor Core Web Vitals scores hurting organic search visibility',
      ],
    },
    solution: {
      title: 'Our Design Approach',
      description: 'We designed a headless storefront concept using React and Next.js, featuring a single-page checkout with smart autofill, real-time shipping estimations, and AI-style product recommendations. Every design choice was driven by conversion psychology and performance benchmarks.',
      points: [
        'Headless architecture concept achieving sub-second load times in prototyping',
        'Single-page checkout designed to reduce abandonment by eliminating friction',
        'Smart product recommendation UI increasing average order value potential',
        'Mobile-first responsive design tested across 30+ device configurations',
      ],
    },
    metrics: [
      { value: '<1s', label: 'Target Load Time' },
      { value: '1-step', label: 'Checkout Flow' },
      { value: '30+', label: 'Devices Tested' },
      { value: '98', label: 'Lighthouse Score' },
    ],
    tags: ['E-Commerce', 'React', 'Next.js', 'UX Redesign', 'Performance'],
    scope: 'Full redesign concept',
  },
  {
    id: 'growthhub',
    category: 'Fintech Dashboard',
    label: 'Concept Project',
    title: 'Analytics Dashboard — From Data Overload to Actionable Insight',
    excerpt: 'An internal build exploring how SaaS analytics dashboards can move beyond spreadsheet-style tables toward intuitive, drag-and-drop widget systems with real-time data visualization.',
    image: '/case-saas.png',
    icon: <BarChart3 size={22} />,
    color: 'var(--brand-blue)',
    colorLight: 'var(--brand-blue-light)',
    problem: {
      title: 'The Problem We Explored',
      description: 'Most SaaS dashboards overwhelm users with raw data and complex navigation. New users churn because time-to-value is too long, onboarding is confusing, and there\'s no clear path to the "aha moment." We explored how to make complex analytics feel effortless.',
      points: [
        'Average SaaS dashboard takes 30+ minutes to set up — most users give up',
        'Data tables with no visual hierarchy make insights impossible to find',
        'No guided onboarding means users don\'t discover key features',
        'One-size-fits-all layouts that ignore different user roles and needs',
      ],
    },
    solution: {
      title: 'Our Design Approach',
      description: 'We built a concept dashboard with drag-and-drop customizable widgets, interactive charts, and a role-based onboarding flow designed to reduce time-to-value to under 3 minutes. The UI was designed to make data feel like stories, not spreadsheets.',
      points: [
        'Drag-and-drop widget system letting users build their own views',
        'Interactive data visualization with charts, heatmaps, and funnels',
        'Guided onboarding flow designed to deliver value in under 3 minutes',
        'Role-based layouts adapting the UI to different user personas',
      ],
    },
    metrics: [
      { value: '<3 min', label: 'Target Onboarding' },
      { value: 'Drag & Drop', label: 'Custom Widgets' },
      { value: 'WCAG AA', label: 'Accessibility' },
      { value: 'Dark + Light', label: 'Theme Support' },
    ],
    tags: ['SaaS', 'Dashboard', 'Data Viz', 'React', 'UX Design'],
    scope: 'Full UI/UX concept',
  },
  {
    id: 'corporaterebuild',
    category: 'Corporate Website',
    label: 'Concept Project',
    title: 'Corporate Website — Turning a Brochure Site Into a Growth Engine',
    excerpt: 'A redesign concept showing how a dated corporate website could be transformed into a modern, SEO-optimized platform that generates leads, builds authority, and actually converts visitors into qualified inquiries.',
    image: '/case-school.png',
    icon: <Globe size={22} />,
    color: '#10b981',
    colorLight: '#ecfdf5',
    problem: {
      title: 'The Problem We Explored',
      description: 'Corporate websites are often treated as digital brochures — static, slow, and ignored after launch. They rank poorly because they were never built with SEO in mind. They don\'t convert because they speak to the company, not the customer\'s problems. We explored what a results-driven rebuild looks like.',
      points: [
        'Static "brochure" websites with no conversion strategy or lead capture',
        'Zero SEO foundation — no structured data, poor content hierarchy, slow loads',
        'Content that talks about the company instead of solving visitor problems',
        'No analytics or tracking to understand what\'s working and what\'s not',
      ],
    },
    solution: {
      title: 'Our Design Approach',
      description: 'We designed a conversion-focused corporate platform with modular page sections, integrated lead capture, structured FAQ schemas for SEO, and a content strategy that positions the company as a trusted authority. Every section earns its place on the page.',
      points: [
        'Modular, component-based page design for easy content management',
        'Integrated lead capture with smart forms and CTA optimization',
        'Structured data and technical SEO built into the architecture from day one',
        'Performance-first build targeting 95+ Lighthouse scores across all pages',
      ],
    },
    metrics: [
      { value: '95+', label: 'Lighthouse Target' },
      { value: 'SEO-First', label: 'Architecture' },
      { value: 'Modular', label: 'Component System' },
      { value: 'Multi-CTA', label: 'Lead Capture' },
    ],
    tags: ['Corporate', 'SEO', 'Lead Gen', 'Responsive', 'CMS'],
    scope: 'Strategic redesign concept',
  },
  {
    id: 'finanzaglobal',
    category: 'Startup Marketing',
    label: 'Concept Project',
    title: 'Fintech Launch Site — Building Trust Before the First Transaction',
    excerpt: 'A concept exploring how a new fintech startup could establish credibility and trust through design — from transparent pricing UIs to security-first merchant dashboards that make complexity feel simple.',
    image: '/case-fintech.png',
    icon: <Wallet size={22} />,
    color: '#8b5cf6',
    colorLight: '#f5f3ff',
    problem: {
      title: 'The Problem We Explored',
      description: 'Fintech startups face a unique challenge: they need users to trust them with money before they have a track record. Most fintech sites rely on generic claims like "secure" and "fast" without showing what that actually looks like. We explored how design itself can build trust.',
      points: [
        'Generic "we\'re secure" copy that doesn\'t build real user confidence',
        'Complex financial data presented in ways that confuse instead of inform',
        'No mobile experience — users can\'t manage their money on the go',
        'Dark patterns and hidden fees eroding trust across the industry',
      ],
    },
    solution: {
      title: 'Our Design Approach',
      description: 'We designed a fintech platform concept prioritizing radical transparency — real-time transaction monitoring, clear fee breakdowns, and a mobile-first companion app. The design language was crafted to feel premium, trustworthy, and effortlessly simple.',
      points: [
        'Trust-first design language with transparent pricing and clear fee structures',
        'Real-time dashboard with transaction monitoring and instant notifications',
        'Mobile-first companion app designed for on-the-go financial management',
        'Dark mode, accessibility compliance (WCAG 2.1 AA), and responsive design',
      ],
    },
    metrics: [
      { value: 'Mobile-First', label: 'Design Approach' },
      { value: 'WCAG 2.1', label: 'Accessibility' },
      { value: 'Real-time', label: 'Data Updates' },
      { value: 'Dark + Light', label: 'Theme Modes' },
    ],
    tags: ['FinTech', 'Startup', 'Mobile App', 'Trust Design', 'Dashboard'],
    scope: 'Launch concept & design system',
  },
]

// ─── Filter Categories ──────────────────────────────────────────────
const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

// ─── Main Page Component ────────────────────────────────────────────
function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <main className="flex flex-col">

      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[var(--sea-ink)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,102,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,102,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-orange)] opacity-[0.06] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-blue)] opacity-[0.08] rounded-full blur-[120px]" />

        <div className="page-wrap relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm rise-in">
            <span className="flex h-2 w-2 rounded-full bg-[var(--brand-orange)] shadow-[0_0_8px_var(--brand-orange)]" />
            <span className="text-xs font-black uppercase tracking-widest text-white/70">
              Portfolio & Concept Work
            </span>
          </div>

          <h1 className="display-title text-5xl font-extrabold leading-[1.08] md:text-6xl lg:text-7xl text-white mb-8 rise-in rise-in-2">
            Selected Work &{' '}
            <br className="hidden lg:block" />
            <span className="text-[var(--brand-orange)]">Concept Projects.</span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/50 mb-6 rise-in rise-in-3">
            We're a young agency, but not beginners. These projects showcase our thinking,
            process, and quality standards through concept work, redesigns, and internal builds.
          </p>

          {/* Trust note */}
          <p className="max-w-xl text-xs text-white/25 mb-14 rise-in rise-in-3 leading-relaxed">
            All projects shown are independent or concept work and not affiliated with any
            brands mentioned. They represent our design process and development capabilities.
          </p>

          {/* CTA */}
          <div className="rise-in rise-in-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_12px_40px_-8px_var(--brand-orange)] transition-all hover:scale-105 hover:shadow-[0_20px_50px_-8px_var(--brand-orange)] active:scale-95"
              style={{ color: 'white' }}
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━ WHY CONCEPT WORK ━━━━━━ */}
      <section className="page-wrap py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="island-kicker mb-5">Honest by design</div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight mb-6">
              Proof of Thinking,{' '}
              <br className="hidden md:block" />
              <span className="text-[var(--brand-orange)]">Not Empty Claims.</span>
            </h2>
            <p className="text-[var(--sea-ink-soft)] text-lg leading-relaxed mb-8">
              New agencies don't have years of public client work to showcase — and we won't pretend otherwise. Instead of filling this page with generic claims, we show real execution. Every concept project below follows the exact same process, quality standards, and strategic thinking we bring to paying client work.
            </p>
            <p className="text-[var(--sea-ink-soft)] text-base leading-relaxed">
              We believe showing how we think is more valuable than any logo wall.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <Eye size={22} className="text-[var(--brand-orange)]" />, title: 'UX & Conversion Thinking', desc: 'Every design decision is driven by user behavior and business goals, not aesthetics alone.' },
              { icon: <Zap size={22} className="text-[var(--brand-blue)]" />, title: 'Performance Optimization', desc: 'We obsess over load times, Core Web Vitals, and the metrics that actually impact your bottom line.' },
              { icon: <Cpu size={22} className="text-emerald-500" />, title: 'Scalable Development', desc: 'Clean, modular code built with modern frameworks — ready to grow with your business.' },
              { icon: <Target size={22} className="text-purple-500" />, title: 'Real-World Problem Solving', desc: 'We start with the problem, not the technology. Strategy first, then execution.' },
            ].map(item => (
              <div key={item.title} className="bg-[var(--foam)] rounded-[2rem] p-7 border border-[var(--line)] hover:border-[var(--brand-orange)]/20 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-[var(--sea-ink)] mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-[var(--sea-ink-soft)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ FILTER BAR ━━━━━━ */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-xl border-b border-[var(--line)]">
        <div className="page-wrap flex items-center gap-3 py-4 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setExpandedId(null) }}
              className={`flex-shrink-0 rounded-full px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[var(--brand-blue)] text-white shadow-lg shadow-[var(--brand-blue)]/20'
                  : 'bg-[var(--foam)] text-[var(--sea-ink-soft)] hover:bg-[var(--brand-blue)]/10 hover:text-[var(--brand-blue)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ━━━━━━ PROJECT CARDS ━━━━━━ */}
      <section className="page-wrap py-20">
        <div className="flex flex-col gap-32">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedId === project.id}
              onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
            />
          ))}
        </div>
      </section>

      {/* ━━━━━━ PROCESS SECTION ━━━━━━ */}
      <section className="bg-[var(--sea-ink)] py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)] opacity-5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--brand-blue)] opacity-5 blur-3xl rounded-full" />

        <div className="page-wrap relative z-10">
          <div className="text-center mb-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <Sparkles size={14} className="text-[var(--brand-orange)]" />
              <span className="text-xs font-black uppercase tracking-widest text-white/60">Our Method</span>
            </div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-white mb-4">
              The Process Behind{' '}
              <span className="text-[var(--brand-orange)]">Every Project.</span>
            </h2>
            <p className="mx-auto max-w-xl text-white/40 text-base">
              Whether it's a concept build or a client engagement, every project follows the same rigorous methodology.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: '01', icon: <Search size={22} />, title: 'Discovery', desc: 'Research goals, users, and competitive landscape.' },
              { num: '02', icon: <Lightbulb size={22} />, title: 'Strategy', desc: 'Define positioning, IA, and conversion approach.' },
              { num: '03', icon: <PenTool size={22} />, title: 'Wireframe', desc: 'Structure layouts and user flows before design.' },
              { num: '04', icon: <Layout size={22} />, title: 'UI Design', desc: 'Pixel-perfect, brand-consistent visual design.' },
              { num: '05', icon: <Code2 size={22} />, title: 'Development', desc: 'Clean, performant code with modern frameworks.' },
              { num: '06', icon: <Rocket size={22} />, title: 'Launch & Optimize', desc: 'Deploy, monitor, and iterate for better results.' },
            ].map((step, i) => (
              <div key={step.num} className="relative group">
                {i < 5 && (
                  <div className="absolute top-8 left-full w-full h-px bg-white/5 hidden lg:block" />
                )}
                <div className="bg-white/[0.03] rounded-[1.5rem] p-6 border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-all duration-300 text-center h-full">
                  <div className="text-3xl font-black text-[var(--brand-orange)] opacity-20 mb-3 group-hover:opacity-40 transition">{step.num}</div>
                  <div className="mx-auto w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-white/40 group-hover:text-[var(--brand-orange)] transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-white font-extrabold text-sm mb-2">{step.title}</h3>
                  <p className="text-white/30 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust statement */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-6 py-3 backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-[var(--brand-orange)]" />
              <span className="text-sm text-white/50 font-medium">
                Every project includes unlimited design revisions and post-launch support.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ WHY SMALL AGENCY ━━━━━━ */}
      <section className="page-wrap py-28">
        <div className="text-center mb-16">
          <div className="island-kicker mb-5">The small agency advantage</div>
          <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight">
            Why Work With a{' '}
            <span className="text-[var(--brand-orange)]">Small Agency?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <UserCheck size={22} className="text-[var(--brand-orange)]" />, title: 'Founder-Led Projects', desc: 'Your project is handled directly by the founders — not delegated to junior staff you\'ve never met.' },
            { icon: <MessageCircle size={22} className="text-[var(--brand-blue)]" />, title: 'Direct Communication', desc: 'No account managers, no game of telephone. You talk directly to the people building your product.' },
            { icon: <Handshake size={22} className="text-emerald-500" />, title: 'Flexible Engagement', desc: 'Fixed-price projects, retainers, or milestone-based. We adapt to what makes sense for your stage.' },
            { icon: <Timer size={22} className="text-purple-500" />, title: 'Faster Turnaround', desc: 'Less overhead means faster decisions. Most projects launch in 2–6 weeks, not 6 months.' },
            { icon: <ShieldCheck size={22} className="text-rose-500" />, title: 'No Agency Bureaucracy', desc: 'No bloated proposals, no unnecessary meetings. We focus on shipping great work — quickly and efficiently.' },
            { icon: <TrendingUp size={22} className="text-amber-500" />, title: 'Long-Term Partnership', desc: 'We\'re building our reputation on every project. Your success is our success — literally.' },
          ].map(item => (
            <div key={item.title} className="flex gap-5 p-6 rounded-[2rem] border border-[var(--line)] bg-white hover:border-[var(--brand-orange)]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--foam)] flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-[var(--sea-ink)] mb-1.5">{item.title}</h3>
                <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━ STRONG CTA ━━━━━━ */}
      <section className="page-wrap pb-32">
        <div className="relative rounded-[4rem] overflow-hidden bg-[var(--brand-blue)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--brand-blue)_0%,#001a66_100%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)] opacity-10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 blur-[80px] rounded-full" />

          <div className="relative z-10 p-16 md:p-28 text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-white text-xs font-black uppercase tracking-widest backdrop-blur-md border border-white/10">
              <Layers size={14} className="text-[var(--brand-orange)]" />
              Let's Work Together
            </div>
            <h2 className="display-title text-5xl font-extrabold md:text-7xl text-white leading-tight mb-8">
              Let's Build Your <br />
              <span className="text-[var(--brand-orange)]">Success Story Together.</span>
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-xl text-white/50">
              If you like how we think and work, let's talk about your project.
              Free consultation. No obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-12 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-[0_16px_50px_-8px_var(--brand-orange)] transition-all hover:scale-105 active:scale-95"
                style={{ color: 'white' }}
              >
                Book a Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                style={{ color: 'white' }}
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── Project Card Component ─────────────────────────────────────────
function ProjectCard({ project, index, isExpanded, onToggle }: {
  project: typeof projects[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const isEven = index % 2 === 0

  return (
    <article className="group">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
        {/* IMAGE SIDE */}
        <div className={`relative ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] transition-shadow duration-500">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${project.color}20 0%, transparent 60%)` }}
            />
            {/* Concept badge */}
            <div className="absolute top-6 left-6 rounded-full bg-[var(--sea-ink)]/80 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
              ✦ {project.label}
            </div>
            {/* Category badge */}
            <div
              className="absolute top-6 right-6 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/20"
              style={{ background: `${project.color}cc` }}
            >
              {project.category}
            </div>
          </div>

          {/* Floating metrics card */}
          <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-3xl p-5 shadow-2xl border border-[var(--line)] grid grid-cols-4 gap-2">
            {project.metrics.map(m => (
              <div key={m.label} className="text-center">
                <div className="text-lg font-black" style={{ color: project.color }}>{m.value}</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-[var(--sea-ink-soft)] mt-0.5 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className={`pt-8 lg:pt-0 ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
          <div className="mb-4 inline-flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: project.colorLight, color: project.color }}
            >
              {project.icon}
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">
              {project.scope}
            </span>
          </div>

          <h2 className="display-title text-3xl font-extrabold md:text-4xl text-[var(--sea-ink)] leading-tight mb-5">
            {project.title}
          </h2>

          <p className="text-[var(--sea-ink-soft)] text-base leading-relaxed mb-6">
            {project.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="rounded-full bg-[var(--foam)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)] border border-[var(--line)]">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            style={{
              background: project.color,
              boxShadow: `0 12px 40px -8px ${project.color}60`,
            }}
          >
            {isExpanded ? 'Collapse Details' : 'View Case Study'}
            <ArrowUpRight size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Expanded Details ── */}
      <div
        className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxHeight: isExpanded ? '2000px' : '0',
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? '4rem' : '0',
        }}
      >
        <div className="rounded-[3rem] border border-[var(--line)] bg-[var(--foam)] p-8 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* PROBLEM */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                  <Target size={20} className="text-red-500" />
                </div>
                <h3 className="text-xl font-extrabold text-[var(--sea-ink)]">{project.problem.title}</h3>
              </div>
              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-6">
                {project.problem.description}
              </p>
              <div className="space-y-3">
                {project.problem.points.map(point => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="text-sm text-[var(--sea-ink-soft)]">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SOLUTION */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: project.colorLight }}
                >
                  <CheckCircle2 size={20} style={{ color: project.color }} />
                </div>
                <h3 className="text-xl font-extrabold text-[var(--sea-ink)]">{project.solution.title}</h3>
              </div>
              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-6">
                {project.solution.description}
              </p>
              <div className="space-y-3">
                {project.solution.points.map(point => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                    <span className="text-sm text-[var(--sea-ink-soft)]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* METRICS BAR */}
          <div className="mt-12 rounded-[2rem] bg-white p-8 border border-[var(--line)] shadow-sm">
            <div className="text-center mb-8">
              <span className="island-kicker">Design Targets & Standards</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.metrics.map(m => (
                <div key={m.label} className="text-center group/stat">
                  <div className="text-3xl font-black mb-1" style={{ color: project.color }}>{m.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--sea-ink-soft)]">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[var(--sea-ink-soft)]/50 italic">
              This is a concept project showcasing our design process and development capabilities. Not affiliated with any existing brand.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
