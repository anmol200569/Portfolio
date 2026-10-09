# Anmol Singh — Personal Portfolio

A production-ready, fully responsive personal portfolio website for **Anmol Singh** (B.Tech Computer Science & Engineering student at GGITS, developer, and student community builder).

Built with modern web technologies, featuring a dark charcoal aesthetic, restrained electric violet/indigo accents, crisp visual hierarchy, accessible keyboard navigation, and verified accomplishments.

## 🚀 Live Demo & Deployment

* **Live Portfolio**: [https://temporary-turbo-plateau-ihu4ssa.vercel.app](https://temporary-turbo-plateau-ihu4ssa.vercel.app)
* **Target Repository**: [anmol200569/Portfolio](https://github.com/anmol200569/Portfolio)
* **Framework**: React 19 + TypeScript + Vite + Tailwind CSS v4
* **Deployment Target**: Vercel (Auto-configured via `vercel.json`)
* **Vercel Claim Link**: [Claim Deployment to Personal Account](https://vercel.com/claim-deployment?code=5a084898-cb74-4301-86fe-52da23d02631)

## 🛠️ Tech Stack

* **Frontend Framework**: [React 19](https://react.dev/)
* **Type System**: [TypeScript 5](https://www.typescriptlang.org/)
* **Build Tool**: [Vite 6](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Marks
* **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Custom monogram favicon
│   └── images/              # Verified portrait and community photos
│       ├── anmol-profile.jpg
│       ├── ggits-workshop.jpg
│       └── ggits-classroom.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky glass header with mobile menu
│   │   ├── Hero.tsx         # Headline, bio, verified portrait, CTAs
│   │   ├── About.tsx        # Split narrative & GGITS education facts
│   │   ├── Skills.tsx       # Categorized competencies with proficiency indicators
│   │   ├── Experience.tsx   # Microsoft Club Ops Lead, Google & GFG Ambassador roles
│   │   ├── Projects.tsx     # Weather app, Task app, Travel Tracker & MERN showcase
│   │   ├── Achievements.tsx # Google Cloud Arcade Legend, AWS Certified, Red Hat
│   │   ├── Exploring.tsx    # Active learning horizons (DSA, Next.js, Cloud)
│   │   ├── Contact.tsx      # Verified direct email, 1-click copy, mail composer
│   │   ├── Footer.tsx       # Minimal copyright & back-to-top control
│   │   └── Icons.tsx        # Brand SVG icons
│   ├── data/
│   │   └── portfolioData.ts # Centralized, strongly-typed portfolio data
│   ├── App.tsx              # Section orchestration & active-scroll observer
│   ├── index.css            # Tailwind theme, typography, & glass styling
│   └── main.tsx             # Application entry point
├── vercel.json              # Vercel deployment configuration
└── package.json
```

## ⚙️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build & Linting
```bash
npm run build
npm run lint
```

## 📝 Updating Portfolio Information

All content (projects, experience, certifications, contact details) is organized in `src/data/portfolioData.ts`. To add or update:
1. Open `src/data/portfolioData.ts`
2. Update the corresponding object or array (e.g. `projects`, `experience`, `achievements`)
3. Run `npm run build` to verify types and generate production output.
