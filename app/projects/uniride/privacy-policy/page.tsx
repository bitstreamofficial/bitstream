'use client';

import UniRideHeader from '@/components/layout/uniride-header';
import UniRideFooter from '@/components/layout/uniride-footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <UniRideHeader />

      {/* Header */}
      <section className="mt-16 bg-gradient-to-br from-[#5CE65C]/10 via-white to-[#1DA1F2]/10 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#333333] md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mb-4 text-xl text-[#333333]/80">
              At UniRide, your privacy is our top priority. This Privacy Policy
              explains how we collect, use, and protect your personal
              information when you use our app and services.
            </p>
            <p className="text-sm text-gray-500">
              Effective Date: October 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Data Controller */}
            <div className="mb-12">
              <p className="text-gray-600">
                UniRide operates as the data controller responsible for
                processing your personal information under applicable data
                protection laws.
              </p>
            </div>

            {/* Consent & Permissions */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Consent & Permissions
              </h2>
              <p className="mb-4 text-gray-600">
                By using UniRide, you agree to the collection and use of your
                information as described in this policy.
              </p>
              <p className="mb-4 text-gray-600">
                We only collect data necessary to operate the app effectively.
              </p>
              <p className="text-gray-600">
                By granting permissions (such as location or notifications), you
                allow UniRide to provide its core services. You can manage or
                revoke these permissions anytime through your device settings.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Information We Collect
              </h2>
              <p className="mb-6 text-gray-600">
                We collect the following information to improve our service and
                ensure safety for all users:
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.1 Personal Information
              </h3>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>
                  Name, email address, phone number, and university ID (for
                  verification)
                </li>
                <li>Profile photo and gender (optional)</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.2 Location Data
              </h3>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>
                  Real-time location when sharing rides or searching for nearby
                  rides
                </li>
                <li>Pickup and destination points for ride requests</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.3 Vehicle Information (For Riders)
              </h3>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>
                  Bike registration details and license information (for
                  verification)
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.4 Communication Data
              </h3>
              <ul className="mb-4 list-disc pl-6 text-gray-600">
                <li>
                  Messages and chats between riders and passengers (stored
                  securely)
                </li>
              </ul>
              <p className="text-gray-600">
                We do not monitor or access private messages unless required for
                safety investigations, dispute resolution, or legal compliance.
              </p>
            </div>

            {/* Payment Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. Payment Information
              </h2>
              <p className="mb-4 text-gray-600">
                Currently, UniRide supports cash payments only.
              </p>
              <p className="text-gray-600">
                In future updates, secure digital payment options may be
                introduced, and this policy will be updated accordingly.
              </p>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. How We Use Your Information
              </h2>
              <p className="mb-4 text-gray-600">Your information is used to:</p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>Connect passengers with available riders</li>
                <li>Verify user identities and maintain safety</li>
                <li>Display your posts or ride requests</li>
                <li>Send ride updates, notifications, and support messages</li>
                <li>Improve app features and performance</li>
              </ul>
              <p className="text-gray-600">
                We never sell or share your personal data with third-party
                marketers.
              </p>
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
                We use advanced encryption and secure authentication to protect
                your data.
              </p>
              <p className="text-gray-600">
                Access is restricted only to authorized UniRide personnel and
                trusted service providers.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Data Retention
              </h2>
              <p className="mb-4 text-gray-600">
                We retain your data only as long as necessary for providing
                services and fulfilling legal obligations.
              </p>
              <p className="text-gray-600">
                You can request account deletion anytime, and your data will be
                permanently removed within 30 days.
              </p>
            </div>

            {/* Cookies & Tracking */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Cookies & Tracking
              </h2>
              <p className="mb-4 text-gray-600">
                UniRide may use cookies or similar technologies to analyze app
                usage and enhance performance.
              </p>
              <p className="text-gray-600">
                You can disable cookies through your browser or device settings.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                8. Your Rights
              </h2>
              <p className="mb-4 text-gray-600">You have the right to:</p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>Access or update your personal data</li>
                <li>Request account deletion</li>
                <li>Withdraw consent for data processing</li>
                <li>Contact us regarding privacy concerns</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                9. Information Sharing
              </h2>
              <p className="mb-4 text-gray-600">
                Your data may be shared only when:
              </p>
              <ul className="mb-6 list-disc pl-6 text-gray-600">
                <li>Required by law or legal authority</li>
                <li>Necessary for user safety or fraud prevention</li>
                <li>
                  Needed to provide core services (e.g., Firebase for
                  authentication and storage)
                </li>
              </ul>
            </div>

            {/* Cross-Border Data Transfers */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                10. Cross-Border Data Transfers
              </h2>
              <p className="text-gray-600">
                Your information may occasionally be transferred and processed
                in other regions, where data protection laws may differ. We
                ensure appropriate safeguards are in place.
              </p>
            </div>

            {/* Updates to This Policy */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                11. Updates to This Policy
              </h2>
              <p className="mb-4 text-gray-600">
                We may update this Privacy Policy to reflect new features or
                legal requirements.
              </p>
              <p className="text-gray-600">
                Any changes will be posted in the app with a new effective date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                12. Contact Us
              </h2>
              <p className="mb-4 text-gray-600">
                For questions or concerns, reach us at:
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:asteriskshq@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  asteriskshq@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <UniRideFooter />
    </div>
  );
}
