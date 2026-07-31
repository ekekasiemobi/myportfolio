import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='container mx-auto'>
        <div className='flex w-[80%] justify-between items-center mx-auto gap-20 pt-15'>
            <div className='w-[30%]'>
                <Image className='w-full'  src="/my.jpeg" alt=""width={500} height={500} />
            </div>

            <div className='flex flex-col gap-7 w-[70%]'>
                <h1 className='font-semibold text-[#00ADB5]'>About Me</h1>

                <p className='max-w-[90%] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam enim eius alias dolorum neque libero accusantium modi, aut deserunt?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, recusandae pariatur? Totam quia voluptatem modi, esse facere non excepturi necessitatibus eaque suscipit perspiciatis. Quod, quaerat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti explicabo saepe quidem labore assumenda ducimus quis nulla, iste cupiditate placeat vel voluptas quod commodi reprehenderit modi dolore est dolorum.</p>
                <div className='flex gap-7'>
              
                    <button className='bg-[#00ADB5] px-6 py-3 rounded text-white'>Hire Me</button>
                    {/* <button className='border-gray-400 border-2 px-6 py-3'>Download CV</button> */}

                </div>
            </div>

           
        </div>
    </div>
  )
}

export default About