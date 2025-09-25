'use client'

import { useState, useRef } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    project: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        project: '',
        message: ''
      })
      setSubmitStatus('idle')
    }, 3000)
  }

  const contactMethods = [
    {
      icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email',
      value: 'official.bitstream@gmail.com',
      description: 'Drop us a line anytime',
      gradient: 'from-blue-500 to-cyan-500',
      action: 'mailto:official.bitstream@gmail.com'
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'We value your time',
      gradient: 'from-green-500 to-emerald-500',
      action: null
    },
    {
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6',
      title: 'Services',
      value: 'Web & Mobile Development',
      description: 'Full-stack solutions',
      gradient: 'from-purple-500 to-pink-500',
      action: null
    }
  ]

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Project Lead',
      avatar: 'SC',
      status: 'online',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Technical Lead',
      avatar: 'MR',
      status: 'online',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Emily Johnson',
      role: 'Design Lead',
      avatar: 'EJ',
      status: 'away',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Chat bubbles floating */}
        <div className="absolute top-20 right-20 w-16 h-12 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-xl hidden lg:block animate-float flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>
        <div className="absolute bottom-32 left-20 w-20 h-16 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-xl hidden lg:block animate-float animation-delay-1000"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-4 animate-fade-in-up">
              Let's Talk
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-fade-in-up animation-delay-200"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Ready to start your project? Let's discuss how we can help bring your ideas to life.
          </p>
          
          {/* Team availability indicator */}
          <div className="mt-8 animate-fade-in-up animation-delay-600">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-full px-6 py-3">
              <div className="flex -space-x-2">
                {teamMembers.map((member, index) => (
                  <div key={index} className="relative">
                    <div className={`w-8 h-8 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white`}>
                      {member.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                      member.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">Our team is online and ready to help</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6 animate-fade-in-up animation-delay-800">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer ${method.action ? 'cursor-pointer' : ''}`}
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                  onClick={() => method.action && window.open(method.action)}
                >
                  <div className={`
                    bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-6
                    transition-all duration-500 transform
                    ${hoveredContact === index ? 'scale-105 shadow-2xl shadow-black/10 bg-white/80' : 'hover:shadow-xl hover:bg-white/70'}
                  `}>
                    <div className="flex items-start gap-4">
                      <div className={`
                        w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center
                        transform transition-all duration-500
                        ${hoveredContact === index ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'}
                      `}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={method.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-gray-900 font-semibold mb-1">{method.value}</p>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                      {method.action && (
                        <div className={`
                          transform transition-transform duration-300
                          ${hoveredContact === index ? 'translate-x-2' : ''}
                        `}>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 animate-fade-in-up animation-delay-1000">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose BitStream?</h3>
              <div className="space-y-4">
                {[
                  'Proven track record with successful projects',
                  'Expert team of developers and designers',
                  'Scalable and maintainable solutions',
                  'Dedicated support and maintenance'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5 transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3 animate-fade-in-up animation-delay-600">
            <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Success overlay */}
              {submitStatus === 'success' && (
                <div className="absolute inset-0 bg-green-500/90 backdrop-blur-lg flex items-center justify-center rounded-3xl z-50 animate-fade-in">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600">We'd love to hear about your project</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'firstName', label: 'First Name', required: true },
                    { name: 'lastName', label: 'Last Name', required: true }
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <label className={`
                        absolute left-4 transition-all duration-300 pointer-events-none
                        ${focusedField === field.name || formData[field.name as keyof typeof formData] 
                          ? '-top-3 left-3 text-sm font-semibold text-blue-600 bg-white px-2 rounded-full' 
                          : 'top-3 text-gray-500'
                        }
                      `}>
                        {field.label} {field.required && '*'}
                      </label>
                      <input
                        type="text"
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        required={field.required}
                        className={`
                          w-full px-4 py-3 bg-white/80 border rounded-2xl transition-all duration-300
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          ${focusedField === field.name ? 'border-blue-500 shadow-lg scale-105' : 'border-white/40 hover:border-white/60'}
                        `}
                      />
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="relative">
                  <label className={`
                    absolute left-4 transition-all duration-300 pointer-events-none
                    ${focusedField === 'email' || formData.email 
                      ? '-top-3 left-3 text-sm font-semibold text-blue-600 bg-white px-2 rounded-full' 
                      : 'top-3 text-gray-500'
                    }
                  `}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`
                      w-full px-4 py-3 bg-white/80 border rounded-2xl transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      ${focusedField === 'email' ? 'border-blue-500 shadow-lg scale-105' : 'border-white/40 hover:border-white/60'}
                    `}
                  />
                </div>

                {/* Company */}
                <div className="relative">
                  <label className={`
                    absolute left-4 transition-all duration-300 pointer-events-none
                    ${focusedField === 'company' || formData.company 
                      ? '-top-3 left-3 text-sm font-semibold text-blue-600 bg-white px-2 rounded-full' 
                      : 'top-3 text-gray-500'
                    }
                  `}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={`
                      w-full px-4 py-3 bg-white/80 border rounded-2xl transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      ${focusedField === 'company' ? 'border-blue-500 shadow-lg scale-105' : 'border-white/40 hover:border-white/60'}
                    `}
                  />
                </div>

                {/* Project Type */}
                <div className="relative">
                  <label className={`
                    absolute left-4 transition-all duration-300 pointer-events-none
                    ${focusedField === 'project' || formData.project 
                      ? '-top-3 left-3 text-sm font-semibold text-blue-600 bg-white px-2 rounded-full' 
                      : 'top-3 text-gray-500'
                    }
                  `}>
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('project')}
                    onBlur={() => setFocusedField(null)}
                    className={`
                      w-full px-4 py-3 bg-white/80 border rounded-2xl transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none
                      ${focusedField === 'project' ? 'border-blue-500 shadow-lg scale-105' : 'border-white/40 hover:border-white/60'}
                    `}
                  >
                    <option value="">Select a project type</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="both">Web & Mobile</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className={`
                    absolute left-4 transition-all duration-300 pointer-events-none
                    ${focusedField === 'message' || formData.message 
                      ? '-top-3 left-3 text-sm font-semibold text-blue-600 bg-white px-2 rounded-full' 
                      : 'top-3 text-gray-500'
                    }
                  `}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    placeholder={focusedField === 'message' ? "Tell us about your project, timeline, budget, and any specific requirements..." : ""}
                    className={`
                      w-full px-4 py-3 bg-white/80 border rounded-2xl transition-all duration-300 resize-vertical
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      ${focusedField === 'message' ? 'border-blue-500 shadow-lg scale-105' : 'border-white/40 hover:border-white/60'}
                    `}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                    {formData.message.length}/500
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300 transform
                    ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105 active:scale-95'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Prefer a quicker way to connect?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <svg className="w-5 h-5 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                <path d="M11.893 5.5c2.998 0 5.434 2.434 5.437 5.433-.001 2.998-2.438 5.433-5.437 5.433-.599 0-1.174-.121-1.694-.34l-2.968.777.789-2.886c-.413-.73-.632-1.563-.632-2.434.003-2.999 2.436-5.433 5.435-5.433z"/>
              </svg>
              WhatsApp Chat
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Live Chat
            </button>
            <button 
              onClick={() => window.open('mailto:official.bitstream@gmail.com')}
              className="px-8 py-4 bg-white/60 backdrop-blur-lg border border-white/40 text-gray-700 font-semibold rounded-full hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Direct
            </button>
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