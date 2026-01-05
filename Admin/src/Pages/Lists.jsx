import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import { authdatacontext } from '../Context/AuthContext'
import axios from 'axios'

const Lists = () => {
  const [list,setlist] = useState([])
  const {serverurl} = useContext(authdatacontext)
  const fetchlist=async()=>{
    try{
   let result = await axios.get(`${serverurl}/api/product/list`)
   console.log(result)
   setlist(result.data)
    }catch(err){
  console.log(err)
    }
  }
  useEffect(()=>{
   fetchlist()
  },[])
  const deletelist=async(id)=>{
    try{
   let result = await axios.post(`${serverurl}/api/product/deleteproduct/${id}`,{},{withCredentials:true})
   if(result.data){
    fetchlist()
   }else{
    console.log("delete not happed")
   }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='w-full min-h-[100vh] overflow-hidden bg-[#000000cb] text-black'>
<Nav/>
<Sidebar/>
    <div className='w-[80%] h-[100%] lg:ml-[320px] md:ml-[250px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[165px]  sm:ml-[200px]'>
      <div className='w-[400px] h-[50px] text-[20px] md:text-[40px] mb-[20px] text-white mt-[60px]'>
       All List Products
      </div>
      
{list?.length>0?(
        list.map((item,index)=>(
<div className='w-[75%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px] 'key={index}>
  <img src={item.image1} alt="" className='w-[30%] md:w-[120px] h-[90%] rounded-lg'/>
  <div className='w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px] '>
     <div className='w-[100%] md:text-[20px] text-[15px] text-[#bef0f3] '>
   {item.name}
     </div>
     <div className='md:text-[17px] text-[15px] text-[#bef3da]'>
       {item.category}
     </div>
     <div className='md:text-[17px] text-[15px] text-[#bef3da]'>
       {item.price}Rs
     </div>
  </div>
  <div className='w-[10%] h-[100%] flex items-center justify-center text-white'>
    <span className='w-[35px] h-[30%] flex items-center justify-center rounded-md md:hover:bg-red-800 md:hover:text-black cursor-pointer hover:text-red-400'onClick={()=>deletelist(item._id)}>X</span>
  </div>
</div>
        ))
      ):(
        <div className='text-white text-lg' >NO products available</div>
      )}
      
    </div>
    </div>
  )
}

export default Lists
