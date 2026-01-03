import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { useContext } from 'react';
import { userdatacontext } from '../../Context/User';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import axios from 'axios';
import { IoHomeOutline } from "react-icons/io5";
import { Authdatacontext } from '../../Context/authcontext';
import { MdOutlineContactPhone } from "react-icons/md";
import { Shopdata } from '../../Context/Shopcontext';
import { useSelector } from 'react-redux';
const Nav = () => {
          let {curuser,getcuruser} = useContext(userdatacontext);
          let {cartitems} = useSelector(state=>state.cart)
          let {showsearch,setshowsearch,search,setsearch} = useContext(Shopdata)
          let [showprofile,setshowprofile] = useState(false)
          let {serverurl} = useContext(Authdatacontext)
          let navigate = useNavigate()
          const handlelogout=async()=>{
                    try{
           const result = await axios.get(`${serverurl}/api/auth/logout`,{
                    withCredentials:true
           })
           console.log(result.data)
           getcuruser()
                    }catch(err){
                              console.log(err)
                    }
          }
  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfaf8ec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>
          <div className='w-[30%]'>
          <h1 className='text-[20px] font-semibold'>ShopSwift</h1>
          </div>
          <div className='w-[40%] hidden lg:flex'>
        <ul className='flex items-center justify-center gap-[19px] text-white'>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'onClick={()=>navigate("/")}>HOME</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'onClick={()=>navigate("/collections")}>COLLECTIONS</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'onClick={()=>navigate("/about")}>ABOUT</li>
          

          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'onClick={()=>navigate("/contact")}>CONTACT</li>
        </ul>
          </div>
          <div className='w-[30%] flex items-center justify-end gap-[20px] mr-3'>
            <IoSearch className='w-[30px] h-[30px] text-[#000000] cursor-pointer 'onClick={()=>{setshowsearch(prev=>!prev);navigate("/collections")}}/>
            
            {!curuser && <FaRegUserCircle className='w-[30px] h-[30px] text-[#000000] cursor-pointer 'onClick={()=>setshowprofile(prev=>!prev)}/>}
            {curuser && 
            <div className='w-[30px] h-[30px] bg-[black] rounded-full flex items-center justify-center text-white'onClick={()=>setshowprofile(prev=>!prev)}>
                    {curuser?.email?.slice(0,1)}
                    </div>}
            <BsCartCheck className='w-[30px] h-[30px] text-[#000000] cursor-pointer hidden md:block' onClick={()=>navigate("/cartitems")}/>
            <p className='absolute w-[18px] h-[18px] top-0  rounded-full right-[30px] text-[20px] hidden md:block mr-3'>{cartitems.length}</p>
          </div>
          {showsearch && <div className='w-[100%] h-[80px]  absolute top-[100%] left-0 right-0 flex items-center justify-center'>
                  <input type="text" className='lg:w-[50%] w-[80%] h-[60px] bg-[white] rounded-[30px] px-[50px]placeholder:text-[black] text-black text-[18px] pl-2 border-1' placeholder='enter items here...' onChange={(e)=>setsearch(e.target.value)} value={search}/>  
          </div>}
          {showprofile && <div className='absolute w-[220px] h-[200px] 
          bg-[#000000b0] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10'>
               <ul className='w-[100%] h-[100%] flex items-center justify-around flex-col text-[17px] py-[10px] text-white'>
                    {curuser && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'onClick={()=>{handlelogout();setshowprofile(false)}}>LOGOUT</li>}
                    {!curuser && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'onClick={()=>{navigate("/login");setshowprofile(false)}}>LOGIN</li>}
                    
                    
                    <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'onClick={()=>{navigate("/orders");setshowprofile(false)}}>ORDERS</li>
                    <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px]  py-[10px] cursor-pointer'onClick={()=>{navigate("/about");setshowprofile(false)}}>ABOUT</li>
               </ul>
          </div>}
          <div className='w-[100vw] h-[80px] flex items-center justify-between px-[45px] fixed bottom-0 left-0 bg-[#191818] md:hidden'>
          <button className='text-white flex items-center justify-center flex-col gap-[2px] 'onClick={()=>navigate("/")}><IoHomeOutline className='w-[25px] h-[25px] text-white md:hidden'/>Home</button>
          <button className='text-white flex items-center justify-center flex-col gap-[2px] 'onClick={()=>navigate("/collections")}><MdOutlineCollectionsBookmark className='w-[25px] h-[25px] text-white md:hidden'/>Collections</button>
          <button className='text-white flex items-center justify-center flex-col gap-[2px] 'onClick={()=>navigate("/contact")}>
            <MdOutlineContactPhone className='w-[35px] h-[35px]text-white md:hidden'/>Contact</button>
          <button className='text-white flex items-center justify-center flex-col gap-[2px] ' onClick={()=>navigate("/cartitems")}><BsCartCheck className='w-[25px] h-[25px] text-white md:hidden mr-1'/>Cart</button>
          <p className='absolute  w-[18px] h-[18px] flex items-center justify-center bg-white mx-[35px] py-[2px] text-black font-semibold rounded-full text-[12px] right-[18px] top-[2px]'>{cartitems.length}</p>
          </div>
          </div>
  )      
}

export default Nav