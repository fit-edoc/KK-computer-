import React from 'react'

const Insructor = () => {
const getColorFromName = (name) => {
 const colors = [
      "#FFEEB2", "#FFD6B2", "#FFB2B2", "#FFB2D6", "#D6B2FF",
      "#B2D6FF", "#B2FFFF", "#B2FFD6", "#D6FFB2", "#FFFFB2"
    ];
    const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
  };

  const teamData = [
    {
      name: "CHATRAPU BKVV PRASAD",
      role: "Ongole - Center Incharge",
      img: "/images/instructor/1.png"
    },
    {
      name: "LAKSHMI",
      role: "MANAGEMENT INFORMATION SYSTEM",
      img: "/images/instructor/2.png"
    },
    {
      name: "L. BHASKHAR",
      role: "IT TRAINER",
      img: "/images/instructor/3.png"
    },
    {
      name: "KATEBOINA SRINIVAS",
      role: "NON-DOMAIN TRAINER",
      img: "/images/instructor/4.png"
    },
    {
      name: "Sanikommu Surendra",
      role: "DOMAIN TRAINER",
      img: "/images/instructor/5.png"
    },
    {
      name: "Palakaluri Prabhavathi",
      role: "Guntur - Center Incharge",
      img: "/images/instructor/6.png"
    },
    {
      name: "Podili Nagarjuna",
      role: "IT TRAINER",
      img: "/images/instructor/7.png"
    },
    {
      name: "Makham Kiran",
      role: "ENGLISH AND SOFT SKILLS",
      img: "/images/instructor/8.png"
    },
    {
      name: "Kasu Hema Sri",
      role: "DOMAIN TRAINER",
      img: "/images/instructor/9.png"
    },
    {
      name: "Sridharla Ramesh",
      role: "DOMAIN TRAINER",
      img: "/images/instructor/10.png"
    }
  ].map(member => ({
    ...member,
    bgColor: getColorFromName(member.name)
  }))


  return (
<>

    <div className="h-[100px] w-screen bg-gradient-to-r from-[#000000] via-[#46154d] to-[#000] text-center text-white text-[25px] py-3  font-bold"><h1 className="border-b-2 border-yellow-200 inline">Expert Instructors</h1></div>
    <div className='h-[100vh] w-screen bg-gradient-to-r from-[#000000] via-[#46154d] to-[#000] grid grid-cols-5 py-4'>
 
      {teamData.map((item,idx)=>(
          <div className='teach h-[300px] w-[250px] rounded-lg flex flex-col mx-auto bg-gradient-to-r from-[#d0c4d4] via-[#baa4bd] to-[#bdb0c0] px-4 py-4'><div className={`h-[80%] w-full   overflow-hidden rounded-full`} style={{backgroundColor:item.bgColor}}><img src={item.img} className='h-full w-full object-contain' alt="" /></div>
        <div className='h-[20%] w-full  flex flex-col text-center'><h1 className='font-bold'>{item.name}</h1>
        Role<h1>{item.role}</h1></div></div>
      ))}
    </div>
      </>
  )
}

export default Insructor
