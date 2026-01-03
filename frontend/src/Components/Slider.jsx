import React, { useEffect, useState } from 'react'
import hoodie from "../assets/hoodie.avif"
import jeans from "../assets/jeans.avif"
import kurta from "../assets/kurta.avif"
import suit from "../assets/suit.avif"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
const Slider = () => {
          const [count,setcount] = useState(0);
          const imgarr=[
                    hoodie,jeans,kurta,suit
          ]
          const back=()=>{
             if(count == 0){
                    setcount(3)
             }else{
                    setcount(count-1)
             }
          }
          const forward=()=>{
                    if(count == 3){
                              setcount(1)
                    }else{
                              setcount(count+1)
                    }
          }
          useEffect(()=>{
                    let interval = setInterval(() => {
                              setcount(prev=>(prev===3?0:prev+1))
                    }, 3000);
                    return ()=>clearInterval(interval)
          },[])
  return (
    <div className='w-[100%] h-[200px] border relative sm:h-[300px]'>
     <img src={imgarr[count]} alt="" className=' w-full h-full object-cover'/>
     <FaArrowLeft className='absolute top-[50%] left-2 text-[30px]  bg-white' onClick={back}/>
     <FaArrowRight className='absolute top-[50%] right-2 text-[30px] bg-white' onClick={forward}/>
    </div>
  )
}

export default Slider