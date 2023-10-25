import React, { useEffect, useState } from 'react';

function Numbers() {
  const [schools, setschools] = useState(0);
  const [centers, setStudentsCommunity] = useState(0);
  const [students, setstudents] = useState(0);
  const [targetReached, setTargetReached] = useState(false);

  const targetValues = {
    schools: 2,
    centers: 5,
    students: 200,
  };

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setschools((prevValue) =>
        prevValue < targetValues.schools ? prevValue + 10 : targetValues.schools
      );
      setStudentsCommunity((prevValue) =>
        prevValue < targetValues.centers ? prevValue + 15 : targetValues.centers
      );
      setstudents((prevValue) =>
        prevValue < targetValues.students ? prevValue + 5 : targetValues.students
      );
    }, 10);

    return () => {
      clearInterval(counterInterval);
    };
  }, []);

  useEffect(() => {
    if (
      schools === targetValues.schools &&
      centers === targetValues.centers &&
      students === targetValues.students
    ) {
      setTargetReached(true);
    }
  }, [schools, centers, students]);

  const getNumberDisplayStyle = (number) => {
    if (number === targetValues.schools) {
      return 'transition-all duration-1000 ease-out';
    }
    return '';
  };

  const getNumberDisplayText = (number) => {
    if (
      schools === targetValues.schools &&
      centers === targetValues.centers &&
      students === targetValues.students &&
      targetReached
    ) {
      return `${number}+`;
    }
    return number;
  };
  
  return (
    <div className=" mx-5 flex flex-row md:flex font-lexend md:flex-row justify-between md:max-w-[1300px] md:mx-auto pb-10 mt-8">

<div className={`flex flex-col ${getNumberDisplayStyle(schools)}`}>
        <p className="md:text-4xl text-3xl text-[#FFA100] text-left font-bold">{getNumberDisplayText(schools)}</p>
        <p className="text-lg font-medium mt-1 text-left text-[#070a47]">Schools</p>
      </div>

      <div className={`flex flex-col ${getNumberDisplayStyle(centers)}`}>
        <p className="md:text-4xl text-3xl text-[#FFA100] text-left font-bold">{getNumberDisplayText(centers)}</p>
        <p className="text-lg font-medium mt-1 text-left text-[#070a47]">Centers</p>
      </div>

      <div className={`flex flex-col ${getNumberDisplayStyle(students)}`}>
        <p className="md:text-4xl text-3xl text-[#FFA100] text-left font-bold">{getNumberDisplayText(students)}</p>
        <p className="text-lg font-medium mt-1 text-left text-[#070a47]">Students</p>
      </div>


      {/* <div className={`flex flex-col ${getNumberDisplayStyle(students)}`}>
        <p className="text-4xl text-[#3497F9] text-left font-bold">{getNumberDisplayText(students)}</p>
        <p className="text-lg font-medium mt-1 text-left">Students Placed</p>
      </div> */}
    </div>
  );
}

export default Numbers;
