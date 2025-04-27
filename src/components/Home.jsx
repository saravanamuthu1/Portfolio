import React from 'react';

function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Saravanamuthu 👋</h1>
      <p className="text-xl text-gray-700 mb-6">| Software Developer | Full Stack | Java | Python | CI/CD | Agile | SCRUM | Machine Learning |</p>

      <div className="flex space-x-4">
        {/* Email Button */}
        <a 
          href="mailto:msaravanamuthu21@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Email Me
        </a>

        {/* LinkedIn Button */}
        <a 
          href="https://www.linkedin.com/in/saravanamuthu13/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-300"
        >
          LinkedIn
        </a>

        {/* GitHub Button */}
        <a 
          href="https://github.com/saravanamuthu1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Home;
