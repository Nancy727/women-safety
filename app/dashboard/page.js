"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [safetyData, setSafetyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statesLoading, setStatesLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [isSharingLocation, setIsSharingLocation] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [contactsLoading, setContactsLoading] = useState(true);
  const [newContact, setNewContact] = useState({ name: '', phoneNumber: '' });
  const [showAddContact, setShowAddContact] = useState(false);
  const [emergencyMessage, setEmergencyMessage] = useState('');
  const [emergencyLoading, setEmergencyLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/login');
      return;
    }
    
    try {
      const userData = JSON.parse(storedUser);
      setUser(userData);

      // Fetch available states
      const fetchStates = async () => {
        try {
          setStatesLoading(true);
          const response = await fetch('/api/safety');
          if (!response.ok) {
            throw new Error('Failed to fetch states');
          }
          const data = await response.json();
          setStates(data.states || []);
        } catch (err) {
          console.error('Error fetching states:', err);
          setError('Failed to load states. Please try again later.');
        } finally {
          setStatesLoading(false);
        }
      };

      fetchStates();

      // Fetch emergency contacts
      const fetchContacts = async () => {
        setContactsLoading(true);
        try {
          const response = await fetch(`/api/contacts?userId=${userData.id}`);
          const data = await response.json();
          if (response.ok) {
            setContacts(data.contacts);
          } else {
            setError(data.message || 'Failed to fetch contacts');
          }
        } catch (error) {
          console.error('Error fetching contacts:', error);
          setError('Failed to fetch contacts. Please try again.');
        } finally {
          setContactsLoading(false);
        }
      };

      fetchContacts();
    } catch (error) {
      console.error('Error parsing user data:', error);
      router.push('/login');
    }
  }, [router]);

  const handleStateChange = async (state) => {
    setSelectedState(state);
    setLoading(true);
    try {
      console.log('Fetching safety data for state:', state);
      const response = await fetch('/api/safety', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Received safety data:', data);
      setSafetyData(data);
    } catch (error) {
      console.error('Error fetching safety data:', error);
      setError('Failed to fetch safety data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          name: newContact.name,
          phoneNumber: newContact.phoneNumber
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      setContacts([data.contact, ...contacts]);
      setNewContact({ name: '', phoneNumber: '' });
      setShowAddContact(false);
      setSuccess('Contact added successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteContact = async (contactId) => {
    try {
      const response = await fetch(`/api/contacts?id=${contactId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      setContacts(contacts.filter(contact => contact.id !== contactId));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmergencySOS = async () => {
    setEmergencyLoading(true);
    try {
      const response = await fetch('/api/emergency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(`Emergency alert sent to ${data.contactsCount} contacts!`);
      } else {
        setError(data.message || 'Failed to send emergency alert');
      }
    } catch (error) {
      console.error('Error sending emergency alert:', error);
      setError('Failed to send emergency alert. Please try again.');
    } finally {
      setEmergencyLoading(false);
    }
  };

  const handleCallContact = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 animate-fade-in-down">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome back, {user.first_name}!
          </h1>
          <p className="text-purple-200">Your SafeGuardian Dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Dashboard Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Safety Analysis Card */}
            <div className="bg-gradient-to-r from-purple-900/30 to-dark-500/60 backdrop-blur-sm rounded-xl border border-purple-800/40 p-6 shadow-lg animate-fade-in-up">
              <h2 className="text-xl font-semibold text-white mb-4">Area of Safety Analysis</h2>
              <div className="mb-4">
                <label htmlFor="state" className="block text-sm font-medium text-white mb-2">
                  Select State
                </label>
                <select
                  id="state"
                  value={selectedState}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={statesLoading}
                >
                  <option value="">Select a state</option>
                  {statesLoading ? (
                    <option disabled>Loading states...</option>
                  ) : error ? (
                    <option disabled>Error loading states</option>
                  ) : (
                    states.map((state) => (
                      <option key={state} value={state} className="bg-purple-900 text-white">
                        {state}
                      </option>
                    ))
                  )}
                </select>
                {error && (
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
              </div>

              {loading && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
                  <p className="text-white mt-4">Analyzing safety data...</p>
                </div>
              )}

              {safetyData && !loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/40">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-200">Current Analysis</span>
                      <span className={`${
                        safetyData.safety_level.includes('Safe') ? 'bg-green-500/20 text-green-300' :
                        safetyData.safety_level.includes('Moderate') ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      } text-xs px-2 py-1 rounded`}>
                        {safetyData.safety_level}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className={`w-24 h-24 rounded-full ${
                        safetyData.safety_level.includes('Safe') ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                        safetyData.safety_level.includes('Moderate') ? 'bg-gradient-to-r from-yellow-500 to-amber-500' :
                        'bg-gradient-to-r from-red-500 to-pink-500'
                      } flex items-center justify-center shadow-lg mb-4`}>
                        <span className="text-white text-3xl font-bold">
                          {Math.round(safetyData.prediction)}
                        </span>
                      </div>
                      <div className="text-center">
                        <h3 className="text-white font-medium text-lg">{selectedState}</h3>
                        <p className="text-xs text-purple-300">
                          Predicted crimes for next year
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/40">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-200">Crime Distribution</span>
                      <span className="text-purple-300 text-xs">Latest Year</span>
                    </div>
                    <div className="space-y-2">
                      {Object.entries(safetyData.crime_distribution).map(([crime, count]) => (
                        <div key={crime} className="flex justify-between items-center">
                          <span className="text-white text-sm">{crime}</span>
                          <span className="text-purple-300 text-sm">{Math.round(count)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-4">
                <button 
                  className="text-pink-400 text-sm flex items-center hover:text-pink-300 transition-colors"
                  onClick={() => {
                    if (safetyData) {
                      // Open detailed analysis in a new tab
                      window.open(`/analysis/${selectedState}`, '_blank');
                    }
                  }}
                >
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
                  {contactsLoading ? (
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
                      <p className="text-white mt-2">Loading contacts...</p>
                    </div>
                  ) : contacts.length === 0 ? (
                    <p className="text-purple-200 text-center py-4">No contacts added yet</p>
                  ) : (
                    <ul className="space-y-3">
                      {contacts.map((contact) => (
                        <li key={contact.id} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
                              {contact.name[0]}
                            </div>
                            <span className="ml-2 text-purple-100">{contact.name}</span>
                          </div>
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => handleCallContact(contact.phone_number)}
                              className="p-1 text-purple-300 hover:text-pink-400 transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                              </svg>
                            </button>
                            <button 
                              onClick={() => handleDeleteContact(contact.id)}
                              className="p-1 text-red-400 hover:text-red-300 transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {contacts.length < 5 && (
                    <button 
                      onClick={() => setShowAddContact(true)}
                      className="mt-3 text-pink-400 text-sm flex items-center hover:text-pink-300 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      <span>Add Contact</span>
                    </button>
                  )}
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
              <button
                onClick={handleEmergencySOS}
                className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-lg font-medium hover:from-red-700 hover:to-red-900 transition-all duration-200 shadow-md hover:shadow-lg animate-pulse hover:animate-none"
                disabled={emergencyLoading}
              >
                {emergencyLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white inline-block"></div>
                ) : (
                  <>
                    <svg
                      className="w-6 h-6 mr-2 inline-block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    Emergency SOS
                  </>
                )}
              </button>
              {emergencyMessage && (
                <p className="mt-3 text-green-300 text-sm">{emergencyMessage}</p>
              )}
              <p className="mt-3 text-red-200 text-sm">Press in case of emergency to alert all contacts</p>
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
          </div>
        </div>
      </div>

      {/* Add Contact Modal */}
      {showAddContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-purple-950 via-dark-400 to-dark-500 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-white mb-4">Add Emergency Contact</h3>
            <form onSubmit={handleAddContact} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-white mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={newContact.phoneNumber}
                  onChange={(e) => setNewContact({ ...newContact, phoneNumber: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddContact(false)}
                  className="px-4 py-2 text-white hover:text-purple-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-md hover:from-pink-700 hover:to-purple-700 transition-all duration-200"
                >
                  Add Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-500/20 border border-green-500 text-green-200 px-4 py-3 rounded-lg mb-6">
          {success}
        </div>
      )}
    </div>
  );
} 