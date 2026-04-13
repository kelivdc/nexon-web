import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Target, ShieldCheck, Heart, Users2, ArrowRight, CheckCircle2, Linkedin, Twitter, GraduationCap } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({
    meta: [
      { title: 'About NexonAce — Global Digital Growth Agency' },
      { name: 'description', content: 'Learn about our mission to build premium digital solutions for businesses and schools worldwide.' },
    ],
  }),
})

const IMG = {
  office:  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop',
  team:    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop',
  mission: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop',
  vision:  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop',
  school:  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop',
}

const team = [
  { name: 'Alex Carter', role: 'CEO & Founder', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop&facepad=3&face=1' },
  { name: 'Sarah Lin', role: 'Lead Designer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop&facepad=3&face=1' },
  { name: 'David Osei', role: 'Head of Engineering', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop&facepad=3&face=1' },
  { name: 'Maya Patel', role: 'SEO & Growth Lead', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop&facepad=3&face=1' },
]

function About() {
  return (
    <main className="flex flex-col pt-20">

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[70vh] flex items-end pb-0 overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src={IMG.office}
          alt="NexonAce office"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--sea-ink)] via-[var(--sea-ink)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--sea-ink)]/80 to-transparent" />

        <div className="page-wrap relative z-10 pb-24 pt-48">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur-md border border-white/20">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-orange)] shadow-[0_0_8px_var(--brand-orange)]" />
              <span className="text-xs font-black uppercase tracking-widest text-white/80">About NexonAce</span>
            </div>
            <h1 className="display-title text-5xl font-extrabold md:text-7xl text-white leading-tight mb-8">
              Fueled by Growth <br/>
              <span className="text-[var(--brand-orange)]">& Integrity.</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed max-w-xl">
              A global IT partner that bridges the gap between innovation and the real-world growth of businesses and institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ STATS BAR ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--sea-ink)] pb-20">
        <div className="page-wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+',  label: 'Global Clients' },
              { value: '4.9★', label: 'Client Rating' },
              { value: '2026', label: 'Established' },
            ].map((s) => (
              <div key={s.label} className="p-10 text-center">
                <div className="text-4xl font-black text-[var(--brand-orange)] mb-2">{s.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ MISSION & VISION ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="island-kicker mb-6">Our Purpose</div>
          <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)] leading-tight mb-8">
            Architecting the <br/>
            <span className="text-[var(--brand-blue)]">Future of Web.</span>
          </h2>
          <p className="text-[var(--sea-ink-soft)] text-lg leading-relaxed mb-8">
            NexonAce was founded on a single belief: high-end technology should be accessible to growing organizations — from Silicon Valley startups to local schools in Indonesia.
          </p>
          <div className="space-y-6 mb-12">
            {[
              { title: 'Mission', desc: 'Scale businesses globally through state-of-the-art digital infrastructure and design.' },
              { title: 'Vision', desc: 'To be the most trusted web agency for organizations of every size, anywhere in the world.' },
              { title: 'Values', desc: 'Integrity, speed, transparency, and an unwavering commitment to client success.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[var(--brand-orange)]/10 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-[var(--brand-orange)]" />
                </div>
                <div>
                  <span className="font-extrabold text-[var(--sea-ink)]">{item.title}: </span>
                  <span className="text-[var(--sea-ink-soft)] text-sm">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:bg-[var(--brand-orange)] hover:scale-105"
          >
            Start Working With Us <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={IMG.mission} alt="Our mission" className="w-full h-[520px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-blue)]/20 to-transparent" />
          </div>
          {/* Floating callout */}
          <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl border border-[var(--line)] max-w-[220px]">
            <div className="text-xs font-black uppercase tracking-widest text-[var(--sea-ink-soft)] mb-2">Response Time</div>
            <div className="text-3xl font-black text-[var(--brand-blue)]">&lt; 24h</div>
            <div className="text-xs text-[var(--sea-ink-soft)] mt-1">We reply fast, always.</div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ VALUES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--foam)] py-32">
        <div className="page-wrap">
          <div className="text-center mb-20">
            <div className="island-kicker mb-5">What drives us</div>
            <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)]">
              Built on Core <span className="text-[var(--brand-orange)]">Values.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users2 className="text-[var(--brand-blue)]" size={28} />, title: 'Global Collaboration', desc: 'A specialized task-force operating across every major timezone.' },
              { icon: <Target className="text-[var(--brand-orange)]" size={28} />, title: 'Conversion First', desc: 'Every design decision is made with business outcomes in mind.' },
              { icon: <ShieldCheck className="text-emerald-500" size={28} />, title: 'Full Transparency', desc: 'Open communication and weekly progress updates on every project.' },
              { icon: <Heart className="text-rose-400" size={28} />, title: 'CSR at Heart', desc: 'Our Free Schools Program is core to who we are, not a marketing tactic.' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-[2.5rem] p-10 border border-[var(--line)] group hover:border-[var(--brand-orange)]/30 hover:-translate-y-2 transition-all shadow-sm">
                <div className="mb-8 w-14 h-14 bg-[var(--foam)] rounded-2xl flex items-center justify-center group-hover:bg-gray-50 transition">
                  {v.icon}
                </div>
                <h3 className="font-extrabold text-xl text-[var(--sea-ink)] mb-4">{v.title}</h3>
                <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ TEAM ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-32">
        <div className="text-center mb-20">
          <div className="island-kicker mb-5">The People</div>
          <h2 className="display-title text-4xl font-extrabold md:text-5xl text-[var(--sea-ink)]">
            Meet the <span className="text-[var(--brand-blue)]">Team.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative mb-6 mx-auto w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-orange)] p-0.5 transition-transform group-hover:scale-110">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-extrabold text-[var(--sea-ink)] mb-1">{member.name}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)]">{member.role}</p>
              <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all">
                <div className="w-8 h-8 rounded-full bg-[var(--foam)] flex items-center justify-center cursor-pointer hover:bg-[var(--brand-blue)] hover:text-white transition">
                  <Linkedin size={14} />
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--foam)] flex items-center justify-center cursor-pointer hover:bg-[var(--brand-blue)] hover:text-white transition">
                  <Twitter size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ CSR — FREE SCHOOLS ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-32">
        <div className="relative rounded-[4rem] overflow-hidden bg-[var(--brand-blue)]">
          {/* Bg image */}
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

      {/* ━━━━━━━━━━━━━━━━ IMAGE BANNER ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap pb-32">
        <div className="relative rounded-[3rem] overflow-hidden h-80">
          <img src={IMG.team} alt="Our global team" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--sea-ink)]/90 to-transparent flex items-center">
            <div className="p-16 max-w-xl">
              <h3 className="display-title text-3xl font-extrabold text-white mb-6">Ready to work with the best?</h3>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
