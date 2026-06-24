import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, UserCheck, Heart, Cpu, Star, ChevronLeft, ChevronRight, Phone } from 'lucide-react'

const banners = [
  { img: '/assets/banners/banner1.jpg', alt: 'Dental Care 1' },
  { img: '/assets/banners/banner2.jpg', alt: 'Dental Care 2' },
  { img: '/assets/banners/banner3.jpg', alt: 'Dental Care 3' },
]

const whyUs = [
  { icon: Shield, title: 'All-in-One Care', desc: 'From general dentistry to specialized treatments, everything under one roof.' },
  { icon: UserCheck, title: 'Experienced Doctors', desc: 'Our dentists are professionally trained and committed to personalized patient care.' },
  { icon: Heart, title: 'Patient-Centric Approach', desc: 'We prioritize comfort, safety, and transparency in every treatment we offer.' },
  { icon: Cpu, title: 'Technology-Driven Services', desc: 'Modern tools and equipment ensure precision and safety.' },
]

const coreServices = [
  { img: '/assets/treatments/teeth-extraction.png', title: 'Tooth Extraction', desc: 'Safe and painless removal of impacted or decayed teeth.' },
  { img: '/assets/treatments/denture.png', title: 'Artificial Complete Denture', desc: 'Full mouth replacement to restore confidence and function.' },
  { img: '/assets/treatments/tooth-filling.jpg', title: 'Tooth Filling', desc: 'Composite fillings for cavity treatment and tooth restoration.' },
  { img: '/assets/treatments/teeth-cleaning.png', title: 'Teeth Cleaning & Scaling', desc: 'Preventive care to remove plaque and protect gums.' },
  { img: '/assets/treatments/bleaching.png', title: 'Bleaching', desc: 'Cosmetic whitening treatments for a brighter smile.' },
  { img: '/assets/treatments/braces.png', title: 'Orthodontic Treatment', desc: 'Braces and aligners to straighten and align teeth.' },
]

const testimonials = [
  { name: 'Manisha M', text: 'The doctors are extremely kind and attentive. My braces treatment is progressing really well.', rating: 5 },
  { name: 'Mr. Arun Kumar', text: 'I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I\'ve recommended Sakthi Dental Clinic to my entire family.', rating: 5 },
  { name: 'Mrs. Revathi S.', text: 'Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really grateful for their care.', rating: 5 },
]

const amenities = [
  { icon: '/assets/amenities/city-center.png', label: 'Convenient Central Location' },
  { icon: '/assets/amenities/parking.png', label: 'Hassle-Free Parking' },
  { icon: '/assets/amenities/doctors.png', label: 'Doctors Available Daily 9AM–9PM' },
  { icon: '/assets/amenities/pickup.png', label: 'Pickup & Drop-Off Support' },
  { icon: '/assets/amenities/wheelchair.png', label: 'Wheelchair Access' },
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % banners.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + banners.length) % banners.length)
  const next = () => setCurrent(c => (c + 1) % banners.length)

  return (
    <section className="relative h-[90vh] min-h-[560px] overflow-hidden">
      {banners.map((b, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={b.img} alt={b.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-900/40 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-accent-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
              Trusted Since 2004
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Specialized Dental Care for Women, Children & Families
            </h1>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-accent text-base py-3.5 px-8">Fix an Appointment</Link>
              <a href="tel:+919862890897" className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/25 transition-all text-base">
                <Phone size={18} /> Emergency Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2.5 bg-accent-500' : 'w-2.5 h-2.5 bg-white/50'}`} />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <div className="pt-[104px] md:pt-[136px]">
        <HeroSlider />
      </div>

      {/* Assurance Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="font-display text-3xl md:text-4xl font-bold mb-2">You are always in safe hands.</p>
            <p className="text-primary-100 text-lg">We are ready to help, anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-soft-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-widest">Why Us</span>
              <h2 className="section-title mt-2">Why Choose Sakthi Dental Clinic?</h2>
              <p className="section-subtitle">Your trusted partner for comprehensive dental care in Hosur.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <Icon size={26} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-800 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
              <h2 className="section-title mt-2">Explore Our Services</h2>
              <p className="section-subtitle">Comprehensive dental treatments tailored to your needs.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map(({ img, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-800 mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/treatments" className="btn-outline">View Full List of Treatments →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-soft-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Patient Stories</span>
              <h2 className="section-title mt-2">What Our Patients Say</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text, rating }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-md relative"
              >
                <div className="flex mb-3">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                    {name[0]}
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-widest">Our Facilities</span>
              <h2 className="section-title mt-2">Clinic Facilities</h2>
              <p className="section-subtitle">Everything designed for your comfort and convenience.</p>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {amenities.map(({ icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 bg-soft-sky rounded-2xl p-6 w-44 hover:shadow-md transition-shadow"
              >
                <img src={icon} alt={label} className="w-16 h-16 object-contain" />
                <p className="text-gray-700 text-sm font-medium text-center leading-tight">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-accent-500 to-primary-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Healthier Smile?</h2>
            <p className="text-white/85 text-lg mb-8">Book your appointment today and experience dental care like never before.</p>
            <Link to="/contact" className="bg-white text-primary-600 px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all inline-block text-base shadow-lg">
              Fix an Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
