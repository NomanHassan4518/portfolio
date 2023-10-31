import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { Drawer } from 'antd';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)

   const drawerOpen = () => {
      setIsOpen(true)
   }

   const drawerClose = () => {
      setIsOpen(false)
   }

   let navItem = [
      {
         url:"home",
         name:"Home"
      },
      {
         url:"about",
         name:"About",
      },
      {
         url:"resume",
         name:"Resume",
      },
     
      {
         url:"skills",
         name:"Skills",
      },
      {
         url:"project",
         name:"Projects",
      },
    
      {
         url:"contact",
         name:"Contact",
      },
   ]
   return (

      <header className='flex w-full  z-10 bg-black  h-20 px-12 items-center  justify-between sticky top-0'>
         <div >
            <Link to='/' className='text-white text-[30px] font-[900] title'>Noman</Link>
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
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='text-white relative after:w-full after:h-[2px] after:bg-[#ffbd39] after:absolute after:content=[""]  after:top-7 after:left-0 ease-in-out after:duration-500  after:transform after:origin-center after:scale-x-0 hover:after:origin-right hover:after:scale-x-100 hover:text-[#ffbd39] hover:cursor-pointer   '>Contact</Link>
                  </li>
               </ul>
            </nav>
         </div>

         <div className="block lg:hidden">
            <button onClick={drawerOpen}>
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 25.567 18"><g transform="translate(-776 -462)"><rect id="Rectangle_941" data-name="Rectangle 941" width="12.749" height="2.499" rx="1.25" transform="translate(776 462)" fill="currentColor"></rect><rect id="Rectangle_942" data-name="Rectangle 942" width="25.567" height="2.499" rx="1.25" transform="translate(776 469.75)" fill="currentColor"></rect><rect id="Rectangle_943" data-name="Rectangle 943" width="17.972" height="2.499" rx="1.25" transform="translate(776 477.501)" fill="currentColor"></rect></g></svg>
            </button>
         </div>

         <Drawer
            title="Portfolio"
            open={isOpen}
            onClose={drawerClose}
            direction='right'
            className='drawer'
         >
            <div>
               <ul className='space-y-6'>
                {
                  navItem.map((item)=>(
                     <li >
                     <Link
                        activeClass="active"
                        to={item.url}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={drawerClose}
                        className='text-black cursor-pointer text-xl'
                     >{item.name}</Link>

                  </li>
                  ))
                }
               </ul>
            </div>
         </Drawer>
      </header>

   )
}

export default Navbar
