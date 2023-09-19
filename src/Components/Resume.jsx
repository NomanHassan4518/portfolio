import React from 'react'
import { useInView } from 'react-intersection-observer';


const Resume = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when the element enters the viewport
        threshold: 0,    // Adjust this threshold as needed
    });

    const resume = [
     
        {
            year: "06/2023-09/2023",
            degree: "InternShip",
            institution: "Ignite Pakistan",
            description: "My internship at Ignite Pakistan Software House has been an invaluable experience, allowing me to apply classroom knowledge in a real-world setting. During my time here, I've collaborated with talented professionals, contributed to meaningful projects."
        }
    ]
    return (
        <section id='resume' className=' mt-[5rem] lg:px-12 w-full '>
            <div className="container relative">
                <div
                    ref={ref}
                    className={`item ${inView ? 'reveal' : ''}`}
                >
                    <div className=''>
                        <div className='w-full flex flex-col items-center relative'>
                            <h1 className='text-[7vw] font-[900] z-[-1] absolute top-0  text-[#ffffff1a]  '>Resume</h1>
                            <h1 className='text-[50px] font-bold mb-5'>Resume</h1>
                        </div>

                        <div className='w-full my-4 flex flex-col  items-center justify-center text-center '>
                          <p className='text-lg text-[#8e8e8e] md:w-[80%] w-full'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>

                        <div className="mt-8 ">
                            <div className='grid grid-cols-1 gap-5 mx-4 md:mx-6 lg:mx-16 '>
                                {
                                    resume.map((item, index) => (
                                        <div key={index} className='bg-[#1a1a1a]  rounded-lg px-8 flex flex-col items-center  md:text-start text-center'>
                                            <h1 className='text-[#ffbd39] font-bold text-3xl mt-6 mb-3 '>{item.year}</h1>
                                            <p className='font-bold text-2xl mb-2 '>{item.degree}</p>
                                            <p className='text-[#8e8e8e] my-4 '>{item.institution}</p>
                                            <p className='text-[#8e8e8e] mt-4 mb-8 text-center'>{item.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
