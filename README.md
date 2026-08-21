# StatusPulse

Lightweight, real-time API health monitoring platform and public status page generator.

StatusPulse automatically monitors endpoint availability, tracks response latency in milliseconds, and provides a clean internal dashboard alongside public-facing status pages.

# 🛠️ Tech Stack

```
Frontend: Next.js, Tailwind CSS

Backend: Node.js

Database: PostgreSQL
```

# ✨ Key Features
**Automated Health Checks:** Scheduled HTTP pings to verify endpoint status codes (200 OK, 404, 500).

**Latency & Uptime Tracking:** Real-time metrics tracking response time in milliseconds and total uptime percentage.

**Public Status Page:** Lightweight, clean view for users to check service status.

**Incident Logging:** Structured database storage for downtimes, timeouts, and connection errors.

# 🚀 Getting Started
**Prerequisites**
Node.js (v18 or higher)

PostgreSQL instance (Local or Docker container)

**1. Installation**
```bash
git clone https://github.com/0xGaziin/StatusPulse.git
cd StatusPulse
npm install
```

**2. Environment Variables**
Create a .env file in the root folder based on the template:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=statuspulse
JWT_SECRET=supersecretkey
```

**3. Running the Project**

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

📁 Folder Structure - Frontend
```pl
├── src/
│   ├── app/          # Next.js routes and API endpoints
│   ├── components/   # Reusable UI components (charts, status indicators)
│   ├── lib/          # Database connection and ping engine
│   └── types/        # TypeScript interfaces and schemas
├── public/           # Static assets
└── .env.example
```

# 👤 Author
Created by **0xGaziin**.