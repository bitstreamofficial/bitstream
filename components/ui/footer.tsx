'use client';

import Link from 'next/link';
import { useState } from 'react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Development', href: '/services#web' },
    { name: 'Mobile Development', href: '/services#mobile' },
    { name: 'AI Integration', href: '/services#ai' },
    { name: 'UI/UX Design', href: '/services#design' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

const socialIcons = [
  {
    name: 'Twitter',
    href: '#',
    icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
    gradient: 'from-sky-400 to-blue-500',
    color: '#1DA1F2',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    gradient: 'from-blue-600 to-blue-700',
    color: '#0077B5',
  },
  {
    name: 'GitHub',
    href: '#',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    gradient: 'from-gray-600 to-gray-800',
    color: '#333',
  },
  {
    name: 'Dribbble',
    href: '#',
    icon: 'M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.375c.53 1.594.73 3.35.73 5.625 0 .88-.12 1.733-.25 2.563-.589-.056-6.979-.669-10.606-1.187-.314-.867-.567-1.666-.867-2.421 4.178-1.708 6.967-4.314 6.993-4.364zm-6.568 16.05c-4.97 0-9.131-3.513-10.126-8.192 3.073.637 6.082 1.175 9.438 1.175 2.124 0 4.248-.299 6.25-.813 1.125 2.437 1.5 4.5 1.5 4.5s-2.063-1.125-4.937-1.125c-2.063 0-4.124.187-4.124.187z',
    gradient: 'from-pink-500 to-rose-500',
    color: '#EA4C89',
  },
];

export function FooterUI() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

        {/* Floating Orbs */}
        <div className="animate-blob absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 mix-blend-multiply blur-2xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 mix-blend-multiply blur-2xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute left-0 top-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30 mix-blend-multiply blur-2xl filter"></div>

        {/* Floating Elements */}
        <div className="animate-float absolute right-20 top-20 hidden h-8 w-8 rounded-full bg-white/10 lg:block"></div>
        <div className="animate-float animation-delay-1000 absolute bottom-32 left-20 hidden h-6 w-6 rounded-full bg-blue-400/20 lg:block"></div>
        <div className="animate-float animation-delay-2000 absolute right-1/3 top-1/3 hidden h-4 w-4 rounded-full bg-purple-400/20 lg:block"></div>
      </div>

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="pb-12 pt-20">
          {/* Top Section with Logo and CTA */}
          <div className="mb-16 text-center">
            <div className="mb-6 inline-block">
              <div className="mb-4 flex items-center justify-center space-x-4">
                <div className="relative">
                  <div className="flex h-16 w-16 transform items-center justify-center rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl transition-transform duration-300 hover:rotate-12">
                    <span className="text-2xl font-bold text-white">B</span>
                  </div>
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg"></div>
                </div>
                <div>
                  <h2 className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
                    BitStream
                  </h2>
                  <p className="-mt-1 text-sm text-blue-300">
                    Building the Future
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mb-4 bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
              Ready to Transform Your Ideas?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              Join hundreds of businesses that trust BitStream to deliver
              exceptional digital experiences.
            </p>

            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/25">
                Start Your Project
              </button>
              <button className="transform rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/20">
                View Our Work
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <p className="mb-6 leading-relaxed text-gray-300">
                  We craft innovative digital experiences that transform
                  businesses and drive meaningful results.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg transition-all duration-300 hover:bg-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-white">Email Us</p>
                        <p className="text-sm text-gray-300">
                          official.bitstream@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg transition-all duration-300 hover:bg-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                        <div className="h-3 w-3 animate-pulse rounded-full bg-white"></div>
                      </div>
                      <div>
                        <p className="font-medium text-white">Status</p>
                        <p className="text-sm text-green-300">
                          Available for new projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="mb-6 flex items-center text-lg font-bold">
                <span className="mr-3 h-6 w-2 rounded-full bg-gradient-to-b from-blue-400 to-purple-400"></span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Company
                </span>
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                    >
                      <span className="mr-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:mr-3 group-hover:w-4"></span>
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 flex items-center text-lg font-bold">
                <span className="mr-3 h-6 w-2 rounded-full bg-gradient-to-b from-green-400 to-teal-400"></span>
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                    >
                      <span className="mr-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-green-400 to-teal-400 transition-all duration-300 group-hover:mr-3 group-hover:w-4"></span>
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 flex items-center text-lg font-bold">
                <span className="mr-3 h-6 w-2 rounded-full bg-gradient-to-b from-orange-400 to-pink-400"></span>
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Resources
                </span>
              </h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                    >
                      <span className="mr-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300 group-hover:mr-3 group-hover:w-4"></span>
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                Stay in the Loop
              </h3>
              <p className="mb-6 text-gray-300">
                Get the latest insights, project updates, and tech trends
                delivered to your inbox.
              </p>

              {isSubscribed ? (
                <div className="animate-fade-in rounded-2xl border border-green-500/30 bg-green-500/20 p-6">
                  <div className="flex items-center justify-center text-green-300">
                    <svg
                      className="mr-2 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Thanks for subscribing! Check your email for confirmation.
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-lg transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="transform whitespace-nowrap rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-12 text-center">
            <h4 className="mb-6 text-lg font-semibold text-gray-300">
              Connect With Us
            </h4>
            <div className="flex justify-center space-x-6">
              {socialIcons.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <div
                    className={`
                    relative flex h-14 w-14 transform items-center justify-center rounded-2xl transition-all duration-300
                    ${
                      hoveredSocial === index
                        ? 'scale-110 shadow-2xl'
                        : 'scale-100 hover:scale-105'
                    }
                  `}
                  >
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-2xl opacity-0 transition-opacity duration-300
                      ${hoveredSocial === index ? 'opacity-100' : ''}
                    `}
                    ></div>
                    <div className="absolute inset-0 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg"></div>
                    <svg
                      className="relative h-6 w-6 text-gray-400 transition-colors duration-300 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </div>

                  {hoveredSocial === index && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 transform">
                      <div className="whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">
                        {social.name}
                      </div>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>
                © {new Date().getFullYear()} BitStream. All rights reserved.
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Built with 💙 and ☕</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm lg:justify-end">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Sitemap',
              ].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 transition-colors duration-300 hover:text-white hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
}
