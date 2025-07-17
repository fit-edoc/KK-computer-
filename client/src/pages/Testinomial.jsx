import React from "react";

const Testinomial = () => {
  const data = [
    {
      id: 1,
      name: "rahul kumar",
      position: "DDuggy student",
      talk: "Completed a 3-month DDUGKY course and secured a job in Sricity. Grateful for the hands-on training and support!",
      img: "/images/01.png",
    },
    {
      id: 2,
      name: "priya singh",
      position: "MS Office Student",
      talk: "The MS Office comprehensive course helped me enhance my skills and improve my career prospects tremendously.",
      img: "/images/05.png",
    },
    {
      id: 3,
      name: "Anjali Reddy",
      position: "MEPMA Student",
      talk: "The MEPMA training was excellent, giving me the confidence and skills needed to excel in my field.",
      img: "/images/06.png",
    },
    {
      id: 4,
      name: "Suresh Kumar",
      position: "Tally Student",
      talk: "Learning Tally ERP 9 was smooth and practical, which helped me land a great job quickly.",
      img: "/images/07.png",
    },
  ];
  return (
   <><div className="h-[100px] w-screen bg-gradient-to-r from-[#000000] via-[#46154d] to-[#000] text-center text-white text-[25px] py-3  font-bold"><h1 className="border-b-2 border-yellow-200 inline">OUR TESTIMONIALS</h1></div>
    <div className="h-[70vh] w-screen bg-gradient-to-r from-[#000000] via-[#46154d] to-[#000]  flex items-center justify-center gap-3 px-4">
      {data.map((item, idx) => (
        <div className="cardd h-[360px] w-[360px] bg-[#5d276d]  text-white py-1 capitalize rounded-md">
          <div className="h-[40%] w-[40%] rounded-full mx-auto relative bg-yellow-200 overflow-hidden">
            {" "}
            <img src={item.img} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="w-full h-[60%] px-4">
            {" "}
            <h1 className="text-center text-xl"> {item.name}</h1>
            <p className="text-center">{item.position}</p>
            <h5 className="text-center mt-6">"{item.talk}"</h5>
          </div>
        </div>
      ))}
    </div>
   
   
   </>
  );
};

export default Testinomial;
