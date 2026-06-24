import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

// Social SVG icons (lucide-react older version doesn't export these)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)

const treatments = [
  'Teeth Cleaning', 'Tooth Filling', 'Tooth Extraction', 'Dental Implants',
  'Root Canal Therapy', 'Orthodontic Braces', 'Clear Aligners', 'Veneers',
]

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/faq', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/logo/logo.png" alt="SDC" className="h-12 w-auto object-contain bg-white rounded-lg p-1" />
              <div>
                <p className="font-display font-bold text-white text-base leading-tight">Sakthi Dental Clinic</p>
                <p className="text-xs text-gray-400">Hosur, Tamil Nadu</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Specialized dental care for women, children & families. Expert-led services in a modern, welcoming environment.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent-500 transition-colors text-white">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors text-white">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors text-white">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-700">Key Treatments</h3>
            <ul className="space-y-2">
              {treatments.map((t) => (
                <li key={t}>
                  <Link to="/treatments" className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent-500 flex-shrink-0" />
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-700">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span>B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <span>+91 9862890897<br />+91 9363298118</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@sakthidentalclinic.in" className="hover:text-primary-400 transition-colors">
                  info@sakthidentalclinic.in
                </a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Clock size={16} className="text-primary-400 flex-shrink-0" />
                <span><strong className="text-white">Daily:</strong> 9:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved. | Designed with ❤️ for healthier smiles.
        </p>
      </div>
    </footer>
  )
}
