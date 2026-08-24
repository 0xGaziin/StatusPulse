import Image from "next/image"
import HeroActions from "@/components/ui/HeroActions"

export default function HeroHeader() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
      <div className="flex flex-col gap-4 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-green-500 leading-tight">
          Simple, real-time uptime monitoring
        </h2>

        <p className="text-base sm:text-lg text-zinc-400">
          Track server latency in real time, receive instant outage alerts, and share a clean public status page with your users.
        </p>

        <HeroActions />
      </div>

      <div className="w-full flex justify-center">
        <Image 
          src="/header-image.jpg"
          alt="Customer Support Team image"
          width={600}
          height={400}
          className="w-full h-auto max-h-105 rounded-2xl object-cover shadow-2xl border border-zinc-800"
          priority
        />
      </div>
    </header>
  )
}