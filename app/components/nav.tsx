import React from 'react'

function Nav() {
  return (
    <>
        <div className='bg-[#222831] text-[#CCD6F6] fixed w-full'>

            <nav className='  container mx-auto '>

                <div className='flex justify-between pt-7 pb-7 w-[90%] mx-auto'>
                    <a className='font-extrabold text-[22px]' href="">Kasiemobi Eke</a>

                    <div className='md:flex gap-7 hidden'>
                        <a className='font-extrabold' href="#hero">Home</a>
                        <a className='font-extrabold' href="#about">About</a>
                        <a className='font-extrabold' href="#project">Project</a>
                        <a className='font-extrabold' href="#contact">Contact</a>
                    </div>
                </div>
                
                
            </nav>

        </div>
    </>
  )
}

export default Nav