"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import EmergencyAlert from './EmergencyAlert';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [emergencyLoading, setEmergencyLoading] = useState(false);
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    router.push('/');
  };

  const handleEmergencyClick = () => {
    setShowEmergencyAlert(true);
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
        alert(`Emergency alert sent to ${data.contactsCount} contacts!`);
      } else {
        alert(data.message || 'Failed to send emergency alert');
      }
    } catch (error) {
      console.error('Error sending emergency alert:', error);
      alert('Failed to send emergency alert. Please try again.');
    } finally {
      setEmergencyLoading(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-purple-950/90 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center text-white font-bold text-xl"
              >
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-pink-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </span>
                <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  SafeGuardian
                </span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  href="/" 
                  className="hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  href="/dashboard" 
                  className="hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Dashboard
                </Link>
                {isLoggedIn && (
                  <Link
                    href="/complaint"
                    className="hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    File Complaint
                  </Link>
                )}
                <Link 
                  href="/about" 
                  className="hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="hover:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact Us
                </Link>
                {isLoggedIn ? (
                  <>
                    <button 
                      onClick={handleLogout}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
                  >
                    Login/Signup
                  </Link>
                )}
                <button
                  onClick={handleEmergencyClick}
                  className="bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-red-700 hover:to-red-900 transition-all duration-200 shadow-md hover:shadow-lg animate-pulse hover:animate-none"
                  disabled={emergencyLoading}
                >
                  {emergencyLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline-block"></div>
                  ) : (
                    'Emergency Help'
                  )}
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-purple-800 focus:outline-none"
              >
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-purple-900/95 backdrop-blur-md py-4 px-6 space-y-4">
          <Link
            href="/"
            className="block text-white hover:text-purple-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="block text-white hover:text-purple-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          {isLoggedIn && (
            <Link
              href="/complaint"
              className="block text-white hover:text-purple-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              File Complaint
            </Link>
          )}
          <Link
            href="/contact"
            className="block text-white hover:text-purple-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200 text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}

      {showEmergencyAlert && (
        <EmergencyAlert onClose={() => setShowEmergencyAlert(false)} />
      )}
    </>
  );
};

export default Navbar; 