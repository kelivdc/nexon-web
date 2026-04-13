import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, TrendingUp, Clock, Users, Zap,
  ShoppingCart, BarChart3, GraduationCap, Wallet,
  CheckCircle2, Target, Layers, Globe, Star, Quote,
} from 'lucide-react'

export const Route = createFileRoute('/case-studies')({
  component: CaseStudiesPage,
  head: () => ({
    meta: [
      { title: 'Case Studies — NexonAce | Real Results, Real Growth' },
      { name: 'description', content: 'Explore how NexonAce helped global businesses solve complex digital challenges and achieve measurable growth through premium web development.' },
    ],
  }),
})

// ─── Case Study Data ────────────────────────────────────────────────
const caseStudies = [
  {
    id: 'swiftcart',
    category: 'E-Commerce',
    client: 'SwiftCart Global',
    title: 'Turning Cart Abandonment Into a 340% Revenue Surge',
    excerpt: 'SwiftCart was bleeding revenue with a 78% cart abandonment rate. We rebuilt their entire checkout flow and storefront — transforming a sluggish, outdated e-commerce site into a conversion machine.',
    image: '/case-ecommerce.png',
    icon: <ShoppingCart size={22} />,
    color: 'var(--brand-orange)',
    colorLight: 'var(--brand-orange-light)',
    problem: {
      title: 'The Challenge',
      description: 'SwiftCart\'s legacy e-commerce platform suffered from painfully slow page loads (6.2s average), a confusing multi-step checkout, and zero mobile optimization. Their conversion rate had dropped to 0.9% — well below the industry average of 2.86%. Customers were abandoning carts at an alarming rate, and organic search traffic was declining 15% month-over-month due to poor Core Web Vitals scores.',
      points: [
        '78% cart abandonment rate across all product categories',
        '6.2 second average page load time on mobile devices',
        'Zero mobile-responsive design — 60% of traffic was mobile',
        'Outdated search with no filtering, leading to high bounce rates',
      ],
    },
    solution: {
      title: 'Our Approach',
      description: 'We conducted a full UX audit, rebuilt the storefront from scratch with a React-based headless architecture, and engineered a single-page checkout flow with intelligent autofill and real-time shipping calculations. Every pixel was designed to reduce friction and build buyer confidence.',
      points: [
        'Headless commerce architecture with React + Next.js for sub-second loads',
        'Single-page checkout with smart address autofill and payment optimization',
        'AI-powered product recommendations increasing average order value by 45%',
        'Mobile-first responsive design tested across 30+ device configurations',
      ],
    },
    results: [
      { value: '340%', label: 'Revenue Increase', icon: <TrendingUp size={18} /> },
      { value: '0.8s', label: 'Page Load Time', icon: <Zap size={18} /> },
      { value: '4.2%', label: 'Conversion Rate', icon: <Target size={18} /> },
      { value: '52%', label: 'Lower Bounce Rate', icon: <BarChart3 size={18} /> },
    ],
    testimonial: {
      quote: 'NexonAce didn\'t just redesign our website — they fundamentally changed how we sell online. The results exceeded every projection we had.',
      author: 'Marcus Chen',
      role: 'CEO, SwiftCart Global',
    },
    tags: ['E-Commerce', 'React', 'Headless CMS', 'UX Redesign', 'Performance'],
    duration: '6 weeks',
    year: '2025',
  },
  {
    id: 'growthhub',
    category: 'SaaS Platform',
    client: 'GrowthHub Analytics',
    title: 'From Startup MVP to 12,000+ Active Users in 90 Days',
    excerpt: 'GrowthHub had a powerful analytics engine but an underwhelming interface that drove users away. We designed and built a dashboard experience that users genuinely love — and tell their colleagues about.',
    image: '/case-saas.png',
    icon: <BarChart3 size={22} />,
    color: 'var(--brand-blue)',
    colorLight: 'var(--brand-blue-light)',
    problem: {
      title: 'The Challenge',
      description: 'GrowthHub had invested heavily into their analytics engine, but their MVP dashboard felt like a spreadsheet from 2005. User onboarding took an average of 45 minutes, the churn rate was 38% within the first month, and NPS was a disastrous -12. Investors were concerned, and the founding team needed a radical UI/UX transformation — fast.',
      points: [
        '38% churn rate within the first 30 days of sign-up',
        'Average onboarding time of 45 minutes with zero guided workflow',
        'NPS score of -12 causing investor concerns about product-market fit',
        'Data visualization was limited to basic tables — no charts, no insights',
      ],
    },
    solution: {
      title: 'Our Approach',
      description: 'We embedded with the GrowthHub team for a 3-week discovery sprint. We rebuilt the entire dashboard UI with an intuitive drag-and-drop widget system, real-time data visualization, and an AI-powered onboarding assistant that reduced time-to-value from 45 minutes to under 3 minutes.',
      points: [
        'Complete dashboard rebuild with drag-and-drop customizable widgets',
        'Real-time data visualization with interactive charts, heatmaps, and funnels',
        'AI onboarding assistant reducing setup time from 45 min to under 3 min',
        'Role-based access control and white-label capability for enterprise clients',
      ],
    },
    results: [
      { value: '12K+', label: 'Active Users', icon: <Users size={18} /> },
      { value: '3 min', label: 'Onboarding Time', icon: <Clock size={18} /> },
      { value: '+67', label: 'NPS Score', icon: <Star size={18} /> },
      { value: '8%', label: 'Monthly Churn', icon: <TrendingUp size={18} /> },
    ],
    testimonial: {
      quote: 'Our users went from confused to delighted. NexonAce turned our data into stories. Our Series A was closed partly because investors loved the new experience.',
      author: 'Sarah Okafor',
      role: 'CTO, GrowthHub Analytics',
    },
    tags: ['SaaS', 'Dashboard', 'Data Visualization', 'AI', 'React'],
    duration: '8 weeks',
    year: '2025',
  },
  {
    id: 'acornacademy',
    category: 'Education / CSR',
    client: 'Acorn Academy Network',
    title: 'Empowering 15 Schools With Free Digital Presence',
    excerpt: 'As part of our CSR mission, we partnered with Acorn Academy — a network of underfunded schools — to give them a professional web presence that boosted enrollment by 280%.',
    image: '/case-school.png',
    icon: <GraduationCap size={22} />,
    color: '#10b981',
    colorLight: '#ecfdf5',
    problem: {
      title: 'The Challenge',
      description: 'Acorn Academy\'s 15 affiliated schools had no online presence — not even a basic website. Parents had no way to research schools before enrollment, student registration was paper-only, and important school announcements were limited to printed flyers. In an increasingly digital world, these schools were invisible — and enrollment was declining 20% year-over-year.',
      points: [
        'Zero online presence across all 15 schools in the network',
        'Paper-only registration process causing a 3-week enrollment delay',
        'No way for parents to access grades, schedules, or announcements digitally',
        '20% year-over-year enrollment decline due to lack of discoverability',
      ],
    },
    solution: {
      title: 'Our Approach',
      description: 'We built a multi-tenant school platform that could be white-labeled for each school in the network. Each school received a customized, SEO-optimized website with online registration, a news hub, gallery, and a parent portal — all managed through a single admin dashboard that non-technical school staff could operate with ease.',
      points: [
        'Multi-tenant platform with unique branding per school — deployed in 3 days each',
        'Online enrollment system reducing registration time from 3 weeks to 10 minutes',
        'Parent portal with real-time grade tracking, attendance, and announcements',
        'SEO-optimized content bringing 5,000+ monthly organic visitors across the network',
      ],
    },
    results: [
      { value: '280%', label: 'Enrollment Increase', icon: <TrendingUp size={18} /> },
      { value: '15', label: 'Schools Launched', icon: <Globe size={18} /> },
      { value: '10 min', label: 'Registration Time', icon: <Clock size={18} /> },
      { value: '5K+', label: 'Monthly Visitors', icon: <Users size={18} /> },
    ],
    testimonial: {
      quote: 'NexonAce gave our schools a voice in the digital world — for free. Parents can now find us, register online, and stay connected. Enrollment is at an all-time high.',
      author: 'Dr. Amina Rashid',
      role: 'Director, Acorn Academy Network',
    },
    tags: ['Education', 'Multi-tenant', 'CSR', 'SEO', 'Portal'],
    duration: '10 weeks',
    year: '2026',
  },
  {
    id: 'finanzaglobal',
    category: 'FinTech',
    client: 'Finanza Global',
    title: 'Rebuilding Trust With a Secure, Lightning-Fast Payments Platform',
    excerpt: 'Finanza Global\'s outdated payment gateway was losing merchants due to downtime and slow settlement. We engineered a modern, bank-grade platform that processes $2M+ daily with 99.99% uptime.',
    image: '/case-fintech.png',
    icon: <Wallet size={22} />,
    color: '#8b5cf6',
    colorLight: '#f5f3ff',
    problem: {
      title: 'The Challenge',
      description: 'Finanza Global\'s legacy payment platform was built on aging infrastructure with frequent outages (99.2% uptime — far below the 99.99% industry standard). Merchants were churning at 12% monthly because of failed transactions, slow settlement times (T+5 days), and a clunky merchant dashboard that required support calls for basic operations.',
      points: [
        '99.2% uptime causing 4+ hours of downtime per month during peak hours',
        'Settlement time of T+5 days — 3x slower than competitor platforms',
        '12% monthly merchant churn due to failed transactions and poor UX',
        'No mobile app — merchants couldn\'t track payments on the go',
      ],
    },
    solution: {
      title: 'Our Approach',
      description: 'We redesigned the entire merchant experience — from the web dashboard to a new mobile app — while the backend team re-architected the payment pipeline. Our focus was on building trust through transparency: real-time transaction monitoring, instant settlement notifications, and a fraud detection UI that merchants could understand at a glance.',
      points: [
        'Modern merchant dashboard with real-time transaction monitoring and analytics',
        'Mobile-first companion app with push notifications for every settlement',
        'Interactive fraud detection interface making security transparent and actionable',
        'Responsive design with dark mode and accessibility compliance (WCAG 2.1 AA)',
      ],
    },
    results: [
      { value: '$2M+', label: 'Daily Volume', icon: <TrendingUp size={18} /> },
      { value: '99.99%', label: 'Uptime', icon: <Zap size={18} /> },
      { value: '2%', label: 'Merchant Churn', icon: <Users size={18} /> },
      { value: 'T+1', label: 'Settlement Speed', icon: <Clock size={18} /> },
    ],
    testimonial: {
      quote: 'Our merchants used to call support daily. Now they manage everything from their phone. NexonAce understood fintech — they built something our users trust implicitly.',
      author: 'David Hartono',
      role: 'VP Product, Finanza Global',
    },
    tags: ['FinTech', 'Payments', 'Mobile App', 'Security', 'Dashboard'],
    duration: '12 weeks',
    year: '2025',
  },
]

// ─── Filter Categories ──────────────────────────────────────────────
const categories = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.category)))]

// ─── Main Page Component ────────────────────────────────────────────
function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeFilter)

  return (
    <main className="flex flex-col">

      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--sea-ink)]">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,102,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,102,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-orange)] opacity-[0.06] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-blue)] opacity-[0.08] rounded-full blur-[120px]" />

        <div className="page-wrap relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm rise-in">
            <span className="flex h-2 w-2 rounded-full bg-[var(--brand-orange)] shadow-[0_0_8px_var(--brand-orange)]" />
            <span className="text-xs font-black uppercase tracking-widest text-white/70">
              Proven Results · Real Impact
            </span>
          </div>

          <h1 className="display-title text-5xl font-extrabold leading-[1.08] md:text-6xl lg:text-7xl text-white mb-8 rise-in rise-in-2">
            Case Studies That{' '}
            <span className="text-[var(--brand-orange)]">Speak</span>{' '}
            <br className="hidden lg:block" />
            For Themselves.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/50 mb-12 rise-in rise-in-3">
            Every project begins with a problem. Here's how we turned real challenges
            into measurable results for global businesses, startups, and institutions.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-12 rise-in rise-in-3">
            {[
              { value: '25+', label: 'Projects Delivered' },
              { value: '340%', label: 'Avg. Growth' },
              { value: '4.9★', label: 'Client Rating' },
              { value: '100%', label: 'On-Time Delivery' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-[var(--brand-orange)]">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">{stat.label}</div>
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

      {/* ━━━━━━ CASE STUDIES LIST ━━━━━━ */}
      <section className="page-wrap py-20">
        <div className="flex flex-col gap-32">
          {filtered.map((cs, index) => (
            <CaseStudyCard
              key={cs.id}
              study={cs}
              index={index}
              isExpanded={expandedId === cs.id}
              onToggle={() => setExpandedId(expandedId === cs.id ? null : cs.id)}
            />
          ))}
        </div>
      </section>

      {/* ━━━━━━ CTA SECTION ━━━━━━ */}
      <section className="page-wrap pb-32">
        <div className="relative rounded-[4rem] overflow-hidden bg-[var(--brand-blue)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--brand-blue)_0%,#001a66_100%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)] opacity-10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 blur-[80px] rounded-full" />

          <div className="relative z-10 p-16 md:p-28 text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-white text-xs font-black uppercase tracking-widest backdrop-blur-md border border-white/10">
              <Layers size={14} className="text-[var(--brand-orange)]" />
              Your Story Could Be Next
            </div>
            <h2 className="display-title text-5xl font-extrabold md:text-7xl text-white leading-tight mb-8">
              Ready to Become Our <br />
              <span className="text-[var(--brand-orange)]">Next Success Story?</span>
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-xl text-white/50">
              Let's discuss your challenges and craft a tailored solution that delivers real, measurable results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-12 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-[0_16px_50px_-8px_var(--brand-orange)] transition-all hover:scale-110 active:scale-95"
              style={{ color: 'white' }}
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── Case Study Card Component ──────────────────────────────────────
function CaseStudyCard({ study, index, isExpanded, onToggle }: {
  study: typeof caseStudies[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const isEven = index % 2 === 0

  return (
    <article className="group">
      {/* ── Card Header with Image + Summary ── */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
        {/* IMAGE SIDE */}
        <div className={`relative ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] transition-shadow duration-500">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${study.color}20 0%, transparent 60%)` }}
            />
            {/* Category badge */}
            <div
              className="absolute top-6 left-6 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/20"
              style={{ background: `${study.color}cc` }}
            >
              {study.category}
            </div>
            {/* Year badge */}
            <div className="absolute top-6 right-6 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
              {study.year}
            </div>
          </div>

          {/* Floating metrics card */}
          <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-3xl p-5 shadow-2xl border border-[var(--line)] grid grid-cols-4 gap-2">
            {study.results.map(r => (
              <div key={r.label} className="text-center">
                <div className="text-lg font-black" style={{ color: study.color }}>{r.value}</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-[var(--sea-ink-soft)] mt-0.5 leading-tight">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className={`pt-8 lg:pt-0 ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
          {/* Client tag */}
          <div className="mb-4 inline-flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: study.colorLight, color: study.color }}
            >
              {study.icon}
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">
              {study.client}
            </span>
          </div>

          <h2 className="display-title text-3xl font-extrabold md:text-4xl text-[var(--sea-ink)] leading-tight mb-5">
            {study.title}
          </h2>

          <p className="text-[var(--sea-ink-soft)] text-base leading-relaxed mb-6">
            {study.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {study.tags.map(tag => (
              <span key={tag} className="rounded-full bg-[var(--foam)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)] border border-[var(--line)]">
                {tag}
              </span>
            ))}
          </div>

          {/* Duration */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-[var(--sea-ink-soft)]">
              <Clock size={14} style={{ color: study.color }} />
              <span className="font-bold">{study.duration}</span>
            </div>
          </div>

          {/* Expand Button */}
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            style={{
              background: study.color,
              boxShadow: `0 12px 40px -8px ${study.color}60`,
            }}
          >
            {isExpanded ? 'Collapse Details' : 'View Full Case Study'}
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
                <h3 className="text-xl font-extrabold text-[var(--sea-ink)]">{study.problem.title}</h3>
              </div>
              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-6">
                {study.problem.description}
              </p>
              <div className="space-y-3">
                {study.problem.points.map(point => (
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
                  style={{ background: study.colorLight }}
                >
                  <CheckCircle2 size={20} style={{ color: study.color }} />
                </div>
                <h3 className="text-xl font-extrabold text-[var(--sea-ink)]">{study.solution.title}</h3>
              </div>
              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-6">
                {study.solution.description}
              </p>
              <div className="space-y-3">
                {study.solution.points.map(point => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: study.color }} />
                    <span className="text-sm text-[var(--sea-ink-soft)]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RESULTS BAR */}
          <div className="mt-12 rounded-[2rem] bg-white p-8 border border-[var(--line)] shadow-sm">
            <div className="text-center mb-8">
              <span className="island-kicker">Measurable Impact</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {study.results.map(r => (
                <div key={r.label} className="text-center group/stat">
                  <div
                    className="mx-auto w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover/stat:scale-110"
                    style={{ background: study.colorLight, color: study.color }}
                  >
                    {r.icon}
                  </div>
                  <div className="text-3xl font-black" style={{ color: study.color }}>{r.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--sea-ink-soft)] mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TESTIMONIAL */}
          <div className="mt-12 relative">
            <div
              className="rounded-[2rem] p-8 md:p-12"
              style={{ background: `linear-gradient(135deg, ${study.color}08 0%, ${study.color}03 100%)`, border: `1px solid ${study.color}15` }}
            >
              <Quote size={32} style={{ color: study.color }} className="mb-4 opacity-30" />
              <blockquote className="text-lg md:text-xl font-medium text-[var(--sea-ink)] leading-relaxed mb-6 italic">
                "{study.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg"
                  style={{ background: study.color }}
                >
                  {study.testimonial.author[0]}
                </div>
                <div>
                  <div className="font-extrabold text-[var(--sea-ink)]">{study.testimonial.author}</div>
                  <div className="text-sm text-[var(--sea-ink-soft)]">{study.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
