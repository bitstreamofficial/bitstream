'use client'

import Link from 'next/link'
import { UniRideNavbar } from '@/components/layout/uniride-navbar'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <UniRideNavbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Please read these terms carefully before using UniRide. By using our service, you agree to be bound by these terms.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and UniRide ("Company," "we," "us," or "our") regarding your use of the UniRide mobile application and website (collectively, the "Service").
              </p>
              <p className="text-gray-600 mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Service.
              </p>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes, and continued use of the Service after such changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Eligibility */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
              <p className="text-gray-600 mb-4">To use UniRide, you must:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                <li>Be a currently enrolled university student with valid student credentials</li>
                <li>Have the legal capacity to enter into these Terms</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to verify your student status and may request additional documentation. Accounts found to be in violation of eligibility requirements will be suspended or terminated.
              </p>
            </div>

            {/* Account Registration */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration and Security</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-600 mb-4">
                You must create an account to use our Service. You agree to provide accurate, current, and complete information during registration and to update such information as necessary.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Security</h3>
              <p className="text-gray-600 mb-4">You are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Immediately notifying us of any unauthorized use of your account</li>
                <li>Ensuring your contact information is current and accurate</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Account Termination</h3>
              <p className="text-gray-600 mb-6">
                You may terminate your account at any time. We may suspend or terminate your account for violations of these Terms, illegal activities, or other reasons at our discretion.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Description</h2>
              <p className="text-gray-600 mb-4">
                UniRide is a ride-sharing platform that connects university students for shared transportation. Our Service includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Matching riders with drivers based on routes and preferences</li>
                <li>Facilitating communication between users</li>
                <li>Processing payments for shared ride costs</li>
                <li>Providing safety features and support</li>
                <li>Maintaining user profiles and ride history</li>
              </ul>
              <p className="text-gray-600">
                UniRide is a technology platform that facilitates connections between users. We do not provide transportation services directly and are not a transportation carrier.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Responsibilities and Conduct</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 General Conduct</h3>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Use the Service only for lawful purposes</li>
                <li>Treat all users with respect and courtesy</li>
                <li>Provide accurate information about rides and availability</li>
                <li>Arrive on time for scheduled rides</li>
                <li>Communicate promptly about any changes or cancellations</li>
                <li>Follow all traffic laws and safety regulations when driving</li>
                <li>Maintain appropriate insurance coverage if offering rides</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Prohibited Activities</h3>
              <p className="text-gray-600 mb-4">You may not:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Use the Service for commercial transportation purposes</li>
                <li>Harass, threaten, or discriminate against other users</li>
                <li>Share false or misleading information</li>
                <li>Use the Service while under the influence of drugs or alcohol</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to circumvent safety or security measures</li>
                <li>Create multiple accounts or impersonate others</li>
                <li>Use automated systems to access the Service</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Driver-Specific Responsibilities</h3>
              <p className="text-gray-600 mb-4">If you offer rides, you must:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Possess a valid driver's license and vehicle registration</li>
                <li>Maintain appropriate vehicle insurance</li>
                <li>Ensure your vehicle is safe and roadworthy</li>
                <li>Follow all traffic laws and drive safely</li>
                <li>Not exceed vehicle capacity limits</li>
                <li>Verify passenger identities before departure</li>
              </ul>
            </div>

            {/* Payments and Fees */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payments and Fees</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Cost Sharing</h3>
              <p className="text-gray-600 mb-6">
                Riders agree to pay their fair share of ride costs as determined by the driver and agreed upon before the ride. Costs may include fuel, tolls, parking, and other reasonable expenses.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Payment Processing</h3>
              <p className="text-gray-600 mb-6">
                Payments are processed through secure third-party payment providers. We may charge a small service fee to cover platform costs. All fees will be clearly disclosed before payment.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Refunds and Disputes</h3>
              <p className="text-gray-600 mb-6">
                Refund policies for cancelled rides will be clearly communicated. Payment disputes should be reported immediately through our support system.
              </p>
            </div>

            {/* Safety and Insurance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Safety and Insurance</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Safety Measures</h3>
              <p className="text-gray-600 mb-6">
                While we implement various safety features, users are ultimately responsible for their own safety. We encourage users to verify identities, share ride details with trusted contacts, and trust their instincts.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Insurance Coverage</h3>
              <p className="text-gray-600 mb-6">
                Drivers must maintain appropriate vehicle insurance. UniRide does not provide insurance coverage for rides. Users should verify insurance coverage before participating in rides.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Emergency Procedures</h3>
              <p className="text-gray-600 mb-6">
                In case of emergency, contact local emergency services immediately. Report any safety incidents to UniRide support as soon as possible.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                The Service and its original content, features, and functionality are owned by UniRide and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 mb-6">
                You may not copy, modify, distribute, sell, or lease any part of our Service without our prior written consent. You also may not reverse engineer or attempt to extract the source code of our software.
              </p>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy</h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your information.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers</h2>
              <p className="text-gray-600 mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT OF THIRD-PARTY RIGHTS</li>
                <li>UNINTERRUPTED OR ERROR-FREE SERVICE</li>
                <li>SECURITY OF DATA TRANSMISSION</li>
                <li>ACCURACY OR RELIABILITY OF USER-GENERATED CONTENT</li>
              </ul>
              <p className="text-gray-600">
                We do not guarantee the safety, reliability, or conduct of users. You use the Service at your own risk.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, UNIRIDE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.
              </p>
              <p className="text-gray-600 mb-6">
                OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE MONTHS PRECEDING THE CLAIM.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
              <p className="text-gray-600 mb-6">
                You agree to indemnify, defend, and hold harmless UniRide and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service, violation of these Terms, or infringement of any rights of another party.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">13.1 Informal Resolution</h3>
              <p className="text-gray-600 mb-6">
                Before pursuing formal dispute resolution, we encourage you to contact our support team to resolve any issues informally.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">13.2 Binding Arbitration</h3>
              <p className="text-gray-600 mb-6">
                Any disputes arising from these Terms or your use of the Service will be resolved through binding arbitration rather than in court, except for certain types of disputes as specified by law.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">13.3 Class Action Waiver</h3>
              <p className="text-gray-600 mb-6">
                You agree that disputes will be resolved on an individual basis and waive any right to participate in class action lawsuits or class-wide arbitration.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms are governed by and construed in accordance with the laws of [Jurisdiction], without regard to conflict of law principles. Any legal action or proceeding shall be brought exclusively in the courts of [Jurisdiction].
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
              <p className="text-gray-600 mb-6">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will remain in full force and effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Email:</strong> legal@uniride.com</p>
                <p className="text-gray-600 mb-2"><strong>Address:</strong> UniRide Legal Team, [University Address]</p>
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-600"><strong>Response Time:</strong> We aim to respond to all legal inquiries within 30 days</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mb-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Acknowledgment</h2>
              <p className="text-blue-800 mb-4">
                By using UniRide, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
              <p className="text-blue-800">
                These Terms constitute the entire agreement between you and UniRide regarding your use of the Service and supersede all prior agreements and understandings.
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
                  <Link href="/projects/uniride/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">legal@uniride.com</li>
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