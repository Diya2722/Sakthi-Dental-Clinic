const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const Contact = require('../models/Contact')
const { sendContactEmail } = require('../utils/mailer')

// Validation rules
const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^\+?[\d\s\-]{7,20}$/).withMessage('Please provide a valid phone number'),
  body('message')
    .optional()
    .trim()
    .isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters'),
]

// POST /api/contact
router.post('/', validateContact, async (req, res) => {
  // Check validation errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array(),
    })
  }

  const { name, email, phone, message } = req.body

  try {
    // 1. Save to MongoDB
    const contact = await Contact.create({ name, email, phone, message })

    // 2. Respond to frontend IMMEDIATELY — don't wait for email
    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. We will contact you within 24 hours.',
      id: contact._id,
    })

    // 3. Send email AFTER response — non-blocking
    sendContactEmail({ name, email, phone, message })
      .catch(emailErr => console.error('Email sending failed:', emailErr.message))
  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again or call us directly.',
    })
  }
})

// GET /api/contact (admin endpoint — protect in production with auth middleware)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100)
    res.json({ success: true, count: contacts.length, data: contacts })
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

module.exports = router
