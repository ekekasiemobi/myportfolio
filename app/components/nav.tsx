'use client'
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";


function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
        <div className='bg-[#222831] text-[#CCD6F6] fixed w-full'>

            <nav className='container mx-auto '>

                <div className='flex justify-between pt-7 pb-7 w-[90%] mx-auto'>
                    <Link className='font-extrabold md:text-[22px] text-[20px] px-11 md:px-0' href="">Kasiemobi Eke</Link>

                    <div className='md:flex gap-7 hidden relative'>
                        <Link className='font-extrabold' href="#hero">Home</Link>
                        <Link className='font-extrabold' href="#about">About</Link>
                        <Link className='font-extrabold' href="#project">Projects</Link>
                        <Link className='font-extrabold' href="#contact">Contact</Link>
                    </div>

                    { isOpen ? <button className="md:hidden" onClick={toggle}><IoClose /></button> :
                    <button className="md:hidden" onClick={toggle}><FiMenu /></button> }

                    {isOpen && 
                        <div className="absolute md:hidden flex flex-col pt-5 w-[90%] shadow bg-[#222831] gap-7 right-0 mt-10 h-screen px-7">
                            <Link onClick={toggle} className='font-extrabold' href="#hero">Home</Link>
                            <Link onClick={toggle} className='font-extrabold' href="#about">About</Link>
                            <Link onClick={toggle} className='font-extrabold' href="#project">Projects</Link>
                            <Link onClick={toggle} className='font-extrabold' href="#contact">Contact</Link>
                        </div> 
                    }
                </div>
                
            </nav>

        </div>
    </>
  )
}

export default Nav