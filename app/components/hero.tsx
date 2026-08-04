import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='pt-15 bg-[#E5E7EB]'>
        <div className=' container mx-auto'>
            <div className=' md:w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-15'>

                <div className='flex flex-col gap-5 md:w-[50%]'>
                    
                    <p className='font-extrabold text-[#00ADB5] uppercase text-2xl'> Frontend Web Developer</p>
                    <p className='font-extrabold '>Hi, my name is</p>
                    <p className='font-extrabold text-7xl text-[#222831]'>Kasiemobi Eke</p>

                    <p className='text-justify'>
                        I build fast, responsive, and user-focused web applications that combine clean design with reliable functionality. My goal is to create digital experiences that are both visually appealing and enjoyable to use.
                    </p>

                    <div className='flex gap-7'>
                
                        <button className='bg-[#00ADB5] px-6 py-3 rounded text-white w-full cursor-pointer'>Hire Me</button>
                        <button className='border-gray-400 border-2 px-6 py-3 w-full cursor-pointer'>Download CV</button>

                    </div>
                </div>

                <div className=' md:w-[50%]'>
                    <Image className='w-full'  src="/me5.png" alt=""width={500} height={500} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero