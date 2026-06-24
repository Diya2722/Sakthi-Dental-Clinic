# 🦷 Sakthi Dental Clinic — Full Stack Website

A complete, production-ready MERN stack website for Sakthi Dental Clinic, Hosur, Tamil Nadu.

## 📁 Project Structure

```
sakthi-dental/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── public/
│   │   └── assets/   # All client images (banners, treatments, amenities, logo)
│   ├── src/
│   │   ├── components/  (Navbar, Footer, ScrollToTop)
│   │   └── pages/       (Home, About, Treatments, Contact, FAQ, PrivacyPolicy)
│   └── .env.example
└── backend/           # Node.js + Express + MongoDB
    ├── models/        (Contact.js)
    ├── routes/        (contact.js)
    ├── utils/         (mailer.js)
    ├── server.js
    └── .env.example
```

## 🚀 Local Development Setup

### Prerequisites
- Node.js >= 18
- MongoDB Atlas account (free tier works)
- Brevo account for SMTP (free tier: 300 emails/day)

---

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file (copy from example)
cp .env.example .env
# Fill in your values in .env

# Start development server
npm run dev
# → Server running on http://localhost:5000
```

**Required .env values:**
```
MONGO_URI=mongodb+srv://...         # MongoDB Atlas URI
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your_brevo_email
SMTP_PASS=your_brevo_smtp_key
SMTP_FROM=noreply@sakthidentalclinic.in
CLINIC_EMAIL=info@sakthidentalclinic.in
ALLOWED_ORIGINS=http://localhost:5173
PORT=5000
```

---

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Set VITE_API_URL=http://localhost:5000

# Start development server
npm run dev
# → App running on http://localhost:5173
```

---

## ☁️ Deployment

### Backend → Render (Free)

1. Push `backend/` to a GitHub repo
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repo
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Node Version:** 18
5. Add all environment variables from `.env.example` in the Render dashboard
6. Deploy — note your URL (e.g. `https://sakthi-dental-api.onrender.com`)

### Frontend → Vercel (Free)

1. Push `frontend/` to a GitHub repo (or same repo)
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo, set **Root Directory** to `frontend`
4. Add environment variable:
   - `VITE_API_URL` = your Render backend URL
5. Also update `ALLOWED_ORIGINS` in your Render backend to include your Vercel domain
6. Deploy!

### Database → MongoDB Atlas (Free)

1. Create account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a free M0 cluster
3. Database Access → Add user with password
4. Network Access → Allow `0.0.0.0/0` (for Render)
5. Connect → Drivers → Copy URI → paste into backend `.env` as `MONGO_URI`

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home (Hero slider, Why Us, Services, Testimonials, Amenities) |
| `/about` | About Dr. Anupriya + Team |
| `/treatments` | All 15 treatments with filter + modal |
| `/contact` | Contact form (saves to MongoDB + sends email) |
| `/faq` | 14 FAQs with accordion |
| `/privacy-policy` | Privacy Policy |

## ✨ Features

- ✅ Fully responsive (mobile-first)
- ✅ Animated with Framer Motion
- ✅ Hero image slider with 3 banners
- ✅ Treatment filter by category + detail modal
- ✅ Contact form with frontend + backend validation
- ✅ Rate limiting (5 submissions per 15 min)
- ✅ MongoDB storage for all contact submissions
- ✅ Dual email notification (clinic + patient confirmation)
- ✅ SEO meta tags
- ✅ CORS + Helmet security headers
- ✅ Google Maps embed on contact page

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS 3, Framer Motion, React Router v6 |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Email | Nodemailer + Brevo SMTP |
| Deployment | Vercel (frontend) + Render (backend) + MongoDB Atlas |
# Sakthi-Dental-Clinic
