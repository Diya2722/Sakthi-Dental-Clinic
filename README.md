# 🦷 Sakthi Dental Clinic 

A modern, fully responsive **MERN stack** website built for **Sakthi Dental Clinic**, Hosur, Tamil Nadu. The website provides patients with detailed information about dental treatments, doctor profiles, clinic facilities, and a fully functional contact/appointment form with email notifications and MongoDB storage.

> 🔗 **Live Demo:** [https://sakthi-dental-clinic-lime.vercel.app](https://sakthi-dental-clinic-lime.vercel.app)
> 
> 🔗 **Backend API:** [https://sakthi-dental-clinic-n2sa.onrender.com](https://sakthi-dental-clinic-n2sa.onrender.com)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Future Scope](#-future-scope)
- [Acknowledgments](#-acknowledgments)
- [License](#-license)

---

## ✨ Features

- 🏠 **Hero Slider** — Auto-rotating banner with 3 clinic images and smooth transitions
- 📄 **6 Complete Pages** — Home, About Us, Treatments, Contact, FAQ, Privacy Policy
- 🦷 **15 Treatments** — Categorized with filter tabs and detail modal popup
- 👩‍⚕️ **Doctor Profiles** — Team of 9 specialists with roles and details
- 📬 **Contact Form** — Full validation, saves to MongoDB, sends dual email notifications
- 📧 **Email Notifications** — Clinic alert + patient confirmation via Gmail SMTP
- 🎨 **Smooth Animations** — Page transitions and scroll animations with Framer Motion
- 📱 **Fully Responsive** — Mobile-first design for all screen sizes
- 🔒 **Security** — Helmet.js headers, CORS, rate limiting (5 req/15 min)
- 🗺️ **Google Maps** — Embedded clinic location on Contact page
- ⚡ **Fast Loading** — Vite build with optimized assets
- 🔍 **SEO Optimized** — Meta tags, Open Graph, descriptive titles

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS 3 | Styling & responsive design |
| Framer Motion | Animations & transitions |
| React Router v6 | Client-side routing |
| Axios | HTTP requests to backend |
| React Hot Toast | Success/error notifications |
| Lucide React | Icons |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB + Mongoose | Database & ODM |
| Nodemailer | Email sending |
| Helmet.js | Security HTTP headers |
| express-rate-limit | API rate limiting |
| express-validator | Input validation |
| Morgan | HTTP request logging |
| dotenv | Environment variables |

### Deployment
| Service | Purpose |
|---------|---------|
| Vercel | Frontend hosting |
| Render | Backend hosting |
| MongoDB Atlas | Cloud database |

---

## 📁 Project Structure

```
sakthi-dental/
│
├── frontend/                          # React + Vite application
│   ├── public/
│   │   └── assets/
│   │       ├── banners/               # Hero slider images (3 banners)
│   │       ├── treatments/            # Treatment images (15 images)
│   │       ├── amenities/             # Facility icons (5 icons)
│   │       └── logo/                  # Clinic logo
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx             # Responsive navigation with mobile menu
│   │   │   ├── Footer.jsx             # Footer with links, contact, social icons
│   │   │   └── ScrollToTop.jsx        # Auto scroll on route change
│   │   ├── pages/
│   │   │   ├── Home.jsx               # Hero, Why Us, Services, Testimonials, Amenities
│   │   │   ├── About.jsx              # Doctor story, Vision & Mission, Team
│   │   │   ├── Treatments.jsx         # 15 treatments with filter + modal
│   │   │   ├── Contact.jsx            # Form with validation + clinic info + map
│   │   │   ├── FAQ.jsx                # 14 FAQs with accordion
│   │   │   └── PrivacyPolicy.jsx      # Full privacy policy
│   │   ├── App.jsx                    # Router setup
│   │   ├── main.jsx                   # React entry point
│   │   └── index.css                  # Global styles + Tailwind imports
│   ├── .env.example                   # Environment variables template
│   ├── vercel.json                    # Vercel SPA routing config
│   ├── tailwind.config.js             # Tailwind custom theme
│   └── vite.config.js                 # Vite configuration
│
└── backend/                           # Node.js + Express API
    ├── models/
    │   └── Contact.js                 # MongoDB contact schema
    ├── routes/
    │   └── contact.js                 # POST /api/contact + GET /api/contact
    ├── utils/
    │   └── mailer.js                  # Nodemailer email templates
    ├── server.js                      # Express app + MongoDB connection
    ├── .env.example                   # Environment variables template
    ├── render.yaml                    # Render deployment config
    └── package.json
```

---

## 🚀 Installation

### Prerequisites
Make sure you have these installed:
- [Node.js](https://nodejs.org/) >= 18.0.0
- [Git](https://git-scm.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (free)
- Gmail account with [App Password](https://myaccount.google.com/apppasswords) enabled

### Clone the Repository

```bash
git clone https://github.com/Diya2722/Sakthi-Dental-Clinic.git
cd Sakthi-Dental-Clinic/sakthi-dental
```

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your .env values (see Configuration section)
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Set VITE_API_URL=http://localhost:5000
npm run dev
```

---

## 💻 Usage

After running both servers:

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000](http://localhost:5000)

### Available Routes

| Route | Page |
|-------|------|
| `/` | Home page with hero slider |
| `/about` | About Dr. Anupriya and team |
| `/treatments` | All 15 dental treatments |
| `/contact` | Contact form + clinic info |
| `/faq` | Frequently asked questions |
| `/privacy-policy` | Privacy policy |

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | Get all submissions |

### Testing the Contact Form

1. Go to `http://localhost:5173/contact`
2. Fill in Name, Email, Phone (all required)
3. Click **Submit Message**
4. ✅ Green toast appears
5. Data saved to MongoDB Atlas
6. Two emails sent — one to clinic, one to patient

---

## ⚙️ Configuration

### Backend `.env`

Create `backend/.env` file:

```env
# MongoDB Atlas connection string
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/sakthi-dental?retryWrites=true&w=majority

# Server port
PORT=5000

# Gmail SMTP (enable 2FA + generate App Password at myaccount.google.com/apppasswords)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your_16_digit_app_password

# Email addresses
SMTP_FROM=yourgmail@gmail.com
CLINIC_EMAIL=yourgmail@gmail.com

# Allowed frontend origins (comma-separated)
ALLOWED_ORIGINS=http://localhost:5173,https://your-frontend.vercel.app
```

### Frontend `.env`

Create `frontend/.env` file:

```env
# Your backend URL
VITE_API_URL=http://localhost:5000
```

---

## ☁️ Deployment

### 1. MongoDB Atlas
1. Create free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Database Access → Add user with password
3. Network Access → **Allow from anywhere** (`0.0.0.0/0`)
4. Get connection string → paste as `MONGO_URI`

### 2. Backend → Render
1. Push `backend/` to GitHub
2. [Render](https://render.com) → New Web Service → Connect repo
3. Build: `npm install` | Start: `node server.js`
4. Add all environment variables in Render dashboard
5. Deploy → copy your Render URL

### 3. Frontend → Vercel
1. Push `frontend/` to GitHub
2. [Vercel](https://vercel.com) → New Project → Import repo
3. Root Directory: `frontend`
4. Add `VITE_API_URL` = your Render URL
5. Deploy

> ⚠️ After deploying frontend, update `ALLOWED_ORIGINS` in Render to include your Vercel domain.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes
4. Commit with a clear message
```bash
git commit -m "feat: add your feature description"
```
5. Push to your fork
```bash
git push origin feature/your-feature-name
```
6. Open a Pull Request

### Coding Guidelines
- Use meaningful variable and function names
- Keep components small and reusable
- Follow existing code style and formatting
- Test your changes locally before submitting

---

## 🔮 Future Scope

- [ ] **Online Appointment Booking** — Real-time slot selection and calendar integration
- [ ] **Admin Dashboard** — View and manage all contact form submissions
- [ ] **Patient Login Portal** — Track appointments and treatment history
- [ ] **WhatsApp Integration** — Auto-send appointment confirmations via WhatsApp
- [ ] **Multi-language Support** — Tamil and Hindi language options
- [ ] **Blog Section** — Dental health tips and articles
- [ ] **Live Chat** — Real-time patient support widget
- [ ] **Payment Gateway** — Online consultation fee payment

---

## 🙏 Acknowledgments

- **Dr. Anupriya & Team** — Sakthi Dental Clinic, Hosur for trusting us with this project
- **ShadowFox** — For providing this internship opportunity and client project
- [React](https://react.dev/) — Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Lucide React](https://lucide.dev/) — Icon library
- [MongoDB Atlas](https://www.mongodb.com/atlas) — Cloud database
- [Render](https://render.com/) — Backend deployment
- [Vercel](https://vercel.com/) — Frontend deployment

---

## 📄 License

This project was built for **Sakthi Dental Clinic** as part of the **ShadowFox Web Development Internship Program**.

All rights reserved © 2024 Sakthi Dental Clinic, Hosur, Tamil Nadu.

---

## 👩‍💻 Developer

**Diya Prajapati**

[![GitHub](https://img.shields.io/badge/GitHub-Diya2722-black?style=flat&logo=github)](https://github.com/Diya2722)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Diya_Prajapati-blue?style=flat&logo=linkedin)](https://linkedin.com/in/diya-prajapati-258a27275)

---

<div align="center">
  <p>Made with ❤️ for healthier smiles in Hosur, Tamil Nadu 🦷</p>
  <p><strong>Sakthi Dental Clinic</strong> | B2/8, SBM Layout, Anthivadi, Hosur, TN 635109</p>
  <p>📞 +91 9862890897 | 📧 info@sakthidentalclinic.in | 🕐 Daily 9AM–9PM</p>
</div>
