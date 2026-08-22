import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h2 className="text-9xl font-bold text-blue-800">404</h2>
      <p>This page wasn't found.</p>
      <Link href='/' className="text-blue-600 hover:underline mt-2">
        Go back to home page
      </Link>
    </div>
  )
}