import React, { useState, useEffect } from 'react';
import CustomCarousel from './CustomCarousel';
import bg from '../images/bg.jpg';
import Slider from 'react-slick';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import six from '../images/6.jpg'
import one from '../images/Photos/1.png'
import two from '../images/Photos/2.png'
import three from '../images/Photos/3.png'
import fourteen from '../images/Photos/14.jpg';
import fifteen from '../images/Photos/15.jpg';
import eight from '../images/Photos/10.jpeg';
import TitleBlock from './TitleBlock';
import NumbersAbout from './NumbersAbout';

const AboutUs = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        one, two, three, eight,
      ];
    const settings = {
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0',
        arrows: false,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 0, // Number of slides on desktop

                },
            },],
    };

    return (
<div className='font-gilroy-regular'>
        <div className="w-full h-full bg-no-repeat bg-cover bg-center px-44 py-10 flex" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fifteen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: 'relative'
        }}>
<div className='p-24'>
<p className="md:text-5xl text-2xl font-title  text-[#ffffff] my-10 text-center ml-5 md:max-w-[1300px] md:mx-auto">
        ABOUT US
      </p>
      </div>
</div>
<div className=' bg-[#ffff] pt-10 px-5 font-gilroy-regular'>

    <TitleBlock title='Why Do We Do What Wa Do And How?'
                subtitle='With more than 15 years of experience in the sports and skill-based learning industry, the minds behind Learnyard felt the need to fill in the gap between a child’s holistic development and livelihood opportunities. Through scientific training, data-driven analysis, and integrated learning methods - we help the child discover their competency, skills and potential. Thereby, supporting them in nurturing their sporting talent and providing a launch pad for them to excel in it.'/>
    <NumbersAbout />
    <TitleBlock title='What Sets Us Apart?'/>
    <div className="flex flex-col justify-center items-center md:flex-row max-w-[400px] mx-auto p-4">
      <img
        className="max-w-full mb-4 md:mb-0 md:mr-4"
        src={six}
        alt="Image 1"
      />
      <img
        className="max-w-full mb-4 md:mb-0 md:mx-2"
        src={fifteen}
        alt="Image 2"
      />
      <img
        className="max-w-full md:ml-4"
        src={fourteen}
        alt="Image 3"
      />
    </div>
    <TitleBlock subtitle='We strive to create opportunities for children that lead them on a path to growth. Thereby, assisting them in embracing excellence – both in academics and sports.
We are on a mission to make India a Multi-sport Nation.'/>
<div className='py-10'>
<TitleBlock title='A GREAT PLACE TO GROW'/>

<div className="w-5/5 relative md:block hidden justify-center pb-10">
        <div className="  justify-between items-center w-full">
        <div className=" justify-between items-center ">
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
          <img src={img} alt={img} className='rounded-md' />
        </div>
      ))}
    </Slider>
  </div>
        </div>
      </div> 
      </div>
</div>
        </div>
    );
};

export default AboutUs;
