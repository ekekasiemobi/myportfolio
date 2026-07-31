import React from 'react'

function Nav() {
  return (
    <>
        <div className='bg-[#F9FAFF] shadow-sm fixed w-full'>

            <nav className='  container mx-auto '>

                <div className='flex justify-between p-7 w-[80%] mx-auto'>
                    <a className='font-semibold' href="">Kasiemobi Eke</a>

                    <div className='flex gap-7'>
                        <a className='font-semibold' href="">About</a>
                        <a className='font-semibold' href="">Project</a>
                        <a className='font-semibold' href="">Contact</a>
                    </div>
                </div>
                
                
            </nav>

        </div>
    </>
  )
}

export default Nav