import React from 'react';
import CustomCarousel from './CustomCarousel';
import bg from '../images/bg.jpg';


const Hero = () => {
  return (
    
    <div className="w-full-md h-full bg-no-repeat bg-cover bg-center md:px-16 font-gilroy-regular flex" style={{ backgroundImage: `url(${bg})` }}>
      
      {/* Left half of the screen (3 parts out of 5) */}
      
      {/* Background content */}
      <div className="w-3/5 pl-10 py-10 mt-16">
        <p className="font-lexend font-bold text-white text-2xl sm:text-4xl md:text-6xl">
          Bringing Learning To Life Through Sports
        </p>

        <p className="font-regular font-lexend text-[#545747] text-base sm:text-lg md:text-2xl mt-3 pb-5">
          Let your child experience a new way of learning that is not just only fun but also adds to their cognitive growth.
        </p>

        <div className="flex justify-center pt-28 pb-7 ">
          <a href='/' target="_blank" className="w-30 h-15 p-3 text-[#1b21af] bg-[#DDE3EB] bg-opacity-80 font-lexend rounded-2xl text-lg  text-center shadow-xl">
            Know More
          </a>
        </div>
       
      </div>

      {/* Right half of the screen (2 parts out of 5) */}
      <div className="w-2/5 relative md:block hidden">
        <div className=" ml-16 w-3/4  lg:w-4/5  z-10">
          <CustomCarousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
