import React from 'react'
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when the element enters the viewport
        threshold: 0,    // Adjust this threshold as needed
    });



    return (
        <section id='skills' className='relative w-full mt-20 lg:px-16'>
            <div className="container relative">
                <div
                    ref={ref}
                    className={`item ${inView ? 'reveal' : ''}`}
                >
                    <div className='flex items-center justify-center w-full flex-col'>
                        <p className='uppercase text-[7vw] font-[900] absolute top-0 z-[-1] text-[#ffffff1a] '>Skills</p>
                        <p className='text-[55px] font-bold mb-5 '>My Skills</p>
                        <p className='text-[#8e8e8e]  w-full text-center text-lg mt-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>

                    <div className='mt-12'>
                        <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-5'>

                            <div className='relative mx-4'>
                                <h1 className='font-semibold mb-3 text-2xl'>React</h1>
                                <div className='w-full bg-[#1a1a1a] h-3 rounded-lg'>
                                    <div className={`w-[70%] overflow-visible h-3 bg-[#ffbd39] relative rounded-lg mt-4`}>
                                        <span className='absolute top-[-45px] right-0 text-2xl font-semibold  '>70%
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <div className='relative mx-4'>
                                <h1 className='font-semibold mb-3 text-2xl'>Tailwind CSS</h1>
                                <div className='w-full bg-[#1a1a1a] h-3 rounded-lg'>
                                    <div className={`w-[85%] overflow-visible h-3 bg-[#ffbd39] relative rounded-lg mt-4`}>
                                        <span className='absolute top-[-45px] right-0 text-2xl font-semibold  '>85%</span>
                                    </div>
                                </div>
                            </div>

                            <div className='relative mx-4'>
                                <h1 className='font-semibold mb-3 text-2xl'>HTML5</h1>
                                <div className='w-full bg-[#1a1a1a] h-3 rounded-lg'>
                                    <div className={`w-[95%] overflow-visible h-3 bg-[#ffbd39] relative rounded-lg mt-4`}>
                                        <span className='absolute top-[-45px] right-0 text-2xl font-semibold  '>95%</span>
                                    </div>
                                </div>
                            </div>

                            <div className='relative mx-4'>
                                <h1 className='font-semibold mb-3 text-2xl'>CSS3</h1>
                                <div className='w-full bg-[#1a1a1a] h-3 rounded-lg'>
                                    <div className={`w-[90%] overflow-visible h-3 bg-[#ffbd39] relative rounded-lg mt-4`}>
                                        <span className='absolute top-[-45px] right-0 text-2xl font-semibold  '>90%</span>
                                    </div>
                                </div>
                            </div>

                            <div className='relative mx-4'>
                                <h1 className='font-semibold mb-3 text-2xl'>BootStrap
                                </h1>
                                <div className='w-full bg-[#1a1a1a] h-3 rounded-lg'>
                                    <div className={`w-[85%] overflow-visible h-3 bg-[#ffbd39] relative rounded-lg mt-4`}>
                                        <span className='absolute top-[-45px] right-0 text-2xl font-semibold  '>85%</span>
                                    </div>
                                </div>
                            </div>

                            {/* <div className='relative mx-4'>
                                <h1 className='font-semibold mb-3 text-2xl'>SEO
                                </h1>
                                <div className='w-full bg-[#1a1a1a] h-3 rounded-lg'>
                                    <div className={`w-[80%] overflow-visible h-3 bg-[#ffbd39] relative rounded-lg mt-4`}>
                                        <span className='absolute top-[-45px] right-0 text-2xl font-semibold  '>80%</span>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
