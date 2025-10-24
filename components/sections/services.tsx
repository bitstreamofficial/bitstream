'use client';

import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    description:
      'Cutting-edge web applications built with the latest technologies and frameworks for optimal performance and user experience.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    features: [
      'Next.js & React',
      'TypeScript',
      'Tailwind CSS',
      'Performance Optimized',
    ],
    gradient: 'from-blue-600 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50',
    stats: { projects: '50+', clients: '30+' },
    category: 'Frontend',
  },
  {
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile experiences that users love, built for iOS and Android with modern frameworks.',
    icon: 'M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z',
    features: [
      'React Native',
      'iOS & Android',
      'App Store Ready',
      'Push Notifications',
    ],
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
    stats: { apps: '25+', downloads: '100K+' },
    category: 'Mobile',
  },
  {
    title: 'Backend Solutions',
    description:
      'Robust, scalable backend architectures with secure APIs and efficient data management for enterprise applications.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    features: [
      'Node.js & Python',
      'MongoDB & PostgreSQL',
      'REST & GraphQL APIs',
      'Cloud Integration',
    ],
    gradient: 'from-purple-600 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
    stats: { apis: '100+', uptime: '99.9%' },
    category: 'Backend',
  },
  {
    title: 'AI Integration',
    description:
      'Intelligent solutions powered by machine learning and artificial intelligence technologies for business automation.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    features: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
    ],
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
    stats: { models: '15+', accuracy: '95%' },
    category: 'AI/ML',
  },
  {
    title: 'DevOps & Cloud',
    description:
      'Streamlined deployment pipelines and cloud infrastructure for scalable, reliable applications with automated workflows.',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10',
    features: [
      'AWS & Azure',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Monitoring & Security',
    ],
    gradient: 'from-indigo-500 to-blue-600',
    bgGradient: 'from-indigo-50 to-blue-50',
    stats: { deployments: '500+', environments: '20+' },
    category: 'Infrastructure',
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive user interfaces designed with modern principles and user-centered approach for optimal engagement.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z',
    features: [
      'Figma & Adobe XD',
      'User Research',
      'Prototyping',
      'Design Systems',
    ],
    gradient: 'from-teal-500 to-cyan-600',
    bgGradient: 'from-teal-50 to-cyan-50',
    stats: { designs: '80+', satisfaction: '98%' },
    category: 'Design',
  },
];

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  const categories = [
    'All',
    ...Array.from(new Set(services.map((s) => s.category))),
  ];
  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

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

  const handleServiceHover = (index: number | null) => {
    setHoveredService(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-24"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />

        {/* Floating Orbs */}
        <div className="animate-blob absolute left-1/3 top-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 mix-blend-multiply blur-2xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-1/3 right-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 mix-blend-multiply blur-2xl filter" />

        {/* Floating Elements */}
        <div className="animate-float absolute left-16 top-16 hidden h-12 w-16 rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg lg:block">
          <div className="p-2">
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60" />
            <div className="mt-1 h-2 w-2/3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-40" />
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
              ✨ Our Expertise
            </span>
          </div>

          <h2
            className={`mb-6 text-5xl font-bold text-gray-900 transition-all delay-200 duration-1000 md:text-6xl ${isInView ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}
          >
            Services that{' '}
            <span className="relative">
              <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                transform
              </span>
              <div className="animate-scale-x animation-delay-1000 absolute -bottom-2 left-0 right-0 h-1 scale-x-0 transform rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
            </span>
          </h2>

          <p
            className={`delay-400 mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}
          >
            From concept to deployment, we provide end-to-end solutions that
            drive innovation and deliver exceptional results across all
            platforms.
          </p>
        </div>

        {/* Filter Tabs - Responsive */}
        <div
          className={`delay-600 mb-12 flex justify-center transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}
        >
          <div className="w-full max-w-4xl">
            {/* Mobile: Horizontal Scrollable Menu */}
            <div className="md:hidden">
              <div className="rounded-2xl border border-white/40 bg-white/60 p-1.5 backdrop-blur-lg">
                <div className="hide-scrollbar flex gap-2 overflow-x-auto">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`
                        flex-shrink-0 transform whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300
                        ${
                          activeCategory === category
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'bg-white/40 text-gray-600 hover:bg-white/60 hover:text-gray-900'
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

            {/* Tablet & Desktop: Flex wrap */}
            <div className="hidden flex-wrap justify-center gap-2 rounded-2xl border border-white/40 bg-white/60 p-2 backdrop-blur-lg md:flex">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    transform whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105
                    ${
                      activeCategory === category
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

        {/* Services Grid - Responsive */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <div
              key={service.title}
              className={`group transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}
              style={{ animationDelay: `${800 + index * 150}ms` }}
              onMouseEnter={() => handleServiceHover(index)}
              onMouseLeave={() => handleServiceHover(null)}
            >
              {/* Service Card */}
              <div className="relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/40 bg-white/60 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:bg-white/80 hover:shadow-2xl hover:shadow-black/10 md:rounded-3xl">
                {/* Hover Particles */}
                {hoveredService === index && (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
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
                          className={`h-1 w-1 bg-gradient-to-r ${service.gradient} rounded-full opacity-60`}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Service Header */}
                <div
                  className={`relative h-36 bg-gradient-to-br sm:h-40 ${service.bgGradient} flex items-center justify-center overflow-hidden p-4 sm:p-6`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                  </div>

                  {/* Service Icon */}
                  <div className="relative z-10 text-center">
                    <div
                      className={`
                      h-12 w-12 bg-gradient-to-r sm:h-16 sm:w-16 ${service.gradient} mx-auto mb-2 flex transform items-center justify-center rounded-xl shadow-2xl transition-all
                      duration-500 group-hover:rotate-6 group-hover:scale-110 sm:mb-3 sm:rounded-2xl
                    `}
                    >
                      <svg
                        className="h-5 w-5 text-white sm:h-6 sm:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={service.icon}
                        />
                      </svg>
                    </div>
                    <h3
                      className={`bg-gradient-to-r bg-clip-text text-base font-bold text-transparent sm:text-lg ${service.gradient}`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
                    <span className="rounded-full border border-white/30 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-gray-700 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
                      {service.category}
                    </span>
                  </div>

                  {/* Stats - Hidden on small mobile, show on larger screens */}
                  <div className="absolute right-2 top-2 hidden gap-1 xs:flex sm:right-3 sm:top-3">
                    {Object.entries(service.stats)
                      .slice(0, 2)
                      .map(([key, value], statIndex) => (
                        <div
                          key={statIndex}
                          className="rounded-lg border border-white/30 bg-white/20 p-1 backdrop-blur-sm sm:p-1.5"
                        >
                          <div
                            className={`bg-gradient-to-r bg-clip-text text-[10px] font-bold text-transparent sm:text-xs ${service.gradient}`}
                          >
                            {value}
                          </div>
                          <div className="text-[8px] capitalize leading-tight text-gray-600 sm:text-[10px]">
                            {key}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 sm:p-6">
                  {/* Description */}
                  <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-gray-600 sm:mb-6 sm:text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <div className="grid grid-cols-1 gap-2 xs:grid-cols-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-xs text-gray-700 transition-colors duration-300 hover:text-gray-900"
                        >
                          <div
                            className={`h-1.5 w-1.5 bg-gradient-to-r ${service.gradient} mr-2 flex-shrink-0 rounded-full`}
                          />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="outline"
                    className="w-full text-xs transition-all duration-300 hover:scale-105 group-hover:border-blue-200 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 group-hover:text-blue-600 sm:text-sm"
                  >
                    Learn More
                    <svg
                      className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Responsive */}
        <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/40 p-6 backdrop-blur-xl sm:p-8 md:rounded-3xl md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

          <div className="relative z-10 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 sm:mb-6 sm:px-6 sm:py-3">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xs font-semibold text-transparent sm:text-sm">
                🚀 Ready to innovate?
              </span>
            </div>

            <h3 className="mb-3 px-4 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl">
              Let's build your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                next big idea
              </span>
            </h3>

            <p className="mx-auto mb-6 max-w-2xl px-4 text-sm leading-relaxed text-gray-600 sm:mb-8 sm:text-base">
              Partner with us to transform your vision into reality. Our expert
              team is ready to deliver exceptional solutions tailored to your
              unique needs.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4">
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
                >
                  Explore All Services
                  <svg
                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
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
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-xl border-2 px-6 py-3 text-sm transition-all duration-300 hover:scale-105 hover:bg-white sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
                >
                  Get Started Today
                  <svg
                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
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
