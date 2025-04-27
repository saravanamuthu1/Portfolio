import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
