import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight, CheckCircle2, GraduationCap,
  UserCheck, MessageCircle, Zap, Eye, ShieldCheck, Handshake,
  AlertTriangle, Clock, Users2, Briefcase, Code2, Rocket,
  Target, Lightbulb, Heart, Star,
} from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({
    meta: [
      { title: 'About NexonAce — A Small Agency With Senior-Level Thinking' },
      { name: 'description', content: 'NexonAce is a founder-led web agency helping startups and B2B companies launch faster, convert better, and scale confidently.' },
    ],
  }),
})

const IMG = {
  workspace: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop',
  founder: '/arie.jpg',
  working: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop',
  school: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop',
}

function About() {
  return (
    <main className="flex flex-col">

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative pt-32 pb-28 overflow-hidden bg-[var(--sea-ink)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,102,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,102,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-orange)] opacity-[0.06] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-blue)] opacity-[0.08] rounded-full blur-[120px]" />

        <div className="page-wrap relative z-10">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2 border border-white/10 backdrop-blur-sm rise-in">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-orange)] shadow-[0_0_8px_var(--brand-orange)]" />
              <span className="text-xs font-black uppercase tracking-widest text-white/60">About NexonAce</span>
            </div>

            <h1 className="display-title text-5xl font-extrabold md:text-6xl lg:text-7xl text-white leading-[1.08] mb-8 rise-in rise-in-2">
              A Small Agency With{' '}
              <br className="hidden lg:block" />
              <span className="text-[var(--brand-orange)]">Senior-Level Thinking.</span>
            </h1>

            <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-2xl rise-in rise-in-3">
              NexonAce was built to help startups and B2B companies launch faster, convert
              better, and scale confidently through high-quality websites and web applications.
            </p>

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
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FOUNDER STORY ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Photo side */}
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={IMG.founder}
                alt="Founder of NexonAce"
                className="w-full h-[560px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-6 shadow-2xl border border-[var(--line)] max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-orange)]/10 flex items-center justify-center">
                  <Heart size={18} className="text-[var(--brand-orange)]" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">Philosophy</div>
                </div>
              </div>
              <p className="text-sm font-bold text-[var(--sea-ink)] leading-snug">
                "Small team. Big ownership. Better results."
              </p>
            </div>
          </div>

          {/* Story side */}
          <div>
            <div className="island-kicker mb-5">The person behind the agency</div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight mb-8">
              Meet the{' '}
              <span className="text-[var(--brand-orange)]">Founder.</span>
            </h2>

            <div className="space-y-5 text-[var(--sea-ink-soft)] text-base leading-relaxed">
              <p>
                NexonAce is founder-led — every project gets my direct attention, not a junior
                developer you've never spoken to. That's a deliberate choice, not a limitation.
              </p>
              <p>
                Before starting NexonAce, I spent years building websites and web applications for
                businesses of all sizes — from local companies to international projects. Freelance,
                collaborations, small teams. The work was rewarding, but I kept running into the same
                frustrations in the agency world:
              </p>
              <ul className="space-y-3 pl-1">
                {[
                  'Agencies that took weeks to respond to a simple question.',
                  'Overpriced proposals padded with juniors doing the actual work.',
                  'Poor communication that left clients guessing about progress.',
                  'Overpromising and underdelivering — every single time.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--brand-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                NexonAce exists because I wanted to build something different — a smaller, faster,
                more transparent agency where quality isn't diluted by scale and clients aren't
                treated like tickets in a queue.
              </p>
              <p className="text-[var(--sea-ink)] font-extrabold text-lg pt-2">
                Clients don't hire NexonAce for size — they hire us for thinking, speed, and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ EXPERIENCE & CREDIBILITY ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--foam)] py-28">
        <div className="page-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="island-kicker mb-5">Track record</div>
              <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight mb-8">
                Background &{' '}
                <span className="text-[var(--brand-blue)]">Experience.</span>
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  { icon: <Code2 size={20} className="text-[var(--brand-orange)]" />, text: '5+ years in web development and digital product design' },
                  { icon: <Briefcase size={20} className="text-[var(--brand-blue)]" />, text: '10+ projects delivered across e-commerce, SaaS, corporate, and education' },
                  { icon: <Rocket size={20} className="text-emerald-500" />, text: 'Experience building SaaS platforms, corporate websites, and internal tools' },
                  { icon: <Target size={20} className="text-purple-500" />, text: 'Strong focus on performance, scalability, and conversion-driven UX' },
                ].map(item => (
                  <div key={item.text} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm border border-[var(--line)] group-hover:shadow-md transition-shadow">
                      {item.icon}
                    </div>
                    <p className="text-[var(--sea-ink-soft)] text-base leading-relaxed pt-2.5">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[var(--line)] inline-flex items-start gap-3">
                <Lightbulb size={18} className="text-[var(--brand-orange)] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">
                  Before NexonAce, projects were delivered through freelance work and collaborations
                  with small teams. This agency formalizes that experience into a focused, reliable service.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '5+', label: 'Years Experience', color: 'var(--brand-orange)' },
                { value: '10+', label: 'Projects Delivered', color: 'var(--brand-blue)' },
                { value: '<24h', label: 'Response Time', color: '#10b981' },
                { value: '100%', label: 'Founder Involvement', color: '#8b5cf6' },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-[2rem] p-8 border border-[var(--line)] text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-black mb-2" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--sea-ink-soft)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ WHY NEXONACE EXISTS ━━━━━━━━━━━━━━━━ */}
      <section className="relative py-28 bg-[var(--sea-ink)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,102,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,102,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--brand-blue)] opacity-[0.06] rounded-full blur-[200px]" />

        <div className="page-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <AlertTriangle size={14} className="text-[var(--brand-orange)]" />
              <span className="text-xs font-black uppercase tracking-widest text-white/60">The Problem</span>
            </div>
            <h2 className="display-title text-4xl font-extrabold md:text-6xl text-white leading-tight mb-6">
              Why We Started{' '}
              <span className="text-[var(--brand-orange)]">NexonAce.</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed">
              The agency world has some serious problems. We started NexonAce to fix the ones we kept seeing — over and over.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {[
              { icon: <Clock size={22} />, title: 'Slow Communication', desc: 'Clients wait days — sometimes weeks — for a simple update or reply.' },
              { icon: <AlertTriangle size={22} />, title: 'Over-Promise, Under-Deliver', desc: 'Big promises in proposals. Mediocre results at launch. Every time.' },
              { icon: <Users2 size={22} />, title: 'Junior Teams, Senior Prices', desc: 'You pay for experts. Your project gets handed to a junior you\'ve never met.' },
              { icon: <Star size={22} />, title: 'Clients Feel Like Tickets', desc: 'No personal attention. Just another project in a pipeline of hundreds.' },
            ].map(item => (
              <div key={item.title} className="bg-white/[0.03] rounded-[2rem] p-7 border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 text-red-400 group-hover:bg-red-500/20 transition">
                  {item.icon}
                </div>
                <h3 className="text-white font-extrabold mb-2">{item.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Our approach */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/5 rounded-[2.5rem] p-10 md:p-14 border border-white/10 backdrop-blur-sm">
              <div className="text-xs font-black uppercase tracking-widest text-[var(--brand-orange)] mb-4">The NexonAce Approach</div>
              <h3 className="display-title text-3xl font-extrabold text-white mb-6 leading-tight">
                Small Team → High Ownership → Better Results.
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                We deliberately stay small so that every client gets real attention, direct access
                to the person doing the work, and a partner who's genuinely invested in the outcome.
                No layers. No handoffs. No excuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ HOW WE WORK ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="island-kicker mb-5">Our principles</div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight mb-8">
              How We Work{' '}
              <span className="text-[var(--brand-orange)]">Differently.</span>
            </h2>
            <p className="text-[var(--sea-ink-soft)] text-base leading-relaxed mb-10">
              These aren't corporate bullet points we put on a slide deck. This is how we actually operate — on every project, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <UserCheck size={22} className="text-[var(--brand-orange)]" />, title: 'Founder on Every Project', desc: 'Your project gets the founder\'s direct attention — not a junior handoff.' },
              { icon: <MessageCircle size={22} className="text-[var(--brand-blue)]" />, title: 'Direct Communication', desc: 'No account managers. You talk directly to the person building your product.' },
              { icon: <Zap size={22} className="text-emerald-500" />, title: 'Lean & Agile Workflow', desc: 'Less process, more progress. We ship fast without cutting corners.' },
              { icon: <Eye size={22} className="text-purple-500" />, title: 'Transparent Pricing', desc: 'Clear scope. Honest pricing. No surprise invoices or hidden fees.' },
              { icon: <Handshake size={22} className="text-rose-500" />, title: 'Long-Term Partnership', desc: 'We\'re building our reputation on your success. That\'s a real incentive.' },
              { icon: <ShieldCheck size={22} className="text-amber-500" />, title: 'Post-Launch Support', desc: 'We don\'t disappear after launch. Ongoing support is included — always.' },
            ].map(item => (
              <div key={item.title} className="bg-[var(--foam)] rounded-[2rem] p-7 border border-[var(--line)] hover:border-[var(--brand-orange)]/20 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-[var(--sea-ink)] mb-1.5 text-sm">{item.title}</h3>
                <p className="text-xs text-[var(--sea-ink-soft)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ WHO WE WORK BEST WITH ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--foam)] py-28">
        <div className="page-wrap">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="island-kicker mb-5">Ideal clients</div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight">
              We're a Great Fit{' '}
              <span className="text-[var(--brand-orange)]">If You…</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Are a startup or B2B company that needs a strong web presence',
              'Value quality and speed over the lowest price',
              'Want a long-term web partner — not a one-off vendor',
              'Need a reliable technical team you can trust with your brand',
              'Prefer working directly with the experts building your product',
              'Care about conversion, performance, and real business results',
            ].map(item => (
              <div key={item} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[var(--line)] hover:border-[var(--brand-orange)]/20 transition-colors">
                <CheckCircle2 size={18} className="text-[var(--brand-orange)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--sea-ink)] leading-relaxed font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[var(--sea-ink-soft)] text-sm">
              Not sure if we're the right fit? <Link to="/contact" className="text-[var(--brand-orange)] font-bold hover:underline">Let's talk</Link> — no pressure, no pitch.
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ CSR — FREE SCHOOLS ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-28">
        <div className="relative rounded-[4rem] overflow-hidden bg-[var(--brand-blue)]">
          <img
            src={IMG.school}
            alt="School"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue)]/90 to-[#001a66]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 p-12 md:p-20 items-center">
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-white text-xs font-black uppercase tracking-widest backdrop-blur-md border border-white/10">
                <GraduationCap size={16} className="text-[var(--brand-orange)]" />
                Social Impact · Campaign 2026
              </div>
              <h2 className="display-title text-4xl font-extrabold md:text-6xl text-white leading-tight mb-8">
                Free Websites <br />
                <span className="text-[var(--brand-orange)]">For Schools.</span>
              </h2>
              <p className="text-blue-100/80 text-lg leading-relaxed mb-10 max-w-lg">
                Every school deserves a professional digital presence. NexonAce provides free, fully featured school websites as part of our commitment to global education.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-12">
                {['School Profile', 'News Hub', 'Online Registration', 'CSR Verified'].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[var(--brand-orange)] flex-shrink-0" />
                    <span className="text-sm font-bold text-white">{f}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 shadow-[0_16px_40px_-8px_var(--brand-orange)]"
                style={{ color: 'white' }}
              >
                Nominate a School <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src={IMG.school}
                  alt="School building"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
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
              Let's Build Something{' '}
              <br className="hidden md:block" />
              <span className="text-[var(--brand-orange)]">Meaningful Together.</span>
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-xl text-white/50">
              If you're looking for a reliable web partner, we'd love to hear about your project.
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
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                style={{ color: 'white' }}
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
