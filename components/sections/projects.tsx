'use client'

import { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const featuredProjects = [
  {
    name: 'Litaria',
    description: 'A comprehensive literature management platform for researchers and academics with advanced search capabilities, citation management, and collaborative features.',
    image: '/images/project-litaria.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    category: 'Web Platform',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-600 to-purple-600',
    bgColor: 'from-blue-50 to-purple-50',
    stats: { users: '10K+', papers: '50K+' },
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    name: 'DIU BusBuddy',
    description: 'Smart campus transportation system with real-time GPS tracking, route optimization, and student notifications for Dhaka International University.',
    image: '/images/project-busbuddy.jpg',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Push Notifications'],
    category: 'Mobile App',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50',
    stats: { students: '5K+', routes: '15+' },
    icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z'
  },
  {
    name: 'BEMS',
    description: 'Building Energy Management System with IoT integration for monitoring and optimizing energy consumption in real-time with advanced analytics.',
    image: '/images/project-bems.jpg',
    technologies: ['Next.js', 'IoT Sensors', 'PostgreSQL', 'Chart.js', 'WebSocket'],
    category: 'IoT Platform',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50',
    stats: { buildings: '25+', savings: '30%' },
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    name: 'ScheduLearn',
    description: 'Intelligent scheduling platform for educational institutions with AI-powered timetable optimization and resource management.',
    image: '/images/project-schedulearn.jpg',
    technologies: ['Vue.js', 'Express.js', 'MySQL', 'Socket.io', 'Machine Learning'],
    category: 'Education Tech',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-purple-600 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50',
    stats: { schools: '50+', schedules: '1M+' },
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    name: 'DIU LeaderBoard',
    description: 'Gamified achievement system for university competitions with real-time rankings, badge systems, and student engagement analytics.',
    image: '/images/project-leaderboard.jpg',
    technologies: ['React', 'GraphQL', 'Redis', 'AWS', 'Real-time Updates'],
    category: 'Gamification',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-indigo-500 to-blue-600',
    bgColor: 'from-indigo-50 to-blue-50',
    stats: { students: '8K+', competitions: '100+' },
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    name: 'EcoTracker',
    description: 'Environmental monitoring dashboard with satellite data integration for tracking carbon emissions and sustainability metrics.',
    image: '/images/project-ecotracker.jpg',
    technologies: ['React', 'Python', 'TensorFlow', 'Satellite API', 'Data Visualization'],
    category: 'Environmental Tech',
    status: 'Development',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-teal-500 to-cyan-600',
    bgColor: 'from-teal-50 to-cyan-50',
    stats: { regions: '100+', data_points: '1M+' },
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleProjects, setVisibleProjects] = useState(4)
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  const categories = ['All', ...Array.from(new Set(featuredProjects.map(p => p.category)))]
  const filteredProjects = activeFilter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === activeFilter)

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

  const handleProjectHover = (index: number | null) => {
    setHoveredProject(index)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
        
        {/* Floating Cards */}
        <div className="absolute top-20 right-20 w-20 h-16 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hidden lg:block animate-float">
          <div className="p-2">
            <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60" />
            <div className="w-3/4 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1 opacity-40" />
          </div>
        </div>
      </div>

      <div className="relative container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-full mb-8 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              🚀 Featured Projects
            </span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Crafting{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
                digital excellence
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-scale-x animation-delay-1000" />
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Explore our portfolio of innovative solutions that have transformed businesses and created meaningful impact across various industries.
          </p>
        </div>

        {/* Filter Tabs - Responsive */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-600 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="w-full max-w-5xl">
            {/* Mobile: Vertical layout */}
            <div className="md:hidden">
              <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-3 flex flex-col gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`
                      px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 whitespace-nowrap
                      ${activeFilter === category
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
            
            {/* Tablet & Desktop: Single line */}
            <div className="hidden md:flex bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-1.5 gap-1.5 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`
                    px-3 lg:px-4 py-2.5 rounded-xl font-semibold text-xs lg:text-sm transition-all duration-300 transform hover:scale-105 whitespace-nowrap
                    ${activeFilter === category
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

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.name}
              className={`group transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${800 + index * 150}ms` }}
              onMouseEnter={() => handleProjectHover(index)}
              onMouseLeave={() => handleProjectHover(null)}
            >
              {/* Project Card */}
              <div className="relative h-full bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/80 hover:scale-105 hover:shadow-2xl hover:shadow-black/10 cursor-pointer">
                
                {/* Hover Particles */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
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
                        <div className={`w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full opacity-60`} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Project Header */}
                <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${project.bgColor} p-6 sm:p-8 flex items-center justify-center overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                  </div>

                  {/* Project Icon */}
                  <div className="relative z-10 text-center">
                    <div className={`
                      w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${project.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-2xl mx-auto
                      transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12
                    `}>
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={project.icon} />
                      </svg>
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                      {project.name}
                    </h3>
                  </div>

                  {/* Status & Category Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-2">
                    <span className={`
                      px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold backdrop-blur-sm border border-white/30
                      ${project.status === 'Live' 
                        ? 'bg-green-100/80 text-green-700' 
                        : 'bg-blue-100/80 text-blue-700'
                      }
                    `}>
                      {project.status}
                    </span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-[10px] sm:text-xs font-medium border border-white/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Floating Stats - Hidden on small mobile */}
                  <div className="hidden xs:flex absolute top-3 sm:top-4 right-3 sm:right-4 gap-1 sm:gap-2">
                    {Object.entries(project.stats).slice(0, 2).map(([key, value], statIndex) => (
                      <div key={statIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-1 sm:p-2 border border-white/30">
                        <div className={`text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                          {value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 capitalize leading-tight">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 rounded-full text-xs sm:text-sm font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col xs:flex-row gap-3">
                    <Button 
                      className={`
                        flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white shadow-md text-sm sm:text-base
                        transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95
                      `}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live
                    </Button>
                    <Button 
                      variant="outline" 
                      className="group hover:bg-gray-50 border-2 hover:border-gray-300 transition-all duration-300 hover:scale-105 text-sm sm:text-base px-4"
                    >
                      <svg className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mb-16">
            <Button
              onClick={() => setVisibleProjects(prev => prev + 2)}
              variant="outline"
              className="px-8 py-4 bg-white/60 backdrop-blur-lg border-2 border-white/40 hover:bg-white/80 hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              Load More Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="relative bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                ✨ Ready to innovate?
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's build something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                extraordinary
              </span>
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your vision into reality with our expert team. We're ready to tackle your next challenge and create solutions that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link href="/projects">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 rounded-2xl border-2 hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  View All Projects
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
