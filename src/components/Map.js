import React from 'react';

const Map = () => {
  return (
    <div className="h-48 lg:h-64 w-full overflow-hidden font-gilroy-regular">
      <iframe
        title="Google Map"
        width="600px" // Set the width to your desired fixed value
        height="450px"
        frameBorder="0"
        style={{ border: 0, overflow: 'hidden' }}
        srcDoc='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60331.8067715729!2d72.997354!3d19.075257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c13f8bd4a82f%3A0x691868e5412514a1!2sLCF%20-%20Lets%20Celebrate%20Fitness!5e0!3m2!1sen!2sin!4v1698757144990!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
