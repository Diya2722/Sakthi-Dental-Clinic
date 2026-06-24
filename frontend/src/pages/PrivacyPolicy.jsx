import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We may collect personal identification information from users in several ways, including when users visit our website, fill out forms (e.g., contact or appointment requests), or engage with features and services on our site.

Types of information we may collect include: Name, Email address, Phone number.

Users can visit our site anonymously. We only collect personal data when it is voluntarily submitted. We may also gather non-personal identification information such as browser type, device details, operating system, internet service provider, and technical data related to user interaction with the site.`,
  },
  {
    title: '2. Cookies',
    content: `Our website may use "cookies" to enhance the user experience. Cookies are small files stored on a user's device for record-keeping purposes and to track preferences or site activity.

Users can set their browser to refuse cookies or alert them when cookies are being used. Please note that disabling cookies may affect some site functionality.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `Collected information may be used for the following purposes:

• To operate and manage the website — ensuring content displays properly and services run smoothly.
• To improve customer service — helping us respond to inquiries more efficiently.
• To enhance the website experience — feedback may help us improve content, usability, and performance.
• To communicate via email — we may use the email address to respond to inquiries, appointments, or service updates.`,
  },
  {
    title: '4. Data Security',
    content: `We implement appropriate security measures for data collection, storage, and processing to safeguard your personal information from unauthorized access, alteration, or destruction.`,
  },
  {
    title: '5. Information Sharing',
    content: `We do not sell, trade, or rent personal identification information to third parties.

We may share general demographic data (not linked to any personal information) with trusted partners or affiliates to improve service delivery and site performance.`,
  },
  {
    title: "6. Children's Privacy",
    content: `In compliance with the Children's Online Privacy Protection Act (COPPA), we do not knowingly collect any personal information from children under the age of 13. Our site is not intended to attract users below this age group.`,
  },
  {
    title: '7. Changes to This Policy',
    content: `Sakthi Dental Clinic may update this Privacy Policy from time to time. We encourage users to review this page periodically to stay informed about how we protect your information.`,
  },
  {
    title: '8. Acceptance of Terms',
    content: `By using this website, you agree to this policy. If you do not accept our Privacy Policy, please do not use our website.

Continued use of the site following any updates will be deemed as your acceptance of the revised policy.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions about this Privacy Policy or your interactions with our site, please contact us:

📍 Address: B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
📧 Email: info@sakthidentalclinic.in
📞 Phone: +91 9862890897 / +91 9363298118`,
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="pt-[104px] md:pt-[136px]">
      <section className="bg-gradient-to-br from-gray-50 to-soft-sky py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="section-title">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: January 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 leading-relaxed mb-10 text-sm"
          >
            At Sakthi Dental Clinic, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and disclose information from visitors and users of our website.
          </motion.p>

          <div className="space-y-8">
            {sections.map(({ title, content }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-l-4 border-primary-500 pl-6"
              >
                <h2 className="font-semibold text-gray-800 text-base mb-3">{title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
