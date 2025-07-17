import React from 'react'
import { PiStudent } from 'react-icons/pi';
import { VscCircleFilled } from "react-icons/vsc";
const Popular = () => {

    const pricecard = [
        {name:"MS Office Comprehensive Course for Beginners",img:"/images/courses/off.png",day:"45 days",enrolled:"30"},
        {name:"Tally ERP 9 Training for Beginners",day:"45 days", enrolled:"30",img:"/images/courses/TALLY.png"},
        {name:"Desktop Publishing (DTP)",day:"45 days",enrolled:"30",img:"/images/courses/DTP.png"},
        {name:"Adobe Photoshop",day:"45 days",enrolled:"30",img:"/images/courses/ps.png"}
    ]
  return (
    <>
    
     <div className="h-[100px] w-screen bg-gradient-to-r from-[#000000] via-[#46154d] to-[#000] text-center text-white text-[25px] py-3  font-bold"><h1 className="border-b-2 border-yellow-200 inline">Our Courses</h1></div>
    <div className='min-h-[100vh] w-screen bg-gradient-to-br from-[#351467] via-[#35013c] to-[#8f37a1] grid grid-cols-3 gap-[30px] px-3 py-2'>

        {pricecard.map((item,idx)=>(
            <div className='h-[500px] w-[360px] bg-[#24123266] text-white mx-auto rounded-xl'>
                <h1 className='text-center text-[20px]'>{item.name}</h1>
            <div className='h-[30%] w-full bg-[#dfd69b]  relative flex justify-center font-bold px-1'><img src={item.img} className='object-cover h-[90%]' alt="" /></div>
            <div className='h-[30%] w-full py-8 flex justify-start flex-col font-bold px-1'>duration<p className='text-lime-400'>{item.day}</p> <br />Students <p className='text-lime-400'>{item.enrolled}</p> </div>
            <div className='h-[40%] w-full flex items-center justify-around'> <b className='text-[40px]'>₹4500</b> <button className='py-2 px-3 rounded-full bg-[#dfd69b]'>Start now</button></div>
            </div>
        ))}

      
    </div>
        </>
  )
}

export default Popular
