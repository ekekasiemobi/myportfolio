import React from 'react'
import Image from 'next/image'

function Project() {
  return (
    <div className='container mx-auto pt-15'>
        <div className='flex w-[80%] justify-center items-center mx-auto py-15'>
            <div className='flex flex-col gap-7 w-[50%] shadow-md px-12 py-15 bg-white h-150'>
                <h1 className='font-semibold text-[#00ADB5]'>Frontend Software Developer</h1>
                <p>Hello, my name is Kasiemobi Eke</p>

                <p className='max-w-[90%] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam enim eius alias dolorum neque libero accusantium modi, aut deserunt?</p>

                <div className='flex gap-7'>
              
                    <button className='bg-[#00ADB5] px-6 py-3 rounded text-white'>Hire Me</button>
                    <button className='border-gray-400 border-2 px-6 py-3'>Download CV</button>

                </div>
            </div>

            <div className='w-[50%]'>
                <Image className='w-full h-150'  src="/me.jpeg" alt=""width={500} height={500} />
            </div>
        </div>

        <div className='flex w-[80%] justify-center items-center mx-auto py-15'>

            <div className='w-[50%]'>
                <Image className='w-full h-150'  src="/me.jpeg" alt=""width={500} height={500} />
            </div>
            <div className='flex flex-col gap-7 w-[50%] shadow-md px-12 py-15 bg-white h-150'>
                <h1 className='font-semibold text-[#00ADB5]'>Frontend Software Developer</h1>
                <p>Hello, my name is Kasiemobi Eke</p>

                <p className='max-w-[90%] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam enim eius alias dolorum neque libero accusantium modi, aut deserunt?</p>

                <div className='flex gap-7'>
              
                    <button className='bg-[#00ADB5] px-6 py-3 rounded text-white'>Hire Me</button>
                    <button className='border-gray-400 border-2 px-6 py-3'>Download CV</button>

                </div>
            </div>

           
        </div>

        <div className='flex w-[80%] justify-center items-center mx-auto py-15'>
            <div className='flex flex-col gap-7 w-[50%] shadow-md px-12 py-15 bg-white h-150'>
                <h1 className='font-semibold text-[#00ADB5]'>Frontend Software Developer</h1>
                <p>Hello, my name is Kasiemobi Eke</p>

                <p className='max-w-[90%] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam enim eius alias dolorum neque libero accusantium modi, aut deserunt?</p>

                <div className='flex gap-7'>
              
                    <button className='bg-[#00ADB5] px-6 py-3 rounded text-white'>Hire Me</button>
                    <button className='border-gray-400 border-2 px-6 py-3'>Download CV</button>

                </div>
            </div>

            <div className='w-[50%]'>
                <Image className='w-full h-150'  src="/me.jpeg" alt=""width={500} height={500} />
            </div>
        </div>
    </div>
  )
}

export default Project