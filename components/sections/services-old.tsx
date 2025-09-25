import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    title: 'Web Development',
    description: 'Cutting-edge web applications built with the latest technologies and frameworks for optimal performance.',
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur"></div>
        <svg className="relative w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    ),
    features: ['Next.js & React', 'TypeScript', 'Tailwind CSS', 'Performance Optimized'],
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile experiences that users love, built for iOS and Android.',
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur"></div>
        <svg className="relative w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      </div>
    ),
    features: ['React Native', 'iOS & Android', 'App Store Ready', 'Push Notifications'],
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    title: 'Backend Solutions',
    description: 'Robust, scalable backend architectures with secure APIs and efficient data management.',
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-20 blur"></div>
        <svg className="relative w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      </div>
    ),
    features: ['Node.js & Python', 'MongoDB & PostgreSQL', 'REST & GraphQL APIs', 'Cloud Integration'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'AI Integration',
    description: 'Intelligent solutions powered by machine learning and artificial intelligence technologies.',
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-20 blur"></div>
        <svg className="relative w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
    ),
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'DevOps & Cloud',
    description: 'Streamlined deployment pipelines and cloud infrastructure for scalable, reliable applications.',
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl opacity-20 blur"></div>
        <svg className="relative w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      </div>
    ),
    features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Security'],
    gradient: 'from-blue-600 to-teal-600'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces designed with modern principles and user-centered approach.',
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl opacity-20 blur"></div>
        <svg className="relative w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      </div>
    ),
    features: ['Figma & Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
    gradient: 'from-blue-600 to-teal-600'
  }
]

export function ServicesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#3b82f6_0%,transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#8b5cf6_0%,transparent_50%)] opacity-5" />

      <div className="relative container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              ✨ Our Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Services that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
              scale
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end solutions that drive innovation and deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Card */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6">
            <Link href="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Explore All Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="px-8 py-4 rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
