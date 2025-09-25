'use client'

import { useState } from 'react'

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js.',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Progressive Web Apps'],
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['Flutter', 'Native iOS/Android', 'UI/UX Design', 'App Store Optimization'],
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  {
    title: 'Backend Development',
    description: 'Scalable backend solutions with robust APIs and database management.',
    features: ['RESTful APIs', 'GraphQL', 'Database Design', 'Cloud Integration'],
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    title: 'DevOps & Deployment',
    description: 'CI/CD pipelines, cloud hosting, and infrastructure management.',
    features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'Automated Testing', 'Monitoring'],
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A8.014 8.014 0 008 21a8.014 8.014 0 003.756-5.242z',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50'
  },
  {
    title: 'Consulting',
    description: 'Technical consulting and architecture planning for your projects.',
    features: ['Technical Architecture', 'Code Review', 'Performance Audit', 'Technology Selection'],
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    gradient: 'from-teal-500 to-blue-500',
    bgGradient: 'from-teal-50 to-blue-50'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, updates, and technical support for your applications.',
    features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', '24/7 Support'],
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50'
  }
]

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [clickedFeature, setClickedFeature] = useState<string | null>(null)

  const handleFeatureClick = (feature: string) => {
    setClickedFeature(feature)
    setTimeout(() => setClickedFeature(null), 600)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hidden lg:block animate-float" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-xl hidden lg:block animate-float animation-delay-1000" />
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-xl hidden lg:block animate-float animation-delay-2000" />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-4 animate-fade-in-up">
              Our Services
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-fade-in-up animation-delay-200"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            We offer comprehensive development services to help your business succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`
                relative h-full bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-8 
                transition-all duration-500 cursor-pointer
                ${hoveredCard === index ? 
                  'scale-105 shadow-2xl shadow-black/10 bg-white/80' : 
                  'hover:scale-102 hover:shadow-xl hover:bg-white/70'
                }
              `}>
                {/* Background gradient overlay on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 rounded-2xl transition-opacity duration-500
                  ${hoveredCard === index ? 'opacity-30' : ''}
                `} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`
                      w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center
                      transform transition-all duration-500
                      ${hoveredCard === index ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'}
                    `}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`
                          flex items-center text-gray-700 cursor-pointer group/feature
                          transition-all duration-300 transform
                          ${clickedFeature === feature ? 'scale-105' : ''}
                        `}
                        onClick={() => handleFeatureClick(feature)}
                      >
                        {/* Animated bullet point */}
                        <div className={`
                          relative w-2 h-2 rounded-full mr-4 transition-all duration-300
                          bg-gradient-to-r ${service.gradient}
                          ${hoveredCard === index ? 'scale-125' : ''}
                          group-hover/feature:scale-150
                        `}>
                          {/* Ripple effect on click */}
                          {clickedFeature === feature && (
                            <div className={`
                              absolute inset-0 rounded-full animate-ping
                              bg-gradient-to-r ${service.gradient} opacity-75
                            `} />
                          )}
                        </div>
                        
                        {/* Feature text */}
                        <span className={`
                          font-medium transition-all duration-300
                          ${hoveredCard === index ? 'text-gray-800' : ''}
                          group-hover/feature:text-gray-900 group-hover/feature:translate-x-1
                          ${clickedFeature === feature ? 'font-semibold' : ''}
                        `}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover progress bar */}
                  <div className={`
                    mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full transform origin-left transition-transform duration-500
                    ${hoveredCard === index ? 'scale-x-100' : 'scale-x-0'}
                  `} />
                </div>

                {/* Floating particles on hover */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    {[...Array(8)].map((_, i) => (
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
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our expert development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white/80 hover:bg-white text-gray-800 font-semibold rounded-full border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                View Portfolio
              </button>
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
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}