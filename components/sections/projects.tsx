'use client';

import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuredProjects = [
  {
    name: 'Litaria',
    description:
      'A comprehensive literature management platform for researchers and academics with advanced search capabilities, citation management, and collaborative features.',
    image: '/images/project-litaria.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    category: 'Web Platform',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-600 to-purple-600',
    bgColor: 'from-blue-50 to-purple-50',
    stats: { users: '10K+', papers: '50K+' },
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    name: 'UniRide',
    description: 'Student ride-sharing platform connecting university communities for safe, affordable transportation.',
    image: '/images/project-uniride.jpg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'Mobile App',
    status: 'Live',
    liveUrl: '/projects/uniride',
    githubUrl: '#',
    gradient: 'from-green-500 to-teal-500',
    bgColor: 'from-green-50 to-teal-50',
    stats: { riders: '3K+', trips: '10K+' },
    icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
  },
  {
    name: 'DIU BusBuddy',
    description:
      'Smart campus transportation system with real-time GPS tracking, route optimization, and student notifications for Dhaka International University.',
    image: '/images/project-busbuddy.jpg',
    technologies: [
      'React Native',
      'Firebase',
      'Google Maps API',
      'Push Notifications',
    ],
    category: 'Mobile App',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50',
    stats: { students: '5K+', routes: '15+' },
    icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z',
  },
  {
    name: 'BEMS',
    description:
      'Building Energy Management System with IoT integration for monitoring and optimizing energy consumption in real-time with advanced analytics.',
    image: '/images/project-bems.jpg',
    technologies: [
      'Next.js',
      'IoT Sensors',
      'PostgreSQL',
      'Chart.js',
      'WebSocket',
    ],
    category: 'IoT Platform',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50',
    stats: { buildings: '25+', savings: '30%' },
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    name: 'ScheduLearn',
    description:
      'Intelligent scheduling platform for educational institutions with AI-powered timetable optimization and resource management.',
    image: '/images/project-schedulearn.jpg',
    technologies: [
      'Vue.js',
      'Express.js',
      'MySQL',
      'Socket.io',
      'Machine Learning',
    ],
    category: 'Education Tech',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-purple-600 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50',
    stats: { schools: '50+', schedules: '1M+' },
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    name: 'DIU LeaderBoard',
    description:
      'Gamified achievement system for university competitions with real-time rankings, badge systems, and student engagement analytics.',
    image: '/images/project-leaderboard.jpg',
    technologies: ['React', 'GraphQL', 'Redis', 'AWS', 'Real-time Updates'],
    category: 'Gamification',
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-indigo-500 to-blue-600',
    bgColor: 'from-indigo-50 to-blue-50',
    stats: { students: '8K+', competitions: '100+' },
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    name: 'EcoTracker',
    description:
      'Environmental monitoring dashboard with satellite data integration for tracking carbon emissions and sustainability metrics.',
    image: '/images/project-ecotracker.jpg',
    technologies: [
      'React',
      'Python',
      'TensorFlow',
      'Satellite API',
      'Data Visualization',
    ],
    category: 'Environmental Tech',
    status: 'Development',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-teal-500 to-cyan-600',
    bgColor: 'from-teal-50 to-cyan-50',
    stats: { regions: '100+', data_points: '1M+' },
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(4);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  const categories = [
    'All',
    ...Array.from(new Set(featuredProjects.map((p) => p.category))),
  ];
  const filteredProjects =
    activeFilter === 'All'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectHover = (index: number | null) => {
    setHoveredProject(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-24"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />

        {/* Floating Orbs */}
        <div className="animate-blob absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 mix-blend-multiply blur-2xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 mix-blend-multiply blur-2xl filter" />

        {/* Floating Cards */}
        <div className="animate-float absolute right-20 top-20 hidden h-16 w-20 rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg lg:block">
          <div className="p-2">
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60" />
            <div className="mt-1 h-2 w-3/4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-40" />
          </div>
        </div>
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <div
            className={`mb-8 inline-flex items-center rounded-full border border-white/40 bg-white/60 px-6 py-3 backdrop-blur-lg transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="mr-3 h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-sm font-semibold text-transparent">
              🚀 Featured Projects
            </span>
          </div>

          <h2
            className={`mb-6 text-5xl font-bold text-gray-900 transition-all delay-200 duration-1000 md:text-6xl ${isInView ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}
          >
            Crafting{' '}
            <span className="relative">
              <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                digital excellence
              </span>
              <div className="animate-scale-x animation-delay-1000 absolute -bottom-2 left-0 right-0 h-1 scale-x-0 transform rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
            </span>
          </h2>

          <p
            className={`delay-400 mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}
          >
            Explore our portfolio of innovative solutions that have transformed
            businesses and created meaningful impact across various industries.
          </p>
        </div>

        {/* Filter Tabs - Responsive */}
        <div
          className={`delay-600 mb-12 flex justify-center transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}
        >
          <div className="w-full max-w-5xl">
            {/* Mobile: Vertical layout */}
            <div className="md:hidden">
              <div className="flex flex-col gap-2 rounded-2xl border border-white/40 bg-white/60 p-3 backdrop-blur-lg">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`
                      transform whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105
                      ${
                        activeFilter === category
                          ? 'scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-white/60 hover:text-gray-900'
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
            <div className="hidden justify-center gap-1.5 rounded-2xl border border-white/40 bg-white/60 p-1.5 backdrop-blur-lg md:flex">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`
                    transform whitespace-nowrap rounded-xl px-3 py-2.5 text-xs font-semibold transition-all duration-300 hover:scale-105 lg:px-4 lg:text-sm
                    ${
                      activeFilter === category
                        ? 'scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-white/60 hover:text-gray-900'
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
        <div className="mb-16 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.name}
              className={`group transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}
              style={{ animationDelay: `${800 + index * 150}ms` }}
              onMouseEnter={() => handleProjectHover(index)}
              onMouseLeave={() => handleProjectHover(null)}
            >
              {/* Project Card */}
              <div className="relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/40 bg-white/60 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:bg-white/80 hover:shadow-2xl hover:shadow-black/10 md:rounded-3xl">
                {/* Hover Particles */}
                {hoveredProject === index && (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(8)].map((_, i) => (
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

                {/* Project Header */}
                <div
                  className={`relative h-40 bg-gradient-to-br sm:h-48 ${project.bgColor} flex items-center justify-center overflow-hidden p-6 sm:p-8`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                  </div>

                  {/* Project Icon */}
                  <div className="relative z-10 text-center">
                    <div
                      className={`
                      h-16 w-16 bg-gradient-to-r sm:h-20 sm:w-20 ${project.gradient} mx-auto mb-3 flex transform items-center justify-center rounded-xl shadow-2xl transition-all
                      duration-500 group-hover:rotate-12 group-hover:scale-110 sm:mb-4 sm:rounded-2xl
                    `}
                    >
                      <svg
                        className="h-6 w-6 text-white sm:h-8 sm:w-8"
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
                    <h3
                      className={`bg-gradient-to-r bg-clip-text text-lg font-bold text-transparent sm:text-xl ${project.gradient}`}
                    >
                      {project.name}
                    </h3>
                  </div>

                  {/* Status & Category Badges */}
                  <div className="absolute left-3 top-3 flex flex-col gap-2 sm:left-4 sm:top-4">
                    <span
                      className={`
                      rounded-full border border-white/30 px-2 py-0.5 text-[10px] font-semibold backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs
                      ${
                        project.status === 'Live'
                          ? 'bg-green-100/80 text-green-700'
                          : 'bg-blue-100/80 text-blue-700'
                      }
                    `}
                    >
                      {project.status}
                    </span>
                    <span className="rounded-full border border-white/30 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-gray-700 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Floating Stats - Hidden on small mobile */}
                  <div className="absolute right-3 top-3 hidden gap-1 xs:flex sm:right-4 sm:top-4 sm:gap-2">
                    {Object.entries(project.stats)
                      .slice(0, 2)
                      .map(([key, value], statIndex) => (
                        <div
                          key={statIndex}
                          className="rounded-lg border border-white/30 bg-white/20 p-1 backdrop-blur-sm sm:p-2"
                        >
                          <div
                            className={`bg-gradient-to-r bg-clip-text text-xs font-bold text-transparent sm:text-sm ${project.gradient}`}
                          >
                            {value}
                          </div>
                          <div className="text-[10px] capitalize leading-tight text-gray-600 sm:text-xs">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Description */}
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="cursor-pointer rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-200 sm:px-3 sm:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 4 && (
                        <span className="rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-2 py-1 text-xs font-medium text-gray-600 sm:px-3 sm:text-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 xs:flex-row">
                    <Link href={project.liveUrl} className="flex-1">
                      <Button
                        className={`
                          w-full bg-gradient-to-r ${project.gradient} transform text-sm text-white shadow-md transition-all
                          duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg active:scale-95 sm:text-base
                        `}
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        View Project
                      </Button>
                    </Link>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="group border-2 px-4 text-sm transition-all duration-300 hover:scale-105 hover:border-gray-300 hover:bg-gray-50 sm:text-base"
                      >
                        <svg
                          className="h-4 w-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="mb-16 text-center">
            <Button
              onClick={() => setVisibleProjects((prev) => prev + 2)}
              variant="outline"
              className="rounded-2xl border-2 border-white/40 bg-white/60 px-8 py-4 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/80"
            >
              Load More Projects
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/40 p-12 backdrop-blur-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />

          <div className="relative z-10 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-sm font-semibold text-transparent">
                ✨ Ready to innovate?
              </span>
            </div>

            <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                extraordinary
              </span>
            </h3>

            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-gray-600">
              Transform your vision into reality with our expert team. We're
              ready to tackle your next challenge and create solutions that make
              a difference.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="transform rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl"
                >
                  Start Your Project
                  <svg
                    className="ml-2 h-5 w-5"
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
                  size="lg"
                  className="rounded-2xl border-2 px-8 py-4 transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                  View All Projects
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
