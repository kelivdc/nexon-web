'use client'
import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/themes-gallery', label: 'Themes' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,51,153,0.08)] border-b border-[var(--line)]'
          : 'bg-transparent'
        }`}
    >
      <nav className="page-wrap flex items-center justify-between h-20">
        {/* LEFT: Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center transition-opacity hover:opacity-80">
          <img src="/logo.png" alt="NexonAce" className="h-11 w-auto" />
        </Link>

        {/* MIDDLE: Nav Links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--sea-ink-soft)] transition-colors hover:text-[var(--brand-blue)] group"
              activeProps={{ className: 'relative text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--brand-blue)] group' }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--brand-orange)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* RIGHT: CTA Button + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-7 py-3 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-[var(--brand-blue)]/20 transition-all hover:bg-[var(--brand-orange)] hover:shadow-[var(--brand-orange)]/20 hover:scale-105 active:scale-95"
          >
            Get Free Consultation
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[var(--sea-ink)] rounded-xl hover:bg-[var(--foam)]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[var(--line)] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-[var(--sea-ink-soft)] hover:text-[var(--brand-blue)] transition"
              activeProps={{ className: 'text-sm font-bold uppercase tracking-widest text-[var(--brand-blue)]' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-[var(--brand-orange)] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[var(--brand-orange-soft)]"
          >
            Get Free Website Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
