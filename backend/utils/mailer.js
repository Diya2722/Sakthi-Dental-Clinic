const nodemailer = require('nodemailer')

// const createTransporter = () => {
//   return nodemailer.createTransport({
//     host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
//     port: parseInt(process.env.SMTP_PORT) || 587,
//     secure: false,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   })
// }

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

const sendContactEmail = async ({ name, email, phone, message }) => {
  const transporter = createTransporter()

  // Email to clinic
  const clinicMail = {
    from: `"Sakthi Dental Clinic Website" <${process.env.SMTP_FROM}>`,
    to: process.env.CLINIC_EMAIL || 'info@sakthidentalclinic.in',
    subject: `New Appointment/Enquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2563EB, #ec4899); padding: 28px 32px;">
          <h2 style="color: white; margin: 0; font-size: 22px;">New Patient Enquiry</h2>
          <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Sakthi Dental Clinic — Website Contact Form</p>
        </div>
        <div style="padding: 28px 32px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
              <td style="padding: 12px 0; color: #111827; font-size: 14px; font-weight: 500;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 12px 0; color: #111827; font-size: 14px;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
              <td style="padding: 12px 0; color: #111827; font-size: 14px;"><a href="tel:${phone}" style="color: #2563EB;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #374151; font-size: 14px; line-height: 1.6;">${message || '<em style="color:#9ca3af;">No message provided</em>'}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f0f7ff; border-radius: 8px; border-left: 4px solid #2563EB;">
            <p style="margin: 0; font-size: 13px; color: #374151;">Please follow up with this patient within 24 hours.</p>
          </div>
        </div>
        <div style="padding: 18px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">© ${new Date().getFullYear()} Sakthi Dental Clinic | B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109</p>
        </div>
      </div>
    `,
  }

  // Confirmation email to patient
  const patientMail = {
    from: `"Sakthi Dental Clinic" <${process.env.SMTP_FROM}>`,
    to: email,
    subject: 'Thank you for contacting Sakthi Dental Clinic!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2563EB, #ec4899); padding: 28px 32px; text-align: center;">
          <h2 style="color: white; margin: 0; font-size: 22px;">Thank You, ${name}!</h2>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">We've received your message 🦷</p>
        </div>
        <div style="padding: 28px 32px; background: #ffffff;">
          <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
            We appreciate you reaching out to <strong>Sakthi Dental Clinic</strong>. Our team will review your enquiry and get back to you within <strong>24 hours</strong>.
          </p>
          <div style="background: #f0f7ff; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 12px; font-size: 14px; color: #1d4ed8; text-transform: uppercase; letter-spacing: 0.05em;">Your Submission Summary</h3>
            <p style="margin: 4px 0; font-size: 13px; color: #374151;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 4px 0; font-size: 13px; color: #374151;"><strong>Phone:</strong> ${phone}</p>
            ${message ? `<p style="margin: 8px 0 0; font-size: 13px; color: #374151;"><strong>Message:</strong> ${message}</p>` : ''}
          </div>
          <p style="color: #374151; font-size: 14px; line-height: 1.7; margin: 0 0 10px;">
            For urgent dental care, please call us directly:
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="tel:+919862890897" style="display: inline-block; background: #2563EB; color: white; padding: 12px 28px; border-radius: 50px; font-size: 15px; font-weight: 600; text-decoration: none; margin: 0 6px 8px;">📞 +91 98628 90897</a>
            <a href="tel:+919363298118" style="display: inline-block; background: #ec4899; color: white; padding: 12px 28px; border-radius: 50px; font-size: 15px; font-weight: 600; text-decoration: none; margin: 0 6px 8px;">📞 +91 93632 98118</a>
          </div>
        </div>
        <div style="padding: 18px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="margin: 0 0 6px; font-size: 12px; color: #6b7280;">📍 B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109</p>
          <p style="margin: 0; font-size: 12px; color: #6b7280;">🕐 Daily: 9:00 AM – 9:00 PM | info@sakthidentalclinic.in</p>
        </div>
      </div>
    `,
  }

  await transporter.sendMail(clinicMail)
  await transporter.sendMail(patientMail)
}

module.exports = { sendContactEmail }
