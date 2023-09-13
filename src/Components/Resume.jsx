import React from 'react'
import { useInView } from 'react-intersection-observer';


const Resume = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when the element enters the viewport
        threshold: 0,    // Adjust this threshold as needed
    });

    const resume = [
        {
            year: "2017-2019",
            degree: "Matric in Computer Science",
            institution: "Govt. High School Dherowal Sargodha",
            description: "Throughout high school, I've excelled academically, consistently achieving top grades. I've also actively engaged in various extracurricular activities, demonstrating leadership and teamwork skills."
        },
        {
            year: "2019-2021",
            degree: "FSc Enginnering",
            institution: "The Punjab Science Group of Colleges Jauharabad Khushab",
            description: "In college, I've pursued academic excellence, pushing the boundaries of my chosen field and exploring diverse subjects. Alongside my studies, I've actively engaged in leadership roles and community initiatives."
        },
        {
            year: "2021-2025",
            degree: "BS in Computer Science",
            institution: "International Islamic University Islamabad",
            description: "As a current university student, I'm on an inspiring academic journey marked by a dedication to learning and personal development. With my degree anticipated to conclude in 2025"
        },
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

                        <div className='w-full my-4 flex flex-col items-center mx-4'>
                            <p className='text-[#8e8e8e] text-lg' >A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic</p>
                            <p className='text-[#8e8e8e] text-lg' >country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>

                        <div className="mt-8 ">
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mx-4 md:mx-6 lg:mx-16 '>
                                {
                                    resume.map((item, index) => (
                                        <div key={index} className='bg-[#1a1a1a] rounded-lg px-8'>
                                            <h1 className='text-[#ffbd39] font-bold text-3xl mt-6 mb-3 '>{item.year}</h1>
                                            <p className='font-bold text-2xl mb-2'>{item.degree}</p>
                                            <p className='text-[#8e8e8e] my-4 '>{item.institution}</p>
                                            <p className='text-[#8e8e8e] mt-4 mb-8'>{item.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mt-8 w-full flex items-center justify-center">
                            <button className='uppercase py-4 px-8 bg-[#ffbd39] text-gray-900 rounded-full font-semibold'>download cv</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
