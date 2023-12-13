import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const Resume = () => {
    const [difference, setDifference] = useState({ years: 0, months: 0 });
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when the element enters the viewport
        threshold: 0,    // Adjust this threshold as needed

    });

    useEffect(() => {
      // Get current date
      const currentDate = new Date(2023,9,1);
  
      // Set start date to June 2023
      const startDate = new Date(2023, 6,15); // Month is 0-indexed, so 6 represents June
  
      // Calculate difference
      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();
     const differenceInMilliseconds = currentDate - startDate;

// Convert milliseconds to days
const days = Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000));
      console.log(days);
  
      // Adjust for negative months (current month is earlier than start month)
      if (months < 0) {
        years--;
        months += 12;
      }
      
  
      setDifference({ years, months });
    }, []); // Empty dependency array ensures the effect runs only once on mount
  

    const resume = [

        {
            year: "06/2023-09/2023",
            degree: "InternShip",
            institution: "Ignite Pakistan",
            description: "My internship at Ignite Pakistan Software House has been an invaluable experience, allowing me to apply classroom knowledge in a real-world setting. During my time here, I've collaborated with talented professionals, contributed to meaningful projects.",
            duration:difference
        },
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

                        <div className="mt-8 flex items-center justify-center ">
                            <div className='grid grid-cols-1  gap-5 mx-4 md:mx-6 lg:mx-16 '>
                                {
                                    resume.map((item, index) => (
                                        <div key={index} className='bg-[#1a1a1a]  rounded-lg px-1 md:px-8 flex flex-col items-center  md:text-start text-center'>
                                           <div className="flex items-center space-x-5 mb-2 mt-4 ">
                                           <h1 className='text-[#ffbd39] font-bold text-3xl  '>{item.year}</h1>
                                           {
                                            difference.months>12?  <p>{`Years: ${item.duration.years}, Months: ${item.duration.months}`}</p>:<p className=' text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-red-500 to-yellow-300'>{`( Months: ${item.duration?.months} )`}</p>
                                           }
                                           </div>
                                            <p className='font-bold text-2xl mb-2 '>{item.degree}</p>
                                            <p className='text-[#8e8e8e] my-2 '>{item.institution}</p>
                                            <p className='text-[#8e8e8e] my-2  text-center'>{item.description}</p>
                                            <p>
                                                <p className='text-[#8e8e8e] my-2'>Work on Frontend library React JS.</p>
                                                <p className='text-[#8e8e8e] my-2'>Work on CSS libraries like Bootstrap, Tailwind CSS.</p>
                                                <p className='text-[#8e8e8e] my-2'>Work on API’s with axios and fetch methods.</p>
                                                <p className='text-[#8e8e8e] my-2 mb-5'>Use Redux for global state management</p>

                                            </p>
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
