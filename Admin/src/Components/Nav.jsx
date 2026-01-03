import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authdatacontext } from '../Context/AuthContext'
import { admindatacontext } from '../Context/Usercontext'

const Nav = () => {
  const navigate = useNavigate()
  let {serverurl} = useContext(authdatacontext)
  const {getadmin,setadmindata} = useContext(admindatacontext) 
  const logout=async()=>{
    try{
   const result = await axios.get(`${serverurl}/api/auth/logout`,{withCredentials:true})
   console.log(result.data)
   setadmindata(null)
   navigate("/login")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfaf8ec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>
        <div className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer'onClick={()=>navigate("/")}>
          <h1 className='text-[25px] font-medium' >ShopSwift</h1>
        </div>
        <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[black] text-white py-[10px] px-[20px] rounded-2xl' onClick={logout}>LogOut</button>
    </div>
  )
}

export default Nav