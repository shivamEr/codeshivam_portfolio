import React from 'react'
import { useTheme } from './ThemeContext';

export const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} transition-colors duration-300`}>
        <p className={`py-5 font-normal text-center ${isDarkMode ? 'text-white' : 'text-gray-300'}`}>&copy; {new Date().getFullYear()} Shivam Singh. All rights reserved.</p>
    </div>

  )
}
