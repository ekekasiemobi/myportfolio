import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='md:pt-15 pt-30 bg-[#E5E7EB]' id='hero'>
        <div className=' container mx-auto'>
            <div className=' w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-15'>

                <div className='flex flex-col gap-5 md:w-[50%]'>
                    
                    <p className='font-extrabold text-[#00ADB5] text-sm uppercase md:text-2xl'> Frontend Web Developer</p>
                    <p className='jakarta'>Hi, my name is</p>
                    <p className='font-extrabold text-4xl md:text-7xl text-[#222831]'>Kasiemobi Eke</p>

                    <p className='md:text-justify jakarta text-[14px] md:text-[16px]'>
                        I build fast, responsive, and user focused web applications that combine clean design with reliable functionality. My goal is to create digital experiences that are both visually appealing and enjoyable to use.
                    </p>

                    <div className='flex flex-col md:flex-row md:gap-7 gap-5'>
                
                        <a className='bg-[#00ADB5] px-6 py-3 rounded text-white w-full cursor-pointer jakarta uppercase text-center ' href='#contact'>Hire Me</a>
                        <a href='https://docs.google.com/document/d/1q1ZaugVXC8DWeLhWuebGnGYb8f2Wy5sIUluIEofBGHw/edit?usp=sharing' target='_blank' className='border-gray-400 border-2 px-6 py-3 w-full cursor-pointer jakarta hover:bg-[#222831] hover:text-[#CCD6F6] uppercase text-center'>Download CV</a>

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