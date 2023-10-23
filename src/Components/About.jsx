import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import photo1 from '../photo1.png'
import cv from '../CV.pdf'


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element enters the viewport
    threshold: 0.5,    // Adjust this threshold as needed
  });

  return (
    <section id='about' className='relative mt-[3rem] lg:px-12 w-full'>
      <div className="container">
        <div
          ref={ref}
          className={`item ${inView ? 'reveal' : ''}`}
        >

          <div className="grid md:grid-cols-2 grid-cols-1 mx-4 gap-5">
            <div className='  items-start justify-center hidden md:flex'>
              <img src={photo1} alt="" className='h-full object-cover' />
            </div>

            <div className='w-full h-full relative flex justify-center  flex-col'>
              <div className='w-full flex flex-col items-center relative'>
                <h1 className='text-[7vw] font-[900] z-[-1] absolute top-0  text-[#ffffff1a]  '>About</h1>
                <h1 className='text-[50px] font-bold mb-5'>About Me</h1>
              </div>
              <p className='text-lg mr-4 text-[#8e8e8e] font-semibold mt-8 text-center '>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <ul className="mt-4 space-y-4">
                <li className='flex lg:items-center items-strat'>
                  <p className='w-[150px] font-[600] text-xl '>Name:</p>
                  <span className='text-[#8e8e8e] font-semibold'>Noman Hassan</span>
                </li>
            
                <li className='flex lg:items-center items-strat'>
                  <p className='w-[150px] font-[600] text-xl '>Address:</p>
                  <span className='text-[#8e8e8e] font-semibold'>Islamabad</span>
                </li>
                <li className='flex lg:items-center items-strat'>
                  <p className='w-[150px] font-[600] text-xl '>Zip code:</p>
                  <span className='text-[#8e8e8e] font-semibold'>44210</span>
                </li>
                <li className='flex lg:items-center items-strat'>
                  <p className='w-[150px] font-[600] text-xl '>Email:</p>
                  <span className='text-[#8e8e8e] font-semibold'>malikhassanhu55@gmail.com</span>
                </li>
                <li className='flex lg:items-center items-strat'>
                  <p className='w-[150px] font-[600] text-xl '>Phone:</p>
                  <span className='text-[#8e8e8e] font-semibold'>+923195586305</span>
                </li>
              </ul>

              <p className='text-2xl mt-6 font-semibold'><span className='text-[#ffbd39]'>5</span> Projects complete</p>
              <div className='mt-8'>
                <Link to={cv} target="_blank" download  className=' font-semibold  bg-[#ffbd39] py-3 px-4 uppercase  border-[1px] border-black   focus:border-blue-400 focus:border-[1px] rounded-full text-black ' >Download CV</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
