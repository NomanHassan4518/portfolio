import React from 'react';
import 'slick-carousel/slick/slick.css';
import photo1 from '../photo1.png'

const Home = () => {



  return (
    <section id='home' className=' relative '>
      <div>
        <div className={`xl:px-12 px-4 w-full lg:h-[45rem] xl:h-[50rem] !grid grid-cols-12   `}  >
          <div className='lg:col-span-6 col-span-12' >
            <div className='flex justify-start mt-12  md:mt-10 lg:mt-28 items-center md:justify-start md:items-center lg:items-start  px-5 flex-col lg:space-y-4 slide-content '>
              <p className='text-[#ffbd39]  font-semibold text-lg'>Hello!</p>
              <div className='flex lg:flex-col md:flex-row flex-col items-center md:items-start '>
                <div className='flex space-x-2 font-[900]  lg:text-[70px] text-5xl '>
                  <h1 className='   '>I'm a</h1>
                  <h1 className='text-[#ffbd39]  '>React</h1>
                </div>
                <div className="flex space-x-2 font-[900] mt-4  lg:text-[70px] text-5xl ">
                  <h1 className="text-white  ">Developer </h1>
                  <h1 className="text-[#ffbd39]"> based</h1>
                </div>
              </div>
              <div className='flex space-x-2 font-[900]  lg:text-[50px] xl:text-[70px] text-4xl  '>
                <h1 className="text-[#ffbd39] mt-3">in Islamabad</h1>
              </div>
            </div>
          </div>

          <div className=" col-span-12  lg:col-span-6   w-full lg:w-full h-full     ">
            <div >
              <img src={photo1} alt="" className='w-full  h-full lg:h-[39rem]  object-cover  ' />
            </div>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Home
