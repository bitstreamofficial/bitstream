'use client'

import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/projects/uniride" className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  UniRide
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/projects/uniride" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/projects/uniride/terms-of-service" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Your privacy is important to us. This policy explains how UniRide collects, uses, and protects your information.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to UniRide ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service"). We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
              <p className="text-gray-600">
                By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Name and contact information (email address, phone number)</li>
                <li>University affiliation and student ID verification</li>
                <li>Profile picture and basic demographic information</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Location Information</h3>
              <p className="text-gray-600 mb-6">
                With your consent, we collect real-time location data to provide ride-sharing services, including pickup and drop-off locations, route optimization, and safety features. You can disable location sharing at any time through your device settings.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Usage Information</h3>
              <p className="text-gray-600 mb-4">We automatically collect information about your use of our Service:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>App usage patterns and preferences</li>
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>Log data (IP address, access times, pages viewed)</li>
                <li>Ride history and patterns</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4 Communication Data</h3>
              <p className="text-gray-600 mb-6">
                We may collect information from your communications with other users through our platform, including messages and feedback, to ensure safety and improve our services.
              </p>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide and maintain our ride-sharing services</li>
                <li>Verify student status and university affiliation</li>
                <li>Match riders with drivers and facilitate connections</li>
                <li>Process payments and manage transactions</li>
                <li>Ensure safety and security of all users</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send important notifications about rides and account updates</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Prevent fraud and unauthorized activities</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 With Other Users</h3>
              <p className="text-gray-600 mb-6">
                When you participate in a ride, we share limited information (name, profile picture, university, pickup/drop-off locations) with other participants to facilitate the ride-sharing experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 With Service Providers</h3>
              <p className="text-gray-600 mb-6">
                We may share your information with trusted third-party service providers who assist us in operating our platform, including payment processors, cloud storage providers, and analytics services. These providers are bound by confidentiality agreements.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 For Legal Reasons</h3>
              <p className="text-gray-600 mb-6">
                We may disclose your information if required by law, court order, or government request, or to protect the rights, property, or safety of UniRide, our users, or others.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Business Transfers</h3>
              <p className="text-gray-600 mb-6">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to the same privacy protections.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure payment processing through PCI-compliant providers</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
              <p className="text-gray-600">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 mb-6">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. We may retain certain information for longer periods as required by law or for legitimate business purposes, such as fraud prevention and safety.
              </p>
              <p className="text-gray-600">
                When you delete your account, we will delete or anonymize your personal information within a reasonable timeframe, except where retention is required by law.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Restriction:</strong> Request limitation of processing of your information</li>
                <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing where applicable</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600">
                Our Service is intended for university students who are typically 18 years or older. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Links and Services</h2>
              <p className="text-gray-600">
                Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@uniride.com</p>
                <p className="text-gray-600 mb-2"><strong>Address:</strong> UniRide Privacy Team, [University Address]</p>
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-600"><strong>Response Time:</strong> We aim to respond to all privacy inquiries within 30 days</p>
              </div>
            </div>

            {/* Consent */}
            <div className="mb-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Consent</h2>
              <p className="text-blue-800">
                By using our Service, you consent to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree with our privacy practices, please do not use our Service.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">UniRide</h3>
              <p className="text-gray-400">
                Safe, affordable ride-sharing for university students.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/projects/uniride" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects/uniride/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">privacy@uniride.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 UniRide. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}