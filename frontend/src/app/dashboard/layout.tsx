'use client'

import { useState } from "react"
import Sidebar from "@/components/layout/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <header className="p-1 md:hidden border-b border-zinc-200 bg-white flex items-center">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl text-zinc-600 hover:bg-zinc-100 m-auto"
          >
            ☰ Menu
          </button>
        </header>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}