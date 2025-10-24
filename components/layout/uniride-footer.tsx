'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function UniRideFooter() {
  return (
    <footer className="bg-[#333333] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/images/ur_logo.jpg"
                  alt="UniRide Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold">
                Uni<span className="text-[#5CE65C]">Ride</span>
              </span>
            </div>
            <p className="mb-6 text-white/70">
              Made by students, for students. Safe, affordable bike
              ride-sharing for campus communities.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/uniride/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#1DA1F2]"
                title="Facebook Page"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/groups/uniriderscommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#5CE65C]"
                title="Facebook Group"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10zm3 8h-2v7h-2v-7H9V8h2V6.5c0-1.93 1.17-3 2.93-3 .84 0 1.57.07 1.57.07V6h-1.5c-.98 0-1.07.6-1.07 1.2V8h2l-.5 2z" />
                </svg>
              </a>
              <a
                href="mailto:asteriskshq@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#1DA1F2]"
                title="Email Us"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects/uniride#features"
                  className="text-white/70 transition-colors hover:text-[#5CE65C]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/uniride#how-it-works"
                  className="text-white/70 transition-colors hover:text-[#5CE65C]"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/uniride#testimonials"
                  className="text-white/70 transition-colors hover:text-[#5CE65C]"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/groups/uniriderscommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-[#5CE65C]"
                >
                  Join Our Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects/uniride/privacy-policy"
                  className="text-white/70 transition-colors hover:text-[#1DA1F2]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/uniride/terms-of-service"
                  className="text-white/70 transition-colors hover:text-[#1DA1F2]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition-colors hover:text-[#1DA1F2]"
                >
                  Safety Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a
                  href="mailto:asteriskshq@gmail.com"
                  className="hover:text-[#5CE65C]"
                >
                  asteriskshq@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>Daffodil Smart City, Dhaka</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+8801797003614</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-white/70">
            © 2025 UniRide. All rights reserved. Made with ❤️ by students, for
            students.
          </p>
        </div>
      </div>
    </footer>
  );
}
