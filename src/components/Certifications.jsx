import React from 'react';

function Certifications() {
  const certifications = [
    { title: 'AWS Certified Solutions Architect – Associate', organization: 'AWS', link: 'https://www.credly.com/badges/cfb4ceb3-ecc3-4d87-b812-dce9f1a767a1/linked_in_profile' },
    { title: 'Java Intermediate', organization: 'Hacker Rank', link: 'https://www.hackerrank.com/certificates/8cd8e8632c96' },
    { title: 'Python Bootcamp', organization: 'Udemy', link: 'https://www.udemy.com/certificate/UC-fb746b7c-db5d-4087-9414-8ceb1bb9ab2b/' },
    { title: 'Intro to TensorFlow and Machine Learning', organization: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/TNVA76RTUMFT' },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <a key={index} href={cert.link} className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl hover:scale-105 transition block">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-gray-600">{cert.organization}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
