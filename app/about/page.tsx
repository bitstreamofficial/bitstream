'use client';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

        {/* Floating Orb - Single element like landing page */}
        <div className="animate-blob absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 mix-blend-multiply blur-2xl filter"></div>

        {/* Glassmorphism Cards - Floating elements */}
        <div className="animate-float absolute right-20 top-20 hidden h-24 w-48 rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg lg:block" />
        <div className="animate-float animation-delay-2000 absolute bottom-20 left-20 hidden h-32 w-32 rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg lg:block" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <div className="mb-6 inline-block">
              <div className="animate-fade-in-up relative">
                <h1 className="animate-fade-in-up animation-delay-200 mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-6xl font-bold text-transparent md:text-7xl">
                  BitStream
                </h1>
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg"></div>
              </div>
            </div>
            <p className="animate-fade-in-up animation-delay-400 mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
              Building scalable mobile & web solutions that transform businesses
              and drive innovation
            </p>
            <div className="animate-fade-in-up animation-delay-600 mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="animate-fade-in-up animation-delay-800 mb-20 grid gap-8 lg:grid-cols-2">
            <div className="group">
              <div className="h-full rounded-2xl border border-white/40 bg-white/60 p-8 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:bg-white/70 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-600">
                  At BitStream, we're passionate about creating digital
                  solutions that make a difference. We specialize in building
                  scalable mobile and web applications that help businesses
                  grow, innovate, and succeed in today's digital landscape.
                </p>
                <div className="mt-6 h-1 w-full scale-x-0 transform rounded-full bg-gradient-to-r from-blue-500/50 to-transparent transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
            </div>

            <div className="group">
              <div className="h-full rounded-2xl border border-white/40 bg-white/60 p-8 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:bg-white/70 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-600">
                  To be the leading technology partner for businesses seeking to
                  transform their digital presence. We envision a world where
                  every business, regardless of size, has access to cutting-edge
                  technology solutions.
                </p>
                <div className="mt-6 h-1 w-full scale-x-0 transform rounded-full bg-gradient-to-r from-purple-500/50 to-transparent transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
            </div>
          </div>

          {/* Why Choose BitStream Section */}
          <div className="animate-fade-in-up animation-delay-1000 rounded-3xl border border-white/30 bg-white/40 p-8 backdrop-blur-xl md:p-12">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BitStream
                </span>
                ?
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Expertise',
                  description:
                    'Years of experience in mobile and web development with cutting-edge technologies.',
                  icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  gradient: 'from-green-400 to-blue-500',
                },
                {
                  title: 'Scalability',
                  description:
                    'Solutions designed to grow with your business and handle increased demand.',
                  icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                  gradient: 'from-blue-400 to-purple-500',
                },
                {
                  title: 'Support',
                  description:
                    'Dedicated support team ensuring your applications run smoothly 24/7.',
                  icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                  gradient: 'from-purple-400 to-pink-500',
                },
              ].map((feature, index) => (
                <div key={index} className="group text-center">
                  <div className="h-full rounded-2xl border border-white/40 bg-white/50 p-8 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:transform hover:bg-white/60 hover:shadow-xl">
                    <div className="mb-6">
                      <div
                        className={`mx-auto h-16 w-16 bg-gradient-to-r ${feature.gradient} flex transform items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-12`}
                      >
                        <svg
                          className="h-8 w-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={feature.icon}
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Introduction Section */}
          <div className="animate-fade-in-up animation-delay-1100 mb-16 mt-20">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                Meet Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                Passionate professionals dedicated to delivering exceptional
                digital solutions
              </p>
              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  name: 'Shakib Howlader',
                  role: '--------------',
                  description:
                    'Visionary leader with 10+ years in tech. Passionate about creating scalable solutions that drive business growth.',
                  gradient: 'from-blue-500 to-purple-500',
                  skills: ['Strategy', 'Leadership', 'Innovation'],
                },
                {
                  name: 'Md. Sabbir Ahamed',
                  role: '--------------',
                  description:
                    'Full-stack expert specializing in React, Node.js, and cloud architecture. Loves solving complex technical challenges.',
                  gradient: 'from-purple-500 to-pink-500',
                  skills: ['React', 'Node.js', 'AWS'],
                },
                {
                  name: 'Sakib Mahmud Rahat',
                  role: '--------------',
                  description:
                    'Native & cross-platform mobile development expert. Creates intuitive apps that users love to interact with.',
                  gradient: 'from-green-500 to-blue-500',
                  skills: ['React Native', 'Flutter', 'iOS'],
                },
                {
                  name: 'Syed Sabbir Ahmed',
                  role: '--------------',
                  description:
                    'Native & cross-platform mobile development expert. Creates intuitive apps that users love to interact with.',
                  gradient: 'from-green-500 to-blue-500',
                  skills: ['React Native', 'Flutter', 'iOS'],
                },
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="rounded-2xl border border-white/40 bg-white/60 p-8 text-center backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:bg-white/70 hover:shadow-2xl">
                    <div className="mb-6">
                      <div
                        className={`mx-auto h-24 w-24 bg-gradient-to-r ${member.gradient} flex items-center justify-center rounded-full text-3xl font-bold text-white shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                      >
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                    </div>

                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p
                      className={`bg-gradient-to-r text-lg font-semibold ${member.gradient} mb-4 bg-clip-text text-transparent`}
                    >
                      {member.role}
                    </p>

                    <p className="mb-6 leading-relaxed text-gray-600">
                      {member.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="rounded-full border border-white/60 bg-white/80 px-3 py-1 text-sm text-gray-700 transition-colors duration-300 hover:bg-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Our diverse team brings together expertise from various domains
                to deliver comprehensive solutions tailored to your unique
                business needs.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in-up animation-delay-1200 mt-16 text-center">
            <div className="inline-flex items-center justify-center">
              <button className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25">
                Start Your Project
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
