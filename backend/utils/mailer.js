const nodemailer = require('nodemailer')

const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
}

const sendContactEmail = async ({ name, email, phone, message }) => {
  const transporter = createTransporter()

  const clinicMail = {
    from: `"Sakthi Dental Clinic Website" <${process.env.SMTP_FROM}>`,
    to: process.env.CLINIC_EMAIL || 'sakthidentalclinic2004@gmail.com',
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
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; width: 120px; font-weight: 600;">NAME</td>
              <td style="padding: 12px 0; color: #111827; font-size: 14px; font-weight: 500;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; font-weight: 600;">EMAIL</td>
              <td style="padding: 12px 0; color: #111827; font-size: 14px;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; font-weight: 600;">PHONE</td>
              <td style="padding: 12px 0; color: #111827; font-size: 14px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; font-weight: 600; vertical-align: top;">MESSAGE</td>
              <td style="padding: 12px 0; color: #374151; font-size: 14px;">${message || 'No message provided'}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f0f7ff; border-radius: 8px; border-left: 4px solid #2563EB;">
            <p style="margin: 0; font-size: 13px; color: #374151;">Please follow up with this patient within 24 hours.</p>
          </div>
        </div>
        <div style="padding: 18px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">© ${new Date().getFullYear()} Sakthi Dental Clinic | Hosur, Tamil Nadu</p>
        </div>
      </div>
    `,
  }

  const patientMail = {
    from: `"Sakthi Dental Clinic" <${process.env.SMTP_FROM}>`,
    to: email,
    subject: 'Thank you for contacting Sakthi Dental Clinic!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2563EB, #ec4899); padding: 28px 32px; text-align: center;">
          <h2 style="color: white; margin: 0; font-size: 22px;">Thank You, ${name}!</h2>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">We have received your message.</p>
        </div>
        <div style="padding: 28px 32px; background: #ffffff;">
          <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
            We appreciate you reaching out to <strong>Sakthi Dental Clinic</strong>. Our team will get back to you within <strong>24 hours</strong>.
          </p>
          <div style="background: #f0f7ff; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
            <p style="margin: 4px 0; font-size: 13px; color: #374151;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 4px 0; font-size: 13px; color: #374151;"><strong>Phone:</strong> ${phone}</p>
            ${message ? `<p style="margin: 8px 0 0; font-size: 13px; color: #374151;"><strong>Message:</strong> ${message}</p>` : ''}
          </div>
          <p style="color: #374151; font-size: 14px;">For urgent care, call us: <strong>+91 9862890897</strong></p>
        </div>
        <div style="padding: 18px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #6b7280;">B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109</p>
        </div>
      </div>
    `,
  }

  await transporter.sendMail(clinicMail)
  await transporter.sendMail(patientMail)
}

module.exports = { sendContactEmail }