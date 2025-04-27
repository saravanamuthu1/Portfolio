import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-semibold">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/about" className="hover:text-gray-400">About Me</Link>
          <Link to="/experience" className="hover:text-gray-400">Experience</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/certifications" className="hover:text-gray-400">Certifications</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
