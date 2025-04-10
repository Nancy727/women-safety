"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    location: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPreviousComplaints, setShowPreviousComplaints] = useState(false);
  const [previousComplaints, setPreviousComplaints] = useState([]);
  const [complaintsLoading, setComplaintsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        throw new Error('User not authenticated');
      }

      const response = await fetch('/api/complaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          complaintType: formData.type,
          description: formData.description,
          location: formData.location
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Complaint registered successfully!');
        setFormData({
          type: '',
          description: '',
          location: ''
        });
      } else {
        setError(data.message || 'Failed to register complaint');
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      setError(error.message || 'An error occurred while submitting the complaint');
    } finally {
      setLoading(false);
    }
  };

  const fetchPreviousComplaints = async () => {
    try {
      setComplaintsLoading(true);
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        throw new Error('Please login to view complaints');
      }

      const response = await fetch(`/api/complaint?userId=${user.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch complaints');
      }

      const data = await response.json();
      setPreviousComplaints(data.complaints);
    } catch (err) {
      setError(err.message);
    } finally {
      setComplaintsLoading(false);
    }
  };

  const togglePreviousComplaints = () => {
    if (!showPreviousComplaints) {
      fetchPreviousComplaints();
    }
    setShowPreviousComplaints(!showPreviousComplaints);
  };

  if (!isAuthenticated) {
    return null; // Don't render anything while checking authentication
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">File a Complaint</h1>
          <p className="text-purple-300">Report any incident or concern you have experienced</p>
        </div>

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

        <div className="flex justify-between items-center mb-6">
          <Link
            href="/dashboard"
            className="text-purple-300 hover:text-purple-200 text-sm"
          >
            Back to Dashboard
          </Link>
          <button
            onClick={togglePreviousComplaints}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            {showPreviousComplaints ? 'Hide Previous Complaints' : 'View Previous Complaints'}
          </button>
        </div>

        {showPreviousComplaints && (
          <div className="mb-6 bg-purple-900/20 rounded-lg p-4 border border-purple-800/40">
            <h2 className="text-xl font-semibold text-white mb-4">Previous Complaints</h2>
            {complaintsLoading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
                <p className="text-white mt-2">Loading complaints...</p>
              </div>
            ) : previousComplaints.length === 0 ? (
              <p className="text-purple-200 text-center py-4">No previous complaints found</p>
            ) : (
              <div className="space-y-4">
                {previousComplaints.map((complaint) => (
                  <div key={complaint.id} className="bg-purple-800/20 rounded-lg p-4 border border-purple-700/40">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-medium">{complaint.complaint_type}</h3>
                        <p className="text-purple-200 text-sm mt-1">{complaint.description}</p>
                        {complaint.location && (
                          <p className="text-purple-300 text-xs mt-1">Location: {complaint.location}</p>
                        )}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        complaint.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-300' :
                        complaint.status === 'Resolved' ? 'bg-green-500/20 text-green-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {complaint.status}
                      </span>
                    </div>
                    <p className="text-purple-400 text-xs mt-2">
                      Submitted on: {new Date(complaint.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-white mb-1">
              Complaint Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-purple-900/50 border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="" className="bg-purple-900 text-white">Select Complaint Type</option>
              <option value="harassment" className="bg-purple-900 text-white">Harassment</option>
              <option value="stalking" className="bg-purple-900 text-white">Stalking</option>
              <option value="abuse" className="bg-purple-900 text-white">Abuse</option>
              <option value="other" className="bg-purple-900 text-white">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-white mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-purple-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/5 text-white"
              placeholder="Describe the incident in detail..."
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-white mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-purple-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/5 text-white"
              placeholder="Where did the incident occur?"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-purple-900 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white inline-block"></div>
              ) : (
                'Submit Complaint'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 