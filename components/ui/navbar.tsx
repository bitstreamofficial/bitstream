'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from './button'

/**
 * Responsive Navbar Component
 * Breakpoints:
 * - Mobile (< 768px): Hamburger menu with all navigation items
 * - Tablet (768px - 1023px): Full navigation menu + "Contact" button
 * - Desktop (≥ 1024px): Full navigation menu + "Let's build together" button
 */

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 overflow-hidden">
                  <img 
                    src="/images/logo.png" 
                    alt="BitStream Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  BitStream
                </span>
                <div className="hidden lg:block text-xs text-gray-500 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Building scalable solutions
                </div>
              </div>
            </Link>
          </div>

          {/* Tablet/Desktop Navigation - Show from 768px+ */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium group animate-fade-in-up cursor-pointer text-sm lg:text-base"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}

            {/* CTA Button - Desktop (1024px+) */}
            <Link href="/contact" className="hidden lg:block">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-600">
                Let's build together
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>

            {/* CTA Button - Tablet only (768px-1023px) */}
            <Link href="/contact" className="lg:hidden">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Contact
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button - Show below 768px */}
          <div className="md:hidden">
            <button
              type="button"
              className={`relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'bg-gray-100' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                  mobileMenuOpen ? 'top-3 rotate-45' : 'top-1'
                }`} />
                <span className={`absolute block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'top-3'
                }`} />
                <span className={`absolute block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                  mobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Below 768px */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 mb-4">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium animate-fade-in-up active:scale-95"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-6 pt-2 border-t border-gray-200 mt-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400 active:scale-95">
                  Let's build together
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
