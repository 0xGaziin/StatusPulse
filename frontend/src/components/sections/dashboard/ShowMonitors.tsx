import MonitorsCard from "./MonitorsCard";

export default function ShowMonitors() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MonitorsCard title="Quasar" status="1 new incident" page="/dashboard/monitors/quasar" />
    </section>
  )
}