"use client";

import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cookie <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
            Information about how we use cookies on our platform.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg mb-8 animate-fade-in-up">
          <p className="text-purple-200 mb-6">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                </p>
                <p className="text-purple-200">
                  Cookies help us improve your experience on our website by remembering your preferences, understanding how you use our site, and tailoring content to match your interests.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  SafeGuardian uses cookies for several purposes, including:
                </p>
                <ul className="text-purple-200 list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-pink-400">Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, account management, and network management. You cannot opt out of these cookies.
                  </li>
                  <li>
                    <strong className="text-pink-400">Authentication Cookies:</strong> These cookies help us recognize you when you log in to your account and provide secure access to your personal information.
                  </li>
                  <li>
                    <strong className="text-pink-400">Preference Cookies:</strong> These cookies allow us to remember your settings and preferences, such as language and location, to provide a more personalized experience.
                  </li>
                  <li>
                    <strong className="text-pink-400">Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website structure and content.
                  </li>
                  <li>
                    <strong className="text-pink-400">Functionality Cookies:</strong> These cookies enable enhanced functionality and personalization, such as video players and live chats. They may be set by us or by third-party providers whose services we have added to our pages.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  We use both session and persistent cookies on our website:
                </p>
                <ul className="text-purple-200 list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-pink-400">Session Cookies:</strong> These cookies are temporary and are deleted from your device when you close your web browser. They are used to keep track of your movements from page to page, so you don&apos;t get asked for the same information you&apos;ve already provided during your visit.
                  </li>
                  <li>
                    <strong className="text-pink-400">Persistent Cookies:</strong> These cookies remain on your device for a period of time specified in the cookie. They are activated each time you visit the website that created that particular cookie. These cookies help us identify you as a unique visitor by storing a randomly generated number.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
                </p>
                <p className="text-purple-200 mb-3">
                  Third-party services we use that may place cookies on your device include:
                </p>
                <ul className="text-purple-200 list-disc pl-6 space-y-1">
                  <li>Google Analytics (for website usage analysis)</li>
                  <li>Google Maps (for location services)</li>
                  <li>Twilio (for message services)</li>
                  <li>Social media sharing buttons (Facebook, Twitter, etc.)</li>
                  <li>Payment processors (if applicable)</li>
                </ul>
                <p className="text-purple-200 mt-3">
                  Each third-party service has its own privacy and cookie policies, which we encourage you to review.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Managing Cookies</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  Most web browsers allow some control of most cookies through the browser settings. You can usually find these settings in the &apos;options&apos; or &apos;preferences&apos; menu of your browser. To understand these settings, the following links may be helpful:
                </p>
                <ul className="text-purple-200 list-disc pl-6 space-y-1">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                      Cookie settings in Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                      Cookie settings in Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                      Cookie settings in Internet Explorer
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                      Cookie settings in Safari
                    </a>
                  </li>
                </ul>
                <p className="text-purple-200 mt-3">
                  Please note that restricting cookies may impact the functionality of our website. Blocking all cookies will mean that many features of the site will not work correctly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Cookie Consent</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200 mb-3">
                  When you first visit our website, you will be shown a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking on the <q>Cookie Settings</q> link in the footer of our website.
                </p>
                <p className="text-purple-200">
                  By continuing to use our website after seeing the cookie banner without changing your cookie settings, you are consenting to our use of cookies as described in this policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to Our Cookie Policy</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the <q>Last Updated</q> date at the top. You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <p className="text-purple-200">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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