import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import photo1 from '../photo1.png'
import photo2 from '../photo2.png'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay speed in milliseconds
    arrows: false,
    pauseOnHover: false, // Prevent pause on hover
  };

  const slidesData = [
    {
      heading: 'Hello!',
      description1: "I'm a",
      description2: "Web",
      description3: "designer ",
      description4: "based",
      description5: "in Islamabad",
      img: photo1
    },
    {
      heading: 'Hello!',
      description1: "I'm ",
      description2: "Noman",
      description3: "Hassan",
      description4: "",
      description5: "A Freelance Web Developer",
      // description5: "",
      img: photo2
    },

  ];

  return (
    <section id='home' className=' relative '>
      <div>
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div className={`xl:px-12 w-full md:h-[55rem] lg:h-[40rem] xl:h-[50rem]    !grid grid-cols-12  hover:cursor-pointer  `} key={index} >
              <div className='  lg:col-span-6 col-span-12 ' >
                <div className='  h-[35rem] md:h-[55rem]  flex justify-start mt-12  md:mt-10 items-center    md:justify-start md:items-center lg:items-start  px-5 flex-col lg:space-y-7 slide-content '>
                  <p className='text-[#ffbd39]  font-semibold text-lg  '>{slide.heading}</p>
                  <div className='flex lg:flex-col md:flex-row flex-col items-center md:items-start'>
                    <div className='flex space-x-2 font-[900]  lg:text-[70px] text-5xl '>
                      <h1 className='   '>{slide.description1}</h1>
                      <h1 className='text-[#ffbd39]  '>{slide.description2}</h1>
                    </div>
                    <div className={`${index === 1 ? "block space-x-2 font-[900]  lg:text-[80px] text-5xl" : "flex space-x-2 font-[900]  lg:text-[70px] text-5xl "}`}>
                      <h1 className={`${index === 1 ? "text-[#ffbd39]   " : "text-white  "}`}>{slide.description3}</h1>
                      <h1 className={`${index === 1 ? " " : "text-[#ffbd39]  "}`}>{slide.description4}</h1>
                    </div>
                  </div>
                  <div className='flex space-x-2 font-[900]  lg:text-[50px] xl:text-[70px] text-4xl  '>
                    <h1 className={`${index === 1 ? "text-xl md:3xl font-semibold text-white text-start   mt-7 " : "text-[#ffbd39]  "}`}>{slide.description5}</h1>
                  </div>

                  <div className=' flex space-x-9 '>
                    <Link to="/" className=' font-semibold mt-8 bg-[#ffbd39] py-3 px-4 uppercase  border-[1px] border-black   focus:border-blue-400 focus:border-[1px] rounded-full text-black '>Hire Me</Link>
                    <Link to="/" className=' font-semibold mt-8 border-[1px] border-gray-300 py-3 px-4 uppercase   focus:border-blue-400 focus:border-[1px] rounded-full text-white'>my work</Link>
                  </div>
                </div>
              </div>

              <div className="  lg:col-span-6 absolute lg:relative w-[40%] lg:w-full h-full md:top-0 top-20  z-[-1] lg:top-0 ">
                <div className=' '>
                  <img src={slide.img} alt="" className='lg:w-full w-[50%] h-full  absolute md:top-[-30px] lg:top-[-100px] object-cover  ' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </section>
  )
}

export default Home
