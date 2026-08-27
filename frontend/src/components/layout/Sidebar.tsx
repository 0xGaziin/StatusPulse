'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const pages = [
  {
    id: 1,
    title: 'Dashboard',
    page: '/dashboard'
  },
  {
    id: 2,
    title: 'Settings',
    page: '/dashboard/settings'
  }
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const currentPath = usePathname()

  return (
    <>
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-zinc-200 p-4 flex flex-col gap-2 h-screen
        transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:z-auto
      `}>
        <div className="flex items-center justify-between pb-2 md:hidden">
          <span className="font-semibold text-zinc-900 text-sm">Menu</span>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-500 hover:bg-zinc-100"
          >
            ✕
          </button>
        </div>

        {pages.map((page) => {
          const isActive = currentPath === page.page

          return (
            <Link 
              key={page.id} 
              href={page.page} 
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                isActive 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              <span>{page.title}</span>
            </Link>
          )
        })}
      </aside>
    </>
  )
}