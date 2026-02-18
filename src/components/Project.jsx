import React from 'react'
import bharatmeet from '../assets/bharatMeet.png'
import portfolio from '../assets/portfolio.png'
import inotebook from '../assets/inotebook.png'
import { useTheme } from './ThemeContext';

const projects = [
    {
        title: "BharatMeet",
        description:
            "A full-stack web application that allows users to create and join public or private real-time meetings with messaging, video chat, screen sharing, and file sharing.",
        techStack: ["ReactJS", "MongoDB", "WebSocket", "WebRTC", "Tailwind CSS"],
        link: "https://bharatmeet-zeta.vercel.app/",
        github: 'https://github.com/codeshivam-dev/BharatMeet',
        image: bharatmeet,
    },
//     {
//     title: "FoodVision",
//     description:
//         "An AI-powered mobile diet planner that generates personalized meal plans and tracks macros. It moves away from generic advice to provide goal-based nutrition guidance using an interactive AI chat interface.",
//     techStack: ["React Native", "Expo", "Gemini API", "Firebase", "Tailwind Native"],
//     link: "https://expo.dev/@yourusername/foodvision", // Replace with your actual Expo link or App Store link
//     github: "https://github.com/codeshivam-dev/FoodVision-App",
//     image: foodvision, // Ensure you import this image at the top of your file
// },
    {
        title: "Portfolio",
        description:
            "About This portfolio website is built using Tailwind CSS for sleek and responsive design, combined with Framer Motion for smooth animations and modern UI transitions.",
        techStack: ["React", "TailwindCSS", "Framer Motion", "Vite"],
        link: "https://codeshivam.vercel.app/",
        github: 'https://github.com/codeshivam-dev/codeshivam_portfolio',
        image: portfolio,
    },
    {
        title: "iNotebook",
        description:
            "A MERN-based personal notes manager with secure JWT authentication and encrypted CRUD operations for organizing notes safely and efficiently with a DarkMode features.",
        techStack: ["React", "Node.js", "MongoDB", "ShadCn UI"],
        link: "https://i-notebook-3pxp.vercel.app/",
        github: 'https://github.com/codeshivam-dev/iNotebook',
        image: inotebook,
    },
//     {
//     title: "Linkatry",
//     description:
//         "A professional 'link-in-bio' platform designed for developers to manage their digital presence. Includes a customizable profile builder, real-time link click analytics, and secure authentication to help builders track their audience growth.",
//     techStack: ["Next.js 15", "TypeScript", "Clerk Auth", "Prisma", "Tailwind CSS", "PostgreSQL", "Shadcn UI"],
//     link: "https://linkatry.com", 
//     github: "https://github.com/codeshivam-dev/Linkantry",
//     image: linkatry, 
// },

];

export const Project = () => {
    const { isDarkMode } = useTheme();
    return (
        <section id='project' className={`py-16 px-6 ${isDarkMode ? 'bg-gradient-to-r bg-gray-900' : 'bg-gradient-to-r from-gray-50 to-blue-50'} transition-colors duration-300`}>
            <div className='max-w-7xl mx-auto'>
                <h2 className={`text-5xl font-bold text-center mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Projects</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        projects.map((project, index) => (
                            <div key={index} className={`rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 ${isDarkMode ? 'bg-gray-950 shadow-gray-800' : 'bg-white shadow-gray-300'}`}>
                                <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl' />
                                <div className="p-6">
                                    <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>{project.title}</h3>
                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, idx) => (
                                            <div key={idx} className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>{tech}</div>
                                        ))}
                                    </div>
                                    <div className='flex gap-3'>
                                        <a href={project.link} target='_blank' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Projects</a>
                                        <a href={project.github} className={`flex gap-2 items-center px-6 py-2 rounded-lg shadow-md transition-colors ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-900' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}>GitHub</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
