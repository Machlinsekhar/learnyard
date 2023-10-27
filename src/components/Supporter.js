import React from 'react';
import logo1 from '../images/logo1.png'; // Import your logo images
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo-3.png';

const Supporter = () => {
  return (
    <div className="flex items-center justify-center space-x-4 bg-[#DDE3EB]">
      <img src={logo1} alt="Supporter 1" className="w-64" />
      <img src={logo2} alt="Supporter 2" className="w-34" />
      <img src={logo3} alt="Supporter 3" className="w-34" />
    </div>
  );
};

export default Supporter;
