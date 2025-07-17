import React from 'react'


const Nav = ({scrollToSection, sectionRefs }) => {
  return (
    <div className='h-[80px] w-[90vw] absolute left-[5%] top-5  bg-gradient-to-br from-[#351467] via-[#35013c] to-[#8f37a1] rounded-full z-40   flex overflow-hidden'>
      <div className='h-full w-[20%] flex justify-center items-center text-white text-[80px] '><img src="/images/final1.png" className='object-cover py-3 mt-6 w-[90%]' alt="" /></div>
      <div className='h-full w-[60%] flex  items-center  list-none text-white justify-evenly'>
      
 <button 
            onClick={() => scrollToSection(sectionRefs.hero)} 
            className="hover:text-purple-200 transition"
          >
            Home
          </button>
  <button 
            onClick={() => scrollToSection(sectionRefs.about)} 
            className="hover:text-purple-200 transition"
          >
            About
          </button>
 <button 
            onClick={() => scrollToSection(sectionRefs.courses)} 
            className="hover:text-purple-200 transition"
          >
            Courses
          </button>
  <li>Skill Development Course</li>
  <li>Contact</li>
      </div>
      <div className='h-full w-[20%]  flex items-center justify-evenly px-5'>
          <button className='px-3 py-1 bg-[#dcd39e] hover:bg-yellow-400 text-black rounded-full border-1 border-white'>Login</button>

       <a href="https://docs.google.com/forms/d/1vvABdxAMXTsMao7LRwb-cxZ6wueevJ48UwCDQbdMSeQ/edit"> <button className='px-4 py-2  bg-[#de71ff] text-black rounded-full hover:bg-purple-500 transition-all capitalize'>Join now</button></a>
      </div>
      
    </div>
  )
}

export default Nav
