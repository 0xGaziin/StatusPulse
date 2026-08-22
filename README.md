# StatusPulse

Lightweight, real-time API health monitoring platform and public status page generator.

StatusPulse automatically monitors endpoint availability, tracks response latency in milliseconds, and provides a clean internal dashboard alongside public-facing status pages.

---

# 🛠️ Architecture & Tech Stack

This project is split into two main parts:
- **Frontend (`/frontend`)**: Next.js, Tailwind CSS dashboard and public status pages.
- **Backend (`/backend`)**: Node.js monitoring engine, automated ping scheduler, and PostgreSQL data persistence.

```
StatusPulse/
├── frontend/       # Next.js client application & UI components
├── backend/        # Node.js API server & health check engine
└── README.md       # Project overview`
```

# ✨ Key Features
- **Automated Health Checks:** Scheduled HTTP pings to verify endpoint status codes (200 OK, 404, 500).
- **Latency & Uptime Tracking:** Real-time metrics tracking response time in milliseconds and total uptime percentage.
- **Public Status Page:** Lightweight, clean view for users to check service status.
- **Incident Logging:** Structured database storage for downtimes, timeouts, and connection errors.

# 🚀 Getting Started

To run StatusPulse locally, you need to set up both the backend and the frontend. 

**1. Clone the repository:**
```bash
git clone [https://github.com/0xGaziin/StatusPulse.git](https://github.com/0xGaziin/StatusPulse.git)
cd StatusPulse
```

# 👤 Author
Created by [0xGaziin](https://github.com/0xGaziin).