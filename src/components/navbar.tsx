import Link from 'next/link'
import { Button } from './ui/button'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-semibold text-xl text-[#1CC29F]">
            Splitwise
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button className="bg-[#1CC29F] hover:bg-[#1CC29F]/90">Sign up</Button>
        </div>
      </div>
    </nav>
  )
}
