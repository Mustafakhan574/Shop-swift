import React from 'react'
import Title from '../Components/Title'

const About = () => {
  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
   <Title text1={'ABOUT'} text2={"US"}/>
   <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
     <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
     <p className='w-[100%] min-h-[50px] text-white flex flex-wrap items-center justify-center text-[20px] px-[10px] text-semibold'>Our goal is to make shopping easy, fun, and reliable by offering products you’ll love and trust.</p>
     </div>
   </div>
    </div>
  )
}

export default About