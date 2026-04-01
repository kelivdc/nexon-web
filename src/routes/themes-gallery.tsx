import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Palette, X, ExternalLink, Check, Building2, ShoppingCart, Heart, Users, Utensils } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/themes-gallery')({
  component: ThemesGallery,
  head: () => ({
    meta: [
      { title: 'Theme Gallery — NexonAce Design Collections' },
      { name: 'description', content: 'Explore 5 premium website design themes crafted for different industries and brand personalities.' },
    ],
  }),
})

const themes = [
  {
    id: 'company',
    name: 'Company Profile',
    tag: 'Corporate · Agency · Startup',
    desc: 'A professional and modern layout for company profiles. Features a powerful hero section, structured services, client testimonials, and conversion-driven CTAs. Perfect for consultants, IT agencies, and B2B companies.',
    colors: ['#001a41', '#FF6600', '#ffffff', '#1e4bb5'],
    img: '/theme-company.png',
    icon: <Building2 size={20} />,
    highlights: ['Strong Hero + CTA', 'Service Cards Grid', 'Client Logo Bar', 'About & Team Section'],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce / Online Store',
    tag: 'Retail · Fashion · Marketplace',
    desc: 'A modern online store platform with a visually appealing product display. Includes product filters, shopping cart, rating & review system, and a checkout flow optimized for maximum conversion.',
    colors: ['#7c3aed', '#ffffff', '#f5f3ff', '#1e1e2e'],
    img: '/theme-ecommerce.png',
    icon: <ShoppingCart size={20} />,
    highlights: ['Product Grid + Filter', 'Cart & Checkout Flow', 'Rating & Reviews', 'Promo Banner'],
    featured: true,
  },
  {
    id: 'healthcare',
    name: 'Healthcare / Clinic',
    tag: 'Medical · Clinic · Hospital',
    desc: 'A clean, trustworthy, and functional medical website. Features doctor profiles, service schedules, online booking forms, and a calming design that reassures patients. Builds trust and improves patient accessibility.',
    colors: ['#0d9488', '#ffffff', '#f0fdfa', '#134e4a'],
    img: '/theme-healthcare.png',
    icon: <Heart size={20} />,
    highlights: ['Online Appointment Booking', 'Doctor Profiles', 'Service Menu', '24/7 Emergency Info'],
  },
  {
    id: 'community',
    name: 'Community / NGO',
    tag: 'Organization · Non-Profit · Social',
    desc: 'A warm and engaging community website that invites participation. Features event calendars, latest news, volunteer signup forms, and a photo gallery. An inclusive design that fosters a sense of togetherness.',
    colors: ['#ea580c', '#16a34a', '#fff7ed', '#1c1917'],
    img: '/theme-community.png',
    icon: <Users size={20} />,
    highlights: ['Event Calendar', 'Volunteer Signup', 'News & Blog Grid', 'Donation Section'],
  },
  {
    id: 'restaurant',
    name: 'Restaurant / Food & Beverage',
    tag: 'Food · Dining · Cafe',
    desc: 'A premium and elegant look for food & beverage businesses. Features high-quality food photography, an interactive digital menu, online reservation system, and chef profiles. Creates a mouth-watering experience.',
    colors: ['#1c1410', '#d4a017', '#3d2b1f', '#f5e6d0'],
    img: '/theme-restaurant.png',
    icon: <Utensils size={20} />,
    highlights: ['Online Reservation', 'Digital Menu', 'Chef Profile', 'Food Gallery'],
  },
]

function ThemesGallery() {
  const [selectedTheme, setSelectedTheme] = useState<typeof themes[0] | null>(null)

  return (
    <main className="flex flex-col pt-20">

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 px-5 py-2">
          <Palette size={14} className="text-[var(--brand-blue)]" />
          <span className="text-xs font-black uppercase tracking-widest text-[var(--brand-blue)]">Website Templates · 5 Categories</span>
        </div>
        <h1 className="display-title text-5xl font-extrabold md:text-7xl text-[var(--sea-ink)] leading-tight mb-8">
          Website Designs <br/>
          <span className="text-[var(--brand-orange)]">We Build for You.</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-[var(--sea-ink-soft)] leading-relaxed">
          Click on any template to preview it in detail. Choose the category that fits your business, or we'll build you a fully custom design from scratch.
        </p>
      </section>

      {/* ━━━━━━━━━━━━━━━━ THEME GRID ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} onClick={() => setSelectedTheme(theme)} />
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ CTA ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--sea-ink)] py-32">
        <div className="page-wrap text-center">
          <div className="island-kicker mb-6 text-white/40">What's next?</div>
          <h2 className="display-title text-4xl font-extrabold md:text-6xl text-white mb-8">
            Interested in One of These?
          </h2>
          <p className="text-white/60 text-xl mb-12 max-w-lg mx-auto">
            Talk to our team about your website needs. Free consultation, no commitment.
          </p>
          <Link
            to="/contact"
            style={{ color: 'white' }}
            className="btn-cta-orange inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-12 py-5 text-sm font-bold uppercase tracking-widest shadow-[0_20px_60px_-10px_var(--brand-orange)] transition-all hover:scale-110"
          >
            Start Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ POPUP MODAL ━━━━━━━━━━━━━━━━ */}
      {selectedTheme && (
        <ThemeModal theme={selectedTheme} onClose={() => setSelectedTheme(null)} />
      )}
    </main>
  )
}

// ─── Theme Card ──────────────────────────────────────────────────────
function ThemeCard({ theme, onClick }: { theme: typeof themes[0], onClick: () => void }) {
  return (
    <div
      className={`group relative flex flex-col rounded-[2rem] overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_32px_64px_-16px_rgba(0,51,153,0.2)] ${
        theme.featured
          ? 'border-[var(--brand-orange)]/40 shadow-lg shadow-[var(--brand-orange)]/10'
          : 'border-[var(--line)] bg-white'
      }`}
      onClick={onClick}
    >
      {theme.featured && (
        <div className="absolute top-4 right-4 z-10 rounded-full bg-[var(--brand-orange)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
          Most Popular
        </div>
      )}

      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={theme.img}
          alt={theme.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--brand-blue)]/0 group-hover:bg-[var(--brand-blue)]/30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 bg-white rounded-full px-5 py-2.5 flex items-center gap-2 shadow-xl">
            <ExternalLink size={14} className="text-[var(--brand-blue)]" />
            <span className="text-xs font-black uppercase tracking-widest text-[var(--brand-blue)]">View Details</span>
          </div>
        </div>
        {/* Color palette */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-between">
          <div className="flex gap-1.5">
            {theme.colors.map((c) => (
              <div
                key={c}
                className="w-6 h-6 rounded-full border-2 border-white/40 shadow-md"
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
          </div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-white/70">{theme.tag}</div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-grow p-6 bg-white">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-[var(--brand-blue)]/10 flex items-center justify-center text-[var(--brand-blue)]">
            {theme.icon}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">{theme.tag}</span>
        </div>
        <h3 className="text-lg font-extrabold text-[var(--sea-ink)] mb-2">{theme.name}</h3>
        <p className="text-xs text-[var(--sea-ink-soft)] leading-relaxed mb-4 flex-grow line-clamp-3">{theme.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {theme.highlights.slice(0, 2).map((h) => (
            <span key={h} className="rounded-full bg-[var(--foam)] border border-[var(--line)] px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)]">
              {h}
            </span>
          ))}
          {theme.highlights.length > 2 && (
            <span className="rounded-full bg-[var(--brand-blue)]/5 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-[var(--brand-blue)]">
              +{theme.highlights.length - 2} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Theme Modal ─────────────────────────────────────────────────────
function ThemeModal({ theme, onClose }: { theme: typeof themes[0], onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[2.5rem] overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'modal-pop 300ms cubic-bezier(0.16,1,0.3,1) both' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-all"
          aria-label="Close"
        >
          <X size={18} className="text-white" style={{ color: 'white' }} />
        </button>

        {/* Image */}
        <div className="relative h-80 md:h-[420px] overflow-hidden">
          <img
            src={theme.img}
            alt={theme.name}
            className="w-full h-full object-cover object-top"
          />
          {/* Featured badge */}
          {theme.featured && (
            <div className="absolute top-5 left-5 rounded-full bg-[var(--brand-orange)] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
              Most Popular
            </div>
          )}
          {/* Color palette */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {theme.colors.map((c) => (
                  <div
                    key={c}
                    className="w-9 h-9 rounded-full border-2 border-white/40 shadow-md"
                    style={{ backgroundColor: c }}
                    title={c}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-white/70 uppercase tracking-widest">{theme.tag}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)]/10 flex items-center justify-center text-[var(--brand-blue)]">
              {theme.icon}
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)] block">{theme.tag}</span>
              <h2 className="display-title text-3xl font-extrabold text-[var(--sea-ink)] leading-tight">{theme.name}</h2>
            </div>
          </div>

          <p className="text-[var(--sea-ink-soft)] text-base leading-relaxed mb-8">{theme.desc}</p>

          <div className="mb-8">
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--sea-ink-soft)] mb-4">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {theme.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 bg-[var(--foam)] rounded-xl px-4 py-3">
                  <Check size={16} className="text-[var(--brand-orange)] flex-shrink-0" />
                  <span className="text-sm font-bold text-[var(--sea-ink)]">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              style={{ color: 'white' }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-8 py-3.5 text-sm font-bold uppercase tracking-widest shadow-[0_12px_40px_-8px_var(--brand-orange)] transition-all hover:scale-105"
            >
              Use This Template <ArrowRight size={16} />
            </Link>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-blue)] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--brand-blue)] transition-all hover:bg-[var(--brand-blue)] hover:text-white"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modal-pop {
          from { opacity: 0; transform: scale(0.92) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  )
}
