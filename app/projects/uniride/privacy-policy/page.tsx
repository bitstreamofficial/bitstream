'use client';

import Link from 'next/link';
import { UniRideNavbar } from '@/components/layout/uniride-navbar';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <UniRideNavbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mb-4 text-xl text-gray-600">
              Your privacy is important to us. This policy explains how UniRide
              collects, uses, and protects your information.
            </p>
            <p className="text-sm text-gray-500">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Introduction
              </h2>
              <p className="mb-4 text-gray-600">
                Welcome to UniRide ("we," "our," or "us"). This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our mobile application and website
                (collectively, the "Service"). We are committed to protecting
                your privacy and ensuring the security of your personal
                information.
              </p>
              <p className="text-gray-600">
                By using our Service, you agree to the collection and use of
                information in accordance with this Privacy Policy. If you do
                not agree with our policies and practices, please do not use our
                Service.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.1 Personal Information
              </h3>
              <p className="mb-4 text-gray-600">
                We may collect the following personal information:
              </p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>
                  Name and contact information (email address, phone number)
                </li>
                <li>University affiliation and student ID verification</li>
                <li>Profile picture and basic demographic information</li>
                <li>
                  Payment information (processed securely through third-party
                  providers)
                </li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.2 Location Information
              </h3>
              <p className="mb-6 text-gray-600">
                With your consent, we collect real-time location data to provide
                ride-sharing services, including pickup and drop-off locations,
                route optimization, and safety features. You can disable
                location sharing at any time through your device settings.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.3 Usage Information
              </h3>
              <p className="mb-4 text-gray-600">
                We automatically collect information about your use of our
                Service:
              </p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>App usage patterns and preferences</li>
                <li>
                  Device information (device type, operating system, unique
                  device identifiers)
                </li>
                <li>Log data (IP address, access times, pages viewed)</li>
                <li>Ride history and patterns</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.4 Communication Data
              </h3>
              <p className="mb-6 text-gray-600">
                We may collect information from your communications with other
                users through our platform, including messages and feedback, to
                ensure safety and improve our services.
              </p>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 text-gray-600">
                We use the collected information for the following purposes:
              </p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>Provide and maintain our ride-sharing services</li>
                <li>Verify student status and university affiliation</li>
                <li>Match riders with drivers and facilitate connections</li>
                <li>Process payments and manage transactions</li>
                <li>Ensure safety and security of all users</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>
                  Send important notifications about rides and account updates
                </li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Prevent fraud and unauthorized activities</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. Information Sharing and Disclosure
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                4.1 With Other Users
              </h3>
              <p className="mb-6 text-gray-600">
                When you participate in a ride, we share limited information
                (name, profile picture, university, pickup/drop-off locations)
                with other participants to facilitate the ride-sharing
                experience.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                4.2 With Service Providers
              </h3>
              <p className="mb-6 text-gray-600">
                We may share your information with trusted third-party service
                providers who assist us in operating our platform, including
                payment processors, cloud storage providers, and analytics
                services. These providers are bound by confidentiality
                agreements.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                4.3 For Legal Reasons
              </h3>
              <p className="mb-6 text-gray-600">
                We may disclose your information if required by law, court
                order, or government request, or to protect the rights,
                property, or safety of UniRide, our users, or others.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                4.4 Business Transfers
              </h3>
              <p className="mb-6 text-gray-600">
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred as part of the business
                transaction, subject to the same privacy protections.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. Data Security
              </h2>
              <p className="mb-4 text-gray-600">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                These measures include:
              </p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>
                  Secure payment processing through PCI-compliant providers
                </li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
              <p className="text-gray-600">
                However, no method of transmission over the internet or
                electronic storage is 100% secure. While we strive to protect
                your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Data Retention
              </h2>
              <p className="mb-6 text-gray-600">
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                Privacy Policy. We may retain certain information for longer
                periods as required by law or for legitimate business purposes,
                such as fraud prevention and safety.
              </p>
              <p className="text-gray-600">
                When you delete your account, we will delete or anonymize your
                personal information within a reasonable timeframe, except where
                retention is required by law.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Your Privacy Rights
              </h2>
              <p className="mb-4 text-gray-600">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to
                  another service
                </li>
                <li>
                  <strong>Restriction:</strong> Request limitation of processing
                  of your information
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your
                  information for certain purposes
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> Withdraw consent for
                  data processing where applicable
                </li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the
                information provided in the "Contact Us" section below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                8. Children's Privacy
              </h2>
              <p className="text-gray-600">
                Our Service is intended for university students who are
                typically 18 years or older. We do not knowingly collect
                personal information from children under 13. If we become aware
                that we have collected personal information from a child under
                13, we will take steps to delete such information promptly.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                9. International Data Transfers
              </h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in
                countries other than your country of residence. We ensure that
                such transfers comply with applicable data protection laws and
                implement appropriate safeguards to protect your information.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                10. Third-Party Links and Services
              </h2>
              <p className="text-gray-600">
                Our Service may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these third parties. We encourage you to review their privacy
                policies before providing any personal information.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new Privacy
                Policy on this page and updating the "Last updated" date. We
                encourage you to review this Privacy Policy periodically for any
                changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                12. Contact Us
              </h2>
              <p className="mb-4 text-gray-600">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us:
              </p>
              <div className="rounded-lg bg-gray-50 p-6">
                <p className="mb-2 text-gray-600">
                  <strong>Email:</strong> privacy@uniride.com
                </p>
                <p className="mb-2 text-gray-600">
                  <strong>Address:</strong> UniRide Privacy Team, [University
                  Address]
                </p>
                <p className="mb-2 text-gray-600">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-600">
                  <strong>Response Time:</strong> We aim to respond to all
                  privacy inquiries within 30 days
                </p>
              </div>
            </div>

            {/* Consent */}
            <div className="mb-12 rounded-lg border border-blue-200 bg-blue-50 p-6">
              <h2 className="mb-4 text-2xl font-bold text-blue-900">
                Your Consent
              </h2>
              <p className="text-blue-800">
                By using our Service, you consent to the collection, use, and
                sharing of your information as described in this Privacy Policy.
                If you do not agree with our privacy practices, please do not
                use our Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold">UniRide</h3>
              <p className="text-gray-400">
                Safe, affordable ride-sharing for university students.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/projects/uniride"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/uniride/terms-of-service"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">privacy@uniride.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 UniRide. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
