import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Express.js', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'MySQL', level: 75 },
  { name: 'C++', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
];

const Skills = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="skills" className={`py-16 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto'>
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Skills & Expertise</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <div className='flex justify-between items-center mb-2'>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>{skill.name}</h3>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}%</span>
              </div>
              <div className={`w-full bg-gray-200 rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;