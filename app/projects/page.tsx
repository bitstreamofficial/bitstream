'use client'

import { useState } from 'react'

const projects = [
  {
    name: 'Litaria',
    description: 'A comprehensive literature management platform for researchers and academics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    category: 'Web Application',
    status: 'Live',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    mockupColor: 'bg-blue-100'
  },
  {
  name: 'BEMS',
  description: 'Employee Management System for handling staff records, attendance, and performance tracking.',
  technologies: ['Next.js', 'Firebase', 'PostgreSQL', 'Chart.js'],
  category: 'Web Application',
  status: 'Live',
  icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  gradient: 'from-blue-500 to-indigo-500',
  bgGradient: 'from-blue-50 to-indigo-50',
  mockupColor: 'bg-blue-100'
},

  {
    name: 'DIU BusBuddy',
    description: 'Smart bus tracking system for Dhaka International University campus.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    category: 'Mobile App',
    status: 'Live',
    icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    mockupColor: 'bg-purple-100'
  },
  {
    name: 'ScheduLearn',
    description: 'Intelligent scheduling platform for educational institutions.',
    technologies: ['Vue.js', 'Express.js', 'MySQL', 'Socket.io'],
    category: 'Web Platform',
    status: 'Live',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    mockupColor: 'bg-orange-100'
  },
  {
    name: 'DIU LeaderBoard',
    description: 'Gamified leaderboard system for student achievements and competitions.',
    technologies: ['Flutter', 'Firebase', 'Firestore'],
    category: 'Mobile App',
    status: 'Live',
    icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
    mockupColor: 'bg-indigo-100'
  }
]

const categoryColors = {
  'Web Application': 'from-blue-500 to-blue-600',
  'IoT Platform': 'from-green-500 to-green-600',
  'Mobile App': 'from-purple-500 to-purple-600',
  'Web Platform': 'from-orange-500 to-orange-600'
}

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const filteredProjects = selectedCategory && selectedCategory !== 'All' 
    ? projects.filter(p => p.category === selectedCategory)
    : projects

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Floating UI elements */}
        <div className="absolute top-20 right-20 w-20 h-16 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl hidden lg:block animate-float">
          <div className="p-2">
            <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"></div>
            <div className="w-3/4 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1 opacity-40"></div>
          </div>
        </div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hidden lg:block animate-float animation-delay-1000 flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg opacity-60"></div>
        </div>
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-4 animate-fade-in-up">
              Our Projects
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-fade-in-up animation-delay-200"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Explore our portfolio of successful projects that showcase our expertise in building scalable solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 animate-fade-in-up animation-delay-600">
          <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-2 inline-flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105
                  ${selectedCategory === category || (selectedCategory === null && category === 'All')
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className={`
                relative h-full bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl overflow-hidden
                transition-all duration-500 cursor-pointer
                ${hoveredProject === index ? 
                  'scale-105 shadow-2xl shadow-black/10 bg-white/80' : 
                  'hover:scale-102 hover:shadow-xl hover:bg-white/70'
                }
              `}>
                {/* Background gradient overlay on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 transition-opacity duration-500
                  ${hoveredProject === index ? 'opacity-30' : ''}
                `} />
                
                {/* Mockup Header */}
                <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Browser mockup for web projects */}
                  {project.category.includes('Web') && (
                    <div className="w-full h-full bg-gray-50 relative">
                      <div className="absolute top-2 left-2 flex gap-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="mt-6 mx-4 space-y-2">
                        <div className={`h-3 ${project.mockupColor} rounded-full w-3/4`}></div>
                        <div className={`h-2 ${project.mockupColor} rounded-full w-1/2 opacity-60`}></div>
                        <div className={`h-2 ${project.mockupColor} rounded-full w-2/3 opacity-40`}></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mobile mockup */}
                  {project.category === 'Mobile App' && (
                    <div className="w-16 h-28 bg-gray-800 rounded-lg flex flex-col items-center justify-center relative">
                      <div className="w-12 h-20 bg-white rounded-md p-1">
                        <div className={`w-full h-2 ${project.mockupColor} rounded-full mb-1`}></div>
                        <div className={`w-3/4 h-1 ${project.mockupColor} rounded-full mb-1 opacity-60`}></div>
                        <div className={`w-1/2 h-1 ${project.mockupColor} rounded-full opacity-40`}></div>
                      </div>
                    </div>
                  )}

                  {/* IoT Platform mockup */}
                  {project.category === 'IoT Platform' && (
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 ${project.mockupColor} rounded-lg flex items-center justify-center`}>
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className={`w-12 h-1 ${project.mockupColor} rounded-full`}></div>
                        <div className={`w-8 h-1 ${project.mockupColor} rounded-full opacity-60`}></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Tags */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`
                      bg-gradient-to-r ${categoryColors[project.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'}
                      text-white px-3 py-1 rounded-full text-sm font-medium
                    `}>
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-700 text-sm font-medium">{project.status}</span>
                    </div>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center mb-3">
                    <div className={`
                      w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mr-3
                      transform transition-all duration-500
                      ${hoveredProject === index ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'}
                    `}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={project.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 flex-1">{project.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`
                            px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium
                            transition-all duration-300 hover:scale-110 cursor-pointer
                            ${hoveredProject === index ? 'bg-gradient-to-r from-white to-gray-50 shadow-md' : ''}
                          `}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className={`
                    w-full py-3 rounded-xl font-semibold transition-all duration-300 transform
                    bg-gradient-to-r ${project.gradient} text-white
                    hover:shadow-lg hover:scale-105 hover:shadow-black/20
                    ${hoveredProject === index ? 'shadow-lg scale-105' : ''}
                  `}>
                    View Details
                    <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>

                {/* Hover particles */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
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
                        <div className={`w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full opacity-60`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our proven expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Let's Build Together
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white/80 hover:bg-white text-gray-800 font-semibold rounded-full border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Schedule Consultation
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