import React, { useState } from 'react'
import { FaChevronRight, FaSun, FaMoon } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { ResponsiveMenu } from './ResponsiveMenu';
import { useTheme } from './ThemeContext';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const toggleMenu = ()=>{
    setShowMenu(!showMenu);
  }
  return (
    <div className={`${isDarkMode ? 'bg-gray-950' : 'bg-white'} z-50 w-full py-1 fixed transition-colors duration-300`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0">
        {/* Logo Section */}
        <div>
          <a href="/"><p className={`md:text-3xl text-2xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} my-5`}>Code<b className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Shivam</b></p></a>
        </div>
        {/* Menu section */}
        <nav className='hidden md:block'>
          <ul className={`flex gap-7 text-lg items-center font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <a href="/#"><li className='cursor-pointer hover:text-blue-400 transition-colors'>Home</li></a>
            <a href="#about"><li className='cursor-pointer hover:text-blue-400 transition-colors'>About</li></a>
            <a href="#skills"><li className='cursor-pointer hover:text-blue-400 transition-colors'>Skills</li></a>
            <a href="#education"><li className='cursor-pointer hover:text-blue-400 transition-colors'>Education & Experience</li></a>
            <a href="#project"><li className='cursor-pointer hover:text-blue-400 transition-colors'>Projects</li></a>
            <a href="#contact"><button className='px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2 hover:bg-blue-600 transition-colors'>Contact<FaChevronRight/></button></a>
            <button onClick={toggleTheme} className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-200'} transition-colors`}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </ul>
        </nav>
        <div className={`md:hidden text-4xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <button onClick={toggleTheme} className={`mr-4 p-2 rounded-full ${isDarkMode ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-200'} transition-colors`}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          {
            showMenu ? <HiMenuAlt3 onClick={toggleMenu} /> : <HiMenuAlt1 onClick={toggleMenu} />
          }
        </div>
      </div>
      <ResponsiveMenu  showMenu={showMenu} setShowMenu = {setShowMenu} />
    </div>
  )
}
