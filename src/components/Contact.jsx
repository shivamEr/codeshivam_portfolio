import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from "react-icons/si";
import { useTheme } from './ThemeContext';

export const Contact = () => {
    const { isDarkMode } = useTheme();
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://script.google.com/macros/s/AKfycbxjGSKZ8uE4zOK4_y0etrzghvJXiew2jXpLMTSJ0w3uNIx6wtkU24Ast4MSrEQ7pcPy/exec"
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: (`Name=${e.target.name.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`)
        }).then(res => res.text()).then(data => {
            e.target.name.value = ""
            e.target.email.value = ""
            e.target.message.value = ""
            alert("Thank you, will contact you soon!")
        }).catch(error => console.log(error))
    }

    return (
        <section id="contact" className={`py-16 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'} transition-colors duration-300`}>
            <div className='mx-auto'>
                <h2 className={`text-center text-5xl font-bold mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Contact Me</h2>
                <div className='grid lg:grid-cols-2 gap-10'>
                    {/* contact info */}
                    <div className='flex flex-col justify-center space-y-8'>
                        <div>
                            <h1 className={`text-4xl text-left font-bold lg:text-6xl ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Let's Talk</h1>
                            <p className={`my-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Have a project in mind, want to collaborate, or just want to say hi? I'm always open to meaningful conversations. <br />Let's build something amazing together!</p>
                            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Email</h3>
                            <p className={`mt-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-500'}`}>
                                <a href="mailto:shivamksbau504@gmail.com" className='text-blue-500 hover:underline'>codeshivam.dev@gmail.com</a>
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Phone</h3>
                            <p className={`mt-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-500'}`}>
                                <a href="tel:+91 9958870589" className='text-blue-500 hover:underline'>+91 9958870589</a>
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Follow Me</h3>
                            <div className='flex gap-3 mt-5 text-2xl transition-all'>
                                <a href="https://github.com/codeshivam-dev" className='text-blue-400 hover:text-blue-600 transition-colors'><FaGithub /></a>
                                <a href="https://www.linkedin.com/in/code-shivam" className='text-blue-400 hover:text-blue-600 transition-colors'><FaLinkedin /></a>
                                <a href="https://leetcode.com/u/code-shivam" className='text-blue-400 hover:text-blue-600 transition-colors'><SiLeetcode /></a>
                                <a href="https://x.com/codeXshivam" className='text-blue-400 hover:text-blue-600 transition-colors'><FaSquareXTwitter /></a>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className={`rounded-lg p-10 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] ${isDarkMode ? 'bg-gray-900 shadow-blue-500' : 'bg-white shadow-blue-400'}`}>
                        <h3 className={`font-semibold text-3xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Get in Touch</h3>
                        <form action="" onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                                <input type="name" id='name' placeholder='Your Name' name='name' className={`mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors ${isDarkMode ? 'bg-gray-950 text-gray-300 border-gray-300' : 'bg-white text-gray-900 border-gray-400'}`} />
                            </div>
                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                                <input type="email" id='email' placeholder='Your Email' name='email' className={`mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors ${isDarkMode ? 'bg-gray-950 text-gray-300 border-gray-300' : 'bg-white text-gray-900 border-gray-400'}`} />
                            </div>
                            <div>
                                <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                                <textarea name="message" id="message" rows={5} placeholder='Your Message' className={`mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors ${isDarkMode ? 'bg-gray-950 text-gray-300 border-gray-300' : 'bg-white text-gray-900 border-gray-400'}`}></textarea>
                            </div>
                            <button type='submit' className='bg-blue-500 w-full text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>Send Me</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
