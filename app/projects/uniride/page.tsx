'use client';

import Link from 'next/link';
import { UniRideNavbar } from '@/components/layout/uniride-navbar';

export default function UniRidePage() {
  const features = [
    {
      icon: '🎓',
      title: 'Student-Verified',
      description:
        'All riders and drivers are verified university students with valid student IDs',
    },
    {
      icon: '💰',
      title: 'Budget-Friendly',
      description:
        'Split costs with fellow students and save money on transportation',
    },
    {
      icon: '🛡️',
      title: 'Safe & Secure',
      description:
        'Enhanced safety features including real-time tracking and emergency contacts',
    },
    {
      icon: '🌱',
      title: 'Eco-Friendly',
      description:
        'Reduce carbon footprint by sharing rides and promoting sustainable transport',
    },
    {
      icon: '📱',
      title: 'Easy to Use',
      description:
        'Simple, intuitive app designed specifically for student needs',
    },
    {
      icon: '⚡',
      title: 'Quick Matching',
      description:
        'Smart algorithm matches you with students going your way in seconds',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Sign Up',
      description:
        'Create your account using your university email and verify your student status',
    },
    {
      step: '2',
      title: 'Find or Offer',
      description:
        "Search for rides to your destination or offer a ride if you're driving",
    },
    {
      step: '3',
      title: 'Connect',
      description: 'Match with fellow students and coordinate pickup details',
    },
    {
      step: '4',
      title: 'Ride & Split',
      description:
        'Enjoy your ride and split the costs fairly with your travel companions',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Active Students' },
    { number: '50+', label: 'Universities' },
    { number: '100,000+', label: 'Rides Shared' },
    { number: '₹2M+', label: 'Money Saved' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <UniRideNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
              Ride Sharing
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                By Students, For Students
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
              Connect with fellow university students for safe, affordable, and
              eco-friendly rides. Save money, make friends, and reduce your
              carbon footprint with UniRide.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-purple-700">
                Download App
              </button>
              <button className="rounded-lg border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose UniRide?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Built specifically for university students with features that
              matter most to your campus life
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              How UniRide Works
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Getting started is simple. Follow these easy steps to begin your
              ride-sharing journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Built by Students, for Students
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                UniRide was created by university students who understood the
                daily transportation challenges faced by their peers. We believe
                that students should have access to affordable, safe, and
                reliable transportation options that fit their unique needs and
                budgets.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                Our platform creates a trusted community where students can
                connect, share rides, and build lasting friendships while saving
                money and protecting the environment.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:from-blue-700 hover:to-purple-700">
                  Join Our Community
                </button>
                <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 text-center">
              <div className="mb-4 text-6xl">🚗</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Ready to Start?
              </h3>
              <p className="mb-6 text-gray-600">
                Join thousands of students already using UniRide to make their
                campus life easier and more affordable.
              </p>
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 shadow-md transition-all duration-200 hover:shadow-lg">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Transform Your Campus Commute?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Join the UniRide community today and start saving money while making
            new friends
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="transform rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100">
              Download for iOS
            </button>
            <button className="transform rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100">
              Download for Android
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold">UniRide</h3>
              <p className="mb-4 text-gray-400">
                The student ride-sharing platform that connects university
                communities for safer, cheaper, and more sustainable
                transportation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/projects/uniride/privacy-policy"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/uniride/terms-of-service"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Safety Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 UniRide. All rights reserved. Made with ❤️ by students,
              for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
