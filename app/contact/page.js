"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [showQueries, setShowQueries] = useState(false);
  const [queries, setQueries] = useState([]);
  const [queriesLoading, setQueriesLoading] = useState(false);

  useEffect(() => {
    if (showQueries) {
      fetchQueries();
    }
  }, [showQueries]);

  const fetchQueries = async () => {
    setQueriesLoading(true);
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
      if (response.ok) {
        setQueries(data);
      } else {
        setError('Failed to fetch previous queries');
      }
    } catch (error) {
      console.error('Error fetching queries:', error);
      setError('An error occurred while fetching queries');
    } finally {
      setQueriesLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        if (showQueries) {
          fetchQueries();
        }
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setError('An error occurred while sending the message');
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: "general", label: "General Inquiries" },
    { id: "support", label: "Technical Support" },
    { id: "partner", label: "Partnership Opportunities" },
    { id: "report", label: "Report an Issue" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-dark-500 to-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
            Have questions, suggestions, or need assistance? We&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-fade-in-left">
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Address</h3>
                    <p className="mt-1 text-purple-200">123 Safety Street, Secure City, SC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="mt-1 text-purple-200">+1 (800) XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="mt-1 text-purple-200">info@safeguardian.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Hours</h3>
                    <p className="mt-1 text-purple-200">
                      Monday-Friday: 9am to 5pm<br />
                      Support: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-900/40 to-dark-500/60 backdrop-blur-sm rounded-lg border border-red-800/40 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">Emergency Contact</h2>
              <p className="text-red-200 mb-4">For immediate safety concerns or emergency situations, please call our 24/7 emergency helpline:</p>
              <div className="bg-red-900/30 rounded-lg p-4 flex items-center justify-between">
                <span className="text-white font-bold">1800-XXX-XXXX</span>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Call Now
                </button>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-800 hover:bg-purple-700 text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.75 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-800 hover:bg-purple-700 text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-800 hover:bg-purple-700 text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-800 hover:bg-purple-700 text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
              
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              
              {/* Category Tabs */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === category.id
                          ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                          : 'bg-purple-900/30 text-purple-200 hover:bg-purple-800/30'
                      }`}
                      onClick={() => setActiveTab(category.id)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
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
                <button
                  onClick={() => setShowQueries(!showQueries)}
                  className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {showQueries ? 'Hide Previous Queries' : 'View Previous Queries'}
                </button>
              </div>

              {showQueries && (
                <div className="mb-8 bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
                  <h2 className="text-xl font-semibold text-white mb-4">Previous Queries</h2>
                  {queriesLoading ? (
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                    </div>
                  ) : queries.length === 0 ? (
                    <p className="text-gray-400 text-center">No previous queries found</p>
                  ) : (
                    <div className="space-y-4">
                      {queries.map((query) => (
                        <div key={query.id} className="bg-purple-900/30 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-white">{query.subject}</h3>
                              <p className="text-sm text-purple-300">{query.name} ({query.email})</p>
                            </div>
                            <span className="text-xs text-gray-400">
                              {new Date(query.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-300">{query.message}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-purple-900/30 border border-purple-700 rounded-md text-white placeholder-purple-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-purple-900/30 border border-purple-700 rounded-md text-white placeholder-purple-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-purple-200 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-purple-900/30 border border-purple-700 rounded-md text-white placeholder-purple-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-purple-900/30 border border-purple-700 rounded-md text-white placeholder-purple-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-md font-medium shadow-lg transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white inline-block"></div>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 border-t border-purple-800/30 mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How does the SafeGuardian platform work?",
                answer: "SafeGuardian uses a combination of GPS tracking, emergency alerting systems, and community support networks to provide comprehensive safety solutions for women. Our platform allows you to share your location with trusted contacts, send emergency alerts, and access safety resources."
              },
              {
                question: "Is my data secure on the platform?",
                answer: "Yes, we take data security very seriously. All personal information and location data are encrypted and stored securely. We never share your information with third parties without your explicit consent."
              },
              {
                question: "Can I use SafeGuardian without internet connection?",
                answer: "Some features of SafeGuardian require an internet connection, but we've designed our emergency alert system to work with minimal connectivity. In case of emergency, the app can send SMS alerts even with limited signal."
              },
              {
                question: "Is SafeGuardian available internationally?",
                answer: "Currently, SafeGuardian is available in select countries. We're working on expanding our coverage globally. Check our website for updates on availability in your region."
              },
              {
                question: "How much does SafeGuardian cost?",
                answer: "SafeGuardian offers both free and premium plans. The basic safety features are free for all users, while advanced features like 24/7 monitoring and priority emergency response are available with our premium subscription plans."
              },
              {
                question: "Can I recommend SafeGuardian features or improvements?",
                answer: "Absolutely! We value user feedback and continuously improve our platform based on suggestions. You can send feature recommendations through the contact form or directly through the app's feedback section."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: `${i * 0.1 + 0.4}s` }}>
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-purple-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="py-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-800/40 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Find Us</h2>
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7443.292394330512!2d75.69941861610404!3d31.254822196918187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e1!3m2!1sen!2sin!4v1744224377023!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 