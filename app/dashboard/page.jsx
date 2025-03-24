"use client";

import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [isSharingLocation, setIsSharingLocation] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 animate-fade-in-down">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Safety Dashboard</h1>
          <p className="text-purple-200">Monitor your safety status, access emergency services, and manage your safety tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Dashboard Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Safety Score Card */}
            <div className="bg-gradient-to-r from-purple-900/30 to-dark-500/60 backdrop-blur-sm rounded-xl border border-purple-800/40 p-6 shadow-lg animate-fade-in-up">
              <h2 className="text-xl font-semibold text-white mb-4">Safety Score by Area</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/40">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-200">Current Location</span>
                    <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded">High Safety</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">92</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Downtown Area</h3>
                      <p className="text-xs text-purple-300">Updated 10 minutes ago</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/40">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-200">Nearby Area</span>
                    <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded">Medium Safety</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">76</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Riverside District</h3>
                      <p className="text-xs text-purple-300">Updated 25 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="text-pink-400 text-sm flex items-center hover:text-pink-300 transition-colors">
                  <span>View Safety Map</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Location Sharing Card */}
            <div className="bg-gradient-to-r from-purple-900/30 to-dark-500/60 backdrop-blur-sm rounded-xl border border-purple-800/40 p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-xl font-semibold text-white mb-4">Location Sharing</h2>
              <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/40 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${isSharingLocation ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                    <span className="text-white">Location Sharing Status</span>
                  </div>
                  <button 
                    onClick={() => setIsSharingLocation(!isSharingLocation)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      isSharingLocation 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white'
                    } transition-colors`}
                  >
                    {isSharingLocation ? 'Stop Sharing' : 'Start Sharing'}
                  </button>
                </div>
                {isSharingLocation && (
                  <div className="mt-3 text-purple-200 text-sm">
                    <p>Your location is currently being shared with your emergency contacts.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-4">
                <h3 className="text-white font-medium mb-2">Trusted Contacts</h3>
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/40">
                  <ul className="space-y-3">
                    {['Mom', 'Dad', 'Roommate', 'Best Friend'].map((contact, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
                            {contact[0]}
                          </div>
                          <span className="ml-2 text-purple-100">{contact}</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-purple-300 hover:text-pink-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </button>
                          <button className="p-1 text-purple-300 hover:text-pink-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-3 text-pink-400 text-sm flex items-center hover:text-pink-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    <span>Add More Contacts</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Safety Tips Card */}
            <div className="bg-gradient-to-r from-purple-900/30 to-dark-500/60 backdrop-blur-sm rounded-xl border border-purple-800/40 p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl font-semibold text-white mb-4">Safety Tips & Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Personal Safety Tips",
                    description: "Learn essential personal safety techniques and precautions for daily life.",
                    icon: "🛡️"
                  },
                  {
                    title: "Self-Defense Training",
                    description: "Find local self-defense classes and online training resources.",
                    icon: "🥋"
                  },
                  {
                    title: "Travel Safety Guide",
                    description: "Tips for staying safe while traveling alone or in unfamiliar areas.",
                    icon: "✈️"
                  },
                  {
                    title: "Digital Safety",
                    description: "Protect your online presence and personal information from threats.",
                    icon: "🔒"
                  }
                ].map((tip, i) => (
                  <div key={i} className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/40 hover:border-purple-700 transition-colors cursor-pointer">
                    <div className="flex items-start">
                      <div className="text-2xl mr-3">{tip.icon}</div>
                      <div>
                        <h3 className="text-white font-medium">{tip.title}</h3>
                        <p className="text-sm text-purple-200 mt-1">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="#" className="text-pink-400 text-sm flex items-center hover:text-pink-300 transition-colors">
                  <span>View All Resources</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            {/* Emergency Button */}
            <div className="bg-gradient-to-r from-red-900/50 to-dark-500/60 backdrop-blur-sm rounded-xl border border-red-800/40 p-6 shadow-lg text-center animate-fade-in-up">
              <button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition-colors rounded-lg py-4 px-6 text-white font-bold text-lg shadow-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                EMERGENCY SOS
              </button>
              <p className="mt-3 text-red-200 text-sm">Press in case of emergency to alert your contacts and authorities</p>
            </div>

            {/* Helpline Numbers */}
            <div className="bg-gradient-to-r from-purple-900/30 to-dark-500/60 backdrop-blur-sm rounded-xl border border-purple-800/40 p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-xl font-semibold text-white mb-4">Emergency Helplines</h2>
              <ul className="space-y-3">
                {[
                  { name: "Women's Helpline", number: "1800-XXX-XXXX" },
                  { name: "Police Emergency", number: "100" },
                  { name: "Ambulance", number: "102" },
                  { name: "Domestic Violence", number: "1800-XXX-XXXX" },
                  { name: "Cyber Crime", number: "1800-XXX-XXXX" }
                ].map((helpline, i) => (
                  <li key={i} className="bg-purple-900/20 rounded-lg p-3 border border-purple-800/40">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">{helpline.name}</span>
                      <a href={`tel:${helpline.number}`} className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full hover:from-pink-700 hover:to-purple-700 transition-colors">
                        {helpline.number}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activity Log */}
            <div className="bg-gradient-to-r from-purple-900/30 to-dark-500/60 backdrop-blur-sm rounded-xl border border-purple-800/40 p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {[
                  { activity: "Location shared with Mom", time: "10 minutes ago" },
                  { activity: "Safety check-in completed", time: "2 hours ago" },
                  { activity: "New contact added: Emily", time: "Yesterday" },
                  { activity: "Route safety analyzed", time: "2 days ago" }
                ].map((activity, i) => (
                  <div key={i} className="bg-purple-900/20 rounded-lg p-3 border border-purple-800/40">
                    <p className="text-white text-sm">{activity.activity}</p>
                    <p className="text-purple-300 text-xs mt-1">{activity.time}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="text-pink-400 text-sm flex items-center hover:text-pink-300 transition-colors">
                  <span>View All Activity</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Complaint Register Box */}
            <div className="bg-gradient-to-r from-purple-900/30 to-dark-500/60 backdrop-blur-sm rounded-xl border border-purple-800/40 p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-xl font-semibold text-white mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Register a Complaint
                </div>
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="complaint-type" className="block text-sm font-medium text-purple-200 mb-1">
                    Complaint Type
                  </label>
                  <select 
                    id="complaint-type"
                    className="w-full bg-purple-900/40 border border-purple-700/50 rounded-md py-2 px-3 text-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="harassment">Harassment</option>
                    <option value="stalking">Stalking</option>
                    <option value="domestic-violence">Domestic Violence</option>
                    <option value="cyber-crime">Cyber Crime</option>
                    <option value="unsafe-area">Unsafe Area Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="complaint-location" className="block text-sm font-medium text-purple-200 mb-1">
                    Location
                  </label>
                  <div className="flex">
                    <input 
                      type="text" 
                      id="complaint-location"
                      placeholder="Enter location"
                      className="flex-grow bg-purple-900/40 border border-purple-700/50 rounded-l-md py-2 px-3 text-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      className="bg-purple-800 hover:bg-purple-700 text-white px-3 rounded-r-md border border-purple-700"
                      title="Use current location"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="complaint-description" className="block text-sm font-medium text-purple-200 mb-1">
                    Description
                  </label>
                  <textarea 
                    id="complaint-description"
                    rows="4"
                    placeholder="Describe your complaint in detail"
                    className="w-full bg-purple-900/40 border border-purple-700/50 rounded-md py-2 px-3 text-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="anonymous" 
                    type="checkbox" 
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-purple-300 rounded"
                  />
                  <label htmlFor="anonymous" className="ml-2 block text-sm text-purple-200">
                    Submit anonymously
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
                >
                  Submit Complaint
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 