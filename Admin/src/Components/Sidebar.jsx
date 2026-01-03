import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate= useNavigate()
  return (
    <div className='w-[25%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0'>
      <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>
          <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-300 border-r-0 px-3 py-2 cursor-pointer hover:bg-[aqua]'onClick={()=>navigate("/add")}>
            <IoMdAddCircleOutline className='w-[20px] h-[20px] text-white'/>
          <p className='hidden md:block text-white'>Add Items</p>
          </div>
          <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-300 border-r-0 px-3 py-2 cursor-pointer hover:bg-[aqua]'onClick={()=>navigate("/lists")}>
            <FaRegListAlt  className='w-[20px] h-[20px] text-white'/>
          <p className='hidden md:block text-white'>List Items</p>
          </div>
          <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-300 border-r-0 px-3 py-2 cursor-pointer hover:bg-[aqua]'onClick={()=>navigate("/orders")}>
            <MdBorderColor className='w-[20px] h-[20px] text-white'/>
          <p className='hidden md:block text-white'>View Orders</p>
          </div>
      </div>
      </div>
  )
}

export default Sidebar