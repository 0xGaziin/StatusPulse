import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center px-6 py-3 border-b border-gray-200">
      <Link href="/" className="flex items-center gap-2.5">
        <Image 
          src="/clipboard-check.png"
          alt="StatusPulse Logo"
          width={40}
          height={40}
          priority
        />
        <h1 className="font-bold">StatusPulse</h1>
      </Link>
      
      <div className="flex items-center gap-3">
        <Link 
          href="/sign-in" 
          className="px-4 py-2 text-sm font-medium border border-green-700 text-green-700 hover:bg-green-50 rounded-md transition-colors"
        >
          Sign In
        </Link>

        <Link 
          href="/register" 
          className="px-4 py-2 text-sm font-medium bg-green-700 text-white border border-green-700 hover:bg-green-800 rounded-md transition-colors shadow-sm"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}