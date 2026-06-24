import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Target, Eye, Users } from 'lucide-react'

const team = [
  { name: 'Dr. Anupriya', role: 'Founder & Chief Dental Officer', initials: 'DA' },
  { name: 'Dr. Ananya Iyer', role: 'Prosthodontist', initials: 'AI' },
  { name: 'Dr. Meera Subramanian', role: 'Endodontist', initials: 'MS' },
  { name: 'Dr. Arvind Kumar', role: 'Dental Surgeon', initials: 'AK' },
  { name: 'Dr. Sneha N', role: 'Orthodontist', initials: 'SN' },
  { name: 'Dr. Srinivas Rohit Ramanujam', role: 'Implantologist', initials: 'SR' },
  { name: 'Dr. Balu', role: 'Laser Surgeon', initials: 'DB' },
  { name: 'Dr. Vikram Raj Kishore', role: 'Aligners Partner', initials: 'VK' },
  { name: 'Dr. Ajay Kumar', role: 'Oral & Maxillofacial Surgeon', initials: 'AJ' },
]

const avatarColors = [
  'from-blue-400 to-blue-600',
  'from-purple-400 to-purple-600',
  'from-pink-400 to-pink-600',
  'from-teal-400 to-teal-600',
  'from-orange-400 to-orange-600',
  'from-indigo-400 to-indigo-600',
  'from-rose-400 to-rose-600',
  'from-cyan-400 to-cyan-600',
  'from-emerald-400 to-emerald-600',
]

export default function About() {
  return (
    <div className="pt-[104px] md:pt-[136px]">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-soft-blush py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h1 className="section-title mt-2">Get to Know Dr. Anupriya</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Your Trusted Partner in Dental Care</p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-10">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <span className="text-white font-display font-bold text-4xl">DA</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-gray-800">Dr. Anupriya</p>
                    <p className="text-primary-500 font-medium mt-1">BDS — Founder, Sakthi Dental Clinic</p>
                    <p className="text-gray-500 text-sm mt-2">20+ Years of Excellence</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white rounded-2xl px-5 py-3 shadow-lg">
                  <p className="font-bold text-xl">20+</p>
                  <p className="text-xs text-primary-100">Years of Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">About the Founder</span>
              <h2 className="font-display text-3xl font-bold text-gray-800 mt-2 mb-6">Bringing Over 20 Years of Expertise</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.
                </p>
                <p>
                  In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.
                </p>
                <p>
                  At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free.
                </p>
              </div>
              <div className="flex gap-6 mt-8">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary-500">2004</p>
                  <p className="text-xs text-gray-500 mt-1">Clinic Founded</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-accent-500">5000+</p>
                  <p className="text-xs text-gray-500 mt-1">Patients Treated</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary-500">9</p>
                  <p className="text-xs text-gray-500 mt-1">Specialist Doctors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-soft-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-widest">Our Purpose</span>
            <h2 className="section-title mt-2">Our Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-md">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-5">
                <Target size={28} className="text-primary-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health. By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 shadow-md">
              <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center mb-5">
                <Eye size={28} className="text-accent-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. We believe that building trust, encouraging preventive practices, and fostering a culture of excellence are key to making a lasting impact. We aspire to contribute positively to the community through awareness initiatives and outreach programs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Our Experts</span>
              <h2 className="section-title mt-2">Meet Our Team of Doctors</h2>
              <p className="section-subtitle">A dedicated team of specialists committed to your dental health.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {team.map(({ name, role, initials }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">{initials}</span>
                </div>
                <p className="font-semibold text-gray-800 text-sm leading-tight">{name}</p>
                <p className="text-gray-500 text-xs mt-1">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Your smile isn't just treated — it's celebrated.</h2>
          <Link to="/contact" className="bg-white text-primary-600 px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all inline-block mt-2 shadow-lg">
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
