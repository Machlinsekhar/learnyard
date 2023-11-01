import React from 'react';
import { FiInstagram, FiYoutube, FiFacebook, FiMail, FiPhone } from 'react-icons/fi'; // Import icons
import Map from './Map'; 
import "../Footer.css";


const Footer = () => {
  return (
    <footer className="bg-[#070a47] text-white p-8 font-gilroy-regular">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full  lg:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p className="text-gray-200 ">Reach Us At</p>
          <p className="text-gray-200">Vashi • Sanpada • Kharghar • Aurum</p>
          {/* <div className="mt-4 pt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mx-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            />
            <button className="bg-green-500 text-white py-2 px-4 rounded-xl">
              Subscribe
            </button>
          </div> */}
          <div className="mt-4 pt-3 flex space-x-4">
            <a href="https://www.instagram.com/thelearnyard/" className="text-white"><FiInstagram /></a>
            <a href="https://twitter.com/sourcecatalyst" className="text-white"><FiYoutube /></a>
            <a href="https://www.linkedin.com/company/source-catalyst/?viewAsMember=true" className="text-white"><FiFacebook/></a>
          </div>
          <div className="mt-4 flex space-x-2 pt-3 text-gray-200">
            <FiMail href='mailto:thelearnyard@gmail.com'/>
            <p>thelearnyard@gmail.com</p>
          </div>
          <div className="mt-2 flex space-x-2 text-gray-200">
            <FiPhone href='tel:89281 85515'/>
            <p> 8082493545 8928185515</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ">
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <ul>
            <li className='p-2'><a href="/" className="text-gray-200">Home</a></li>
            <li className='p-2'><a href="/aboutus" className="text-gray-200">About Us</a></li>
            <li className='p-2'><a href="/centers" className="text-gray-200">Centers</a></li>
            <li className='p-2'><a href="/photos" className="text-gray-200">Photos</a></li>
            <li className='p-2'><a href="/" className="text-gray-200">Contact Us</a></li>
            <li className='p-2'><a href="/" className="text-gray-200">Social Responsibility</a></li>
            </ul>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <Map /> 
          {/* Insert your map component here */}
        </div>
      </div>
      <hr className="my-8 border-gray-200" />
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
      <p className="text-gray-200">&copy; 2023 The Learnyard. All rights reserved. Site created by <span className='text-[#FFA100]'>1trillionclub</span></p>

      </div>
    </footer>
  );
};

export default Footer;
