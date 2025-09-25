'use client'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        
        {/* Floating Orb - Single element like landing page */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        
        {/* Glassmorphism Cards - Floating elements */}
        <div className="absolute top-20 right-20 w-48 h-24 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hidden lg:block animate-float" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hidden lg:block animate-float animation-delay-2000" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="relative animate-fade-in-up">
                <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-4 animate-fade-in-up animation-delay-200">
                  BitStream
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg rounded-lg"></div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Building scalable mobile & web solutions that transform businesses and drive innovation
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-fade-in-up animation-delay-600"></div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20 animate-fade-in-up animation-delay-800">
            <div className="group">
              <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/70 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  At BitStream, we're passionate about creating digital solutions that make a difference. 
                  We specialize in building scalable mobile and web applications that help businesses 
                  grow, innovate, and succeed in today's digital landscape.
                </p>
                <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/70 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the leading technology partner for businesses seeking to transform their 
                  digital presence. We envision a world where every business, regardless of size, 
                  has access to cutting-edge technology solutions.
                </p>
                <div className="mt-6 w-full h-1 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>

          {/* Why Choose BitStream Section */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-12 animate-fade-in-up animation-delay-1000">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BitStream</span>?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expertise",
                  description: "Years of experience in mobile and web development with cutting-edge technologies.",
                  icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  gradient: "from-green-400 to-blue-500"
                },
                {
                  title: "Scalability",
                  description: "Solutions designed to grow with your business and handle increased demand.",
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                  gradient: "from-blue-400 to-purple-500"
                },
                {
                  title: "Support",
                  description: "Dedicated support team ensuring your applications run smoothly 24/7.",
                  icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  gradient: "from-purple-400 to-pink-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/60 hover:transform hover:scale-105 hover:shadow-xl">
                    <div className="mb-6">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Introduction Section */}
          <div className="mt-20 mb-16 animate-fade-in-up animation-delay-1100">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Passionate professionals dedicated to delivering exceptional digital solutions
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  name: "Shakib Howlader",
                  role: "--------------",
                  description: "Visionary leader with 10+ years in tech. Passionate about creating scalable solutions that drive business growth.",
                  gradient: "from-blue-500 to-purple-500",
                  skills: ["Strategy", "Leadership", "Innovation"]
                },
                {
                  name: "Md. Sabbir Ahamed",
                  role: "--------------",
                  description: "Full-stack expert specializing in React, Node.js, and cloud architecture. Loves solving complex technical challenges.",
                  gradient: "from-purple-500 to-pink-500",
                  skills: ["React", "Node.js", "AWS"]
                },
                {
                  name: "Sakib Mahmud Rahat",
                  role: "--------------",
                  description: "Native & cross-platform mobile development expert. Creates intuitive apps that users love to interact with.",
                  gradient: "from-green-500 to-blue-500",
                  skills: ["React Native", "Flutter", "iOS"]
                },
                {
                  name: "Syed Sabbir Ahmed",
                  role: "--------------",
                  description: "Native & cross-platform mobile development expert. Creates intuitive apps that users love to interact with.",
                  gradient: "from-green-500 to-blue-500",
                  skills: ["React Native", "Flutter", "iOS"]
                }
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/70 hover:scale-105 hover:shadow-2xl">
                    <div className="mb-6">
                      <div className={`w-24 h-24 mx-auto bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                      {member.role}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {member.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-white/80 text-gray-700 text-sm rounded-full border border-white/60 hover:bg-white transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse team brings together expertise from various domains to deliver 
                comprehensive solutions tailored to your unique business needs.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up animation-delay-1200">
            <div className="inline-flex items-center justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Start Your Project
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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