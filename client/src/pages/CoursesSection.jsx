import React from "react";

const CoursesSection = () => {
  return (
    <>
     <div className="h-[100px] w-screen bg-gradient-to-r from-[#000000] via-[#46154d] to-[#000] text-center text-white text-[25px] py-8  font-bold"><h1 className="border-b-2 border-yellow-200 inline ">Skill Developement Courses</h1></div>
    <div className="bg-gradient-to-r from-black via-[#46154d] to-black min-h-screen overflow-x-hidden font-sans">
      <div className="flex flex-col lg:flex-row p-4 lg:p-8">
        {/* Left Column - Images */}
        <div className="lg:w-1/3 space-y-8">
          <div className="relative lg:top-16 lg:left-40">
            <img 
              src="images/courseshow/1.jpg" 
              alt="Course 1" 
              className="w-48 h-auto"
              />
          </div>
          <div className="relative lg:top-28 lg:left-40">
            <img 
              src="images/courseshow/2.jpg" 
              alt="Course 2" 
              className="w-48 h-auto"
              />
          </div>
          <div className="relative lg:top-40 lg:left-40">
            <img 
              src="images/courseshow/4.jpg" 
              alt="Course 3" 
              className="w-48 h-auto"
              />
          </div>
        </div>

        {/* Middle Column - Main Image */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="relative lg:top-16 lg:right-24.2">
            <img 
              src="./images/courseshow/3.jpg" 
              alt="Main Course" 
              className="w-[50vw] h-auto"
              />
          </div>
          <p className="relative lg:top-44 lg:left-36 font-medium text-gray-100 mt-4 lg:mt-0">
            Explore all courses
          </p>
          <div className="relative lg:top-44 lg:left-36 w-36 h-10 bg-gradient-to-r from-black via-[#46154d] to-black rounded-lg text-center mt-4">
            <a 
              href="#" 
              className="text-white font-semibold no-underline inline-block mt-2"
              >
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Right Column - Course List */}
        <div className="lg:w-1/3 relative lg:top-16 lg:left-50 ml-10 mt-8 lg:mt-0">
          <ul className="space-y-6">
            <li>
              <h3 className="font-bold text-white text-lg">Professional Courses</h3>
              <p className="text-gray-300 font-medium w-full lg:w-96 mt-2">
                Professional courses enhance skills, boost career opportunities, 
                provide industry knowledge, and ensure continuous learning for 
                personal and professional growth.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-white text-lg">Skill Development courses</h3>
              <p className="text-gray-300 font-medium w-full lg:w-96 mt-2">
                Skill Development courses equip individuals with practical abilities, 
                improve employability, foster confidence, and prepare them for 
                industry-specific job roles.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-white text-lg">Diploma Courses</h3>
              <p className="text-gray-300 font-medium w-full lg:w-96 mt-2">
                Diploma courses offer specialized knowledge, practical training, 
                career-focused education, and are ideal for quick skill acquisition 
                and job readiness.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-white text-lg">Programming</h3>
              <p className="text-gray-300 font-medium w-full lg:w-96 mt-2">
                Programming courses teach coding skills, logic building, software 
                development, and prepare learners for careers in technology and 
                computer science.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
              </>
  );
};

export default CoursesSection;