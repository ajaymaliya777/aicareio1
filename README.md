# aicareio — Enterprise AI Corporate Platform

**AI Solutions for Real-World Businesses**  
Location: Jaipur, Rajasthan, India  
Positioning: AI consulting, enterprise AI products, intelligent automation, and software engineering.

---

## 🚀 Technology Stack (Express.js, React, Node.js, TypeScript)

- **Frontend:** React 18, TypeScript, React Router 6, Lucide Icons, Modern CSS Design System (Deep Black / Midnight Navy / Cyan Neon Glows / Glassmorphism)
- **Backend:** Node.js, Express.js, TypeScript
- **Form Destination:** Direct Google Forms Integration via secure server endpoint mapped directly to Google Form ID `1FAIpQLSfNnLaWSJRTxN9x9gAhY7PnUKTkvBBlCb1eMf2dz-BoW6tukg`

---

## 📂 Project Structure

```
aicareio-updated/
├── public/
│   ├── aicareio-banner.png         # Futuristic brand banner
│   ├── aicareio-logo.png           # Original aicareio logo
│   ├── favicon.svg                 # Brand SVG icon
│   ├── robots.txt                  # SEO crawler rules
│   └── sitemap.xml                 # Canonical XML sitemap
├── server/
│   ├── tsconfig.json               # Backend TypeScript configuration
│   └── server.ts                   # Express server + Direct Google Form sync
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Futuristic responsive header
│   │   ├── Footer.tsx              # Corporate footer with business details
│   │   └── EnquiryForm.tsx         # Custom-styled enquiry form (synced directly to Google Form)
│   ├── data/
│   │   └── siteData.ts             # Grounded enterprise copy & verified case study schemas
│   ├── pages/
│   │   ├── HomePage.tsx            # Cinematic homepage
│   │   ├── ServicesPage.tsx        # 7 dedicated enterprise practice sections
│   │   ├── CaseStudiesPage.tsx     # Hotel workflow, EnterpriseDoc AI, Voice AI Assistant
│   │   ├── CompanyPage.tsx         # Corporate overview, mission, principles (No personal info)
│   │   └── ContactPage.tsx         # Direct contact channels + Custom enquiry form
│   ├── App.tsx                     # React Router routes with automatic scroll-to-top
│   ├── index.css                   # Enterprise dark glassmorphism design system
│   └── main.tsx                    # React client entry point
├── .env.example                    # Environment variable template
├── index.html                      # SEO & OpenGraph enabled HTML5 container
├── package.json                    # Dependency configuration (Express, React, TypeScript, Node.js)
├── tsconfig.json                   # Client TypeScript configuration
├── vite.config.ts                  # Vite build tooling with API proxy
└── aicareio-final-website.zip      # Complete project archive
```

---

## 📋 Google Forms Backend Integration Mapping

The custom enquiry form maps directly to the verified Google Form fields without embedding or redirecting to Google:

| Website Field | Google Form Field Title | Verified Google Entry ID |
|---|---|---|
| **Full Name** | *Your name* | `entry.378124612` |
| **Phone Number** | *Phone number* | `entry.1643538742` |
| **Email Address** | *Email address* | `entry.66680179` |
| **Service Required** | *Services you're interested in* | `entry.67958042` |
| **Project Details** | *What would you like to build or solve? \** | `entry.624228568` |

---

## 🛠️ Instructions for Running and Deploying

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```env
PORT=5000
GOOGLE_FORM_ID=1FAIpQLSfNnLaWSJRTxN9x9gAhY7PnUKTkvBBlCb1eMf2dz-BoW6tukg
```

### 3. Run Development Mode
To run both client and server concurrently:
```bash
npm run dev
```
- Client runs on: `http://localhost:5173`
- Express API server runs on: `http://localhost:5000`

### 4. Build for Production
```bash
npm run build
```

### 5. Start Production Server
```bash
npm start
```
The Express server serves the compiled React application and processes all `/api/enquiry` submissions, recording them directly to your existing Google Form.
