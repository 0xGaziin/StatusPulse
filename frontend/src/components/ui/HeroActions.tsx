// src/components/ui/HeroActions.tsx
import CallToAction from "@/components/sections/landing/CallToAction"

const ACTIONS = [
  {
    href: "/register",
    content: "Start Monitoring for Free",
    backgroundColor: "bg-green-700 hover:bg-green-600",
    textColor: "text-white",
  },
  {
    href: "/demo",
    content: "View Live Demo",
    backgroundColor: "bg-transparent hover:bg-green-950/40",
    borderColor: "border-green-700",
    textColor: "text-green-500",
  },
]

export default function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-2">
      {ACTIONS.map((action) => (
        <CallToAction key={action.href} {...action} />
      ))}
    </div>
  )
}