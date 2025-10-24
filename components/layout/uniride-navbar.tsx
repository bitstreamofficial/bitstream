'use client';

import { useState } from 'react';
import Link from 'next/link';

export function UniRideNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo & Back Button */}
          <div className="flex items-center space-x-4">
            {/* Back to BitStream Button */}
            <Link 
              href="/" 
              className="group flex items-center text-gray-500 hover:text-gray-700 transition-colors"
              title="Back to BitStream"
            >
              <svg 
                className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:-translate-x-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline ml-2 text-sm font-medium">BitStream</span>
            </Link>
            
            {/* UniRide Logo */}
            <Link href="/projects/uniride" className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UniRide
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation Links - Show from lg (1024px+) */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link 
                href="/projects/uniride#features" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link 
                href="/projects/uniride#how-it-works" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                How It Works
              </Link>
              
              <Link 
                href="/projects/uniride/privacy-policy" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Privacy
              </Link>
              <Link 
                href="/projects/uniride/terms-of-service" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Terms
              </Link>
              <Link 
                href="/projects/uniride#about" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          {/* Tablet Navigation Links - Show from md to lg (768px - 1023px) */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <Link 
              href="/projects/uniride#features" 
              className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md text-xs font-medium transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/projects/uniride#how-it-works" 
              className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md text-xs font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/projects/uniride/privacy-policy" 
              className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md text-xs font-medium transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/projects/uniride/terms-of-service" 
              className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md text-xs font-medium transition-colors"
            >
              Terms
            </Link>
            <Link 
                href="/projects/uniride#about" 
                className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md text-xs font-medium transition-colors"
            >
                About
              </Link>
          </div>

          {/* CTA Button - Desktop (lg+) */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* CTA Button - Tablet (md to lg) */}
          <div className="hidden md:block lg:hidden">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Start
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100">
            {/* Back to BitStream - Mobile */}
            <Link 
              href="/" 
              className="text-gray-500 hover:text-gray-700 flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors border-b border-gray-100 mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to BitStream
            </Link>
            
            <Link 
              href="/projects/uniride#features" 
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/projects/uniride#how-it-works" 
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            
            <Link 
              href="/projects/uniride/privacy-policy" 
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/projects/uniride/terms-of-service" 
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms of Service
            </Link>
            <Link 
              href="/projects/uniride#about" 
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <button className="w-full text-left bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
