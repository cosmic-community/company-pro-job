'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Team', href: '/#team' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'About', href: '/about' }, // Changed: Added About page link
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Changed: Detect if we're on a subpage (not homepage) to always show solid header
  const isSubPage = pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showSolidHeader = scrolled || isSubPage

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        showSolidHeader
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-md">
            <span className="text-lg font-bold text-white">C</span>
          </div>
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              showSolidHeader ? 'text-navy-900' : 'text-white'
            }`}
          >
            Company Pro
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = link.href === '/about' && pathname === '/about'
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? showSolidHeader
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'bg-white/15 text-white'
                    : showSolidHeader
                      ? 'text-navy-700 hover:bg-navy-50 hover:text-indigo-600'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
            showSolidHeader
              ? 'text-navy-900 hover:bg-navy-50'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-navy-100 bg-white px-4 pb-4 pt-2 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                link.href === '/about' && pathname === '/about'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-navy-700 hover:bg-navy-50 hover:text-indigo-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}