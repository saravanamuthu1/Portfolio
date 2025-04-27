import React from 'react';

const experienceData = [
  {
    title: 'Software Engineer',
    company: 'Linkwell Solution Inc',
    location: 'Richardson, TX (Remote)',
    dates: 'Sep 2023 - Present',
    description: 'Designed and developed full-stack features for a web application using React.js, Python Django, Flask, Java Spring Boot, and PostgreSQL. Engineered and optimized RESTful APIs to support complex data interactions and integrations with third-party risk engines. Integrated Snowflake for scalable analytics, improving risk model execution and data visibility. Applied security-first coding principles across the stack, including token-based auth and access controls. Set up CI/CD pipelines using GitLab and Docker; automated deployments to AWS cloud infrastructure. Collaborated with QA, DevOps, and business teams in Agile sprints to ship new features on time. Monitored application health with Prometheus, Grafana, and ELK stack, proactively resolving 100+ issues.',
  },
  {
    title: 'Vice President of Finance (Treasurer)',
    company: 'Graduate Student Association',
    location: 'Saint Louis University, St. Louis, MO',
    dates: 'Aug 2024 - Present',
    description: 'Managing finances for events and budgeting for social media content. Created social media campaigns leading to millions of views on Instagram.',
  },
  // Add more experiences as needed
];

function Experience() {
  return (
    <section id="experience" className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">Experience</h2>
      <ul className="space-y-6">
        {experienceData.map((exp, index) => (
          <li key={index} className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company} - {exp.location}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.dates}</p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
