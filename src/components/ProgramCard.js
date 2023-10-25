import React, { useState } from 'react';

const  ProgramCard = ({ image, title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="max-w-[800px] min-w-[300px] mr-10  rounded-lg">
      <div className=" rounded-xl  shadow-xl ">
        <div className="flex justify-center">
          <img
            className="h-[400px] rounded-lg "
            src={image}
            alt="Card Image"
          />
        </div>
       
        
      </div>
    </div>
  );
};

export default ProgramCard;
