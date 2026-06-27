import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'


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
