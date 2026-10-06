# The Oakrich International School — Official Website

> **Premium Editorial Website** for The Oakrich International School, Hosur, Tamil Nadu.  
> Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.  
> **100% Static Export** — zero server backend, zero database, zero external API costs.

---

## 🏫 Key Features

- **Brand & Visual Language**: Art-directed editorial layout, clean pure white background (`#FFFFFF`), dark charcoal headings (`#111111`), muted secondary copy (`#5F5F5F`), soft section tones (`#F7F7F5`), and a restrained plum/magenta accent (`#701A75`) derived from the official Oakrich tree logo.
- **Static Export Architecture**: Configured with Next.js `output: 'export'` and unoptimized images. Produces pre-rendered HTML/CSS/JS in `out/` ready for immediate hosting on Vercel, Netlify, Cloudflare Pages, AWS S3, or any static host.
- **Instant WhatsApp Enquiry Generator**: Client-side form validating parent name, student name, grade, and 10-digit mobile number. Generates clean URL-encoded WhatsApp messages sent directly to `+91 7305664161` (`wa.me`).
- **Signature Academic Journey**: Interactive 4-stage progression (Kindergarten Pre-KG to UKG, Primary Grades I–V, Middle School Grades VI–VIII, and High School Grades IX–X) with curriculum benchmarks, pedagogy notes, and outcomes.
- **Campus & Laboratories**: Asymmetrical photography-led masonry grid highlighting Math Lab, Science Labs, AI & Coding Studio, Robotics & Innovation, Digital Language Lab, and Space & Astronomy.
- **Student Life Mosaic & Sports**: Expressive editorial coverage of Bharatanatyam, Contemporary Dance, Fine Arts, Music Academy, Abacus mental arithmetic, Oratory & Public Speaking, JCI India youth leadership, and athletics/sports.
- **Governance & Leadership**: Profile of Principal & Chairperson Dr. L. Suma Yadav, M.A., M.Ed., with 18+ years of educational stewardship and state-recognized honors.
- **Institutional Safety & Integrity**: Reassuring coverage of 24/7 CCTV surveillance, GPS-enabled buses, mandatory lady attendants on transport, and POCSO/child wellbeing education.

---

## 🛠️ Project Structure

```
oakrich-school/
├── app/
│   ├── layout.tsx              # Root HTML5 structure, Plus Jakarta Sans font, SEO & OpenGraph
│   ├── page.tsx                # Single-page editorial storytelling layout
│   └── globals.css             # Tailwind directives, CSS variables, typography clamp utilities
├── components/
│   ├── Header.tsx              # Sticky header with transparent-to-white scroll transition & enquire CTA
│   ├── MobileMenu.tsx          # Accessible full-height mobile overlay navigation
│   ├── Hero.tsx                # Editorial split hero with staggered text reveal and image scale
│   ├── StatsStrip.tsx          # Animated count-up statistics strip (864+ Students, 60 Staff, ICSE, Hosur)
│   ├── About.tsx               # 5/7 asymmetric storytelling grid with Section 01 numeral & school philosophy
│   ├── AcademicJourney.tsx     # Signature 4-stage progression (Kindergarten, Primary, Middle, High School)
│   ├── AcademicStage.tsx       # Interactive stage detail component with curriculum and pedagogy highlights
│   ├── Facilities.tsx          # Photography-led editorial masonry (Math, Science, AI & Coding, Robotics, etc.)
│   ├── Safety.tsx              # Calm, reassuring security & care features (CCTV, GPS buses, female attendants)
│   ├── StudentLife.tsx         # Expressive photo mosaic: Dance, Arts, Music, Abacus, Public Speaking, JCI
│   ├── Sports.tsx              # Athletics, football, basketball, skating, martial arts, indoor games
│   ├── Leadership.tsx          # Profile of Principal & Chairperson Dr. L. Suma Yadav, M.A., M.Ed.
│   ├── Admissions.tsx          # High-conversion 2026-2027 admissions section
│   ├── EnquiryForm.tsx         # Client-side validated form generating wa.me encoded payload
│   ├── Contact.tsx             # School timings, telephone directory, email, and campus directions
│   └── Footer.tsx              # Clean institutional footer with affiliation notes and quick links
├── data/
│   └── school.ts               # Authoritative, typed school content repository
├── lib/
│   └── whatsapp.ts             # Browser-based WhatsApp URL builder with error validation
├── public/
│   └── images/
│       ├── logo.png            # Official Oakrich International School logo
│       ├── hero-campus.jpg     # High-resolution campus editorial photography
│       ├── academics/          # Stage-specific photography
│       ├── facilities/         # Science, Math, AI, Robotics, Space, Language labs
│       ├── student-life/       # Performing arts, sports, public speaking, leadership
│       └── leadership/         # Chairperson & Principal portrait
├── next.config.ts              # Static export configuration (output: 'export')
├── tailwind.config.ts          # Brand colors, typography, fluid clamps, border radius
├── tsconfig.json               # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### 1. Installation

```bash
cd C:\Users\PC\.gemini\antigravity\scratch\oakrich-school
npm install
```

### 2. Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the site live.

### 3. Build & Static Export

```bash
npm run build
```

This compiles the TypeScript code and produces the static output folder at `out/`.

### 4. Deploying to Production

You can deploy the contents of the `out/` folder to any static hosting provider:

- **Vercel**: Deploy directly by linking the repository (Framework Preset: Next.js).
- **Netlify**: Set publish directory to `out`.
- **Cloudflare Pages**: Set build output directory to `out`.
- **GitHub Pages / AWS S3**: Upload the contents of `out/`.

---

## ⚙️ Configuration & Content Updates

All content is maintained centrally in typed data files:

1. **WhatsApp Number**:
   - Location: `lib/whatsapp.ts`
   - Constant: `WHATSAPP_NUMBER = "917305664161"`
2. **School Contact Numbers & Emails**:
   - Location: `data/school.ts`
   - Edit `school.phone`, `school.email`, `school.admissionsYear`, etc.
3. **Academic Information, Facilities & Staff**:
   - Location: `data/school.ts`
   - Modify or expand stages, labs, sports disciplines, or leadership credentials cleanly without touching JSX markup.
