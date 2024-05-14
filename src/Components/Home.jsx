import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa"

const Home = () => {
  return (
    <section id="home" className=" relative -top-20">
      <div
        className="w-full md:h-[42rem] h-[38rem] bg-black flex items-center justify-center flex-col"
        style={{
          backgroundImage: `url("https://davis-html.netlify.app/assets/img/hero-bg-2.jpg")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="md:text-[60px] text-[30px] font-[900] space-x-5 opacity-100">
          <span>Hi, I'm</span>
          <span className="text-[#fec544]">Noman Hassan</span>
        </h1>
        <p className="md:mt-9 mt-5 lg:w-[65%] md:w-[90%] w-full px-3 md:px-0 md:text-center text-xl leading-9 text-gray-300 ">
        Frontend developer specializing in React.js, passionate about crafting dynamic and user-friendly interfaces. Dedicated to optimizing performance and enhancing user experiences through innovative solutions.
        </p>

        <div className="mt-12 flex items-center space-x-10 ">
          <Link to="https://www.linkedin.com/in/noman-hassan-36a983270/" target='_blank' className="border-2 border-gray-600 hover:border-white rounded-full text-center w-[50px] h-[50px] flex items-center justify-center hover:text-yellow-300 "><FaLinkedinIn className="w-[20px] h-[20px]"/></Link>
          <Link to="https://github.com/NomanHassan4518" target="_blank" className="border-2 border-gray-600 hover:border-white rounded-full text-center w-[50px] h-[50px] flex items-center justify-center hover:text-yellow-300 "><FaGithub className="w-[20px] h-[20px]"/></Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
