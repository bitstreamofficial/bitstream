'use client';

import { useState } from 'react';
import Link from 'next/link';

export function UniRideNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:h-18 flex h-16 items-center justify-between">
          {/* Logo & Back Button */}
          <div className="flex items-center space-x-4">
            {/* Back to BitStream Button */}
            <Link
              href="/"
              className="group flex items-center text-gray-500 transition-colors hover:text-gray-700"
              title="Back to BitStream"
            >
              <svg
                className="h-5 w-5 transform transition-transform duration-200 group-hover:-translate-x-1 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="ml-2 hidden text-sm font-medium sm:inline">
                BitStream
              </span>
            </Link>

            {/* UniRide Logo */}
            <Link href="/projects/uniride" className="flex-shrink-0">
              <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent sm:text-2xl lg:text-2xl">
                UniRide
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation Links - Show from lg (1024px+) */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                href="/projects/uniride#features"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                href="/projects/uniride#how-it-works"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                How It Works
              </Link>

              <Link
                href="/projects/uniride/privacy-policy"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Privacy
              </Link>
              <Link
                href="/projects/uniride/terms-of-service"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Terms
              </Link>
              <Link
                href="/projects/uniride#about"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                About
              </Link>
            </div>
          </div>

          {/* Tablet Navigation Links - Show from md to lg (768px - 1023px) */}
          <div className="hidden items-center space-x-3 md:flex lg:hidden">
            <Link
              href="/projects/uniride#features"
              className="rounded-md px-2 py-2 text-xs font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              href="/projects/uniride#how-it-works"
              className="rounded-md px-2 py-2 text-xs font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              How It Works
            </Link>
            <Link
              href="/projects/uniride/privacy-policy"
              className="rounded-md px-2 py-2 text-xs font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Privacy
            </Link>
            <Link
              href="/projects/uniride/terms-of-service"
              className="rounded-md px-2 py-2 text-xs font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Terms
            </Link>
            <Link
              href="/projects/uniride#about"
              className="rounded-md px-2 py-2 text-xs font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              About
            </Link>
          </div>

          {/* CTA Button - Desktop (lg+) */}
          <div className="hidden lg:block">
            <button className="transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </button>
          </div>

          {/* CTA Button - Tablet (md to lg) */}
          <div className="hidden md:block lg:hidden">
            <button className="transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-purple-700">
              Start
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-gray-100 px-2 pb-3 pt-2">
            {/* Back to BitStream - Mobile */}
            <Link
              href="/"
              className="mb-2 flex items-center rounded-md border-b border-gray-100 px-3 py-2 text-base font-medium text-gray-500 transition-colors hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to BitStream
            </Link>

            <Link
              href="/projects/uniride#features"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/projects/uniride#how-it-works"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>

            <Link
              href="/projects/uniride/privacy-policy"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/projects/uniride/terms-of-service"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms of Service
            </Link>
            <Link
              href="/projects/uniride#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <button className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 text-left text-base font-medium text-white transition-all duration-200 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
