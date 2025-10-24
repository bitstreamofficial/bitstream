'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './button';

/**
 * Responsive Navbar Component
 * Breakpoints:
 * - Mobile (< 768px): Hamburger menu with all navigation items
 * - Tablet (768px - 1023px): Full navigation menu + "Contact" button
 * - Desktop (≥ 1024px): Full navigation menu + "Let's build together" button
 */

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  // { name: 'Blog', href: '/blog' },
  // { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Check if navbar is over footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const navbarHeight = 80; // Approximate navbar height

        // Check if top of footer is visible and navbar is over it
        if (footerRect.top <= navbarHeight && footerRect.bottom > 0) {
          setIsOverFooter(true);
        } else {
          setIsOverFooter(false);
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isOverFooter
          ? 'border-b border-white/10 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-indigo-900/95 shadow-2xl backdrop-blur-lg'
          : scrolled
            ? 'border-b border-white/20 bg-white/80 shadow-lg backdrop-blur-lg'
            : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group flex cursor-pointer items-center space-x-2 sm:space-x-3"
            >
              <div className="relative">
                <div className="flex h-9 w-9 transform items-center justify-center overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl sm:h-10 sm:w-10">
                  <img
                    src="/images/logo.png"
                    alt="BitStream Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur transition-opacity duration-300 group-hover:opacity-30" />
              </div>
              <div>
                <span
                  className={`text-lg font-bold transition-all duration-300 sm:text-xl ${
                    isOverFooter
                      ? 'text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent'
                      : 'text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent'
                  }`}
                >
                  BitStream
                </span>
                <div
                  className={`-mt-1 hidden text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block ${
                    isOverFooter ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  Building scalable solutions
                </div>
              </div>
            </Link>
          </div>

          {/* Tablet/Desktop Navigation - Show from 768px+ */}
          <div className="hidden items-center space-x-4 md:flex lg:space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`animate-fade-in-up group relative cursor-pointer text-sm font-medium transition-colors lg:text-base ${
                  isOverFooter
                    ? 'text-gray-200 hover:text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <div
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${
                    isOverFooter
                      ? 'from-blue-400 to-purple-400'
                      : 'from-blue-600 to-purple-600'
                  } origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100`}
                />
              </Link>
            ))}

            {/* CTA Button - Desktop (1024px+) */}
            <Link href="/contact" className="hidden lg:block">
              <Button className="animate-fade-in-up animation-delay-600 transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                Let's build together
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </Link>

            {/* CTA Button - Tablet only (768px-1023px) */}
            <Link href="/contact" className="lg:hidden">
              <Button className="transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                Contact
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button - Show below 768px */}
          <div className="md:hidden">
            <button
              type="button"
              className={`relative flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 ${
                mobileMenuOpen
                  ? isOverFooter
                    ? 'bg-white/20'
                    : 'bg-gray-100'
                  : isOverFooter
                    ? 'hover:bg-white/10'
                    : 'hover:bg-gray-50'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative h-6 w-6">
                <span
                  className={`absolute block h-0.5 w-6 transition-all duration-300 ${
                    isOverFooter ? 'bg-white' : 'bg-gray-600'
                  } ${mobileMenuOpen ? 'top-3 rotate-45' : 'top-1'}`}
                />
                <span
                  className={`absolute block h-0.5 w-6 transition-all duration-300 ${
                    isOverFooter ? 'bg-white' : 'bg-gray-600'
                  } ${mobileMenuOpen ? 'opacity-0' : 'top-3'}`}
                />
                <span
                  className={`absolute block h-0.5 w-6 transition-all duration-300 ${
                    isOverFooter ? 'bg-white' : 'bg-gray-600'
                  } ${mobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Below 768px */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`mb-4 space-y-2 rounded-2xl py-4 shadow-xl backdrop-blur-lg ${
              isOverFooter
                ? 'border border-white/20 bg-slate-800/95'
                : 'border border-white/20 bg-white/95'
            }`}
          >
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`animate-fade-in-up block rounded-xl px-6 py-3 text-base font-medium transition-all duration-300 active:scale-95 ${
                  isOverFooter
                    ? 'text-gray-200 hover:bg-white/10 hover:text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div
              className={`mt-2 px-6 pt-2 ${
                isOverFooter
                  ? 'border-t border-white/20'
                  : 'border-t border-gray-200'
              }`}
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="animate-fade-in-up animation-delay-400 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl active:scale-95">
                  Let's build together
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
