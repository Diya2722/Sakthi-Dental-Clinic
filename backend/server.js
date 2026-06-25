const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const contactRoutes = require('./routes/contact')

const app = express()
app.set('trust proxy', 1)

// Security middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

// CORS
// CORS — must come BEFORE routes
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
  : ['http://localhost:5173', 'http://localhost:3000']

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)
    if (allowedOrigins.some(o => origin === o || origin.startsWith(o)) || origin.endsWith('.vercel.app')) {
      return callback(null, true)
    }
    console.error('CORS blocked origin:', origin)
    return callback(new Error('Not allowed by CORS'))
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

// Handle preflight for all routes
app.options('*', cors())

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { success: false, message: 'Too many requests. Please try again later.' },
})

// Routes
app.use('/api/contact', contactLimiter, contactRoutes)

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Sakthi Dental Clinic API is running 🦷' })
})

// 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ success: false, message: 'Internal server error' })
})

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err)
    process.exit(1)
  })
