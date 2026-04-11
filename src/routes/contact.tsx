import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Mail, Phone, Globe, Send, MessageCircle, Clock, Shield, MapPin, ArrowRight } from 'lucide-react'
import { createServerFn } from '@tanstack/react-start'
import { useState } from 'react'
import { db } from '../db'
import { contacts } from '../db/schema'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Project brief must be at least 10 characters long'),
})

const submitContactForm = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => contactFormSchema.parse(data))
  .handler(async ({ data }) => {
    await db.insert(contacts).values({
      name: data.name,
      company: data.company || null,
      email: data.email,
      budget: data.budget || null,
      message: data.message,
    })
    return { success: true }
  })

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
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})
    
    const formData = new FormData(e.currentTarget)
    const rawData = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
    }

    const validation = contactFormSchema.safeParse(rawData)
    
    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors)
      setLoading(false)
      return
    }

    try {
      await submitContactForm({
        data: validation.data
      })
      setSuccess(true)
      ; (e.target as HTMLFormElement).reset()
    } catch (err) {
      console.error(err)
      alert("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

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
            Have a Project <br />
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
              We're Ready <br />to <span className="text-[var(--brand-blue)]">Build.</span>
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
        <div className="lg:col-span-3 bg-white rounded-[3rem] p-10 md:p-14 border border-[var(--line)] shadow-xl relative overflow-hidden">
          {success && (
            <div className="absolute inset-0 z-20 bg-emerald-500 flex flex-col items-center justify-center text-white p-10 text-center rise-in">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Send size={32} />
              </div>
              <h3 className="text-3xl font-extrabold mb-4">Message Sent!</h3>
              <p className="text-emerald-100 mb-8 max-w-sm">We've received your request and our team will get back to you within 24 hours.</p>
              <button
                onClick={() => setSuccess(false)}
                className="rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-emerald-600 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Send Another
              </button>
            </div>
          )}

          <h3 className="text-2xl font-extrabold text-[var(--sea-ink)] mb-10">Send a Message.</h3>
          <form className="space-y-6 relative" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField id="name" name="name" label="Full Name" placeholder="John Smith" required error={errors.name?.[0]} />
              <FormField id="company" name="company" label="Company / School" placeholder="Acme Corp" error={errors.company?.[0]} />
            </div>
            <FormField id="email" name="email" label="Email Address" placeholder="john@company.com" type="email" required error={errors.email?.[0]} />
            <FormField id="budget" name="budget" label="Estimated Budget (USD)" placeholder="e.g. $500 – $2,000" error={errors.budget?.[0]} />
            <div className="space-y-2">
              <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">
                Project Brief
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className={`w-full rounded-3xl border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-[var(--line)] focus:border-[var(--brand-blue)] focus:ring-[var(--brand-blue)]/10'} bg-[var(--foam)] px-7 py-5 text-sm outline-none transition-all focus:ring-2 resize-none placeholder:text-[var(--sea-ink-soft)]/40 font-medium`}
                placeholder="Tell us about your project — what you're building, who it's for, and what success looks like..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message[0]}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full inline-flex items-center justify-center gap-3 rounded-3xl bg-[var(--brand-blue)] py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:bg-[var(--brand-orange)] hover:shadow-[0_20px_50px_-10px_var(--brand-orange)] active:scale-95 ${loading ? 'opacity-70 pointer-events-none' : ''}`}
            >
              {loading ? <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" /> : <Send size={18} />}
              {loading ? 'Sending...' : 'Send Application'}
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
            Not ready to commit? <br />Explore our <span className="text-[var(--brand-orange)]">Design Themes</span>.
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

function FormField({ id, name, label, placeholder, type = 'text', required = false, error }: { id: string, name?: string, label: string, placeholder: string, type?: string, required?: boolean, error?: string }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">
        {label}
      </label>
      <input
        id={id}
        name={name || id}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`w-full rounded-2xl border ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-[var(--line)] focus:border-[var(--brand-blue)] focus:ring-[var(--brand-blue)]/10'} bg-[var(--foam)] px-6 py-4 text-sm outline-none transition-all focus:ring-2 placeholder:text-[var(--sea-ink-soft)]/40 font-medium`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
