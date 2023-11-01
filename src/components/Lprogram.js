import React, { useState } from 'react';

const Lprogram = ({ image, title, age, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="max-w-[300px] min-w-[300px] ml-20 bg-white rounded-xl font-gilroy-regular">
      <div className="border border-gray-300 rounded-xl p-4 shadow-lg ">
        <div className="flex justify-center">
          <img
            className="h-[200px] rounded-lg"
            src={image}
            alt="Card Image"
          />
        </div>
        <p className="text-xl font-medium text-gray-800 mt-2">{title}</p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-md font-medium text-gray-500 ">
             Age Group: {age}
            </p>
            
          </div>
          
        </div>

       
          <div className="mt-4">
            <p className="text-[#2f3159]">{description}</p>
          </div>
     
        
      </div>
    </div>
  );
};

export default Lprogram;
