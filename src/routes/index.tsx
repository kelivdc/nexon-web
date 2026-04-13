import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight, CheckCircle2, Globe, Rocket, Zap, RefreshCw,
  Search, Lightbulb, PenTool, Layout, Code2, Sparkles,
  UserCheck, MessageCircle, Timer, Handshake, ShieldCheck,
  DollarSign,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: 'NexonAce — Web Design & Development for SaaS and B2B Companies' },
      { name: 'description', content: 'We design and build high-performance websites and web apps that help businesses launch faster, convert better, and scale confidently.' },
    ],
  }),
})

function LandingPage() {
  return (
    <main className="flex flex-col">

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[var(--sea-ink)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,102,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,102,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--brand-orange)] opacity-[0.06] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--brand-blue)] opacity-[0.08] rounded-full blur-[120px]" />

        <div className="page-wrap relative z-10 py-24">
          <div className="max-w-4xl">
            <h1 className="display-title text-5xl font-extrabold leading-[1.08] md:text-6xl lg:text-[5.5rem] text-white mb-8 rise-in">
              Web Design & Development{' '}
              <br className="hidden md:block" />
              for{' '}
              <span className="text-[var(--brand-orange)]">SaaS</span> and{' '}
              <span className="text-[var(--brand-orange)]">B2B</span> Companies.
            </h1>

            <p className="max-w-2xl text-xl leading-relaxed text-white/50 mb-12 rise-in rise-in-2">
              We design and build high-performance websites and web apps that help
              businesses launch faster, convert better, and scale confidently.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-5 mb-14 rise-in rise-in-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_12px_40px_-8px_var(--brand-orange)] transition-all hover:scale-105 hover:shadow-[0_20px_50px_-8px_var(--brand-orange)] active:scale-95"
                style={{ color: 'white' }}
              >
                Book a Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
                style={{ color: 'white' }}
              >
                View Our Work
              </Link>
            </div>

            {/* Trust note */}
            <div className="flex flex-wrap items-center gap-6 rise-in rise-in-3">
              {[
                'Founder-led projects',
                'Transparent pricing',
                'Long-term support',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/30">
                  <CheckCircle2 size={14} className="text-[var(--brand-orange)]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ SOCIAL PROOF ALTERNATIVE ━━━━━━━━━━━━━━━━ */}
      <section className="border-b border-[var(--line)] bg-white py-20">
        <div className="page-wrap">
          <div className="text-center mb-14">
            <h2 className="display-title text-3xl font-extrabold md:text-4xl text-[var(--sea-ink)]">
              Built on Experience,{' '}
              <span className="text-[var(--brand-orange)]">Not Empty Claims.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '15+', label: 'Years Web Dev Experience', color: 'var(--brand-orange)' },
              { value: '10+', label: 'Projects Delivered', color: 'var(--brand-blue)' },
              { value: '100%', label: 'Founder Involvement', color: '#10b981' },
              { value: '<24h', label: 'Response Time', color: '#8b5cf6' },
            ].map(stat => (
              <div key={stat.label} className="bg-[var(--foam)] rounded-[2rem] p-8 text-center border border-[var(--line)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-black mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.15em] text-[var(--sea-ink-soft)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ SERVICES ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-28">
        <div className="mb-16 max-w-2xl">
          <div className="island-kicker mb-5">Services</div>
          <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight">
            What We Help{' '}
            <span className="text-[var(--brand-orange)]">You Build.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Globe size={24} className="text-[var(--brand-blue)]" />,
              title: 'Marketing & Landing Websites',
              desc: 'Conversion-focused websites designed to generate leads and grow your business. From single landing pages to multi-page marketing sites.',
              tags: ['Landing Pages', 'Corporate Sites', 'Lead Generation'],
            },
            {
              icon: <Rocket size={24} className="text-[var(--brand-orange)]" />,
              title: 'SaaS & Web Applications',
              desc: 'Scalable, maintainable, production-ready web apps. Custom dashboards, internal tools, and SaaS products built with modern frameworks.',
              tags: ['SaaS MVP', 'Dashboards', 'Internal Tools'],
              featured: true,
            },
            {
              icon: <Zap size={24} className="text-emerald-500" />,
              title: 'Website Redesign & Optimization',
              desc: 'Improve performance, UX, and conversion rates on your existing website. Core Web Vitals, technical SEO, and design improvements.',
              tags: ['Performance', 'UX Audit', 'SEO'],
            },
            {
              icon: <RefreshCw size={24} className="text-purple-500" />,
              title: 'Long-Term Development Partner',
              desc: 'Ongoing improvements, feature development, and technical support. We grow with your business as a reliable web partner.',
              tags: ['Retainer', 'Support', 'Scaling'],
            },
          ].map(service => (
            <div
              key={service.title}
              className={`group rounded-[2.5rem] p-10 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                service.featured
                  ? 'border-[var(--brand-orange)]/30 bg-[var(--brand-orange)]/[0.02] shadow-md'
                  : 'border-[var(--line)] bg-white'
              }`}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[var(--foam)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[var(--sea-ink)] mb-2">{service.title}</h3>
                  {service.featured && (
                    <span className="inline-block rounded-full bg-[var(--brand-orange)] px-3 py-0.5 text-[9px] font-black uppercase tracking-widest text-white mb-2">Most Popular</span>
                  )}
                </div>
              </div>
              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-6">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="rounded-full bg-[var(--foam)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)] border border-[var(--line)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-blue)] hover:text-[var(--brand-orange)] transition-colors"
          >
            Explore All Services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FEATURED CONCEPT PROJECTS ━━━━━━━━━━━━━━━━ */}
      <section className="relative py-28 bg-[var(--sea-ink)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,102,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,102,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--brand-blue)] opacity-[0.06] rounded-full blur-[200px]" />

        <div className="page-wrap relative z-10">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[var(--brand-orange)] shadow-[0_0_8px_var(--brand-orange)]" />
              <span className="text-xs font-black uppercase tracking-widest text-white/60">Selected Work</span>
            </div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-white leading-tight mb-5">
              Selected Work &{' '}
              <span className="text-[var(--brand-orange)]">Concept Projects.</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-white/40">
              A preview of how we think, design, and build. Each project follows the same process and quality standards we bring to client work.
            </p>
          </div>

          {/* Project Grid — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                image: '/case-ecommerce.png',
                label: 'SaaS Landing Page',
                title: 'E-Commerce Platform Redesign',
                desc: 'Conversion-first checkout experience with headless architecture and mobile-first UX.',
                color: 'var(--brand-orange)',
              },
              {
                image: '/case-saas.png',
                label: 'Fintech Dashboard',
                title: 'Analytics Dashboard UI',
                desc: 'Drag-and-drop widget system turning complex data into actionable business insights.',
                color: 'var(--brand-blue)',
              },
              {
                image: '/case-fintech.png',
                label: 'Startup Website',
                title: 'Fintech Launch Site',
                desc: 'Trust-first design for fintech startups — transparent pricing and security-first dashboards.',
                color: '#8b5cf6',
              },
            ].map(project => (
              <Link
                key={project.title}
                to="/case-studies"
                className="group rounded-[2rem] overflow-hidden bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--sea-ink)] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-[var(--sea-ink)]/80 backdrop-blur-md px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white border border-white/10">
                    ✦ Concept
                  </div>
                </div>
                <div className="p-7">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: project.color }}>
                    {project.label}
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-[var(--brand-orange)] transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/30 leading-relaxed mb-4">{project.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover:text-[var(--brand-orange)] transition-colors">
                    View Case Study <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--brand-orange)] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_16px_50px_-8px_var(--brand-orange)] transition-all hover:scale-105 active:scale-95"
              style={{ color: 'white' }}
            >
              View All Case Studies <ArrowRight size={16} />
            </Link>
          </div>

          <p className="text-center mt-6 text-xs text-white/20">
            All projects shown are independent concept work showcasing our capabilities.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ PROCESS ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-28">
        <div className="text-center mb-16">
          <div className="island-kicker mb-5">Our Process</div>
          <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)]">
            A Simple,{' '}
            <span className="text-[var(--brand-orange)]">Proven Process.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-12">
          {[
            { num: '01', icon: <Search size={22} />, title: 'Discovery', desc: 'Goals, users, and competition.' },
            { num: '02', icon: <Lightbulb size={22} />, title: 'Strategy', desc: 'Positioning and conversion plan.' },
            { num: '03', icon: <PenTool size={22} />, title: 'Wireframe', desc: 'Structure and user flows.' },
            { num: '04', icon: <Layout size={22} />, title: 'Design', desc: 'Pixel-perfect visual design.' },
            { num: '05', icon: <Code2 size={22} />, title: 'Development', desc: 'Clean, performant code.' },
            { num: '06', icon: <Sparkles size={22} />, title: 'Launch & Support', desc: 'Deploy, monitor, iterate.' },
          ].map((step, i) => (
            <div key={step.num} className="relative group">
              {i < 5 && (
                <div className="absolute top-10 left-full w-full h-px bg-[var(--line)] hidden lg:block" />
              )}
              <div className="bg-[var(--foam)] rounded-[1.5rem] p-6 border border-[var(--line)] hover:border-[var(--brand-orange)]/20 hover:-translate-y-1 transition-all duration-300 text-center h-full">
                <div className="text-3xl font-black text-[var(--brand-orange)] opacity-15 mb-3 group-hover:opacity-30 transition">{step.num}</div>
                <div className="mx-auto w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 text-[var(--sea-ink-soft)] group-hover:text-[var(--brand-orange)] shadow-sm transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-[var(--sea-ink)] font-extrabold text-sm mb-1">{step.title}</h3>
                <p className="text-[var(--sea-ink-soft)] text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-[var(--foam)] border border-[var(--line)] px-6 py-3">
            <CheckCircle2 size={16} className="text-[var(--brand-orange)]" />
            <span className="text-sm text-[var(--sea-ink-soft)] font-medium">
              Unlimited design revisions included on every project.
            </span>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ WHY NEXONACE ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--foam)] py-28">
        <div className="page-wrap">
          <div className="text-center mb-16">
            <div className="island-kicker mb-5">The advantage</div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)]">
              Why Work With{' '}
              <span className="text-[var(--brand-orange)]">NexonAce.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <UserCheck size={22} className="text-[var(--brand-orange)]" />, title: 'Work With Senior Developers', desc: 'Your project is handled by experienced developers — not delegated to juniors.' },
              { icon: <Timer size={22} className="text-[var(--brand-blue)]" />, title: 'Faster Than Large Agencies', desc: 'Less overhead, faster decisions. Most projects launch in 2–6 weeks.' },
              { icon: <DollarSign size={22} className="text-emerald-500" />, title: 'Flexible, Transparent Pricing', desc: 'Clear scope, honest pricing. No surprise invoices or hidden fees.' },
              { icon: <Handshake size={22} className="text-purple-500" />, title: 'Long-Term Partnership', desc: 'We build relationships, not transactions. Your growth is our growth.' },
              { icon: <ShieldCheck size={22} className="text-rose-500" />, title: 'Post-Launch Support', desc: 'We don\'t disappear after launch. Ongoing support is always included.' },
              { icon: <MessageCircle size={22} className="text-amber-500" />, title: 'Direct Communication', desc: 'No account managers. Talk directly to the people building your product.' },
            ].map(item => (
              <div key={item.title} className="flex gap-5 bg-white rounded-[2rem] p-7 border border-[var(--line)] hover:border-[var(--brand-orange)]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--foam)] rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-[var(--sea-ink)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ PRICING ANCHOR ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-28">
        <div className="text-center mb-16">
          <div className="island-kicker mb-5">Investment</div>
          <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)]">
            Typical Project{' '}
            <span className="text-[var(--brand-orange)]">Investment.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            {
              title: 'Landing Pages',
              range: '$1.5k – $3k',
              desc: 'Single-page landing sites designed to convert visitors into leads.',
              features: ['Custom design', 'Mobile responsive', 'SEO optimized', 'Fast delivery'],
              color: 'var(--brand-blue)',
            },
            {
              title: 'Marketing Websites',
              range: '$3k – $6k',
              desc: 'Multi-page websites that establish authority and generate qualified inquiries.',
              features: ['Multiple pages', 'CMS integration', 'Lead capture', 'Analytics setup'],
              color: 'var(--brand-orange)',
              featured: true,
            },
            {
              title: 'Web Applications',
              range: '$5k – $12k',
              desc: 'Custom SaaS platforms, dashboards, and internal tools built to scale.',
              features: ['Custom functionality', 'API integrations', 'User authentication', 'Scalable architecture'],
              color: '#8b5cf6',
            },
          ].map(tier => (
            <div
              key={tier.title}
              className={`rounded-[2.5rem] p-9 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                tier.featured
                  ? 'border-[var(--brand-orange)]/30 bg-[var(--brand-orange)]/[0.02] shadow-lg relative'
                  : 'border-[var(--line)] bg-white'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--brand-orange)] px-4 py-1 text-[9px] font-black uppercase tracking-widest text-white">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg font-extrabold text-[var(--sea-ink)] mb-3">{tier.title}</h3>
                <div className="text-3xl font-black mb-2" style={{ color: tier.color }}>{tier.range}</div>
                <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">{tier.desc}</p>
              </div>
              <div className="space-y-3">
                {tier.features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={14} style={{ color: tier.color }} className="flex-shrink-0" />
                    <span className="text-sm text-[var(--sea-ink-soft)]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-[var(--foam)] border border-[var(--line)] px-6 py-3">
            <Lightbulb size={16} className="text-[var(--brand-orange)]" />
            <span className="text-sm text-[var(--sea-ink-soft)] font-medium">
              Every project is scoped individually. These are starting ranges — not fixed packages.
            </span>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FINAL CTA ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap pb-32">
        <div className="relative rounded-[4rem] overflow-hidden bg-[var(--brand-blue)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--brand-blue)_0%,#001a66_100%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)] opacity-10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 blur-[80px] rounded-full" />

          <div className="relative z-10 p-16 md:p-28 text-center">
            <h2 className="display-title text-5xl font-extrabold md:text-7xl text-white leading-tight mb-8">
              Let's Build Your{' '}
              <br className="hidden md:block" />
              <span className="text-[var(--brand-orange)]">Next Website.</span>
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-xl text-white/50">
              Tell us about your project and we'll help you plan the next steps.
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
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                style={{ color: 'white' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
