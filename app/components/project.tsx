import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Project() {
  return (
    <div className='container mx-auto pt-15 md:pt-35' id='project'>
        <div className='w-[90%] mx-auto flex flex-col gap-10'>

            <h1 className='font-extrabold text-[#00ADB5] text-3xl md:text-5xl'>Selected Projects</h1>
            <Link href="https://ttpnetwork.netlify.app" target='_blank' className='flex flex-col md:flex-row justify-center items-center md:p-9 p-3 hover:bg-[#222831] hover:text-[#CCD6F6] border-b border-gray-300 gap-12'>
               
                <div className='md:w-[30%]'>
                    <Image className='w-full h-50 object-cover shadow rounded'  src="/website1.png" alt=""width={500} height={500} />
                </div>

                <div className='flex flex-col gap-5 md:w-[70%]'>
                    <h1 className='font-extrabold text-[#00ADB5]'>TTP Network</h1>
                    <p className='md:text-justify jakarta'>TTPnetwork is a career support platform that helps graduates and undergraduates with their job search. Services include CV/resume writing, cover letter writing, LinkedIn optimization, and consultation booking.</p>

                    <p className='text-[#00ADB5] text-sm font-extrabold'>HTML, CSS, JavaScript, Materializecss</p>
                </div>
          
            </Link>

            <Link href="https://spacetourismcenter.netlify.app/" target='_blank' className='flex flex-col md:flex-row justify-center items-center md:p-9 p-3 hover:bg-[#222831] hover:text-[#CCD6F6] border-b border-gray-300 gap-12'>

                <div className='md:w-[30%]'>
                    <Image className='w-full h-50 object-cover shadow rounded'  src="/website2.png" alt=""width={500} height={500} />
                </div>

                <div className='flex flex-col gap-5 md:w-[70%]'>
                    <h1 className='font-extrabold text-[#00ADB5]'>Space Tourism Center</h1>
                    <p className=' md:text-justify jakarta'>A multi-page space tourism website with pages like Home, Destinations, and Contact. Experience in creating responsive layouts and interactive user interfaces.</p>

                    <p className='text-[#00ADB5] text-sm font-extrabold'>JavaScript, React, Tailwind CSS</p>

                </div>

                
            </Link>
            
            <Link href="https://nextgenmovies.netlify.app/" target='_blank' className='flex flex-col md:flex-row justify-center items-center md:p-9 p-3 hover:bg-[#222831] hover:text-[#CCD6F6] border-b border-gray-300 gap-12'>
                <div className='md:w-[30%]'>
                    <Image className='w-full h-50 object-cover shadow rounded'  src="/website3.png" alt=""width={500} height={500} />
                </div>

                <div className='flex flex-col gap-5 md:w-[70%]'>
                    <h1 className='font-extrabold text-[#00ADB5]'>Next Gen Movies</h1>
                    <p className='md:text-justify jakarta'>A modern movie streaming platform using API featuring a responsive design and seamless user experience. and different genres of movies all coming from the API</p>

                    <p className='text-[#00ADB5] text-sm font-extrabold'>TypeScript, Next.js, API, Tailwind CSS</p>
                </div>

                
            </Link>

            <Link href="https://recipemagazine.netlify.app" target='_blank' className='flex flex-col md:flex-row justify-center items-center md:p-9 p-3 hover:bg-[#222831] hover:text-[#CCD6F6] border-b border-gray-300 gap-12'>
                <div className='md:w-[30%]'>
                    <Image className='w-full h-50 object-cover shadow rounded'  src="/website4.png" alt=""width={500} height={500} />
                </div>

                <div className='flex flex-col gap-5 md:w-[70%]'>
                    <h1 className='font-extrabold text-[#00ADB5]'>Recipe Magazine</h1>
                    <p className='md:text-justify jakarta'>A modern recipe magazine the get food recipes from an API. It tell you the prepartion time and steps to follow, ingredients, serving size and more for over 30 recipes.</p>

                    <p className='text-[#00ADB5] text-sm font-extrabold'>TypeScript, Next.js, API, Tailwind CSS, Shadcn</p>

                </div>

                
            </Link>

            <Link href="https://wineora.netlify.app" target='_blank' className='flex flex-col md:flex-row justify-center items-center md:p-9 p-3 hover:bg-[#222831] hover:text-[#CCD6F6] border-b border-gray-300 gap-12'>

                <div className='md:w-[30%]'>
                    <Image className='w-full h-50 object-cover shadow rounded'  src="/website5.png" alt=""width={500} height={500} />
                </div>

                <div className='flex flex-col gap-5 md:w-[70%]'>
                    <h1 className='font-extrabold text-[#00ADB5]'>Wineora</h1>
                    <p className='md:text-justify jakarta'>A modern wine e-commerce platform featuring a responsive design and seamless user experience.That fetch different types of wines from an API. All has the feature of adding new wines, editing existing ones, and deleting unwanted entries.</p>

                    <p className='text-[#00ADB5] text-sm font-extrabold'>JavaScript, React, API, Tailwind CSS</p>

                </div>

                
            </Link>

            <Link href="https://brewpalace.netlify.app" target='_blank' className='flex flex-col md:flex-row justify-center items-center md:p-9 p-3 hover:bg-[#222831] hover:text-[#CCD6F6] border-b border-gray-300 gap-12'>

                <div className='md:w-[30%]'>
                    <Image className='w-full h-50 object-cover shadow rounded'  src="/website6.png" alt=""width={500} height={500} />
                </div>

                <div className='flex flex-col gap-5 md:w-[70%]'>
                    <h1 className='font-extrabold text-[#00ADB5]'>Brew Palace</h1>
                    <p className='md:text-justify jakarta'>A modern coffee shop website with a focus on providing a great user experience and showcasing the latest coffee trends from an API.</p>

                    <p className='text-[#00ADB5] text-sm font-extrabold'>TypeScript, React, API, Tailwind CSS</p>

                </div>

            </Link>

            <Link href="https://shortyfyurl.netlify.app" target='_blank' className='flex flex-col md:flex-row justify-center items-center md:p-9 p-3 hover:bg-[#222831] hover:text-[#CCD6F6] border-b border-gray-300 gap-12'>

                <div className='md:w-[30%]'>
                    <Image className='w-full h-50 object-cover shadow rounded'  src="/website7.png" alt=""width={500} height={500} />
                </div>

                <div className='flex flex-col gap-5 md:w-[70%]'>
                    <h1 className='font-extrabold text-[#00ADB5]'>Shortyfy URL</h1>
                    <p className='md:text-justify jakarta'>A simple URL shortening service that allows users to create shortened links for easy sharing using a REST API.</p>

                    <p className='text-[#00ADB5] text-sm font-extrabold'>JavaScript, React, API, Tailwind CSS</p>
                </div>            
            </Link>

        </div>
    </div>
  )
}

export default Project