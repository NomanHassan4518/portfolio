import React from 'react'
import { useInView } from 'react-intersection-observer';
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Blog = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when the element enters the viewport
        threshold: 0,    // Adjust this threshold as needed
    });

    const blog = [
        {
            img: "https://themewagon.github.io/clark/images/image_1.jpg",
            date: "JUNE 21, 2019",
            admin: "ADMIN",
            icon: <BsFillChatLeftTextFill />,
            value: "3",
            title: "Why Lead Generation is Key for Business Growth",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            img: "https://themewagon.github.io/clark/images/image_2.jpg",
            date: "JUNE 21, 2019",
            admin: "ADMIN",
            icon: <BsFillChatLeftTextFill />,
            value: "3",
            title: "Why Lead Generation is Key for Business Growth",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            img: "https://themewagon.github.io/clark/images/image_3.jpg",
            date: "JUNE 21, 2019",
            admin: "ADMIN",
            icon: <BsFillChatLeftTextFill />,
            value: "3",
            title: "Why Lead Generation is Key for Business Growth",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
    ]

    let count = [
        {
            num: "100",
            title: "Awards"
        },
        {
            num: "1200",
            title: "Complete Projects",
        },
        {
            num: "1200",
            title: "Happy Customers",
        },
        {
            num: "500",
            title: "Cups of coffee",
        },
    ]
    return (
        <>
            <section id='blog' className='relative mt-[10rem]'>
                <div className=" ">
                    <div
                        ref={ref}
                        className={`item ${inView ? 'reveal' : ''}`}
                    >
                        <div className='lg:px-16'>
                            <div className='flex items-center justify-center w-full flex-col'>
                                <p className='uppercase text-[7vw] font-[900] absolute top-0 z-[-1] text-[#ffffff1a] '>Blog</p>
                                <p className='text-[55px] font-bold mb-5 '>Our Blog</p>
                                <div className='  w-full text-center'>
                                    <p className='text-[#8e8e8e] text-lg mt-7'>Far far away, behind the word mountains, far from the countries Vokalia and </p>
                                    <p className='text-[#8e8e8e] text-lg'>Consonantia</p>
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mt-12'>
                                {
                                    blog.map((item, index) => (
                                        <div>
                                            <div className='lg:w-96 h-72 '>
                                                <img src={item.img} alt="" className='w-full h-full object-cover' />

                                            </div>

                                            <div className='lg:w-96 h-80 px-4'>
                                                <div className='flex space-x-5 items-center mt-3 text-[#ffbd39] text-center'>
                                                    <p>{item.date}</p>
                                                    <Link to="">{item.admin}</Link>
                                                    <p>{item.icon}</p>
                                                    <p>{item.value}</p>
                                                </div>
                                                <div className='mt-5 w-[87%] text-center'>
                                                    <Link to="" className='font-bold text-xl hover:text-[#ffbd39] '>{item.title}</Link>
                                                    <p className='mt-4 text-[#8e8e8e] text-lg'>{item.description}</p>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                       
                            <div className='grid md:grid-cols-4  grid-cols-1 mt-0 z-[200] gap-5 lg:px-12 w-full '>
                                {
                                    count.map((item, index) => (
                                        <div className='w-full flex flex-col justify-center items-center md:px-0 px-4' key={index}>
                                            <div className='flex flex-col justify-center items-center bg-[#1a1a1a] rounded-xl  md:h-36  lg:w-56 xl:w-64 md:w-48 w-full h-36 '>
                                                <p className='text-4xl font-bold text-[#ffbd39]'>{item.num}</p>
                                                <p className='mt-3 text-xl'>{item.title}</p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>

                            <section className='relative mt-[-4rem]  h-[32rem] w-full flex flex-col justify-center items-center ' >
                                <img src="https://themewagon.github.io/clark/images/bg_1.jpg" className='w-full h-full  object-cover absolute z-[-1]' alt="" />
                                <div className='text-[40px] text-center font-[900] space-x-2 '>
                                    <span>I'm</span>
                                    <span className='text-[#ffbd39]'>Available</span>
                                    <span>for freelancing</span>
                                </div>
                                <div className='  w-full text-center'>
                                    <p className='text-[#8e8e8e] text-lg mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and </p>
                                    <p className='text-[#8e8e8e] text-lg'>Consonantia</p>
                                </div>
                                <div className="mt-8 w-full flex items-center justify-center">
                                    <button className='uppercase py-4 px-8 bg-[#ffbd39] text-gray-900 rounded-full font-semibold'>hire me</button>
                                </div>
                            </section>
                      


                    </div>
                </div>
            </section>







        </>
    )
}

export default Blog
