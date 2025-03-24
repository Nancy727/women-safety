import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">SafeGuardian</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
            We are committed to creating a safer world for women through innovative technology and community support.
          </p>
        </div>

        {/* Mission Section */}
        <section className="py-16 border-t border-purple-800/30 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <div className="space-y-4 text-purple-100">
                <p>
                  SafeGuardian was founded with a clear mission: to empower women to navigate the world with confidence and security. We believe that everyone deserves to feel safe, regardless of where they are or what time of day it is.
                </p>
                <p>
                  Our platform combines cutting-edge technology with community-driven support systems to provide comprehensive safety solutions. From real-time location sharing to emergency response mechanisms, we're building tools that make a real difference.
                </p>
                <p>
                  What sets us apart is our holistic approach to safety. We understand that true security comes not just from technology, but from education, community support, and societal change. That's why we're committed to advocating for women's safety at all levels.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/40 to-purple-600/40 rounded-lg z-10 transform rotate-3"></div>
              <div className="relative z-20 bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Protection</h3>
                      <p className="mt-2 text-purple-200">Creating protective tools and services to enhance personal safety in everyday situations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Empowerment</h3>
                      <p className="mt-2 text-purple-200">Equipping women with knowledge, resources, and support to take control of their safety.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Community</h3>
                      <p className="mt-2 text-purple-200">Building networks of support that strengthen safety through collective vigilance and assistance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-t border-purple-800/30 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50,000+", label: "Active Users" },
              { number: "100+", label: "Cities Covered" },
              { number: "1,000+", label: "Emergency Responses" },
              { number: "95%", label: "User Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 text-center shadow-lg" style={{ animationDelay: `${i * 0.1}s` }}>
                <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{stat.number}</p>
                <p className="text-purple-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 border-t border-purple-800/30 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & CEO",
                bio: "A women's rights advocate with over 15 years of experience in safety and technology.",
                color: "from-pink-500 to-purple-600"
              },
              {
                name: "Maya Johnson",
                role: "Head of Technology",
                bio: "A tech innovator focused on developing safety solutions that are both effective and accessible.",
                color: "from-pink-500 to-purple-600"
              },
              {
                name: "Sophia Chen",
                role: "Community Director",
                bio: "Dedicated to building and nurturing supportive communities that empower women globally.",
                color: "from-pink-500 to-purple-600"
              },
              {
                name: "David Rodriguez",
                role: "Safety Expert",
                bio: "Former law enforcement professional bringing expertise in threat assessment and safety protocols.",
                color: "from-purple-600 to-indigo-600"
              },
              {
                name: "Aisha Khan",
                role: "Director of Partnerships",
                bio: "Working to create meaningful collaborations with organizations that share our mission.",
                color: "from-pink-500 to-purple-600"
              },
              {
                name: "Thomas Lee",
                role: "Product Manager",
                bio: "Leading the development of user-centered safety products that make a real difference.",
                color: "from-purple-600 to-indigo-600"
              }
            ].map((member, i) => (
              <div key={i} className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 overflow-hidden shadow-lg animate-fade-in-up hover:shadow-xl hover:border-purple-700/60 transition-all duration-300" style={{ animationDelay: `${(i * 0.1) + 0.3}s` }}>
                <div className="h-40 bg-gradient-to-r from-pink-900/30 to-purple-900/30 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r flex items-center justify-center text-white text-4xl font-bold shadow-lg" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} className={`bg-gradient-to-r ${member.color}`}>
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-pink-400 mb-3">{member.role}</p>
                  <p className="text-purple-200 text-sm">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-purple-300 hover:text-pink-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-purple-300 hover:text-pink-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 border-t border-purple-800/30 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-4 flex items-center justify-center h-24 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl text-purple-300 opacity-70">Partner {i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center border-t border-purple-800/30 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-purple-100 mb-8">
              Be part of the movement to create a safer world for women. Together, we can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link 
                href="/dashboard" 
                className="inline-flex items-center justify-center px-6 py-3 border border-pink-400 text-base font-medium rounded-md text-white hover:bg-purple-900/30 hover:border-pink-300 transition-all duration-300"
              >
                Try Our Platform
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 