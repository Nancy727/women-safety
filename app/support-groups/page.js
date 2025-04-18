"use client";

import Link from "next/link";

export default function SupportGroups() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Groups</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
            Connect with others for healing, growth, and empowerment.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg mb-10 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-white mb-4">Why Join a Support Group?</h2>
          <p className="text-purple-200 mb-4">
            Support groups bring together people facing similar issues, whether that's illness, relationship problems, or other life challenges. They provide a space to share experiences and advice, reduce isolation, and learn coping skills.
          </p>
          <p className="text-purple-200">
            Research shows that participating in support groups can significantly improve mental health, reduce stress and anxiety, and help participants develop healthy coping mechanisms. Remember, seeking help is a sign of strength, not weakness.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* In-Person Support Groups */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg h-full animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">In-Person Support Groups</h2>
            </div>
            <p className="text-purple-200 mb-4">
              Meeting face-to-face with other survivors can create powerful connections and a sense of community.
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Domestic Violence Survivors</h3>
                <p className="text-purple-200 mb-2">Groups for those who have experienced domestic violence, focused on healing and rebuilding.</p>
                <p className="text-sm text-purple-300">Meeting times vary by location</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Sexual Assault Survivors</h3>
                <p className="text-purple-200 mb-2">Safe spaces for sexual assault survivors to share experiences and healing journeys.</p>
                <p className="text-sm text-purple-300">Available in most major cities</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Women's Empowerment Circles</h3>
                <p className="text-purple-200 mb-2">Focus on building confidence, setting boundaries, and personal growth.</p>
                <p className="text-sm text-purple-300">Weekly meetings at community centers</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Find Local Groups
              </button>
            </div>
          </div>

          {/* Online Support Groups */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg h-full animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Online Support Groups</h2>
            </div>
            <p className="text-purple-200 mb-4">
              Virtual groups offer flexibility, anonymity, and connection from the comfort of your home.
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Virtual Safe Spaces</h3>
                <p className="text-purple-200 mb-2">Moderated online forums and chat groups for women dealing with various issues.</p>
                <p className="text-sm text-purple-300">Available 24/7</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Video Support Meetings</h3>
                <p className="text-purple-200 mb-2">Scheduled Zoom/video conferencing groups led by trained facilitators.</p>
                <p className="text-sm text-purple-300">Multiple schedule options</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Mobile App Communities</h3>
                <p className="text-purple-200 mb-2">App-based support groups with resources, tracking tools, and community features.</p>
                <p className="text-sm text-purple-300">Accessible via smartphone</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Join Online Groups
              </button>
            </div>
          </div>

          {/* Specialized Support Groups */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg h-full animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Specialized Support</h2>
            </div>
            <p className="text-purple-200 mb-4">
              Groups tailored to specific experiences or demographics for more targeted support.
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Young Women's Groups</h3>
                <p className="text-purple-200 mb-2">Support groups specifically for teens and young adults facing safety concerns.</p>
                <p className="text-sm text-purple-300">Age-appropriate resources</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Professional Support</h3>
                <p className="text-purple-200 mb-2">Groups for women in specific career fields addressing workplace safety and harassment.</p>
                <p className="text-sm text-purple-300">Industry-specific resources</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Cultural-Specific Groups</h3>
                <p className="text-purple-200 mb-2">Support groups that address cultural context and specific community needs.</p>
                <p className="text-sm text-purple-300">Culturally sensitive approach</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Find Specialized Support
              </button>
            </div>
          </div>
          
          {/* Therapy and Counseling */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg h-full animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Therapy & Counseling</h2>
            </div>
            <p className="text-purple-200 mb-4">
              Professional help combining individual therapy with group support for comprehensive healing.
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Group Therapy</h3>
                <p className="text-purple-200 mb-2">Therapist-led sessions that combine professional guidance with peer support.</p>
                <p className="text-sm text-purple-300">Structured healing approach</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Low-Cost Counseling</h3>
                <p className="text-purple-200 mb-2">Information on sliding-scale, insurance-covered, or free therapy options.</p>
                <p className="text-sm text-purple-300">Financial assistance available</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Trauma-Informed Care</h3>
                <p className="text-purple-200 mb-2">Specialized therapy approaches for trauma survivors with trauma-sensitive methods.</p>
                <p className="text-sm text-purple-300">Evidence-based practices</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Find Therapy Options
              </button>
            </div>
          </div>
          
          {/* Family & Allies Support */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg h-full animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Family & Allies Support</h2>
            </div>
            <p className="text-purple-200 mb-4">
              Resources for loved ones supporting survivors, helping them understand and provide better assistance.
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">For Partners & Family</h3>
                <p className="text-purple-200 mb-2">Support groups for those supporting a loved one who has experienced trauma.</p>
                <p className="text-sm text-purple-300">Learn how to help effectively</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Secondary Trauma Support</h3>
                <p className="text-purple-200 mb-2">Resources for those experiencing secondary trauma from supporting survivors.</p>
                <p className="text-sm text-purple-300">Self-care for supporters</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Educational Resources</h3>
                <p className="text-purple-200 mb-2">Workshops and guides to help allies better understand trauma and recovery.</p>
                <p className="text-sm text-purple-300">Practical support techniques</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Support for Supporters
              </button>
            </div>
          </div>
          
          {/* Crisis Support */}
          <div className="bg-gradient-to-r from-red-900/50 to-dark-500/60 backdrop-blur-sm rounded-lg border border-red-800/40 p-6 shadow-lg h-full animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Immediate Crisis Support</h2>
            </div>
            <p className="text-purple-200 mb-4">
              24/7 help for those in immediate need of support or intervention.
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-red-900/30 rounded-lg p-4 border border-red-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Crisis Hotlines</h3>
                <p className="text-purple-200 mb-2">Immediate phone support for those in crisis or needing urgent help.</p>
                <p className="text-white font-medium">Call: 1-800-XXX-XXXX</p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-4 border border-red-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Text Support</h3>
                <p className="text-purple-200 mb-2">Confidential text-based crisis support for those unable to speak on the phone.</p>
                <p className="text-white font-medium">Text "HELP" to XXXXX</p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-4 border border-red-800/40">
                <h3 className="text-lg font-medium text-white mb-2">Emergency Shelters</h3>
                <p className="text-purple-200 mb-2">Immediate safe housing for those needing to escape dangerous situations.</p>
                <p className="text-white font-medium">24/7 Safe Housing Available</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-3 rounded-lg font-medium hover:from-red-700 hover:to-red-900 transition-all duration-200 shadow-md hover:shadow-lg animate-pulse">
                Get Help Now
              </button>
            </div>
          </div>
        </div>

        {/* How to Choose a Support Group */}
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg my-10 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <h2 className="text-2xl font-semibold text-white mb-6">How to Choose the Right Support Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white mr-2">1</span>
                <h3 className="text-lg font-medium text-white">Identify Your Needs</h3>
              </div>
              <p className="text-purple-200">Consider what specific support you're looking for and what format (in-person, online, etc.) would work best for you.</p>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white mr-2">2</span>
                <h3 className="text-lg font-medium text-white">Research</h3>
              </div>
              <p className="text-purple-200">Look up potential groups, read reviews, and verify the credentials of any professionals involved.</p>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white mr-2">3</span>
                <h3 className="text-lg font-medium text-white">Try It Out</h3>
              </div>
              <p className="text-purple-200">Attend a session or two to see if the group's structure and dynamics work for you. It's okay to try several before committing.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-10 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Link href="/dashboard" className="text-pink-400 hover:text-pink-300 transition-colors">
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
} 