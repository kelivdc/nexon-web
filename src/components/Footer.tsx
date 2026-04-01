import { Link } from '@tanstack/react-router'
import { Linkedin, Github, Twitter, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-32 bg-[var(--sea-ink)] py-20 border-t border-white/5">
      <div className="page-wrap grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
        <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
          <Link to="/" className="mb-6 block">
            <img src="/logo.png" alt="NexonAce Logo" className="h-12 w-auto brightness-0 invert" />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed mb-8 text-slate-300">
            NexonAce is a premier IT agency crafting conversion-focused web experiences for global clients. We bridge the gap between innovation and real-world results.
          </p>
          <div className="flex gap-4">
             <SocialBtn icon={<Twitter size={18} />} label="Twitter" />
             <SocialBtn icon={<Github size={18} />} label="GitHub" />
             <SocialBtn icon={<Linkedin size={18} />} label="LinkedIn" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">Our Expertise</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="#" className="hover:text-[var(--brand-orange)] transition-colors">Web Development</a></li>
            <li><a href="#" className="hover:text-[var(--brand-orange)] transition-colors">SaaS Dashboards</a></li>
            <li><a href="#" className="hover:text-[var(--brand-orange)] transition-colors">E-commerce Solutions</a></li>
            <li><a href="#" className="hover:text-[var(--brand-orange)] transition-colors">Cloud & Infrastructure</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">Connect With Us</h4>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition cursor-pointer">
               <Mail size={16} className="text-[var(--brand-orange)]" /> <span>marketing@nexonace.com</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition cursor-pointer">
               <Phone size={16} className="text-[var(--brand-orange)]" /> <span>+62 812-9959-717</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
               <MapPin size={16} className="text-[var(--brand-orange)]" /> <span>Bogor, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-wrap border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-slate-400">
           <Link to="/about" className="hover:text-white">Learn About Us</Link>
           <a href="#" className="hover:text-white">Privacy Policy</a>
           <a href="#" className="hover:text-white">Terms</a>
        </div>
        <div className="text-center md:text-right">
          <p className="m-0 text-sm font-semibold text-white/90">
            &copy; {year} NexonAce. All rights reserved.
          </p>
          <p className="island-kicker m-0 text-[10px] text-[var(--brand-orange)] mt-1">Innovation. Accuracy. Excellence.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialBtn({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--brand-orange)] hover:text-white transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
