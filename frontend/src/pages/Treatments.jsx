import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const treatments = [
  {
    img: '/assets/treatments/teeth-cleaning.png',
    title: 'Teeth Cleaning & Scaling',
    category: 'Preventive',
    desc: 'At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Whether you\'re dealing with early signs of gum disease or a more advanced condition, our skilled professionals ensure thorough cleaning to restore gum health. Scaling is advised for moderate cases to remove plaque and tartar buildup, while more severe periodontal issues may require deep cleaning procedures like root planing, supported by LASER treatment.',
  },
  {
    img: '/assets/treatments/tooth-filling.jpg',
    title: 'Tooth Filling',
    category: 'Restorative',
    desc: 'At Sakthi Dental Clinic, we specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth. We focus on sealing gaps effectively to prevent future decay and ensure long-term oral health.',
  },
  {
    img: '/assets/treatments/teeth-extraction.png',
    title: 'Tooth Extraction',
    category: 'Surgical',
    desc: 'When a tooth is beyond repair, Sakthi Dental Clinic ensures that the extraction process is handled with the utmost care and comfort. Our experienced dental team evaluates every option before recommending removal, but when necessary, we perform extractions using gentle techniques to minimize discomfort. We prioritize creating a stress-free environment, explaining each step to our patients.',
  },
  {
    img: '/assets/treatments/denture.png',
    title: 'Artificial Complete Denture',
    category: 'Restorative',
    desc: 'At Sakthi Dental Clinic, we craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit. Whether you\'re replacing several teeth or a full arch, our customized solutions help you regain confidence and improve daily functionality.',
  },
  {
    img: '/assets/treatments/implants.png',
    title: 'Dental Implants',
    category: 'Surgical',
    desc: 'Dental implants at Sakthi Dental Clinic offer a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth. Our advanced implant procedures restore both the appearance and strength of your smile, ensuring a natural feel and long-lasting results.',
  },
  {
    img: '/assets/treatments/laser-surgery.png',
    title: 'Laser Dentistry',
    category: 'Advanced',
    desc: 'At Sakthi Dental Clinic, we utilize advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy. Whether you\'re undergoing gum reshaping or other corrective treatments, our state-of-the-art laser equipment ensures efficient, safe, and comfortable care.',
  },
  {
    img: '/assets/treatments/root-canal.png',
    title: 'Root Canal Therapy',
    category: 'Restorative',
    desc: 'When tooth infections reach deep into the pulp, root canal treatment becomes essential. At Sakthi Dental Clinic, we carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues. Our focus is on relieving pain, eliminating infection, and preserving your natural tooth structure for long-term dental health.',
  },
  {
    img: '/assets/treatments/wisdom-tooth.png',
    title: 'Wisdom Tooth Extraction',
    category: 'Surgical',
    desc: 'If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. At Sakthi Dental Clinic, we specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience. We also provide comprehensive post-operative care to support quick recovery and lasting comfort.',
  },
  {
    img: '/assets/treatments/bridge.png',
    title: 'Fixed Partial Denture (Bridge)',
    category: 'Restorative',
    desc: 'Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants. At Sakthi Dental Clinic, we focus on custom-made dental bridges that restore your smile\'s appearance while improving chewing function and maintaining oral stability.',
  },
  {
    img: '/assets/treatments/bleaching.png',
    title: 'Teeth Whitening (Bleaching)',
    category: 'Cosmetic',
    desc: 'Brighten your smile with professional teeth whitening services at Sakthi Dental Clinic. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades. Whether addressing discoloration from food, beverages, or age, our whitening treatments restore your smile\'s natural radiance and boost your confidence.',
  },
  {
    img: '/assets/treatments/veneers.jpg',
    title: 'Veneers',
    category: 'Cosmetic',
    desc: 'Transform your smile with dental veneers, thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration. At Sakthi Dental Clinic, we offer high-quality veneers that enhance your teeth\'s appearance, giving you a flawless and natural-looking smile.',
  },
  {
    img: '/assets/treatments/pediatric.png',
    title: 'Pediatric Dentistry',
    category: 'Specialized',
    desc: 'At Sakthi Dental Clinic, we provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during their visits. From routine check-ups to preventive treatments, we focus on building healthy dental habits for a lifetime of bright smiles.',
  },
  {
    img: '/assets/treatments/flap-surgery.png',
    title: 'Flap Surgery',
    category: 'Surgical',
    desc: 'For advanced gum disease, flap surgery may be necessary. Our skilled team at Sakthi Dental Clinic performs this procedure by lifting the gum tissue to remove deep-seated plaque and bacteria, then repositioning it for optimal healing. This treatment helps prevent further periodontal issues and supports gum health.',
  },
  {
    img: '/assets/treatments/braces.png',
    title: 'Orthodontic Braces',
    category: 'Orthodontic',
    desc: 'Correct misaligned teeth with customized orthodontic treatments at Sakthi Dental Clinic. We offer a variety of braces, metal, ceramic, or lingual, to suit your preferences. Our goal is to achieve improved alignment, better bite function, and a confident, harmonious smile.',
  },
  {
    img: '/assets/treatments/aligners.png',
    title: 'Clear Aligners',
    category: 'Orthodontic',
    desc: 'For a discreet alternative to traditional braces, Sakthi Dental Clinic offers clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your orthodontic journey.',
  },
]

const categories = ['All', 'Preventive', 'Restorative', 'Surgical', 'Cosmetic', 'Orthodontic', 'Advanced', 'Specialized']

const categoryColors = {
  Preventive: 'bg-green-100 text-green-700',
  Restorative: 'bg-blue-100 text-blue-700',
  Surgical: 'bg-red-100 text-red-700',
  Cosmetic: 'bg-pink-100 text-pink-700',
  Orthodontic: 'bg-purple-100 text-purple-700',
  Advanced: 'bg-orange-100 text-orange-700',
  Specialized: 'bg-teal-100 text-teal-700',
}

export default function Treatments() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = activeCategory === 'All' ? treatments : treatments.filter(t => t.category === activeCategory)

  return (
    <div className="pt-[104px] md:pt-[136px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-soft-sky py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-widest">Expert Care</span>
            <h1 className="section-title mt-2">Our Treatments</h1>
            <p className="section-subtitle">Comprehensive dental solutions for every need — all under one roof.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[104px] md:top-[136px] z-30">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map(({ img, title, category, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="card cursor-pointer group"
                  onClick={() => setSelected({ img, title, category, desc })}
                >
                  <div className="h-52 overflow-hidden relative">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[category]}`}>
                      {category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{desc}</p>
                    <p className="text-primary-500 text-sm font-medium mt-3">Read more →</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100">
                  <X size={16} />
                </button>
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[selected.category]}`}>
                  {selected.category}
                </span>
                <h2 className="font-display text-2xl font-bold text-gray-800 mt-3 mb-3">{selected.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{selected.desc}</p>
                <Link to="/contact" className="btn-primary mt-6 inline-block text-sm" onClick={() => setSelected(null)}>
                  Book This Treatment
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not sure which treatment you need?</h2>
          <p className="text-white/85 mb-8">Our experts will guide you to the right solution. Book a free consultation today.</p>
          <Link to="/contact" className="bg-white text-primary-600 px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all inline-block shadow-lg">
            Fix an Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
