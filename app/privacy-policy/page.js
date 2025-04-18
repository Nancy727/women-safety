"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
            How we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg mb-8 animate-fade-in-up">
          <p className="text-purple-200 mb-6">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  Welcome to SafeGuardian. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our mobile application and tell you about your privacy rights and how the law protects you.
                </p>
                <p className="text-purple-200">
                  This privacy policy applies to all users of our platform, including those who register for an account, use our emergency services, or simply visit our website. Please read this privacy policy carefully to understand our views and practices regarding your personal data.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="text-purple-200 list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-pink-400">Identity Data:</strong> Includes first name, last name, username or similar identifier, and gender.
                  </li>
                  <li>
                    <strong className="text-pink-400">Contact Data:</strong> Includes email address, phone number, and emergency contact information.
                  </li>
                  <li>
                    <strong className="text-pink-400">Technical Data:</strong> Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our platform.
                  </li>
                  <li>
                    <strong className="text-pink-400">Profile Data:</strong> Includes your username and password, preferences, feedback, and survey responses.
                  </li>
                  <li>
                    <strong className="text-pink-400">Usage Data:</strong> Includes information about how you use our website, products, and services.
                  </li>
                  <li>
                    <strong className="text-pink-400">Location Data:</strong> Includes your current location shared through our app when using emergency features.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="text-purple-200 list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-pink-400">To Register You as a User:</strong> To create and manage your account, including verifying your identity.
                  </li>
                  <li>
                    <strong className="text-pink-400">To Provide Emergency Services:</strong> To process and deliver emergency alerts to your designated contacts, including location information when needed for safety purposes.
                  </li>
                  <li>
                    <strong className="text-pink-400">To Manage Our Relationship:</strong> To notify you about changes to our terms or privacy policy, and to ask you to leave a review or take a survey.
                  </li>
                  <li>
                    <strong className="text-pink-400">To Improve Our Platform:</strong> To administer and protect our business and this website, including troubleshooting, data analysis, testing, system maintenance, support, reporting, and hosting of data.
                  </li>
                  <li>
                    <strong className="text-pink-400">To Deliver Relevant Content:</strong> To measure or understand the effectiveness of the content we serve to you.
                  </li>
                </ul>
                <p className="text-purple-200 mt-3">
                  We will never sell your personal data to third parties or use it for purposes not stated in this privacy policy without your consent.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                </p>
                <p className="text-purple-200 mb-3">
                  We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                </p>
                <p className="text-purple-200">
                  However, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our website; any transmission is at your own risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
                <p className="text-purple-200">
                  To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data, and whether we can achieve those purposes through other means, and the applicable legal requirements.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Legal Rights</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="text-purple-200 list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-pink-400">Request access</strong> to your personal data.
                  </li>
                  <li>
                    <strong className="text-pink-400">Request correction</strong> of your personal data.
                  </li>
                  <li>
                    <strong className="text-pink-400">Request erasure</strong> of your personal data.
                  </li>
                  <li>
                    <strong className="text-pink-400">Object to processing</strong> of your personal data.
                  </li>
                  <li>
                    <strong className="text-pink-400">Request restriction</strong> of processing your personal data.
                  </li>
                  <li>
                    <strong className="text-pink-400">Request transfer</strong> of your personal data.
                  </li>
                  <li>
                    <strong className="text-pink-400">Right to withdraw consent</strong> at any time.
                  </li>
                </ul>
                <p className="text-purple-200 mt-3">
                  If you wish to exercise any of these rights, please contact us using the details provided in the "Contact Us" section.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Children's Privacy</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  Our platform is not intended for children under 16 years of age, and we do not knowingly collect personal data from children under 16. If we learn we have collected or received personal data from a child under 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us using the details provided in the "Contact Us" section.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Links</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  Our website or app may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to the Privacy Policy</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top. You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p className="text-purple-200 mt-3">
                  Email: privacy@safeguardian.com<br />
                  Address: 123 Safety Street, Secure City, SC 12345<br />
                  Phone: 1-800-XXX-XXXX
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="text-center animate-fade-in-up">
          <Link href="/" className="text-pink-400 hover:text-pink-300 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 