// src/components/dashboard/StatsCard.tsx
interface StatsCardProps {
  title: string;
  value: string;
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-2xl font-bold text-gray-900 mt-1">
        {value}
      </p>
    </div>
  )
}