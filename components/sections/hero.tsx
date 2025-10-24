import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 md:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

        {/* Floating Orb - Reduced to single element */}
        <div className="animate-blob absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 mix-blend-multiply blur-2xl filter" />

        {/* Enhanced Stylish Floating Card */}
        <div className="animate-float group absolute right-4 top-32 z-10 hidden h-32 w-56 lg:right-8 lg:block xl:right-20">
          {/* Main card */}
          <div className="hover:shadow-3xl relative h-full w-full transform overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-white/20 via-blue-50/30 to-purple-50/20 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105">
            {/* Animated gradient background */}
            <div className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-60" />

            {/* Floating particles/dots */}
            <div className="absolute left-4 top-4 h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            <div className="animation-delay-300 absolute right-6 top-6 h-1.5 w-1.5 animate-ping rounded-full bg-purple-400" />
            <div className="animation-delay-500 absolute bottom-5 left-6 h-1 w-1 animate-bounce rounded-full bg-pink-400" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-center p-6">
              <div className="mb-2 flex items-center">
                <div className="mr-3 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r from-green-400 to-emerald-400" />
                <span className="text-sm font-semibold text-gray-700/90">
                  Live Projects
                </span>
              </div>
              <div className="mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                5 Active
              </div>
              <div className="text-xs font-medium text-gray-600/80">
                In Development
              </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-50">
              <div className="h-full w-full rounded-3xl bg-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-sm">
            <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-sm font-medium text-gray-700">
              Available for new projects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-in-up animation-delay-200 mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text pb-2 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            Building{' '}
            <span className="relative">
              <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                scalable
              </span>
              <div className="animate-scale-x animation-delay-1000 absolute -bottom-2 left-0 right-0 h-1 scale-x-0 transform rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600" />
            </span>{' '}
            <span className="inline-block pt-3 lg:pt-0">solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up animation-delay-400 mx-auto mb-10 max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            We craft{' '}
            <span className="font-semibold text-blue-600">
              innovative mobile & web experiences
            </span>{' '}
            that scale with your vision and deliver{' '}
            <span className="font-semibold text-purple-600">
              extraordinary results
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-600 mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/contact">
              <Button className="group relative transform cursor-pointer rounded-xl border-0 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl">
                <span className="relative z-10">Let's build together</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur transition-opacity duration-300 group-hover:opacity-50" />
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
            <Link href="/projects">
              <Button
                variant="outline"
                className="group transform cursor-pointer rounded-xl border-2 border-gray-200 bg-white/80 px-8 py-4 text-lg font-semibold text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 hover:shadow-xl"
              >
                <svg
                  className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Explore our work
              </Button>
            </Link>
          </div>

          {/* Stats with Modern Cards */}
          <div className="animate-fade-in-up animation-delay-800 mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                value: '150+',
                label: 'Projects Delivered',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                value: '7+',
                label: 'Years Experience',
                color: 'from-purple-500 to-pink-500',
              },
              {
                value: '99%',
                label: 'Client Satisfaction',
                color: 'from-green-500 to-teal-500',
              },
              {
                value: '24/7',
                label: 'Support Available',
                color: 'from-orange-500 to-red-500',
              },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="relative transform rounded-2xl border border-white/40 bg-white/60 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div
                    className={`bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl ${stat.color} mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform animate-bounce md:block">
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400">
              <div className="animate-scroll mt-2 h-3 w-1 rounded-full bg-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
