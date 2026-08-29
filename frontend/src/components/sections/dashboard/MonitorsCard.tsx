import Link from "next/link";

interface MonitorsCard {
  title: string;
  status: string;
  description?: string;
  page: string;
};

export default function MonitorsCard({ title, status, description, page }: MonitorsCard) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
      <h3 className="font-bold text-center">
        {title}
      </h3>

      <p>
        <strong>Current Status:</strong> {status}
      </p>

      <Link href={page} className="flex flex-1 justify-center mt-8 bg-blue-700 rounded-2xl p-2 font-semibold text-blue-200">
        View
      </Link>
    </div>
  )
}