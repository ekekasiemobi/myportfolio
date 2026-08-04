import React from 'react'

function Contact() {
  return (
    <div className='bg-[#222831] text-[#CCD6F6] mt-35 pt-15' id='contact'>
        <div className='container mx-auto'>
            <div className='w-[90%] mx-auto'>
                <h1 className='font-extrabold text-[#00ADB5] text-3xl md:text-5xl mb-5'>Get In Touch</h1>
                <div className='flex flex-col md:flex-row gap-25 justify-center md:items-center items-start pt-9 mb-10'>

                    <div className='md:w-[50%] flex flex-col gap-5'>
                        <p className='md:text-justify jakarta'>Thank you for taking the time to visit my developer portfolio. I'm thrilled that you are interested in learning more about my work.</p>
                        <p className='md:text-justify jakarta'>I'm always looking for new opportunities to collaborate with like-minded individuals and companies. If you have a project in mind, or simply want to say hello, please don't hesitate to get in touch with me.</p>
                        <p className='md:text-justify jakarta'>I'm confident that my skills and experience will be a valuable asset to any project, and I look forward to hearing from you soon.</p>
                    </div>

                    <div className='md:w-[50%] flex flex-col md:flex-row gap-12 md:gap-0'>

                        <div className='md:w-[50%] flex flex-col gap-3'>
                            <p className='font-extrabold text-2xl text-[#00ADB5]'>Follow Me</p>

                            <div className='flex flex-col gap-3'>
                                <a className='jakarta' href="">GitHub</a>
                                <a className='jakarta' href="">LinkedIn</a>
                                <a className='jakarta' href="">Twitter</a>
                                <a className='jakarta' href="">Instagram</a>
                                <a className='jakarta' href="">Whatsapp</a>
                            </div>
                        </div>

                        <div className='md:w-[50%] flex flex-col gap-3'>
                            <p className='font-extrabold text-2xl text-[#00ADB5]'>Contact Me</p>
                            <a className='jakarta' href="mailto:kasiemobijanfrancis@gmail.com">Kasiemobijancis@gmail.com</a>
                            <p>+234 8164602766</p>
                            <div className='flex flex-col w-full gap-5'>
                                <button className='bg-[#00ADB5] p-5 w-full cursor-pointer jakarta uppercase'>Message Me</button>
                                <button className='border-[#00ADB5] border-2 p-5 w-full cursor-pointer hover:bg-white hover:text-[#00ADB5] jakarta uppercase'>Download CV</button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className='flex gap-5 mt-15 mb-15'>
                    <button className='bg-[#00ADB5] p-5 w-full cursor-pointer font-extrabold uppercase'>Message Me</button>
                    <button className='border-[#00ADB5] border-2 p-5 w-full font-extrabold cursor-pointer uppercase hover:bg-white hover:text-[#00ADB5]'>Get my CV</button>
                </div>
                 */}

            </div>

        </div>
    </div>
  )
}

export default Contact