'use client'

import { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    title: 'Web Development',
    description: 'Cutting-edge web applications built with the latest technologies and frameworks for optimal performance and user experience.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    features: ['Next.js & React', 'TypeScript', 'Tailwind CSS', 'Performance Optimized'],
    gradient: 'from-blue-600 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50',
    stats: { projects: '50+', clients: '30+' },
    category: 'Frontend'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile experiences that users love, built for iOS and Android with modern frameworks.',
    icon: 'M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z',
    features: ['React Native', 'iOS & Android', 'App Store Ready', 'Push Notifications'],
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
    stats: { apps: '25+', downloads: '100K+' },
    category: 'Mobile'
  },
  {
    title: 'Backend Solutions',
    description: 'Robust, scalable backend architectures with secure APIs and efficient data management for enterprise applications.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    features: ['Node.js & Python', 'MongoDB & PostgreSQL', 'REST & GraphQL APIs', 'Cloud Integration'],
    gradient: 'from-purple-600 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
    stats: { apis: '100+', uptime: '99.9%' },
    category: 'Backend'
  },
  {
    title: 'AI Integration',
    description: 'Intelligent solutions powered by machine learning and artificial intelligence technologies for business automation.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
    stats: { models: '15+', accuracy: '95%' },
    category: 'AI/ML'
  },
  {
    title: 'DevOps & Cloud',
    description: 'Streamlined deployment pipelines and cloud infrastructure for scalable, reliable applications with automated workflows.',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10',
    features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Security'],
    gradient: 'from-indigo-500 to-blue-600',
    bgGradient: 'from-indigo-50 to-blue-50',
    stats: { deployments: '500+', environments: '20+' },
    category: 'Infrastructure'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces designed with modern principles and user-centered approach for optimal engagement.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z',
    features: ['Figma & Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
    gradient: 'from-teal-500 to-cyan-600',
    bgGradient: 'from-teal-50 to-cyan-50',
    stats: { designs: '80+', satisfaction: '98%' },
    category: 'Design'
  }
]

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))]
  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleServiceHover = (index: number | null) => {
    setHoveredService(index)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
        
        {/* Floating Elements */}
        <div className="absolute top-16 left-16 w-16 h-12 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hidden lg:block animate-float">
          <div className="p-2">
            <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60" />
            <div className="w-2/3 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1 opacity-40" />
          </div>
        </div>
      </div>

      <div className="relative container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-full mb-8 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              ✨ Our Expertise
            </span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Services that{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
                transform
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-scale-x animation-delay-1000" />
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            From concept to deployment, we provide end-to-end solutions that drive innovation and deliver exceptional results across all platforms.
          </p>
        </div>

        {/* Filter Tabs - Responsive */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-600 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="w-full max-w-4xl">
            {/* Mobile: Horizontal scroll */}
            <div className="md:hidden overflow-x-auto scrollbar-hide">
              <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-2 inline-flex gap-2 min-w-full">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex-shrink-0
                      ${activeCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                      }
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tablet & Desktop: Flex wrap */}
            <div className="hidden md:flex bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-2 gap-2 flex-wrap justify-center">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 whitespace-nowrap
                    ${activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                    }
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <div
              key={service.title}
              className={`group transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${800 + index * 150}ms` }}
              onMouseEnter={() => handleServiceHover(index)}
              onMouseLeave={() => handleServiceHover(null)}
            >
              {/* Service Card */}
              <div className="relative h-full bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/80 hover:scale-105 hover:shadow-2xl hover:shadow-black/10 cursor-pointer">
                
                {/* Hover Particles */}
                {hoveredService === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: '2s'
                        }}
                      >
                        <div className={`w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full opacity-60`} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Service Header */}
                <div className={`relative h-36 sm:h-40 bg-gradient-to-br ${service.bgGradient} p-4 sm:p-6 flex items-center justify-center overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                  </div>

                  {/* Service Icon */}
                  <div className="relative z-10 text-center">
                    <div className={`
                      w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-2xl mx-auto
                      transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                    `}>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                      </svg>
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-[10px] sm:text-xs font-medium border border-white/30">
                      {service.category}
                    </span>
                  </div>

                  {/* Stats - Hidden on small mobile, show on larger screens */}
                  <div className="hidden xs:flex absolute top-2 sm:top-3 right-2 sm:right-3 gap-1">
                    {Object.entries(service.stats).slice(0, 2).map(([key, value], statIndex) => (
                      <div key={statIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-1 sm:p-1.5 border border-white/30">
                        <div className={`text-[10px] sm:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                          {value}
                        </div>
                        <div className="text-[8px] sm:text-[10px] text-gray-600 capitalize leading-tight">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 sm:p-6">
                  {/* Description */}
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center text-xs text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 flex-shrink-0`} />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    className="w-full text-xs sm:text-sm group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Responsive */}
        <div className="relative bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                🚀 Ready to innovate?
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Let's build your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                next big idea
              </span>
            </h3>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Partner with us to transform your vision into reality. Our expert team is ready to deliver exceptional solutions tailored to your unique needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link href="/services" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  Explore All Services
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl sm:rounded-2xl border-2 hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}