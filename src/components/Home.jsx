import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-blue-300">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">Hi, I'm Saravanamuthu 👋</h1>
      <TypeAnimation
        sequence={[
          'Software Developer',
          2000,
          'Full Stack Engineer',
          2000,
          'Machine Learning Enthusiast',
          2000,
          'AWS Cloud Enthusiast',
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl sm:text-2xl text-gray-600 mb-10"
      />
      <div className="flex space-x-6">
        <a href="mailto:msaravanamuthu21@gmail.com" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Email
        </a>
        <a href="https://www.linkedin.com/in/saravanamuthu13/" className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          LinkedIn
        </a>
        <a href="https://github.com/saravanamuthu1" className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Home;
