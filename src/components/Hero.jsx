import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import Profile from '../assets/profile.jpg'
import { motion } from 'framer-motion';
import './Hero.css'
import resume from '../assets/shivam_resume_dev.pdf'
import { useTheme } from './ThemeContext';
import Particles from './Particles';
import { useState, useEffect } from 'react';

const useTypingEffect = (texts, typeSpeed = 100, backSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, typeSpeed, backSpeed, pauseTime]);

  return displayText;
};

export const Hero = () => {
  const { isDarkMode } = useTheme();
  const texts = ['Full-Stack Developer', 'MERN Stack Enthusiast', 'Problem Solver', 'Tech Innovator'];
  const typedText = useTypingEffect(texts, 100, 50, 2000);
  return (
    <section className={`h-max md:h-screen ${isDarkMode ? 'bg-gradient-to-l bg-gray-950' : 'bg-gradient-to-l from-blue-50 to-indigo-100'} text-white flex flex-col justify-center items-center relative z-10 pb-10 pt-10 transition-colors duration-300 overflow-hidden`}>
      <Particles />
      {/* Stars */}
      {isDarkMode && (
        <div>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>
      )}
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between relative z-10">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`md:text-6xl text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Hi👋, I'm <span className='text-blue-400'>Shivam Singh</span></motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mb-3">
            <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {typedText}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className={`lg:w-[600px] mb-4 md:mb-0 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>MERN Stack Developer with expertise in scalable web apps, Generative AI, real-time communication, and 500+ DSA problems solved.</motion.p>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'><MdOutlineFileDownload className='w-5 h-5' /><a href={resume} target='_blank'> Download CV </a></motion.button>
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <a href="https://github.com/shivamEr" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/code-shivam" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><FaLinkedin /></a>
            <a href="https://leetcode.com/u/code-shivam" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><SiLeetcode /></a>
            <a href="https://x.com/codeXshivam" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><FaSquareXTwitter /></a>
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.4, delay:0}}
            src={Profile} alt="" className={`rounded-full border border-blue-500 md:w-[450px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] ${isDarkMode ? 'shadow-blue-400' : 'shadow-blue-300'} transition-all duration-300 hover:scale-105`} />
          <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-r from-blue-400/20 to-indigo-400/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        </div>
      </div>
    </section>
  )
}
