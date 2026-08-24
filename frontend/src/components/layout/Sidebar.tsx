import Link from "next/link"

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

export default function Sidebar() {
  const currentPath = '/dashboard'

  return (
    <main className="min-h-screen bg-zinc-50 flex">
      <aside className="w-64 bg-white border-r border-zinc-200 p-4 flex flex-col gap-2">
        {pages.map((page) => {
          const isActive = currentPath === page.page

          return (
            <Link 
              key={page.id} 
              href={page.page} 
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
    </main>
  )
}