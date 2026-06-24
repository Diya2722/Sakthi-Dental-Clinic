import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  { q: 'Can medication completely relieve tooth pain?', a: 'Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care.' },
  { q: 'Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?', a: 'No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn\'t damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal and reattach to the teeth.' },
  { q: 'Can fluorosis stains be removed through scaling?', a: 'Scaling can remove surface (extrinsic) stains but not fluorosis, which is an internal (intrinsic) stain. Fluorosis may require treatments like bleaching, veneers, or crowns for cosmetic improvement.' },
  { q: 'Can painful teeth be treated with fillings?', a: 'Not always. If the cavity has reached the pulp, the innermost layer of the tooth, simple filling won\'t help. In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin).' },
  { q: 'Is placing a cap or crown necessary after root canal treatment (RCT)?', a: 'Yes. A crown is recommended after RCT to protect the treated tooth, which may be weaker due to decay. It prevents fractures and adds durability, especially during chewing.' },
  { q: 'Can milk teeth need root canal treatment (RCT)?', a: 'Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss.' },
  { q: 'How can I maintain good oral hygiene?', a: 'Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums.' },
  { q: 'What is the best age to get braces?', a: 'Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition.' },
  { q: 'Do all wisdom teeth need to be removed?', a: 'No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth.' },
  { q: 'Is it important to replace missing teeth after extraction?', a: 'Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function.' },
  { q: 'What are the benefits of dental implants?', a: 'Dental implants restore both the appearance and functionality of missing teeth. They provide a stable, natural-looking solution that can improve confidence and overall quality of life.' },
  { q: 'Which type of toothbrush and toothpaste should I use?', a: 'Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene.' },
  { q: 'What causes tooth sensitivity?', a: 'Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth.' },
  { q: 'How often should I see a dentist?', a: 'Visiting your dentist every six months is recommended for routine check-ups, professional cleaning, and preventive care to maintain good oral health.' },
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="border border-gray-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-800 text-sm sm:text-base pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-primary-500 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <div className="pt-[104px] md:pt-[136px]">
      <section className="bg-gradient-to-br from-primary-50 to-soft-lavender py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
            <h1 className="section-title mt-2">Frequently Asked Questions</h1>
            <p className="section-subtitle">Answers to the most common dental concerns our patients ask.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <FAQItem key={i} q={q} a={a} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 text-center bg-gradient-to-br from-primary-50 to-soft-blush rounded-3xl p-10"
          >
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">Still have questions?</h3>
            <p className="text-gray-500 mb-6">Our dental experts are happy to help. Reach out to us directly.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <a href="tel:+919862890897" className="btn-outline">Call Now</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
