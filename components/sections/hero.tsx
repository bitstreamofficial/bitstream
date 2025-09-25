import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

        {/* Floating Orb - Reduced to single element */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />

        {/* Glassmorphism Card - Single floating element */}
        <div className="absolute top-20 right-20 w-48 h-24 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hidden lg:block animate-float" />
      </div>

      <div className="relative container-custom z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-8 animate-fade-in-up animation-delay-200">
            Building{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-gradient-x">
                scalable
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full transform scale-x-0 animate-scale-x animation-delay-1000" />
            </span>{' '}
            solutions
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            We craft{' '}
            <span className="font-semibold text-blue-600">innovative mobile & web experiences</span>{' '}
            that scale with your vision and deliver{' '}
            <span className="font-semibold text-purple-600">extraordinary results</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
            <Link href="/contact">
              <Button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-0 cursor-pointer">
                <span className="relative z-10">Let's build together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Explore our work
              </Button>
            </Link>
          </div>

          {/* Stats with Modern Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in-up animation-delay-800">
            {[
              { value: '150+', label: 'Projects Delivered', color: 'from-blue-500 to-cyan-500' },
              { value: '7+', label: 'Years Experience', color: 'from-purple-500 to-pink-500' },
              { value: '99%', label: 'Client Satisfaction', color: 'from-green-500 to-teal-500' },
              { value: '24/7', label: 'Support Available', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
