'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function UniRideHeader() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#5CE65C]/20 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-1 text-sm text-[#333333] transition-colors hover:text-[#1DA1F2]"
            >
              <svg
                className="h-4 w-4"
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
              <span className="sm:hidden">Back</span>
            </Link>
            <Link
              href="/projects/uniride"
              className="flex items-center space-x-2"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/images/ur_logo.jpg"
                  alt="UniRide Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-[#333333]">
                Uni<span className="text-[#5CE65C]">Ride</span>
              </span>
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/projects/uniride#features"
              className="text-[#333333] transition-colors hover:text-[#1DA1F2]"
            >
              Features
            </Link>
            <Link
              href="/projects/uniride#how-it-works"
              className="text-[#333333] transition-colors hover:text-[#1DA1F2]"
            >
              How It Works
            </Link>
            <Link
              href="/projects/uniride#testimonials"
              className="text-[#333333] transition-colors hover:text-[#1DA1F2]"
            >
              Reviews
            </Link>
            <Link
              href="/projects/uniride/privacy-policy"
              className="text-[#333333] transition-colors hover:text-[#1DA1F2]"
            >
              Privacy
            </Link>
            <Link
              href="/projects/uniride/terms-of-service"
              className="text-[#333333] transition-colors hover:text-[#1DA1F2]"
            >
              Terms
            </Link>
            <button className="rounded-full bg-[#5CE65C] px-6 py-2 font-semibold text-[#333333] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#1DA1F2] hover:text-white hover:shadow-lg">
              Download
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg
              className="h-6 w-6 text-[#333333]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
