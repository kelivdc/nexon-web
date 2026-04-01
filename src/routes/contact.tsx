import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Mail, Phone, Globe, Send, MessageCircle, Clock, Shield, MapPin, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: 'Contact NexonAce — Start Your Project Today' },
      { name: 'description', content: 'Get in touch with NexonAce. Free consultation available for all new client inquiries.' },
    ],
  }),
})

const IMG_bg = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80&auto=format&fit=crop'

function ContactPage() {
  return (
    <main className="flex flex-col pt-20">

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-[var(--sea-ink)] py-32">
        <img
          src={IMG_bg}
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--sea-ink)] via-[var(--sea-ink)]/95 to-[var(--brand-blue)]/40" />
        <div className="page-wrap relative z-10 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2 border border-white/10">
            <MessageCircle size={14} className="text-[var(--brand-orange)]" />
            <span className="text-xs font-black uppercase tracking-widest text-white/70">Let's Talk</span>
          </div>
          <h1 className="display-title text-5xl font-extrabold md:text-7xl text-white leading-tight mb-8">
            Have a Project <br/>
            <span className="text-[var(--brand-orange)]">In Mind?</span>
          </h1>
          <p className="mx-auto max-w-xl text-xl text-white/60 leading-relaxed">
            We respond within 24 hours. Let's turn your idea into a high-converting digital product.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ MAIN CONTENT ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-32 grid grid-cols-1 lg:grid-cols-5 gap-16">

        {/* CONTACT INFO — left sidebar 2/5 */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div>
            <div className="island-kicker mb-5">Contact Information</div>
            <h2 className="display-title text-3xl font-extrabold text-[var(--sea-ink)] mb-6 leading-tight">
              We're Ready <br/>to <span className="text-[var(--brand-blue)]">Build.</span>
            </h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed">
              Whether it's a full custom website, a quick SEO audit, or our Free School Program — we'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: <Mail className="text-[var(--brand-orange)]" size={20} />, label: 'Email', value: 'marketing@nexonace.com' },
              { icon: <Phone className="text-[var(--brand-blue)]" size={20} />, label: 'Phone', value: '+62 812-9959-717' },
              { icon: <Globe className="text-emerald-500" size={20} />, label: 'Coverage', value: 'Global' },
              { icon: <MapPin className="text-rose-400" size={20} />, label: 'HQ', value: 'Bogor, Indonesia' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[var(--foam)] flex items-center justify-center shadow-inner flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)] opacity-50 mb-1">{item.label}</div>
                  <div className="font-extrabold text-[var(--sea-ink)]">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Availability card */}
          <div className="rounded-3xl bg-[var(--brand-blue)]/5 border border-[var(--brand-blue)]/10 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-sm font-bold text-[var(--sea-ink)]">Currently accepting projects</span>
            </div>
            <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">
              Slots are limited each month. Book your free consultation before they fill up.
            </p>
          </div>
        </div>

        {/* FORM — right 3/5 */}
        <div className="lg:col-span-3 bg-white rounded-[3rem] p-10 md:p-14 border border-[var(--line)] shadow-xl">
          <h3 className="text-2xl font-extrabold text-[var(--sea-ink)] mb-10">Send a Message.</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField id="name" label="Full Name" placeholder="John Smith" />
              <FormField id="company" label="Company / School" placeholder="Acme Corp" />
            </div>
            <FormField id="email" label="Email Address" placeholder="john@company.com" type="email" />
            <FormField id="budget" label="Estimated Budget (USD)" placeholder="e.g. $500 – $2,000" />
            <div className="space-y-2">
              <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">
                Project Brief
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full rounded-3xl border border-[var(--line)] bg-[var(--foam)] px-7 py-5 text-sm outline-none transition-all focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/10 resize-none placeholder:text-[var(--sea-ink-soft)]/40 font-medium"
                placeholder="Tell us about your project — what you're building, who it's for, and what success looks like..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 rounded-3xl bg-[var(--brand-blue)] py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:bg-[var(--brand-orange)] hover:shadow-[0_20px_50px_-10px_var(--brand-orange)] active:scale-95"
            >
              <Send size={18} /> Send Application
            </button>
            <p className="text-center text-xs text-[var(--sea-ink-soft)] opacity-50">
              We'll respond within 24 hours. All inquiries are confidential.
            </p>
          </form>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ TRUST BAR ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--foam)] py-20">
        <div className="page-wrap grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
          {[
            { icon: <Clock className="text-[var(--brand-orange)]" size={24} />, title: '< 24h Response', text: 'Every inquiry receives a personal reply from our team within one business day.' },
            { icon: <Shield className="text-[var(--brand-blue)]" size={24} />, title: 'Fully Confidential', text: 'Your ideas and project details are strictly protected under our NDA policy.' },
            { icon: <MessageCircle className="text-emerald-500" size={24} />, title: 'Free Consultation', text: 'No obligation. We\'ll assess your project and provide honest recommendations.' },
          ].map((item) => (
            <div key={item.title} className="px-12 py-10 text-center">
              <div className="mb-5 mx-auto w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-[var(--line)]">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-lg text-[var(--sea-ink)] mb-3">{item.title}</h4>
              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FINAL CTA ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-20 pb-32">
        <div className="island-shell rounded-[3rem] p-12 md:p-20 text-center">
          <h3 className="display-title text-3xl font-extrabold text-[var(--sea-ink)] mb-6">
            Not ready to commit? <br/>Explore our <span className="text-[var(--brand-orange)]">Design Themes</span>.
          </h3>
          <Link
            to="/themes-gallery"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[var(--brand-orange)] hover:scale-105"
          >
            View Themes Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  )
}

function FormField({ id, label, placeholder, type = 'text' }: { id: string, label: string, placeholder: string, type?: string }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[var(--line)] bg-[var(--foam)] px-6 py-4 text-sm outline-none transition-all focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/10 placeholder:text-[var(--sea-ink-soft)]/40 font-medium"
      />
    </div>
  )
}
