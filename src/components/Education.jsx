import React from 'react'
import { useTheme } from './ThemeContext';

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
  const { isDarkMode } = useTheme();
  return (
    <section id="education" className={`py-16 px-6 ${isDarkMode ? 'bg-gradient-to-r bg-gray-950' : 'bg-gradient-to-r from-blue-50 to-indigo-100'} transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto'>
        <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Education Section  */}
          <div>
            <h3 className={`text-3xl font-semibold mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Education</h3>
            {
              education.map((edu, index) => (
                <div key={index} className={`flex items-start p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className="text-4xl mr-6 text-blue-500">{edu.icon}</div>
                  <div>
                    <h4 className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{edu.degree}</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.institution}</p>
                    <p className={`text-sm italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.year}</p>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          {/* Experience Section */}
          <div>
            <h3 className={`text-3xl font-semibold mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className={`flex items-start p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                <div>
                  <h4 className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{exp.role}</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.company}</p>
                  <p className={`text-sm italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.year}</p>
                  <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
