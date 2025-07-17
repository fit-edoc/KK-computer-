import React from "react";

import { BiSolidChalkboard } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { IoBriefcase } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
const cards = [
  {
    title: ["Skilled Instructors"],
    imgSrc: <BiSolidChalkboard/>,
    description:
      "Our certified instructors offer expert guidance to help you build strong career skills and succeed in your training journey.",
  },
  {
    title: ["Vocational Training"],
    imgSrc: <GiTeacher/>,
    description:
      "Certified vocational programs designed to equip you with job-ready skills for a better future.",
  },
  {
    title: ["Urban Employment"],
    imgSrc: <IoBriefcase/>,
    description:
      "Focused on empowering urban youth through job-oriented training, career guidance, and placement support.",
  },
  {
    title: ["Learning Resources"],
    imgSrc: <GrResources/>,
    description:
      "Access high-quality materials, expert content, and practical tools to support your training and growth.",
  },
];

const CardGrid = () => {
  return (
    
  <div className="h-[50vh] w-screen  flex gap-6  items-center justify-center bg-gradient-to-r from-[#000000] via-[#46154d] to-[#000]">
    {cards.map((item,idx)=>(
        <div className="card h-[300px] w-[350px] bg-slate-100 rounded-xl">
            <div className="h-[50%] w-full  flex items-start justify-around">
                <h1 className="text-[25px]  py-4 font-extrabold">{item.title}</h1>
                <i className="text-[60px] text-[#f9eb54]">{item.imgSrc}</i>
            </div>
            <div className="h-[50%] w-full text-center px-3 font-bold"><p>{item.description}</p></div>
        </div>
    ))}
  </div>
  )
};

export default CardGrid