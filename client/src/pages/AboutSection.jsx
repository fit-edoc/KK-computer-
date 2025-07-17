import React from "react";

const AboutSection = () => {
  return (

       <><div className="h-[100px] w-screen bg-gradient-to-r from-[#000000] via-[#46154d] to-[#000] text-center text-white text-[25px] py-3  font-bold"><h1 className="border-b-2 border-yellow-200 inline">ABOUT</h1></div>
    <div className="bg-gradient-to-r from-black via-[#46154d] to-black min-h-screen overflow-x-hidden mx-auto">
      <div className="relative flex flex-col lg:flex-row items-center justify-center py-8 px-4 lg:px-8">
      
        <div className="relative bg-[#ffffff9f] rounded-3xl w-full lg:w-[70vw] h-auto lg:h-[95vh] p-8 lg:p-0 font-sans mb-8 ml-8 lg:mb-0">
          <h1 className="relative lg:top-12 lg:left-16 w-full lg:w-[40vw] font-bold text-2xl lg:text-3xl mt-4 lg:mt-0">
            Welcome to KK Educational and Rural Development Society
          </h1>
          
          <p className="relative lg:top-16 lg:left-16 w-full lg:w-[40vw] mt-6 lg:mt-0 font-semibold text-xl">
            <b>KK Educational and Rural Development Society</b> is
            committed to transforming the lives of individuals in rural areas through
            quality education, skill development, and community
            empowerment initiatives. We operate in regions where access
            to education is limited, aiming to break down barriers and
            create pathways to knowledge and opportunity.
          </p>
          
          <p className="relative lg:top-16 lg:left-16 w-full lg:w-[40vw] mt-4 font-semibold text-xl">
            Our programs span a range of critical areas, including
            vocational training that equips youth and adults with
            practical skills, and initiatives focused on the empowerment
            of women and girls, ensuring equal access to education and
            opportunities for personal and professional growth.
          </p>
          
          <ul className="relative lg:top-16 lg:left-14 font-semibold mt-6 list-disc pl-5">
            <li>Skilled Instructors</li>
            <li>Vocational Training</li>
            <li>Community Empowerment</li>
            <li>Women's Education</li>
          </ul>
          
          <div className="relative lg:top-20 lg:left-16 w-32 h-12 bg-gradient-to-r from-black  to-[#ce82df] font-semibold text-center rounded-lg mt-8 flex items-center justify-center">
            <a href="#" className="text-white no-underline">
              READ MORE
            </a>
          </div>
        </div>

      
        <div className="relative lg:top-0 lg:-left-[6vw] w-full lg:w-auto mt-8 lg:mt-0 overflow-visible flex justify-center">
          <img 
            src="images/about.png" 
            alt="KK Educational Society" 
            className="w-full max-w-[500px] h-auto lg:h-[630px] rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutSection;