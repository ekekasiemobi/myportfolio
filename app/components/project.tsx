import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type project = {
    id: number;
    title: string;
    description: string;
    tools: string;
    image: string;
    link: string
}

const projects: project[] = [
  {
    id: 1,
    title: "TTP Network",
    description:
      "TTPnetwork is a career support platform that helps graduates and undergraduates with their job search. Services include CV/resume writing, cover letter writing, LinkedIn optimization, and consultation booking.",
    tools: "HTML | CSS | JavaScript | Materializecss",
    image: "/website1.png",
    link: "https://ttpnetwork.netlify.app",
  },
  {
    id: 2,
    title: "Space Tourism Center",
    description:
      "A multi-page space tourism website with pages like Home, Destinations, and Contact. Experience in creating responsive layouts and interactive user interfaces.",
    tools: "JavaScript | React | Tailwind | CSS",
    image: "/website2.png",
    link: "https://spacetourismcenter.netlify.app/",
  },
  {
    id: 3,
    title: "Next Gen Movies",
    description:
      "A modern movie streaming platform using API featuring a responsive design and seamless user experience. and different genres of movies all coming from the API",
    tools: "TypeScript | Next.js | API | Tailwind | CSS",
    image: "/website3.png",
    link: "https://nextgenmovies.netlify.app/",
  },
  {
    id: 4,
    title: "Recipe Magazine",
    description:
      "A modern recipe magazine the get food recipes from an API. It tell you the prepartion time and steps to follow, ingredients, serving size and more for over 30 recipes.",
    tools: "TypeScript | Next.js | API | Tailwind CSS | Shadcn",
    image: "/website4.png",
    link: "https://recipemagazine.netlify.app",
  },
  {
    id: 5,
    title: "Wineora",
    description:
      "A modern wine e-commerce platform featuring a responsive design and seamless user experience.That fetch different types of wines from an API. All has the feature of adding new wines, editing existing ones, and deleting unwanted entries.",
    tools: "JavaScript | React | API | Tailwind | CSS",
    image: "/website5.png",
    link: "https://wineora.netlify.app",
  },
  {
    id: 6,
    title: "Brew Palace",
    description:
      "A modern coffee shop website with a focus on providing a great user experience and showcasing the latest coffee trends from an API.",
    tools: "TypeScript | React | API | Tailwind | CSS",
    image: "/website6.png",
    link: "https://brewpalace.netlify.app",
  },
  {
    id: 7,
    title: "Shortyfy URL",
    description:
      "A simple URL shortening service that allows users to create shortened links for easy sharing using a REST API.",
    tools: "JavaScript | React | API | Tailwind CSS",
    image: "/website7.png",
    link: "https://shortyfyurl.netlify.app",
  },
];

function Project() {
  return (
    <div className='container mx-auto pt-15 md:pt-35' id='project'>
        <div className='w-[90%] mx-auto flex flex-col gap-10'>

            <h1 className='font-extrabold text-[#00ADB5] text-3xl md:text-5xl'>Selected Projects</h1>
            {projects.map((project)=>{
                return(
                    <Link key={project.id} href="https://ttpnetwork.netlify.app" target='_blank' className='flex flex-col md:flex-row justify-center items-center md:p-9 p-3 hover:bg-[#222831] hover:text-[#CCD6F6] shadow-sm rounded gap-12'>
               
                        <div className='md:w-[30%]'>
                            <Image className='w-full h-50 object-cover shadow rounded'  src={project.image} alt="" width={500} height={500} />
                        </div>

                        <div className='flex flex-col gap-5 md:w-[70%]'>
                            <h1 className='font-extrabold jakarta'>{project.title}</h1>
                            <p className='md:text-justify jakarta text-[14px] md:text-[16px]'>{project.description}.</p>

                            <p className='text-[#00ADB5] text-sm font-extrabold'>{project.tools}</p>
                        </div>
                
                    </Link>
                )
            })}
        
        </div>
    </div>
  )
}

export default Project