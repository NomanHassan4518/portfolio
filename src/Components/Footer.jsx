import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { IoLocation } from 'react-icons/io5'
import { IoMdCall } from 'react-icons/io'
import { FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll';

const Footer = () => {
 
  return (
    <section className='xl:px-16 px-5 pb-20 pt-12 border-t-2 border-yellow-300'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1">
        <div className=" px-4 ">
          <h1 className='my-6 text-3xl font-bold'>About</h1>
          <p className=' text-[#b3b3a8] font-semibold text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
       
        </div>


        <div className="flex flex-col md:items-center">
          <div className=" px-4">
            <h1 className='my-6 text-3xl font-bold'>Links</h1>
            <ul className='space-y-2 text-[#b3b3a8]'>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='flex items-center space-x-1 text-lg cursor-pointer hover:text-[#ffbd39]'>
                  <span><MdOutlineArrowRightAlt className='text-[20px] text-yellow-300' /></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='flex items-center space-x-1 text-lg cursor-pointer hover:text-[#ffbd39]'>
                  <span><MdOutlineArrowRightAlt className='text-[20px] text-yellow-300' /></span>
                  <span>About</span>
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='flex items-center space-x-1 text-lg cursor-pointer hover:text-[#ffbd39]'>
                  <span><MdOutlineArrowRightAlt className='text-[20px] text-yellow-300' /></span>
                  <span>Resume</span>
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='flex items-center space-x-1 text-lg cursor-pointer hover:text-[#ffbd39]'>
                  <span><MdOutlineArrowRightAlt className='text-[20px] text-yellow-300' /></span>
                  <span>Project</span>
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='flex items-center space-x-1 text-lg cursor-pointer hover:text-[#ffbd39]'>
                  <span><MdOutlineArrowRightAlt className='text-[20px] text-yellow-300' /></span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>

          </div>
        </div>


  

        <div className=" flex flex-col md:items-center ">
          <div className=" px-4">
            <h1 className='my-6 text-3xl font-bold'>Have a Questions?</h1>
            <div className='text-[#b3b3a8] space-y-5 text-lg'>
              <div className='flex items-center space-x-3'>
                <span><IoLocation className='text-yellow-300'/></span>
                <span>Islamabad</span>
              </div>
              <div className='flex items-center space-x-3'>
                <span><IoMdCall className='text-yellow-300'/></span>
                <span>+923195586305</span>
              </div>
              <div className='flex items-center space-x-3'>
                <span><FiMail className='text-yellow-300'/></span>
                <span>malikhassanhu55@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Footer
