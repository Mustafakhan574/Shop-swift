import React from 'react'
import Title from './Title'
import { RiExchangeLine } from "react-icons/ri";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
const Ourpolicy = () => {
  return (
    <div className='w-[100vw] min-h-[100vh] md:min-h-[70vh] flex items-center justify-start flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pb-[30px]'>
     <div className='h-[8%] W-[100%] text-center mt-[60px] '>
     <Title text1={"OUR"} text2={"POLICY"}/>
     <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-400'>Customer-Friendly Policy Committed to Your Satisfaction and Safity.</p>
     </div>
     <div className='w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px] mt-[30px]'>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center flex-col gap-[10px]'>
            <RiExchangeLine className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
            <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7] '>Easy Exchange Policy</p>
            <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Exchange Made Easy Quick,Simple and Customer-Friendly Process</p>
        </div>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center flex-col gap-[10px]'>
            <TbRosetteDiscountCheck  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
            <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7] '>7 Days Return Policy</p>
            <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Shop with Condition 7 Days return Guarantee.</p>
        </div>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center flex-col gap-[10px]'>
            <BiSupport className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
            <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7] '>Best Customer Support</p>
            <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Trusted Customer Support Your Satisfaction is Our Priority.</p>
        </div>
     </div>
    </div>
  )
}

export default Ourpolicy