"use client";

import Link from "next/link";

export default function LegalResources() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Legal <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
            Know your rights and access the legal support you deserve.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div className="lg:col-span-1 space-y-8 animate-fade-in-left">
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg sticky top-24">
              <h2 className="text-2xl font-semibold text-white mb-6">Quick Access</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#free-legal-help" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    Free Legal Help
                  </a>
                </li>
                <li>
                  <a href="#protection-orders" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Protection Orders
                  </a>
                </li>
                <li>
                  <a href="#victim-rights" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    Victim Rights
                  </a>
                </li>
                <li>
                  <a href="#workplace-rights" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Workplace Rights
                  </a>
                </li>
                <li>
                  <a href="#immigration" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    Immigration & VAWA
                  </a>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-red-900/30 to-dark-500/30 rounded-lg border border-red-800/40">
                <h3 className="text-lg font-medium text-white mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Emergency Legal Help
                </h3>
                <p className="text-purple-200 text-sm mb-3">Need immediate legal assistance?</p>
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-800/40">
                  <p className="text-white font-medium">Call Legal Hotline:</p>
                  <p className="text-white text-lg font-bold">1-800-XXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Content */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="space-y-10">
              {/* Free Legal Help */}
              <section id="free-legal-help" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  Free Legal Help
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Legal Aid Organizations</h3>
                    <p className="text-purple-200 mb-2">Legal aid organizations provide free legal services to those who cannot afford an attorney. Services include representation in court, legal advice, and help with legal paperwork.</p>
                    <p className="text-purple-300 text-sm">Find your local legal aid at: legalaidoffice.org</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Pro Bono Attorneys</h3>
                    <p className="text-purple-200 mb-2">Many private attorneys offer free (pro bono) services to individuals in need. Your state or local bar association can help you find pro bono attorneys in your area.</p>
                    <p className="text-purple-300 text-sm">Contact your state bar association for referrals</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Law School Clinics</h3>
                    <p className="text-purple-200 mb-2">Many law schools operate legal clinics where law students, supervised by attorneys, provide free legal services to the community.</p>
                    <p className="text-purple-300 text-sm">Contact law schools in your area for more information</p>
                  </div>
                </div>
              </section>

              {/* Protection Orders */}
              <section id="protection-orders" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Protection Orders
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">What is a Protection Order?</h3>
                    <p className="text-purple-200">A protection order (also called a restraining order) is a court order that requires someone who has harmed or threatened you to stay away from you, your home, your workplace, and other places you regularly go.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">How to Get a Protection Order</h3>
                    <ol className="text-purple-200 list-decimal pl-5 space-y-2">
                      <li>Go to your local courthouse and ask for protection order forms</li>
                      <li>Fill out the forms, explaining why you need protection</li>
                      <li>A judge will review your request, sometimes on the same day</li>
                      <li>If approved, law enforcement will serve the order to the other person</li>
                      <li>Attend any required follow-up hearings</li>
                    </ol>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Types of Protection Orders</h3>
                    <ul className="text-purple-200 space-y-2">
                      <li><span className="text-white font-medium">Emergency Orders:</span> Temporary, immediate protection (24-72 hours)</li>
                      <li><span className="text-white font-medium">Temporary Orders:</span> Last until a full court hearing (usually 2-3 weeks)</li>
                      <li><span className="text-white font-medium">Final Orders:</span> Issued after a hearing, can last 1-5 years or permanently</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Victim Rights */}
              <section id="victim-rights" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  Victim Rights
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Legal Rights as a Victim</h3>
                    <p className="text-purple-200 mb-3">As a crime victim, you have specific rights that vary by state but typically include:</p>
                    <ul className="text-purple-200 list-disc pl-5 space-y-1">
                      <li>The right to be treated with dignity and respect</li>
                      <li>The right to be notified of court proceedings</li>
                      <li>The right to be present at court proceedings</li>
                      <li>The right to be heard at certain proceedings</li>
                      <li>The right to restitution</li>
                      <li>The right to protection from the accused</li>
                    </ul>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Victim Compensation</h3>
                    <p className="text-purple-200 mb-2">Every state has a victim compensation program that can help cover expenses related to the crime, including:</p>
                    <ul className="text-purple-200 list-disc pl-5 space-y-1">
                      <li>Medical expenses</li>
                      <li>Mental health counseling</li>
                      <li>Funeral expenses</li>
                      <li>Lost wages</li>
                      <li>Relocation expenses</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Workplace Rights */}
              <section id="workplace-rights" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Workplace Rights
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Protection from Discrimination & Harassment</h3>
                    <p className="text-purple-200">Federal laws protect employees from discrimination and harassment based on sex, including sexual harassment. These protections apply in workplaces with 15 or more employees, and many states have laws covering smaller employers.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Taking Leave for Domestic Violence</h3>
                    <p className="text-purple-200">Some states have laws that allow employees to take leave from work to address domestic violence issues, such as attending court hearings, seeking medical attention, or relocating for safety.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Filing a Complaint</h3>
                    <p className="text-purple-200">If you've faced workplace discrimination or harassment, you can file a complaint with:</p>
                    <ul className="text-purple-200 list-disc pl-5 space-y-1 mt-2">
                      <li>The Equal Employment Opportunity Commission (EEOC)</li>
                      <li>Your state's fair employment agency</li>
                      <li>Your company's HR department</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Immigration & VAWA */}
              <section id="immigration" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                  Immigration & VAWA
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">VAWA Self-Petition</h3>
                    <p className="text-purple-200">The Violence Against Women Act (VAWA) allows immigrants who have been abused by a U.S. citizen or permanent resident spouse or parent to apply for legal status without the abuser's knowledge or cooperation.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">U Visa for Crime Victims</h3>
                    <p className="text-purple-200">If you've been a victim of certain crimes (including domestic violence, sexual assault, and human trafficking) and have cooperated with law enforcement, you may be eligible for a U visa, which can lead to permanent residency.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">T Visa for Trafficking Victims</h3>
                    <p className="text-purple-200">Victims of severe forms of human trafficking who would suffer extreme hardship if removed from the U.S. may qualify for a T visa, which can lead to permanent residency.</p>
                  </div>
                </div>
              </section>

              <div className="text-center pt-6">
                <Link href="/dashboard" className="text-pink-400 hover:text-pink-300 transition-colors">
                  Return to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 