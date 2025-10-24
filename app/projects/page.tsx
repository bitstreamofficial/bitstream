'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const projects = [
  {
    name: 'Litaria',
    description:
      'A comprehensive literature management platform for researchers and academics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    category: 'Web Application',
    status: 'Live',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    mockupColor: 'bg-blue-100',
  },
  {
    name: 'BEMS',
    description:
      'Employee Management System for handling staff records, attendance, and performance tracking.',
    technologies: ['Next.js', 'Firebase', 'PostgreSQL', 'Chart.js'],
    category: 'Web Application',
    status: 'Live',
    icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    mockupColor: 'bg-blue-100',
  },

  {
    name: 'DIU BusBuddy',
    description:
      'Smart bus tracking system for Dhaka International University campus.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    category: 'Mobile App',
    status: 'Live',
    icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    mockupColor: 'bg-purple-100',
  },
  {
    name: 'ScheduLearn',
    description:
      'Intelligent scheduling platform for educational institutions.',
    technologies: ['Vue.js', 'Express.js', 'MySQL', 'Socket.io'],
    category: 'Web Platform',
    status: 'Live',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    mockupColor: 'bg-orange-100',
  },
  {
    name: 'DIU LeaderBoard',
    description:
      'Gamified leaderboard system for student achievements and competitions.',
    technologies: ['Flutter', 'Firebase', 'Firestore'],
    category: 'Mobile App',
    status: 'Live',
    icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
    mockupColor: 'bg-indigo-100'
  },
  {
    name: 'UniRide',
    description: 'Student ride-sharing platform connecting university communities for safe, affordable transportation.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web Platform',
    status: 'Live',
    icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-50 to-teal-50',
    mockupColor: 'bg-green-100',
    link: '/projects/uniride'
  }
]

const categoryColors = {
  'Web Application': 'from-blue-500 to-blue-600',
  'IoT Platform': 'from-green-500 to-green-600',
  'Mobile App': 'from-purple-500 to-purple-600',
  'Web Platform': 'from-orange-500 to-orange-600',
};

export default function ProjectsPage() {
  const router = useRouter()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    'All',
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const filteredProjects =
    selectedCategory && selectedCategory !== 'All'
      ? projects.filter((p) => p.category === selectedCategory)
      : projects;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />

        {/* Floating orbs */}
        <div className="animate-blob absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 mix-blend-multiply blur-2xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 mix-blend-multiply blur-2xl filter"></div>

        {/* Floating UI elements */}
        <div className="animate-float absolute right-20 top-20 hidden h-16 w-20 rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg lg:block">
          <div className="p-2">
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"></div>
            <div className="mt-1 h-2 w-3/4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-40"></div>
          </div>
        </div>
        <div className="animate-float animation-delay-1000 absolute bottom-40 left-20 flex hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg lg:block">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-green-400 to-blue-400 opacity-60"></div>
        </div>
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block">
            <h1 className="animate-fade-in-up mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              Our Projects
            </h1>
            <div className="animate-fade-in-up animation-delay-200 mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
          <p className="animate-fade-in-up animation-delay-400 mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Explore our portfolio of successful projects that showcase our
            expertise in building scalable solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="animate-fade-in-up animation-delay-600 mb-12 flex justify-center">
          <div className="inline-flex gap-2 rounded-2xl border border-white/40 bg-white/60 p-2 backdrop-blur-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  transform rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:scale-105
                  ${
                    selectedCategory === category ||
                    (selectedCategory === null && category === 'All')
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-white/60 hover:text-gray-900'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div
                className={`
                relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/40 bg-white/60
                backdrop-blur-lg transition-all duration-500
                ${
                  hoveredProject === index
                    ? 'scale-105 bg-white/80 shadow-2xl shadow-black/10'
                    : 'hover:scale-102 hover:bg-white/70 hover:shadow-xl'
                }
              `}
              >
                {/* Background gradient overlay on hover */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 transition-opacity duration-500
                  ${hoveredProject === index ? 'opacity-30' : ''}
                `}
                />

                {/* Mockup Header */}
                <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Browser mockup for web projects */}
                  {project.category.includes('Web') && (
                    <div className="relative h-full w-full bg-gray-50">
                      <div className="absolute left-2 top-2 flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-red-400"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                        <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="mx-4 mt-6 space-y-2">
                        <div
                          className={`h-3 ${project.mockupColor} w-3/4 rounded-full`}
                        ></div>
                        <div
                          className={`h-2 ${project.mockupColor} w-1/2 rounded-full opacity-60`}
                        ></div>
                        <div
                          className={`h-2 ${project.mockupColor} w-2/3 rounded-full opacity-40`}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Mobile mockup */}
                  {project.category === 'Mobile App' && (
                    <div className="relative flex h-28 w-16 flex-col items-center justify-center rounded-lg bg-gray-800">
                      <div className="h-20 w-12 rounded-md bg-white p-1">
                        <div
                          className={`h-2 w-full ${project.mockupColor} mb-1 rounded-full`}
                        ></div>
                        <div
                          className={`h-1 w-3/4 ${project.mockupColor} mb-1 rounded-full opacity-60`}
                        ></div>
                        <div
                          className={`h-1 w-1/2 ${project.mockupColor} rounded-full opacity-40`}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* IoT Platform mockup */}
                  {project.category === 'IoT Platform' && (
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-8 w-8 ${project.mockupColor} flex items-center justify-center rounded-lg`}
                      >
                        <div className="h-4 w-4 animate-pulse rounded-full bg-white"></div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div
                          className={`h-1 w-12 ${project.mockupColor} rounded-full`}
                        ></div>
                        <div
                          className={`h-1 w-8 ${project.mockupColor} rounded-full opacity-60`}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Tags */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`
                      bg-gradient-to-r ${categoryColors[project.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'}
                      rounded-full px-3 py-1 text-sm font-medium text-white
                    `}
                    >
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                      <span className="text-sm font-medium text-green-700">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Icon and Title */}
                  <div className="mb-3 flex items-center">
                    <div
                      className={`
                      h-12 w-12 bg-gradient-to-r ${project.gradient} mr-3 flex transform items-center justify-center
                      rounded-xl transition-all duration-500
                      ${hoveredProject === index ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'}
                    `}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={project.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="flex-1 text-xl font-bold text-gray-900">
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-gray-900">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`
                            cursor-pointer rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 text-xs font-medium
                            text-gray-700 transition-all duration-300 hover:scale-110
                            ${hoveredProject === index ? 'bg-gradient-to-r from-white to-gray-50 shadow-md' : ''}
                          `}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => {
                      if (project.link) {
                        router.push(project.link)
                      }
                    }}
                    className={`
                    w-full py-3 rounded-xl font-semibold transition-all duration-300 transform
                    bg-gradient-to-r ${project.gradient} text-white
                    hover:shadow-lg hover:scale-105 hover:shadow-black/20
                    ${hoveredProject === index ? 'shadow-lg scale-105' : ''}
                  `}>
                    View Details
                    <svg
                      className="ml-2 inline-block h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>

                {/* Hover particles */}
                {hoveredProject === index && (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: '2s',
                        }}
                      >
                        <div
                          className={`h-1 w-1 bg-gradient-to-r ${project.gradient} rounded-full opacity-60`}
                        />
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
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/30 bg-white/40 p-8 backdrop-blur-xl md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Let's discuss how we can help bring your ideas to life with our
              proven expertise and innovative solutions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25">
                Let's Build Together
                <svg
                  className="ml-2 inline-block h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="transform rounded-full border border-gray-200 bg-white/80 px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg">
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
          0%,
          100% {
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
  );
}
