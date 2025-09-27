import React from 'react'

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Geeta University, Panipat, Haryana",
    year: "2022 - 2026",
    description: "Currently pursuing B.Tech in Computer Science with a CGPA of 8.0/10.",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Inter College Dindyalpur",
    year: "2019 - 2021",
    description: "Completed Higher Secondary education with a focus on Science and Mathematics.",
    icon: "🎓",
  },
  {
    degree: "Secondary (10th)",
    institution: "High School Dindyalpur",
    year: "2018 - 2019",
    description: "Completed Secondary education, building a strong foundation in academics.",
    icon: "🎓",
  },
];

const experience = [
  {
    role: "Full-Stack Developer Intern (MERN Stack)",
    company: "Coding Blocks, Geeta University",
    year: "Jun 2025 - August 2025",
    description: "Contributed to web application development using MongoDB, Express.js, React, and Node.js. Developed RESTful APIs, implemented authentication, and built responsive UI components.",
    icon: "💻",
  },
  {
    role: "DSA Trainee",
    company: "Coding Blocks, Geeta University",
    year: "Jun 2024 - Aug 2024",
    description: "Solved 500+ algorithmic problems across LeetCode, GFG, and HackerRank. Built strong skills in dynamic programming, graph algorithms, and writing optimized code.",
    icon: "📘",
  },
  {
    role: "Web Developer Intern",
    company: "Solitaire Infosys Inc, Mohali, Punjab",
    year: "Jun 2023 - Aug 2023",
    description: "Developed and maintained responsive UIs using HTML, CSS, and JavaScript. Improved performance and user engagement by reducing load time by 15%.",
    icon: "💼",
  },
];


export const Education = () => {
  return (
    <section id="education" className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Education Section  */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
            {
              education.map((edu, index) => (
                <div className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6">
                  <div className="text-4xl mr-6 text-blue-500">{edu.icon}</div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                    <p className='text-gray-300'>{edu.institution}</p>
                    <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                    <p className='text-gray-300 mt-2'>{edu.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          {/* Experience Section */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                <div>
                  <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                  <p className='text-gray-300'>{exp.company}</p>
                  <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                  <p className='text-gray-300 mt-2'>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
