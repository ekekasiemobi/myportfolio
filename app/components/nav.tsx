import React from 'react'

function Nav() {
  return (
    <>
        <div className='bg-[#222831] text-white shadow-sm fixed w-full'>

            <nav className='  container mx-auto '>

                <div className='flex justify-between pt-7 pb-7 w-[90%] mx-auto'>
                    <a className='font-extrabold' href="">Kasiemobi Eke</a>

                    <div className='md:flex gap-7 hidden'>
                        <a className='font-extrabold' href="/">Home</a>
                        <a className='font-extrabold' href="">About</a>
                        <a className='font-extrabold' href="">Project</a>
                        <a className='font-extrabold' href="">Contact</a>
                    </div>
                </div>
                
                
            </nav>

        </div>
    </>
  )
}

export default Nav