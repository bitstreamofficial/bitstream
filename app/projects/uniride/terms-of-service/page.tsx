'use client';

import UniRideHeader from '@/components/layout/uniride-header';
import UniRideFooter from '@/components/layout/uniride-footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <UniRideHeader />

      {/* Header */}
      <section className="mt-16 bg-gradient-to-br from-[#5CE65C]/10 via-white to-[#1DA1F2]/10 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Terms of Service
            </h1>
            <p className="mb-4 text-xl text-gray-600">
              Please read these Terms of Service carefully before using UniRide.
              By using our app or services, you agree to be bound by these Terms
              and our Privacy Policy.
            </p>
            <p className="text-sm text-gray-500">Last Updated: October 2025</p>
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
                1. Agreement to Terms
              </h2>
              <p className="mb-4 text-gray-600">
                These Terms constitute a legally binding agreement between you
                ("User," "you") and UniRide ("we," "us," or "our") regarding
                your access to and use of the UniRide mobile application and
                related services (collectively, the "Service").
              </p>
              <p className="mb-4 text-gray-600">
                If you do not agree to these Terms, please do not use UniRide.
                We may modify these Terms occasionally, and updates will be
                posted in the app. Continued use after updates means you accept
                the revised Terms.
              </p>
            </div>

            {/* Eligibility */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Eligibility
              </h2>
              <p className="mb-4 text-gray-600">To use UniRide, you must:</p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>
                  Be at least 18 years old or the age of majority in your
                  jurisdiction.
                </li>
                <li>
                  Be a currently enrolled university student with valid student
                  credentials.
                </li>
                <li>
                  Provide accurate and verifiable registration information.
                </li>
                <li>
                  Maintain the security of your account and comply with
                  applicable laws.
                </li>
              </ul>
              <p className="text-gray-600">
                UniRide reserves the right to verify your student identity and
                suspend or terminate accounts that violate these requirements.
              </p>
            </div>

            {/* Account Registration */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. Account Registration and Security
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                3.1 Account Creation
              </h3>
              <p className="mb-4 text-gray-600">
                Users must create an account using valid credentials (email,
                student ID, etc.). You agree to provide accurate, current, and
                complete information.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                3.2 Account Security
              </h3>
              <p className="mb-4 text-gray-600">
                You are responsible for maintaining your account confidentiality
                and for all activities under your account. Notify UniRide
                immediately if you suspect unauthorized access.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                3.3 Account Termination
              </h3>
              <p className="mb-6 text-gray-600">
                You may delete your account anytime through the app. UniRide
                reserves the right to suspend or terminate accounts violating
                these Terms, engaging in fraudulent activity, or compromising
                user safety.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. Service Description
              </h2>
              <p className="mb-4 text-gray-600">
                UniRide is a bike-based ride-sharing platform designed
                exclusively for university students. It connects riders (bike
                owners) with passengers traveling on similar routes.
              </p>
              <p className="mb-4 text-gray-600">Our Service includes:</p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>
                  Matching riders and passengers based on routes and pickup
                  points
                </li>
                <li>Facilitating in-app communication between users</li>
                <li>Displaying verified profiles and ride histories</li>
                <li>
                  Providing safety verification (email & license verification)
                </li>
                <li>Offering route-based fare charts for reference</li>
              </ul>
              <p className="text-gray-600">
                UniRide is not a transportation provider, carrier, or logistics
                company. We only facilitate connections between users.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. User Responsibilities and Conduct
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                5.1 General Conduct
              </h3>
              <p className="mb-4 text-gray-600">You agree to:</p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>
                  Use the app only for legitimate, non-commercial,
                  student-to-student ride sharing.
                </li>
                <li>Treat all users with respect and courtesy.</li>
                <li>Provide accurate pickup and destination information.</li>
                <li>Arrive on time and communicate changes promptly.</li>
                <li>Follow all traffic and university safety rules.</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                5.2 Prohibited Activities
              </h3>
              <p className="mb-4 text-gray-600">You may not:</p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>Use UniRide for commercial or delivery purposes.</li>
                <li>Provide false information or impersonate others.</li>
                <li>
                  Engage in harassment, discrimination, or unsafe behavior.
                </li>
                <li>
                  Use the app while under the influence of alcohol or drugs.
                </li>
                <li>
                  Attempt to hack, misuse, or reverse-engineer UniRide systems.
                </li>
                <li>Create multiple or fake accounts.</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                5.3 Rider Responsibilities
              </h3>
              <p className="mb-4 text-gray-600">If you offer rides:</p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>
                  Maintain a valid driver's license and bike registration.
                </li>
                <li>Ensure your bike is in safe working condition.</li>
                <li>
                  Verify your passenger's identity before starting a ride.
                </li>
                <li>
                  Comply with all traffic laws and insurance requirements.
                </li>
                <li>Carry only one passenger per ride (bike policy).</li>
              </ul>
            </div>

            {/* Payments and Fees */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Payments and Fares
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                6.1 Cash-Only System
              </h3>
              <p className="mb-6 text-gray-600">
                Currently, UniRide supports cash payments only. Fares are fixed
                according to a pre-defined route and stop-based chart set by
                UniRide and displayed in the app.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                6.2 Cost Sharing
              </h3>
              <p className="mb-6 text-gray-600">
                Riders and passengers must mutually agree on the ride before
                starting. Riders may not charge beyond the standard fare chart.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                6.3 Refunds and Disputes
              </h3>
              <p className="mb-6 text-gray-600">
                Since payments are handled directly between students, UniRide
                does not process refunds. Any disputes should be reported to
                UniRide Support for investigation.
              </p>
            </div>

            {/* Safety and Insurance */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Safety and Verification
              </h2>
              <p className="mb-4 text-gray-600">
                UniRide verifies users via email and license verification (for
                riders).
              </p>
              <p className="mb-4 text-gray-600">
                Both parties should confirm each other's identity before a ride.
              </p>
              <p className="mb-4 text-gray-600">
                UniRide encourages users to share trip details with trusted
                contacts.
              </p>
              <p className="mb-4 text-gray-600">
                In emergencies, contact local emergency services first and then
                report the issue to UniRide support.
              </p>
              <p className="text-gray-600">
                UniRide is not responsible for the personal conduct of users
                during rides.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                8. Intellectual Property
              </h2>
              <p className="mb-6 text-gray-600">
                All content, features, and software associated with UniRide are
                the property of UniRide and protected by applicable intellectual
                property laws. You may not copy, modify, sell, or distribute our
                content or attempt to extract source code.
              </p>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                9. Privacy
              </h2>
              <p className="mb-6 text-gray-600">
                Your use of UniRide is governed by our Privacy Policy, which
                explains how we collect, use, and safeguard your data. By using
                UniRide, you consent to the practices described in that policy.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                10. Disclaimers
              </h2>
              <p className="mb-4 text-gray-600">
                UniRide provides its services "as is" and "as available." We do
                not guarantee uninterrupted service or the accuracy of
                user-generated content.
              </p>
              <p className="mb-4 text-gray-600">We are not responsible for:</p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>The conduct or reliability of users</li>
                <li>Any accidents, delays, or losses during rides</li>
                <li>The condition of vehicles used</li>
              </ul>
              <p className="text-gray-600">
                Users assume all risk when using the Service.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                11. Limitation of Liability
              </h2>
              <p className="mb-6 text-gray-600">
                To the fullest extent permitted by law, UniRide shall not be
                liable for:
              </p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or goodwill</li>
              </ul>
              <p className="mb-6 text-gray-600">
                Our total liability for any claim shall not exceed the amount
                paid (if any) to UniRide in the 12 months preceding the event.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                12. Indemnification
              </h2>
              <p className="mb-6 text-gray-600">
                You agree to defend, indemnify, and hold harmless UniRide, its
                team members, and affiliates from any claims, damages, or
                liabilities arising from:
              </p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>Your misuse of the Service</li>
                <li>Violation of these Terms</li>
                <li>Infringement of third-party rights</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                13. Dispute Resolution
              </h2>
              <p className="mb-4 text-gray-600">
                Before pursuing legal action, contact our support team for
                informal resolution.
              </p>
              <p className="mb-4 text-gray-600">
                If a dispute persists, it will be resolved through binding
                arbitration under applicable laws.
              </p>
              <p className="mb-6 text-gray-600">
                You agree to waive participation in any class action or group
                lawsuit.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                14. Governing Law
              </h2>
              <p className="mb-6 text-gray-600">
                These Terms are governed by the laws of Bangladesh, without
                regard to conflict of law principles. Any disputes will be
                handled exclusively in the courts located in Dhaka, Bangladesh.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                15. Severability
              </h2>
              <p className="mb-6 text-gray-600">
                If any provision of these Terms is deemed invalid or
                unenforceable, the remaining provisions will continue in full
                effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                16. Contact Information
              </h2>
              <p className="mb-4 text-gray-600">
                If you have questions or concerns, contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  <a
                    href="mailto:asteriskshq@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    asteriskshq@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Daffodil Smart City, Ashulia, Dhaka
                </p>

                <p className="flex items-center">
                  <span className="mr-2">🕒</span>
                  Response Time: Within 7 business days
                </p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mb-12 rounded-lg border border-blue-200 bg-blue-50 p-6">
              <h2 className="mb-4 text-2xl font-bold text-blue-900">
                Acknowledgment
              </h2>
              <p className="mb-4 text-blue-800">
                By using UniRide, you confirm that you have read, understood,
                and agree to these Terms of Service.
              </p>
              <p className="text-blue-800">
                These Terms constitute the entire agreement between you and
                UniRide regarding your use of the Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <UniRideFooter />
    </div>
  );
}
