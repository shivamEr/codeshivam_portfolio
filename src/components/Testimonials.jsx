import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const { isDarkMode } = useTheme();

  const testimonials = [
    {
      name: 'Rahul',
      role: 'Full Developer at TechCorp',
      content: 'Shivam is an exceptional developer with a keen eye for detail and innovative solutions. His work on our project was outstanding.',
      avatar: 'https://via.placeholder.com/60'
    },
    {
      name: 'Sonoo Kumar',
      role: 'Project Manager at InnovateLabs',
      content: 'Working with Shivam was a pleasure. He delivered high-quality code on time and was always willing to go the extra mile.',
      avatar: 'https://via.placeholder.com/60'
    },
    {
      name: 'Harish Verma',
      role: 'Founder of Just1RupeeJobs',
      content: 'Shivam\'s expertise in MERN stack helped us scale our application efficiently. Highly recommended!',
      avatar: 'https://via.placeholder.com/60'
    }
  ];

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
        >
          What People Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} relative`}
            >
              <FaQuoteLeft className={`text-3xl ${isDarkMode ? 'text-blue-400' : 'text-blue-500'} mb-4`} />
              <p className={`mb-4 italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.content}</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{testimonial.name}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;