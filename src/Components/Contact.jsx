import React from 'react'
import { useInView } from 'react-intersection-observer';
import { BsFillSignpost2Fill } from 'react-icons/bs'
import { IoMdCall } from 'react-icons/io'
import { SiMinutemailer } from 'react-icons/si'
import { FaGlobeAfrica } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when the element enters the viewport
        threshold: 0,    // Adjust this threshold as needed
    });

    let contact = [
        {
            icon: <BsFillSignpost2Fill />,
            name: "Address",
            description: "Islamabad"
        },
        {
            icon: <IoMdCall />,
            name: "CONTACT NUMBER",
            description: "+923195586305"
        }, {
            icon: <SiMinutemailer />,
            name: "EMAIL ADDRESS",
            description: "malikhassanhu55@gmail.com"
        },
        {
            icon: <FaGlobeAfrica />,
            name: "website",
            description: "https://nomanhassan.vercel.app/"
        }
    ]
    return (
        <section id='contact'  className='relative  mt-[7rem] lg:px-12 sm:px-2 w-full '>
            <div className="container relative">
                <div
                    ref={ref}
                    className={`item ${inView ? 'reveal' : ''}`}
                >
                    <div className=''>
                        <div className='w-full flex flex-col items-center relative'>
                            <h1 className='text-[7vw] font-[900] z-[-1] absolute top-0  text-[#ffffff1a]  '>Contact</h1>
                            <h1 className='text-[50px] font-bold mb-5'>Contact Me</h1>
                        </div>

                        <div className='w-full my-4 flex flex-col  items-center justify-center text-center '>
                            <p className='text-lg text-[#8e8e8e] md:w-[80%] w-full'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:my-24'>
                        {
                            contact.map((item, index) => (

                                <div className='flex flex-col justify-center items-center mt-12'>
                                    <div className=' bg-[#1a1a1a] text-[#ffbd39] text-[34px] w-[100px] h-[100px] flex items-center justify-center  rounded-full'>
                                        <span> {item.icon}</span>
                                    </div>
                                    <div className='text-center'>
                                        <p className='uppercase text-xl my-6 font-semibold'>{item.name}</p>
                                       {index===3 ? <Link className="text-lg text-white font-semibold" to={item.description}>{item.description}</Link>: <p className="text-lg text-white font-semibold">{item.description}</p>}
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>

              
                    {/* <div className='md:grid grid-cols-2 gap-0 mt-12 flex flex-col-reverse md:px-0 px-6'>
                        <div className=' bg-[#1e1e1e] flex items-start justify-center'>
                            <img src={photo1} alt="" />
                        </div>

                        <div className=' bg-[#f8f9fa] lg:px-7 px-3 py-6 lg:py-0 rounded-md space-y-5 w-full h-full flex flex-col justify-center'>
                            <div>
                                <input type="text" id="first_name" class="bg-[#ffff] border-[1px] border-gray-300 text-gray-900 text-l rounded-md focus:ring-0 focus:border-black block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Your Name" />
                            </div>
                            <div>
                                <input type="email" id="first_name" class="bg-[#ffff] border-[1px] border-gray-300 text-gray-900 text-l rounded-md focus:ring-0 focus:border-black block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Your Email" />
                            </div>
                            <div>
                                <input type="text" id="first_name" class="bg-[#ffff] border-[1px] border-gray-300 text-gray-900 text-l rounded-md focus:ring-0 focus:border-black block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Subject" />
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="7" className='bg-[#ffff] border-[1px] border-gray-300 text-gray-900 text-l rounded-md focus:ring-0 focus:border-black block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whitel' placeholder='Message'></textarea>
                            </div>
                            <div>
                                <button className='uppercase py-4 px-12 rounded-full bg-[#ffbd39] text-black font-semibold'>send message</button>
                            </div>
                        </div>
                    </div> */}
            
        </section>
    )
}

export default Contact
