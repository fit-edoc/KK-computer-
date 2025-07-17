import React from 'react'
import { PiStudentFill } from "react-icons/pi";
import { BiSolidInstitution } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
const Parteners = () => {


    const data = [
        {id:1,img:"/images/parteners/AP.jpeg",name:"AP - GOVERMENT"},
        {id:2,img:"/images/parteners/ddugky.png",name:"DDU-GKY"},
        {id:3,img:"/images/parteners/mepma.png",name:"MEPMA AP"},
        {id:4,img:"/images/parteners/nsdc.png",name:"NSDC"},
        {id:5,img:"/images/parteners/PM.png",name:"PM VISHWAKARMA"},
        {id:6,img:"/images/parteners/pmkvy.png",name:'PMKVY'},
        {id:7,img:'/images/parteners/S.jpeg',name:"GRAMA SACHIVALAYAM TRANNINGS "},
        {id:8,img:"/images/parteners/sc.png",name:"Andhra Pradesh Scheduled Castes "},
        {id:9,img:"/images/parteners/SEEDAP.png",name:"SEEDAP"},
        {id:10,img:"/images/parteners/ssdc.jpeg",name:"APSSDC"}
    ]


    const data1 = [
        {id:1,numbers:"40,000",tag:"students successfully trained",icon:<PiStudentFill/>},
        {id:2,numbers:"9",tag:"training centres",icon:<BiSolidInstitution/>},
        {id:3,numbers:"50",tag:"expert faculties",icon:<GrUserExpert/>}
    ]
  return (
    <><div className=' h-[100px] w-screen text-center bg-gradient-to-r from-[#ffffff] via-[#3a0741] to-[#fff]  text-white text-[25px] py-3  font-bold'><h1 className='border-b-2 border-yellow-200 inline'>OUR  TRAINING PARTNERS</h1></div>
    <div className='h-[40vh] min-w-screen  bg-gradient-to-r from-[#ffffff] via-[#3a0741] to-[#fff]  flex items-center  gap-4 px-8 py-2'>
        {data.map((item,idx)=>(
            <div className='h-[200px] w-[400px] bg-white -rotate-3 rounded-md flex flex-col items-center py-4 hover:rotate-0 transition-all'><img src={item.img} alt="" className='object-contain h-[60%] w-[60%]' /><br /><h1 className='text-center '>{item.name}</h1></div>
        ))}
      
    </div>
    <div className='h-[30vh] w-screen bg-gradient-to-r from-[#ffffff] via-[#3a0741] to-[#fff] flex justify-center items-center gap-[30px]'>
        {data1.map(item=>(
            <div className='hover:scale-105 transition-all h-[200px] w-[400px] bg-white/50 backdrop-blur-xl capitalize text-black text-[20px] rounded-3xl font-bold flex flex-col items-center justify-center'>
               <p className='text-black font-serif text-[30px]'>{item.icon}</p> <h1 className='text-[20px]'>{item.numbers}</h1>
            <h1>{item.tag}</h1></div>
        ))}
      </div></>
  )
}

export default Parteners
