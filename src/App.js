import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { projectsData } from './components/ProjectsData';
import Certifications from './components/Certifications';
import Experience from './components/Experience';

function App() {
  return (
    <>

        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Projects projectsData={projectsData} />
          <Contact />
          <Certifications />
        </div>

    </>
  );
}

export default App;
