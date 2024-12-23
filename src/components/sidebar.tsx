import Link from 'next/link'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'

const menuItems = [
  { icon: '📊', label: 'Dashboard', href: '/' },
  {
    title: "Recruitment",
    icon: "👥",
    items: [
      { title: "Job Board", href: "/recruitment/job-board" },
      { title: "Applicants", href: "/recruitment/applicants" }
    ]
  },
  { icon: '👤', label: 'Employees', href: '/employees', hasSubmenu: true },
  { icon: '📈', label: 'Performance', href: '/performance', hasSubmenu: true },
  { icon: '💰', label: 'Accounts', href: '/accounts', hasSubmenu: true },
  { icon: '⚙️', label: 'Configuration', href: '/configuration', hasSubmenu: true },
]

const employeeSubmenu = [
  { label: 'All Employee', href: '/employees' },
  { label: 'Attendance', href: '/attendance' },
]

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#1A1E2D] text-white p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          UI
        </div>
        <span className="font-semibold">Untitled UI</span>
      </div>

      <div className="mb-6">
        <Input
          type="search"
          placeholder="search"
          className="bg-[#242B3E] border-none text-white placeholder:text-gray-400"
        />
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label || item.title}>
              {item.items ? (
                <div>
                  <Link
                    href={item.items[0].href}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#242B3E] text-gray-400 hover:text-white"
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                  <ul className="ml-8 mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "block px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#242B3E]",
                            subItem.title === 'Attendance' && "bg-[#242B3E] text-white"
                          )}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#242B3E] text-gray-400 hover:text-white"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.hasSubmenu && (
                    <span className="ml-auto">›</span>
                  )}
                </Link>
              )}
              {item.label === 'Employees' && (
                <ul className="ml-8 mt-1 space-y-1">
                  {employeeSubmenu.map((subItem) => (
                    <li key={subItem.label}>
                      <Link
                        href={subItem.href}
                        className={cn(
                          "block px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#242B3E]",
                          subItem.label === 'Attendance' && "bg-[#242B3E] text-white"
                        )}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#242B3E] text-gray-400 hover:text-white"
        >
          <span>⚙️</span>
          <span>Settings</span>
        </Link>
      </div>

      <div className="mt-4 flex items-center gap-3 px-3 py-2">
        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
        <div>
          <div className="text-sm">Olivia Rhye</div>
          <div className="text-xs text-gray-400">olivia@untitledui.com</div>
        </div>
        <button className="ml-auto">
          <span>›</span>
        </button>
      </div>
    </div>
  )
}
