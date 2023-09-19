import React from 'react'
import { useInView } from 'react-intersection-observer';
import zooki from '../zooki_product.jpg'
import ignite from '../ignite.jpg'
import textutils from '../textUtils.jpg'
import { Link } from 'react-router-dom';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when the element enters the viewport
        threshold: 0,    // Adjust this threshold as needed
    });

    let projects = [
        {
            img: zooki,
            name: "Zooki Products",
            title: "Make Your Marketing Real.",
            url:"https://zooki-product.vercel.app/"
        },
        {
            img: ignite,
            name: "Ignite",
            title: "An Ecommerence Website",
            url:"https://ignite-3tpa.vercel.app/"
        },

        {
            img: textutils,
            name: "TextUtils",
            title: "Enter the text to Analyze text",
            url:"https://texttutils-eight.vercel.app/"
        },

        {
            img: "data:image/jpeg;base64,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",
            name: "NewsMonkey",
            title: "Daily News",
            url:"https://monkey-news-7r3d.vercel.app/"
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
                                    <div key={index} className={`${index === 0 || index === 3 || index === 5 ? "md:col-span-4 col-span-12 mx-4 " : "md:col-span-8 col-span-12 mx-4"}`}>
                                    
                                      <Link to={item.url} target='_blank'>
                                      <div className="w-[100%] h-72  object-cover relative group   ">
                                            <img src={item.img} alt="" className=' h-full w-full  lg:opacity-100 opacity-40' />
                                            
                                            <div className='absolute top-0 lg:bg-[#ffbd39]  h-full w-full lg:scale-0 scale-100 group-hover:scale-100  flex items-center justify-center  transition-all  duration-1000   ease-in-out '>
                                                <div className='max-w-[70%]  text-center '>
                                                    <h1>
                                                        <a href='#home' className='text-xl font-semibold '>{item.title}</a>
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
