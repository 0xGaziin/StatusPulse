# StatusPulse - Frontend

The user interface and client-side application for **StatusPulse**, built to deliver a seamless management dashboard and clean public status pages.

# 🛠️ Tech Stack & Tools
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

# 🚀 Getting Setup

**1. Installation**
Navigate to the frontend directory and install the dependencies:
```bash
cd frontend
npm install
```

**2. Running the Project**
```bash
# Start development server
npm run dev

# Create a production build
npm run build

# Run production server
npm start
```

# 📁 Project Structure
```
frontend/
├── src/
│   ├── app/                 # Next.js routes, layouts, and pages (App Router)
│   │   ├── layout.tsx       # Root layout wrapper
│   │   ├── page.tsx         # Home / Landing page
│   │   ├── not-found.tsx    # Custom 404 error page
│   │   └── globals.css      # Global Tailwind styles
│   └── components/          # Reusable UI components
│       ├── layout/          # Structural elements (Navbar, Footer)
│       ├── sections/        # Page sections (HeroHeader, Features)
│       └── ui/              # Modular UI elements (Buttons, CTA cards)
├── public/                  # Static assets and images
└── package.json
```

# 👤 Author
Created by **0xGaziin**.