import React from 'react'
import { useInView } from 'react-intersection-observer';
import texiUp from '../TexiUp.png'
import thebooksplatform from '../thebooksplatform.png'
import weatherapp from '../weatherApp.jpg'
import businex from '../businex.jpg'
import zoki from '../zooki.jpg'
import { Link } from 'react-router-dom';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when the element enters the viewport
        threshold: 0,    // Adjust this threshold as needed
    });

    let projects = [
        {
            img: weatherapp,
            name: "ClearSky",
            title: "Weather Application",
            url:"https://weatherapp-neon-pi.vercel.app/"
        },
       
        {
            img: thebooksplatform,
            name: "The Books Platform",
            title: "MERN Stack Project",
            url:"https://booksplatform-shpg.vercel.app/"
        },
         
        {
            img: texiUp,
            name: "TaxiUp",
            title: "Commitment to work",
            url:"https://taxi-up.vercel.app/"
        },

        {
            img: zoki,
            name: "Zooki Product",
            title: "Make Your Marketing Real.",
            url:"https://zooki-product.vercel.app/"
        },
            
        {
            img: businex,
            name: "Businex",
            title: "Provide best Business Solutions",
            url:"https://businex-ten.vercel.app/"
        },
            
      

    ]
    return (
        <section id='project' className='relative lg:px-16 mt-20'>
            <div className="container relative">
                <div
                    ref={ref}
                    className={`item ${inView ? 'reveal' : ''}`}
                >
                    <div className='flex items-center justify-center w-full flex-col'>
                        <p className='uppercase text-[7vw] font-[900] absolute top-0 z-[-1] text-[#ffffff1a] '>Projects</p>
                        <p className='text-[55px] font-bold mb-5 '>Our Projects</p>
                        <p className='text-[#8e8e8e]  w-full text-center text-lg mt-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>

                    <div>
                        <div className='grid grid-cols-12  gap-5 mt-12'>
                            {
                                projects.map((item, index) => (
                                    <div key={index} className={`${index === 0 || index === 3 || index === 4 ? "md:col-span-4 col-span-12 mx-4 border " : "md:col-span-8 col-span-12 mx-4 border"}`}>
                                    
                                      <Link to={item.url} target='_blank'>
                                      <div className="w-[100%] h-72   relative group   ">
                                            <img src={item.img} alt="" className=' h-full w-full  lg:opacity-100 opacity-40 object-fit' />
                                            
                                            <div className='absolute top-0 lg:bg-[#ffbd39]  h-full w-full lg:scale-0 scale-100 group-hover:scale-100  flex items-center justify-center  transition-all  duration-1000   ease-in-out '>
                                                <div className='max-w-[70%]  text-center '>
                                                    <h1>
                                                        <p  className='text-xl font-semibold '>{item.title}</p>
                                                        <p className='font-semibold text-gray-100 mt-4'>{item.name}</p>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                      </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Projects
