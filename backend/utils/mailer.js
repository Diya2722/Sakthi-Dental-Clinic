const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

const sendContactEmail = async ({ name, email, phone, message = '' }) => {
  try {
    console.log(`📧 Sending emails via Resend for ${email}...`)

    // Clinic notification email
    const clinicResult = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Sakthi Dental Clinic <onboarding@resend.dev>',
      to: [process.env.CLINIC_EMAIL || 'sakthidentalclinic2004@gmail.com'],
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#2563EB,#ec4899);padding:28px 32px;">
            <h2 style="color:white;margin:0;font-size:22px;">New Patient Enquiry</h2>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Sakthi Dental Clinic — Website Contact Form</p>
          </div>
          <div style="padding:28px 32px;background:#ffffff;">
            <table style="width:100%;border-collapse:collapse;">
              <tr style="border-bottom:1px solid #f3f4f6;">
                <td style="padding:12px 0;color:#6b7280;font-size:13px;width:100px;font-weight:600;">NAME</td>
                <td style="padding:12px 0;color:#111827;font-size:14px;font-weight:500;">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #f3f4f6;">
                <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600;">EMAIL</td>
                <td style="padding:12px 0;color:#111827;font-size:14px;">${email}</td>
              </tr>
              <tr style="border-bottom:1px solid #f3f4f6;">
                <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600;">PHONE</td>
                <td style="padding:12px 0;color:#111827;font-size:14px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top;">MESSAGE</td>
                <td style="padding:12px 0;color:#374151;font-size:14px;">${message || 'No message provided'}</td>
              </tr>
            </table>
          </div>
        </div>
      `
    })

    console.log('✅ Clinic notification email sent:', clinicResult)

    // Patient confirmation email
    const patientResult = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Sakthi Dental Clinic <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting Sakthi Dental Clinic!',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#2563EB,#ec4899);padding:28px 32px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:22px;">Thank You, ${name}!</h2>
            <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;font-size:14px;">We have received your message 🦷</p>
          </div>
          <div style="padding:28px 32px;background:#ffffff;">
            <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 20px;">
              Our team will contact you within <strong>24 hours</strong>.
            </p>
            <div style="background:#f0f7ff;border-radius:10px;padding:20px;margin-bottom:24px;">
              <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Name:</strong> ${name}</p>
              <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Phone:</strong> ${phone}</p>
              ${message ? `<p style="margin:8px 0 0;font-size:13px;color:#374151;"><strong>Message:</strong> ${message}</p>` : ''}
            </div>
            <p style="color:#374151;font-size:14px;">For urgent care, call:<br>
              <strong>+91 98628 90897</strong> / <strong>+91 93632 98118</strong>
            </p>
          </div>
        </div>
      `
    })

    console.log('✅ Patient confirmation email sent:', patientResult)

  } catch (error) {
    console.error('❌ Email failed:', error.message)
    if (error.statusCode) console.error('Status:', error.statusCode)
    // Re-throw so the caller knows it failed
    throw error
  }
}

module.exports = { sendContactEmail }