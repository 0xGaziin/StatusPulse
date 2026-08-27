// src/components/dashboard/DashboardStats.tsx
import StatsCard from "./StatsCard"

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard title="Active Monitors" value="0" />
      <StatsCard title="Average Uptime" value="99.98%" />
      <StatsCard title="Open Incidents" value="0" />
      <StatsCard title="Response Time" value="0ms" />
    </section>
  )
}