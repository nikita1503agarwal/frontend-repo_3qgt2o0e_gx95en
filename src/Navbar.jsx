import { Link, NavLink } from 'react-router-dom'
import { Menu, Film, Sparkles } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Saved Edits', to: '/saved' },
  { label: 'Wishlist', to: '/wishlist' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 blur-md opacity-60 rounded-full"></span>
              <div className="relative bg-white/5 border border-white/10 rounded-full p-2">
                <Film className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="font-semibold tracking-tight text-white">Prime Cut</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-black font-medium px-4 py-2 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <Sparkles className="h-4 w-4" />
              Get Started
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg ${isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
