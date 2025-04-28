import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Linkwell Solution Inc',
      duration: 'Sep 2023 - Present',
      description: 'Built full-stack web features with React.js, Django, Flask, Java Spring Boot, and PostgreSQL. Integrated Snowflake analytics, deployed using GitLab, Docker, AWS, and monitored systems via Prometheus and Grafana.'
    },
    {
      role: 'Vice President of Finance (Treasurer)',
      company: 'Graduate Student Association, SLU',
      duration: 'Aug 2024 - Present',
      description: 'Managed finances and budgets for major university events, created campaigns reaching millions on Instagram.'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Experience</h2>
        <div className="space-y-8">
          {experiences.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold">{item.role}</h3>
              <p className="text-blue-600">{item.company} • {item.duration}</p>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
