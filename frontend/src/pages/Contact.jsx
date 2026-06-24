import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  // Wake up Render backend as soon as page loads
  useEffect(() => {
    fetch(`${API_URL}/`).catch(() => {})
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    try {
      await axios.post(`${API_URL}/api/contact`, form, { timeout: 15000 })
      toast.success('Thank you! We will contact you shortly.')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      if (err.code === 'ECONNABORTED' || err.message?.includes('timeout')) {
        toast.error('Server is waking up, please try again in 30 seconds.')
      } else {
        toast.error(err?.response?.data?.message || 'Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }
  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200 bg-red-50'
        : 'border-gray-200 focus:ring-primary-200 focus:border-primary-400 bg-gray-50'
    }`

  return (
    <div className="pt-[104px] md:pt-[136px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-soft-blush py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h1 className="section-title mt-2">Contact Us</h1>
            <p className="section-subtitle">We'd love to hear from you. Reach out for appointments, queries, or anything dental.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">We would love to hear from you</h2>
              <p className="text-gray-500 text-sm mb-8">Fill in the form below and our team will respond within 24 hours.</p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dental concern or appointment preference..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 bg-gray-50 text-sm resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : 'Submit Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">Reach Us</h2>
              <p className="text-gray-500 text-sm mb-8">We are conveniently located in Hosur. Come visit us or connect online.</p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: MapPin,
                    color: 'bg-primary-50 text-primary-500',
                    label: 'Our Address',
                    content: 'B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India',
                  },
                  {
                    icon: Phone,
                    color: 'bg-green-50 text-green-600',
                    label: 'Phone Numbers',
                    content: '+91 9862890897 / +91 9363298118',
                    href: 'tel:+919862890897',
                  },
                  {
                    icon: Mail,
                    color: 'bg-accent-100 text-accent-500',
                    label: 'Email Address',
                    content: 'info@sakthidentalclinic.in',
                    href: 'mailto:info@sakthidentalclinic.in',
                  },
                  {
                    icon: Clock,
                    color: 'bg-yellow-50 text-yellow-600',
                    label: 'Working Hours',
                    content: 'Sunday to Saturday: 9:00 AM – 9:00 PM',
                    bold: true,
                  },
                ].map(({ icon: Icon, color, label, content, href, bold }) => (
                  <div key={label} className="flex gap-4">
                    <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className={`text-gray-700 text-sm hover:text-primary-500 transition-colors ${bold ? 'font-semibold' : ''}`}>
                          {content}
                        </a>
                      ) : (
                        <p className={`text-gray-700 text-sm ${bold ? 'font-semibold' : ''}`}>{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <iframe
                  title="Sakthi Dental Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.83!3d12.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQzJzQ4LjAiTiA3N8KwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
