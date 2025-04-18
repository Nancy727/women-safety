"use client";

import Link from "next/link";

export default function SafetyTips() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Safety <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Tips</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
            Practical advice and resources to help keep you safe in various situations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Categories */}
          <div className="lg:col-span-1 space-y-8 animate-fade-in-left">
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg sticky top-24">
              <h2 className="text-2xl font-semibold text-white mb-6">Categories</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#personal-safety" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">👤</span>
                    Personal Safety
                  </a>
                </li>
                <li>
                  <a href="#home-safety" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">🏠</span>
                    Home Safety
                  </a>
                </li>
                <li>
                  <a href="#transportation" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">🚗</span>
                    Transportation Safety
                  </a>
                </li>
                <li>
                  <a href="#digital-safety" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">💻</span>
                    Digital Safety
                  </a>
                </li>
                <li>
                  <a href="#travel-safety" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">✈️</span>
                    Travel Safety
                  </a>
                </li>
                <li>
                  <a href="#self-defense" className="text-purple-200 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">🥋</span>
                    Self-Defense
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Tips Content */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="space-y-10">
              {/* Personal Safety */}
              <section id="personal-safety" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="mr-3 text-3xl">👤</span>
                  Personal Safety
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Be Aware of Your Surroundings</h3>
                    <p className="text-purple-200">Always stay alert and aware of your surroundings. Avoid distractions like looking at your phone or listening to loud music when walking alone, especially at night.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Trust Your Instincts</h3>
                    <p className="text-purple-200">If a situation or person makes you uncomfortable, trust your gut feeling. Don't worry about being polite – your safety comes first.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Share Your Location</h3>
                    <p className="text-purple-200">Let trusted friends or family know your whereabouts. Use location-sharing apps or check in regularly when you're out, especially when meeting new people.</p>
                  </div>
                </div>
              </section>

              {/* Home Safety */}
              <section id="home-safety" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="mr-3 text-3xl">🏠</span>
                  Home Safety
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Secure Your Doors and Windows</h3>
                    <p className="text-purple-200">Install quality locks on all doors and windows. Consider adding a peephole or video doorbell to see who's at your door before opening it.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Create the Illusion of Occupancy</h3>
                    <p className="text-purple-200">When away, use timers for lights and electronics to make it appear that someone is home. Ask a trusted neighbor to collect your mail if you'll be gone for several days.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Have an Emergency Plan</h3>
                    <p className="text-purple-200">Create a plan for what to do in case of an emergency. Keep emergency contacts easily accessible and have a "safe room" where you can lock yourself in if needed.</p>
                  </div>
                </div>
              </section>

              {/* Transportation Safety */}
              <section id="transportation" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="mr-3 text-3xl">🚗</span>
                  Transportation Safety
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Public Transportation</h3>
                    <p className="text-purple-200">Sit near the driver or in a populated area. Stay awake and alert. Wait for buses or trains in well-lit, populated areas. Have your pass/fare ready to avoid displaying your wallet.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Ridesharing Safety</h3>
                    <p className="text-purple-200">Verify the driver and car details before getting in. Share your trip details with a friend. Sit in the back seat, and don't share personal information with drivers.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Car Safety</h3>
                    <p className="text-purple-200">Keep your car well-maintained to avoid breakdowns. Park in well-lit areas. Have your keys ready before approaching your car. Check the back seat before entering.</p>
                  </div>
                </div>
              </section>

              {/* Digital Safety */}
              <section id="digital-safety" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="mr-3 text-3xl">💻</span>
                  Digital Safety
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Social Media Privacy</h3>
                    <p className="text-purple-200">Review your privacy settings regularly. Be careful about sharing your location or daily routines. Limit personal information on public profiles.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Online Dating Safety</h3>
                    <p className="text-purple-200">Meet in public places for the first few dates. Tell a friend where you're going and with whom. Use the platform's messaging system initially before sharing personal contact information.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Password Security</h3>
                    <p className="text-purple-200">Use strong, unique passwords for different accounts. Enable two-factor authentication when available. Regularly check your accounts for suspicious activity.</p>
                  </div>
                </div>
              </section>

              {/* Travel Safety */}
              <section id="travel-safety" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="mr-3 text-3xl">✈️</span>
                  Travel Safety
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Research Your Destination</h3>
                    <p className="text-purple-200">Learn about local customs, safe and unsafe areas, and emergency services at your destination. Save important addresses and phone numbers.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Hotel Safety</h3>
                    <p className="text-purple-200">Request a room that's not on the ground floor. Use all door locks. Don't open the door without verifying who's there. Consider bringing a door wedge or portable door lock.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Keep Documents Secure</h3>
                    <p className="text-purple-200">Make copies of important documents (passport, ID, tickets). Keep digital copies in secure cloud storage. Split up your money and cards between different secure locations.</p>
                  </div>
                </div>
              </section>

              {/* Self-Defense */}
              <section id="self-defense" className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="mr-3 text-3xl">🥋</span>
                  Self-Defense
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Basic Self-Defense Techniques</h3>
                    <p className="text-purple-200">Learn basic techniques to break away from grabs and create distance. Target vulnerable areas like eyes, nose, throat, and groin if necessary.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Self-Defense Classes</h3>
                    <p className="text-purple-200">Consider taking a women's self-defense class. Many community centers, gyms, and police departments offer affordable or free classes.</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/40">
                    <h3 className="text-lg font-medium text-white mb-2">Safety Devices</h3>
                    <p className="text-purple-200">Consider carrying legal personal safety devices like alarm key chains, whistles, or smartphone safety apps that can alert emergency contacts.</p>
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