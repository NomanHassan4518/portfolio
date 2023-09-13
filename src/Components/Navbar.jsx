import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
   return (

      <header className='flex w-full  z-10 bg-black  h-20 px-12 items-center  justify-between sticky top-0'>
         <div >
            <Link to='/' className='text-white text-[30px] font-[900]'>Noman</Link>
         </div>

         <div className='hidden lg:block'>
            <nav>
               <ul className='flex   space-x-12 text-lg font-[500] items-center'>
                  <li>
                     <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='text-white relative after:w-full after:h-[2px] after:bg-[#ffbd39] after:absolute after:content=[""]  after:top-7 after:left-0 ease-in-out after:duration-500  after:transform after:origin-center after:scale-x-0 hover:after:origin-right hover:after:scale-x-100  hover:text-[#ffbd39] hover:cursor-pointer'>Home</Link>
                  </li>
                  <li>
                     <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='text-white relative after:w-full after:h-[2px] after:bg-[#ffbd39] after:absolute after:content=[""]  after:top-7 after:left-0 ease-in-out after:duration-500  after:transform after:origin-center after:scale-x-0 hover:after:origin-right hover:after:scale-x-100 hover:text-[#ffbd39] hover:cursor-pointer   '>About</Link>
                  </li>
                  <li>
                     <Link
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='text-white relative after:w-full after:h-[2px] after:bg-[#ffbd39] after:absolute after:content=[""]  after:top-7 after:left-0 ease-in-out after:duration-500  after:transform after:origin-center after:scale-x-0 hover:after:origin-right hover:after:scale-x-100 hover:text-[#ffbd39] hover:cursor-pointer   '>Resume</Link>
                  </li>
                  <li>
                     <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='text-white relative after:w-0 after:h-[2px] after:bg-[#ffbd39] after:absolute after:content=[""]  after:top-7 after:left-0 ease-in-out after:duration-500 transition hover:after:w-full hover:text-[#ffbd39] hover:cursor-pointer   '>Services</Link>
                  </li>
                  <li>
                     <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='text-white relative after:w-full after:h-[2px] after:bg-[#ffbd39] after:absolute after:content=[""]  after:top-7 after:left-0 ease-in-out after:duration-500  after:transform after:origin-center after:scale-x-0 hover:after:origin-right hover:after:scale-x-100 hover:text-[#ffbd39] hover:cursor-pointer   '>Skills</Link>
                  </li>
                  <li>
                     <Link
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='text-white relative after:w-full after:h-[2px] after:bg-[#ffbd39] after:absolute after:content=[""]  after:top-7 after:left-0 ease-in-out after:duration-500  after:transform after:origin-center after:scale-x-0 hover:after:origin-right hover:after:scale-x-100 hover:text-[#ffbd39] hover:cursor-pointer'>Projects</Link>
                  </li>
                  <li>
                     <Link
                        activeClass="active"
                        to="blog"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='text-white relative after:w-full after:h-[2px] after:bg-[#ffbd39] after:absolute after:content=[""]  after:top-7 after:left-0 ease-in-out after:duration-500  after:transform after:origin-center after:scale-x-0 hover:after:origin-right hover:after:scale-x-100 hover:text-[#ffbd39] hover:cursor-pointer   '>My Blog</Link>
                  </li>
                  <li>
                     <Link to='/' className='text-white relative after:w-full after:h-[2px] after:bg-[#ffbd39] after:absolute after:content=[""]  after:top-7 after:left-0 ease-in-out after:duration-500  after:transform after:origin-center after:scale-x-0 hover:after:origin-right hover:after:scale-x-100 hover:text-[#ffbd39] hover:cursor-pointer   '>Contact</Link>
                  </li>
               </ul>
            </nav>
         </div>
      </header>

   )
}

export default Navbar
