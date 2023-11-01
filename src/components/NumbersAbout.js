import React, { useEffect, useState } from 'react';

function NumbersAbout() {
  const [schools, setschools] = useState(0);
  const [centers, setStudentsCommunity] = useState(0);
  const [students, setstudents] = useState(0);
  const [certifiedTeachers, setcertifiedTeachers] = useState(0);
  const [targetReached, setTargetReached] = useState(false);

  const targetValues = {
    schools: 2,
    centers: 5,
    students: 200,
    certifiedTeachers: 10,
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
        prevValue < targetValues.students ? prevValue + 20 : targetValues.students
      );
      setcertifiedTeachers((prevValue) =>
        prevValue < targetValues.certifiedTeachers ? prevValue + 8 : targetValues.certifiedTeachers
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
      students === targetValues.students &&
      certifiedTeachers === targetValues.certifiedTeachers
    ) {
      setTargetReached(true);
    }
  }, [schools, centers, students, certifiedTeachers]);

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
      certifiedTeachers === targetValues.certifiedTeachers&&
      targetReached
    ) {
      return `${number}`;
    }
    return number;
  };
  
  return (
    <div className=" mx-5 flex flex-row md:flex font-gilroy-regular md:flex-row justify-between md:max-w-[1300px] md:mx-auto py-16 mt-8">

<div className={`flex flex-col ${getNumberDisplayStyle(certifiedTeachers)} shadow-xl p-10 ` }>
        <p className="md:text-6xl text-4xl text-[#FFA100] text-center font-bold ">{getNumberDisplayText(certifiedTeachers)}</p>
        <p className="text-2xl font-medium mt-1 text-left text-[#070a47]">
            Certified Teachers</p>
      </div>

      <div className={`flex flex-col ${getNumberDisplayStyle(schools)} shadow-xl p-10 ` }>
        <p className="md:text-6xl text-4xl text-[#FFA100] text-center font-bold">{getNumberDisplayText(schools)}</p>
        <p className="text-2xl font-medium mt-1 text-left text-[#070a47]">Schools</p>
      </div>

      <div className={`flex flex-col ${getNumberDisplayStyle(centers)} shadow-xl p-10 `}>
        <p className="md:text-6xl text-4xl text-[#FFA100] text-center font-bold">{getNumberDisplayText(centers)}</p>
        <p className="text-2xl font-medium mt-1 text-left text-[#070a47]">Centers</p>
      </div>

      <div className={`flex flex-col ${getNumberDisplayStyle(students)} shadow-xl p-10 `}>
        <p className="md:text-6xl text-4xl text-[#FFA100] text-left font-bold">{getNumberDisplayText(students)}</p>
        <p className="text-2xl font-medium mt-1 text-left text-[#070a47]">Students</p>
      </div>


      {/* <div className={`flex flex-col ${getNumberDisplayStyle(students)}`}>
        <p className="text-4xl text-[#3497F9] text-left font-bold">{getNumberDisplayText(students)}</p>
        <p className="text-lg font-medium mt-1 text-left">Students Placed</p>
      </div> */}
    </div>
  );
}

export default NumbersAbout;
