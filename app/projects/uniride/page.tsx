'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function UniRidePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Affordable Fares',
      description: 'Student-friendly pricing based on distance and route',
    },
    {
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Verified Students',
      description: 'Email & license verification for every rider',
    },
    {
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Fast Match',
      description: 'Get connected with riders in seconds',
    },
    {
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Eco-Friendly',
      description: 'Reduce carbon footprint with shared bike rides',
    },
  ];

  const howItWorks = [
    {
      icon: (
        <svg
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: 'Book',
      description: 'Select your route and preferred pickup point',
    },
    {
      icon: (
        <svg
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
      ),
      title: 'Ride',
      description: 'Connect with verified student rider',
    },
    {
      icon: (
        <svg
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Arrive',
      description: 'Reach your destination safely and on time',
    },
  ];

  const testimonials = [
    {
      name: 'Shahnewaz Seem',
      university: 'Daffodil International University',
      userType: 'Rider',
      avatar: '👩‍💼',
      image: '/images/saeem.jpg',
      text: 'It feels good helping others reach campus while saving on fuel costs.',
    },
    {
      name: 'Adnan Rahman Sayeem',
      university: 'Daffodil International University',
      userType: 'Passenger',
      avatar: '👩‍🎓',
      image: '/images/adnan.jpg',
      text: "UniRide has made my daily commute so much easier and cheaper. I've met amazing people!",
    },
    {
      name: 'Pronob Sarkar',
      university: 'Daffodil International University',
      userType: 'Rider',
      avatar: '👨‍🎓',
      image: '/images/pronob.jpg',
      text: 'Best income source as a student who has a bike. I earn while going to campus anyway!',
    },
    {
      name: 'Zadid Al Lisan',
      university: 'Daffodil International University',
      userType: 'Passenger',
      avatar: '👩‍💼',
      image: '/images/lisan.jpg',
      text: 'I love how easy it is to find rides. The verification system makes me feel secure.',
    },
    {
      name: 'Afif Hasan',
      university: 'Daffodil International University',
      userType: 'Rider',
      avatar: '👩‍💼',
      image: '/images/afif.jpg',
      text: 'A great way to share rides with fellow students. The route matching saves me a lot of time.',
    },
    {
      name: 'Shakhawat Hossain',
      university: 'Daffodil International University',
      userType: 'Rider',
      avatar: '👩‍💼',
      image: '/images/lola.jpg',
      text: 'Finally, an app made just for our university! Easy to post rides and find passengers.',
    },
  ];

  // Drag/Swipe handlers for testimonials slider
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
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

            <div className="hidden items-center space-x-4 md:flex lg:space-x-8">
              <a
                href="#features"
                className="text-sm text-[#333333] transition-colors hover:text-[#1DA1F2] lg:text-base"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-[#333333] transition-colors hover:text-[#1DA1F2] lg:text-base"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-sm text-[#333333] transition-colors hover:text-[#1DA1F2] lg:text-base"
              >
                Reviews
              </a>
              <Link
                href="/projects/uniride/privacy-policy"
                className="text-sm text-[#333333] transition-colors hover:text-[#1DA1F2] lg:text-base"
              >
                Privacy
              </Link>
              <Link
                href="/projects/uniride/terms-of-service"
                className="text-sm text-[#333333] transition-colors hover:text-[#1DA1F2] lg:text-base"
              >
                Terms
              </Link>
              <button className="rounded-full bg-[#5CE65C] px-4 py-2 text-sm font-semibold text-[#333333] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#1DA1F2] hover:text-white hover:shadow-lg lg:px-6">
                Download
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6 text-[#333333]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="border-t border-[#5CE65C]/20 bg-white md:hidden">
              <div className="space-y-1 px-4 pb-3 pt-2">
                <a
                  href="#features"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-[#333333] hover:bg-[#5CE65C]/10 hover:text-[#1DA1F2]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-[#333333] hover:bg-[#5CE65C]/10 hover:text-[#1DA1F2]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-[#333333] hover:bg-[#5CE65C]/10 hover:text-[#1DA1F2]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reviews
                </a>
                <Link
                  href="/projects/uniride/privacy-policy"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-[#333333] hover:bg-[#5CE65C]/10 hover:text-[#1DA1F2]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Privacy
                </Link>
                <Link
                  href="/projects/uniride/terms-of-service"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-[#333333] hover:bg-[#5CE65C]/10 hover:text-[#1DA1F2]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Terms
                </Link>
                <button
                  className="mt-2 w-full rounded-full bg-[#5CE65C] px-6 py-2 text-center font-semibold text-[#333333] shadow-md transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mt-16 overflow-hidden bg-gradient-to-br from-[#5CE65C]/10 via-white to-[#1DA1F2]/10 pb-32 pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-4 top-20 h-72 w-72 rounded-full bg-[#5CE65C] opacity-20 blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div
            className="absolute -right-4 top-40 h-96 w-96 rounded-full bg-[#1DA1F2] opacity-20 blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-block animate-bounce rounded-full bg-[#5CE65C]/20 px-4 py-2 text-sm font-semibold text-[#333333]">
                🎓 By the Students, for Students
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-tight text-[#333333] md:text-6xl lg:text-7xl">
                Fast, Safe, and
                <span className="block bg-gradient-to-r from-[#5CE65C] to-[#1DA1F2] bg-clip-text text-transparent">
                  Reliable Campus Rides
                </span>
              </h1>
              <p className="mb-8 text-xl text-[#333333]/80 md:text-2xl">
                Student-friendly fares. Verified riders. Real-time tracking.
                Join hundreds of students riding smarter every day.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <button className="group relative overflow-hidden rounded-full bg-[#5CE65C] px-8 py-4 text-lg font-semibold text-[#333333] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span className="relative z-10 flex items-center justify-center">
                    📱 Get the App
                  </span>
                  <div className="absolute inset-0 -z-0 bg-[#1DA1F2] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
                <button className="rounded-full border-2 border-[#1DA1F2] bg-white px-8 py-4 text-lg font-semibold text-[#1DA1F2] transition-all duration-300 hover:bg-[#1DA1F2]/10">
                  🚴 Join as a Rider
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#333333]">500+</div>
                  <div className="text-sm text-[#333333]/70">
                    Active Students
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#333333]">1000+</div>
                  <div className="text-sm text-[#333333]/70">
                    Rides Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#333333]">4.9⭐</div>
                  <div className="text-sm text-[#333333]/70">User Rating</div>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main bike illustration using image */}
                <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl bg-gradient-to-br from-[#5CE65C]/20 to-[#1DA1F2]/20 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                  <Image
                    src="/images/bike_rider_1.jpg"
                    alt="UniRide Bike Rider"
                    fill
                    className="object-cover"
                    style={{
                      transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)`,
                    }}
                    priority
                  />
                  {/* Decorative route path */}
                  <div className="absolute -left-4 top-8 flex flex-col space-y-4 sm:-left-8 sm:top-12">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-[#5CE65C] shadow-lg sm:h-4 sm:w-4"></div>
                      <div className="h-1 w-8 bg-[#5CE65C]/50 sm:w-12"></div>
                    </div>
                  </div>
                  <div className="absolute -right-4 bottom-8 flex flex-col space-y-4 sm:-right-8 sm:bottom-12">
                    <div className="flex items-center space-x-2">
                      <div className="h-1 w-8 bg-[#1DA1F2]/50 sm:w-12"></div>
                      <div className="h-3 w-3 animate-pulse rounded-full bg-[#1DA1F2] shadow-lg sm:h-4 sm:w-4"></div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -top-2 right-4 rounded-xl bg-white p-3 shadow-xl sm:-top-4 sm:right-8 sm:rounded-2xl sm:p-4"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-xl sm:text-2xl">⚡</div>
                    <div>
                      <div className="text-xs text-[#333333]/70">Pickup in</div>
                      <div className="text-sm font-bold text-[#5CE65C] sm:text-base">
                        2 mins
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-2 left-4 rounded-xl bg-white p-3 shadow-xl sm:-bottom-4 sm:left-8 sm:rounded-2xl sm:p-4"
                  style={{ transform: `translateY(${-scrollY * 0.03}px)` }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-xl sm:text-2xl">💰</div>
                    <div>
                      <div className="text-xs text-[#333333]/70">
                        Save up to
                      </div>
                      <div className="text-sm font-bold text-[#5CE65C] sm:text-base">
                        70%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#333333] md:text-5xl">
              How It <span className="text-[#5CE65C]">Works</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-[#333333]/80">
              Three simple steps to start your ride-sharing journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="group relative text-center transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Connector line */}
                {index < howItWorks.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-1 w-full bg-gradient-to-r from-[#5CE65C] to-[#1DA1F2] md:block"></div>
                )}

                <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#5CE65C] to-[#1DA1F2] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  {step.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#333333]">
                  {step.title}
                </h3>
                <p className="text-[#333333]/80">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="rounded-full bg-gradient-to-r from-[#5CE65C] to-[#1DA1F2] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start Your First Ride →
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose UniRide Section */}
      <section
        id="features"
        className="bg-gradient-to-br from-[#5CE65C]/5 to-[#1DA1F2]/5 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#333333] md:text-5xl">
              Why Choose <span className="text-[#5CE65C]">UniRide?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-[#333333]/80">
              Built exclusively for students with features that matter
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex justify-center">
                  <div className="rounded-2xl bg-[#5CE65C]/10 p-4 text-[#5CE65C] transition-colors duration-300 group-hover:bg-[#1DA1F2] group-hover:text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#333333]">
                  {feature.title}
                </h3>
                <p className="text-[#333333]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Community Section */}
      <section id="testimonials" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="mb-4 text-5xl">❤️</div>
            <h2 className="mb-4 text-4xl font-bold text-[#333333] md:text-5xl">
              Trusted by Hundreds of{' '}
              <span className="text-[#5CE65C]">University Students</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-[#333333]/80">
              See what our student community has to say
            </p>
          </div>
        </div>

        {/* Slider Container - Full Width */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="scrollbar-hide flex cursor-grab gap-4 overflow-x-auto px-4 py-4 active:cursor-grabbing sm:px-6 lg:px-8"
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-[85vw] flex-shrink-0 rounded-3xl bg-gradient-to-br from-[#5CE65C]/10 to-[#1DA1F2]/10 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
              >
                <div className="mb-6 flex items-center space-x-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-white shadow-md">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-4xl">
                        {testimonial.avatar}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-[#333333]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#333333]/70">
                      {testimonial.university}
                    </div>
                    <div className="mt-1">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          testimonial.userType === 'Rider'
                            ? 'bg-[#5CE65C]/20 text-[#5CE65C]'
                            : 'bg-[#1DA1F2]/20 text-[#1DA1F2]'
                        }`}
                      >
                        {testimonial.userType === 'Rider'
                          ? '🚴 Rider'
                          : '🎒 Passenger'}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[#333333]">"{testimonial.text}"</p>
                <div className="mt-4 text-[#5CE65C]">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Community CTA */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#5CE65C] to-[#1DA1F2] p-12 text-center text-white shadow-2xl">
            <h3 className="mb-4 text-3xl font-bold">
              Join Our Growing Community
            </h3>
            <p className="mb-8 text-lg opacity-90">
              Connect with students on Facebook and stay updated
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://www.facebook.com/groups/uniriderscommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#1DA1F2] shadow-lg transition-all duration-300 hover:scale-105"
              >
                📘 Join Facebook Group
              </a>
              <a
                href="https://www.facebook.com/uniride/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#1DA1F2]"
              >
                👍 Follow Our Page
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download / CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#8bdd8b] via-[#1DA1F2] to-[#4a7e4a] py-20">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#333333] opacity-20 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left: CTA Content */}
            <div className="text-center text-white lg:text-left">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Ready to Ride Smarter?
              </h2>
              <p className="mb-8 text-xl opacity-90">
                Download UniRide today and join hundreds of students saving
                money, time, and the environment.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <button className="flex items-center justify-center space-x-3 rounded-2xl bg-black px-6 py-4 transition-all duration-300 hover:scale-105 hover:bg-gray-900">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </button>

                <button className="flex items-center justify-center space-x-3 rounded-2xl bg-black px-6 py-4 transition-all duration-300 hover:scale-105 hover:bg-gray-900">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="white">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-75 lg:justify-start">
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Instant Setup</span>
                </div>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="relative">
              <div className="relative z-10 mx-auto max-w-md">
                <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
                  <div className="mb-8 text-center text-8xl">📱</div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                      <div className="text-3xl">🚴‍♀️</div>
                      <div className="text-white">
                        <div className="font-semibold">Quick Pickup</div>
                        <div className="text-sm opacity-75">
                          Riders nearby in 5 mins
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                      <div className="text-3xl">💰</div>
                      <div className="text-white">
                        <div className="font-semibold">Save Money</div>
                        <div className="text-sm opacity-75">
                          Up to 30% cheaper than taxi
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                      <div className="text-3xl">🌱</div>
                      <div className="text-white">
                        <div className="font-semibold">Eco-Friendly</div>
                        <div className="text-sm opacity-75">
                          Reduce carbon footprint
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a
                    href="#features"
                    className="text-white/70 transition-colors hover:text-[#5CE65C]"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-white/70 transition-colors hover:text-[#5CE65C]"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-white/70 transition-colors hover:text-[#5CE65C]"
                  >
                    Testimonials
                  </a>
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
                  <Link
                    href="/projects/uniride/account-deletion-request"
                    className="text-white/70 transition-colors hover:text-[#1DA1F2]"
                  >
                    Account Deletion
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
              © 2025 UniRide. All rights reserved. Made with ❤️ by students,
              for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
