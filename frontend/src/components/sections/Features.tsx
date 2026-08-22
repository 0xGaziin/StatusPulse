const FEATURES_LIST = [
  {
    title: "Real-time Latency",
    description: "Track server response times instantly with live updates and precise metrics.",
  },
  {
    title: "Instant Outage Alerts",
    description: "Get notified immediately via webhook, email, or Discord when a server goes down.",
  },
  {
    title: "Public Status Page",
    description: "Share a clean, branded status page with your users to build transparency.",
  },
]

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center bg-white text-zinc-900">
      <div className="text-center max-w-2xl flex flex-col gap-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
          Everything you need to keep systems online
        </h2>
        <p className="text-zinc-600 text-base sm:text-lg">
          Powerful features designed for developers who value uptime and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
        {FEATURES_LIST.map((feature, index) => (
          <div 
            key={index} 
            className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50/50 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all flex flex-col gap-3"
          >
            <h3 className="font-bold text-lg text-zinc-900">{feature.title}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}