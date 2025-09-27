import React from 'react'
import profile from '../assets/office.png'
import { FaChevronRight } from 'react-icons/fa'

export const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
          {/* img section */}
          <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
            <img src={profile} alt="" className='w-[300px] md:w-[1500px] rounded-full border-blue-600 border shadow-blue-500 ' />
          </div>
          {/* paragraph section */}
          <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
            <p className='text-lg leading-7 mb-6'>
              Hi! I'm Shivam Kumar, a Full-Stack Developer with a strong focus on the MERN stack. I enjoy building clean, scalable applications and have sharpened my problem-solving skills by solving 500+ DSA problems on platforms like LeetCode, GFG, and HackerRank.
            </p>
            <p className='text-lg leading-7 mb-6'>
              I’ve worked on projects such as <i>BharatMeet</i>, a real-time meeting platform, and <i>iNotebook</i>, a secure notes manager, which gave me hands-on experience in creating responsive frontends and reliable backends. During my internships at Coding Blocks and Solitaire Infosys, I contributed to developing web applications, APIs, and user-friendly interfaces while collaborating with teams.
            </p>
            <p className='text-lg leading-7 mb-6'>
              Currently pursuing a B.Tech in Computer Science, I’m always looking to improve my skills and explore new tools to deliver impactful web solutions.
            </p>

            <div className='mt-5'>
              <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
              <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>React.js</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Next.js</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Node.js</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Express.js</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>MongoDB</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>MySQL</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>JavaScript</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>C++</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Python</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Tailwind CSS</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Bootstrap</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>REST APIs</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Git & GitHub</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>JWT Auth</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>WebSockets</p>

              </div>
              <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact<FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
