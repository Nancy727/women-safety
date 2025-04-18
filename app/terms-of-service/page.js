"use client";

import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
            Please read these terms carefully before using our platform.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg mb-8 animate-fade-in-up">
          <p className="text-purple-200 mb-6">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  These Terms of Service constitute a legally binding agreement made between you and SafeGuardian, concerning your access to and use of our website and services. By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. User Accounts</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p className="text-purple-200 mb-3">
                  You are responsible for safeguarding the password that you use to access our service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
                <p className="text-purple-200">
                  You may not use as a username the name of another person or entity that is not lawfully available for use, or a name or trademark that is subject to any rights of another person or entity without appropriate authorization.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Content and License</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post, including its legality, reliability, and appropriateness.
                </p>
                <p className="text-purple-200 mb-3">
                  By posting content on our service, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through our service. You retain any and all of your rights to any content you submit, post, or display on or through our service and you are responsible for protecting those rights.
                </p>
                <p className="text-purple-200">
                  You represent and warrant that: (i) the content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your content on or through our service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Prohibited Uses</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use our service:
                </p>
                <ul className="text-purple-200 list-disc pl-6 space-y-1">
                  <li>In any way that violates any applicable national or international law or regulation.</li>
                  <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                  <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                  <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the service, or which may harm the Company or users of the service or expose them to liability.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Emergency Services and Notifications</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  SafeGuardian provides tools designed to help in emergency situations, but is not a substitute for emergency services such as 911 (or equivalent in your country). In the event of an emergency, you should always first contact official emergency response services.
                </p>
                <p className="text-purple-200 mb-3">
                  You understand and agree that:
                </p>
                <ul className="text-purple-200 list-disc pl-6 space-y-1">
                  <li>Our service may not be available at all times due to various factors beyond our control.</li>
                  <li>We cannot guarantee that emergency contacts will receive notifications or that they will be able to respond.</li>
                  <li>Location data may not be completely accurate and should not be relied upon exclusively.</li>
                  <li>Messages and notifications may be delayed, undelivered, or blocked by factors beyond our control.</li>
                </ul>
                <p className="text-purple-200 mt-3">
                  We are not responsible for any harm that may result from the delay or failure of our emergency features to function as intended.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimer of Warranties</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  YOUR USE OF OUR SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-purple-200">
                  WE DO NOT WARRANT THAT THE SERVICE WILL MEET YOUR REQUIREMENTS, THAT IT WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-purple-200">
                  Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or contact us to request account deletion.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Governing Law</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-purple-200 mt-3">
                  Email: legal@safeguardian.com<br />
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