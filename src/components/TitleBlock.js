import React from "react";

function TitleBlock(props) {
  const { title, subtitle } = props;

  return (
    <div>
      <p className="md:text-3xl text-2xl font-title font-header font-jost text-[#FFA100] my-10 text-center ml-5 md:max-w-[1300px] md:mx-auto">
        {title}
      </p>

      <p className="md:text-xl text-lg text-[#070a47] font-lexend text-center ml-5 mr-5 md:max-w-[1300px] md:mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

export default TitleBlock;
