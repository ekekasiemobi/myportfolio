import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='container mx-auto' id='about'>
        <div className='w-[90%] mx-auto pt-10 md:pt-25'>

            <div className=' justify-between items-center'>
                <h1 className='font-extrabold text-[#00ADB5] text-3xl md:text-5xl'>About Me</h1>
                <div className='flex flex-col gap-7 pt-8 md:pt-20'>
                    

                    <p className='md:text-justify jakarta'>
                        I’m a frontend software developer who enjoys building fast, responsive, and accessible web applications. I focus on creating clean user interfaces and seamless user experiences using modern technologies such as React, Next.js, TypeScript, and Tailwind CSS.
                        </p>

                        <p className='md:text-justify jakarta'>
                        My technical foundation includes JavaScript, TypeScript, React, Next.js, and modern frontend development practices. I enjoy solving real-world problems, writing maintainable code, and continuously learning new tools and technologies to become a better developer.
                        </p>

                        <p className='md:text-justify jakarta'>
                        Outside of coding, you'll usually find me solving puzzles, watching movies, reading, or exploring a new programming language, framework, or technology. I enjoy learning and challenging myself, both in software development and beyond.
                        </p>

                </div>

            
            </div>

            <div className='flex flex-col md:flex-row justify-between gap-15 pt-20'>
                <div className='md:w-[25%]'>
                    <div className='flex gap-2 mb-5'>
                        
                        <div className='border-l-4 border-[#00ADB5]'></div>
                        <h2 className='font-extrabold text-2xl'>Experience</h2>
                    </div>
                    
                    <div className='flex flex-col gap-5 pt-2 '>
                        <div>
                            <h1 className='font-extrabold'>SBTS Groups</h1>
                            <p className='text-[#7D8490] jakarta'>Frontend developer</p>
                        </div>
                    
                        <div>
                            <h1 className='font-extrabold'>Gateway Technology</h1>
                            <p className='text-[#7D8490] jakarta'>Intern</p>
                        </div>

                        <div>
                            <h1 className='font-extrabold'>Accelgora Academy</h1>
                            <p className='text-[#7D8490] jakarta'>Frontend Tutor</p>
                        </div>

                        <div>
                            <h1 className='font-extrabold'>Legacy Tech</h1>
                            <p className='text-[#7D8490] jakarta'>Frontend developer</p>
                        </div>
                    </div>
                </div>

                <div className='md:w-[25%]'>
                    <div className='flex gap-2 mb-5'>
                        
                        <div className='border-l-4 border-[#00ADB5]'></div>
                        <h2 className='font-extrabold text-2xl'>Education</h2>
                    </div>
                   
                    <ul className='flex flex-col gap-3 pt-2 '>
                        <li>University of Nigeria Nsukka</li>
                        <li className='text-[#7D8490] jakarta'>Geo Physics</li>
                    </ul>
                </div>

                <div className='md:w-[23%]'>
                    <div className='flex gap-2 mb-5'>
                        
                        <div className='border-l-4 border-[#00ADB5]'></div>
                        <h2 className='font-extrabold text-2xl'>Languages</h2>
                    </div>
                    

                    <ul className='flex flex-col gap-5 pt-2 '>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

                <div className='md:w-[27%]'>
                    <div className='flex gap-2 mb-5'>
                        
                        <div className='border-l-4 border-[#00ADB5]'></div>
                        <h2 className='font-extrabold text-2xl'>Frameworks & Tools</h2>
                    </div>

                    <ul className='flex flex-col gap-5 pt-2 '>
                        <li>React</li>
                        <li>Next JS</li>
                        <li>Tailwind CSS</li>
                        <li>Figma</li>
                        <li>Shadcn</li>
                        <li>Trello, Jira</li>
                        <li>Materializecss</li>
                        <li>Git and Github</li>
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default About