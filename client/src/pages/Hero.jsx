import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";

const Hero = ({scrollToSection, sectionRefs}) => {
  return (
    <div className='min-h-screen w-screen bg-gradient-to-r from-[#000000] via-[#46154d] to-[#000] flex'>
      <div className='h-screen w-[50vw]  relative flex flex-col justify-center px-8 gap-3'>
        <h1 className='font-bold text-[30px] text-[#ffffff]'>SKILL UP WITH <span className='text-[#f79aff]'> KK COMPUTER</span></h1>
        <h1 className='text-[60px] font-serif text-white  bg-white/10'>Empowering the Next Generation Through Digital Education</h1>
        <p className='text-[20px] text-white '>Certified courses in Tally, Python, MS Office, and more. Start your digital journey with expert trainers and job-ready skills.</p>
        <img src="/images/medal.png" className='absolute h-[20%] w-[20%] right-0 bottom-[30%]' alt="" />
      </div>
       <div className='h-screen w-[50vw] relative'>
       <div className='h-[80%] w-full absolute top-[10%]'>
        <div className='h-[80%] w-full  p-10'> <img src="/images/student.png" alt="" /> </div>
        <div className='h-[20%] w-full flex justify-center items-start  gap-3 font-serif'> <button className='gradient-btn1 px-3 py-2 bg-purple-400 rounded-full ' onClick={() => scrollToSection(sectionRefs.courses)} >exlore courses</button><a href="https://docs.google.com/forms/d/1vvABdxAMXTsMao7LRwb-cxZ6wueevJ48UwCDQbdMSeQ/edit"> <button className='gradient-btn px-3 py-2 rounded-full bg-white'>enroll now</button></a></div>
       </div>
       </div>
     <a href="https://wa.me/9963647799">  <button className='fixed bottom-3 right-6 text-[50px] z-30 text-[#66ff6b]'><IoLogoWhatsapp/></button></a>
     <button className='fixed bottom-3 right-20 text-[40px] z-30 text-[#6f59ff] bg-white rounded-full py-1 px-1' onClick={() => scrollToSection(sectionRefs.hero)} ><FaArrowUpLong/></button>
    </div>
  )
}

export default Hero
