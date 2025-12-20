import profile from '../assets/office.png'
import { FaChevronRight } from 'react-icons/fa'
import { useTheme } from './ThemeContext';

export const About = () => {
  const { isDarkMode } = useTheme();
  return (
    <div id='about' className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} z-50 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className={`text-4xl md:text-5xl font-bold mb-11 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
          {/* img section */}
          <div className={`relative border hidden md:block ${isDarkMode ? 'border-blue-600 bg-blue-500' : 'border-blue-400 bg-blue-400'} p-1 rounded-full shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] ${isDarkMode ? 'shadow-blue-500' : 'shadow-blue-400'} transition-all duration-300 hover:scale-105`}>
            <img src={profile} alt="" className={`w-[300px] md:w-[1500px] rounded-full ${isDarkMode ? 'border-blue-600' : 'border-blue-400'} border shadow-blue-500`} />
          </div>
          {/* paragraph section */}
          <div className={`p-5 md:p-10 ${isDarkMode ? 'bg-gray-950' : 'bg-white'} rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] ${isDarkMode ? 'shadow-blue-500' : 'shadow-blue-400'} transition-all duration-300`}>
            <p className='text-lg leading-7 mb-6'>
              Hi! I'm Shivam Kumar, a Full-Stack Developer with a strong focus on the MERN stack. I enjoy building clean, scalable applications and have sharpened my problem-solving skills by solving 500+ DSA problems on platforms like LeetCode, GFG, and HackerRank.
            </p>
            <p className='text-lg leading-7 mb-6'>
              I've worked on projects such as <i>BharatMeet</i>, a real-time meeting platform, and <i>iNotebook</i>, a secure notes manager, which gave me hands-on experience in creating responsive frontends and reliable backends. During my internships at Coding Blocks and Solitaire Infosys, I contributed to developing web applications, APIs, and user-friendly interfaces while collaborating with teams.
            </p>
            <p className='text-lg leading-7 mb-6'>
              Currently pursuing a B.Tech in Computer Science, I'm always looking to improve my skills and explore new tools to deliver impactful web solutions.
            </p>

            <div className='mt-5'>
              <h1 className={`font-bold text-2xl mb-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>My Skills</h1>
              <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>React.js</p>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>Next.js</p>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>Node.js</p>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>Express.js</p>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>MongoDB</p>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>MySQL</p>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>JavaScript</p>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>C++</p>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>Python</p>
                <p className={`cursor-pointer px-2 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-blue-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}>Tailwind CSS</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Bootstrap</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>REST APIs</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Git & GitHub</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>JWT Auth</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>WebSockets</p>

              </div>
              <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1 hover:bg-blue-600 transition-colors'>Contact<FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
