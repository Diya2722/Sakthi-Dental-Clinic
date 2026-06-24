# 🦷 Sakthi Dental Clinic — Official Website

A modern, fully responsive MERN stack website for **Sakthi Dental Clinic**, Hosur, Tamil Nadu. Built with React, Vite, Tailwind CSS on the frontend and Node.js, Express, MongoDB on the backend. Features include appointment contact form with email notifications, 15+ treatment pages, doctor profiles, testimonials, FAQ, and more.

---

## 🌐 Live Demo
- **Frontend:** `https://sakthi-dental.vercel.app` *(update after deployment)*
- **Backend API:** `https://sakthi-dental-api.onrender.com` *(update after deployment)*

---

## ✨ Features

- ✅ Fully responsive — mobile, tablet, desktop
- ✅ Hero image slider with 3 clinic banners
- ✅ 6 complete pages — Home, About, Treatments, Contact, FAQ, Privacy Policy
- ✅ 15 treatments with category filter + detail modal
- ✅ Contact form → saves to MongoDB + sends dual emails
- ✅ Patient confirmation email + clinic notification email
- ✅ Smooth animations with Framer Motion
- ✅ Rate limiting — 5 form submissions per 15 minutes
- ✅ Security headers with Helmet.js
- ✅ SEO optimized meta tags
- ✅ Doctor team section with 9 specialists
- ✅ Google Maps embed on contact page

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS 3 |
| Animations | Framer Motion |
| Routing | React Router v6 |
| HTTP Client | Axios |
| Notifications | React Hot Toast |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Email | Nodemailer + Gmail SMTP |
| Security | Helmet, CORS, Rate Limiting |
| Deployment | Vercel + Render + MongoDB Atlas |

---

## 📁 Project Structure

```
sakthi-dental/
├── frontend/                   # React + Vite + Tailwind
│   ├── public/
│   │   └── assets/
│   │       ├── banners/        # Hero slider images
│   │       ├── treatments/     # Treatment images
│   │       ├── amenities/      # Facility icons
│   │       └── logo/           # Clinic logo
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   └── pages/
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       ├── Treatments.jsx
│   │       ├── Contact.jsx
│   │       ├── FAQ.jsx
│   │       └── PrivacyPolicy.jsx
│   ├── .env.example
│   └── vercel.json
│
└── backend/                    # Node.js + Express
    ├── models/
    │   └── Contact.js          # MongoDB schema
    ├── routes/
    │   └── contact.js          # API route + validation
    ├── utils/
    │   └── mailer.js           # Nodemailer email templates
    ├── server.js               # Main Express app
    ├── .env.example
    └── render.yaml             # Render deployment config
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js >= 18
- MongoDB Atlas account (free)
- Gmail account with App Password enabled

---

### 1. Clone the project
```bash
git clone https://github.com/yourusername/sakthi-dental.git
cd sakthi-dental
```

---

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Fill in your `.env` file:
```env
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/sakthi-dental?retryWrites=true&w=majority
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your16digitapppassword
SMTP_FROM=yourgmail@gmail.com
CLINIC_EMAIL=yourgmail@gmail.com
ALLOWED_ORIGINS=http://localhost:5173
```

```bash
npm run dev
# ✅ MongoDB connected
# 🚀 Server running on port 5000
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
```

Fill in your `.env` file:
```env
VITE_API_URL=http://localhost:5000
```

```bash
npm run dev
# → http://localhost:5173
```

---

## ☁️ Deployment Guide

### Step 1 — MongoDB Atlas (Database)
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) → Create free account
2. Create a free **M0 cluster**
3. Database Access → Add user with username + password
4. Network Access → Add IP → **Allow from anywhere** `0.0.0.0/0`
5. Connect → Drivers → Copy the connection URI
6. Paste URI into backend `.env` as `MONGO_URI`

---

### Step 2 — Deploy Backend to Render
1. Push `backend/` folder to GitHub
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repo
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Node Version:** `18`
5. Add all environment variables from `.env` in Render dashboard
6. Click **Deploy**
7. Copy your Render URL → e.g. `https://sakthi-dental-api.onrender.com`

---

### Step 3 — Deploy Frontend to Vercel
1. Push `frontend/` folder to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Set **Root Directory** → `frontend`
5. Add environment variable:
   - `VITE_API_URL` = your Render backend URL
6. Click **Deploy**
7. Also update `ALLOWED_ORIGINS` in your Render backend to include your Vercel domain

---

## 📄 Pages Overview

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero slider, Why Us, Services, Testimonials, Amenities, CTA |
| `/about` | About Us | Dr. Anupriya story, Vision & Mission, Team of 9 doctors |
| `/treatments` | Treatments | 15 treatments, category filter, detail modal |
| `/contact` | Contact | Form with validation, clinic info, Google Maps |
| `/faq` | FAQ | 14 questions with accordion |
| `/privacy-policy` | Privacy Policy | Full policy content |

---

## 📧 Email Flow

```
Patient submits form
        ↓
Backend validates data
        ↓
Saves to MongoDB
        ↓
Sends Email 1 → CLINIC_EMAIL (appointment alert)
Sends Email 2 → Patient email (confirmation)
        ↓
Returns success response to frontend
        ↓
Frontend shows success toast
```

---

## 🔐 Security Features

- **Helmet.js** — Sets secure HTTP headers
- **CORS** — Only allows requests from specified origins
- **Rate Limiting** — Max 5 contact form submissions per 15 minutes
- **Express Validator** — Server-side input validation
- **MongoDB Sanitization** — Mongoose schema validation

---

## 👩‍💻 Developer

**Diya Prajapati**
- GitHub: [github.com/Diya2722](https://github.com/Diya2722)
- LinkedIn: [linkedin.com/in/diya-prajapati-258a27275](https://linkedin.com/in/diya-prajapati-258a27275)

---

## 🏥 Client

**Sakthi Dental Clinic**
B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109
📞 +91 9862890897 / +91 9363298118
📧 info@sakthidentalclinic.in
🕐 Monday – Sunday: 9:00 AM – 9:00 PM

---

## 📝 License
This project is built for **Sakthi Dental Clinic** as part of the ShadowFox Web Development Internship.
