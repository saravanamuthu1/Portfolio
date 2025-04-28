import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-300">Home</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-300">About Me</Link>
          <Link to="/experience" className="hover:text-blue-500 dark:hover:text-blue-300">Experience</Link>
          <Link to="/projects" className="hover:text-blue-500 dark:hover:text-blue-300">Projects</Link>
          <Link to="/certifications" className="hover:text-blue-500 dark:hover:text-blue-300">Certifications</Link>
          <button onClick={() => setDarkMode(!darkMode)} className="flex items-center bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            {darkMode ? (
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66l-.7.7m-14.14 0l-.7-.7m16.24 6.36l-.7-.7m-14.14 0l-.7.7M21 12h-1M4 12H3m16.66-8.66l-.7.7M5.04 18.96l-.7-.7" />
                </svg>
                <span>Light</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293a8 8 0 11-11.586-11.586 8.001 8.001 0 0011.586 11.586z" />
                </svg>
                <span>Dark</span>
              </span>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 dark:hover:text-blue-300">About Me</Link>
          <Link to="/experience" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 dark:hover:text-blue-300">Experience</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 dark:hover:text-blue-300">Projects</Link>
          <Link to="/certifications" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 dark:hover:text-blue-300">Certifications</Link>
          <button onClick={() => { setDarkMode(!darkMode); setIsMenuOpen(false); }} className="flex items-center bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
