import DashboardStats from "@/components/sections/dashboard/DashboardStats"

export default function Dashboard() {
  return (
    <>
      <section className="mb-10">
        <h2 className="font-semibold text-[20px]">Welcome to our panel!</h2>
        <p className="text-gray-700">Continue setting up your projects</p>
      </section>

      <DashboardStats />
    </>
  )
}