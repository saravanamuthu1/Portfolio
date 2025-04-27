// src/components/Certifications.js
import React from 'react';

const certificationsData = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    organization: 'Amazon Web Services (AWS)',
    url: 'https://www.credly.com/badges/cfb4ceb3-ecc3-4d87-b812-dce9f1a767a1/linked_in_profile', // Example URL for the certificate
  },
  {
    title: 'Java Intermediate',
    organization: 'Hacker Rank',
    url: 'https://www.hackerrank.com/certificates/8cd8e8632c96', // Example URL for the certificate
  },
  {
    title: 'Python bootcamp',
    organization: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-fb746b7c-db5d-4087-9414-8ceb1bb9ab2b/', // Example URL for the certificate
  },
  {
    title: 'Introduction to Tensorflow and Machine learning',
    organization: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/certificate/TNVA76RTUMFT', // Example URL for the certificate
  },
  // Add more certifications as needed
];

function Certifications() {
  return (
    <section id="certifications" className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-4">Certifications</h2>
      <ul className="space-y-4">
        {certificationsData.map((cert, index) => (
          <li key={index} className="bg-white dark:bg-gray-800 p-4 shadow rounded">
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">Issued by: {cert.organization}</p>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Certificate
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
